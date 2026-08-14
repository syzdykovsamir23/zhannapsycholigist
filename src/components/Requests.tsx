import { IconCrisis, IconScale, IconSelf } from "./icons";

const cards = [
  {
    title: "Кризисы и эмоциональное состояние",
    accent: "#6B4055",
    Icon: IconCrisis,
    items: [
      "страх перед будущим, тревога, выгорание и апатия",
      "ощущение тупика, потеря смысла",
      "сложности в принятии судьбоносных решений",
    ],
  },
  {
    title: "Энергия и отношение с собой",
    accent: "#6B4055",
    Icon: IconSelf,
    items: [
      "упадок сил, синдром самозванца, низкая самооценка",
      "непонимание своих желаний, поиск призвания",
      "восстановление ресурса через аромадиагностику и энергосеансы",
    ],
  },
  {
    title: "Масштаб, мышление и бизнес",
    accent: "#AE8A4E",
    Icon: IconScale,
    items: [
      "страх проявиться, выйти на новый уровень дохода",
      "поиск «слепых зон», мешающих росту бизнеса",
      "стратегия личного бренда, переход из «пашу 24/7» в управляемый рост",
    ],
  },
];

export default function Requests() {
  return (
    <section id="requests" className="relative bg-ink text-sand">
      <img
        src="/images/hero-atmosphere.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.16]"
      />
      <div className="absolute inset-0 bg-ink/82" />

      <div className="relative mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:px-10 lg:px-14 lg:py-32">
        <div className="max-w-2xl">
          <p className="label text-brass-soft">Запросы</p>
          <h2 className="font-serif mt-5 text-[2.05rem] font-medium leading-[1.12] tracking-[-0.02em] sm:text-5xl">
            С какими запросами
            <br />
            можно обратиться
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-5 lg:grid-cols-3">
          {cards.map(({ title, accent, Icon, items }) => (
            <article
              key={title}
              className="relative flex flex-col border border-sand/18 bg-ink/40 px-6 py-8 sm:px-7 sm:py-9"
            >
              <span
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
              />
              <Icon className="h-9 w-9" stroke={accent === "#AE8A4E" ? "#C4A56A" : "#C4A0B0"} />
              <h3 className="font-serif mt-7 text-[1.35rem] font-medium leading-snug tracking-[-0.015em] sm:text-[1.45rem]">
                {title}
              </h3>
              <ul className="mt-7 flex flex-1 flex-col gap-4">
                {items.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-sand">
                    <span
                      className="mt-[0.7em] h-px w-4 shrink-0"
                      style={{ backgroundColor: accent === "#AE8A4E" ? "#C4A56A" : "#C4A0B0" }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}