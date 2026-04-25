import { UserRound } from "lucide-react";
import { site } from "@/lib/content";

export default function Valmentajat() {
  return (
    <section id="valmentajat" className="section bg-[color:var(--color-bg-soft)]">
      <div className="container-page">
        <p className="eyebrow">Valmentajat</p>
        <h2 className="mt-3 section-title">Kokeneet ohjaajat</h2>
        <p className="mt-4 max-w-2xl text-[color:var(--color-text-muted)]">
          Valmentajamme ovat kokeneita kamppailulajien ohjaajia. Tarkemmat esittelyt päivittyvät
          tähän pian.
        </p>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.valmentajat.map((v, i) => (
            <li key={`${v.name}-${i}`} className="card flex gap-4">
              <span
                aria-hidden="true"
                className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/5 text-[color:var(--color-text-muted)]"
              >
                <UserRound size={26} />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">{v.name}</h3>
                <p className="text-sm text-[color:var(--color-accent)]">{v.role}</p>
                <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">{v.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
