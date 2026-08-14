import {
  IconChart,
  IconFlaskCards,
  IconMeet,
  IconSpiral,
  IconWaves,
} from "./icons";

type PriceLine = {
  amount: string;
  note: string;
};

type Service = {
  title: string;
  text: string;
  Icon: typeof IconMeet;
  prices: PriceLine[];
  featured?: boolean;
};

const services: Service[] = [
  {
    title: "Первичная видеовстреча (15 минут)",
    text: "Знакомство, разбор запроса и определение формата работы.",
    Icon: IconMeet,
    prices: [{ amount: "Бесплатно", note: "Знакомство · 15 минут" }],
    featured: true,
  },
  {
    title: "Индивидуальная психологическая / коуч-сессия",
    text: "Снятие эмоционального напряжения, работа с затыками, поиск решений.",
    Icon: IconWaves,
    prices: [
      { amount: "12 000 ₸", note: "Онлайн · 60 мин" },
      { amount: "15 000 ₸", note: "Оффлайн в кабинете · 60 мин" },
    ],
  },
  {
    title: "Сеанс Аромадиагностики & МАК-карт",
    text: "Глубокая диагностика через премиальные эфирные масла и ассоциативные карты, выявление скрытых блоков, ресурсный протокол.",
    Icon: IconFlaskCards,
    prices: [{ amount: "18 000 ₸", note: "Оффлайн в кабинете · 90 мин" }],
  },
  {
    title: "Энергосеанс «Перезагрузка & Ресурс»",
    text: "Восстановление энергетического баланса, снятие блоков в теле и разуме, гармонизация тонких тел.",
    Icon: IconSpiral,
    prices: [
      { amount: "20 000 ₸", note: "Оффлайн · 80 мин" },
      { amount: "15 000 ₸", note: "Онлайн · 80 мин" },
    ],
  },
  {
    title: "Бизнес-разбор & Коучинг для предпринимателей",
    text: "Персональная сессия для владельцев бизнеса и экспертов. Поиск «слепых зон», работа с мышлением руководителя, вектор роста.",
    Icon: IconChart,
    prices: [
      { amount: "35 000 ₸", note: "Оффлайн · 90 мин" },
      { amount: "30 000 ₸", note: "Онлайн · 90 мин" },
    ],
  },
];

function PriceBlock({ prices }: { prices: PriceLine[] }) {
  return (
    <div className="mt-auto border-t border-ink/10 pt-6">
      <div className={`grid gap-3 ${prices.length > 1 ? "sm:grid-cols-2" : ""}`}>
        {prices.map((price) => (
          <div key={`${price.amount}-${price.note}`} className="bg-ink px-4 py-4">
            <p className="font-sans text-[1.55rem] font-medium uppercase leading-none tracking-[0.08em] text-brass-soft sm:text-[1.75rem]">
              {price.amount}
            </p>
            <p className="label mt-2.5 text-[0.62rem] text-[#E4D7B4]">{price.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-sand text-ink-text">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: "url(/images/sand-grain.jpg)",
          backgroundSize: "420px",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:px-10 lg:px-14 lg:py-28">
        <p className="label text-ink-text">Услуги и стоимость</p>
        <h2 className="font-serif mt-5 max-w-xl text-[2.05rem] font-medium leading-[1.12] tracking-[-0.02em] sm:text-5xl">
          Форматы работы
        </h2>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-5 md:grid-cols-2 xl:grid-cols-6">
          {services.map((service, i) => {
            const span =
              i === 0
                ? "md:col-span-2 xl:col-span-6"
                : "xl:col-span-3";

            return (
              <article
                key={service.title}
                className={`flex flex-col border border-ink/12 bg-sand-soft/70 p-6 sm:p-8 ${span}`}
              >
                <service.Icon
                  className="h-11 w-11"
                  stroke={service.featured || i === 4 ? "#AE8A4E" : "#6B4055"}
                />
                <h3 className="font-serif mt-6 text-[1.35rem] font-medium leading-snug tracking-[-0.015em] sm:text-[1.5rem]">
                  {service.title}
                </h3>
                <p className="mt-4 mb-8 text-[0.98rem] leading-[1.7] text-ink-text">
                  {service.text}
                </p>
                <PriceBlock prices={service.prices} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}