export default function PhotoFrame() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none">
      <div className="absolute -inset-3 border border-brass/25" />
      <div className="absolute -inset-px border border-brass/40" />

      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <img
          src="/images/hero-portrait.jpg"
          alt="Жанна Балгужинова"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}