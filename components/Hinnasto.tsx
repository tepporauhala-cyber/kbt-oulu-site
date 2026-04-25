"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { site } from "@/lib/content";
import { openMaksuModal } from "@/lib/maksuModal";

export default function Hinnasto() {
  return (
    <section id="hinnasto" className="section relative isolate overflow-hidden">
      <Image
        src="/images/photos/voitto.jpg"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 object-cover opacity-12"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-bg)]/50 via-[color:var(--color-bg)]/85 to-[color:var(--color-bg)]" />
      <div className="container-page relative">
        <p className="eyebrow">Hinnasto</p>
        <h2 className="mt-3 section-title">Kausimaksut</h2>
        <p className="mt-4 max-w-2xl text-[color:var(--color-text-muted)]">
          Yksi kausimaksu sisältää rajattoman harjoittelun kaikissa lajeissa. Maksu suoritetaan
          tilisiirtona — ei tarvetta kuukausilaskutuksille tai sopimuksille.
        </p>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {site.hinnasto.map((tier) => (
            <li
              key={tier.id}
              className={`card relative flex flex-col ${
                tier.featured
                  ? "border-[color:var(--color-accent)]/50 bg-[color:var(--color-accent)]/5 shadow-xl shadow-[color:var(--color-accent)]/10"
                  : ""
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-[color:var(--color-accent)] px-3 py-1 text-xs font-semibold text-white">
                  Suosituin
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
              <p className="mt-3 font-[family-name:var(--font-display)] text-5xl tracking-wide text-white">
                {tier.price}
              </p>
              <ul className="mt-6 flex flex-col gap-2 text-sm text-[color:var(--color-text-muted)]">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <Check
                      aria-hidden="true"
                      size={18}
                      className="mt-0.5 shrink-0 text-[color:var(--color-accent)]"
                    />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={openMaksuModal}
                className="btn-ghost mt-6 w-full"
              >
                Aloita harjoittelu
              </button>
            </li>
          ))}
        </ul>

        {site.hinnastoNotes.length > 0 && (
          <div className="mt-10 grid gap-2 text-sm text-[color:var(--color-text-muted)]">
            {site.hinnastoNotes.map((note) => (
              <p key={note}>· {note}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
