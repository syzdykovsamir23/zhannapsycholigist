type Tone = "on-ink" | "on-sand";

type Props = {
  convergence: number;
  tone: Tone;
};

export default function SectionSeam({ convergence, tone }: Props) {
  const gap = Math.max(8, 280 * (1 - convergence));
  const mid = 600;
  const leftEnd = mid - gap / 2;
  const rightStart = mid + gap / 2;
  const bow = 11 * (1 - convergence * 0.75);
  const color = tone === "on-ink" ? "#AE8A4E" : "#1F3B36";
  const plum = tone === "on-ink" ? "#8a5a70" : "#6B4055";
  const opacity = tone === "on-ink" ? 0.55 : 0.38;

  return (
    <div className="pointer-events-none relative h-10 w-full overflow-hidden" aria-hidden>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d={`M0 22 C ${leftEnd * 0.38} ${22 - bow}, ${leftEnd * 0.72} ${22 + bow * 0.35}, ${leftEnd} 22`}
          stroke={plum}
          strokeWidth="1"
          strokeLinecap="round"
          opacity={opacity}
        />
        <path
          d={`M${rightStart} 22 C ${rightStart + (1200 - rightStart) * 0.28} ${22 + bow * 0.35}, ${rightStart + (1200 - rightStart) * 0.62} ${22 - bow}, 1200 22`}
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          opacity={opacity + 0.08}
        />
        {convergence > 0.82 && (
          <path
            d={`M${leftEnd} 22 H ${rightStart}`}
            stroke={color}
            strokeWidth="1"
            opacity={opacity * (convergence - 0.82) * 5}
          />
        )}
      </svg>
    </div>
  );
}