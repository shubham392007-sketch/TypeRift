"use client";

import { useCallback, useMemo } from "react";
import { Howl } from "howler";

type SoundId = "key" | "slash" | "combo" | "impact" | "hover" | "victory" | "mistake";

const soundFiles: Record<SoundId, string[]> = {
  key: ["/assets/sounds/key-click.mp3"],
  slash: ["/assets/sounds/slash.mp3"],
  combo: ["/assets/sounds/combo.mp3"],
  impact: ["/assets/sounds/impact.mp3"],
  hover: ["/assets/sounds/menu-hover.mp3"],
  victory: ["/assets/sounds/victory.mp3"],
  mistake: ["/assets/sounds/mistake.mp3"]
};

export function useAudio() {
  const bank = useMemo(() => {
    if (typeof window === "undefined") return null;

    return Object.fromEntries(
      Object.entries(soundFiles).map(([id, src]) => [
        id,
        new Howl({
          src,
          volume: id === "victory" ? 0.45 : 0.25,
          preload: false,
          html5: false,
          onloaderror: () => undefined,
          onplayerror: () => undefined
        })
      ])
    ) as Record<SoundId, Howl>;
  }, []);

  const play = useCallback(
    (id: SoundId) => {
      try {
        bank?.[id]?.play();
      } catch {
        // Sound files are placeholders in Phase 1; missing assets should never block play.
      }
    },
    [bank]
  );

  return { play };
}
