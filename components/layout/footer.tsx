import Link from "next/link";
import { BrandLogo } from "@/components/brand/logo";
import { buttonVariants } from "@/components/ui/button";
import { NAV_LINKS, SITE, SITE_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#0A0A0B]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <BrandLogo />
          <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-400">
            CrossFit and functional fitness in Pune. Direct coaching, an ego-free
            floor, and {SITE.tagline}
          </p>
          <a
            href={SITE_LINKS.introBookingUrl}
            className={cn(
              buttonVariants({ variant: "default" }),
              "mt-6 h-11 rounded-none px-5 font-heading uppercase tracking-[0.16em]"
            )}
          >
            Book an Intro
          </a>
        </div>
        <div>
          <p className="font-heading text-sm tracking-[0.2em] text-primary">
            Navigate
          </p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/coaches" className="hover:text-foreground">
                All Coaches
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-heading text-sm tracking-[0.2em] text-primary">
            The Box
          </p>
          <p className="mt-4 text-sm leading-7 text-zinc-400">
            {SITE.address.addressLocality}, {SITE.address.addressRegion}
            <br />
            {SITE.address.streetAddress}
            <br />
            {SITE.email}
          </p>
        </div>
      </div>
      <div className="border-t border-zinc-800 py-6 text-center text-xs tracking-[0.16em] text-zinc-500 uppercase">
        © 2026 {SITE.name}. Hard work. Grit.
      </div>
    </footer>
  );
}
