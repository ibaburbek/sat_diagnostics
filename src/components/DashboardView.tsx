import React from 'react';
import {
  AppStorageState,
  DiagnosticSession,
  Language,
  SATDomainId,
} from '../types';
import { SAT_DOMAINS, SKILLS_TAXONOMY, SKILL_MAP } from '../data/skills';
import { t } from '../translations/i18n';
import { NavigationTab } from './Navigation';

interface DashboardViewProps {
  appState: AppStorageState;
  lang: Language;
  onNavigate: (tab: NavigationTab) => void;
  onStartDiagnostic: () => void;
  onOpenLesson: (skillId: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  appState,
  lang,
  onNavigate,
  onStartDiagnostic,
  onOpenLesson,
}) => {
  const { profile, activeSession, latestReport, studyPlan } = appState;

  // Calculate high-level mastery stats
  const totalSkills = SKILLS_TAXONOMY.length;
  let masteredCount = 0;
  let developingCount = 0;
  let needsAttentionCount = 0;

  if (latestReport) {
    for (const skill of SKILLS_TAXONOMY) {
      const rec = latestReport.skillMasteries[skill.id];
      if (rec?.status === 'strong') masteredCount += 1;
      else if (rec?.status === 'developing') developingCount += 1;
      else if (rec?.status === 'needs_attention') needsAttentionCount += 1;
    }
  }

  // Next up item in study plan
  const nextStudyItem = studyPlan?.items.find((item) => !item.isCompleted);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Hero Welcome Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-indigo-700 tracking-wider uppercase block mb-1">
              Digital SAT Math Mastery Engine
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Ready to elevate your Digital SAT Math score?
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Targeted adaptive assessment, evidence-based skill mapping, and individualized study schedules designed specifically for international students.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            {activeSession && !activeSession.isCompleted ? (
              <button
                onClick={() => onNavigate('diagnostic')}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>{t('btn_resume_diagnostic', lang)}</span>
                <span className="bg-indigo-500/60 px-2 py-0.5 rounded-md font-mono text-[11px]">
                  Q{activeSession.questionsAnswered.length + 1}
                </span>
              </button>
            ) : (
              <button
                onClick={onStartDiagnostic}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>{t('btn_start_diagnostic', lang)}</span>
                <span>→</span>
              </button>
            )}

            {latestReport && (
              <button
                onClick={() => onNavigate('diagnostic')}
                className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-xs rounded-xl transition-colors"
              >
                {t('btn_view_report', lang)}
              </button>
            )}
          </div>
        </div>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-xs text-slate-500 block">Diagnosed Strong</span>
            <span className="text-xl font-bold text-slate-900 font-mono tabular-nums">
              {masteredCount} <span className="text-xs font-normal text-slate-400">/ {totalSkills}</span>
            </span>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-xs text-slate-500 block">Developing Gaps</span>
            <span className="text-xl font-bold text-indigo-700 font-mono tabular-nums">
              {developingCount + needsAttentionCount}
            </span>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-xs text-slate-500 block">Weekly Study Goal</span>
            <span className="text-xl font-bold text-slate-900 font-mono tabular-nums">
              {profile.weeklyStudyHours} hrs
            </span>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-xs text-slate-500 block">Target Score</span>
            <span className="text-xl font-bold text-slate-900 font-mono tabular-nums">
              {profile.targetScore ? profile.targetScore : '700+'}
            </span>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Study Plan Next Up & Domain Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Next Up Module (Left 1 col) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
              Active Study Plan
            </span>
            <button
              onClick={() => onNavigate('study_plan')}
              className="text-xs text-slate-500 hover:text-indigo-600 font-medium"
            >
              View Full Plan →
            </button>
          </div>

          {nextStudyItem ? (
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-3">
              <span className="text-[11px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md inline-block">
                Priority {nextStudyItem.priority}
              </span>
              <h3 className="font-bold text-sm text-slate-900 leading-snug">
                {nextStudyItem.title}
              </h3>
              <p className="text-xs text-slate-600 line-clamp-2">
                {nextStudyItem.whyNeeded}
              </p>
              <button
                onClick={() => onOpenLesson(nextStudyItem.skillId)}
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Launch Lesson</span>
                <span>→</span>
              </button>
            </div>
          ) : (
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center text-xs text-slate-500">
              <p className="mb-3">
                {latestReport
                  ? 'All scheduled modules completed! Ready for full-length practice.'
                  : 'Take the adaptive diagnostic to generate your custom weekly study plan.'}
              </p>
              <button
                onClick={latestReport ? () => onNavigate('learn_practice') : onStartDiagnostic}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-xs"
              >
                {latestReport ? 'Browse All Lessons' : 'Start Diagnostic'}
              </button>
            </div>
          )}
        </div>

        {/* 4 SAT Domains Performance Cards (Right 2 cols) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-slate-900">
              SAT Math Domains Overview
            </h2>
            <button
              onClick={() => onNavigate('skill_map')}
              className="text-xs text-indigo-700 hover:text-indigo-900 font-semibold"
            >
              Interactive Skill Map →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(['algebra', 'advanced_math', 'problem_solving', 'geometry_trig'] as SATDomainId[]).map(
              (domId) => {
                const meta = SAT_DOMAINS[domId];
                const summary = latestReport?.domainSummaries[domId];
                const accuracy = summary ? summary.accuracy : null;

                return (
                  <div
                    key={domId}
                    onClick={() => onNavigate('skill_map')}
                    className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-all cursor-pointer bg-slate-50/40 hover:bg-slate-50"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-sm text-slate-900">
                        {meta.name[lang] || meta.name.en}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-700">
                        {accuracy !== null ? `${accuracy}%` : 'Uncalibrated'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 line-clamp-1 mb-3">
                      {meta.shortDescription[lang] || meta.shortDescription.en}
                    </p>

                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-indigo-600 h-full rounded-full"
                        style={{ width: `${accuracy !== null ? accuracy : 0}%` }}
                      />
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
