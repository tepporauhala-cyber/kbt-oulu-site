"use client";

import { Swords, Shield, Flame, Users, Calendar, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Laji } from "@/lib/content";
import { openLajiModal } from "@/lib/lajiModal";

const icons: Record<string, LucideIcon> = {
  swords: Swords,
  shield: Shield,
  flame: Flame,
  users: Users,
};

export default function LajiCard({
  laji,
  peruskurssiDate,
}: {
  laji: Laji;
  peruskurssiDate?: string;
}) {
  const Icon = icons[laji.icon] ?? Swords;

  return (
    <button
      type="button"
      onClick={() => openLajiModal(laji.id)}
      className="card group flex h-full w-full flex-col text-left hover:-translate-y-1 hover:bg-white/[0.05]"
    >
      <div className="flex items-start justify-between">
        <span
          aria-hidden="true"
          className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-accent)]/15 text-[color:var(--color-accent)]"
        >
          <Icon size={22} />
        </span>
        <ArrowUpRight
          aria-hidden="true"
          size={18}
          className="text-[color:var(--color-text-muted)] opacity-0 transition group-hover:opacity-100"
        />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{laji.name}</h3>
      <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">{laji.description}</p>
      {laji.tags && laji.tags.length > 0 && (
        <p className="mt-3 text-xs uppercase tracking-wider text-[color:var(--color-accent)]/80">
          {laji.tags.join(" · ")}
        </p>
      )}
      {peruskurssiDate && (
        <p className="mt-auto pt-4 inline-flex items-center gap-1.5 text-xs text-[color:var(--color-accent)]">
          <Calendar aria-hidden="true" size={12} />
          Peruskurssi: {peruskurssiDate}
        </p>
      )}
    </button>
  );
}
