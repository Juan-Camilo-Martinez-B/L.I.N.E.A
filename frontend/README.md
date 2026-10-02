# L.I.N.E.A. — Web UI

Next.js app for the three regression exercises. Con la API en el puerto 8000 usa el backend; si no hay conexión, predice con los modelos de `models/` (ver el repo [README](../README.md)).

## Install (pnpm, recomendado)

```bash
cp .env.example .env.local
corepack enable   # una vez por máquina, si Node lo trae
pnpm install
pnpm dev
```

Open http://localhost:3000.

Si la API en el puerto 8000 no responde, la interfaz calcula con los modelos copiados en `models/` (`inference.json` es la recta extraída de cada `.joblib`). El historial sigue dependiendo de la API. Para refrescar esa copia después de reentrenar: `python scripts/export_frontend_models.py` desde la raíz del repo.

## Alternativa con npm

Si no usas pnpm, `package-lock.json` sigue en el repo:

```bash
npm install
npm run dev
```

Cuando cambies dependencias en `package.json`, actualiza **ambos** locks (`pnpm install` y `npm install`) para que CI y el resto del equipo no se desincronicen.

## Scripts

| Comando | Uso |
|---------|-----|
| `pnpm dev` | Servidor de desarrollo |
| `pnpm build` | Build de producción |
| `pnpm lint` | ESLint |
| `pnpm design:lint` | Revisa `DESIGN.md` |
| `pnpm design:tokens` | Exporta tokens CSS |

Palette and layout notes: [DESIGN.md](./DESIGN.md).
