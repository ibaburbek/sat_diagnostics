import React, { useState } from 'react';
import { Language } from '../types';
import { GLOSSARY_TERMS } from '../data/glossary';
import { SKILL_MAP } from '../data/skills';
import { t } from '../translations/i18n';

interface VocabularyViewProps {
  lang: Language;
  onPracticeSkill: (skillId: string) => void;
}

export const VocabularyView: React.FC<VocabularyViewProps> = ({
  lang,
  onPracticeSkill,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);

  const filtered = GLOSSARY_TERMS.filter((item) => {
    const q = searchTerm.toLowerCase();
    const termMatch = item.term.toLowerCase().includes(q);
    const defMatch = item.simpleDefinitionEn.toLowerCase().includes(q);
    const transMatch = Object.values(item.translations).some((tVal) =>
      tVal.toLowerCase().includes(q)
    );
    return termMatch || defMatch || transMatch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          {t('vocab_title', lang)}
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          {t('vocab_desc', lang)}
        </p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-xl">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={t('vocab_search_placeholder', lang)}
          className="w-full pl-4 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:border-indigo-600 focus:outline-hidden focus:ring-1 focus:ring-indigo-600 shadow-2xs"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
          >
            ✕
          </button>
        )}
      </div>

      {/* Term Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item) => {
          const translation =
            lang === 'en' ? null : item.translations[lang as 'kk' | 'ru' | 'id'];
          const explanation =
            item.studentExplanation[lang] || item.studentExplanation.en;

          return (
            <div
              key={item.id}
              className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-slate-900">
                    {item.term}
                  </h3>
                  {translation && (
                    <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                      {translation}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-500 mb-3 font-medium">
                  {item.simpleDefinitionEn}
                </p>

                <p className="text-xs text-slate-700 mb-4 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {explanation}
                </p>

                <div className="text-[11px] text-slate-500 italic mb-4">
                  "{item.exampleUsage}"
                </div>
              </div>

              {/* Related Skills */}
              {item.relatedSkillIds.length > 0 && (
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] text-slate-400">Related Topic:</span>
                  <div className="flex flex-wrap gap-1">
                    {item.relatedSkillIds.map((sId) => {
                      const skill = SKILL_MAP.get(sId);
                      return (
                        <button
                          key={sId}
                          onClick={() => onPracticeSkill(sId)}
                          className="text-[11px] font-semibold text-indigo-700 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-2 py-0.5 rounded-md transition-colors"
                        >
                          {skill?.topic || sId} →
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
