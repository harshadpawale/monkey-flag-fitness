"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "@/components/brand/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header({ introUrl }: { introUrl: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-[#0A0A0B]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <BrandLogo priority />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-heading uppercase tracking-[0.18em] text-zinc-300 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={introUrl}
            className={cn(
              buttonVariants({ variant: "default" }),
              "hidden h-10 rounded-none px-4 font-heading text-xs uppercase tracking-[0.18em] sm:inline-flex"
            )}
          >
            Book an Intro
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-zinc-800 bg-[#0A0A0B] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-zinc-800 py-3 font-heading text-sm uppercase tracking-[0.16em]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={introUrl}
              className={cn(
                buttonVariants({ variant: "default" }),
                "mt-4 h-11 rounded-none font-heading uppercase tracking-[0.18em]"
              )}
            >
              Book an Intro
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
