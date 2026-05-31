"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { BattleArena } from "@/components/battle/BattleArena";
import { CharacterSelectScreen } from "@/components/screens/CharacterSelectScreen";
import { LandingScreen } from "@/components/screens/LandingScreen";
import { VictoryScreen } from "@/components/screens/VictoryScreen";
import { characters } from "@/data/characters";
import { BattleStats, Character, GameScreen } from "@/types/game";

const defaultStats: BattleStats = {
  wpm: 0,
  accuracy: 100,
  correctChars: 0,
  totalChars: 0,
  mistakes: 0,
  combo: 0,
  maxCombo: 0,
  multiplier: 1,
  rank: "C",
  damage: 0,
  elapsedSeconds: 0
};

export function GameShell() {
  const [screen, setScreen] = useState<GameScreen>("landing");
  const [selected, setSelected] = useState<Character>(characters[1]);
  const [lastStats, setLastStats] = useState<BattleStats>(defaultStats);

  const showVictory = useCallback((game: { stats: BattleStats }) => {
    setLastStats(game.stats);
    window.setTimeout(() => setScreen("victory"), 650);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={screen}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 0.28 }}
      >
        {screen === "landing" ? (
          <LandingScreen onEnter={() => setScreen("select")} onPractice={() => setScreen("battle")} />
        ) : null}
        {screen === "select" ? (
          <CharacterSelectScreen selected={selected} onSelect={setSelected} onConfirm={() => setScreen("battle")} />
        ) : null}
        {screen === "battle" ? <BattleArena character={selected} onVictory={showVictory} /> : null}
        {screen === "victory" ? (
          <VictoryScreen
            character={selected}
            stats={lastStats}
            onReplay={() => setScreen("battle")}
            onMenu={() => setScreen("landing")}
          />
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
}
