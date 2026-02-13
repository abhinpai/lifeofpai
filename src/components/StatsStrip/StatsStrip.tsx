import { stats } from '../../services/content';

export function StatsStrip() {
  return (
    <section className="px-2 pb-12 pt-12 md:px-3 md:pb-14 md:pt-14">
      <div className="mx-auto max-w-layout border-b border-dashed border-line pb-10 md:pb-12">
        <div className="grid grid-cols-2 gap-y-9 md:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="text-center">
              <p className="text-4xl font-semibold tracking-tight text-text md:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted md:text-base">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
