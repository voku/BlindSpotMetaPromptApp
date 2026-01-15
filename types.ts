export type Language = 'en' | 'de';

export interface IntentState {
    domain: string;
    targetOutcome: string;
}

export interface ContextLoopConfig {
    enabled: boolean;
    maxRounds: number;
    requireNonGeneralDomain?: boolean;
}
  
export interface ConfigState {
    brutalityLevel: string;
    analysisPhases: string;
    includeScorecard: boolean;
    contextLoop: ContextLoopConfig;
}
  
export interface InteractionState {
    architectName: string;
    intakeQuestions: string;
}
  
export interface MetaPromptState {
    language: Language;
    intent: IntentState;
    config: ConfigState;
    interaction: InteractionState;
}
  
export enum GenerationStatus {
    IDLE = 'idle',
    GENERATING = 'generating',
    COMPLETE = 'complete',
    ERROR = 'error'
}