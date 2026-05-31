"use client";

import { motion } from "framer-motion";

type TypingConsoleProps = {
  phrase: string;
  input: string;
  nextPhrases: string[];
  combo: number;
  onInput: (value: string) => void;
};

export function TypingConsole({ phrase, input, nextPhrases, combo, onInput }: TypingConsoleProps) {
  return (
    <div className="relative z-30 mx-auto w-full max-w-4xl">
      <div className="mb-2 flex justify-center gap-2 font-mono text-[10px] uppercase text-white/45">
        <span className="text-rift">Next Word</span>
        {nextPhrases.map((item) => (
          <span key={item} className="hidden sm:inline">/ {item}</span>
        ))}
      </div>
      <motion.div
        animate={{ boxShadow: combo > 0 ? `0 0 ${18 + combo}px rgba(139,44,255,.65)` : "0 0 18px rgba(139,44,255,.25)" }}
        className="relative overflow-hidden border border-rift/60 bg-black/80 p-3 shadow-neon sm:p-4"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="mb-3 flex flex-wrap justify-center gap-1 font-display text-3xl font-black uppercase tracking-[.18em] text-white sm:text-4xl">
          {phrase.split("").map((char, index) => {
            const typed = input[index];
            const correct = typed?.toLowerCase() === char.toLowerCase();
            const active = index === input.length;
            return (
              <span key={`${char}-${index}`} className={active ? "text-cyan drop-shadow-[0_0_12px_rgba(36,234,255,.9)]" : typed ? (correct ? "text-white" : "text-crimson") : "text-white/35"}>
                {char === " " ? "\u00a0" : char}
              </span>
            );
          })}
        </div>
        <input
          autoFocus
          value={input}
          onChange={(event) => onInput(event.target.value)}
          className="w-full border border-white/10 bg-white/[.04] px-4 py-2 text-center font-mono text-lg uppercase text-white outline-none transition focus:border-cyan focus:shadow-cyan"
          placeholder="TYPE THE ATTACK"
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
        />
      </motion.div>
    </div>
  );
}
