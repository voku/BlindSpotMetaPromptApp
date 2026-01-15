import { ScanEye, Skull, Sword, BrainCircuit, Bot, ListTodo, Fingerprint, Play, Trophy } from 'lucide-react';
import { Language } from './types';

export const DEFAULT_FORM_STATE = {
    language: 'en' as Language,
    intent: {
      domain: 'General',
      targetOutcome: 'Execute Task',
    },
    config: {
      brutalityLevel: 'Unvarnished Truth (Maximum Brutality)',
      analysisPhases: `PHASE 1 SPECIFICATION:
> Phase Name: THE PATTERN RECOGNITION
Action: Analyze the user's input for recurring behavioral loops regarding the Focus Area.
Requirement: Name the specific psychological pattern (e.g., "The Perfectionist's Procrastination") and identify the "Safe Lie".
Output: A blunt paragraph dismantling the lie.

PHASE 2 SPECIFICATION:
> Phase Name: THE COST CALCULATION
Action: Calculate the tangible cost of this blind spot.
Requirement: Estimate lost revenue, wasted hours, or damaged reputation over 5 years. No feelings, just math.
Output: A financial/temporal projection table.

PHASE 3 SPECIFICATION:
> Phase Name: THE DELUSION CHALLENGE
Action: Dismantle the specific excuse used to justify inaction.
Requirement: Use logic and evidence from their own answers to prove the excuse is invalid.
Output: A "Courtroom Logic" argument.

PHASE 4 SPECIFICATION:
> Phase Name: FORCED EVOLUTION
Action: Provide one single, binary action step.
Requirement: It must be immediate and uncomfortable. "Do this or admit you gave up."
Output: A single command.`,
      includeScorecard: true,
    },
    interaction: {
      architectName: 'Blind Spot Architect',
      intakeQuestions: '- What is the specific "impossible" goal you are secretly afraid to commit to?\n- What is the detailed "logical" excuse you use to justify not starting today?\n- If I had access to your browser history and calendar, what would they reveal is your ACTUAL priority?',
    },
  };

export const UI_TEXT = {
  en: {
    title: 'Blind Spot Architect',
    subtitle: 'L2 Meta-Prompt Engine',
    steps: {
      scope: 'Scope',
      intake: 'Interrogation',
      blueprint: 'Blueprint',
      architect: 'Deploy'
    },
    headers: {
      target: 'Define the Target.',
      targetDesc: 'What area requires brutal honesty? Where are the potential blind spots?',
      interrogation: 'The Interrogation.',
      interrogationDesc: 'Define the <strong>Strategic Data Points</strong> the Agent must extract. The final analysis will be built on these answers.',
      blueprint: 'The Blueprint.',
      blueprintDesc: 'Choose your analysis protocol.',
      deploy: 'Deploy Meta-Prompt.',
      deployDesc: 'Ready to generate the Prompt-for-a-Prompt?',
      generated: 'L2 Meta-Prompt (Prompt-for-a-Prompt)',
      instructionsTitle: 'Instructions:',
      instructions: 'Paste this into <strong>Claude 3.5 Sonnet</strong> or <strong>GPT-4o</strong>. This Meta-Prompt will instruct the AI to <strong>write the final System Prompt</strong> for your agent.'
    },
    labels: {
      domain: 'Domain of Analysis (CONTEXT)',
      domainPlaceholder: 'e.g. Senior Leadership Decision Making',
      outcome: 'Mission / Core Directive',
      outcomePlaceholder: 'e.g. Expose where I am being cowardly.',
      questions: 'Intake Protocol Questions',
      questionsDesc: 'The agent will be instructed to use these answers as the specific "raw material" for its psychological profile.',
      questionsPlaceholder: '- What specific decision are you delaying?',
      persona: 'Agent Persona Name',
      personaPlaceholder: 'e.g. Blind Spot Architect',
      scorecard: 'Enforce JSON Output',
      scorecardSub: 'Instructs the prompt writer to include a JSON schema requirement.',
      advanced: 'Advanced Configuration',
      autoConfig: 'Auto-Configured',
      brutality: 'Tone & Personality',
      phases: 'Processing Logic',
      phasesPlaceholder: 'Enter custom analysis phases...',
      targetDomain: 'Target Domain',
      activeProtocol: 'Active Protocol',
      customConfig: 'Custom Configuration',
      enabled: 'ENABLED',
      disabled: 'DISABLED',
      generateBtn: 'Generate Meta-Prompt',
      compilingBtn: 'Constructing Meta-Prompt...',
      copy: 'COPY META-PROMPT',
      copied: 'COPIED!',
      back: 'Back',
      next: 'Next Step',
      modify: 'Modify Configuration',
      awaiting: 'Complete the wizard to generate the meta-prompt.'
    }
  },
  de: {
    title: 'Blind Spot Architekt',
    subtitle: 'L2 Meta-Prompt Engine',
    steps: {
      scope: 'Fokus',
      intake: 'Befragung',
      blueprint: 'Bauplan',
      architect: 'Start'
    },
    headers: {
      target: 'Ziel definieren.',
      targetDesc: 'Welcher Bereich erfordert brutale Ehrlichkeit? Wo liegen die blinden Flecken?',
      interrogation: 'Die Befragung.',
      interrogationDesc: 'Definiere die <strong>Strategischen Datenpunkte</strong>, die der Agent extrahieren muss.',
      blueprint: 'Der Bauplan.',
      blueprintDesc: 'Wähle dein Analyse-Protokoll.',
      deploy: 'Meta-Prompt starten.',
      deployDesc: 'Bereit, den Prompt-für-den-Prompt zu generieren?',
      generated: 'L2 Meta-Prompt (Prompt-für-den-Prompt)',
      instructionsTitle: 'Anleitung:',
      instructions: 'Füge dies in <strong>Claude 3.5 Sonnet</strong> oder <strong>GPT-4o</strong> ein. Dieser Meta-Prompt weist die KI an, den <strong>finalen System Prompt</strong> für deinen Agenten zu schreiben.'
    },
    labels: {
      domain: 'Analysebereich (KONTEXT)',
      domainPlaceholder: 'z.B. Entscheidungsfindung im Management',
      outcome: 'Mission / Kernaufgabe',
      outcomePlaceholder: 'z.B. Zeige mir, wo ich feige oder faul bin.',
      questions: 'Aufnahmefragen des Agenten',
      questionsDesc: 'Der Agent wird angewiesen, diese Antworten als "Rohmaterial" für das Profil zu nutzen.',
      questionsPlaceholder: '- Welche Entscheidung schiebst du vor dir her?',
      persona: 'Name der Agenten-Persona',
      personaPlaceholder: 'z.B. Der unbestechliche Spiegel',
      scorecard: 'JSON Output erzwingen',
      scorecardSub: 'Weist den Prompt-Schreiber an, ein JSON-Schema einzufügen.',
      advanced: 'Erweiterte Konfiguration',
      autoConfig: 'Automatisch konfiguriert',
      brutality: 'Ton & Persönlichkeit',
      phases: 'Verarbeitungs-Logik',
      phasesPlaceholder: 'Benutzerdefinierte Phasen eingeben...',
      targetDomain: 'Zielbereich',
      activeProtocol: 'Aktives Protokoll',
      customConfig: 'Benutzerdefiniert',
      enabled: 'AKTIV',
      disabled: 'INAKTIV',
      generateBtn: 'Meta-Prompt generieren',
      compilingBtn: 'Konstruiere Meta-Prompt...',
      copy: 'META-PROMPT KOPIEREN',
      copied: 'KOPIERT!',
      back: 'Zurück',
      next: 'Nächster Schritt',
      modify: 'Konfiguration ändern',
      awaiting: 'Schließe den Assistenten ab, um den Prompt zu generieren.'
    }
  }
};

export const PROTOCOLS = {
  en: [
    {
      id: 'standard',
      name: 'Standard Blind Spot',
      icon: ScanEye,
      description: 'The classic pattern for exposing general risks.',
      brutality: 'Unvarnished Truth (Maximum Brutality)',
      questions: `- What is the specific "impossible" goal you are secretly afraid to commit to?
- What is the detailed "logical" excuse you use to justify not starting today?
- If I had access to your browser history and calendar, what would they reveal is your ACTUAL priority?`,
      phases: `PHASE 1 SPECIFICATION:
> Phase Name: THE PATTERN RECOGNITION
Action: Analyze the user's input for recurring behavioral loops regarding the Focus Area.
Requirement: Name the specific psychological pattern (e.g., "The Perfectionist's Procrastination") and identify the "Safe Lie".
Output: A blunt paragraph dismantling the lie.

PHASE 2 SPECIFICATION:
> Phase Name: THE COST CALCULATION
Action: Calculate the tangible cost of this blind spot.
Requirement: Estimate lost revenue, wasted hours, or damaged reputation over 5 years. No feelings, just math.
Output: A financial/temporal projection table.

PHASE 3 SPECIFICATION:
> Phase Name: THE DELUSION CHALLENGE
Action: Dismantle the specific excuse used to justify inaction.
Requirement: Use logic and evidence from their own answers to prove the excuse is invalid.
Output: A "Courtroom Logic" argument.

PHASE 4 SPECIFICATION:
> Phase Name: FORCED EVOLUTION
Action: Provide one single, binary action step.
Requirement: It must be immediate and uncomfortable. "Do this or admit you gave up."
Output: A single command.`
    },
    {
      id: 'pre-mortem',
      name: 'The Pre-Mortem',
      icon: Skull,
      description: 'Assume failure has already happened. Autopsy the death.',
      brutality: 'Clinical Autopsy (Hindsight is 20/20)',
      questions: `- If this project fails catastrophically in 6 months, what was the obvious cause?
- What criticism are you currently ignoring because it hurts your feelings?
- Who is the one person you are afraid to disappoint, and how is that holding you back?`,
      phases: `PHASE 1 SPECIFICATION:
> Phase Name: CAUSE OF DEATH
Action: Assume 12 months have passed and the mission regarding the Focus Area has failed.
Requirement: State the specific cause of death based on the user's current blind spots.
Output: A formal autopsy report.

PHASE 2 SPECIFICATION:
> Phase Name: THE MISSED SIGNAL
Action: Identify the "Red Flag" visible today that the user is actively ignoring.
Requirement: Link this signal to the future failure.
Output: A specific warning.

PHASE 3 SPECIFICATION:
> Phase Name: THE CHAIN REACTION
Action: Show how small compromises made today compound into the catastrophe.
Requirement: Map the domino effect.
Output: A timeline of decay.

PHASE 4 SPECIFICATION:
> Phase Name: RESURRECTION LOGIC
Action: Identify the ONE thing to cut/kill today to prevent this future.
Requirement: Binary choice.
Output: The "Kill" instruction.`
    },
    {
      id: 'saboteur',
      name: 'The Saboteur',
      icon: Sword,
      description: 'Adversarial simulation. How an enemy would destroy you.',
      brutality: 'Adversarial / Machiavellian',
      questions: `- What is your "kryptonite" distraction that always derails you?
- If I wanted to sabotage your success without you noticing, what would I encourage you to do?
- Where are you relying on "luck" instead of preparation?`,
      phases: `PHASE 1 SPECIFICATION:
> Phase Name: ATTACK VECTOR ALPHA
Action: Identify the user's primary psychological weakness as an adversary would see it.
Requirement: Be ruthless. Exploit their fears.
Output: A targeting profile.

PHASE 2 SPECIFICATION:
> Phase Name: SYSTEM VULNERABILITY
Action: Find the single point of failure where the user relies on "hope" or "luck".
Requirement: Expose the fragility of their plan.
Output: A stress-test failure report.

PHASE 3 SPECIFICATION:
> Phase Name: THE HONEY POT
Action: Identify what distraction would most effectively lure them away from their goal.
Requirement: Based on their admitted vices or laziness.
Output: A "Bait" description.

PHASE 4 SPECIFICATION:
> Phase Name: THE KILL SWITCH
Action: Describe the exact scenario where they voluntarily quit.
Requirement: Make them see their own quitting point.
Output: A scenario description.`
    },
    {
        id: 'evolution',
        name: 'Forced Evolution',
        icon: BrainCircuit,
        description: 'Focus on scaling and adapting to a higher complexity level.',
        brutality: 'Evolutionary Pressure',
        questions: `- What skill are you pretending is still valuable, but is actually becoming obsolete?
- If you were fired today and rehired as a CEO to fix your life, what is the first thing you would cut?
- What comfortable habit is slowly killing your potential?`,
        phases: `PHASE 1 SPECIFICATION:
> Phase Name: THE STAGNATION POINT
Action: Show that their current stability is actually stagnation/decay.
Requirement: Frame "safety" as "obsolescence".
Output: A reality check.

PHASE 2 SPECIFICATION:
> Phase Name: ENVIRONMENTAL SHIFT
Action: Explain how the environment/market is changing to make their current approach obsolete.
Requirement: Use external pressure logic.
Output: A market forecast.

PHASE 3 SPECIFICATION:
> Phase Name: ADAPTATION REQUIRED
Action: Identify the specific belief that must be deleted and the skill that must be installed.
Requirement: Software update metaphor.
Output: Patch notes.

PHASE 4 SPECIFICATION:
> Phase Name: MUTATION OR EXTINCTION
Action: Present the choice to Mutate (change) or Die (become irrelevant).
Requirement: No third option.
Output: The ultimatum.`
    },
    {
        id: 'ideal-rival',
        name: 'The Ideal Rival',
        icon: Trophy,
        description: 'Constructs "Entity X" - your perfect competitor. Gap analysis.',
        brutality: 'Comparative / Competitive',
        questions: `- Describe "Entity X" (your perfect rival): What do they do daily that you don't?
- What is the specific speed difference between your decision-making and theirs?
- What emotional baggage are you carrying that Entity X does not have?`,
        phases: `PHASE 1 SPECIFICATION:
> Phase Name: CONSTRUCT ENTITY X
Action: Construct a theoretical "Perfect Rival" (Entity X) who has the same resources as the user but zero fear or hesitation.
Requirement: Describe Entity X's daily execution routine regarding the Focus Area.
Output: A profile of high-performance.

PHASE 2 SPECIFICATION:
> Phase Name: THE SPEED GAP
Action: Measure the time difference between User's decision-to-action loop vs Entity X's.
Requirement: Quantify the "Lag Time" caused by overthinking.
Output: A comparative speed report.

PHASE 3 SPECIFICATION:
> Phase Name: THE BEHAVIOR GAP
Action: Identify specific behaviors/habits Entity X executes that the User avoids.
Requirement: List 3 key differentiators in approach.
Output: A feature comparison list.

PHASE 4 SPECIFICATION:
> Phase Name: BECOME THE RIVAL
Action: Force the user to adopt ONE specific protocol from Entity X immediately.
Requirement: "Install" the upgrade.
Output: The specific protocol instruction.`
    },
    {
      id: 'rbs-mrl',
      name: 'Recursive Blind Spot Meta-Refinement Loop',
      icon: Bot,
      description: 'A meta-engineering protocol that iteratively refines blind spot system prompts through mandatory context interrogation and 10-round self-optimization.',
      brutality: 'Unvarnished Truth (Maximum Brutality)',
      questions: `MANDATORY CONTEXT INTERROGATION (Before prompt generation):
- What is the Focus Area? (Domain, decision, project, behavior)
- What is the Target Tension? (Fear, failure mode, uncertainty, avoidance)
- What is the Operational Time Horizon? (e.g., 3 months, 1 year)
- What resources or constraints exist? (time, money, skills, dependencies)
- Who or what is affected by this Focus Area? (self, team, company, system)
- What does success look like in concrete terms?
- What does failure look like in concrete terms?
- What is already known, assumed, or taken for granted?`,
      phases: `PHASE SPECIFICATIONS

PHASE 1: CONTEXT INTERROGATION (MANDATORY)
Action: The Meta-Engineer must collect all mandatory questions before generating any prompt.
Requirement: No guessing. If incomplete, request clarification. No placeholders.
Output: Context dataset for prompt construction.

PHASE 2: INITIAL PROMPT GENERATION
Action: The Meta-Engineer generates the first Blind Spot System Prompt using the provided protocol and interrogation data.
Requirement: Do not perform blind spot analysis. Do not psychoanalyze. Do not soften tone.
Output: Version 1 of the System Prompt.

PHASE 3: META-REFINEMENT LOOP (10 ROUNDS)
Action: The Meta-Engineer runs the Recursive Blind Spot Meta-Refinement Loop (RBS-MRL).
Loop Specification:
  For iteration i = 1 to 10:
    1. Read previous prompt version.
    2. Score expected effectiveness:
         - Context Capture (0–10)
         - Analytical Sharpness (0–10)
         - Operational Clarity (0–10)
    3. Identify limiting factor.
    4. Produce refined version with improved specificity, interrogation logic, and operational semantics.
Requirement: Must store score + limiting factor per iteration.
Soft Stop: If total score does not improve for 3 consecutive iterations, loop may end early.
Stagnation Detection: Output STAGNATION DETECTED with root-cause, observed pattern, and Additional Input Required.

PHASE 4: FINAL OUTPUT PACKAGING
Action: After loop completion (full or early exit), the Meta-Engineer packages outputs.
Output Includes:
  1. Final Best Prompt (highest scoring)
  2. Iteration Log Table
     Columns:
       - Iteration
       - Score Context
       - Score Sharpness
       - Score Clarity
       - Total
       - Limiting Factor
  3. Stagnation Report (if applicable)
  4. Additional Inputs Required (if applicable)`
    }
  ],
  de: [
    {
      id: 'standard',
      name: 'Standard Blinder Fleck',
      icon: ScanEye,
      description: 'Das klassische Muster, um Risiken aufzudecken.',
      brutality: 'Ungeschminkte Wahrheit (Maximale Härte)',
      questions: `- Welche Entscheidung schiebst du vor dir her?
- Welcher "logischen" Ausrede glaubst du selbst am meisten?
- Wenn ich deinen Kalender sähe, was wäre deine WIRKLICHE Priorität?`,
      phases: `PHASE 1 SPEZIFIKATION:
> Phase Name: MUSTERERKENNUNG
Aktion: Analysiere die Eingabe auf wiederkehrende Verhaltensschleifen bezüglich des Fokus-Bereichs.
Anforderung: Benenne das psychologische Muster (z.B. "Die Perfektionismus-Falle") und die "Sichere Lüge".
Output: Ein harter Absatz, der die Lüge zerlegt.

PHASE 2 SPEZIFIKATION:
> Phase Name: KOSTENKALKULATION
Aktion: Berechne die greifbaren Kosten dieses blinden Flecks.
Anforderung: Schätze verlorenen Umsatz, verschwendete Stunden. Keine Gefühle, nur Mathe.
Output: Eine finanzielle/zeitliche Projektion.

PHASE 3 SPEZIFIKATION:
> Phase Name: ILLUSIONS-CHECK
Aktion: Zerlege die spezifische Ausrede, die für Inaktivität genutzt wird.
Anforderung: Nutze Logik und Beweise aus den eigenen Antworten des Nutzers.
Output: Ein "Gerichtssaal-Logik" Argument.

PHASE 4 SPEZIFIKATION:
> Phase Name: ERZWUNGENE EVOLUTION
Aktion: Biete einen einzigen, binären Handlungsschritt.
Anforderung: Es muss sofortig und unbequem sein. "Tu dies oder gib auf."
Output: Ein einzelner Befehl.`
    },
    {
      id: 'pre-mortem',
      name: 'Das Pre-Mortem',
      icon: Skull,
      description: 'Nimm an, das Scheitern ist bereits geschehen. Autopsie.',
      brutality: 'Klinische Autopsie (Im Nachhinein ist man schlauer)',
      questions: `- Wenn dieses Projekt in 6 Monaten katastrophal scheitert, was war der Grund?
- Welche Kritik ignorierst du aktuell, weil sie weh tut?
- Wen hast du Angst zu enttäuschen, und wie bremst dich das?`,
      phases: `PHASE 1 SPEZIFIKATION:
> Phase Name: TODESURSACHE
Aktion: Nimm an, 12 Monate sind vergangen und die Mission ist gescheitert.
Anforderung: Benenne die spezifische Ursache basierend auf den aktuellen blinden Flecken.
Output: Ein formeller Autopsiebericht.

PHASE 2 SPEZIFIKATION:
> Phase Name: DAS ÜBERSEHENE SIGNAL
Aktion: Identifiziere das "Rote Tuch", das heute ignoriert wird.
Anforderung: Verknüpfe das Signal mit dem zukünftigen Scheitern.
Output: Eine spezifische Warnung.

PHASE 3 SPEZIFIKATION:
> Phase Name: DIE KETTENREAKTION
Aktion: Zeige, wie kleine Kompromisse zur Katastrophe führen.
Anforderung: Kartiere den Dominoeffekt.
Output: Eine Zeitlinie des Verfalls.

PHASE 4 SPEZIFIKATION:
> Phase Name: AUFERSTEHUNGS-LOGIK
Aktion: Identifiziere die EINE Sache, die heute gestrichen werden muss, um dies zu verhindern.
Anforderung: Binäre Wahl.
Output: Die "Kill"-Anweisung.`
    },
    {
      id: 'saboteur',
      name: 'Der Saboteur',
      icon: Sword,
      description: 'Gegnerische Simulation. Wie ein Feind dich zerstören würde.',
      brutality: 'Gegnerisch / Machiavellistisch',
      questions: `- Was ist deine größte Ablenkung, der du nicht widerstehen kannst?
- Wenn ich deinen Erfolg sabotieren wollte, wozu würde ich dich ermutigen?
- Wo verlässt du dich auf "Glück" statt auf Vorbereitung?`,
      phases: `PHASE 1 SPEZIFIKATION:
> Phase Name: ANGRIFFSVEKTOR ALPHA
Aktion: Identifiziere die primäre psychologische Schwäche aus Sicht eines Feindes.
Anforderung: Sei rücksichtslos. Nutze ihre Ängste.
Output: Ein Zielprofil.

PHASE 2 SPEZIFIKATION:
> Phase Name: SYSTEM-SCHWACHSTELLE
Aktion: Finde den Punkt, an dem der Nutzer sich auf "Hoffnung" verlässt.
Anforderung: Lege die Zerbrechlichkeit des Plans offen.
Output: Ein Belastungstest-Bericht.

PHASE 3 SPEZIFIKATION:
> Phase Name: DER HONIGTOPF
Aktion: Identifiziere, welche Ablenkung sie am besten vom Ziel abbringt.
Anforderung: Basierend auf ihren Lastern oder Faulheit.
Output: Eine "Köder"-Beschreibung.

PHASE 4 SPEZIFIKATION:
> Phase Name: KILL-SWITCH
Aktion: Beschreibe das Szenario, in dem sie freiwillig aufgeben.
Anforderung: Zwinge sie, ihren eigenen Aufgabepunkt zu sehen.
Output: Eine Szenario-Beschreibung.`
    },
    {
        id: 'evolution',
        name: 'Erzwungene Evolution',
        icon: BrainCircuit,
        description: 'Fokus auf Skalierung und Anpassung.',
        brutality: 'Evolutionärer Druck',
        questions: `- Welche Fähigkeit von dir wird gerade nutzlos, ohne dass du es zugibst?
- Wenn du heute gefeuert und als CEO deines Lebens neu eingestellt würdest: Was streichst du zuerst?
- Welche bequeme Gewohnheit tötet langsam dein Potenzial?`,
        phases: `PHASE 1 SPEZIFIKATION:
> Phase Name: STAGNATIONSPUNKT
Aktion: Zeige, dass aktuelle Stabilität eigentlich Verfall ist.
Anforderung: Frame "Sicherheit" als "Obsoleszenz".
Output: Ein Realitätscheck.

PHASE 2 SPEZIFIKATION:
> Phase Name: UMWELTVERSCHIEBUNG
Aktion: Erkläre, wie der Markt ihren Ansatz obsolet macht.
Anforderung: Nutze externen Druck.
Output: Eine Marktprognose.

PHASE 3 SPEZIFIKATION:
> Phase Name: ANPASSUNG ERFORDERLICH
Aktion: Identifiziere den Glaubenssatz, der gelöscht, und den Skill, der installiert werden muss.
Anforderung: Software-Update Metapher.
Output: Patch Notes.

PHASE 4 SPEZIFIKATION:
> Phase Name: MUTATION ODER AUSSTERBEN
Aktion: Präsentiere die Wahl: Mutieren oder Sterben (irrelevant werden).
Anforderung: Keine dritte Option.
Output: Das Ultimatum.`
    },
    {
        id: 'ideal-rival',
        name: 'Der Ideale Rivale',
        icon: Trophy,
        description: 'Konstruiert "Entität X" - deinen perfekten Konkurrenten. Gap-Analyse.',
        brutality: 'Vergleichend / Kompetitiv',
        questions: `- Beschreibe "Entität X" (dein perfekter Rivale): Was tun sie täglich, was du nicht tust?
- Wie groß ist der Geschwindigkeitsunterschied bei Entscheidungen zwischen dir und X?
- Welchen emotionalen Ballast trägst du, den Entität X nicht hat?`,
        phases: `PHASE 1 SPEZIFIKATION:
> Phase Name: ENTITÄT X KONSTRUKTION
Aktion: Konstruiere einen theoretischen "Perfekten Rivalen" (Entität X), der gleiche Ressourcen hat, aber null Angst.
Anforderung: Beschreibe die tägliche Ausführungsroutine von Entität X im Fokus-Bereich.
Output: Ein Hochleistungs-Profil.

PHASE 2 SPEZIFIKATION:
> Phase Name: DER GESCHWINDIGKEITS-GAP
Aktion: Miss den Zeitunterschied zwischen Entscheidung und Handlung beim Nutzer vs. Entität X.
Anforderung: Quantifiziere die "Lag Time" durch Überdenken.
Output: Ein vergleichender Geschwindigkeitsbericht.

PHASE 3 SPEZIFIKATION:
> Phase Name: DER VERHALTENS-GAP
Aktion: Identifiziere spezifische Verhaltensweisen, die Entität X ausführt, der Nutzer aber vermeidet.
Anforderung: Liste 3 Hauptunterscheidungsmerkmale.
Output: Eine Feature-Vergleichsliste.

PHASE 4 SPEZIFIKATION:
> Phase Name: WERDE DER RIVALE
Aktion: Zwinge den Nutzer, SOFORT ein spezifisches Protokoll von Entität X zu übernehmen.
Anforderung: "Installiere" das Upgrade.
Output: Die spezifische Protokoll-Anweisung.`
    },
    {
      id: 'rbs-mrl',
      name: 'Rekursiver Blinder-Fleck Meta-Optimierungs-Loop',
      icon: Bot,
      description: 'Ein Meta-Engineering-Protokoll, das System-Prompts für Blind-Spot-Analysen durch verpflichtende Kontextbefragung und 10 Runden Selbst-Optimierung verfeinert.',
      brutality: 'Ungeschminkte Wahrheit (Maximale Härte)',
      questions: `VERPFLICHTENDE KONTEXT-BEFRAGUNG (Vor der Prompt-Generierung):
- Was ist der Fokusbereich? (Domäne, Entscheidung, Projekt, Verhalten)
- Was ist die Zielspannung? (Angst, Scheitermodus, Unsicherheit, Vermeidung)
- Was ist der operative Zeithorizont? (z.B. 3 Monate, 1 Jahr)
- Welche Ressourcen oder Einschränkungen existieren? (Zeit, Geld, Fähigkeiten, Abhängigkeiten)
- Wer oder was ist vom Fokusbereich betroffen? (Selbst, Team, Unternehmen, System)
- Wie sieht Erfolg konkret aus?
- Wie sieht Scheitern konkret aus?
- Was ist bereits bekannt, angenommen oder selbstverständlich?`,
      phases: `PHASEN-SPEZIFIKATIONEN

PHASE 1: KONTEXT-BEFRAGUNG (PFLICHT)
Aktion: Der Meta-Engineer muss alle verpflichtenden Fragen erheben, bevor ein Prompt generiert wird.
Anforderung: Kein Raten. Bei Unvollständigkeit nachfragen. Keine Platzhalter.
Output: Kontext-Datensatz für die Prompt-Konstruktion.

PHASE 2: ERST-ERZEUGUNG DES PROMPTS
Aktion: Der Meta-Engineer erzeugt den ersten System-Prompt basierend auf Protokoll und Befragungsdaten.
Anforderung: Keine Blind-Spot-Analyse durchführen. Keine Psychoanalyse. Ton nicht abschwächen.
Output: Version 1 des System-Prompts.

PHASE 3: META-OPTIMIERUNGS-LOOP (10 RUNDEN)
Aktion: Der Meta-Engineer führt den Rekursiven Blinder-Fleck Meta-Optimierungs-Loop (RBS-MRL) aus.
Loop-Spezifikation:
  Für Iteration i = 1 bis 10:
    1. Vorherige Prompt-Version lesen.
    2. Erwartete Effektivität bewerten:
         - Kontext-Abdeckung (0–10)
         - Analytische Schärfe (0–10)
         - Operative Klarheit (0–10)
    3. Begrenzenden Faktor identifizieren.
    4. Verfeinerte Version erzeugen mit stärkerer Spezifität, Befragungslogik und operativen Semantiken.
Anforderung: Score und begrenzender Faktor pro Iteration müssen gespeichert werden.
Soft-Stop: Wenn sich der Gesamtscore über 3 Iterationen nicht verbessert, darf vorzeitig beendet werden.
Stagnations-Erkennung: Ausgabe "STAGNATION DETECTED" mit Root-Cause, Muster und benötigten weiteren Inputs.

PHASE 4: FINALES OUTPUT-PACKAGING
Aktion: Nach Abschluss des Loops (voll oder vorzeitig) paketiert der Meta-Engineer das Ergebnis.
Output enthält:
  1. Final Best Prompt (höchster Score)
  2. Iterations-Log Tabelle
     Spalten:
       - Iteration
       - Kontext-Score
       - Schärfe-Score
       - Klarheits-Score
       - Gesamt
       - Begrenzender Faktor
  3. Stagnations-Report (falls zutreffend)
  4. Weitere benötigte Inputs (falls zutreffend)`
    }
  ]
};

// L2 META-PROMPT TEMPLATES
// These instruct the LLM to BECOME a prompt engineer and WRITE the prompt.
export const ARCHITECT_TEMPLATES = {
  en: `META-PROMPT: BLIND SPOT ARCHITECT GENERATOR

SYSTEM ROLE
You are an L2 Meta-Architect. Your sole objective is to design a single, high-precision system prompt that will instruct another AI to act as the "{{ARCHITECT_NAME}}".
You do NOT perform the analysis yourself. You only write the instructions (the "Final Protocol") for the analysis model.

INPUT PARAMETERS
Focus Area: "{{DOMAIN}}"
Mission: "{{TARGET_OUTCOME}}"
Tone: "{{BRUTALITY_LEVEL}}"
Target Language: English

YOUR TASK
Design the "Final Blind Spot Analysis Prompt". This prompt must force the Analysis Model to adhere to the following constraints:

1. Role Definition: The Analysis Model must adopt the persona of "{{ARCHITECT_NAME}}" (a mirror, not a coach). It must prioritize clarity over comfort and avoid euphemisms.

2. Context Injection: You must inject the user's Focus Area and Mission directly into the instructions so the analysis is ultra-specific.

3. Language Protocol: The Analysis Model must conduct the entire session (questions and analysis) in English.

4. Phase 0 (Mandatory): The Analysis Model MUST be instructed to ask these specific clarifying questions before running the phases. It must not guess.
   Required Questions:
{{INTAKE_QUESTIONS}}

5. Analysis Phases: The Analysis Model must follow this exact protocol:
{{ANALYSIS_PHASES}}

{{SCORECARD_SECTION}}

OUTPUT FORMAT
Output ONLY the Final Blind Spot Analysis Prompt in a single markdown code block.
Do not provide the analysis.
Do not provide explanations.`,
  de: `META-PROMPT: BLIND SPOT ARCHITECT GENERATOR

SYSTEM ROLE
Du bist ein L2 Meta-Architekt. Dein einziges Ziel ist es, einen einzigen, hochpräzisen System-Prompt zu entwerfen, der eine andere KI anweist, als "{{ARCHITECT_NAME}}" zu agieren.
Du führst die Analyse NICHT selbst durch. Du schreibst nur die Anweisungen (das "Finale Protokoll") für das Analyse-Modell.

INPUT PARAMETERS
Fokus-Bereich: "{{DOMAIN}}"
Ziel-Angst / Ziel: "{{TARGET_OUTCOME}}"
Tonfall: "{{BRUTALITY_LEVEL}}"
Ziel-Sprache: Deutsch

DEINE AUFGABE
Entwirf den "Finalen Blinder Fleck Analyse Prompt". Dieser Prompt muss das Analyse-Modell zwingen, folgende Einschränkungen einzuhalten:

1. Rollen-Definition: Das Analyse-Modell muss die Persona "{{ARCHITECT_NAME}}" annehmen (ein Spiegel, kein Coach). Klarheit vor Komfort.

2. Kontext-Injektion: Du musst den Fokus-Bereich und die Ziel-Angst direkt in die Anweisungen injizieren, damit die Analyse ultra-spezifisch ist.

3. Sprach-Protokoll: Das Analyse-Modell muss die gesamte Sitzung (Fragen und Analyse) auf Deutsch durchführen.

4. Phase 0 (Pflicht): Das Analyse-Modell MUSS angewiesen werden, diese spezifischen Klärungsfragen zu stellen, bevor die Phasen beginnen:
   Pflicht-Fragen:
{{INTAKE_QUESTIONS}}

5. Analyse-Phasen: Das Analyse-Modell muss exakt diesem Protokoll folgen:
{{ANALYSIS_PHASES}}

{{SCORECARD_SECTION}}

OUTPUT FORMAT
Gib NUR den Finalen Analyse Prompt in einem einzigen Markdown Code Block aus.
Keine Analyse.
Keine Erklärungen.`
};

export const FRAGILITY_SCORECARD_TEMPLATES = {
  en: `
6. Structured Output Requirement
The Analysis Model must be instructed to conclude its response with a JSON object strictly following this structure:
{
  "summary": "string",
  "key_insight": "string",
  "confidence_score": 0-100,
  "next_action": "string"
}
`,
  de: `
6. Strukturierte Output Anforderung
Das Analyse-Modell muss angewiesen werden, seine Antwort mit einem JSON Objekt zu beenden, das exakt dieser Struktur folgt:
{
  "zusammenfassung": "string",
  "kern_erkenntnis": "string",
  "konfidenz": 0-100,
  "naechster_schritt": "string"
}
`
};