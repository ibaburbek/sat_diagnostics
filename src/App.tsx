/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  AnswerSubmission,
  AppStorageState,
  DiagnosticSession,
  Language,
  PracticeAttempt,
  StudentProfile,
  StudyPlan,
} from './types';
import {
  loadAppState,
  saveAppState,
  resetAppProgress,
} from './services/storage';
import { generateDiagnosticReport } from './services/masteryEngine';
import { generateStudyPlan } from './services/studyPlanGenerator';
import { Navigation, NavigationTab } from './components/Navigation';
import { OnboardingModal } from './components/OnboardingModal';
import { DashboardView } from './components/DashboardView';
import { DiagnosticView } from './components/DiagnosticView';
import { ResultsView } from './components/ResultsView';
import { SkillMapView } from './components/SkillMapView';
import { StudyPlanView } from './components/StudyPlanView';
import { LessonPracticeView } from './components/LessonPracticeView';
import { VocabularyView } from './components/VocabularyView';
import { SettingsView } from './components/SettingsView';
import { FormulaSheetModal } from './components/FormulaSheetModal';
import { GlossaryModal } from './components/GlossaryModal';

export default function App() {
  const [appState, setAppState] = useState<AppStorageState>(() => loadAppState());
  const [currentTab, setCurrentTab] = useState<NavigationTab>('dashboard');
  const [showOnboarding, setShowOnboarding] = useState<boolean>(
    !appState.profile.onboardingCompleted
  );
  const [showFormulaSheet, setShowFormulaSheet] = useState<boolean>(false);
  const [showGlossaryModal, setShowGlossaryModal] = useState<boolean>(false);
  const [selectedPracticeSkillId, setSelectedPracticeSkillId] = useState<string | undefined>(undefined);

  // Auto-save on state changes
  useEffect(() => {
    saveAppState(appState);
  }, [appState]);

  const lang: Language = appState.profile.preferredLanguage || 'en';

  const handleLanguageChange = (newLang: Language) => {
    const updatedProfile: StudentProfile = {
      ...appState.profile,
      preferredLanguage: newLang,
      updatedAt: new Date().toISOString(),
    };
    setAppState((prev) => ({
      ...prev,
      profile: updatedProfile,
    }));
  };

  const handleCompleteOnboarding = (profile: StudentProfile) => {
    setAppState((prev) => ({
      ...prev,
      profile,
    }));
    setShowOnboarding(false);
    // Start diagnostic right after onboarding
    handleStartNewDiagnostic();
  };

  const handleSkipOnboarding = () => {
    const updatedProfile: StudentProfile = {
      ...appState.profile,
      onboardingCompleted: true,
      updatedAt: new Date().toISOString(),
    };
    setAppState((prev) => ({
      ...prev,
      profile: updatedProfile,
    }));
    setShowOnboarding(false);
  };

  const handleStartNewDiagnostic = () => {
    const newSession: DiagnosticSession = {
      id: `diag_session_${Date.now()}`,
      startedAt: new Date().toISOString(),
      mode: 'standard_diagnostic',
      questionsAnswered: [],
      currentQuestionIndex: 0,
      assignedQuestionIds: [],
      isCompleted: false,
      isPaused: false,
    };

    setAppState((prev) => ({
      ...prev,
      activeSession: newSession,
    }));
    setCurrentTab('diagnostic');
  };

  const handleSaveSession = (session: DiagnosticSession) => {
    setAppState((prev) => ({
      ...prev,
      activeSession: session,
    }));
  };

  const handleCompleteDiagnostic = (
    answers: AnswerSubmission[],
    durationSeconds: number
  ) => {
    const sessionId = appState.activeSession?.id || `diag_${Date.now()}`;
    const report = generateDiagnosticReport(sessionId, answers, durationSeconds);
    const plan = generateStudyPlan(report, appState.profile);

    setAppState((prev) => ({
      ...prev,
      activeSession: null,
      latestReport: report,
      diagnosticHistory: [report, ...prev.diagnosticHistory],
      studyPlan: plan,
    }));
  };

  const handleGenerateStudyPlan = () => {
    if (!appState.latestReport) return;
    const plan = generateStudyPlan(appState.latestReport, appState.profile);
    setAppState((prev) => ({
      ...prev,
      studyPlan: plan,
    }));
    setCurrentTab('study_plan');
  };

  const handleUpdateStudyPlan = (updatedPlan: StudyPlan) => {
    setAppState((prev) => ({
      ...prev,
      studyPlan: updatedPlan,
    }));
  };

  const handleRecordPracticeAttempt = (attempt: PracticeAttempt) => {
    setAppState((prev) => ({
      ...prev,
      practiceHistory: [attempt, ...prev.practiceHistory],
    }));
  };

  const handleOpenLesson = (skillId: string) => {
    setSelectedPracticeSkillId(skillId);
    setCurrentTab('learn_practice');
  };

  const handleStartPracticeSkill = (skillId: string) => {
    setSelectedPracticeSkillId(skillId);
    setCurrentTab('learn_practice');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Navigation
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        lang={lang}
        onLanguageChange={handleLanguageChange}
        onOpenFormulas={() => setShowFormulaSheet(true)}
        hasActiveDiagnostic={!!(appState.activeSession && !appState.activeSession.isCompleted)}
      />

      {/* Main Workspace Frame */}
      <main className="flex-1">
        {currentTab === 'dashboard' && (
          <DashboardView
            appState={appState}
            lang={lang}
            onNavigate={setCurrentTab}
            onStartDiagnostic={handleStartNewDiagnostic}
            onOpenLesson={handleOpenLesson}
          />
        )}

        {currentTab === 'diagnostic' && (
          appState.activeSession && !appState.activeSession.isCompleted ? (
            <DiagnosticView
              session={appState.activeSession}
              lang={lang}
              onSaveSession={handleSaveSession}
              onCompleteSession={handleCompleteDiagnostic}
              onOpenGlossary={() => setShowGlossaryModal(true)}
              onOpenFormulas={() => setShowFormulaSheet(true)}
              onReturnToDashboard={() => setCurrentTab('dashboard')}
            />
          ) : appState.latestReport ? (
            <ResultsView
              report={appState.latestReport}
              profile={appState.profile}
              lang={lang}
              onGeneratePlan={handleGenerateStudyPlan}
              onGoToSkillMap={() => setCurrentTab('skill_map')}
              onPracticeSkill={handleStartPracticeSkill}
            />
          ) : (
            <div className="max-w-xl mx-auto px-4 py-20 text-center">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-3xl block mb-2">🎯</span>
                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  No Active Diagnostic Assessment
                </h2>
                <p className="text-sm text-slate-600 mb-6">
                  Ready to test your Digital SAT Math skills? The adaptive assessment takes 20-30 minutes.
                </p>
                <button
                  onClick={handleStartNewDiagnostic}
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors"
                >
                  Start Diagnostic Now
                </button>
              </div>
            </div>
          )
        )}

        {currentTab === 'skill_map' && (
          <SkillMapView
            skillMasteries={appState.latestReport?.skillMasteries || {}}
            lang={lang}
            onPracticeSkill={handleStartPracticeSkill}
          />
        )}

        {currentTab === 'study_plan' && (
          <StudyPlanView
            plan={appState.studyPlan}
            lang={lang}
            onUpdatePlan={handleUpdateStudyPlan}
            onOpenLesson={handleOpenLesson}
            onTakeDiagnostic={handleStartNewDiagnostic}
          />
        )}

        {currentTab === 'learn_practice' && (
          <LessonPracticeView
            initialSkillId={selectedPracticeSkillId}
            lang={lang}
            onRecordPracticeAttempt={handleRecordPracticeAttempt}
          />
        )}

        {currentTab === 'vocabulary' && (
          <VocabularyView
            lang={lang}
            onPracticeSkill={handleStartPracticeSkill}
          />
        )}

        {currentTab === 'settings' && (
          <SettingsView
            appState={appState}
            lang={lang}
            onStateUpdate={setAppState}
            onStartFreshDiagnostic={handleStartNewDiagnostic}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            Digital SAT Math Adaptive Diagnostic & Mastery Platform. For international students preparing for the SAT.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Browser Local Storage</span>
            <span>·</span>
            <span>English / Қазақша / Русский / Indonesia</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <OnboardingModal
        isOpen={showOnboarding}
        initialProfile={appState.profile}
        onComplete={handleCompleteOnboarding}
        onSkip={handleSkipOnboarding}
      />

      <FormulaSheetModal
        isOpen={showFormulaSheet}
        onClose={() => setShowFormulaSheet(false)}
        lang={lang}
      />

      <GlossaryModal
        isOpen={showGlossaryModal}
        onClose={() => setShowGlossaryModal(false)}
        lang={lang}
      />
    </div>
  );
}
