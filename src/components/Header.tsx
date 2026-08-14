import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Обо мне" },
  { href: "#services", label: "Услуги" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#booking", label: "Записаться" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 ${
        scrolled ? "bg-ink" : "bg-ink/70"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-5 py-3 sm:px-6 md:px-10 lg:px-14">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <svg viewBox="0 0 22 28" className="h-7 w-5 shrink-0" aria-hidden>
              <path
                d="M6 1.5C3.4 9 9.4 15.6 11 26.2"
                stroke="#8a5a70"
                fill="none"
                strokeWidth="1.15"
                strokeLinecap="round"
              />
              <path
                d="M16 1.5C18.6 9 12.6 15.6 11 26.2"
                stroke="#C4A56A"
                fill="none"
                strokeWidth="1.15"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-serif truncate text-[1.02rem] font-medium tracking-[0.01em] text-sand">
              Ж. Балгужинова
            </span>
          </a>
        </div>

        <nav
          aria-label="Разделы страницы"
          className="mt-2.5 flex items-center gap-x-4 gap-y-1 overflow-x-auto pb-0.5 sm:mt-3 sm:gap-8"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label shrink-0 text-[0.6rem] tracking-[0.16em] text-[#E4D7B4] transition-colors hover:text-sand sm:text-[0.6875rem] sm:tracking-[0.22em]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}