"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { characters, enemy } from "@/data/characters";
import { calculateDamage, enemyPressureDamage } from "@/systems/combatSystem";
import { getMultiplier, getRank } from "@/systems/comboSystem";
import { calculateMetrics, validateInput } from "@/systems/typingEngine";
import { generateQueue } from "@/systems/wordGenerator";
import { BattleStats, Character, CombatEvent } from "@/types/game";
import { clamp } from "@/utils/format";
import { useAudio } from "./useAudio";

const MAX_PLAYER_HP = 10000;
const ROUND_SECONDS = 84;

export function useBattleGame(character: Character = characters[1]) {
  const { play } = useAudio();
  const [queue, setQueue] = useState(() => generateQueue(8, character.attackBias));
  const [input, setInput] = useState("");
  const [playerHp, setPlayerHp] = useState(MAX_PLAYER_HP);
  const [enemyHp, setEnemyHp] = useState(enemy.hp);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [energy, setEnergy] = useState(18);
  const [damage, setDamage] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [totalChars, setTotalChars] = useState(0);
  const [events, setEvents] = useState<CombatEvent[]>([]);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [isVictory, setIsVictory] = useState(false);
  const [isDefeat, setIsDefeat] = useState(false);
  const startedAt = useRef<number>(Date.now());
  const lastPressureAt = useRef<number>(Date.now());
  const eventId = useRef(1);

  const currentPhrase = queue[0];
  const elapsedSeconds = ROUND_SECONDS - timeLeft;
  const metrics = useMemo(
    () =>
      calculateMetrics({
        correctChars,
        totalChars,
        mistakes,
        elapsedMs: Date.now() - startedAt.current
      }),
    [correctChars, mistakes, totalChars]
  );
  const multiplier = getMultiplier(combo);

  const stats: BattleStats = {
    ...metrics,
    combo,
    maxCombo,
    multiplier,
    rank: getRank(metrics.accuracy, metrics.wpm, maxCombo),
    damage,
    elapsedSeconds
  };

  const pushEvent = useCallback((event: Omit<CombatEvent, "id">) => {
    const id = eventId.current;
    eventId.current += 1;
    setEvents((items) => [...items.slice(-8), { id, ...event }]);
  }, []);

  const reset = useCallback(() => {
    setQueue(generateQueue(8, character.attackBias));
    setInput("");
    setPlayerHp(MAX_PLAYER_HP);
    setEnemyHp(enemy.hp);
    setCombo(0);
    setMaxCombo(0);
    setEnergy(18);
    setDamage(0);
    setMistakes(0);
    setCorrectChars(0);
    setTotalChars(0);
    setEvents([]);
    setTimeLeft(ROUND_SECONDS);
    setIsVictory(false);
    setIsDefeat(false);
    startedAt.current = Date.now();
    lastPressureAt.current = Date.now();
  }, [character.attackBias]);

  useEffect(() => {
    reset();
  }, [reset]);

  useEffect(() => {
    if (isVictory || isDefeat) return;

    const interval = window.setInterval(() => {
      setTimeLeft((value) => {
        if (value <= 1) {
          setIsDefeat(true);
          return 0;
        }
        return value - 1;
      });

      if (Date.now() - lastPressureAt.current > 1800) {
        lastPressureAt.current = Date.now();
        setPlayerHp((hp) => {
          const next = clamp(hp - enemyPressureDamage(ROUND_SECONDS - timeLeft, character.stats.defense), 0, MAX_PLAYER_HP);
          if (next <= 0) setIsDefeat(true);
          return next;
        });
      }
    }, 1000);

    return () => window.clearInterval(interval);
  }, [character.stats.defense, isDefeat, isVictory, timeLeft]);

  const submitInput = useCallback(
    (value: string) => {
      if (isVictory || isDefeat) return;
      play("key");

      const normalized = value.replace(/\s+/g, " ").toLowerCase();
      const result = validateInput(currentPhrase, normalized);
      setInput(value);
      setTotalChars((count) => count + Math.max(value.length - input.length, 0));

      if (!result.isPrefixValid) {
        setMistakes((count) => count + 1);
        setCombo(0);
        setEnergy((amount) => clamp(amount - 8, 0, 100));
        setInput("");
        pushEvent({ kind: "mistake", word: currentPhrase });
        play("mistake");
        return;
      }

      if (result.isComplete) {
        const nextCombo = combo + 1;
        const critical = nextCombo > 0 && nextCombo % 8 === 0;
        const dealt = calculateDamage(character, currentPhrase.length, nextCombo, critical);

        setCorrectChars((count) => count + currentPhrase.length);
        setCombo(nextCombo);
        setMaxCombo((count) => Math.max(count, nextCombo));
        setEnergy((amount) => clamp(amount + (critical ? 18 : 10), 0, 100));
        setDamage((amount) => amount + dealt);
        setEnemyHp((hp) => {
          const next = clamp(hp - dealt, 0, enemy.hp);
          if (next <= 0) {
            setIsVictory(true);
            pushEvent({ kind: "victory", damage: dealt, word: currentPhrase });
            play("victory");
          }
          return next;
        });
        setQueue((items) => [...items.slice(1), ...generateQueue(1, character.attackBias)]);
        setInput("");
        pushEvent({ kind: critical ? "critical" : "slash", damage: dealt, word: currentPhrase });
        play(critical ? "combo" : "slash");
      }
    },
    [character, combo, currentPhrase, input.length, isDefeat, isVictory, play, pushEvent]
  );

  return {
    character,
    currentPhrase,
    nextPhrases: queue.slice(1, 4),
    input,
    playerHp,
    enemyHp,
    maxPlayerHp: MAX_PLAYER_HP,
    maxEnemyHp: enemy.hp,
    timeLeft,
    energy,
    stats,
    events,
    isVictory,
    isDefeat,
    submitInput,
    reset
  };
}
