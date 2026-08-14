type IconProps = {
  className?: string;
  stroke?: string;
};

const common = {
  fill: "none",
  strokeWidth: 1.15,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconTherapy({ className = "w-8 h-8", stroke = "currentColor" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <circle cx="16.5" cy="20" r="9.2" stroke={stroke} {...common} />
      <circle cx="23.5" cy="20" r="9.2" stroke={stroke} {...common} />
    </svg>
  );
}

export function IconAroma({ className = "w-8 h-8", stroke = "currentColor" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect x="8.5" y="13" width="7.2" height="16" rx="0.6" stroke={stroke} {...common} />
      <rect x="16.4" y="10" width="7.2" height="19" rx="0.6" stroke={stroke} {...common} />
      <rect x="24.3" y="15" width="7.2" height="14" rx="0.6" stroke={stroke} {...common} />
      <path d="M12.1 13V10.4" stroke={stroke} {...common} />
      <path d="M20 10V7.6" stroke={stroke} {...common} />
      <path d="M27.9 15V12.2" stroke={stroke} {...common} />
    </svg>
  );
}

export function IconEnergy({ className = "w-8 h-8", stroke = "currentColor" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <path d="M12 26.5c3.2-6.8 12.8-6.8 16 0" stroke={stroke} {...common} />
      <path d="M9.2 22.2c5.4-9.4 16.2-9.4 21.6 0" stroke={stroke} {...common} />
      <path d="M7 18c6.8-11.4 19.2-11.4 26 0" stroke={stroke} {...common} />
      <circle cx="20" cy="29.2" r="1.15" fill={stroke} stroke="none" />
    </svg>
  );
}

export function IconBusiness({ className = "w-8 h-8", stroke = "currentColor" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <path d="M8 28.5h24" stroke={stroke} {...common} />
      <path d="M11 28.5V18.2h6.4V28.5" stroke={stroke} {...common} />
      <path d="M17.4 28.5V13h6.6v15.5" stroke={stroke} {...common} />
      <path d="M24 28.5V9.5H31v19" stroke={stroke} {...common} />
      <path d="M11 18.2 17.4 13 24 9.5" stroke={stroke} {...common} />
    </svg>
  );
}

export function IconCrisis({ className = "w-9 h-9", stroke = "currentColor" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <path d="M6 22.5c4.2-1.6 7.4-6.8 10.4-6.6 2.2.15 3.3 3.4 4.6 3.4 2.6 0 3.2-5.6 6.6-5.4 3.2.2 4.6 5.6 6.4 8.6" stroke={stroke} {...common} />
      <path d="M6 27.8h28" stroke={stroke} {...common} />
      <path d="M20 16.8v5.4" stroke={stroke} {...common} />
      <path d="M20 27.8v-2.6" stroke={stroke} {...common} />
    </svg>
  );
}

export function IconSelf({ className = "w-9 h-9", stroke = "currentColor" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <circle cx="20" cy="20" r="5.2" stroke={stroke} {...common} />
      <path d="M20 8.2v3.2M20 28.6v3.2M8.2 20h3.2M28.6 20h3.2" stroke={stroke} {...common} />
      <path d="M11.6 11.6l2.2 2.2M26.2 26.2l2.2 2.2M11.6 28.4l2.2-2.2M26.2 13.8l2.2-2.2" stroke={stroke} {...common} />
    </svg>
  );
}

export function IconScale({ className = "w-9 h-9", stroke = "currentColor" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <path d="M8 29h24" stroke={stroke} {...common} />
      <path d="M10.5 29V22.4h6.2V29" stroke={stroke} {...common} />
      <rect x="18.4" y="16.2" width="7.4" height="12.8" stroke={stroke} {...common} />
      <path d="M27.4 29V11.4H34" stroke={stroke} {...common} />
      <path d="M30.2 14.4 34 11.4 31 8.6" stroke={stroke} {...common} />
    </svg>
  );
}

export function IconArrow({ className = "w-4 h-4", stroke = "currentColor" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden>
      <path d="M3 8h10M9.2 4.2 13 8l-3.8 3.8" stroke={stroke} fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMeet({ className = "w-12 h-12", stroke = "currentColor" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <rect x="6.5" y="13" width="22" height="16" rx="1.2" stroke={stroke} {...common} />
      <path d="M28.5 18.4 39 13.2v15.6L28.5 23.6" stroke={stroke} {...common} />
      <path d="M10 34.5c2.4-2.6 6.2-2.6 8.6 0" stroke={stroke} {...common} />
      <path d="M29.4 34.5c2.4-2.6 6.2-2.6 8.6 0" stroke={stroke} {...common} />
    </svg>
  );
}

export function IconWaves({ className = "w-12 h-12", stroke = "currentColor" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path d="M6 28c4.2-7.4 8.4 7.4 12.6 0s8.4 7.4 12.6 0 8.4 7.4 10.8 0" stroke={stroke} {...common} />
      <path d="M6 20c4.2-7.4 8.4 7.4 12.6 0s8.4 7.4 12.6 0 8.4 7.4 10.8 0" stroke={stroke} {...common} />
    </svg>
  );
}

export function IconFlaskCards({ className = "w-12 h-12", stroke = "currentColor" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path d="M16 8.5h6.4V18l7.2 14.6H8.8L16 18V8.5Z" stroke={stroke} {...common} />
      <path d="M15.2 8.5h8" stroke={stroke} {...common} />
      <path d="M14.6 24.2h9.2" stroke={stroke} {...common} />
      <rect x="29.2" y="20.5" width="11.2" height="15.4" rx="0.6" stroke={stroke} {...common} />
      <rect x="32.2" y="17.2" width="11.2" height="15.4" rx="0.6" stroke={stroke} {...common} />
    </svg>
  );
}

export function IconSpiral({ className = "w-12 h-12", stroke = "currentColor" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        d="M24 24c0-2.2 1.8-3.4 3.4-3.4 3.4 0 5.2 3.2 5.2 6.2 0 6-5 10.4-10.8 10.4C14.2 37.2 8.8 31 8.8 23.6 8.8 14.6 16.2 8 24.8 8c9.6 0 17 7.8 17 17.4"
        stroke={stroke}
        {...common}
      />
      <circle cx="24" cy="24" r="1.15" fill={stroke} stroke="none" />
    </svg>
  );
}

export function IconChart({ className = "w-12 h-12", stroke = "currentColor" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path d="M8 38h32" stroke={stroke} {...common} />
      <path d="M8 32V10" stroke={stroke} {...common} />
      <path d="M8 30.5 18.2 22l7.2 5.4L40 11.5" stroke={stroke} {...common} />
      <path d="M33.6 11.5H40v6.4" stroke={stroke} {...common} />
    </svg>
  );
}

export function IconPlay({ className = "w-10 h-10", stroke = "currentColor" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <circle cx="20" cy="20" r="15.2" stroke={stroke} {...common} />
      <path d="M17 14.8 27 20 17 25.2V14.8Z" stroke={stroke} {...common} />
    </svg>
  );
}