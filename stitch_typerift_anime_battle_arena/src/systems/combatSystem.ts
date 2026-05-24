import { Character } from "@/types/game";
import { getMultiplier } from "./comboSystem";

export function calculateDamage(character: Character, phraseLength: number, combo: number, critical: boolean) {
  const base = 105 + phraseLength * 8 + character.stats.power * 0.8 + character.stats.magic * 0.45;
  const speedBonus = character.stats.speed * 0.22;
  const criticalBonus = critical ? 1.65 : 1;
  return Math.round((base + speedBonus) * getMultiplier(combo) * criticalBonus);
}

export function enemyPressureDamage(elapsedSeconds: number, defense: number) {
  const pressure = 8 + Math.floor(elapsedSeconds / 12) * 2;
  return Math.max(4, Math.round(pressure * (1 - defense / 240)));
}
