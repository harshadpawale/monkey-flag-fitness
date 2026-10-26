import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SITE_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/70 via-[#0A0A0B]/80 to-[#0A0A0B]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-40 pt-20 sm:px-6 sm:pt-28 lg:pb-48 lg:pt-32">
        <p className="inline-flex border border-zinc-800 bg-black/40 px-3 py-1 font-heading text-[11px] tracking-[0.28em] text-primary">
          CrossFit & Functional Fitness • Pune
        </p>
        <h1 className="mt-6 max-w-4xl text-4xl leading-[0.92] sm:text-6xl lg:text-7xl">
          Hard work. Grit. The best hour of your day.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
          Coach-led CrossFit for every fitness level. We scale the work, never
          the standard. Walk in new. Leave as part of the tribe.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={SITE_LINKS.introBookingUrl}
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-12 rounded-none px-6 font-heading text-sm uppercase tracking-[0.16em]"
            )}
          >
            Book Your Intro Session
          </a>
          <a
            href="#traintrack"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-12 rounded-none border-zinc-700 px-6 font-heading text-sm uppercase tracking-[0.16em]"
            )}
          >
            Member App & Registration
          </a>
        </div>
      </div>

      <div className="relative mx-auto -mb-16 grid max-w-7xl gap-px overflow-hidden border border-zinc-800 bg-zinc-800 px-0 sm:grid-cols-2">
        <PathCard
          kicker="Path 1"
          title="New to CrossFit? Start With an Intro"
          body="Never touched a barbell or new to functional fitness? Book your intro session via Funfit to meet a coach, tour the box, and map out your goals."
          cta="Book the intro"
          href={SITE_LINKS.introBookingUrl}
        />
        <PathCard
          kicker="Path 2"
          title="Current Member or Experienced Athlete?"
          body="Already part of the tribe or dropping in? Register on TrainTrack to book class slots, log your WOD scores, and track PRs."
          cta="Open TrainTrack hub"
          href="#traintrack"
        />
      </div>
    </section>
  );
}

function PathCard({
  kicker,
  title,
  body,
  cta,
  href,
}: {
  kicker: string;
  title: string;
  body: string;
  cta: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group bg-[#121316] p-6 transition-colors hover:bg-[#17181c] sm:p-8"
    >
      <p className="font-heading text-[11px] tracking-[0.28em] text-primary">
        {kicker}
      </p>
      <h2 className="mt-3 text-2xl leading-tight sm:text-3xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-zinc-400">{body}</p>
      <span className="mt-6 inline-flex items-center gap-2 font-heading text-xs uppercase tracking-[0.18em] text-foreground">
        {cta}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </a>
  );
}
