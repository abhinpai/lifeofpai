import { useMemo, useState } from 'react';
import { itineraryCards } from '../../services/content';
import type { ItineraryCard } from '../../types';

export function ItinerarySection() {
  return (
    <section id="itineraries" className="px-2 py-10 md:px-3 md:py-14">
      <div className="mx-auto max-w-layout rounded-block bg-soft px-4 py-9 md:px-8 md:py-11">
        <p className="text-sm text-muted">Travel itinerary</p>
        <h2 className="mt-2 max-w-4xl text-4xl font-semibold leading-tight text-text md:text-5xl">
          Ready-to-use itineraries that auto-fit work schedules, budget limits, and couple travel pace
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {itineraryCards.map((card) => (
            <ItineraryCardItem key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ItineraryCardItem({ card }: { card: ItineraryCard }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
      <CardImageCarousel images={card.images} title={card.title} />

      <div className="flex flex-1 flex-col p-4 md:p-5">
        <p className="text-xs text-muted">{card.subtitle}</p>
        <h3 className="mt-1.5 text-xl font-semibold leading-tight text-text [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
          {card.title}
        </h3>
        <p className="mt-2.5 text-[15px] leading-relaxed text-muted [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
          {card.description}
        </p>

        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-text">
            {card.duration}
          </span>
          <span className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-text">
            {card.budget}
          </span>
          {card.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-soft px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function CardImageCarousel({ images, title }: { images: string[]; title: string }) {
  const loopedImages = useMemo(() => {
    if (images.length <= 1) return images;
    const first = images[0];
    const last = images[images.length - 1];
    return [last, ...images, first];
  }, [images]);

  const [index, setIndex] = useState(images.length > 1 ? 1 : 0);
  const [animated, setAnimated] = useState(true);

  const handleTransitionEnd = () => {
    if (images.length <= 1) return;

    if (index === loopedImages.length - 1) {
      setAnimated(false);
      setIndex(1);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setAnimated(true);
        });
      });
    }

    if (index === 0) {
      setAnimated(false);
      setIndex(images.length);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setAnimated(true);
        });
      });
    }
  };

  return (
    <div className="relative aspect-[16/8] overflow-hidden">
      <div
        className={`flex h-full ${animated ? 'transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]' : ''}`}
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {loopedImages.map((src, slideIndex) => (
          <img
            key={`${title}-${slideIndex}`}
            src={src}
            alt={title}
            className="h-full w-full shrink-0 object-cover"
            loading="lazy"
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/35 px-2 py-1 backdrop-blur-sm">
            {images.map((_, dotIndex) => {
              const activeIndex = index === 0 ? images.length - 1 : index === loopedImages.length - 1 ? 0 : index - 1;
              const isActive = activeIndex === dotIndex;

              return (
                <button
                  key={`${title}-dot-${dotIndex}`}
                  type="button"
                  aria-label={`Show image ${dotIndex + 1}`}
                  onClick={() => {
                    setAnimated(true);
                    setIndex(dotIndex + 1);
                  }}
                  className={`h-1.5 rounded-full transition-all ${isActive ? 'w-5 bg-white' : 'w-1.5 bg-white/60'}`}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
