"use client";

import { motion } from "framer-motion";

export function CyberBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-void">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(139,44,255,.42),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(255,33,79,.25),transparent_24%),radial-gradient(circle_at_80%_25%,rgba(36,234,255,.25),transparent_26%),linear-gradient(180deg,#05030a_0%,#10061a_48%,#05030a_100%)]" />
      <motion.div
        className="absolute inset-x-[-8%] bottom-0 h-[62%]"
        animate={{ x: ["-1.4%", "1.4%", "-1.4%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute bottom-0 left-[4%] h-[78%] w-[9%] bg-black/55 shadow-[0_0_40px_rgba(139,44,255,.35)]" />
        <div className="absolute bottom-0 left-[18%] h-[58%] w-[11%] bg-black/65" />
        <div className="absolute bottom-0 left-[32%] h-[84%] w-[8%] bg-black/60" />
        <div className="absolute bottom-0 left-[48%] h-[52%] w-[14%] bg-black/65" />
        <div className="absolute bottom-0 left-[68%] h-[80%] w-[10%] bg-black/60" />
        <div className="absolute bottom-0 left-[84%] h-[64%] w-[9%] bg-black/65" />
        {Array.from({ length: 22 }).map((_, index) => (
          <span
            key={index}
            className="absolute h-8 w-1 bg-crimson/70 shadow-crimson"
            style={{
              left: `${8 + ((index * 11) % 84)}%`,
              bottom: `${12 + ((index * 19) % 62)}%`,
              height: `${20 + ((index * 7) % 48)}px`,
              backgroundColor: index % 3 === 0 ? "#24eaff" : index % 2 === 0 ? "#ff2ddf" : "#ff214f"
            }}
          />
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_46%,rgba(255,255,255,.13)_47%,transparent_49%,transparent_100%)] opacity-50 animate-scan" />
      <div className="absolute inset-x-[-15%] bottom-[-10%] h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,.18),transparent_62%)] blur-3xl animate-fog" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.06)_0_1px,transparent_1px_90px),repeating-linear-gradient(0deg,rgba(255,255,255,.04)_0_1px,transparent_1px_72px)] opacity-20" />
    </div>
  );
}
