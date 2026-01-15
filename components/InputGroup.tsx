import React from 'react';
import { Check, ChevronDown } from 'lucide-react';

interface TextInputProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  multiline?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({ label, value, onChange, placeholder, multiline }) => (
  <div className="flex flex-col gap-2 mb-5">
    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">{label}</label>
    {multiline ? (
      <textarea
        className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm text-slate-700 font-medium focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-400 min-h-[100px] shadow-sm hover:border-indigo-300 resize-y"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    ) : (
      <input
        type="text"
        className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm text-slate-700 font-medium focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-400 shadow-sm hover:border-indigo-300"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    )}
  </div>
);

interface NumberInputProps {
  label: string;
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
}

export const NumberInput: React.FC<NumberInputProps> = ({ label, value, onChange, min, max }) => (
  <div className="flex flex-col gap-2 mb-5">
    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">{label}</label>
    <input
      type="number"
      className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm text-slate-700 font-medium focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all shadow-sm hover:border-indigo-300"
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value) || min || 0)}
      min={min}
      max={max}
    />
  </div>
);

interface SelectInputProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
}

export const SelectInput: React.FC<SelectInputProps> = ({ label, value, onChange, options }) => (
  <div className="flex flex-col gap-2 mb-5">
    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">{label}</label>
    <div className="relative group">
      <select
        className="w-full bg-white border border-slate-200 rounded-xl p-3 pr-10 text-sm text-slate-700 font-medium focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all appearance-none cursor-pointer shadow-sm hover:border-indigo-300"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400 group-hover:text-indigo-500 transition-colors">
        <ChevronDown size={16} />
      </div>
    </div>
  </div>
);

interface CheckboxInputProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  subLabel?: string;
}

export const CheckboxInput: React.FC<CheckboxInputProps> = ({ label, checked, onChange, subLabel }) => (
  <div 
    className={`group flex items-start gap-3 mb-5 p-4 border rounded-xl transition-all cursor-pointer shadow-sm ${
      checked 
        ? 'bg-indigo-50/50 border-indigo-200 ring-1 ring-indigo-500/20' 
        : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md'
    }`}
    onClick={() => onChange(!checked)}
  >
    <div className={`relative flex-shrink-0 flex items-center justify-center w-5 h-5 mt-0.5 rounded border transition-all duration-200 ${
      checked 
        ? 'bg-indigo-600 border-indigo-600 shadow-sm' 
        : 'bg-white border-slate-300 group-hover:border-indigo-400'
    }`}>
       <Check size={14} className={`text-white transition-transform duration-200 ${checked ? 'scale-100' : 'scale-0'}`} strokeWidth={3} />
    </div>
    <div className="flex flex-col select-none">
        <span className={`text-sm font-bold transition-colors ${checked ? 'text-indigo-900' : 'text-slate-700'}`}>{label}</span>
        {subLabel && <span className="text-xs text-slate-500 mt-1 leading-relaxed opacity-80">{subLabel}</span>}
    </div>
  </div>
);