import { clsx } from "clsx";

type StatBarProps = {
  label: string;
  value: number;
  color?: string;
};

export function StatBar({ label, value, color = "#8b2cff" }: StatBarProps) {
  return (
    <div className="grid grid-cols-[64px_1fr_34px] items-center gap-2 text-[10px] uppercase text-white/70">
      <span className="font-arcade font-bold">{label}</span>
      <span className="h-2 overflow-hidden border border-white/15 bg-black/70">
        <span
          className={clsx("block h-full shadow-[0_0_12px_currentColor]")}
          style={{ width: `${value}%`, color, backgroundColor: color }}
        />
      </span>
      <span className="font-mono text-white/85">{value}</span>
    </div>
  );
}
