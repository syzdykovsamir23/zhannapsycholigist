import { IconArrow } from "./icons";

export default function FinalCta() {
  return (
    <section id="booking" className="relative bg-sand text-ink-text">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: "url(/images/sand-grain.jpg)",
          backgroundSize: "420px",
        }}
      />

      <div className="relative mx-auto max-w-[880px] px-5 py-24 text-center sm:px-6 md:px-10 lg:py-32">
        <div className="mx-auto mb-10 h-px w-24 bg-brass" aria-hidden />
        <h2 className="font-serif text-[2.15rem] font-medium leading-[1.12] tracking-[-0.02em] sm:text-5xl">
          Готовы сделать шаг к изменениям?
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-[1.05rem] leading-[1.7] text-ink-text">
          Запишитесь на короткую знакомство-встречу, чтобы понять, какой формат
          работы подойдёт именно вам.
        </p>
        <a
          href="https://wa.me/77081911757"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-3 bg-ink px-7 py-4 text-[0.84rem] font-medium tracking-[0.1em] text-sand transition-colors hover:bg-brass hover:text-ink"
        >
          Написать в WhatsApp
          <IconArrow className="h-4 w-4" />
        </a>

        <p className="font-serif mt-20 text-[1.05rem] italic text-ink-text">
          Жанна Балгужинова
        </p>
        <p className="label mt-3 text-ink-text">Кокшетау · Онлайн</p>
      </div>
    </section>
  );
}