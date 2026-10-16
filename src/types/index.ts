/**
 * SAT Math Diagnostic & Adaptive Learning Platform
 * Core TypeScript Data Definitions
 */

export type Language = 'en' | 'kk' | 'ru' | 'id';

export type SATDomainId = 'algebra' | 'advanced_math' | 'problem_solving' | 'geometry_trig';

export type DifficultyLevel = 'foundation' | 'developing' | 'proficient' | 'advanced';

export type MasteryStatus = 'strong' | 'developing' | 'needs_attention' | 'insufficient_evidence';

export type QuestionType = 'multiple_choice' | 'student_produced'; // Grid-in

export type DiagnosticMode = 'standard_diagnostic' | 'english_challenge';

export type ErrorCategory = 
  | 'conceptual_misunderstanding'
  | 'algebraic_manipulation'
  | 'arithmetic_calculation'
  | 'incorrect_formula'
  | 'graph_data_interpretation'
  | 'word_problem_comprehension'
  | 'english_vocabulary'
  | 'careless_error'
  | 'unknown';

export interface Skill {
  id: string;
  domainId: SATDomainId;
  topic: string;
  name: string;
  description: {
    en: string;
    kk: string;
    ru: string;
    id: string;
  };
  prerequisites: string[]; // skill IDs
  importance: 'critical' | 'high' | 'medium';
}

export interface GlossaryTerm {
  id: string;
  term: string; // English term
  translations: {
    kk: string;
    ru: string;
    id: string;
  };
  simpleDefinitionEn: string;
  studentExplanation: {
    en: string;
    kk: string;
    ru: string;
    id: string;
  };
  exampleUsage: string;
  relatedSkillIds: string[];
}

export interface QuestionChoice {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
  explanation: {
    en: string;
    kk: string;
    ru: string;
    id: string;
  };
}

export interface Question {
  id: string;
  skillId: string;
  secondarySkillIds?: string[];
  domainId: SATDomainId;
  subtopic: string;
  difficulty: DifficultyLevel;
  type: QuestionType;
  prompt: {
    en: string;
    kk: string;
    ru: string;
    id: string;
  };
  svgDiagram?: string; // Optional embedded SVG diagram
  choices?: QuestionChoice[]; // For MCQ
  correctAnswer: string; // "A", "B", "C", "D" or string of number/fraction e.g. "3/4", "0.75"
  acceptableNumericAnswers?: string[]; // e.g. ["0.75", ".75", "3/4"]
  workedSolution: {
    en: string[];
    kk: string[];
    ru: string[];
    id: string[];
  };
  conceptExplanation: {
    en: string;
    kk: string;
    ru: string;
    id: string;
  };
  hints: {
    en: string[];
    kk: string[];
    ru: string[];
    id: string[];
  };
  glossaryTermIds: string[];
  estimatedSeconds: number;
}

export interface StudentProfile {
  id: string;
  preferredLanguage: Language;
  currentScore?: number | null; // e.g. 520 or null for "I don't know"
  targetScore?: number | null; // e.g. 700 or null
  examDate?: string | null; // "YYYY-MM-DD" or null
  weeklyStudyHours: number; // e.g. 4
  preparationExperience: 'beginner' | 'some_prep' | 'experienced';
  onboardingCompleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AnswerSubmission {
  questionId: string;
  skillId: string;
  domainId: SATDomainId;
  difficulty: DifficultyLevel;
  submittedAnswer: string;
  isCorrect: boolean;
  timeSpentSeconds: number;
  usedTranslation: boolean;
  usedGlossary: boolean;
  errorCategory?: ErrorCategory;
  timestamp: string;
  mode: DiagnosticMode;
}

export interface DiagnosticSession {
  id: string;
  startedAt: string;
  completedAt?: string;
  mode: DiagnosticMode;
  questionsAnswered: AnswerSubmission[];
  currentQuestionIndex: number;
  assignedQuestionIds: string[];
  isCompleted: boolean;
  isPaused: boolean;
}

export interface SkillMasteryRecord {
  skillId: string;
  status: MasteryStatus;
  attemptsCount: number;
  correctCount: number;
  accuracy: number;
  testedDifficulties: DifficultyLevel[];
  evidenceStrength: 'high' | 'medium' | 'low';
  lastAssessedAt: string;
  commonErrors: ErrorCategory[];
  recommendedAction: string;
}

export interface DomainScoreSummary {
  domainId: SATDomainId;
  totalQuestions: number;
  correctQuestions: number;
  accuracy: number;
  masteryLevel: 'foundation' | 'developing' | 'proficient' | 'advanced';
}

export interface DiagnosticReport {
  id: string;
  sessionId: string;
  generatedAt: string;
  isProvisional: boolean; // if student stopped early or budget ran out
  totalQuestions: number;
  totalCorrect: number;
  accuracy: number;
  durationSeconds: number;
  translationAssistanceCount: number;
  domainSummaries: Record<SATDomainId, DomainScoreSummary>;
  skillMasteries: Record<string, SkillMasteryRecord>;
  strengths: string[]; // skill IDs
  priorityGaps: string[]; // skill IDs
  languageNotes?: string;
}

export interface StudyPlanItem {
  id: string;
  skillId: string;
  domainId: SATDomainId;
  priority: 1 | 2 | 3; // 1 = Foundational, 2 = High-Value, 3 = Advanced
  title: string;
  learningObjective: string;
  whyNeeded: string;
  estimatedMinutes: number;
  scheduledWeek: number; // Week 1, Week 2, etc.
  isCompleted: boolean;
  completedAt?: string;
  isPostponed?: boolean;
}

export interface StudyPlan {
  id: string;
  generatedAt: string;
  weeklyTargetHours: number;
  totalWeeks: number;
  items: StudyPlanItem[];
}

export interface LessonContent {
  skillId: string;
  title: {
    en: string;
    kk: string;
    ru: string;
    id: string;
  };
  learningObjective: {
    en: string;
    kk: string;
    ru: string;
    id: string;
  };
  conceptSummary: {
    en: string[];
    kk: string[];
    ru: string[];
    id: string[];
  };
  keyFormulas?: string[];
  glossaryTermIds: string[];
  workedExample: {
    problemText: {
      en: string;
      kk: string;
      ru: string;
      id: string;
    };
    steps: {
      en: string[];
      kk: string[];
      ru: string[];
      id: string[];
    };
    finalAnswer: string;
    strategyTakeaway: {
      en: string;
      kk: string;
      ru: string;
      id: string;
    };
  };
  guidedPracticeQuestionId: string;
  independentPracticeQuestionIds: string[];
}

export interface PracticeAttempt {
  id: string;
  skillId: string;
  questionId: string;
  submittedAnswer: string;
  isCorrect: boolean;
  hintsUsedCount: number;
  timeSpentSeconds: number;
  timestamp: string;
}

export interface AppStorageState {
  version: number;
  profile: StudentProfile;
  activeSession: DiagnosticSession | null;
  diagnosticHistory: DiagnosticReport[];
  latestReport: DiagnosticReport | null;
  studyPlan: StudyPlan | null;
  practiceHistory: PracticeAttempt[];
  skillMasteryOverrides?: Record<string, SkillMasteryRecord>;
}
