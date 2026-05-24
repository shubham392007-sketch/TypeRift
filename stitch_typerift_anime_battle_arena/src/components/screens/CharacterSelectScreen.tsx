"use client";

import { motion } from "framer-motion";
import { CharacterCard } from "@/components/characters/CharacterCard";
import { ParticleField } from "@/components/effects/ParticleField";
import { NeonButton } from "@/components/ui/NeonButton";
import { characters } from "@/data/characters";
import { Character } from "@/types/game";

export function CharacterSelectScreen({
  selected,
  onSelect,
  onConfirm
}: {
  selected: Character;
  onSelect: (character: Character) => void;
  onConfirm: () => void;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-void p-4 text-white sm:p-8">
      <ParticleField density={48} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(139,44,255,.25),transparent_32%),linear-gradient(130deg,rgba(255,33,79,.22),transparent_34%,rgba(36,234,255,.16))]" />
      <section className="relative z-10 mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
          <p className="font-mono text-xs uppercase text-magenta">// Select Your Warrior</p>
          <h2 className="font-display text-4xl font-black uppercase italic sm:text-6xl">Choose Your Rift Style</h2>
        </motion.div>
        <div className="grid gap-4 lg:grid-cols-3">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              selected={selected.id === character.id}
              onSelect={() => onSelect(character)}
            />
          ))}
        </div>
        <div className="mx-auto mt-6 max-w-sm">
          <NeonButton className="w-full" tone="rift" onClick={onConfirm}>Confirm</NeonButton>
        </div>
      </section>
    </main>
  );
}
