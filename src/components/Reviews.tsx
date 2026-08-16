import { useRef, useState } from "react";
import { IconPlay } from "./icons";

const slots = [
  { label: "video-1", src: "/videos/review-1.mp4", poster: "/videos/review-1-poster.jpg" },
  { label: "video-2", src: "/videos/review-2.mp4", poster: "/videos/review-2-poster.jpg" },
  { label: "video-3", src: "/videos/review-3.mp4", poster: "/videos/review-3-poster.jpg" },
  { label: "video-4", src: "/videos/review-4.mp4", poster: "/videos/review-4-poster.jpg" },
  { label: "video-5", src: "/videos/review-5.mp4", poster: "/videos/review-5-poster.jpg" },
  { label: "video-6", src: "/videos/review-6.mp4", poster: "/videos/review-6-poster.jpg" },
  { label: "video-7", src: "/videos/review-7.mp4", poster: "/videos/review-1-poster.jpg" },
  { label: "video-8", src: "/videos/review-8.mp4", poster: "/videos/review-2-poster.jpg" },
] as const;

function VideoSlot({ label, src, poster }: { label: string; src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <figure className="w-[78vw] max-w-[280px] shrink-0 snap-start sm:w-auto sm:max-w-none">
      <div className="relative aspect-[9/16] overflow-hidden border border-sand/18 bg-[#172e2a]">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="h-full w-full object-cover"
          playsInline
          onEnded={() => setPlaying(false)}
        />
        <button
          type="button"
          onClick={toggle}
          className="absolute inset-0 flex flex-col items-center justify-center text-sand"
          aria-label={playing ? `Пауза, ${label}` : `Смотреть ${label}`}
        >
          {!playing && <IconPlay className="h-12 w-12" stroke="#E4D7B4" />}
        </button>
      </div>
    </figure>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-ink text-sand">
      <img
        src="/images/hero-atmosphere.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.14]"
      />
      <div className="absolute inset-0 bg-ink/84" />

      <div className="relative mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:px-10 lg:px-14 lg:py-28">
        <p className="label text-[#E4D7B4]">Отзывы</p>
        <h2 className="font-serif mt-5 text-[2.05rem] font-medium leading-[1.12] tracking-[-0.02em] sm:text-5xl">
          Голоса тех,
          <br />
          кто уже внутри работы
        </h2>

        <div className="-mx-5 mt-12 flex gap-4 overflow-x-auto px-5 pb-4 snap-x snap-mandatory sm:mx-0 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {slots.map((slot) => (
            <VideoSlot key={slot.label} {...slot} />
          ))}
        </div>
      </div>
    </section>
  );
}
