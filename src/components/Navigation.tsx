import React from 'react';
import { Language } from '../types';
import { t } from '../translations/i18n';

export type NavigationTab =
  | 'dashboard'
  | 'diagnostic'
  | 'skill_map'
  | 'study_plan'
  | 'learn_practice'
  | 'vocabulary'
  | 'settings';

interface NavigationProps {
  currentTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenFormulas: () => void;
  hasActiveDiagnostic: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentTab,
  onSelectTab,
  lang,
  onLanguageChange,
  onOpenFormulas,
  hasActiveDiagnostic,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => onSelectTab('dashboard')}
            className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block" />
            <span>Digital SAT Math</span>
          </button>

          {/* Zone 2: 4–5 concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <button
              onClick={() => onSelectTab('dashboard')}
              className={`transition-colors whitespace-nowrap shrink-0 hover:text-slate-900 ${
                currentTab === 'dashboard'
                  ? 'text-indigo-600 font-semibold'
                  : ''
              }`}
            >
              {t('nav_dashboard', lang)}
            </button>

            <button
              onClick={() => onSelectTab('diagnostic')}
              className={`transition-colors whitespace-nowrap shrink-0 hover:text-slate-900 ${
                currentTab === 'diagnostic'
                  ? 'text-indigo-600 font-semibold'
                  : ''
              }`}
            >
              {hasActiveDiagnostic ? t('btn_resume_diagnostic', lang) : t('nav_diagnostic', lang)}
            </button>

            <button
              onClick={() => onSelectTab('skill_map')}
              className={`transition-colors whitespace-nowrap shrink-0 hover:text-slate-900 ${
                currentTab === 'skill_map'
                  ? 'text-indigo-600 font-semibold'
                  : ''
              }`}
            >
              {t('nav_skill_map', lang)}
            </button>

            <button
              onClick={() => onSelectTab('study_plan')}
              className={`transition-colors whitespace-nowrap shrink-0 hover:text-slate-900 ${
                currentTab === 'study_plan'
                  ? 'text-indigo-600 font-semibold'
                  : ''
              }`}
            >
              {t('nav_study_plan', lang)}
            </button>

            <button
              onClick={() => onSelectTab('learn_practice')}
              className={`transition-colors whitespace-nowrap shrink-0 hover:text-slate-900 ${
                currentTab === 'learn_practice'
                  ? 'text-indigo-600 font-semibold'
                  : ''
              }`}
            >
              {t('nav_learn_practice', lang)}
            </button>

            <button
              onClick={() => onSelectTab('vocabulary')}
              className={`transition-colors whitespace-nowrap shrink-0 hover:text-slate-900 ${
                currentTab === 'vocabulary'
                  ? 'text-indigo-600 font-semibold'
                  : ''
              }`}
            >
              {t('nav_vocabulary', lang)}
            </button>
          </nav>

          {/* Zone 3: 1 primary action or language selector & formulas */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenFormulas}
              className="text-xs font-medium text-slate-600 hover:text-indigo-600 bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0"
              title="Official SAT Formula Sheet"
            >
              {t('nav_formulas', lang)}
            </button>

            {/* Language dropdown */}
            <select
              value={lang}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              className="text-xs font-medium bg-slate-100 hover:bg-slate-200/80 text-slate-700 px-2.5 py-1.5 rounded-md border-0 focus:ring-1 focus:ring-indigo-600 cursor-pointer whitespace-nowrap shrink-0"
              aria-label="Select Language"
            >
              <option value="en">English (EN)</option>
              <option value="kk">Қазақша (KK)</option>
              <option value="ru">Русский (RU)</option>
              <option value="id">Bahasa Indonesia (ID)</option>
            </select>

            <button
              onClick={() => onSelectTab('settings')}
              className={`p-1.5 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors ${
                currentTab === 'settings' ? 'text-indigo-600 bg-indigo-50' : ''
              }`}
              title={t('nav_settings', lang)}
            >
              ⚙️
            </button>
          </div>
        </div>

        {/* Mobile secondary tab strip */}
        <div className="lg:hidden flex items-center gap-4 overflow-x-auto py-2.5 border-t border-slate-100 text-xs font-medium text-slate-600 no-scrollbar">
          <button
            onClick={() => onSelectTab('dashboard')}
            className={`whitespace-nowrap ${currentTab === 'dashboard' ? 'text-indigo-600 font-bold' : ''}`}
          >
            {t('nav_dashboard', lang)}
          </button>
          <button
            onClick={() => onSelectTab('diagnostic')}
            className={`whitespace-nowrap ${currentTab === 'diagnostic' ? 'text-indigo-600 font-bold' : ''}`}
          >
            {t('nav_diagnostic', lang)}
          </button>
          <button
            onClick={() => onSelectTab('skill_map')}
            className={`whitespace-nowrap ${currentTab === 'skill_map' ? 'text-indigo-600 font-bold' : ''}`}
          >
            {t('nav_skill_map', lang)}
          </button>
          <button
            onClick={() => onSelectTab('study_plan')}
            className={`whitespace-nowrap ${currentTab === 'study_plan' ? 'text-indigo-600 font-bold' : ''}`}
          >
            {t('nav_study_plan', lang)}
          </button>
          <button
            onClick={() => onSelectTab('learn_practice')}
            className={`whitespace-nowrap ${currentTab === 'learn_practice' ? 'text-indigo-600 font-bold' : ''}`}
          >
            {t('nav_learn_practice', lang)}
          </button>
          <button
            onClick={() => onSelectTab('vocabulary')}
            className={`whitespace-nowrap ${currentTab === 'vocabulary' ? 'text-indigo-600 font-bold' : ''}`}
          >
            {t('nav_vocabulary', lang)}
          </button>
        </div>
      </div>
    </header>
  );
};
