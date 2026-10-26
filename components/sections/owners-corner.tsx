"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { FitnessEvent, OwnerPost } from "@/lib/site-data";
import { postCategories } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function OwnersCorner({
  events,
  posts,
}: {
  events: FitnessEvent[];
  posts: OwnerPost[];
}) {
  const [category, setCategory] = useState<(typeof postCategories)[number]>("All");
  const [active, setActive] = useState<OwnerPost | null>(null);
  const filtered = useMemo(
    () => (category === "All" ? posts : posts.filter((post) => post.category === category)),
    [category, posts]
  );

  return (
    <section id="chalk-bucket" className="scroll-mt-32 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="font-heading text-[11px] tracking-[0.28em] text-primary">
          From the chalk bucket
        </p>
        <h2 className="mt-3 max-w-4xl text-3xl sm:text-5xl">
          Owners&apos; notes & box events
        </h2>

        <h3 className="mt-12 text-xl tracking-[0.08em]">Upcoming events & throwdowns</h3>
        <div className="mt-6 grid gap-px border border-zinc-800 bg-zinc-800 md:grid-cols-2">
          {events.map((event) => (
            <article key={event.id} className="bg-[#121316] p-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="rounded-none font-heading tracking-[0.12em]">
                  {event.date} · {event.time}
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-none border-zinc-700 font-heading tracking-[0.12em]"
                >
                  {event.status}
                </Badge>
              </div>
              <h4 className="mt-4 text-2xl">{event.title}</h4>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{event.summary}</p>
              <a
                href={event.actionHref}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "mt-6 h-10 rounded-none border-zinc-700 font-heading uppercase tracking-[0.14em]"
                )}
              >
                {event.actionLabel}
              </a>
            </article>
          ))}
        </div>

        <h3 className="mt-16 text-xl tracking-[0.08em]">Owners&apos; thoughts & articles</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {postCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={cn(
                "border px-3 py-1.5 font-heading text-[11px] uppercase tracking-[0.16em]",
                category === item
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-zinc-800 text-zinc-400 hover:border-zinc-600"
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-px border border-zinc-800 bg-zinc-800 lg:grid-cols-2">
          {filtered.map((post) => (
            <button
              key={post.slug}
              type="button"
              onClick={() => setActive(post)}
              className="bg-[#0A0A0B] p-6 text-left hover:bg-[#121316]"
            >
              <p className="font-heading text-[11px] tracking-[0.2em] text-primary">
                {post.category} · {post.readingTime}
              </p>
              <h4 className="mt-3 text-2xl leading-tight">{post.title}</h4>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{post.excerpt}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.16em] text-zinc-500">
                {post.author} · {post.authorRole}
              </p>
            </button>
          ))}
        </div>
      </div>

      {active ? (
      <Dialog open onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto rounded-none border border-zinc-800 bg-[#0A0A0B] sm:max-w-2xl">
          {active ? (
            <DialogHeader>
              <p className="font-heading text-[11px] tracking-[0.2em] text-primary">
                {active.category} · {active.readingTime} read
              </p>
              <DialogTitle className="font-heading text-3xl uppercase leading-tight">
                {active.title}
              </DialogTitle>
              <div className="flex items-center gap-3 pt-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.authorAvatar}
                  alt={active.author}
                  className="size-10 object-cover grayscale"
                />
                <div>
                  <p className="text-sm">{active.author}</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                    {active.authorRole}
                  </p>
                </div>
              </div>
              <DialogDescription className="space-y-4 pt-4 text-sm leading-7 text-zinc-300">
                {active.content.map((paragraph) => (
                  <span key={paragraph.slice(0, 24)} className="block">
                    {paragraph}
                  </span>
                ))}
              </DialogDescription>
              <Link
                href={`/blog/${active.slug}`}
                className="pt-2 font-heading text-xs uppercase tracking-[0.18em] text-primary"
              >
                Open full article →
              </Link>
            </DialogHeader>
          ) : null}
        </DialogContent>
      </Dialog>
      ) : null}
    </section>
  );
}
