import { Swords, Shield, Flame, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { site } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  swords: Swords,
  shield: Shield,
  flame: Flame,
  users: Users,
};

export default function Lajit() {
  return (
    <section id="lajit" className="section">
      <div className="container-page">
        <p className="eyebrow">Lajit</p>
        <h2 className="mt-3 section-title">Lajivalikoima</h2>
        <p className="mt-4 max-w-2xl text-[color:var(--color-text-muted)]">
          Treeneihin voi tulla kokeilemaan oman kunnon ja kokemuksen mukaan. Aloittelijat ohjataan
          aluksi peruskursseille ja kokeneemmat suoraan jatkoryhmiin.
        </p>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.lajit.map((laji) => {
            const Icon = icons[laji.icon] ?? Swords;
            return (
              <li key={laji.id} className="card hover:-translate-y-1 hover:bg-white/[0.05]">
                <span
                  aria-hidden="true"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-accent)]/15 text-[color:var(--color-accent)]"
                >
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">{laji.name}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">
                  {laji.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
