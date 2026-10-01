import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

export function Card({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "rounded-lg border border-tertiary/25 bg-surface p-4 shadow-[0_0_32px_-16px] shadow-tertiary/40 sm:p-5",
        className,
      )}
      {...props}
    />
  );
}

export function CardLabel({ className, ...props }: ComponentProps<"h2">) {
  return <h2 className={cn("type-label text-secondary", className)} {...props} />;
}
