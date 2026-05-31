"use client";

import { motion } from "framer-motion";
import { Swords } from "lucide-react";
import { CyberBackdrop } from "@/components/effects/CyberBackdrop";
import { ParticleField } from "@/components/effects/ParticleField";
import { NeonButton } from "@/components/ui/NeonButton";

export function LandingScreen({ onEnter, onPractice }: { onEnter: () => void; onPractice: () => void }) {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden p-5 text-white">
      <CyberBackdrop />
      <ParticleField />
      <motion.section
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl text-center"
      >
        <div className="mx-auto mb-5 grid h-24 w-24 place-items-center border border-rift/60 bg-black/60 shadow-neon">
          <Swords className="h-12 w-12 text-white drop-shadow-[0_0_16px_rgba(139,44,255,.9)]" />
        </div>
        <h1 className="font-display text-[clamp(4rem,14vw,11rem)] font-black uppercase italic leading-none text-white drop-shadow-[0_0_26px_rgba(139,44,255,.95)]">
          TypeRift
        </h1>
        <p className="mt-2 font-display text-2xl font-black uppercase tracking-normal text-rift sm:text-4xl">Type To Survive</p>
        <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
          <NeonButton tone="crimson" onClick={onEnter}>Enter Arena</NeonButton>
          <NeonButton tone="rift" onClick={onPractice}>Practice Mode</NeonButton>
        </div>
        <div className="mt-8 flex justify-center gap-4 font-mono text-[10px] uppercase text-white/50">
          <span>Rank Unranked</span>
          <span>//</span>
          <span>v0.1.0 Phase 1</span>
        </div>
      </motion.section>
    </main>
  );
}
