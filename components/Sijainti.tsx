import { MapPin, ExternalLink } from "lucide-react";
import { site } from "@/lib/content";

export default function Sijainti() {
  const { address, mapsEmbedUrl, mapsLinkUrl } = site.contact;

  return (
    <section id="sijainti" className="section">
      <div className="container-page">
        <p className="eyebrow">Sijainti</p>
        <h2 className="mt-3 section-title">Salin osoite</h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="card">
            <p className="inline-flex items-center gap-2 text-sm text-[color:var(--color-accent)]">
              <MapPin aria-hidden="true" size={18} />
              Osoite
            </p>
            <address className="mt-3 not-italic text-lg text-white">
              {address.venue}
              <br />
              {address.street}
              <br />
              {address.postalCode} {address.city}
            </address>

            <a
              href={mapsLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-6"
            >
              Avaa Google Mapsissa
              <ExternalLink aria-hidden="true" size={16} />
            </a>

            <p className="mt-6 text-sm text-[color:var(--color-text-muted)]">
              Värtön liikuntahallin pukuhuoneet ja pesutilat ovat käytössäsi. Saliin pääsee bussilla
              ja autolla, parkkitilaa on rakennuksen edustalla.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              src={mapsEmbedUrl}
              title={`${address.venue} kartalla`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[320px] w-full"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
