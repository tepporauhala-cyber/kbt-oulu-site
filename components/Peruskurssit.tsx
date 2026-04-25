import { GraduationCap, Check, Calendar } from "lucide-react";
import { site } from "@/lib/content";

export default function Peruskurssit() {
  const pk = site.peruskurssit;

  return (
    <section id="peruskurssit" className="section bg-[color:var(--color-bg-soft)]">
      <div className="container-page">
        <p className="eyebrow inline-flex items-center gap-2">
          <GraduationCap aria-hidden="true" size={14} />
          {pk.tagline}
        </p>
        <h2 className="mt-3 section-title">{pk.title}</h2>
        <p className="mt-4 max-w-2xl text-[color:var(--color-text-muted)]">{pk.intro}</p>

        {pk.seasonNote && (
          <p className="mt-4 inline-flex items-start gap-2 rounded-lg border border-[color:var(--color-accent)]/30 bg-[color:var(--color-accent)]/10 px-4 py-3 text-sm text-[color:var(--color-accent)]">
            <Calendar aria-hidden="true" size={16} className="mt-0.5 shrink-0" />
            <span>{pk.seasonNote}</span>
          </p>
        )}

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="card">
            <h3 className="text-lg font-semibold text-white">Miten mukaan?</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {pk.joinSteps.map((step) => (
                <li key={step} className="flex items-start gap-3 text-sm text-[color:var(--color-text-muted)]">
                  <Check
                    aria-hidden="true"
                    size={18}
                    className="mt-0.5 shrink-0 text-[color:var(--color-accent)]"
                  />
                  <span>{step}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-semibold text-white">Mitä tarvitset?</h3>
            <dl className="mt-4 grid gap-3 sm:grid-cols-3">
              {pk.requirements.map((req) => (
                <div key={req.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <dt className="text-xs uppercase tracking-wider text-[color:var(--color-accent)]">
                    {req.label}
                  </dt>
                  <dd className="mt-1 text-sm text-white">{req.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-white">Peruskurssin hinta</h3>
            <ul className="mt-4 flex flex-col divide-y divide-white/5">
              {pk.prices.map((p) => (
                <li
                  key={p.label}
                  className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0"
                >
                  <span className="text-sm text-[color:var(--color-text-muted)]">{p.label}</span>
                  <span className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-white">
                    {p.price}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-lg bg-white/[0.03] p-3 text-xs text-[color:var(--color-text-muted)]">
              Hinta sisältää KBT:n kuluvan vuoden jäsenmaksun (20 €).
            </p>
            <a href="#aloita" className="btn-primary mt-6 w-full">
              Tule kokeilemaan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
