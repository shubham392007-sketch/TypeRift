export type GameScreen = "landing" | "select" | "battle" | "victory";

export type CharacterId = "blaze" | "shadow" | "thunder";

export type CharacterTheme = {
  primary: string;
  secondary: string;
  aura: string;
  gradient: string;
};

export type Character = {
  id: CharacterId;
  name: string;
  jpName: string;
  role: string;
  stats: {
    power: number;
    speed: number;
    magic: number;
    defense: number;
  };
  theme: CharacterTheme;
  sigil: string;
  attackBias: string[];
};

export type TypingMetrics = {
  wpm: number;
  accuracy: number;
  correctChars: number;
  totalChars: number;
  mistakes: number;
};

export type BattleStats = TypingMetrics & {
  combo: number;
  maxCombo: number;
  multiplier: number;
  rank: string;
  damage: number;
  elapsedSeconds: number;
};

export type CombatEvent = {
  id: number;
  kind: "slash" | "critical" | "mistake" | "victory";
  damage?: number;
  word?: string;
};
