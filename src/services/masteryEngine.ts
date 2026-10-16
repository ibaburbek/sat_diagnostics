import { SKILL_MAP, SKILLS_TAXONOMY } from '../data/skills';
import {
  AnswerSubmission,
  DiagnosticReport,
  DomainScoreSummary,
  ErrorCategory,
  MasteryStatus,
  SATDomainId,
  SkillMasteryRecord,
} from '../types';

/**
 * Computes evidence-based skill mastery from actual student answers.
 */
export function computeSkillMastery(
  skillId: string,
  answers: AnswerSubmission[]
): SkillMasteryRecord {
  const skillAnswers = answers.filter((a) => a.skillId === skillId);
  const attemptsCount = skillAnswers.length;
  const correctCount = skillAnswers.filter((a) => a.isCorrect).length;
  const accuracy = attemptsCount > 0 ? Math.round((correctCount / attemptsCount) * 100) : 0;
  const testedDifficulties = Array.from(new Set(skillAnswers.map((a) => a.difficulty)));

  const commonErrors: ErrorCategory[] = [];
  for (const a of skillAnswers) {
    if (!a.isCorrect && a.errorCategory && !commonErrors.includes(a.errorCategory)) {
      commonErrors.push(a.errorCategory);
    }
  }

  // Determine evidence strength
  let evidenceStrength: 'high' | 'medium' | 'low' = 'low';
  if (attemptsCount >= 3) {
    evidenceStrength = 'high';
  } else if (attemptsCount >= 2) {
    evidenceStrength = 'medium';
  } else if (attemptsCount === 1) {
    evidenceStrength = 'low';
  }

  // Determine mastery status based on deterministic rules
  let status: MasteryStatus = 'insufficient_evidence';
  let recommendedAction = 'Take targeted practice to establish mastery baseline.';

  if (attemptsCount === 0) {
    status = 'insufficient_evidence';
    recommendedAction = 'Not yet assessed. Practice fundamental problems.';
  } else if (attemptsCount === 1) {
    if (skillAnswers[0].isCorrect) {
      status = 'developing';
      recommendedAction = 'Confirmed initial correct answer. Complete 1 more question for strong mastery.';
    } else {
      status = 'needs_attention';
      recommendedAction = 'Initial misconception observed. Review key concept summary.';
    }
  } else {
    // 2 or more attempts
    const hasProficientOrAdvanced = skillAnswers.some(
      (a) => a.difficulty === 'proficient' || a.difficulty === 'advanced'
    );
    const missedFoundation = skillAnswers.some(
      (a) => a.difficulty === 'foundation' && !a.isCorrect
    );

    if (accuracy >= 80 && hasProficientOrAdvanced && !missedFoundation) {
      status = 'strong';
      recommendedAction = 'Solid conceptual command demonstrated. Maintain with occasional mixed review.';
    } else if (accuracy >= 50) {
      status = 'developing';
      recommendedAction = 'Good progress shown. Focus on complex multi-step variations and timing.';
    } else {
      status = 'needs_attention';
      recommendedAction = 'Foundational gap identified. Work through guided lesson and step-by-step examples.';
    }
  }

  return {
    skillId,
    status,
    attemptsCount,
    correctCount,
    accuracy,
    testedDifficulties,
    evidenceStrength,
    lastAssessedAt: new Date().toISOString(),
    commonErrors,
    recommendedAction,
  };
}

/**
 * Generates the full DiagnosticReport from an assessment session.
 */
export function generateDiagnosticReport(
  sessionId: string,
  answers: AnswerSubmission[],
  durationSeconds: number
): DiagnosticReport {
  const totalQuestions = answers.length;
  const totalCorrect = answers.filter((a) => a.isCorrect).length;
  const accuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const translationAssistanceCount = answers.filter((a) => a.usedTranslation || a.usedGlossary).length;

  // Domain performance summaries
  const domainSummaries: Record<SATDomainId, DomainScoreSummary> = {
    algebra: { domainId: 'algebra', totalQuestions: 0, correctQuestions: 0, accuracy: 0, masteryLevel: 'foundation' },
    advanced_math: { domainId: 'advanced_math', totalQuestions: 0, correctQuestions: 0, accuracy: 0, masteryLevel: 'foundation' },
    problem_solving: { domainId: 'problem_solving', totalQuestions: 0, correctQuestions: 0, accuracy: 0, masteryLevel: 'foundation' },
    geometry_trig: { domainId: 'geometry_trig', totalQuestions: 0, correctQuestions: 0, accuracy: 0, masteryLevel: 'foundation' },
  };

  const domainAnswers: Record<SATDomainId, AnswerSubmission[]> = {
    algebra: [],
    advanced_math: [],
    problem_solving: [],
    geometry_trig: [],
  };

  for (const a of answers) {
    if (domainSummaries[a.domainId]) {
      domainAnswers[a.domainId].push(a);
      domainSummaries[a.domainId].totalQuestions += 1;
      if (a.isCorrect) {
        domainSummaries[a.domainId].correctQuestions += 1;
      }
    }
  }

  for (const dom of Object.keys(domainSummaries) as SATDomainId[]) {
    const summary = domainSummaries[dom];
    if (summary.totalQuestions > 0) {
      summary.accuracy = Math.round((summary.correctQuestions / summary.totalQuestions) * 100);
      if (summary.accuracy >= 80) summary.masteryLevel = 'proficient';
      else if (summary.accuracy >= 60) summary.masteryLevel = 'developing';
      else summary.masteryLevel = 'foundation';
    }
  }

  // Skill masteries
  const skillMasteries: Record<string, SkillMasteryRecord> = {};
  const strengths: string[] = [];
  const priorityGaps: string[] = [];

  for (const skill of SKILLS_TAXONOMY) {
    const mastery = computeSkillMastery(skill.id, answers);
    skillMasteries[skill.id] = mastery;

    if (mastery.status === 'strong') {
      strengths.push(skill.id);
    } else if (mastery.status === 'needs_attention') {
      priorityGaps.push(skill.id);
    }
  }

  // If priority gaps is empty, add skills with developing status or lowest accuracy
  if (priorityGaps.length === 0) {
    for (const skill of SKILLS_TAXONOMY) {
      if (skillMasteries[skill.id].status === 'developing') {
        priorityGaps.push(skill.id);
      }
    }
  }

  // Is report provisional? (Fewer than 8 questions or any domain zero questions)
  const isProvisional = totalQuestions < 8 || Object.values(domainSummaries).some((d) => d.totalQuestions === 0);

  return {
    id: `rep_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    sessionId,
    generatedAt: new Date().toISOString(),
    isProvisional,
    totalQuestions,
    totalCorrect,
    accuracy,
    durationSeconds,
    translationAssistanceCount,
    domainSummaries,
    skillMasteries,
    strengths,
    priorityGaps,
    languageNotes: translationAssistanceCount > 0
      ? `Student referenced translations or glossary on ${translationAssistanceCount} questions. Note: Language support does not penalize math mastery assessment.`
      : undefined,
  };
}
