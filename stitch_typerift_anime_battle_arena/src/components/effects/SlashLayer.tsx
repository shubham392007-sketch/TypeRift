"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CombatEvent } from "@/types/game";

export function SlashLayer({ events }: { events: CombatEvent[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <AnimatePresence>
        {events.slice(-5).map((event, index) => {
          const isMistake = event.kind === "mistake";
          const isCritical = event.kind === "critical";
          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.7, x: isMistake ? 0 : -120, rotate: isMistake ? 0 : -10 }}
              animate={{ opacity: [0, 1, 0], scale: isCritical ? [0.85, 1.25, 1.05] : [0.8, 1.05, 1], x: isMistake ? 0 : 170, rotate: isMistake ? 0 : -8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: isCritical ? 0.62 : 0.42, ease: "easeOut" }}
              className="absolute left-[18%] top-[34%] h-20 w-[68%]"
              style={{ top: `${30 + index * 6}%` }}
            >
              {isMistake ? (
                <div className="absolute inset-0 bg-crimson/20 shadow-[0_0_80px_rgba(255,33,79,.7)]" />
              ) : (
                <>
                  <div
                    className="absolute left-0 top-1/2 h-3 w-full -translate-y-1/2 skew-x-[-32deg] blur-sm"
                    style={{ background: isCritical ? "linear-gradient(90deg, transparent, #fff, #ff2ddf, transparent)" : "linear-gradient(90deg, transparent, #8b2cff, #ff214f, transparent)" }}
                  />
                  <div className="absolute right-16 top-1/2 font-display text-3xl font-black text-white drop-shadow-[0_0_16px_rgba(255,255,255,.8)]">
                    {event.damage ? `${event.damage}` : ""}
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
