import { IconAroma, IconBusiness, IconEnergy, IconTherapy } from "./icons";

const methods = [
  {
    title: "Метод интегративной психологической помощи и кризисной терапии",
    Icon: IconTherapy,
  },
  {
    title: "Аромадиагностика и работа с МАК-картами",
    Icon: IconAroma,
  },
  {
    title: "Энергетическое восстановление и работа с ресурсными состояниями",
    Icon: IconEnergy,
  },
  {
    title: "Бизнес-коучинг и стратегический анализ ограничивающих убеждений в мышлении предпринимателя",
    Icon: IconBusiness,
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-sand text-ink-text">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "url(/images/sand-grain.jpg)",
          backgroundSize: "420px",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:px-10 lg:px-14 lg:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="label text-ink-text">Обо мне</p>
            <h2 className="font-serif mt-5 text-[2.05rem] font-medium leading-[1.12] tracking-[-0.02em] sm:text-5xl">
              Два мира —
              <br />
              <span className="italic font-normal text-plum">одна ось.</span>
            </h2>

            <figure className="mt-10">
              <div className="relative">
                <div className="absolute -inset-2 border border-brass/30" />
                <img
                  src="/images/about-still.jpg"
                  alt="Натюрморт: записная книжка, латунь и сухая ветвь — связка внутреннего и внешнего"
                  className="relative aspect-[3/2] w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 flex items-center gap-3 text-[0.78rem] tracking-wide text-muted-light">
                <span className="h-px w-8 bg-brass/60" />
                Внутреннее состояние и внешний результат
              </figcaption>
            </figure>
          </div>

          <div className="text-[1.02rem] leading-[1.78] text-ink-text sm:text-[1.06rem]">
            <p>
              Меня всегда привлекала глубина человеческой психики и масштабы бизнеса.
              За моими плечами — 15 лет работы в государственном секторе и системах
              управления, а также многолетний опыт запуска собственного бизнеса и
              управления агентством системных продаж. Я на собственном опыте знаю,
              что такое профессиональное выгорание, финансовые потолки, поиск себя
              и семейные кризисы. Сегодня я объединяю практическую психологию,
              кризисную терапию, энергопрактики и бизнес-коучинг. Мой подход — это
              сонастройка всех сфер: от вашего эмоционального и энергетического
              состояния до ваших реальных доходов и бизнес-результатов.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px border border-ink-text/10 bg-ink-text/10 sm:mt-20 sm:grid-cols-2">
          {methods.map(({ title, Icon }, i) => (
            <div key={title} className="flex gap-5 bg-sand px-5 py-7 sm:px-8 sm:py-8">
              <Icon
                className="mt-0.5 h-9 w-9 shrink-0"
                stroke={i % 2 === 0 ? "#6B4055" : "#AE8A4E"}
              />
              <p className="text-[0.98rem] leading-relaxed text-ink-text">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
