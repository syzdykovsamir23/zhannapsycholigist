import PhotoFrame from "./PhotoFrame";
import { IconArrow } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-svh overflow-hidden bg-ink text-sand"
    >
      <img
        src="/images/hero-atmosphere.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.28]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      <div className="relative mx-auto grid min-h-svh max-w-[1280px] items-center gap-12 px-5 pb-20 pt-36 sm:px-6 md:px-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.78fr)] lg:gap-16 lg:px-14 lg:pb-16 lg:pt-32">
        <div className="max-w-2xl">
          <p className="label text-brass-soft">
            Сонастройка · Кокшетау &amp; онлайн
          </p>

          <h1 className="font-serif mt-6 text-[2.55rem] font-medium leading-[1.04] tracking-[-0.02em] text-sand sm:mt-7 sm:text-6xl lg:text-[4.6rem]">
            Жанна
            <br />
            Балгужинова
          </h1>

          <p className="mt-7 max-w-xl text-[0.98rem] leading-[1.7] text-sand sm:mt-8 sm:text-[1.05rem]">
            Дипломированный психотерапевт, сертифицированный коуч, кризисный психолог
            и бизнес-консультант. Основатель маркетингового агентства системных продаж
            Lindex.
          </p>

          <p className="font-serif mt-7 max-w-xl text-[1.12rem] font-light italic leading-[1.55] text-sand sm:mt-8 sm:text-[1.32rem]">
            Я помогаю выйти из жизненных и финансовых тупиков, вернуть ресурс,
            преодолеть кризис и выстроить системный масштаб в жизни и бизнесе.
          </p>

          <div className="mt-8 flex items-start gap-4 sm:mt-10 sm:items-center">
            <span className="mt-2 h-px w-10 shrink-0 bg-brass-soft sm:mt-0" />
            <p className="text-[0.92rem] leading-relaxed tracking-wide text-[#E4D7B4]">
              Личный приём в Кокшетау &amp; Онлайн по всему миру.
            </p>
          </div>

          <div className="mt-9 sm:mt-11">
            <a
              href="https://wa.me/77081911757"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex max-w-full items-center gap-3 border border-brass-soft bg-transparent px-4 py-3.5 text-left text-[0.74rem] font-medium leading-snug tracking-[0.06em] text-sand transition-colors hover:bg-brass hover:text-ink sm:px-6 sm:py-4 sm:text-[0.84rem] sm:tracking-[0.08em]"
            >
              Записаться на бесплатную 15-минутную видеовстречу
              <IconArrow className="hidden h-4 w-4 shrink-0 sm:block" />
            </a>
          </div>
        </div>

        <div className="w-full max-w-[400px] justify-self-center lg:max-w-[440px] lg:justify-self-end">
          <PhotoFrame />
        </div>
      </div>
    </section>
  );
}