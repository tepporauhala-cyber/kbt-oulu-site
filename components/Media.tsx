import Image from "next/image";
import { Newspaper, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";

const dateFormatter = new Intl.DateTimeFormat("fi-FI", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function Media() {
  if (site.media.length === 0) return null;

  return (
    <section id="media" className="section">
      <div className="container-page">
        <p className="eyebrow inline-flex items-center gap-2">
          <Newspaper aria-hidden="true" size={14} />
          Lehdistössä
        </p>
        <h2 className="mt-3 section-title">Seurasta kirjoitettua</h2>
        <p className="mt-4 max-w-2xl text-[color:var(--color-text-muted)]">
          Haastatteluja, kilpailuraportteja ja juttuja seuran toiminnasta.
        </p>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {site.media.map((item) => {
            const date = new Date(item.publishedAt);
            const dateLabel = Number.isNaN(date.getTime())
              ? item.publishedAt
              : dateFormatter.format(date);

            return (
              <li key={item.url}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group flex h-full flex-col gap-5 hover:bg-white/[0.05] hover:-translate-y-0.5"
                >
                  <div className="relative aspect-[5/3] overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 768px) 28rem, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                      <span className="text-[color:var(--color-accent)]">{item.publisher}</span>
                      <span aria-hidden="true"> · </span>
                      <time dateTime={item.publishedAt}>{dateLabel}</time>
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">
                      {item.excerpt}
                    </p>
                    <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--color-accent)]">
                      Lue juttu
                      <ArrowUpRight aria-hidden="true" size={16} />
                    </p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
