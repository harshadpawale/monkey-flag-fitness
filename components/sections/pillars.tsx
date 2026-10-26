import { Dumbbell, Eye, Shield, Users } from "lucide-react";
import { boxEtiquette, pillars } from "@/lib/site-data";

const icons = [Eye, Dumbbell, Users, Shield];

export function Pillars() {
  const ticker = boxEtiquette.map((rule, i) => `${i + 1}. ${rule}`).join("  •  ");

  return (
    <section id="why" className="scroll-mt-32 pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="font-heading text-[11px] tracking-[0.28em] text-primary">
          Demand more from your fitness
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl sm:text-5xl">
          Forging elite fitness without the ego
        </h2>
        <div className="mt-12 grid gap-px border border-zinc-800 bg-zinc-800 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <article key={pillar.title} className="bg-[#0A0A0B] p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <p className="font-heading text-xs tracking-[0.24em] text-zinc-500">
                    0{index + 1}
                  </p>
                  <Icon className="size-4 text-primary" aria-hidden />
                </div>
                <h3 className="mt-6 text-xl leading-tight">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{pillar.body}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-16 overflow-hidden border-y border-zinc-800 bg-cream text-obsidian">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-4 sm:px-6">
          <p className="shrink-0 font-heading text-sm tracking-[0.22em]">
            Monkey Flag Box Etiquette
          </p>
          <div className="hidden h-8 w-px bg-obsidian/15 sm:block" />
          <div className="relative min-w-0 flex-1 overflow-hidden">
            <p className="animate-etiquette whitespace-nowrap font-heading text-[13px] tracking-[0.08em] sm:text-sm">
              {ticker}  •  {ticker}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
