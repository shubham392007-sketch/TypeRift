import { BattleStats } from "@/types/game";

export function SideStats({ stats }: { stats: BattleStats }) {
  const rows = [
    ["WPM", stats.wpm],
    ["Accuracy", `${stats.accuracy}%`],
    ["Combo", `x${stats.multiplier.toFixed(1)}`],
    ["Rank", stats.rank]
  ];

  return (
    <aside className="relative z-20 grid grid-cols-4 border border-rift/40 bg-black/75 shadow-neon lg:grid-cols-1">
      {rows.map(([label, value]) => (
        <div key={label} className="border-white/10 p-3 text-center lg:border-b">
          <p className="font-mono text-[10px] uppercase text-white/45">{label}</p>
          <p className="font-display text-3xl font-black text-white">{value}</p>
        </div>
      ))}
    </aside>
  );
}
