import React, { useState, useEffect } from 'react';
import { 
  ScanEye, 
  ChevronRight, 
  ChevronLeft,
  Copy, 
  Bot, 
  ListTodo,
  Cpu,
  CheckCircle2,
  Play,
  RefreshCw,
  Fingerprint,
  Check,
  Wand2
} from 'lucide-react';
import { MetaPromptState, GenerationStatus, Language } from './types';
import { DEFAULT_FORM_STATE, PROTOCOLS, UI_TEXT } from './constants';
import { generateMetaPrompt } from './services/promptService';
import { TextInput, SelectInput, CheckboxInput } from './components/InputGroup';

// IDs must match the keys in UI_TEXT[lang].steps
const STEPS = [
  { id: 'scope', icon: Bot },
  { id: 'intake', icon: ListTodo },
  { id: 'blueprint', icon: Fingerprint },
  { id: 'architect', icon: Play },
];

export default function App() {
  const [state, setState] = useState<MetaPromptState>(DEFAULT_FORM_STATE);
  const [currentStep, setCurrentStep] = useState(0);
  const [status, setStatus] = useState<GenerationStatus>(GenerationStatus.IDLE);
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [activePresetId, setActivePresetId] = useState<string>('standard');
  
  // Progress State
  const [progress, setProgress] = useState(0);
  const [progressStep, setProgressStep] = useState('');
  
  // UI State
  const [copied, setCopied] = useState(false);

  const lang = state.language;
  const t = UI_TEXT[lang];
  const presets = PROTOCOLS[lang];

  // Helper to get step title from translation safely
  const getStepTitle = (id: string) => {
    return t.steps[id as keyof typeof t.steps] || id;
  };

  const updateState = (section: keyof MetaPromptState, key: string, value: any) => {
    setState(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
  };

  const handleLanguageChange = (newLang: Language) => {
    if (newLang === state.language) return;
    
    // Find the equivalent preset in the new language to keep configuration consistent
    const newPresets = PROTOCOLS[newLang];
    const matchingPreset = newPresets.find(p => p.id === activePresetId) || newPresets[0];
    
    setState(prev => ({
      ...prev,
      language: newLang,
      config: {
        ...prev.config,
        brutalityLevel: matchingPreset.brutality,
        analysisPhases: matchingPreset.phases
      },
      interaction: {
        ...prev.interaction,
        architectName: newLang === 'de' ? 'Blinder Fleck Architekt' : 'Blind Spot Architect',
        // Now using protocol-specific questions for language switch too
        intakeQuestions: matchingPreset.questions
      }
    }));
  };

  const applyPreset = (presetId: string) => {
    const preset = presets.find(p => p.id === presetId);
    if (preset) {
        setActivePresetId(preset.id);
        updateState('config', 'brutalityLevel', preset.brutality);
        updateState('config', 'analysisPhases', preset.phases);
        // Inject protocol-specific intake questions
        updateState('interaction', 'intakeQuestions', preset.questions);
    }
  };

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleGenerate = async () => {
    setStatus(GenerationStatus.GENERATING);
    setError(null);
    setProgress(0);
    setProgressStep('');
    
    try {
      const result = await generateMetaPrompt(state, (prog, stepMsg) => {
        setProgress(prog);
        setProgressStep(stepMsg);
      });
      setGeneratedPrompt(result);
      setStatus(GenerationStatus.COMPLETE);
    } catch (e) {
      console.error(e);
      setError("Failed to generate meta-prompt. Please try again.");
      setStatus(GenerationStatus.ERROR);
    }
  };

  const handleReset = () => {
    setStatus(GenerationStatus.IDLE);
    setGeneratedPrompt('');
    setProgress(0);
    setCurrentStep(0);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6 animate-step">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <Bot className="text-indigo-600" size={24} />
                </div>
                {t.headers.target}
              </h2>
              <p className="text-slate-500 mt-1 ml-12">{t.headers.targetDesc}</p>
            </div>
            
            <TextInput 
              label={t.labels.persona}
              value={state.interaction.architectName} 
              onChange={(v) => updateState('interaction', 'architectName', v)} 
              placeholder={t.labels.personaPlaceholder} 
            />

            <TextInput 
              label={t.labels.domain}
              value={state.intent.domain} 
              onChange={(v) => updateState('intent', 'domain', v)} 
              placeholder={t.labels.domainPlaceholder} 
            />
            
            <TextInput 
              label={t.labels.outcome}
              value={state.intent.targetOutcome} 
              onChange={(v) => updateState('intent', 'targetOutcome', v)} 
              placeholder={t.labels.outcomePlaceholder} 
            />
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 animate-step">
            <div className="mb-6">
               <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <ListTodo className="text-indigo-600" size={24} />
                </div>
                <span dangerouslySetInnerHTML={{__html: t.headers.interrogation}} />
              </h2>
              <p className="text-slate-500 mt-1 ml-12" dangerouslySetInnerHTML={{__html: t.headers.interrogationDesc}} />
            </div>
            
            <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-6">
               <div className="flex items-center gap-2 mb-3 text-indigo-700">
                 <h3 className="font-semibold text-sm uppercase tracking-wide">{t.labels.questions}</h3>
               </div>
               <p className="text-xs text-slate-500 mb-4">
                 {t.labels.questionsDesc}
               </p>
               <TextInput 
                  label={t.labels.questions}
                  value={state.interaction.intakeQuestions} 
                  onChange={(v) => updateState('interaction', 'intakeQuestions', v)} 
                  placeholder={t.labels.questionsPlaceholder}
                  multiline
               />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-step">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <Fingerprint className="text-indigo-600" size={24} />
                </div>
                {t.headers.blueprint}
              </h2>
              <p className="text-slate-500 mt-1 ml-12">{t.headers.blueprintDesc}</p>
            </div>

            {/* Protocol Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {presets.map((preset) => {
                const Icon = preset.icon;
                const isActive = activePresetId === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => applyPreset(preset.id)}
                    className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden group shadow-sm ${
                      isActive 
                        ? 'bg-indigo-50 border-indigo-500 shadow-indigo-100 ring-1 ring-indigo-500/20' 
                        : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                       <Icon size={22} className={isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-indigo-500'} />
                       {isActive && <CheckCircle2 size={16} className="text-indigo-600" />}
                    </div>
                    <h3 className={`text-xs font-bold uppercase tracking-wider mb-1.5 ${isActive ? 'text-indigo-900' : 'text-slate-700'}`}>
                      {preset.name}
                    </h3>
                    <p className={`text-[10px] leading-relaxed line-clamp-2 ${isActive ? 'text-indigo-700/80' : 'text-slate-500'}`}>
                      {preset.description}
                    </p>
                  </button>
                )
              })}
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-200">
               <CheckboxInput 
                  label={t.labels.scorecard}
                  subLabel={t.labels.scorecardSub}
                  checked={state.config.includeScorecard}
                  onChange={(v) => updateState('config', 'includeScorecard', v)}
               />
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.labels.advanced}</label>
                  <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-1 rounded-full">{t.labels.autoConfig}</span>
                </div>
                
                <SelectInput 
                    label={t.labels.brutality}
                    value={state.config.brutalityLevel} 
                    onChange={(v) => {
                      updateState('config', 'brutalityLevel', v);
                      setActivePresetId('custom');
                    }} 
                    options={[
                      ...presets.map(p => p.brutality),
                      ...(lang === 'en' ? ['Professional & Neutral', 'Enthusiastic Coach', 'Strict Teacher'] : ['Professionell & Neutral', 'Enthusiastischer Coach', 'Strenger Lehrer'])
                    ]} 
                />

                <TextInput 
                    label={t.labels.phases}
                    value={state.config.analysisPhases} 
                    onChange={(v) => {
                       updateState('config', 'analysisPhases', v);
                       setActivePresetId('custom');
                    }} 
                    placeholder={t.labels.phasesPlaceholder} 
                    multiline
                />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-step">
             <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <Play className="text-indigo-600" size={24} />
                </div>
                {t.headers.deploy}
              </h2>
              <p className="text-slate-500 mt-1 ml-12">{t.headers.deployDesc}</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-100 shadow-sm overflow-hidden">
               <div className="p-5 flex justify-between items-center bg-slate-50/50">
                  <span className="text-slate-500 text-sm font-medium">{t.labels.targetDomain}</span>
                  <span className="text-slate-900 font-bold">{state.intent.domain || 'General'}</span>
               </div>
               <div className="p-5 flex justify-between items-center">
                  <span className="text-slate-500 text-sm font-medium">{t.labels.activeProtocol}</span>
                  <span className="text-indigo-700 font-bold capitalize bg-indigo-50 px-3 py-1 rounded-full text-xs border border-indigo-100">
                     {presets.find(p => p.id === activePresetId)?.name || t.labels.customConfig}
                  </span>
               </div>
               <div className="p-5 flex justify-between items-center">
                  <span className="text-slate-500 text-sm font-medium">{t.labels.scorecard}</span>
                  <span className={`font-bold text-xs px-2.5 py-1 rounded-full border ${state.config.includeScorecard 
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                    : 'bg-slate-100 text-slate-500 border-slate-200'}`}>
                    {state.config.includeScorecard ? t.labels.enabled : t.labels.disabled}
                  </span>
               </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex items-start gap-3">
               <Wand2 className="text-indigo-600 mt-0.5" size={20} />
               <div>
                  <h4 className="font-bold text-indigo-900 text-sm mb-1">{t.headers.deployDesc}</h4>
                  <p className="text-indigo-700/80 text-xs leading-relaxed">{t.labels.awaiting}</p>
               </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (status === GenerationStatus.COMPLETE) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 animate-step">
          <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
             <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 text-green-700 rounded-lg">
                   <CheckCircle2 size={24} />
                </div>
                <div>
                   <h2 className="text-xl font-bold text-slate-900">{t.headers.generated}</h2>
                   <p className="text-sm text-slate-500">Ready to copy</p>
                </div>
             </div>
             <button onClick={handleReset} className="text-sm font-medium text-slate-500 hover:text-indigo-600 flex items-center gap-2 px-4 py-2 hover:bg-white rounded-lg transition-all">
                <RefreshCw size={16} />
                New Prompt
             </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
             <div className="p-8 lg:col-span-1 bg-slate-50/30">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">{t.headers.instructionsTitle}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6" dangerouslySetInnerHTML={{__html: t.headers.instructions}} />
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">1</span>
                    <span>Copy code block</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">2</span>
                    <span>Paste into LLM</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">3</span>
                    <span>User answers questions</span>
                  </div>
                </div>

                <button 
                  onClick={copyToClipboard}
                  className={`w-full mt-8 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold shadow-sm transition-all duration-200 ${
                    copied 
                      ? 'bg-green-600 text-white hover:bg-green-700 ring-4 ring-green-600/20' 
                      : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-200 hover:-translate-y-0.5'
                  }`}
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? t.labels.copied : t.labels.copy}
                </button>
             </div>
             
             <div className="p-0 lg:col-span-2 bg-[#1e1e1e] overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button onClick={copyToClipboard} className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-colors">
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                   </button>
                </div>
                <div className="h-[500px] overflow-auto p-8 custom-scrollbar">
                  <pre className="font-mono text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">
                    {generatedPrompt}
                  </pre>
                </div>
             </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <div className="max-w-5xl mx-auto min-h-screen flex flex-col p-4 sm:p-6 lg:p-8">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-8 sm:mb-12">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
               <Bot className="text-white" size={24} />
             </div>
             <div>
               <h1 className="text-xl font-bold tracking-tight text-slate-900">{t.title}</h1>
               <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">{t.subtitle}</p>
             </div>
           </div>

           <div className="flex bg-white rounded-lg p-1 border border-slate-200 shadow-sm">
             <button 
               onClick={() => handleLanguageChange('en')}
               className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${lang === 'en' ? 'bg-indigo-50 text-indigo-700 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
             >
               EN
             </button>
             <button 
               onClick={() => handleLanguageChange('de')}
               className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${lang === 'de' ? 'bg-indigo-50 text-indigo-700 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
             >
               DE
             </button>
           </div>
        </header>

        {/* Progress Bar (Mobile) / Steps (Desktop) */}
        <div className="mb-8 flex justify-between relative">
           <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2 rounded-full" />
           <div 
              className="absolute top-1/2 left-0 h-0.5 bg-indigo-600 -z-10 -translate-y-1/2 rounded-full transition-all duration-500" 
              style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }} 
           />
           
           {STEPS.map((step, idx) => {
             const Icon = step.icon;
             const isActive = idx === currentStep;
             const isCompleted = idx < currentStep;
             
             return (
               <button 
                 key={step.id} 
                 onClick={() => {
                   if (status !== GenerationStatus.GENERATING) {
                     setCurrentStep(idx);
                   }
                 }}
                 disabled={status === GenerationStatus.GENERATING}
                 className="flex flex-col items-center gap-2 bg-slate-50 px-2 cursor-pointer group disabled:cursor-not-allowed outline-none"
               >
                 <div 
                   className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 z-10 ${
                     isActive ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-200 scale-110' :
                     isCompleted ? 'bg-white border-indigo-600 text-indigo-600 group-hover:bg-indigo-50' :
                     'bg-white border-slate-300 text-slate-300 group-hover:border-indigo-300 group-hover:text-indigo-400'
                   }`}
                 >
                   {isCompleted ? <Check size={18} strokeWidth={3} /> : <Icon size={18} />}
                 </div>
                 <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors ${isActive ? 'text-indigo-900' : 'text-slate-400 group-hover:text-slate-600'}`}>
                    {getStepTitle(step.id)}
                 </span>
               </button>
             )
           })}
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 flex-1 flex flex-col overflow-hidden relative">
           
           {/* Generating Overlay */}
           {status === GenerationStatus.GENERATING && (
             <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-8">
                <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t.labels.compilingBtn}</h3>
                <p className="text-slate-500 font-mono text-sm">{progressStep}</p>
                <div className="w-64 h-1 bg-slate-100 rounded-full mt-6 overflow-hidden">
                   <div className="h-full bg-indigo-600 transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>
             </div>
           )}

           <div className="flex-1 p-6 sm:p-10 overflow-y-auto">
              {renderStepContent()}
           </div>

           {/* Footer Navigation */}
           <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <button 
                onClick={handleBack}
                disabled={currentStep === 0 || status === GenerationStatus.GENERATING}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  currentStep === 0 
                    ? 'text-slate-300 cursor-not-allowed' 
                    : 'text-slate-600 hover:bg-white hover:shadow-sm hover:text-slate-900'
                }`}
              >
                <ChevronLeft size={16} />
                {t.labels.back}
              </button>

              {currentStep === STEPS.length - 1 ? (
                <button 
                  onClick={handleGenerate}
                  disabled={status === GenerationStatus.GENERATING}
                  className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                  <Cpu size={18} />
                  {t.labels.generateBtn}
                </button>
              ) : (
                <button 
                  onClick={handleNext}
                  className="bg-white border border-slate-200 text-slate-900 px-6 py-2.5 rounded-xl text-sm font-bold hover:border-indigo-300 hover:text-indigo-600 hover:shadow-sm transition-all flex items-center gap-2 group"
                >
                  {t.labels.next}
                  <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              )}
           </div>
        </div>
      </div>
    </div>
  );
}