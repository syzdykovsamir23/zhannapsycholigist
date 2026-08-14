import { useEffect, useState } from "react";

export default function SignatureSpine() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const length = 2400;
  const drawn = length * (0.08 + progress * 0.92);
  const meet = Math.min(1, Math.max(0, (progress - 0.42) / 0.28));

  return (
    <div
      className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-12 lg:block xl:left-1 xl:w-14"
      aria-hidden
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 48 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M11 0 C 7 140 20 260 12 400 C 6 540 26 620 24 700"
          stroke="#6B4055"
          strokeWidth="1.1"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          strokeDasharray={length}
          strokeDashoffset={length - drawn}
          opacity={0.85 - meet * 0.25}
        />
        <path
          d="M37 0 C 41 140 28 260 36 400 C 42 540 22 620 24 700"
          stroke="#AE8A4E"
          strokeWidth="1.1"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          strokeDasharray={length}
          strokeDashoffset={length - drawn}
          opacity={0.9 - meet * 0.15}
        />
        <path
          d="M24 698 C 24 780 24 880 24 1000"
          stroke="#AE8A4E"
          strokeWidth="1.15"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          strokeDasharray={length}
          strokeDashoffset={length - drawn * meet}
          opacity={0.15 + meet * 0.75}
        />
      </svg>
    </div>
  );
}