import React from 'react';
import { Language } from '../types';

interface FormulaSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const FormulaSheetModal: React.FC<FormulaSheetModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Digital SAT Math Reference Sheet
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Exact reference formulas provided on every official Digital SAT Math section
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 text-sm font-semibold px-2.5 py-1 rounded-md hover:bg-slate-100"
          >
            ✕ Close
          </button>
        </div>

        <div className="mt-6 space-y-6 text-sm text-slate-700">
          {/* Section 1: 2D Geometry & Trigonometry */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 tracking-wider uppercase mb-3">
              Area & Circumference
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs text-slate-500 block">Circle Area</span>
                <span className="font-mono text-base font-bold text-indigo-700">A = πr²</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs text-slate-500 block">Circle Circumference</span>
                <span className="font-mono text-base font-bold text-indigo-700">C = 2πr</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs text-slate-500 block">Rectangle Area</span>
                <span className="font-mono text-base font-bold text-indigo-700">A = lw</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs text-slate-500 block">Triangle Area</span>
                <span className="font-mono text-base font-bold text-indigo-700">A = ½bh</span>
              </div>
            </div>
          </div>

          {/* Section 2: Right Triangles */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 tracking-wider uppercase mb-3">
              Right Triangles & Special Triangles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs text-slate-500 block">Pythagorean Theorem</span>
                <span className="font-mono text-base font-bold text-indigo-700">c² = a² + b²</span>
                <span className="text-xs text-slate-500 block mt-1">where c is the hypotenuse</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs text-slate-500 block">Special: 45°-45°-90°</span>
                <span className="font-mono text-base font-bold text-indigo-700">x : x : x√2</span>
                <span className="text-xs text-slate-500 block mt-1">Legs equal x, hypotenuse x√2</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs text-slate-500 block">Special: 30°-60°-90°</span>
                <span className="font-mono text-base font-bold text-indigo-700">x : x√3 : 2x</span>
                <span className="text-xs text-slate-500 block mt-1">Short leg x, long leg x√3, hyp 2x</span>
              </div>
            </div>
          </div>

          {/* Section 3: 3D Solids & Volume */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 tracking-wider uppercase mb-3">
              Volume of Solids
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs text-slate-500 block">Rectangular Prism</span>
                <span className="font-mono text-sm font-bold text-slate-900">V = lwh</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs text-slate-500 block">Cylinder</span>
                <span className="font-mono text-sm font-bold text-slate-900">V = πr²h</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs text-slate-500 block">Sphere</span>
                <span className="font-mono text-sm font-bold text-slate-900">V = ⁴⁄₃πr³</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs text-slate-500 block">Cone</span>
                <span className="font-mono text-sm font-bold text-slate-900">V = ⅓πr²h</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs text-slate-500 block">Pyramid</span>
                <span className="font-mono text-sm font-bold text-slate-900">V = ⅓lwh</span>
              </div>
            </div>
          </div>

          {/* Section 4: Degrees and Radians facts */}
          <div>
            <h3 className="text-xs font-semibold text-slate-500 tracking-wider uppercase mb-3">
              Key Properties & Circle Facts
            </h3>
            <div className="p-4 bg-indigo-50/50 rounded-lg border border-indigo-100 space-y-2 text-xs text-slate-700">
              <p>• The number of degrees of arc in a circle is <strong className="font-mono text-slate-900">360°</strong>.</p>
              <p>• The number of radians of arc in a circle is <strong className="font-mono text-slate-900">2π</strong> radians.</p>
              <p>• The sum of the measures in degrees of the angles of a triangle is <strong className="font-mono text-slate-900">180°</strong>.</p>
              <p>• For any acute angle x: <strong className="font-mono text-slate-900">sin(x°) = cos(90° - x°)</strong>.</p>
              <p>• Circle equation with center (h, k) and radius r: <strong className="font-mono text-slate-900">(x - h)² + (y - k)² = r²</strong>.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
