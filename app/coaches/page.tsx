import type { Metadata } from "next";
import { CoachGrid } from "@/components/coaches/coach-grid";
import { buttonVariants } from "@/components/ui/button";
import { coaches, SITE_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Coaches",
  description:
    "Meet the Monkey Flag Fitness coaching team in Pune — CrossFit Level 1 and Level 2 coaches for strength, gymnastics, foundations, and scaled programming.",
};

export default function CoachesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <p className="font-heading text-[11px] tracking-[0.28em] text-primary">
        The floor staff
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl sm:text-6xl">Our coaches</h1>
      <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
        Certified eyes on every session. Click a coach for credentials, athletic
        background, and the benchmark they still chase.
      </p>
      <div className="mt-12">
        <CoachGrid coaches={coaches} />
      </div>
      <a
        href={SITE_LINKS.introBookingUrl}
        className={cn(
          buttonVariants({ variant: "default" }),
          "mt-12 h-12 rounded-none px-6 font-heading uppercase tracking-[0.16em]"
        )}
      >
        Book an Intro Session with Our Team
      </a>
    </div>
  );
}
