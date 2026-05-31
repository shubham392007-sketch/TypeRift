import { clsx } from "clsx";

type HealthBarProps = {
  label: string;
  value: number;
  max: number;
  align?: "left" | "right";
  tone?: "player" | "enemy";
};

export function HealthBar({ label, value, max, align = "left", tone = "player" }: HealthBarProps) {
  const percentage = Math.max(0, Math.min(100, (value / max) * 100));
  const color = tone === "player" ? "from-rift via-magenta to-fuchsia-200" : "from-crimson via-red-500 to-orange-300";

  return (
    <div className={clsx("min-w-0 flex-1", align === "right" && "text-right")}>
      <div className={clsx("mb-1 flex items-center gap-2", align === "right" && "justify-end")}>
        <span className="font-display text-sm font-black uppercase italic text-white">{label}</span>
        <span className="font-mono text-xs text-white/60">
          {Math.ceil(value).toLocaleString()} / {max.toLocaleString()}
        </span>
      </div>
      <div className="h-5 overflow-hidden border border-white/20 bg-black/70 p-1 shadow-[inset_0_0_18px_rgba(0,0,0,.8)]">
        <div className={clsx("h-full bg-gradient-to-r transition-all duration-300", color)} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
