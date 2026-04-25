"use client";

import { Check } from "lucide-react";
import { site } from "@/lib/content";
import { openMaksuModal } from "@/lib/maksuModal";

const muutMaksutPerks = [
  "Jäsenmaksu vuosittain",
  "Kertamaksu treeniin",
  "Yksityistunnit Lepalta",
];

export default function Hinnasto() {
  return (
    <section id="hinnasto" className="section">
      <div className="container-page">
        <p className="eyebrow">Hinnasto</p>
        <h2 className="mt-3 section-title">Kausimaksut</h2>
        <p className="mt-4 max-w-2xl text-[color:var(--color-text-muted)]">
          Yksi kausimaksu sisältää rajattoman harjoittelun kaikissa lajeissa. Maksu suoritetaan
          tilisiirtona — ei tarvetta kuukausilaskutuksille tai sopimuksille.
        </p>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
              <h3 className="text-base font-semibold uppercase tracking-wider text-white">
                {tier.name}
              </h3>
              <p className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-wide text-white">
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
                className="btn-ghost mt-auto pt-6 w-full"
              >
                Aloita harjoittelu
              </button>
            </li>
          ))}

          <li className="card relative flex flex-col">
            <h3 className="text-base font-semibold uppercase tracking-wider text-white">
              Muut maksut
            </h3>
            <p className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-wide text-white">
              Alk. 10 €
            </p>
            <ul className="mt-6 flex flex-col gap-2 text-sm text-[color:var(--color-text-muted)]">
              {muutMaksutPerks.map((perk) => (
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
              className="btn-ghost mt-auto pt-6 w-full"
            >
              Lue lisää
            </button>
          </li>
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
