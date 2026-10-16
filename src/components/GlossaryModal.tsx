import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/glossary';
import { Language } from '../types';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const filtered = GLOSSARY_TERMS.filter((item) => {
    const q = search.toLowerCase();
    const termMatch = item.term.toLowerCase().includes(q);
    const defMatch = item.simpleDefinitionEn.toLowerCase().includes(q);
    const transMatch = Object.values(item.translations).some((t) =>
      t.toLowerCase().includes(q)
    );
    return termMatch || defMatch || transMatch;
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              SAT Math Glossary & Key Terms
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Accurate mathematical explanations for international test-takers
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 font-semibold px-2.5 py-1 rounded-md hover:bg-slate-100 text-sm"
          >
            ✕ Close
          </button>
        </div>

        {/* Search */}
        <div className="p-4 bg-slate-50 border-b border-slate-200">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search math terms (e.g. slope, at least, vertex)..."
            className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-colors"
          />
        </div>

        {/* List */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          {filtered.length === 0 ? (
            <p className="text-sm text-slate-500 text-center py-8">
              No matching terms found.
            </p>
          ) : (
            filtered.map((item) => {
              const translation =
                lang === 'en'
                  ? null
                  : item.translations[lang as 'kk' | 'ru' | 'id'];
              const explanation =
                item.studentExplanation[lang] || item.studentExplanation.en;

              return (
                <div
                  key={item.id}
                  className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors bg-white"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                    <span className="font-bold text-base text-slate-900">
                      {item.term}
                    </span>
                    {translation && (
                      <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                        {translation}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                    {explanation}
                  </p>
                  <p className="text-xs text-slate-500 bg-slate-50 p-2 rounded-md font-mono">
                    <strong className="font-semibold text-slate-700">Example: </strong>
                    {item.exampleUsage}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>{filtered.length} terms available</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
