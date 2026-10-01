---
version: alpha
name: Neon
description: Identidad visual de L.I.N.E.A. — una recta de neón verde y naranja sobre fondo oscuro.
colors:
  primary: "#F2FFF8"
  on-primary: "#03150F"
  secondary: "#B7E6D6"
  tertiary: "#00F5A0"
  on-tertiary: "#03150F"
  tertiary-container: "#00C47E"
  neutral: "#070B09"
  surface: "#101916"
  outline: "#234438"
  mark: "#FF8C2A"
  positive: "#46FF88"
  mora: "#FF5A1F"
  error: "#FF7A9A"
typography:
  display:
    fontFamily: Syne
    fontSize: 2.25rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.02em
  title:
    fontFamily: Syne
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.01em
  heading:
    fontFamily: Outfit
    fontSize: 1rem
    fontWeight: 600
    lineHeight: 1.4
  body-md:
    fontFamily: Outfit
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Outfit
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  label-caps:
    fontFamily: IBM Plex Mono
    fontSize: 0.6875rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.08em
  num-xl:
    fontFamily: IBM Plex Mono
    fontSize: 2.5rem
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -0.02em
    fontFeature: '"tnum"'
  num-md:
    fontFamily: IBM Plex Mono
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.4
    fontFeature: '"tnum"'
rounded:
  sm: 4px
  md: 8px
  lg: 14px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
components:
  page:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: 20px
  card-caption:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-caps}"
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.heading}"
    rounded: "{rounded.md}"
    padding: 12px
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary}"
  segment:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.md}"
    height: 44px
  segment-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.num-md}"
    rounded: "{rounded.md}"
    padding: 12px
    height: 48px
  input-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.error}"
  prediction-value:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.num-xl}"
  metric-chip:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: 8px
  top-feature-badge:
    backgroundColor: "{colors.mark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
  impact-bar-positive:
    backgroundColor: "{colors.positive}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
  impact-bar-negative:
    backgroundColor: "{colors.mora}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
  status-online:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.positive}"
    rounded: "{rounded.full}"
  skeleton:
    backgroundColor: "{colors.outline}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
---

## Overview

**Una recta de neón.** L.I.N.E.A. ajusta tres regresiones lineales; la interfaz se ve
como un tablero oscuro: retícula verde, la recta en naranja y el punto estimado en verde.
Números exactos, jerarquía clara, brillo solo donde hay una acción o un dato.

La pieza protagonista no es un gráfico decorativo sino **la ecuación**: cada
predicción se muestra junto con su descomposición `ŷ = β₀ + Σ βᵢ·xᵢ`, sus métricas
(R², MSE, RMSE) y la variable de mayor impacto. La UI enseña el modelo, no lo esconde.

Mobile first: el diseño se piensa desde 320 px de ancho y se expande a dos columnas en
pantallas grandes. La densidad es alta pero respirada: agrupar, no apilar.

## Colors

**Verde y naranja neón.** El fondo es casi negro, con un matiz verde. El verde es la
acción y lo que sube la predicción. El naranja es la recta, la marca y lo que la baja.

**Cómo armonizan.** Dos acentos sobre neutros oscuros:

1. **Noche:** fondo, tarjetas y bordes comparten un verde muy oscuro y solo cambian de luminosidad.
2. **Verde neón (acción):** el único color que invita a hacer algo. También es el punto en las figuras.
3. **Naranja neón (marca):** la recta, los avisos y el enlace de la API.
4. **Signo:** verde si el coeficiente sube ŷ, naranja intenso si lo baja. Ninguno se confunde con el texto principal.

**Tintes, no tokens nuevos.** Los fondos suaves salen del mismo token con opacidad
(`bg-mark/15`, `ring-tertiary/20`, `bg-positive/10`). Las figuras de `report/figures/` usan los mismos valores
(`src/arepa/visualization.py`). El brillo (text-shadow y box-shadow) no añade colores: usa tertiary y mark.

- **Primary (#F2FFF8) — Texto:** títulos y cuerpo sobre el fondo oscuro.
- **On-primary (#03150F):** texto sobre verde o naranja sólidos (botones e insignias).
- **Secondary (#B7E6D6) — Eje:** leyendas, metadatos, ayudas de campo. Pasa AA sobre neutral y surface.
- **Tertiary (#00F5A0) — Verde neón:** botón Calcular, ejercicio activo, foco y retícula. Hover en **#00C47E**.
- **Neutral (#070B09):** fondo de página.
- **Surface (#101916):** tarjetas, campos y fondo de las figuras.
- **Outline (#234438):** bordes, divisores y skeletons. Nunca para texto.
- **Mark (#FF8C2A) — Naranja neón:** la recta, la variable de mayor impacto y los avisos. Como texto solo sobre fondo oscuro.
- **Positive (#46FF88):** coeficientes que suben la predicción y el estado "en línea".
- **Mora (#FF5A1F):** coeficientes que bajan la predicción. El nombre del token se conserva; el color es naranja.
- **Error (#FF7A9A):** validación y fallos de red. Solo como texto o borde, siempre acompañado de un mensaje.

## Typography

Tres familias con un rol cada una:

- **Syne** (display, title): la voz del enunciado —nombre del ejercicio, títulos de sección. `display` sube a 3rem desde `lg`. Los números nunca van en esta familia.
- **Outfit** (heading, body): lectura clara en tamaños pequeños.
- **IBM Plex Mono** (label-caps, num-xl, num-md): **todo número va en mono con cifras tabulares** (`tnum`) para que columnas, coeficientes y métricas se alineen. `label-caps` en mayúsculas para etiquetas de metadatos.

La predicción usa `num-xl`: es el elemento más grande de la pantalla después del título.
`display` pasa de 2.25rem a 3rem y `num-xl` de 2.5rem a 3.25rem desde `lg`.
La tabla de la ecuación y los comandos usan `text-code` (13 px) en móvil y 14 px desde `sm`.
Los campos usan `num-md` a **16 px como mínimo**: por debajo, iOS Safari hace zoom al enfocar.

## Layout

Base de espaciado de 4 px (la misma escala de Tailwind): `xs` 4, `sm` 8, `md` 16, `lg` 24, `xl` 40.

**Mobile first.** Los estilos base son los del teléfono (320–639 px); cada breakpoint
solo *añade*. Se usan los breakpoints por defecto de Tailwind, sin valores sueltos:

| Breakpoint | Desde | Qué cambia |
|---|---|---|
| base | 0 | Una columna, márgenes de 16 px, botón a todo el ancho, campos apilados. Encabezado: marca + historial + estado de la API, nada más (el historial se abre como hoja). Orden: título → selector de ejercicio → formulario → resultado → interpretación → figuras. |
| `sm` | 640 px | Márgenes de 24 px; campos en 2 columnas. |
| `md` | 768 px | Campos en 3 columnas; resultado e interpretación lado a lado. |
| `lg` | 1024 px | 12 columnas: título grande (`type-hero`, hasta 4.5rem) en 8 con su fila propia; selector de ejercicio debajo; formulario 5 + resultado e interpretación 7; figuras a todo el ancho. Campos vuelven a 1 columna. Sube la escala tipográfica. |
| `xl` | 1280 px | Nada nuevo: el contenedor se queda en 1152 px y se centra. |

Además de ancho, se respetan otras condiciones del dispositivo:

- `hover:` solo aplica en dispositivos con puntero fino (comportamiento de Tailwind v4); en táctil no quedan estados "pegados".
- `prefers-reduced-motion`: sin brillo en skeletons, sin giro en spinners, scroll sin animación.
- Muescas de iOS: el encabezado respeta `env(safe-area-inset-*)`; la altura usa `dvh`.
- Objetivos táctiles de al menos 44 px; el selector de 3 segmentos cabe en 320 px sin scroll horizontal.
- Al calcular en pantallas menores a `lg`, el resultado se desplaza a la vista.
- El fondo de página lleva una retícula neón (28 px, verde al 12 %) y dos resplandores, verde arriba y naranja abajo a la derecha. Solo en el lienzo, nunca dentro de tarjetas.

## Elevation & Depth

La profundidad se comunica con **bordes de 1 px en outline**, el salto de superficie
(neutral → surface) y un resplandor verde suave en tarjetas y en el botón primario.

## Shapes

Esquinas contenidas: `sm` 4 px en chips y skeletons, `md` 8 px en campos y botones,
`lg` 14 px en tarjetas, `full` solo en barras de impacto e indicadores de estado.
Nada de formas orgánicas ni ilustraciones: la forma la dan los datos.

## Components

- **Tarjetas de ejercicio (segment / segment-active):** radios nativos. La activa va en verde neón con texto oscuro; flechas del teclado funcionan sin JavaScript extra.
- **Pie de página:** banda oscura con borde naranja; marca, nombre completo y el enlace de la API en naranja.
- **Campo (input / input-error):** etiqueta en `heading`, unidad a la derecha, ayuda en `body-sm` con el rango de entrenamiento. Acepta coma o punto decimal. Un valor fuera del rango de entrenamiento muestra aviso (no bloquea): la recta extrapola.
- **Botón primario:** ancho completo en móvil, 48 px de alto, verde neón con resplandor.
- **Tarjeta de resultado:** etiqueta `label-caps`, valor en `num-xl` con unidad, banda ± RMSE, chips de métricas y calificación del ajuste (alto ≥ 0.90, bueno ≥ 0.75, moderado por debajo).
- **Barras de impacto:** coeficientes estandarizados normalizados al máximo; verde si suben, naranja si bajan, eje para efectos cíclicos (hora = amplitud de seno y coseno). La variable dominante lleva la insignia del punto.
- **Ecuación:** tabla mono con término, valor, coeficiente y aporte; la suma cierra en ŷ.
- **Skeleton:** bloques en outline con brillo lento; reproducen la geometría final para que nada salte al cargar. Respeta `prefers-reduced-motion`.
- **Estado de API:** píldora con punto verde (en línea), naranja (parcial) o error (sin conexión) y ayuda para arrancar el backend.

## Do's and Don'ts

- **Do** mostrar R² y RMSE junto a cada predicción; un número sin su error es media verdad.
- **Do** escribir la interfaz en español y los números con formato `es-CO`.
- **Do** usar skeletons con la forma del contenido final en cada carga.
- **Do** avisar cuando una entrada sale del rango de entrenamiento.
- **Don't** introducir un tercer color de acción; verde actúa, naranja señala.
- **Don't** usar el naranja neón como relleno de un botón.
- **Don't** separar tarjetas solo con sombra; el borde y la superficie siguen mandando. El resplandor acompaña, no sustituye.
- **Don't** redondear métricas hacia arriba ni ocultar un ajuste moderado (glucosa R² ≈ 0.68).
- **Don't** escribir `@media (min-width: …)` a mano: usa los breakpoints de Tailwind (`sm:`, `md:`, `lg:` o `@variant lg` en CSS).

## Implementation

Tailwind CSS v4, configurado solo en CSS:

- `src/app/tokens.css` se **genera** desde este archivo con `npm run design:tokens` (colores y radios). No se edita a mano.
- `src/app/globals.css` define las utilidades tipográficas `type-*`, conectadas a las fuentes de `next/font`, más `graph-paper` y `skeleton`.
- `npm run design:lint` valida este archivo (referencias rotas, contraste WCAG, orden de secciones).
