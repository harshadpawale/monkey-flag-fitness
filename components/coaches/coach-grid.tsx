"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Coach } from "@/lib/site-data";
import { SITE_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function CoachGrid({ coaches }: { coaches: Coach[] }) {
  const [active, setActive] = useState<Coach | null>(null);

  return (
    <>
      <div className="grid gap-px border border-zinc-800 bg-zinc-800 sm:grid-cols-2 lg:grid-cols-4">
        {coaches.map((coach) => (
          <button
            key={coach.slug}
            type="button"
            onClick={() => setActive(coach)}
            className="group bg-[#0A0A0B] text-left transition-colors hover:bg-[#121316]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={coach.image}
                alt={coach.imageAlt}
                fill
                className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-heading text-xl">{coach.name}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-primary">
                  {coach.role}
                </p>
              </div>
            </div>
            <div className="space-y-4 p-5">
              <div className="flex flex-wrap gap-1.5">
                {coach.certifications.map((cert) => (
                  <Badge
                    key={cert}
                    variant="outline"
                    className="rounded-none border-zinc-700 font-heading tracking-[0.12em]"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
              <p className="text-sm leading-6 text-zinc-400">{coach.philosophy}</p>
            </div>
          </button>
        ))}
      </div>

      {active ? (
      <Dialog open onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto rounded-none border border-zinc-800 bg-[#0A0A0B] sm:max-w-2xl">
          {active ? (
            <>
              <DialogHeader>
                <p className="font-heading text-[11px] tracking-[0.24em] text-primary">
                  {active.role}
                </p>
                <DialogTitle className="font-heading text-3xl uppercase">
                  {active.name}
                </DialogTitle>
                <DialogDescription className="text-sm leading-7 text-zinc-400">
                  {active.story}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="text-sm tracking-[0.16em] text-primary">
                    Coaching Credentials
                  </h4>
                  <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-zinc-300">
                    {active.credentials.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm tracking-[0.16em] text-primary">
                    Athletic Background & Specialties
                  </h4>
                  <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-zinc-300">
                    {active.specialties.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="border border-zinc-800 bg-[#121316] p-4 text-sm leading-7 text-zinc-300">
                <span className="font-heading tracking-[0.16em] text-primary">
                  Favorite Benchmark WOD / Lift ·{" "}
                </span>
                {active.favoriteWod}
              </p>
              <DialogFooter className="border-zinc-800 bg-transparent">
                <a
                  href={SITE_LINKS.introBookingUrl}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "h-11 w-full rounded-none font-heading uppercase tracking-[0.14em] sm:w-auto"
                  )}
                >
                  Book an Intro Session with Our Team
                </a>
              </DialogFooter>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
      ) : null}
    </>
  );
}
