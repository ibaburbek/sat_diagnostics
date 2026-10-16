import React, { useState } from 'react';
import { Language, StudyPlan, StudyPlanItem } from '../types';
import { SAT_DOMAINS, SKILL_MAP } from '../data/skills';
import { t } from '../translations/i18n';

interface StudyPlanViewProps {
  plan: StudyPlan | null;
  lang: Language;
  onUpdatePlan: (updatedPlan: StudyPlan) => void;
  onOpenLesson: (skillId: string) => void;
  onTakeDiagnostic: () => void;
}

export const StudyPlanView: React.FC<StudyPlanViewProps> = ({
  plan,
  lang,
  onUpdatePlan,
  onOpenLesson,
  onTakeDiagnostic,
}) => {
  const [selectedWeek, setSelectedWeek] = useState<number | 'all'>('all');

  if (!plan || plan.items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
          <span className="text-3xl block mb-3">📅</span>
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            {t('plan_title', lang)}
          </h2>
          <p className="text-sm text-slate-600 mb-6 max-w-md mx-auto leading-relaxed">
            {t('plan_empty', lang)}
          </p>
          <button
            onClick={onTakeDiagnostic}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
          >
            {t('btn_start_diagnostic', lang)}
          </button>
        </div>
      </div>
    );
  }

  const handleToggleComplete = (itemId: string) => {
    const updatedItems = plan.items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
          completedAt: !item.isCompleted ? new Date().toISOString() : undefined,
        };
      }
      return item;
    });

    onUpdatePlan({
      ...plan,
      items: updatedItems,
    });
  };

  const handlePostpone = (itemId: string) => {
    const updatedItems = plan.items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          scheduledWeek: item.scheduledWeek + 1,
          isPostponed: true,
        };
      }
      return item;
    });

    onUpdatePlan({
      ...plan,
      items: updatedItems,
    });
  };

  const completedCount = plan.items.filter((i) => i.isCompleted).length;
  const progressPercent = Math.round((completedCount / plan.items.length) * 100);

  // Group items by week or filter
  const visibleItems =
    selectedWeek === 'all'
      ? plan.items
      : plan.items.filter((i) => i.scheduledWeek === selectedWeek);

  const getPriorityHeader = (priority: 1 | 2 | 3) => {
    if (priority === 1) return t('plan_priority_1', lang);
    if (priority === 2) return t('plan_priority_2', lang);
    return t('plan_priority_3', lang);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header and Progress Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase block mb-1">
              Curated Curriculum
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {t('plan_title', lang)}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              {t('plan_desc', lang)}
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs text-slate-500 block">Weekly Target</span>
            <span className="font-mono text-xl font-bold text-indigo-700">
              {plan.weeklyTargetHours} hrs / week
            </span>
          </div>
        </div>

        {/* Overall Completion Progress */}
        <div className="mt-6 pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between text-xs text-slate-600 mb-2 font-medium">
            <span>
              {completedCount} of {plan.items.length} modules completed
            </span>
            <span className="font-mono font-bold text-slate-900">{progressPercent}%</span>
          </div>
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-indigo-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Week Filter Controls */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        <button
          onClick={() => setSelectedWeek('all')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            selectedWeek === 'all'
              ? 'bg-slate-900 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          All Modules ({plan.items.length})
        </button>

        {Array.from({ length: plan.totalWeeks }, (_, i) => i + 1).map((weekNum) => {
          const count = plan.items.filter((i) => i.scheduledWeek === weekNum).length;
          return (
            <button
              key={weekNum}
              onClick={() => setSelectedWeek(weekNum)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedWeek === weekNum
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t('plan_week', lang)} {weekNum} ({count})
            </button>
          );
        })}
      </div>

      {/* Study Items List */}
      <div className="space-y-4">
        {visibleItems.map((item) => {
          const domainMeta = SAT_DOMAINS[item.domainId];
          const skillMeta = SKILL_MAP.get(item.skillId);

          return (
            <div
              key={item.id}
              className={`p-6 rounded-2xl border transition-all bg-white ${
                item.isCompleted
                  ? 'border-slate-200 bg-slate-50/60 opacity-80'
                  : item.priority === 1
                  ? 'border-amber-200 hover:border-amber-300 shadow-xs'
                  : 'border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5 text-xs">
                    <span
                      className={`font-semibold px-2 py-0.5 rounded-md ${
                        item.priority === 1
                          ? 'bg-amber-100 text-amber-800'
                          : item.priority === 2
                          ? 'bg-indigo-100 text-indigo-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {getPriorityHeader(item.priority)}
                    </span>
                    <span className="text-slate-400">·</span>
                    <span className="font-medium text-slate-500">
                      {domainMeta.name[lang] || domainMeta.name.en}
                    </span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500 font-mono">
                      ~{item.estimatedMinutes} min
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                    {item.whyNeeded}
                  </p>

                  <p className="text-xs text-slate-500 italic">
                    <strong className="text-slate-700 not-italic">Objective: </strong>
                    {item.learningObjective}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
                  <button
                    onClick={() => onOpenLesson(item.skillId)}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>{item.isCompleted ? t('plan_revisit', lang) : 'Launch Lesson'}</span>
                    <span>→</span>
                  </button>

                  <button
                    onClick={() => handleToggleComplete(item.id)}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border transition-colors ${
                      item.isCompleted
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.isCompleted ? '✓ Completed' : t('plan_mark_done', lang)}
                  </button>

                  {!item.isCompleted && (
                    <button
                      onClick={() => handlePostpone(item.id)}
                      className="px-2.5 py-2 text-xs text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                      title="Postpone to next week"
                    >
                      Postpone ↷
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
