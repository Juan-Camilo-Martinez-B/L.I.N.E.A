import { Logo } from "@/components/ui/logo";
import { Wordmark } from "@/components/ui/wordmark";
import { exerciseFromSlug } from "@/features/exercises/config";
import { Predictor } from "@/features/predictor/predictor";
import { API_BASE_URL } from "@/lib/api/client";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const { ejercicio } = await searchParams;
  const initialExercise = exerciseFromSlug(typeof ejercicio === "string" ? ejercicio : undefined);

  return (
    <div className="graph-paper flex min-h-dvh flex-col">
      <Predictor
        initialExercise={initialExercise}
        intro={
          <>
            <p className="type-label text-tertiary">Regresión lineal múltiple · CRISP-DM</p>
            <h1 className="neon-title type-hero mt-3 text-balance">Tres regresiones, una ecuación a la vista.</h1>
            <p className="type-body mt-4 max-w-xl text-pretty text-secondary lg:text-lg">
              Elige un ejercicio, escribe los valores y mira cómo cada variable empuja la predicción.
            </p>
          </>
        }
      />

      <footer className="border-t border-mark/50 bg-surface/90 pb-[env(safe-area-inset-bottom)] shadow-[0_-28px_80px_-36px] shadow-tertiary/50">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex items-center gap-3">
            <Logo className="size-11 shrink-0" />
            <Wordmark />
          </div>
          <nav aria-label="Enlaces" className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            <a
              href={`${API_BASE_URL}/docs`}
              target="_blank"
              rel="noreferrer"
              className="text-mark underline-offset-4 hover:underline"
            >
              Documentación de la API
            </a>
          </nav>
        </div>
        <div className="border-t border-outline">
          <div className="type-small mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-secondary sm:flex-row sm:justify-between sm:px-6">
            <p>Proyecto académico · CRISP-DM · regresión lineal múltiple</p>
            <p>scikit-learn · FastAPI · Next.js</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
