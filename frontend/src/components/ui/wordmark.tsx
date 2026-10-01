import { cn } from "@/lib/cn";

export function Wordmark({ inverted = false, compact = false }: { inverted?: boolean; compact?: boolean }) {
  return (
    <span className="min-w-0">
      <span className="neon-title block font-display text-lg leading-none font-semibold tracking-tight">L.I.N.E.A.</span>
      <span
        className={cn(
          "mt-1 block text-xs leading-snug text-pretty",
          inverted ? "text-on-primary/70" : "text-secondary",
          compact && "hidden sm:block",
        )}
      >
        Laboratorio de Inferencia Numérica y Estimación Aplicada
      </span>
    </span>
  );
}
