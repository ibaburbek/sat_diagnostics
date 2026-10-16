import { QUESTION_BANK, QUESTION_MAP } from '../data/questions';
import { SKILL_MAP, SKILLS_TAXONOMY } from '../data/skills';
import {
  AnswerSubmission,
  DifficultyLevel,
  Question,
  SATDomainId,
} from '../types';

export interface AdaptiveEngineConfig {
  minQuestions: number;
  maxQuestions: number;
  domainTargetCount: Record<SATDomainId, number>; // Minimum target questions per domain
}

export const DEFAULT_ADAPTIVE_CONFIG: AdaptiveEngineConfig = {
  minQuestions: 10,
  maxQuestions: 14,
  domainTargetCount: {
    algebra: 3,
    advanced_math: 3,
    problem_solving: 2,
    geometry_trig: 2,
  },
};

const DIFFICULTY_ORDER: DifficultyLevel[] = [
  'foundation',
  'developing',
  'proficient',
  'advanced',
];

/**
 * Returns the next difficulty step based on correctness.
 */
export function getNextDifficulty(
  current: DifficultyLevel,
  isCorrect: boolean
): DifficultyLevel {
  const currentIndex = DIFFICULTY_ORDER.indexOf(current);
  if (isCorrect) {
    const nextIndex = Math.min(currentIndex + 1, DIFFICULTY_ORDER.length - 1);
    return DIFFICULTY_ORDER[nextIndex];
  } else {
    const nextIndex = Math.max(currentIndex - 1, 0);
    return DIFFICULTY_ORDER[nextIndex];
  }
}

/**
 * Counts how many questions have been answered per domain so far.
 */
function getDomainCounts(answers: AnswerSubmission[]): Record<SATDomainId, number> {
  const counts: Record<SATDomainId, number> = {
    algebra: 0,
    advanced_math: 0,
    problem_solving: 0,
    geometry_trig: 0,
  };
  for (const a of answers) {
    counts[a.domainId] = (counts[a.domainId] || 0) + 1;
  }
  return counts;
}

/**
 * Identifies the domain most in need of evidence.
 */
export function selectNextDomain(answers: AnswerSubmission[], config = DEFAULT_ADAPTIVE_CONFIG): SATDomainId {
  const counts = getDomainCounts(answers);
  const domains: SATDomainId[] = [
    'algebra',
    'advanced_math',
    'problem_solving',
    'geometry_trig',
  ];

  // First check if any domain is below target
  for (const dom of domains) {
    if (counts[dom] < config.domainTargetCount[dom]) {
      return dom;
    }
  }

  // Otherwise pick domain with fewest answered
  let minDomain = domains[0];
  let minCount = counts[minDomain];
  for (const dom of domains) {
    if (counts[dom] < minCount) {
      minCount = counts[dom];
      minDomain = dom;
    }
  }
  return minDomain;
}

/**
 * Core adaptive question selector.
 * Evaluates student history and picks the next most informative question.
 */
export function selectNextQuestion(
  answersSoFar: AnswerSubmission[],
  config = DEFAULT_ADAPTIVE_CONFIG
): Question | null {
  if (answersSoFar.length >= config.maxQuestions) {
    return null; // Budget reached
  }

  const answeredIds = new Set(answersSoFar.map((a) => a.questionId));
  const targetDomain = selectNextDomain(answersSoFar, config);

  // Analyze recent performance in target domain or overall
  const domainAnswers = answersSoFar.filter((a) => a.domainId === targetDomain);
  let targetDifficulty: DifficultyLevel = 'developing';

  if (domainAnswers.length > 0) {
    const lastDomainAnswer = domainAnswers[domainAnswers.length - 1];
    targetDifficulty = getNextDifficulty(
      lastDomainAnswer.difficulty,
      lastDomainAnswer.isCorrect
    );

    // If student missed previous question, look for prerequisite skill question
    if (!lastDomainAnswer.isCorrect) {
      const skill = SKILL_MAP.get(lastDomainAnswer.skillId);
      if (skill && skill.prerequisites.length > 0) {
        const prereqId = skill.prerequisites[0];
        const prereqQuestion = QUESTION_BANK.find(
          (q) =>
            q.skillId === prereqId &&
            !answeredIds.has(q.id) &&
            (q.difficulty === 'foundation' || q.difficulty === 'developing')
        );
        if (prereqQuestion) {
          return prereqQuestion;
        }
      }
    }
  } else if (answersSoFar.length === 0) {
    // Initial calibration: start at foundation / developing
    targetDifficulty = 'foundation';
  }

  // Filter available candidate questions in the target domain
  let candidates = QUESTION_BANK.filter(
    (q) =>
      q.domainId === targetDomain &&
      !answeredIds.has(q.id) &&
      q.difficulty === targetDifficulty
  );

  // If no candidates at exact difficulty, try adjacent difficulties
  if (candidates.length === 0) {
    candidates = QUESTION_BANK.filter(
      (q) => q.domainId === targetDomain && !answeredIds.has(q.id)
    );
  }

  // If target domain is exhausted, pick from any domain
  if (candidates.length === 0) {
    candidates = QUESTION_BANK.filter((q) => !answeredIds.has(q.id));
  }

  if (candidates.length === 0) {
    return null; // Whole bank exhausted
  }

  // Pick candidate with the least frequently tested skill
  const skillAttemptCounts: Record<string, number> = {};
  for (const a of answersSoFar) {
    skillAttemptCounts[a.skillId] = (skillAttemptCounts[a.skillId] || 0) + 1;
  }

  candidates.sort((a, b) => {
    const aCount = skillAttemptCounts[a.skillId] || 0;
    const bCount = skillAttemptCounts[b.skillId] || 0;
    return aCount - bCount;
  });

  return candidates[0];
}

/**
 * Checks if the adaptive stopping criteria have been satisfied.
 */
export function shouldStopAssessment(
  answers: AnswerSubmission[],
  config = DEFAULT_ADAPTIVE_CONFIG
): boolean {
  if (answers.length >= config.maxQuestions) return true;
  if (answers.length < config.minQuestions) return false;

  // If minQuestions reached, check if all 4 domains have met their target
  const counts = getDomainCounts(answers);
  const allDomainsCovered = (
    Object.keys(config.domainTargetCount) as SATDomainId[]
  ).every((dom) => counts[dom] >= config.domainTargetCount[dom]);

  return allDomainsCovered;
}
