import { heroContent, navLinks } from '../../services/content';

export function Hero() {
  return (
    <section id="home" className="px-2 pt-2 md:px-3 md:pt-3">
      <div className="relative mx-auto max-w-layout overflow-hidden rounded-block">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroContent.backgroundImage}
        >
          <source src={heroContent.videoSrc} type="video/mp4" />
          <source src="/assets/videos/hero.mov" type="video/quicktime" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/55" />

        <div className="relative flex min-h-[560px] flex-col px-5 pb-20 pt-7 text-white md:min-h-[620px] md:px-9">
          <header className="flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2.5">
              <img
                src="/assets/images/logo.svg"
                alt="Life of Pai logo"
                className="h-8 w-8 rounded-full object-cover shadow"
              />
              <span className="text-lg font-semibold tracking-tight md:text-xl">Life of Pai</span>
            </a>

            <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-white/90 transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#cta"
              className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-text transition hover:bg-white/90"
            >
              Work with us
            </a>
          </header>

          <div className="mx-auto mt-20 max-w-3xl text-center md:mt-24">
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">{heroContent.title}</h1>
            <p className="mt-5 text-sm text-white/90 md:text-lg">{heroContent.subtitle}</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={heroContent.ctaHref}
                className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-text transition hover:bg-white/90"
              >
                {heroContent.ctaLabel}
              </a>
              <a
                href={heroContent.secondaryCtaHref}
                className="inline-flex rounded-full border border-white/85 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {heroContent.secondaryCtaLabel}
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="flex h-16 w-32 flex-col items-center justify-center rounded-t-full border border-line bg-page">
            <span className="text-[8px] font-bold uppercase  text-muted">scroll to explore</span>
            <span className="text-sm text-muted">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
