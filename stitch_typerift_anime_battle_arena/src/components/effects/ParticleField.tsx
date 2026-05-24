export function ParticleField({ density = 42 }: { density?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: density }).map((_, index) => (
        <span
          key={index}
          className="absolute h-1 w-1 animate-spark rounded-full bg-white shadow-[0_0_12px_currentColor]"
          style={{
            color: index % 3 === 0 ? "#24eaff" : index % 2 === 0 ? "#ff2ddf" : "#ff214f",
            left: `${(index * 37) % 100}%`,
            top: `${12 + ((index * 17) % 82)}%`,
            animationDelay: `${(index % 9) * 0.18}s`,
            animationDuration: `${1.5 + (index % 7) * 0.22}s`
          }}
        />
      ))}
    </div>
  );
}
