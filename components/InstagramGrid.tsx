import Image from "next/image";
import { Instagram, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";

export default function InstagramGrid() {
  return (
    <section id="instagram" className="section">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Instagram</p>
            <h2 className="mt-3 section-title">Seuraa salin arkea</h2>
            <p className="mt-4 max-w-xl text-[color:var(--color-text-muted)]">
              Postaamme harjoituksista, ottelumatkoista ja tapahtumista. Tule mukaan seuraamaan.
            </p>
          </div>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Instagram aria-hidden="true" size={18} />
            {site.social.instagramHandle}
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {site.instagramPosts.map((post, i) => (
            <li key={`${post.url}-${i}`}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(min-width: 1024px) 16rem, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 flex items-end justify-end bg-gradient-to-tr from-black/60 via-transparent to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="rounded-full bg-white/95 p-1.5 text-black">
                    <ArrowUpRight aria-hidden="true" size={16} />
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
