import { useEffect, useId, useRef, useState } from "react";
import { helpTopics, type HelpTopic } from "../data/helpTopics";
import { IconArrow } from "./icons";

const areas = [
  {
    title: "Отношения с собой",
    text: "справиться с тревогой, страхами, самокритикой, выгоранием и апатией; преодолеть кризис, повысить самооценку, обрести уверенность в себе; научиться отстаивать личные границы, вернуть энергию и мотивацию.",
  },
  {
    title: "Отношения с окружающими",
    text: "наладить гармоничные отношения с партнёром, детьми и коллегами; научиться конструктивно разрешать конфликты и договариваться.",
  },
  {
    title: "Самореализация",
    text: "найти своё призвание и дело жизни, построить успешную карьеру; запустить или масштабировать бизнес.",
  },
];

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path
        d="M6 6l12 12M18 6 6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TopicModal({
  topic,
  onClose,
}: {
  topic: HelpTopic;
  onClose: () => void;
}) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-[90] flex flex-col overflow-y-auto bg-sand text-ink-text"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="fixed right-4 top-4 z-[91] flex h-12 w-12 items-center justify-center border border-ink/25 bg-sand text-ink-text sm:right-6 sm:top-6"
        aria-label="Закрыть"
      >
        <CloseIcon />
      </button>

      <div className="grid min-h-full flex-1 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="flex items-center justify-center bg-[#ddd4c2] px-8 py-20 sm:px-14 lg:min-h-full">
          <img
            src={topic.image}
            alt={topic.imageAlt}
            className="h-auto w-full max-w-[420px] object-contain"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-16 pb-20 sm:px-12 lg:px-16 lg:py-24">
          <h3
            id={titleId}
            className="font-serif max-w-xl pr-12 text-[1.85rem] font-medium leading-[1.15] tracking-[-0.02em] sm:text-[2.35rem]"
          >
            {topic.title}
          </h3>
          <p className="mt-8 max-w-xl text-[1.02rem] leading-[1.75]">{topic.description}</p>

          <div className="mt-10 grid max-w-xl gap-3">
            {topic.prices.map((price) => (
              <div key={`${price.amount}-${price.note}`} className="bg-ink px-5 py-5">
                <p className="font-sans text-[1.55rem] font-medium uppercase leading-none tracking-[0.08em] text-brass-soft sm:text-[1.7rem]">
                  {price.amount}
                </p>
                <p className="label mt-3 text-[0.62rem] leading-relaxed text-[#E4D7B4]">
                  {price.note}
                </p>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/77081911757"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-fit items-center justify-center gap-3 bg-ink px-6 py-4 text-[0.82rem] font-medium tracking-[0.08em] text-sand"
          >
            Записаться на консультацию
            <IconArrow className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Help() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openTopic = helpTopics.find((t) => t.id === openId) ?? null;

  return (
    <section id="help" className="relative bg-sand text-ink-text">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: "url(/images/sand-grain.jpg)",
          backgroundSize: "420px",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:px-10 lg:px-14 lg:py-28">
        <h2 className="font-serif max-w-3xl text-[2.05rem] font-medium leading-[1.12] tracking-[-0.02em] sm:text-5xl">
          В чём я могу вам помочь?
        </h2>

        <div className="mt-14 space-y-10 sm:mt-16">
          {areas.map((area) => (
            <div key={area.title} className="max-w-3xl">
              <h3 className="font-serif text-[1.45rem] font-medium tracking-[-0.015em] sm:text-[1.65rem]">
                {area.title}
              </h3>
              <p className="mt-3 text-[1.02rem] leading-[1.75]">{area.text}</p>
            </div>
          ))}
        </div>

        <aside className="mt-14 max-w-3xl border border-plum bg-[#f3e8ec] px-5 py-6 sm:px-8 sm:py-7">
          <p className="label text-plum">Важно</p>
          <p className="mt-3 text-[1.02rem] leading-[1.7]">
            Важно: не работаю с зависимостями (алкогольной, наркотической,
            игровой), сексуальными расстройствами, а также не сопровождаю острые
            переживания горя и утрат.
          </p>
        </aside>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {helpTopics.map((topic) => (
            <button
              key={topic.id}
              type="button"
              onClick={() => setOpenId(topic.id)}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink/12 bg-sand-soft text-left"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-[#ddd4c2] px-8 py-6">
                <img
                  src={topic.image}
                  alt=""
                  className="h-full w-full max-h-[220px] object-contain"
                />
              </div>
              <div className="flex flex-1 items-end px-5 py-5 sm:px-6">
                <h3 className="font-serif text-[1.25rem] font-medium leading-snug tracking-[-0.015em] sm:text-[1.35rem]">
                  {topic.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {openTopic && (
        <TopicModal topic={openTopic} onClose={() => setOpenId(null)} />
      )}
    </section>
  );
}