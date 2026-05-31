"use client";

import { motion } from "framer-motion";
import { Character } from "@/types/game";
import { StatBar } from "@/components/ui/StatBar";
import { clsx } from "clsx";

type CharacterCardProps = {
  character: Character;
  selected?: boolean;
  onSelect?: () => void;
};

export function CharacterCard({ character, selected, onSelect }: CharacterCardProps) {
  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ y: -8, scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        "group relative min-h-[420px] overflow-hidden border bg-black/65 p-4 text-left transition",
        selected ? "border-white shadow-neon" : "border-white/15 hover:border-white/50"
      )}
      style={{ boxShadow: selected ? `0 0 34px ${character.theme.aura}` : undefined }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${character.theme.gradient} opacity-18 transition-opacity group-hover:opacity-28`} />
      <div className="absolute inset-x-8 top-8 h-48 rounded-full opacity-70 blur-3xl" style={{ background: character.theme.aura }} />
      <div className="absolute -right-8 top-4 font-display text-[9rem] font-black leading-none text-white/5">{character.sigil}</div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_10%,rgba(0,0,0,.25)_42%,rgba(0,0,0,.95)_100%)]" />

      <div className="relative z-10 flex h-full min-h-[388px] flex-col justify-between">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <span className="grid h-10 w-10 place-items-center border border-white/25 bg-black/50 font-display text-xl font-black" style={{ color: character.theme.primary }}>
              {character.sigil}
            </span>
            <span className="font-mono text-[10px] uppercase text-white/55">Rift Unit</span>
          </div>
          <div className="grid min-h-52 place-items-center">
            <div className="relative h-44 w-36">
              <div className="absolute inset-x-8 bottom-0 h-36 rounded-t-full bg-black/55" />
              <div className="absolute left-1/2 top-2 h-20 w-20 -translate-x-1/2 rounded-full border border-white/20 bg-black shadow-[0_0_32px_currentColor]" style={{ color: character.theme.primary }} />
              <div className="absolute left-1/2 top-24 h-24 w-32 -translate-x-1/2 skew-x-[-10deg] border border-white/20 bg-black/70 shadow-[0_0_32px_currentColor]" style={{ color: character.theme.secondary }} />
              <div className="absolute left-3 top-28 h-2 w-32 -rotate-12 bg-white shadow-[0_0_18px_white]" />
              <div className="absolute left-10 top-8 h-2 w-14 bg-white/80" />
              <div className="absolute right-10 top-8 h-2 w-14 bg-white/80" />
            </div>
          </div>
        </div>

        <div className="relative">
          <h3 className="font-display text-2xl font-black uppercase italic text-white">{character.name}</h3>
          <p className="mb-4 font-arcade text-xs uppercase" style={{ color: character.theme.secondary }}>
            {character.jpName}
          </p>
          <p className="mb-4 min-h-8 text-xs uppercase tracking-normal text-white/65">{character.role}</p>
          <div className="space-y-2">
            <StatBar label="Power" value={character.stats.power} color={character.theme.primary} />
            <StatBar label="Speed" value={character.stats.speed} color={character.theme.secondary} />
            <StatBar label="Magic" value={character.stats.magic} color={character.theme.primary} />
            <StatBar label="Defense" value={character.stats.defense} color={character.theme.secondary} />
          </div>
        </div>
      </div>
    </motion.button>
  );
}
