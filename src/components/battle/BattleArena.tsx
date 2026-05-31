"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Character } from "@/types/game";
import { BattleHUD } from "./BattleHUD";
import { SideStats } from "./SideStats";
import { TypingConsole } from "./TypingConsole";
import { SlashLayer } from "@/components/effects/SlashLayer";
import { ParticleField } from "@/components/effects/ParticleField";
import { useBattleGame } from "@/hooks/useBattleGame";

type BattleArenaProps = {
  character: Character;
  onVictory: (game: ReturnType<typeof useBattleGame>) => void;
};

export function BattleArena({ character, onVictory }: BattleArenaProps) {
  const game = useBattleGame(character);
  const reportedVictory = useRef(false);

  useEffect(() => {
    if (game.isVictory && !reportedVictory.current) {
      reportedVictory.current = true;
      onVictory(game);
    }
  }, [game, game.isVictory, onVictory]);

  return (
    <main className="relative h-screen overflow-hidden p-2 text-white sm:p-3">
      <ParticleField density={52} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_58%,rgba(139,44,255,.32),transparent_32%),radial-gradient(circle_at_75%_52%,rgba(255,33,79,.28),transparent_30%)]" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(160deg,transparent_0_44%,rgba(255,33,79,.3)_45%,transparent_48%),linear-gradient(22deg,transparent_0_42%,rgba(139,44,255,.38)_43%,transparent_48%)]" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col gap-3 overflow-hidden border border-white/10 bg-black/30 p-3 shadow-[0_0_60px_rgba(139,44,255,.24)] backdrop-blur-sm">
        <BattleHUD
          character={character}
          playerHp={game.playerHp}
          enemyHp={game.enemyHp}
          maxPlayerHp={game.maxPlayerHp}
          maxEnemyHp={game.maxEnemyHp}
          energy={game.energy}
          stats={game.stats}
          timeLeft={game.timeLeft}
        />

        <section className="relative grid min-h-0 flex-1 gap-3 lg:grid-cols-[1fr_156px]">
          <div className="relative min-h-[280px] overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(5,3,10,.28),rgba(5,3,10,.9))]">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(105deg,transparent_0_32px,rgba(255,255,255,.05)_33px_34px)] opacity-40" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-[radial-gradient(ellipse_at_center,rgba(139,44,255,.42),transparent_68%)]" />
            <SlashLayer events={game.events} />

            <motion.div
              className="absolute bottom-10 left-[5%] h-56 w-[42%] max-w-[440px]"
              animate={{ x: game.stats.combo > 0 ? [0, 10, 0] : [0, 4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-x-10 bottom-0 h-28 rounded-full blur-2xl" style={{ background: character.theme.aura }} />
              <div className="absolute bottom-8 left-12 h-40 w-44 skew-x-[-18deg] border border-white/20 bg-black/75 shadow-neon" />
              <div className="absolute bottom-24 left-24 h-24 w-24 rounded-full border border-white/20 bg-black shadow-neon" />
              <div className="absolute bottom-32 left-0 h-3 w-72 -rotate-12 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_24px_white]" />
              <div className="absolute bottom-12 left-36 h-3 w-48 -rotate-12" style={{ background: character.theme.primary, boxShadow: `0 0 28px ${character.theme.primary}` }} />
            </motion.div>

            <motion.div
              className="absolute bottom-12 right-[4%] h-56 w-[40%] max-w-[420px]"
              animate={{ x: [0, -7, 0] }}
              transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-x-10 bottom-0 h-28 rounded-full bg-crimson/35 blur-2xl" />
              <div className="absolute bottom-8 right-14 h-44 w-44 skew-x-[18deg] border border-crimson/30 bg-black/80 shadow-crimson" />
              <div className="absolute bottom-28 right-28 h-20 w-20 rounded-full border border-crimson/30 bg-black shadow-crimson" />
              <div className="absolute bottom-20 right-8 h-3 w-64 rotate-12 bg-gradient-to-r from-transparent via-crimson to-transparent shadow-crimson" />
            </motion.div>

            <div className="absolute left-1/2 top-[18%] -translate-x-1/2 font-display text-6xl font-black italic text-white/90 drop-shadow-[0_0_18px_rgba(255,33,79,.8)]">
              VS
            </div>
            <div className="absolute bottom-4 left-4 font-display text-5xl font-black italic text-white">
              <span className="block text-sm text-magenta">Combo</span>
              {game.stats.combo}
            </div>
          </div>

          <SideStats stats={game.stats} />
        </section>

        <TypingConsole
          phrase={game.currentPhrase}
          input={game.input}
          nextPhrases={game.nextPhrases}
          combo={game.stats.combo}
          onInput={game.submitInput}
        />
        {game.isDefeat ? (
          <div className="absolute inset-0 z-40 grid place-items-center bg-black/75 p-6 backdrop-blur-sm">
            <div className="max-w-md border border-crimson/60 bg-black/90 p-7 text-center shadow-crimson">
              <p className="font-mono text-xs uppercase text-crimson">// Rift Collapse</p>
              <h2 className="font-display text-5xl font-black uppercase italic text-white">Defeat</h2>
              <p className="mt-2 text-sm uppercase text-white/60">The rival broke your rhythm. Re-enter the arena and rebuild the combo.</p>
              <button
                onClick={game.reset}
                className="mt-6 border border-crimson/70 bg-crimson/20 px-6 py-3 font-display text-sm font-black uppercase text-white shadow-crimson"
              >
                Retry Battle
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}
