import {
  AppStorageState,
  DiagnosticReport,
  Language,
  PracticeAttempt,
  StudentProfile,
  StudyPlan,
} from '../types';

export const CURRENT_STORAGE_VERSION = 1;
const STORAGE_KEY = 'sat_math_diagnostic_platform_data_v1';

export const DEFAULT_PROFILE: StudentProfile = {
  id: 'student_local_01',
  preferredLanguage: 'en',
  currentScore: null,
  targetScore: 700,
  examDate: null,
  weeklyStudyHours: 4,
  preparationExperience: 'some_prep',
  onboardingCompleted: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const INITIAL_APP_STATE: AppStorageState = {
  version: CURRENT_STORAGE_VERSION,
  profile: DEFAULT_PROFILE,
  activeSession: null,
  diagnosticHistory: [],
  latestReport: null,
  studyPlan: null,
  practiceHistory: [],
};

/**
 * Loads the application state safely from localStorage.
 */
export function loadAppState(): AppStorageState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return INITIAL_APP_STATE;
    }
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') {
      return INITIAL_APP_STATE;
    }

    // Version migration check
    if (parsed.version !== CURRENT_STORAGE_VERSION) {
      // In future versions, run migrations here
      parsed.version = CURRENT_STORAGE_VERSION;
    }

    return {
      version: CURRENT_STORAGE_VERSION,
      profile: { ...DEFAULT_PROFILE, ...(parsed.profile || {}) },
      activeSession: parsed.activeSession || null,
      diagnosticHistory: Array.isArray(parsed.diagnosticHistory) ? parsed.diagnosticHistory : [],
      latestReport: parsed.latestReport || null,
      studyPlan: parsed.studyPlan || null,
      practiceHistory: Array.isArray(parsed.practiceHistory) ? parsed.practiceHistory : [],
      skillMasteryOverrides: parsed.skillMasteryOverrides || {},
    };
  } catch (err) {
    console.error('Error loading app state from localStorage:', err);
    return INITIAL_APP_STATE;
  }
}

/**
 * Saves the application state to localStorage.
 */
export function saveAppState(state: AppStorageState): boolean {
  try {
    const updated = {
      ...state,
      version: CURRENT_STORAGE_VERSION,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch (err) {
    console.error('Error saving app state to localStorage:', err);
    return false;
  }
}

/**
 * Completely resets all progress and returns clean initial state.
 */
export function resetAppProgress(): AppStorageState {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Error clearing localStorage:', err);
  }
  return { ...INITIAL_APP_STATE, profile: { ...DEFAULT_PROFILE, createdAt: new Date().toISOString() } };
}

/**
 * Exports current progress as formatted JSON string.
 */
export function exportProgressJSON(state: AppStorageState): string {
  const exportPayload = {
    exportedAt: new Date().toISOString(),
    schemaVersion: CURRENT_STORAGE_VERSION,
    platform: 'Digital SAT Math Diagnostic & Personalized Learning',
    state,
  };
  return JSON.stringify(exportPayload, null, 2);
}

/**
 * Validates and imports student progress from a JSON string.
 */
export function importProgressJSON(jsonString: string): { success: boolean; state?: AppStorageState; error?: string } {
  try {
    const parsed = JSON.parse(jsonString);
    if (!parsed || typeof parsed !== 'object') {
      return { success: false, error: 'Invalid JSON format' };
    }

    const stateToImport = parsed.state || parsed;
    if (!stateToImport.profile) {
      return { success: false, error: 'Missing required student profile data' };
    }

    const cleanState: AppStorageState = {
      version: CURRENT_STORAGE_VERSION,
      profile: { ...DEFAULT_PROFILE, ...stateToImport.profile },
      activeSession: stateToImport.activeSession || null,
      diagnosticHistory: Array.isArray(stateToImport.diagnosticHistory) ? stateToImport.diagnosticHistory : [],
      latestReport: stateToImport.latestReport || null,
      studyPlan: stateToImport.studyPlan || null,
      practiceHistory: Array.isArray(stateToImport.practiceHistory) ? stateToImport.practiceHistory : [],
      skillMasteryOverrides: stateToImport.skillMasteryOverrides || {},
    };

    saveAppState(cleanState);
    return { success: true, state: cleanState };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Failed to parse JSON file' };
  }
}

/**
 * Pre-configured sample student demo profile for teacher evaluation.
 */
export function loadSampleProfile(type: 'beginner' | 'high_scorer'): AppStorageState {
  const now = new Date().toISOString();

  if (type === 'beginner') {
    const profile: StudentProfile = {
      id: 'demo_beginner',
      preferredLanguage: 'en',
      currentScore: 490,
      targetScore: 650,
      examDate: '2026-12-05',
      weeklyStudyHours: 4,
      preparationExperience: 'beginner',
      onboardingCompleted: true,
      createdAt: now,
      updatedAt: now,
    };

    const report: DiagnosticReport = {
      id: `rep_demo_beg_${Date.now()}`,
      sessionId: 'sess_demo_beg',
      generatedAt: now,
      isProvisional: false,
      totalQuestions: 12,
      totalCorrect: 6,
      accuracy: 50,
      durationSeconds: 1420,
      translationAssistanceCount: 4,
      domainSummaries: {
        algebra: { domainId: 'algebra', totalQuestions: 4, correctQuestions: 2, accuracy: 50, masteryLevel: 'foundation' },
        advanced_math: { domainId: 'advanced_math', totalQuestions: 4, correctQuestions: 1, accuracy: 25, masteryLevel: 'foundation' },
        problem_solving: { domainId: 'problem_solving', totalQuestions: 2, correctQuestions: 1, accuracy: 50, masteryLevel: 'foundation' },
        geometry_trig: { domainId: 'geometry_trig', totalQuestions: 2, correctQuestions: 2, accuracy: 100, masteryLevel: 'proficient' },
      },
      skillMasteries: {
        alg_linear_eq_1var: {
          skillId: 'alg_linear_eq_1var',
          status: 'developing',
          attemptsCount: 2,
          correctCount: 1,
          accuracy: 50,
          testedDifficulties: ['foundation', 'developing'],
          evidenceStrength: 'medium',
          lastAssessedAt: now,
          commonErrors: ['algebraic_manipulation'],
          recommendedAction: 'Focus on multi-step equation solving and sign distribution.',
        },
        alg_linear_systems: {
          skillId: 'alg_linear_systems',
          status: 'needs_attention',
          attemptsCount: 2,
          correctCount: 0,
          accuracy: 0,
          testedDifficulties: ['developing', 'proficient'],
          evidenceStrength: 'medium',
          lastAssessedAt: now,
          commonErrors: ['algebraic_manipulation'],
          recommendedAction: 'Review substitution vs elimination methods.',
        },
        adv_quadratics_factoring: {
          skillId: 'adv_quadratics_factoring',
          status: 'needs_attention',
          attemptsCount: 2,
          correctCount: 0,
          accuracy: 0,
          testedDifficulties: ['foundation', 'proficient'],
          evidenceStrength: 'medium',
          lastAssessedAt: now,
          commonErrors: ['conceptual_misunderstanding'],
          recommendedAction: 'Prioritize basic factoring of trinomials.',
        },
        geom_triangles_angles: {
          skillId: 'geom_triangles_angles',
          status: 'strong',
          attemptsCount: 2,
          correctCount: 2,
          accuracy: 100,
          testedDifficulties: ['foundation', 'developing'],
          evidenceStrength: 'medium',
          lastAssessedAt: now,
          commonErrors: [],
          recommendedAction: 'Continue with advanced angle chasing.',
        },
      },
      strengths: ['geom_triangles_angles'],
      priorityGaps: ['adv_quadratics_factoring', 'alg_linear_systems'],
      languageNotes: 'Student referenced translations on 4 questions. Math concepts prioritized.',
    };

    const studyPlan: StudyPlan = {
      id: `plan_demo_beg_${Date.now()}`,
      generatedAt: now,
      weeklyTargetHours: 4,
      totalWeeks: 3,
      items: [
        {
          id: 'item_demo_1',
          skillId: 'alg_linear_systems',
          domainId: 'algebra',
          priority: 1,
          title: 'Systems of Two Linear Equations',
          learningObjective: 'Master elimination and substitution methods.',
          whyNeeded: 'Critical foundational gap diagnosed in assessment.',
          estimatedMinutes: 40,
          scheduledWeek: 1,
          isCompleted: false,
        },
        {
          id: 'item_demo_2',
          skillId: 'adv_quadratics_factoring',
          domainId: 'advanced_math',
          priority: 1,
          title: 'Quadratic Equations and Factoring',
          learningObjective: 'Factor trinomials and find zeros quickly.',
          whyNeeded: 'Prerequisite for parabolas, rational functions, and circles.',
          estimatedMinutes: 40,
          scheduledWeek: 1,
          isCompleted: false,
        },
        {
          id: 'item_demo_3',
          skillId: 'alg_linear_eq_1var',
          domainId: 'algebra',
          priority: 2,
          title: 'Linear Equations in One Variable',
          learningObjective: 'Identify number of solutions (one, none, infinite).',
          whyNeeded: 'High-frequency question type on Digital SAT.',
          estimatedMinutes: 30,
          scheduledWeek: 2,
          isCompleted: false,
        },
      ],
    };

    const state: AppStorageState = {
      version: CURRENT_STORAGE_VERSION,
      profile,
      activeSession: null,
      diagnosticHistory: [report],
      latestReport: report,
      studyPlan,
      practiceHistory: [],
    };
    saveAppState(state);
    return state;
  } else {
    // High Scorer
    const profile: StudentProfile = {
      id: 'demo_high_scorer',
      preferredLanguage: 'en',
      currentScore: 680,
      targetScore: 780,
      examDate: '2026-11-07',
      weeklyStudyHours: 6,
      preparationExperience: 'experienced',
      onboardingCompleted: true,
      createdAt: now,
      updatedAt: now,
    };

    const report: DiagnosticReport = {
      id: `rep_demo_high_${Date.now()}`,
      sessionId: 'sess_demo_high',
      generatedAt: now,
      isProvisional: false,
      totalQuestions: 14,
      totalCorrect: 12,
      accuracy: 86,
      durationSeconds: 1260,
      translationAssistanceCount: 1,
      domainSummaries: {
        algebra: { domainId: 'algebra', totalQuestions: 4, correctQuestions: 4, accuracy: 100, masteryLevel: 'proficient' },
        advanced_math: { domainId: 'advanced_math', totalQuestions: 4, correctQuestions: 4, accuracy: 100, masteryLevel: 'proficient' },
        problem_solving: { domainId: 'problem_solving', totalQuestions: 3, correctQuestions: 2, accuracy: 67, masteryLevel: 'developing' },
        geometry_trig: { domainId: 'geometry_trig', totalQuestions: 3, correctQuestions: 2, accuracy: 67, masteryLevel: 'developing' },
      },
      skillMasteries: {
        alg_linear_eq_1var: { skillId: 'alg_linear_eq_1var', status: 'strong', attemptsCount: 2, correctCount: 2, accuracy: 100, testedDifficulties: ['proficient', 'advanced'], evidenceStrength: 'medium', lastAssessedAt: now, commonErrors: [], recommendedAction: 'Maintain strong pacing.' },
        adv_quadratics_factoring: { skillId: 'adv_quadratics_factoring', status: 'strong', attemptsCount: 2, correctCount: 2, accuracy: 100, testedDifficulties: ['proficient', 'advanced'], evidenceStrength: 'medium', lastAssessedAt: now, commonErrors: [], recommendedAction: 'Solid mastery verified.' },
        ps_probability_conditional: { skillId: 'ps_probability_conditional', status: 'developing', attemptsCount: 1, correctCount: 0, accuracy: 0, testedDifficulties: ['proficient'], evidenceStrength: 'low', lastAssessedAt: now, commonErrors: ['word_problem_comprehension'], recommendedAction: 'Practice isolating restricted denominators in two-way tables.' },
        geom_circles_theorems_equations: { skillId: 'geom_circles_theorems_equations', status: 'developing', attemptsCount: 1, correctCount: 0, accuracy: 0, testedDifficulties: ['proficient'], evidenceStrength: 'low', lastAssessedAt: now, commonErrors: ['algebraic_manipulation'], recommendedAction: 'Review completing the square for circle equations.' },
      },
      strengths: ['alg_linear_eq_1var', 'adv_quadratics_factoring'],
      priorityGaps: ['ps_probability_conditional', 'geom_circles_theorems_equations'],
    };

    const studyPlan: StudyPlan = {
      id: `plan_demo_high_${Date.now()}`,
      generatedAt: now,
      weeklyTargetHours: 6,
      totalWeeks: 2,
      items: [
        {
          id: 'item_demo_h1',
          skillId: 'geom_circles_theorems_equations',
          domainId: 'geometry_trig',
          priority: 2,
          title: 'Circle Equations, Arc Length, and Sectors',
          learningObjective: 'Complete square for circle equation (x-h)²+(y-k)²=r².',
          whyNeeded: 'Target score refinement for 750+ score bracket.',
          estimatedMinutes: 30,
          scheduledWeek: 1,
          isCompleted: false,
        },
        {
          id: 'item_demo_h2',
          skillId: 'ps_probability_conditional',
          domainId: 'problem_solving',
          priority: 2,
          title: 'Probability and Two-Way Frequency Tables',
          learningObjective: 'Master conditional probabilities P(A|B) from frequency tables.',
          whyNeeded: 'Eliminate common denominator traps on Module 2.',
          estimatedMinutes: 30,
          scheduledWeek: 1,
          isCompleted: false,
        },
      ],
    };

    const state: AppStorageState = {
      version: CURRENT_STORAGE_VERSION,
      profile,
      activeSession: null,
      diagnosticHistory: [report],
      latestReport: report,
      studyPlan,
      practiceHistory: [],
    };
    saveAppState(state);
    return state;
  }
}
