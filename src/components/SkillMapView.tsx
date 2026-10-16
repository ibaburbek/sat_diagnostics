import React, { useState } from 'react';
import { Language, MasteryStatus, SATDomainId, SkillMasteryRecord } from '../types';
import { SAT_DOMAINS, SKILLS_TAXONOMY, SKILL_MAP } from '../data/skills';
import { t } from '../translations/i18n';

interface SkillMapViewProps {
  skillMasteries: Record<string, SkillMasteryRecord>;
  lang: Language;
  onPracticeSkill: (skillId: string) => void;
}

export const SkillMapView: React.FC<SkillMapViewProps> = ({
  skillMasteries,
  lang,
  onPracticeSkill,
}) => {
  const [selectedDomain, setSelectedDomain] = useState<SATDomainId | 'all'>('all');
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);

  const filteredSkills =
    selectedDomain === 'all'
      ? SKILLS_TAXONOMY
      : SKILLS_TAXONOMY.filter((s) => s.domainId === selectedDomain);

  const selectedSkill = selectedSkillId ? SKILL_MAP.get(selectedSkillId) : null;
  const selectedMastery = selectedSkillId ? skillMasteries[selectedSkillId] : null;

  const getStatusBadge = (status?: MasteryStatus) => {
    switch (status) {
      case 'strong':
        return (
          <span className="text-emerald-700 font-semibold text-xs flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            {t('status_strong', lang)}
          </span>
        );
      case 'developing':
        return (
          <span className="text-indigo-700 font-semibold text-xs flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            {t('status_developing', lang)}
          </span>
        );
      case 'needs_attention':
        return (
          <span className="text-amber-700 font-semibold text-xs flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            {t('status_needs_attention', lang)}
          </span>
        );
      default:
        return (
          <span className="text-slate-500 text-xs flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            {t('status_insufficient_evidence', lang)}
          </span>
        );
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          {t('skill_map_title', lang)}
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          {t('skill_map_desc', lang)}
        </p>
      </div>

      {/* Domain Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        <button
          onClick={() => setSelectedDomain('all')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            selectedDomain === 'all'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          {t('filter_all', lang)}
        </button>

        {(['algebra', 'advanced_math', 'problem_solving', 'geometry_trig'] as SATDomainId[]).map(
          (domId) => {
            const meta = SAT_DOMAINS[domId];
            const name = meta.name[lang] || meta.name.en;
            return (
              <button
                key={domId}
                onClick={() => setSelectedDomain(domId)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedDomain === domId
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {name}
              </button>
            );
          }
        )}
      </div>

      {/* Main Grid: Skills list + Detail Drawer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left Column: Skill Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredSkills.map((skill) => {
            const mastery = skillMasteries[skill.id];
            const status = mastery?.status || 'insufficient_evidence';
            const isSelected = selectedSkillId === skill.id;
            const domainMeta = SAT_DOMAINS[skill.domainId];

            return (
              <div
                key={skill.id}
                onClick={() => setSelectedSkillId(skill.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer bg-white ${
                  isSelected
                    ? 'border-indigo-600 ring-2 ring-indigo-600/20 shadow-md'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span>{domainMeta.name[lang] || domainMeta.name.en}</span>
                  {getStatusBadge(status)}
                </div>

                <h3 className="font-bold text-sm text-slate-900 mb-2 leading-snug">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                  {skill.description[lang] || skill.description.en}
                </p>

                {/* Accuracy / Attempts footer */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
                  <span className="font-mono tabular-nums">
                    {mastery ? `${mastery.attemptsCount} attempts` : '0 attempts'}
                  </span>
                  {mastery && mastery.attemptsCount > 0 ? (
                    <span className="font-mono font-bold text-slate-900">
                      {mastery.accuracy}% accuracy
                    </span>
                  ) : (
                    <span className="text-slate-400">Uncalibrated</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Detailed Inspector */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs sticky top-24">
          {selectedSkill ? (
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                    {selectedSkill.topic}
                  </span>
                  {getStatusBadge(selectedMastery?.status)}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {selectedSkill.name}
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedSkill.description[lang] || selectedSkill.description.en}
              </p>

              {/* Prerequisites Tree */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-semibold text-slate-700 block mb-2">
                  {t('skill_prereqs', lang)}:
                </span>
                {selectedSkill.prerequisites.length === 0 ? (
                  <span className="text-xs text-slate-400">
                    {t('skill_none', lang)}
                  </span>
                ) : (
                  <div className="space-y-1.5">
                    {selectedSkill.prerequisites.map((prereqId) => {
                      const prereq = SKILL_MAP.get(prereqId);
                      const prereqMastery = skillMasteries[prereqId];
                      return (
                        <div
                          key={prereqId}
                          onClick={() => setSelectedSkillId(prereqId)}
                          className="p-2 rounded-lg bg-slate-50 border border-slate-200/60 hover:bg-slate-100 transition-colors cursor-pointer flex items-center justify-between text-xs"
                        >
                          <span className="font-medium text-slate-800">
                            {prereq?.name || prereqId}
                          </span>
                          <span className="text-[11px] font-mono text-slate-500">
                            {prereqMastery?.status || 'untested'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Evidence stats */}
              {selectedMastery && selectedMastery.attemptsCount > 0 && (
                <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                  <span className="font-semibold text-slate-700 block">
                    Diagnostic Evidence:
                  </span>
                  <div className="p-3 bg-slate-50 rounded-xl space-y-1.5 text-slate-600">
                    <div className="flex justify-between">
                      <span>Total Questions:</span>
                      <strong className="font-mono text-slate-900">
                        {selectedMastery.attemptsCount}
                      </strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Accuracy:</span>
                      <strong className="font-mono text-slate-900">
                        {selectedMastery.accuracy}% ({selectedMastery.correctCount} correct)
                      </strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Evidence Strength:</span>
                      <strong className="capitalize text-slate-900">
                        {selectedMastery.evidenceStrength}
                      </strong>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 italic">
                    {selectedMastery.recommendedAction}
                  </p>
                </div>
              )}

              {/* Action */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onPracticeSkill(selectedSkill.id)}
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>{t('btn_practice_skill', lang)}</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <span className="text-2xl block mb-2">🗺️</span>
              <p className="text-xs text-slate-500 mb-1 font-medium">
                Select any skill card
              </p>
              <p className="text-[11px] text-slate-400">
                Inspect evidence metrics, prerequisites, and launch targeted practice.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
