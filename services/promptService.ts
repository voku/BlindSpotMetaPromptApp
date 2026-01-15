import { MetaPromptState, Language, ContextLoopConfig } from "../types";
import { ARCHITECT_TEMPLATES, FRAGILITY_SCORECARD_TEMPLATES } from "../constants";

function buildContextLoopSection(
  language: Language,
  contextLoop: ContextLoopConfig,
  domain: string
): string {
  if (!contextLoop.enabled) {
    return '';
  }

  const max = contextLoop.maxRounds ?? 5;

  if (language === 'de') {
    return `
4. Kontext-Loop (Interaktive Rückfragen, bevor die Analyse startet):
Das Analyse-Modell MUSS vor Phase 0 eine kurze Frage-Antwort-Runde mit dem Nutzer durchführen, um Fokus-Bereich und Kontext zu präzisieren. Es muss:
- Bis zu ${max} gezielte Rückfragen stellen.
- Die Rückfragen so wählen, dass der Fokus-Bereich konkret wird und nicht vage wie "${domain}".
- Eine einzeilige Zusammenfassung des geklärten Kontextes formulieren und vom Nutzer bestätigen lassen, bevor Phase 0 beginnt.
- Keine Annahmen treffen, wo Antworten fehlen. Stattdessen explizit nachfragen.
`;
  }

  // default: English
  return `
4. Context Clarification Loop (Interactive Q&A before analysis starts):
The Analysis Model MUST run a short Q&A loop with the user before Phase 0 to clarify the Focus Area and context. It must:
- Ask up to ${max} targeted follow-up questions.
- Shape those questions so that the Focus Area becomes concrete and not vague like "${domain}".
- Reflect back a one-sentence summary of the clarified context and get explicit confirmation before proceeding to Phase 0.
- Never fill in missing information with assumptions. It must ask instead.`;
}

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

  // Build context loop section
  const contextLoopSection = buildContextLoopSection(
    lang,
    state.config.contextLoop,
    state.intent.domain
  );

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
    .replace('{{SCORECARD_SECTION}}', scorecardSection)
    .replace('{{CONTEXT_LOOP_SECTION}}', contextLoopSection);

  if (onProgress) onProgress(100, isDe ? 'Fertiggestellt.' : 'Finalized.');
  
  return prompt;
};