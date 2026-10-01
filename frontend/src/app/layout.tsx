import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Outfit, Syne } from "next/font/google";

import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-syne",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "L.I.N.E.A.",
  description:
    "Laboratorio de Inferencia Numérica y Estimación Aplicada. Predice el precio del dólar, la glucosa y el consumo de energía con tres regresiones lineales.",
};

export const viewport: Viewport = {
  themeColor: "#070b09",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${syne.variable} ${outfit.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
