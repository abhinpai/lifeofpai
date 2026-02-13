import { instagramAccounts, instagramPosts, youtubeVideos } from '../../services/content';
import { useAnalytics } from '../../hooks/useAnalytics';

export function SocialSection() {
  const { trackEvent } = useAnalytics();

  return (
    <section id="social" className="px-2 py-10 md:px-3 md:py-14">
      <div className="mx-auto max-w-layout rounded-block bg-soft px-4 py-9 md:px-8 md:py-11">
        <p className="text-sm text-muted">Social media</p>

        <div className="mt-2 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight text-text md:text-5xl">
            Follow our YouTube and Instagram to see real trips, real workflows, and live creator moments
          </h2>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://www.youtube.com/@lifeofpais"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('social_link_click', { platform: 'youtube', destination: 'header_chip' })}
              className="rounded-full border border-text px-4 py-2 text-sm font-semibold text-text transition duration-300 hover:-translate-y-0.5 hover:bg-text hover:text-white hover:shadow-soft"
            >
              YouTube
            </a>
            <a
              href="https://www.instagram.com/twin_thumb"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('social_link_click', { platform: 'instagram', account: 'twin_thumb', destination: 'header_chip' })}
              className="rounded-full border border-text px-4 py-2 text-sm font-semibold text-text transition duration-300 hover:-translate-y-0.5 hover:bg-text hover:text-white hover:shadow-soft"
            >
              @twin_thumb
            </a>
            <a
              href="https://www.instagram.com/coupleofpai"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('social_link_click', { platform: 'instagram', account: 'coupleofpai', destination: 'header_chip' })}
              className="rounded-full border border-text px-4 py-2 text-sm font-semibold text-text transition duration-300 hover:-translate-y-0.5 hover:bg-text hover:text-white hover:shadow-soft"
            >
              @coupleofpai
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.95fr]">
          <article className="rounded-3xl border border-line bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-md md:p-5">
            <div className="overflow-hidden rounded-2xl border border-line">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80"
                alt="YouTube travel channel preview"
                className="aspect-[16/8] w-full object-cover"
              />
            </div>

            <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.08em] text-muted">YouTube channel</p>
                <h3 className="mt-1 text-2xl font-semibold text-text">@lifeofpais</h3>
                <p className="mt-1 text-base text-muted">Travel breakdowns, itinerary math, and behind-the-scenes creator flow.</p>
              </div>

              <a
                href="https://www.youtube.com/@lifeofpais"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent('social_link_click', { platform: 'youtube', destination: 'youtube_panel_button' })}
                className="inline-flex rounded-full border border-text px-4 py-2 text-sm font-semibold text-text transition duration-300 hover:-translate-y-0.5 hover:bg-text hover:text-white hover:shadow-soft"
              >
                Watch on YouTube
              </a>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {youtubeVideos.map((video) => (
                <a
                  key={video.id}
                  href={video.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    trackEvent('youtube_card_click', {
                      video_id: video.id,
                      video_title: video.title,
                    })
                  }
                  className="group overflow-hidden rounded-2xl border border-line transition duration-300 hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="p-3">
                    <h4 className="text-base font-semibold leading-snug text-text">{video.title}</h4>
                  </div>
                </a>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-line bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-md md:p-5">
            <p className="text-xs uppercase tracking-[0.08em] text-muted">Instagram accounts</p>

            <div className="mt-3 space-y-3">
              {instagramAccounts.map((account) => (
                <div key={account.id} className="rounded-2xl border border-line bg-soft/40 p-3 transition duration-300 hover:-translate-y-0.5 hover:bg-soft/70">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-text">{account.handle}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{account.bio}</p>
                    </div>
                    <a
                      href={account.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() =>
                        trackEvent('social_link_click', {
                          platform: 'instagram',
                          account: account.handle,
                          destination: 'account_card',
                        })
                      }
                      className="shrink-0 rounded-full border border-text px-3 py-1.5 text-xs font-semibold text-text transition duration-300 hover:-translate-y-0.5 hover:bg-text hover:text-white hover:shadow-soft"
                    >
                      Follow
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {instagramPosts.map((post) => (
                <a
                  key={post.id}
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    trackEvent('instagram_preview_click', {
                      post_id: post.id,
                      destination: post.href,
                    })
                  }
                  className="block overflow-hidden rounded-xl transition duration-300 hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <img
                    src={post.image}
                    alt="Instagram preview"
                    className="aspect-square h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </a>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
