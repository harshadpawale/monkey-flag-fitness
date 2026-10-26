import { ArrowRight } from "lucide-react";

export function MobileCtaBar({ href }: { href: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-800 bg-[#0A0A0B]/95 p-3 backdrop-blur md:hidden">
      <a
        href={href}
        className="flex items-center justify-center gap-2 bg-primary px-3 py-3 text-center font-heading text-[11px] uppercase leading-tight tracking-[0.08em] text-primary-foreground sm:text-[13px]"
      >
        Ready for the best hour of your day? Book an Intro
        <ArrowRight className="size-4 shrink-0" />
      </a>
    </div>
  );
}
