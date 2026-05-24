const openers = [
  "phantom",
  "shadow",
  "thunder",
  "crimson",
  "velocity",
  "neon",
  "rift",
  "void",
  "inferno",
  "arc",
  "meteor",
  "storm",
  "cyber",
  "dragon",
  "lunar",
  "omega"
];

const closers = [
  "strike",
  "ignition",
  "burst",
  "slash",
  "blade",
  "breaker",
  "fang",
  "pulse",
  "edge",
  "flare",
  "drive",
  "surge",
  "impact",
  "cascade",
  "reversal",
  "requiem"
];

export function generateAttackPhrase(bias: string[] = []) {
  const weightedOpeners = [...bias, ...bias, ...openers];
  const first = weightedOpeners[Math.floor(Math.random() * weightedOpeners.length)];
  const second = closers[Math.floor(Math.random() * closers.length)];
  return `${first} ${second}`;
}

export function generateQueue(count: number, bias: string[] = []) {
  return Array.from({ length: count }, () => generateAttackPhrase(bias));
}
