import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start px-4 py-24 sm:px-6">
      <p className="font-heading text-[11px] tracking-[0.28em] text-primary">404</p>
      <h1 className="mt-3 text-4xl sm:text-6xl">Off the floor</h1>
      <p className="mt-4 text-sm text-zinc-400">
        That page does not exist. Head back to the box.
      </p>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "default" }),
          "mt-8 h-11 rounded-none px-5 font-heading uppercase tracking-[0.16em]"
        )}
      >
        Return home
      </Link>
    </div>
  );
}
