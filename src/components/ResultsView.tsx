import React from 'react';
import { DiagnosticReport, Language, StudentProfile } from '../types';
import { SAT_DOMAINS, SKILL_MAP } from '../data/skills';
import { t } from '../translations/i18n';

interface ResultsViewProps {
  report: DiagnosticReport;
  profile: StudentProfile;
  lang: Language;
  onGeneratePlan: () => void;
  onGoToSkillMap: () => void;
  onPracticeSkill: (skillId: string) => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  report,
  profile,
  lang,
  onGeneratePlan,
  onGoToSkillMap,
  onPracticeSkill,
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-md ${
                  report.isProvisional
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-emerald-100 text-emerald-800'
                }`}
              >
                {report.isProvisional
                  ? t('results_provisional_badge', lang)
                  : t('results_complete_badge', lang)}
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-500 font-mono">
                {new Date(report.generatedAt).toLocaleDateString()}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {t('results_title', lang)}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onGeneratePlan}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
            >
              {t('results_generate_plan_btn', lang)}
            </button>
            <button
              onClick={onGoToSkillMap}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition-colors"
            >
              Explore Skill Map
            </button>
          </div>
        </div>

        {/* Top KPI Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-xs text-slate-500 block mb-1">
              {t('results_accuracy', lang)}
            </span>
            <span className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
              {report.accuracy}%
            </span>
            <span className="text-xs text-slate-500 block mt-0.5">
              {report.totalCorrect} of {report.totalQuestions} correct
            </span>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-xs text-slate-500 block mb-1">
              {t('results_questions_done', lang)}
            </span>
            <span className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
              {report.totalQuestions}
            </span>
            <span className="text-xs text-slate-500 block mt-0.5">
              Adaptive calibration
            </span>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-xs text-slate-500 block mb-1">
              {t('results_time_spent', lang)}
            </span>
            <span className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
              {formatTime(report.durationSeconds)}
            </span>
            <span className="text-xs text-slate-500 block mt-0.5">
              ~{Math.round(report.durationSeconds / Math.max(1, report.totalQuestions))}s / question
            </span>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-xs text-slate-500 block mb-1">
              {t('results_lang_support_used', lang)}
            </span>
            <span className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
              {report.translationAssistanceCount}
            </span>
            <span className="text-xs text-indigo-700 block mt-0.5">
              Zero math penalty
            </span>
          </div>
        </div>

        {/* Baseline score notice if student provided one */}
        {profile.currentScore && (
          <div className="mt-4 p-3 bg-slate-50 rounded-lg text-xs text-slate-600 border border-slate-200/60 flex items-center justify-between">
            <span>
              Self-reported baseline score: <strong className="text-slate-900 font-mono">{profile.currentScore}</strong>. Target score: <strong className="text-indigo-700 font-mono">{profile.targetScore}</strong>.
            </span>
            <span className="text-slate-400">Historical reference only</span>
          </div>
        )}
      </div>

      {/* Domain Breakdown Grid */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <h2 className="text-lg font-bold text-slate-900 mb-4">
          {t('results_domain_breakdown', lang)}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(Object.keys(report.domainSummaries) as (keyof typeof report.domainSummaries)[]).map((domId) => {
            const summary = report.domainSummaries[domId];
            const meta = SAT_DOMAINS[domId];
            const name = meta.name[lang] || meta.name.en;

            return (
              <div
                key={domId}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-slate-900">{name}</span>
                  <span className="font-mono text-sm font-bold text-slate-700">
                    {summary.accuracy}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-3">
                  <div
                    className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${summary.accuracy}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>
                    {summary.correctQuestions} of {summary.totalQuestions} questions correct
                  </span>
                  <span className="capitalize font-medium text-slate-700">
                    {summary.masteryLevel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Strengths & Priority Gaps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
            <h2 className="text-base font-bold text-slate-900">
              {t('results_strengths_title', lang)}
            </h2>
          </div>

          {report.strengths.length === 0 ? (
            <p className="text-xs text-slate-500 py-4">
              More practice needed to establish confident mastery.
            </p>
          ) : (
            <div className="space-y-3">
              {report.strengths.map((skillId) => {
                const skill = SKILL_MAP.get(skillId);
                const mastery = report.skillMasteries[skillId];
                if (!skill) return null;

                return (
                  <div
                    key={skillId}
                    className="p-3 bg-emerald-50/40 rounded-xl border border-emerald-100 flex items-start justify-between gap-3"
                  >
                    <div>
                      <span className="font-semibold text-xs text-slate-900 block">
                        {skill.name}
                      </span>
                      <span className="text-[11px] text-slate-500 block mt-0.5">
                        {mastery?.recommendedAction || 'Mastery demonstrated.'}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-emerald-700 shrink-0">
                      {mastery?.accuracy}%
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Priority Gaps */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
            <h2 className="text-base font-bold text-slate-900">
              {t('results_gaps_title', lang)}
            </h2>
          </div>

          {report.priorityGaps.length === 0 ? (
            <p className="text-xs text-slate-500 py-4">
              No critical gaps detected. You are ready for advanced timed practice.
            </p>
          ) : (
            <div className="space-y-3">
              {report.priorityGaps.map((skillId) => {
                const skill = SKILL_MAP.get(skillId);
                const mastery = report.skillMasteries[skillId];
                if (!skill) return null;

                return (
                  <div
                    key={skillId}
                    className="p-3 bg-amber-50/40 rounded-xl border border-amber-200/70 flex items-start justify-between gap-3"
                  >
                    <div className="flex-1">
                      <span className="font-semibold text-xs text-slate-900 block">
                        {skill.name}
                      </span>
                      <span className="text-[11px] text-slate-600 block mt-0.5">
                        {mastery?.recommendedAction || 'Foundational review recommended.'}
                      </span>
                    </div>
                    <button
                      onClick={() => onPracticeSkill(skillId)}
                      className="text-xs text-indigo-700 font-semibold bg-white hover:bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-md transition-colors shrink-0"
                    >
                      Learn & Practice
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Language Note */}
      {report.languageNotes && (
        <div className="p-4 bg-slate-100 rounded-xl text-xs text-slate-600 flex items-center justify-between">
          <span>{report.languageNotes}</span>
          <span className="text-indigo-700 font-medium">Multilingual SAT Diagnostics</span>
        </div>
      )}
    </div>
  );
};
