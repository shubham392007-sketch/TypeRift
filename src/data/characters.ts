import { Character } from "@/types/game";

export const characters: Character[] = [
  {
    id: "blaze",
    name: "Blaze Mage",
    jpName: "ブレイズメイジ",
    role: "Aggressive fire caster",
    sigil: "火",
    stats: { power: 92, speed: 70, magic: 88, defense: 58 },
    theme: {
      primary: "#ff214f",
      secondary: "#ff7a1a",
      aura: "rgba(255, 33, 79, .42)",
      gradient: "from-crimson via-ember to-yellow-300"
    },
    attackBias: ["crimson", "inferno", "flare", "ember", "meteor"]
  },
  {
    id: "shadow",
    name: "Shadow Assassin",
    jpName: "シャドウアサシン",
    role: "Speed-focused rift duelist",
    sigil: "影",
    stats: { power: 78, speed: 96, magic: 84, defense: 62 },
    theme: {
      primary: "#8b2cff",
      secondary: "#ff2ddf",
      aura: "rgba(139, 44, 255, .48)",
      gradient: "from-rift via-magenta to-fuchsia-200"
    },
    attackBias: ["phantom", "shadow", "void", "velocity", "night"]
  },
  {
    id: "thunder",
    name: "Thunder Samurai",
    jpName: "サンダーサムライ",
    role: "Electric heavy striker",
    sigil: "雷",
    stats: { power: 86, speed: 78, magic: 74, defense: 82 },
    theme: {
      primary: "#24eaff",
      secondary: "#2e63ff",
      aura: "rgba(36, 234, 255, .42)",
      gradient: "from-cyan via-blue-500 to-indigo-300"
    },
    attackBias: ["thunder", "storm", "volt", "tempest", "lightning"]
  }
];

export const enemy = {
  name: "Rival Specter",
  hp: 10000
};
