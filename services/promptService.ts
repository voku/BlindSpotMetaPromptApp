import { MetaPromptState } from "../types";
import { ARCHITECT_TEMPLATES, FRAGILITY_SCORECARD_TEMPLATES } from "../constants";

export const generateMetaPrompt = async (
  state: MetaPromptState,
  onProgress?: (progress: number, step: string) => void
): Promise<string> => {
  const isDe = state.language === 'de';
  
  // Simulation steps for the "dynamic delay"
  const steps = [
    { p: 10, msg: isDe ? 'Kontext wird initialisiert...' : 'Initializing context...' },
    { p: 30, msg: isDe ? 'Domänen-Einschränkungen analysieren...' : 'Analyzing domain constraints...' },
    { p: 55, msg: isDe ? 'Brutalitäts-Protokolle anwenden...' : 'Applying brutality protocols...' },
    { p: 80, msg: isDe ? 'Architekt wird konstruiert...' : 'Constructing Architect...' },
    { p: 95, msg: isDe ? 'Optimierung läuft...' : 'Optimizing output...' }
  ];

  for (const step of steps) {
    if (onProgress) onProgress(step.p, step.msg);
    // Random delay between 100ms and 300ms for a "computing" feel
    await new Promise(r => setTimeout(r, Math.random() * 200 + 100));
  }

  // Actual generation logic
  const lang = state.language;
  const template = ARCHITECT_TEMPLATES[lang];
  const scorecardTemplate = FRAGILITY_SCORECARD_TEMPLATES[lang];

  const scorecardSection = state.config.includeScorecard 
    ? scorecardTemplate 
    : '';

  // Ensure fields are populated to avoid {{KEY}} artifacts
  const architectName = state.interaction.architectName || (lang === 'de' ? 'Blind Spot Architekt' : 'Blind Spot Architect');
  const domain = state.intent.domain || (lang === 'de' ? 'Allgemein' : 'General');
  const targetOutcome = state.intent.targetOutcome || (lang === 'de' ? 'Aufgabe ausführen' : 'Execute Task');

  let prompt = template
    .replace(/{{ARCHITECT_NAME}}/g, architectName)
    .replace(/{{DOMAIN}}/g, domain)
    .replace(/{{TARGET_OUTCOME}}/g, targetOutcome)
    .replace(/{{BRUTALITY_LEVEL}}/g, state.config.brutalityLevel)
    .replace('{{INTAKE_QUESTIONS}}', state.interaction.intakeQuestions)
    .replace('{{ANALYSIS_PHASES}}', state.config.analysisPhases)
    .replace('{{SCORECARD_SECTION}}', scorecardSection);

  if (onProgress) onProgress(100, isDe ? 'Fertiggestellt.' : 'Finalized.');
  
  return prompt;
};