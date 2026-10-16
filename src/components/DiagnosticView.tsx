import React, { useState, useEffect, useRef } from 'react';
import {
  AnswerSubmission,
  DiagnosticMode,
  DiagnosticSession,
  Language,
  Question,
  SATDomainId,
} from '../types';
import { QUESTION_BANK, QUESTION_MAP } from '../data/questions';
import { SAT_DOMAINS, SKILL_MAP } from '../data/skills';
import { gradeAnswer } from '../services/grading';
import {
  selectNextQuestion,
  shouldStopAssessment,
} from '../services/adaptiveEngine';
import { t } from '../translations/i18n';
import { MathTerm } from './MathTerm';

interface DiagnosticViewProps {
  session: DiagnosticSession | null;
  lang: Language;
  onSaveSession: (session: DiagnosticSession) => void;
  onCompleteSession: (answers: AnswerSubmission[], durationSeconds: number) => void;
  onOpenGlossary: () => void;
  onOpenFormulas: () => void;
  onReturnToDashboard: () => void;
}

export const DiagnosticView: React.FC<DiagnosticViewProps> = ({
  session,
  lang,
  onSaveSession,
  onCompleteSession,
  onOpenGlossary,
  onOpenFormulas,
  onReturnToDashboard,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedChoice, setSelectedChoice] = useState<string>('');
  const [numericAnswer, setNumericAnswer] = useState<string>('');
  const [timeSpentOnQuestion, setTimeSpentOnQuestion] = useState<number>(0);
  const [totalSecondsElapsed, setTotalSecondsElapsed] = useState<number>(0);
  const [usedTranslationForCurrent, setUsedTranslationForCurrent] = useState<boolean>(false);
  const [usedGlossaryForCurrent, setUsedGlossaryForCurrent] = useState<boolean>(false);
  const [showReviewConfirm, setShowReviewConfirm] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [questionMode, setQuestionMode] = useState<DiagnosticMode>('standard_diagnostic');

  const timerRef = useRef<any>(null);

  // Initialize or load session
  useEffect(() => {
    if (!session) return;

    setIsPaused(session.isPaused);
    setQuestionMode(session.mode);

    // If there is an existing assigned question, load it
    if (session.assignedQuestionIds.length > session.currentQuestionIndex) {
      const qId = session.assignedQuestionIds[session.currentQuestionIndex];
      const q = QUESTION_MAP.get(qId);
      if (q) {
        setCurrentQuestion(q);
        return;
      }
    }

    // Otherwise adaptively select the next question
    const nextQ = selectNextQuestion(session.questionsAnswered);
    if (!nextQ) {
      // Finished
      onCompleteSession(session.questionsAnswered, totalSecondsElapsed);
      return;
    }

    const updatedAssigned = [...session.assignedQuestionIds, nextQ.id];
    onSaveSession({
      ...session,
      assignedQuestionIds: updatedAssigned,
    });
    setCurrentQuestion(nextQ);
  }, [session?.currentQuestionIndex]);

  // Question Timer
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeSpentOnQuestion((prev) => prev + 1);
      setTotalSecondsElapsed((prev) => prev + 1);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  // Reset answer states when question changes
  useEffect(() => {
    setSelectedChoice('');
    setNumericAnswer('');
    setTimeSpentOnQuestion(0);
    setUsedTranslationForCurrent(lang !== 'en');
    setUsedGlossaryForCurrent(false);
  }, [currentQuestion?.id]);

  if (!session || !currentQuestion) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-slate-500 mb-4">No active assessment session found.</p>
        <button
          onClick={onReturnToDashboard}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  const domainMeta = SAT_DOMAINS[currentQuestion.domainId];
  const skillMeta = SKILL_MAP.get(currentQuestion.skillId);
  const questionNumber = session.questionsAnswered.length + 1;
  const estimatedTotal = 12;

  const currentAnswer =
    currentQuestion.type === 'multiple_choice'
      ? selectedChoice
      : numericAnswer.trim();

  const handlePause = () => {
    setIsPaused(true);
    onSaveSession({
      ...session,
      isPaused: true,
    });
  };

  const handleResume = () => {
    setIsPaused(false);
    onSaveSession({
      ...session,
      isPaused: false,
    });
  };

  const handleFinishEarly = () => {
    if (session.questionsAnswered.length === 0) {
      onReturnToDashboard();
      return;
    }
    onCompleteSession(session.questionsAnswered, totalSecondsElapsed);
  };

  const handleConfirmSubmit = () => {
    setShowReviewConfirm(false);
    if (!currentAnswer) return;

    // Grade answer strictly without showing feedback during test
    const gradeResult = gradeAnswer(currentQuestion, currentAnswer);

    const submission: AnswerSubmission = {
      questionId: currentQuestion.id,
      skillId: currentQuestion.skillId,
      domainId: currentQuestion.domainId,
      difficulty: currentQuestion.difficulty,
      submittedAnswer: currentAnswer,
      isCorrect: gradeResult.isCorrect,
      timeSpentSeconds: timeSpentOnQuestion,
      usedTranslation: usedTranslationForCurrent,
      usedGlossary: usedGlossaryForCurrent,
      errorCategory: gradeResult.errorCategory,
      timestamp: new Date().toISOString(),
      mode: questionMode,
    };

    const updatedAnswers = [...session.questionsAnswered, submission];

    // Check if stopping criteria met
    const isFinished = shouldStopAssessment(updatedAnswers);

    if (isFinished) {
      onCompleteSession(updatedAnswers, totalSecondsElapsed);
    } else {
      // Advance to next question index
      onSaveSession({
        ...session,
        questionsAnswered: updatedAnswers,
        currentQuestionIndex: session.currentQuestionIndex + 1,
      });
    }
  };

  // Render question prompt with automatic MathTerm tooltips for keywords
  const promptText =
    questionMode === 'english_challenge'
      ? currentQuestion.prompt.en
      : currentQuestion.prompt[lang] || currentQuestion.prompt.en;

  // Render pause modal if paused
  if (isPaused) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
          <span className="text-3xl block mb-2">⏸️</span>
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            {t('diag_paused_title', lang)}
          </h2>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            {t('diag_pause_confirm', lang)}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleResume}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-lg shadow-xs transition-colors"
            >
              {t('diag_resume_btn', lang)}
            </button>
            <button
              onClick={onReturnToDashboard}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs rounded-lg transition-colors"
            >
              Back to Dashboard
            </button>
            <button
              onClick={handleFinishEarly}
              className="px-4 py-2.5 text-amber-700 hover:bg-amber-50 font-medium text-xs rounded-lg transition-colors border border-amber-200"
            >
              {t('diag_stop_early_btn', lang)}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Top diagnostic header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
            <span>{t('diag_mode_title', lang)}</span>
            <span aria-hidden="true">·</span>
            <span className="font-semibold text-slate-700">
              {t('diag_question_label', lang)} {questionNumber} {t('diag_of', lang)} ~{estimatedTotal}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="font-medium text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
              {domainMeta ? domainMeta.name[lang] || domainMeta.name.en : currentQuestion.domainId}
            </span>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600 font-medium capitalize">
              {currentQuestion.difficulty} Level
            </span>
          </div>
        </div>

        {/* Action tools */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setUsedGlossaryForCurrent(true);
              onOpenGlossary();
            }}
            className="text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
            title="Open Math Glossary"
          >
            <span>📖</span>
            <span className="hidden sm:inline">{t('diag_glossary_btn', lang)}</span>
          </button>

          <button
            type="button"
            onClick={onOpenFormulas}
            className="text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
            title="Open Formula Sheet"
          >
            <span>📐</span>
            <span className="hidden sm:inline">Formulas</span>
          </button>

          <button
            type="button"
            onClick={handlePause}
            className="text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 px-3 py-1.5 rounded-lg transition-colors"
          >
            {t('btn_pause', lang)}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-1.5 rounded-full mb-8 overflow-hidden">
        <div
          className="bg-indigo-600 h-full transition-all duration-300"
          style={{
            width: `${Math.min(100, (session.questionsAnswered.length / estimatedTotal) * 100)}%`,
          }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        {/* Vocabulary highlights indicator */}
        {currentQuestion.glossaryTermIds.length > 0 && (
          <div className="mb-4 pb-3 border-b border-slate-100 flex items-center gap-2 text-xs text-slate-500">
            <span>Vocabulary Guide:</span>
            <div className="flex flex-wrap gap-2">
              {currentQuestion.glossaryTermIds.map((termId) => (
                <MathTerm key={termId} termId={termId} lang={lang} />
              ))}
            </div>
          </div>
        )}

        {/* Prompt */}
        <div className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed mb-6 whitespace-pre-line">
          {promptText}
        </div>

        {/* Answer Controls */}
        {currentQuestion.type === 'multiple_choice' && currentQuestion.choices ? (
          <div className="space-y-3 mb-8">
            {currentQuestion.choices.map((choice) => {
              const isSelected = selectedChoice === choice.id;
              return (
                <button
                  type="button"
                  key={choice.id}
                  onClick={() => setSelectedChoice(choice.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 text-sm ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/50 text-indigo-950 font-semibold shadow-xs ring-1 ring-indigo-600'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/60 text-slate-800'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {choice.id}
                  </span>
                  <span className="pt-0.5">{choice.text}</span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="mb-8">
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Student-Produced Response (Grid-in):
            </label>
            <input
              type="text"
              value={numericAnswer}
              onChange={(e) => setNumericAnswer(e.target.value)}
              placeholder={t('diag_input_placeholder', lang)}
              className="max-w-md w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-base font-mono focus:border-indigo-600 focus:outline-hidden focus:ring-1 focus:ring-indigo-600"
            />
            <p className="text-xs text-slate-500 mt-2">
              {t('diag_grid_in_hint', lang)}
            </p>
          </div>
        )}

        {/* Footer submit row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
          <div className="text-xs text-slate-400">
            Answers cannot be changed after final submission.
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              disabled={!currentAnswer}
              onClick={() => setShowReviewConfirm(true)}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
            >
              {t('btn_submit', lang)}
            </button>
          </div>
        </div>
      </div>

      {/* Review & Confirmation Modal */}
      {showReviewConfirm && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
        >
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 max-w-sm w-full p-6 text-center">
            <h3 className="text-base font-bold text-slate-900 mb-1">
              {t('diag_review_modal_title', lang)}
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Your selected answer is: <strong className="font-mono text-indigo-700 text-sm">{currentAnswer}</strong>
            </p>
            <p className="text-xs text-slate-500 mb-6">
              {t('diag_review_modal_desc', lang)}
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setShowReviewConfirm(false)}
                className="px-4 py-2 border border-slate-200 text-slate-700 text-xs font-medium rounded-lg hover:bg-slate-50 transition-colors"
              >
                Review
              </button>
              <button
                type="button"
                onClick={handleConfirmSubmit}
                className="px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Confirm & Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
