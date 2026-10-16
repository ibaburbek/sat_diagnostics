import React, { useState } from 'react';
import { GLOSSARY_MAP } from '../data/glossary';
import { Language } from '../types';

interface MathTermProps {
  termId: string;
  displayText?: string;
  lang: Language;
}

export const MathTerm: React.FC<MathTermProps> = ({ termId, displayText, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const termData = GLOSSARY_MAP.get(termId);

  if (!termData) {
    return <span>{displayText || termId}</span>;
  }

  const label = displayText || termData.term;
  const translation =
    lang === 'en'
      ? termData.term
      : termData.translations[lang as 'kk' | 'ru' | 'id'] || termData.term;
  const explanation =
    termData.studentExplanation[lang] || termData.studentExplanation.en;

  return (
    <span className="relative inline-block">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="inline-flex items-center text-indigo-700 underline decoration-indigo-300 decoration-dotted hover:decoration-solid underline-offset-4 font-medium transition-colors cursor-help px-0.5"
        title="Tap or hover for SAT Math definition"
      >
        {label}
      </button>

      {isOpen && (
        <span
          role="tooltip"
          className="absolute z-40 bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 sm:w-80 p-3.5 bg-slate-900 text-slate-100 text-xs rounded-xl shadow-xl pointer-events-auto border border-slate-700 animate-in fade-in duration-150"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <span className="block font-bold text-white text-sm mb-0.5">
            {termData.term}
          </span>
          {lang !== 'en' && (
            <span className="block text-indigo-300 text-xs font-medium mb-1.5">
              {translation}
            </span>
          )}
          <span className="block text-slate-300 mb-2 leading-relaxed">
            {explanation}
          </span>
          <span className="block text-slate-400 italic text-[11px] border-t border-slate-800 pt-1.5">
            "{termData.exampleUsage}"
          </span>
          <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900" />
        </span>
      )}
    </span>
  );
};
