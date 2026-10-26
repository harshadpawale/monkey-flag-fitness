import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { newcomerChecklist, onboardingSteps, SITE_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-32 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="font-heading text-[11px] tracking-[0.28em] text-primary">
            How it works
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl">Three steps onto the floor</h2>
          <ol className="mt-10 space-y-0">
            {onboardingSteps.map((step) => (
              <li
                key={step.n}
                className="grid grid-cols-[auto_1fr] gap-5 border-l border-zinc-800 py-6 pl-6"
              >
                <span className="font-heading text-3xl text-primary">{step.n}</span>
                <div>
                  <h3 className="text-xl">
                    {"href" in step && step.href ? (
                      <a href={step.href} className="hover:text-primary">
                        {step.title}
                      </a>
                    ) : (
                      step.title
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="border border-zinc-800 bg-cream p-8 text-obsidian">
          <p className="font-heading text-[11px] tracking-[0.28em] text-primary">
            Let&apos;s work it out
          </p>
          <h3 className="mt-3 text-3xl text-obsidian">Newcomer checklist</h3>
          <ul className="mt-8 space-y-4">
            {newcomerChecklist.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href={SITE_LINKS.introBookingUrl}
            className={cn(
              buttonVariants({ variant: "default" }),
              "mt-8 h-12 w-full rounded-none font-heading uppercase tracking-[0.16em]"
            )}
          >
            Book Your Intro Now →
          </a>
        </aside>
      </div>
    </section>
  );
}
