"use client";

import { motion } from "framer-motion";
import { BattleStats, Character } from "@/types/game";
import { NeonButton } from "@/components/ui/NeonButton";
import { formatTime } from "@/utils/format";

export function VictoryScreen({
  character,
  stats,
  onReplay,
  onMenu
}: {
  character: Character;
  stats: BattleStats;
  onReplay: () => void;
  onMenu: () => void;
}) {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-void p-5 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_35%,rgba(139,44,255,.42),transparent_34%),radial-gradient(circle_at_75%_62%,rgba(255,33,79,.24),transparent_30%)]" />
      <motion.section initial={{ opacity: 0, y: 28, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="relative z-10 grid w-full max-w-5xl gap-5 lg:grid-cols-[1.2fr_.8fr]">
        <div className="min-h-[420px] overflow-hidden border border-rift/40 bg-black/60 p-8 shadow-neon">
          <p className="font-mono text-xs uppercase text-magenta">// Rift Cleared</p>
          <h2 className="font-display text-7xl font-black uppercase italic text-white drop-shadow-[0_0_24px_rgba(255,45,223,.8)] sm:text-8xl">Victory</h2>
          <p className="mt-3 font-display text-2xl font-black uppercase text-rift">Rank Up! A → {stats.rank}</p>
          <div className="relative mt-12 h-44">
            <div className="absolute inset-x-0 bottom-0 h-28 rounded-full blur-3xl" style={{ background: character.theme.aura }} />
            <div className="absolute left-16 bottom-4 h-36 w-48 skew-x-[-16deg] border border-white/25 bg-black/80 shadow-neon" />
            <div className="absolute left-36 bottom-28 h-20 w-20 rounded-full border border-white/25 bg-black shadow-neon" />
            <div className="absolute left-0 bottom-24 h-3 w-[70%] -rotate-12 bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <NeonButton tone="crimson" onClick={onReplay}>Play Again</NeonButton>
            <NeonButton tone="rift" onClick={onMenu}>Back To Menu</NeonButton>
          </div>
        </div>
        <div className="border border-white/10 bg-black/70 p-6 shadow-neon">
          <p className="mb-4 font-display text-2xl font-black uppercase italic">// Battle Stats</p>
          {[
            ["Total WPM", stats.wpm],
            ["Max Combo", stats.maxCombo],
            ["Accuracy", `${stats.accuracy}%`],
            ["Total Damage", stats.damage.toLocaleString()],
            ["Time Taken", formatTime(stats.elapsedSeconds)]
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between border-b border-white/10 py-3 font-mono text-sm uppercase">
              <span className="text-white/55">{label}</span>
              <span className="font-bold text-white">{value}</span>
            </div>
          ))}
          <div className="mt-8 grid place-items-center border border-rift/40 p-8">
            <span className="font-display text-8xl font-black text-rift drop-shadow-[0_0_18px_rgba(139,44,255,.9)]">{stats.rank}</span>
            <span className="font-mono text-xs uppercase text-white/55">+120 XP / +50 Rift Shards</span>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
