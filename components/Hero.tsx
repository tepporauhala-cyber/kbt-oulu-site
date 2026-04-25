import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { site } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-gradient relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-25 mix-blend-luminosity -z-10"
      />
      <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow">{site.contact.address.city} · Vuodesta 2002</p>
          <h1 className="mt-4 section-title text-5xl sm:text-6xl lg:text-7xl">
            {site.brand.name.toUpperCase()}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[color:var(--color-text-muted)]">
            {site.brand.tagline}. {site.brand.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#yhteystiedot" className="btn-primary">
              Tule kokeilemaan
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a href="#treeniajat" className="btn-ghost">
              Katso aikataulu
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-[color:var(--color-text-muted)]">
            <MapPin aria-hidden="true" size={16} className="text-[color:var(--color-accent)]" />
            {site.contact.address.venue}, {site.contact.address.street}, {site.contact.address.city}
          </p>
        </div>

        <div className="relative aspect-square max-w-md justify-self-center lg:justify-self-end w-full">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur" />
          <Image
            src="/images/kbt-logo-new.png"
            alt={`${site.brand.name} -logo`}
            fill
            sizes="(min-width: 1024px) 28rem, 80vw"
            className="object-contain p-10"
            priority
          />
        </div>
      </div>
    </section>
  );
}
