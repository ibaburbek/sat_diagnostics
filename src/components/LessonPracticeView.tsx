import React, { useState } from 'react';
import { Language, LessonContent, PracticeAttempt, Question } from '../types';
import { LESSONS_DATA, LESSONS_MAP } from '../data/lessons';
import { QUESTION_MAP } from '../data/questions';
import { gradeAnswer } from '../services/grading';
import { t } from '../translations/i18n';
import { MathTerm } from './MathTerm';

interface LessonPracticeViewProps {
  initialSkillId?: string;
  lang: Language;
  onRecordPracticeAttempt: (attempt: PracticeAttempt) => void;
  onMarkLessonCompleted?: (skillId: string) => void;
}

export const LessonPracticeView: React.FC<LessonPracticeViewProps> = ({
  initialSkillId,
  lang,
  onRecordPracticeAttempt,
  onMarkLessonCompleted,
}) => {
  const [selectedSkillId, setSelectedSkillId] = useState<string>(
    initialSkillId || LESSONS_DATA[0].skillId
  );
  const [activeTab, setActiveTab] = useState<'lesson' | 'practice'>('lesson');

  // Practice state
  const [currentPracticeQIndex, setCurrentPracticeQIndex] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submissionResult, setSubmissionResult] = useState<{ isCorrect: boolean } | null>(null);
  const [hintsRevealed, setHintsRevealed] = useState<number>(0);

  const lesson = LESSONS_MAP.get(selectedSkillId) || LESSONS_DATA[0];

  // Combine guided and independent practice questions
  const practiceQuestionIds = [
    lesson.guidedPracticeQuestionId,
    ...lesson.independentPracticeQuestionIds,
  ];

  const currentPracticeQuestion: Question | undefined = QUESTION_MAP.get(
    practiceQuestionIds[currentPracticeQIndex]
  );

  const handleSelectSkill = (skillId: string) => {
    setSelectedSkillId(skillId);
    setActiveTab('lesson');
    setCurrentPracticeQIndex(0);
    setUserAnswer('');
    setIsSubmitted(false);
    setSubmissionResult(null);
    setHintsRevealed(0);
  };

  const handleSubmitPractice = () => {
    if (!currentPracticeQuestion || !userAnswer.trim()) return;

    const result = gradeAnswer(currentPracticeQuestion, userAnswer);
    setSubmissionResult(result);
    setIsSubmitted(true);

    const attempt: PracticeAttempt = {
      id: `prac_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      skillId: selectedSkillId,
      questionId: currentPracticeQuestion.id,
      submittedAnswer: userAnswer.trim(),
      isCorrect: result.isCorrect,
      hintsUsedCount: hintsRevealed,
      timeSpentSeconds: 45,
      timestamp: new Date().toISOString(),
    };

    onRecordPracticeAttempt(attempt);

    if (onMarkLessonCompleted) {
      onMarkLessonCompleted(selectedSkillId);
    }
  };

  const handleNextPracticeQuestion = () => {
    if (currentPracticeQIndex < practiceQuestionIds.length - 1) {
      setCurrentPracticeQIndex(currentPracticeQIndex + 1);
      setUserAnswer('');
      setIsSubmitted(false);
      setSubmissionResult(null);
      setHintsRevealed(0);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Skill Selector Strip */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {LESSONS_DATA.map((l) => {
          const isCurrent = l.skillId === selectedSkillId;
          const title = l.title[lang] || l.title.en;
          return (
            <button
              key={l.skillId}
              onClick={() => handleSelectSkill(l.skillId)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 border ${
                isCurrent
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
            >
              {title}
            </button>
          );
        })}
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        {/* Header Strip & Sub-tabs */}
        <div className="p-6 sm:p-8 border-b border-slate-200 bg-slate-50/50">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-bold text-indigo-700 tracking-wider uppercase block mb-1">
                Instructional Module
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {lesson.title[lang] || lesson.title.en}
              </h1>
            </div>

            {/* Segmented Control: Concept vs Practice */}
            <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-xl">
              <button
                onClick={() => setActiveTab('lesson')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'lesson'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Concept & Worked Example
              </button>
              <button
                onClick={() => setActiveTab('practice')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'practice'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Targeted Practice ({practiceQuestionIds.length})
              </button>
            </div>
          </div>

          <div className="p-3 bg-white rounded-xl border border-slate-200/80 text-xs text-slate-700">
            <strong className="text-indigo-900">{t('learn_objective', lang)}: </strong>
            {lesson.learningObjective[lang] || lesson.learningObjective.en}
          </div>
        </div>

        {/* Tab 1: Lesson Concept & Worked Example */}
        {activeTab === 'lesson' && (
          <div className="p-6 sm:p-8 space-y-8">
            {/* Key Vocabulary */}
            {lesson.glossaryTermIds.length > 0 && (
              <div>
                <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Key English Mathematical Vocabulary
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {lesson.glossaryTermIds.map((termId) => (
                    <MathTerm key={termId} termId={termId} lang={lang} />
                  ))}
                </div>
              </div>
            )}

            {/* Concept Summary Bullets */}
            <div>
              <h2 className="text-sm font-bold text-slate-900 mb-3">
                {t('learn_concept_summary', lang)}
              </h2>
              <div className="space-y-2.5">
                {(lesson.conceptSummary[lang] || lesson.conceptSummary.en).map(
                  (bullet, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="text-indigo-600 font-bold shrink-0">•</span>
                      <span>{bullet}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Core Formulas */}
            {lesson.keyFormulas && lesson.keyFormulas.length > 0 && (
              <div>
                <h2 className="text-sm font-bold text-slate-900 mb-3">
                  {t('learn_key_formulas', lang)}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {lesson.keyFormulas.map((formula, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-indigo-50/50 rounded-xl border border-indigo-100 font-mono text-xs font-semibold text-indigo-900"
                    >
                      {formula}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Worked Example */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
              <span className="text-xs font-bold text-indigo-700 tracking-wider uppercase block">
                {t('learn_worked_example', lang)}
              </span>

              <p className="text-sm font-semibold text-slate-900 whitespace-pre-line">
                {lesson.workedExample.problemText[lang] || lesson.workedExample.problemText.en}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-200">
                {(lesson.workedExample.steps[lang] || lesson.workedExample.steps.en).map(
                  (step, idx) => (
                    <p key={idx} className="text-xs text-slate-700 font-mono leading-relaxed">
                      {step}
                    </p>
                  )
                )}
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
                <span>Final Answer:</span>
                <strong className="font-mono text-base">{lesson.workedExample.finalAnswer}</strong>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-600">
                <strong className="text-indigo-900">{t('learn_strategy_takeaway', lang)}: </strong>
                {lesson.workedExample.strategyTakeaway[lang] || lesson.workedExample.strategyTakeaway.en}
              </div>
            </div>

            {/* Jump to practice CTA */}
            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setActiveTab('practice')}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-2"
              >
                <span>Try Practice Problems</span>
                <span>→</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Interactive Practice Problems */}
        {activeTab === 'practice' && currentPracticeQuestion && (
          <div className="p-6 sm:p-8 space-y-6">
            {/* Practice Step Indicator */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs text-slate-500">
              <span className="font-semibold text-slate-800">
                Exercise {currentPracticeQIndex + 1} of {practiceQuestionIds.length}
              </span>
              <span className="capitalize text-indigo-700 font-medium">
                {currentPracticeQuestion.difficulty} Level
              </span>
            </div>

            {/* Question Prompt */}
            <div className="text-base font-medium text-slate-900 leading-relaxed whitespace-pre-line">
              {currentPracticeQuestion.prompt[lang] || currentPracticeQuestion.prompt.en}
            </div>

            {/* Question Choices / Input */}
            {currentPracticeQuestion.type === 'multiple_choice' && currentPracticeQuestion.choices ? (
              <div className="space-y-3">
                {currentPracticeQuestion.choices.map((choice) => {
                  const isSelected = userAnswer === choice.id;
                  let choiceStyle =
                    'border-slate-200 hover:border-slate-300 hover:bg-slate-50';

                  if (isSubmitted) {
                    if (choice.id === currentPracticeQuestion.correctAnswer) {
                      choiceStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                    } else if (isSelected) {
                      choiceStyle = 'border-rose-400 bg-rose-50 text-rose-950';
                    }
                  } else if (isSelected) {
                    choiceStyle = 'border-indigo-600 bg-indigo-50/60 font-semibold ring-1 ring-indigo-600';
                  }

                  return (
                    <button
                      key={choice.id}
                      type="button"
                      disabled={isSubmitted}
                      onClick={() => setUserAnswer(choice.id)}
                      className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-start gap-3 ${choiceStyle}`}
                    >
                      <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center shrink-0">
                        {choice.id}
                      </span>
                      <span>{choice.text}</span>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  disabled={isSubmitted}
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Enter numeric response (e.g. 7 or 3/4)"
                  className="max-w-md w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm font-mono focus:border-indigo-600 focus:outline-hidden"
                />
              </div>
            )}

            {/* Progressive Hints */}
            {!isSubmitted && currentPracticeQuestion.hints && (
              <div className="pt-2">
                <div className="flex items-center gap-2 mb-2">
                  <button
                    type="button"
                    disabled={hintsRevealed >= (currentPracticeQuestion.hints[lang] || currentPracticeQuestion.hints.en).length}
                    onClick={() => setHintsRevealed(hintsRevealed + 1)}
                    className="text-xs text-indigo-700 font-semibold hover:text-indigo-900 disabled:opacity-40"
                  >
                    💡 {t('learn_show_hint', lang)} ({hintsRevealed}/{(currentPracticeQuestion.hints[lang] || currentPracticeQuestion.hints.en).length})
                  </button>
                </div>
                {hintsRevealed > 0 && (
                  <div className="space-y-1.5 p-3 bg-indigo-50/50 rounded-xl border border-indigo-100 text-xs text-slate-700">
                    {(currentPracticeQuestion.hints[lang] || currentPracticeQuestion.hints.en)
                      .slice(0, hintsRevealed)
                      .map((h, i) => (
                        <p key={i}>
                          <strong>Hint {i + 1}: </strong>
                          {h}
                        </p>
                      ))}
                  </div>
                )}
              </div>
            )}

            {/* Submission / Feedback */}
            {!isSubmitted ? (
              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  disabled={!userAnswer.trim()}
                  onClick={handleSubmitPractice}
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors"
                >
                  {t('btn_submit', lang)}
                </button>
              </div>
            ) : (
              <div className="space-y-4 pt-4 border-t border-slate-100">
                {/* Result Feedback Banner */}
                <div
                  className={`p-4 rounded-xl border text-xs sm:text-sm font-semibold flex items-center justify-between ${
                    submissionResult?.isCorrect
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-rose-50 border-rose-200 text-rose-900'
                  }`}
                >
                  <span>
                    {submissionResult?.isCorrect
                      ? t('learn_feedback_correct', lang)
                      : t('learn_feedback_incorrect', lang)}
                  </span>
                  <span className="font-mono text-xs">
                    Correct Answer: {currentPracticeQuestion.correctAnswer}
                  </span>
                </div>

                {/* Worked Solution Steps */}
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                  <span className="font-bold text-slate-900 block">
                    {t('learn_solution_steps', lang)}:
                  </span>
                  {(currentPracticeQuestion.workedSolution[lang] || currentPracticeQuestion.workedSolution.en).map(
                    (step, idx) => (
                      <p key={idx} className="text-slate-700 font-mono">
                        {step}
                      </p>
                    )
                  )}
                </div>

                {/* Next exercise button */}
                <div className="flex justify-end pt-2">
                  {currentPracticeQIndex < practiceQuestionIds.length - 1 ? (
                    <button
                      type="button"
                      onClick={handleNextPracticeQuestion}
                      className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors"
                    >
                      {t('btn_next', lang)} →
                    </button>
                  ) : (
                    <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200">
                      ✓ All exercises completed for this topic!
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
