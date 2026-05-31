export function getMultiplier(combo: number) {
  if (combo >= 40) return 4;
  if (combo >= 25) return 3.2;
  if (combo >= 15) return 2.4;
  if (combo >= 8) return 1.8;
  if (combo >= 3) return 1.35;
  return 1;
}

export function getRank(accuracy: number, wpm: number, maxCombo: number) {
  const score = accuracy * 0.9 + wpm * 0.55 + maxCombo * 1.2;
  if (score >= 185) return "SS";
  if (score >= 155) return "S";
  if (score >= 125) return "A";
  if (score >= 95) return "B";
  return "C";
}
