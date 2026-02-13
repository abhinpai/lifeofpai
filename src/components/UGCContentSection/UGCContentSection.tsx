import { useRef } from 'react';
import { ugcVideoCards } from '../../services/content';
import { useAnalytics } from '../../hooks/useAnalytics';

export function UGCContentSection() {
  return (
    <section id="ugc" className="px-2 py-12 md:px-3 md:py-16">
      <div className="mx-auto max-w-layout">
        <p className="text-center text-sm text-muted">UGC videos</p>
        <h2 className="mt-3 text-center text-4xl font-semibold leading-tight text-text md:text-5xl">
          Hover over a card to preview real stock-style travel clips
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {ugcVideoCards.map((card) => (
            <HoverVideoCard
              key={card.id}
              title={card.title}
              description={card.description}
              poster={card.poster}
              videoSrc={card.videoSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type HoverVideoCardProps = {
  title: string;
  description: string;
  poster: string;
  videoSrc: string;
};

function HoverVideoCard({ title, description, poster, videoSrc }: HoverVideoCardProps) {
  const { trackEvent } = useAnalytics();
  const mediaRef = useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    trackEvent('ugc_preview_play', { clip_title: title });
    const media = mediaRef.current;
    if (!media) return;
    void media.play().catch(() => {
      // Autoplay can fail on some browsers without user gesture.
    });
  };

  const stopVideo = () => {
    const media = mediaRef.current;
    if (!media) return;
    media.pause();
    media.currentTime = 0;
  };

  return (
    <article
      className="group overflow-hidden rounded-3xl border border-line bg-white shadow-soft"
      onMouseEnter={playVideo}
      onMouseLeave={stopVideo}
      onFocus={playVideo}
      onBlur={stopVideo}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <video
          ref={mediaRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-text">
          Hover to play
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold leading-tight text-text">{title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{description}</p>
      </div>
    </article>
  );
}
