"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";
import { clsx } from "clsx";

type NeonButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: ReactNode;
  tone?: "crimson" | "rift" | "cyan";
};

export function NeonButton({ className, children, tone = "rift", ...props }: NeonButtonProps) {
  const tones = {
    crimson: "border-crimson/70 bg-crimson/20 shadow-crimson hover:bg-crimson/30",
    rift: "border-rift/70 bg-rift/20 shadow-neon hover:bg-rift/30",
    cyan: "border-cyan/70 bg-cyan/15 shadow-cyan hover:bg-cyan/25"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04, x: 3 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        "group relative min-h-14 overflow-hidden border px-7 py-3 font-display text-sm font-black uppercase tracking-normal text-white transition",
        "before:absolute before:inset-y-0 before:-left-1/2 before:w-1/2 before:skew-x-[-24deg] before:bg-white/25 before:blur-md before:transition-transform hover:before:translate-x-[420%]",
        tones[tone],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </motion.button>
  );
}
