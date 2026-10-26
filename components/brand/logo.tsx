import Image from "next/image";
import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo.gif"
      alt="Monkey Flag Fitness"
      width={220}
      height={160}
      unoptimized
      priority={priority}
      className={cn("h-14 w-auto object-contain object-left sm:h-16", className)}
    />
  );
}
