import { finalBannerImage } from '../../services/content';

export function CTASection() {
  return (
    <section id="cta" className="px-2 py-10 md:px-3 md:py-12">
      <div className="relative mx-auto max-w-layout overflow-hidden rounded-block bg-[#353535]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${finalBannerImage})`,
          }}
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative flex min-h-[320px] flex-col items-center justify-center px-6 py-12 text-center text-white md:min-h-[380px]">
          <h2 className="text-5xl font-semibold leading-tight md:text-6xl">
            Ready to make the most of your time off? Start here.
          </h2>
          <p className="mt-5 max-w-3xl text-sm text-white/90 md:text-base">
            Pick your itinerary, plan a creator trip, or collaborate with us on UGC that feels real.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:coupleofpai@gmail.com"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-text transition hover:bg-white/90"
            >
              Start here
            </a>
            <a
              href="mailto:coupleofpai@gmail.com"
              className="rounded-full border border-white/85 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
