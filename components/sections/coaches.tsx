import Link from "next/link";
import { CoachGrid } from "@/components/coaches/coach-grid";
import type { Coach } from "@/lib/site-data";

export function CoachesSection({ coaches }: { coaches: Coach[] }) {
  return (
    <section id="coaches" className="scroll-mt-32 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-heading text-[11px] tracking-[0.28em] text-primary">
              Our coaches
            </p>
            <h2 className="mt-3 text-3xl sm:text-5xl">Eyes on the floor</h2>
          </div>
          <Link
            href="/coaches"
            className="font-heading text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-primary"
          >
            Full coach roster →
          </Link>
        </div>
        <div className="mt-10">
          <CoachGrid coaches={coaches} />
        </div>
      </div>
    </section>
  );
}
