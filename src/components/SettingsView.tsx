import React, { useState, useRef } from 'react';
import { AppStorageState, Language } from '../types';
import {
  exportProgressJSON,
  importProgressJSON,
  loadSampleProfile,
  resetAppProgress,
} from '../services/storage';
import { t } from '../translations/i18n';

interface SettingsViewProps {
  appState: AppStorageState;
  lang: Language;
  onStateUpdate: (newState: AppStorageState) => void;
  onStartFreshDiagnostic: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  appState,
  lang,
  onStateUpdate,
  onStartFreshDiagnostic,
}) => {
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [copiedNotice, setCopiedNotice] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    const jsonStr = exportProgressJSON(appState);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sat_math_student_progress_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyJSON = () => {
    const jsonStr = exportProgressJSON(appState);
    navigator.clipboard.writeText(jsonStr);
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const res = importProgressJSON(content);
      if (res.success && res.state) {
        onStateUpdate(res.state);
        setImportStatus('Successfully imported student progress!');
        setTimeout(() => setImportStatus(null), 3000);
      } else {
        setImportStatus(`Import error: ${res.error || 'Invalid file format'}`);
      }
    };
    reader.readAsText(file);
  };

  const handleLoadPreset = (type: 'beginner' | 'high_scorer') => {
    const state = loadSampleProfile(type);
    onStateUpdate(state);
    setImportStatus(
      type === 'beginner'
        ? 'Loaded Sample Profile: Moderate-Gap Student (520 score)'
        : 'Loaded Sample Profile: High-Scorer Student (710 score)'
    );
    setTimeout(() => setImportStatus(null), 3500);
  };

  const handleReset = () => {
    const cleanState = resetAppProgress();
    onStateUpdate(cleanState);
    setShowResetConfirm(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          {t('settings_title', lang)}
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          {t('settings_desc', lang)}
        </p>
      </div>

      {/* Local Storage Transparency Notice */}
      <div className="p-5 bg-amber-50/60 rounded-2xl border border-amber-200/80 text-xs sm:text-sm text-amber-900 leading-relaxed">
        <strong className="block font-semibold mb-1">
          Browser Local Storage Notice:
        </strong>
        {t('settings_local_notice', lang)}
      </div>

      {/* Status banner */}
      {importStatus && (
        <div className="p-4 bg-indigo-50 border border-indigo-200 text-indigo-900 rounded-xl text-xs font-semibold animate-in fade-in">
          {importStatus}
        </div>
      )}

      {/* Teacher Demo Presets */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div>
          <span className="text-xs font-bold text-indigo-700 tracking-wider uppercase block mb-1">
            Educator Sandbox
          </span>
          <h2 className="text-lg font-bold text-slate-900">
            {t('settings_demo_title', lang)}
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            {t('settings_demo_desc', lang)}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleLoadPreset('beginner')}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors border border-slate-200"
          >
            {t('settings_demo_beginner', lang)}
          </button>

          <button
            onClick={() => handleLoadPreset('high_scorer')}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors border border-slate-200"
          >
            {t('settings_demo_high', lang)}
          </button>

          <button
            onClick={onStartFreshDiagnostic}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
          >
            Start Fresh Diagnostic
          </button>
        </div>
      </div>

      {/* Export / Import Data */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <h2 className="text-lg font-bold text-slate-900">
          Data Export & Backup
        </h2>

        {/* Export */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              {t('btn_export', lang)}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {t('settings_export_desc', lang)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleExport}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
            >
              Download JSON
            </button>
            <button
              onClick={handleCopyJSON}
              className="px-3 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg transition-colors"
            >
              {copiedNotice ? '✓ Copied!' : 'Copy to Clipboard'}
            </button>
          </div>
        </div>

        {/* Import */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              {t('btn_import', lang)}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {t('settings_import_desc', lang)}
            </p>
          </div>
          <div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".json"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg border border-slate-200 transition-colors"
            >
              Select JSON File
            </button>
          </div>
        </div>

        {/* Reset */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-semibold text-rose-700">
              {t('btn_reset_all', lang)}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Permanently clear all assessment records, study schedules, and local history.
            </p>
          </div>
          <button
            onClick={() => setShowResetConfirm(true)}
            className="px-4 py-2 text-rose-700 hover:bg-rose-50 border border-rose-200 text-xs font-semibold rounded-lg transition-colors"
          >
            Reset Progress
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showResetConfirm && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
        >
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 max-w-sm w-full p-6 text-center">
            <span className="text-3xl block mb-2">⚠️</span>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Confirm Reset
            </h3>
            <p className="text-xs text-slate-600 mb-6 leading-relaxed">
              {t('settings_reset_confirm', lang)}
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 border border-slate-200 text-slate-700 text-xs font-medium rounded-lg hover:bg-slate-50"
              >
                {t('btn_cancel', lang)}
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-rose-600 text-white text-xs font-semibold rounded-lg hover:bg-rose-700"
              >
                Yes, Reset All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
