import { Wallet, CreditCard, Info, ExternalLink } from "lucide-react";
import { site } from "@/lib/content";

export default function Aloita() {
  const a = site.aloita;

  return (
    <section id="aloita" className="section">
      <div className="container-page">
        <p className="eyebrow inline-flex items-center gap-2">
          <Wallet aria-hidden="true" size={14} />
          Aloittaminen
        </p>
        <h2 className="mt-3 section-title">{a.title}</h2>
        <p className="mt-4 max-w-2xl text-[color:var(--color-text-muted)]">{a.intro}</p>

        <ol className="mt-12 grid gap-5 sm:grid-cols-3">
          {a.steps.map((step, idx) => (
            <li key={step.title} className="card relative pt-8">
              <span
                aria-hidden="true"
                className="absolute -top-4 left-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--color-accent)] font-[family-name:var(--font-display)] text-lg text-white"
              >
                {idx + 1}
              </span>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="card">
            <p className="inline-flex items-center gap-2 text-sm text-[color:var(--color-accent)]">
              <CreditCard aria-hidden="true" size={18} />
              Maksaminen
            </p>

            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-wider text-[color:var(--color-text-muted)]">
                  Saaja
                </dt>
                <dd className="mt-1 text-sm font-medium text-white">{a.payment.ibanOwner}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-[color:var(--color-text-muted)]">
                  Tilinumero
                </dt>
                <dd className="mt-1 break-all font-mono text-sm tabular-nums text-white">
                  {a.payment.iban}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs uppercase tracking-wider text-[color:var(--color-text-muted)]">
                  {a.payment.messageLabel}
                </dt>
                <dd className="mt-1 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-sm text-white">
                  {a.payment.messageExample}
                </dd>
              </div>
            </dl>

            <div className="mt-5">
              <p className="text-xs uppercase tracking-wider text-[color:var(--color-text-muted)]">
                Maksutavat
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {a.payment.methods.map((m) => (
                  <li
                    key={m}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="flex flex-col gap-4">
            {a.extras.map((e) => (
              <li key={e.label} className="card">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-base font-semibold text-white">{e.label}</h3>
                  <span className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-[color:var(--color-accent)]">
                    {e.price}
                  </span>
                </div>
                <p className="mt-2 text-xs text-[color:var(--color-text-muted)]">{e.note}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <p className="inline-flex items-center gap-2 text-sm text-[color:var(--color-accent)]">
            <Info aria-hidden="true" size={16} />
            Hyvä tietää
          </p>
          <ul className="mt-4 grid gap-5 md:grid-cols-3">
            {a.goodToKnow.map((item) => (
              <li key={item.title} className="card">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">{item.body}</p>
                {item.link && (
                  <a
                    href={item.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--color-accent)] hover:underline"
                  >
                    {item.link.label}
                    <ExternalLink aria-hidden="true" size={14} />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
