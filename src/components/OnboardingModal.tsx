import React, { useState } from 'react';
import { Language, StudentProfile } from '../types';
import { t } from '../translations/i18n';

interface OnboardingModalProps {
  isOpen: boolean;
  initialProfile: StudentProfile;
  onComplete: (profile: StudentProfile) => void;
  onSkip: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  initialProfile,
  onComplete,
  onSkip,
}) => {
  const [lang, setLang] = useState<Language>(initialProfile.preferredLanguage);
  const [currentScoreStr, setCurrentScoreStr] = useState<string>(
    initialProfile.currentScore ? String(initialProfile.currentScore) : ''
  );
  const [targetScoreStr, setTargetScoreStr] = useState<string>(
    initialProfile.targetScore ? String(initialProfile.targetScore) : '700'
  );
  const [examDate, setExamDate] = useState<string>(initialProfile.examDate || '');
  const [weeklyHours, setWeeklyHours] = useState<number>(
    initialProfile.weeklyStudyHours || 4
  );
  const [experience, setExperience] = useState<
    'beginner' | 'some_prep' | 'experienced'
  >(initialProfile.preparationExperience || 'some_prep');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentScore =
      currentScoreStr.trim() !== '' ? parseInt(currentScoreStr, 10) : null;
    const targetScore =
      targetScoreStr.trim() !== '' ? parseInt(targetScoreStr, 10) : 700;

    const updatedProfile: StudentProfile = {
      ...initialProfile,
      preferredLanguage: lang,
      currentScore: isNaN(currentScore as any) ? null : currentScore,
      targetScore: isNaN(targetScore as any) ? null : targetScore,
      examDate: examDate.trim() !== '' ? examDate : null,
      weeklyStudyHours: weeklyHours,
      preparationExperience: experience,
      onboardingCompleted: true,
      updatedAt: new Date().toISOString(),
    };

    onComplete(updatedProfile);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-xl w-full p-6 sm:p-8 my-8">
        <div className="mb-6">
          <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase block mb-1">
            Personalized Diagnostic
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            {t('onboard_title', lang)}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {t('onboard_subtitle', lang)}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 text-sm">
          {/* Language Selection */}
          <div>
            <label className="block font-semibold text-slate-900 mb-1.5 text-xs">
              {t('onboard_lang_label', lang)}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { code: 'en', label: 'English' },
                { code: 'kk', label: 'Қазақша' },
                { code: 'ru', label: 'Русский' },
                { code: 'id', label: 'Bahasa Indonesia' },
              ].map((item) => (
                <button
                  type="button"
                  key={item.code}
                  onClick={() => setLang(item.code as Language)}
                  className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-colors ${
                    lang === item.code
                      ? 'border-indigo-600 bg-indigo-50/70 text-indigo-900 font-semibold'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Scores: Current and Target */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-900 mb-1 text-xs">
                {t('onboard_current_score', lang)}
              </label>
              <input
                type="number"
                min="200"
                max="800"
                step="10"
                placeholder="e.g. 520 (or blank)"
                value={currentScoreStr}
                onChange={(e) => setCurrentScoreStr(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:border-indigo-600 focus:outline-hidden"
              />
              <span className="text-[11px] text-slate-400 mt-0.5 block">
                Optional: leave blank if you haven't taken a test yet
              </span>
            </div>

            <div>
              <label className="block font-semibold text-slate-900 mb-1 text-xs">
                {t('onboard_target_score', lang)}
              </label>
              <input
                type="number"
                min="200"
                max="800"
                step="10"
                value={targetScoreStr}
                onChange={(e) => setTargetScoreStr(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:border-indigo-600 focus:outline-hidden"
              />
              <span className="text-[11px] text-slate-400 mt-0.5 block">
                Goal (e.g. 650, 700, 750, 800)
              </span>
            </div>
          </div>

          {/* Exam Date & Study Hours */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-900 mb-1 text-xs">
                {t('onboard_exam_date', lang)}
              </label>
              <input
                type="date"
                value={examDate}
                onChange={(e) => setExamDate(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:border-indigo-600 focus:outline-hidden text-slate-700"
              />
              <span className="text-[11px] text-slate-400 mt-0.5 block">
                Optional: helps calibrate weekly study pacing
              </span>
            </div>

            <div>
              <label className="block font-semibold text-slate-900 mb-1 text-xs">
                {t('onboard_hours_label', lang)}
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="2"
                  max="14"
                  step="1"
                  value={weeklyHours}
                  onChange={(e) => setWeeklyHours(parseInt(e.target.value, 10))}
                  className="flex-1 accent-indigo-600 cursor-pointer"
                />
                <span className="font-mono font-bold text-sm text-indigo-700 w-16 text-right">
                  {weeklyHours} hrs
                </span>
              </div>
            </div>
          </div>

          {/* Experience level */}
          <div>
            <label className="block font-semibold text-slate-900 mb-1.5 text-xs">
              {t('onboard_experience_label', lang)}
            </label>
            <div className="space-y-1.5">
              {[
                { id: 'beginner', label: t('onboard_exp_beginner', lang) },
                { id: 'some_prep', label: t('onboard_exp_some', lang) },
                { id: 'experienced', label: t('onboard_exp_experienced', lang) },
              ].map((exp) => (
                <label
                  key={exp.id}
                  className={`flex items-center gap-2.5 p-2.5 rounded-lg border cursor-pointer text-xs transition-colors ${
                    experience === exp.id
                      ? 'border-indigo-600 bg-indigo-50/40 text-slate-900 font-medium'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="experience"
                    checked={experience === exp.id}
                    onChange={() => setExperience(exp.id as any)}
                    className="accent-indigo-600"
                  />
                  <span>{exp.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Educational Disclaimer */}
          <div className="p-3 bg-amber-50/60 border border-amber-200/80 rounded-lg text-xs text-amber-900 leading-relaxed">
            {t('onboard_disclaimer', lang)}
          </div>

          {/* Form actions */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onSkip}
              className="text-xs text-slate-500 hover:text-slate-800 font-medium px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
            >
              {t('onboard_skip_btn', lang)}
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
            >
              {t('onboard_start_btn', lang)}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
