import { storyImages, whyPoints } from '../../services/content';

export function JourneySection() {
  return (
    <section id="journey" className="px-2 py-14 md:px-3 md:py-20">
      <div className="mx-auto grid max-w-layout gap-12 md:grid-cols-[1fr_1fr] md:items-center md:gap-16">
        <div className="relative mx-auto h-[380px] w-[320px] md:h-[460px] md:w-[470px]">
          <div className="absolute left-2 top-8 h-[290px] w-[190px] -rotate-[13deg] overflow-hidden rounded-[28px] shadow-soft md:h-[360px] md:w-[220px]">
            <img src={storyImages.one} alt="Travel camp view" className="h-full w-full object-cover" />
          </div>
          <div className="absolute left-[132px] top-[58px] h-[260px] w-[185px] rotate-[15deg] overflow-hidden rounded-[28px] shadow-soft md:left-[196px] md:top-[84px] md:h-[330px] md:w-[220px]">
            <img src={storyImages.two} alt="Mountain road trip" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-[18px] left-[82px] h-[140px] w-[155px] -rotate-[8deg] overflow-hidden rounded-[24px] shadow-soft md:bottom-[22px] md:left-[160px] md:h-[170px] md:w-[190px]">
            <img src={storyImages.three} alt="Island itinerary" className="h-full w-full object-cover" />
          </div>
        </div>

        <article className="max-w-[560px]">
          <p className="text-sm text-muted">Our journey</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-text md:text-5xl">
            We are working professionals who refuse to put life on hold.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            We built this platform to show exactly how we plan travel, food explorations, and creator work around real
            desk-job schedules.
          </p>
          <ul className="mt-5 space-y-3">
            {whyPoints.map((point) => (
              <li key={point.id} className="flex items-start gap-3 text-sm text-muted md:text-base">
                <span className="mt-1 text-text">✓</span>
                <span>{point.label}</span>
              </li>
            ))}
          </ul>
          <a
            href="#itineraries"
            className="mt-7 inline-flex rounded-full border border-text px-6 py-3 text-sm font-semibold text-text transition hover:bg-text hover:text-white"
          >
            View our itinerary store
          </a>
        </article>
      </div>
    </section>
  );
}
