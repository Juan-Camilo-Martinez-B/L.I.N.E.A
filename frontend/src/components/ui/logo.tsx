import { cn } from "@/lib/cn";

/** Regression mark: axes, an orange fitted line and a green estimated point. */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden
      className={cn("neon-mark size-7", className)}
    >
      <rect x="2.5" y="2.5" width="43" height="43" rx="12" fill="var(--color-surface)" stroke="var(--color-tertiary)" strokeWidth="1.5" />
      <path d="M12 34V14M12 34H36" fill="none" stroke="var(--color-secondary)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 30L22 25L29 19L36 13" fill="none" stroke="var(--color-mark)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="29" cy="19" r="3.1" fill="var(--color-tertiary)" />
    </svg>
  );
}
