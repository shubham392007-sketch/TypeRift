"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { HealthBar } from "./HealthBar";
import { Character, BattleStats } from "@/types/game";
import { enemy } from "@/data/characters";
import { formatTime } from "@/utils/format";

type BattleHUDProps = {
  character: Character;
  playerHp: number;
  enemyHp: number;
  maxPlayerHp: number;
  maxEnemyHp: number;
  energy: number;
  stats: BattleStats;
  timeLeft: number;
};

export function BattleHUD({ character, playerHp, enemyHp, maxPlayerHp, maxEnemyHp, energy, stats, timeLeft }: BattleHUDProps) {
  return (
    <div className="relative z-20 grid gap-3 lg:grid-cols-[1fr_180px_1fr]">
      <HealthBar label={character.name} value={playerHp} max={maxPlayerHp} />
      <div className="border border-rift/50 bg-black/75 p-2 text-center shadow-neon">
        <p className="font-mono text-[10px] uppercase text-white/50">Time</p>
        <p className="font-display text-2xl font-black text-white">{formatTime(timeLeft)}</p>
        <div className="mt-2 flex justify-center gap-1">
          {[0, 1, 2].map((item) => (
            <span key={item} className="h-3 w-3 rounded-full border border-rift bg-rift/25" />
          ))}
        </div>
      </div>
      <HealthBar label={enemy.name} value={enemyHp} max={maxEnemyHp} align="right" tone="enemy" />
      <div className="lg:col-span-3 grid gap-3 md:grid-cols-[1fr_220px]">
        <div className="border border-white/10 bg-black/45 p-2">
          <div className="mb-1 flex items-center justify-between font-mono text-[10px] uppercase text-white/55">
            <span className="flex items-center gap-1"><Zap className="h-3 w-3 text-cyan" /> Rift Energy</span>
            <span>{Math.round(energy)} / 100</span>
          </div>
          <div className="h-3 bg-black/80">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan via-rift to-magenta shadow-[0_0_20px_rgba(139,44,255,.75)]"
              animate={{ width: `${energy}%` }}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 border border-white/10 bg-black/55 text-center">
          <div className="p-2">
            <p className="font-mono text-[10px] uppercase text-white/45">Combo</p>
            <p className="font-display text-2xl font-black text-white">{stats.combo}</p>
          </div>
          <div className="border-x border-white/10 p-2">
            <p className="font-mono text-[10px] uppercase text-white/45">Multi</p>
            <p className="font-display text-2xl font-black text-magenta">x{stats.multiplier.toFixed(1)}</p>
          </div>
          <div className="p-2">
            <p className="font-mono text-[10px] uppercase text-white/45">Rank</p>
            <p className="font-display text-2xl font-black text-cyan">{stats.rank}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
