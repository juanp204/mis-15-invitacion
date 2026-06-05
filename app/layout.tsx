import type { Metadata } from "next"
import { Playfair_Display, Cormorant_Garamond, Great_Vibes } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
})

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mis XV Años — Melany",
  description:
    "Te invito a celebrar conmigo una noche inolvidable. Mis XV Años — Domingo 14 de Junio, Discoteca 8cero4.",
  openGraph: {
    title: "Mis XV Años — Melany",
    description:
      "Te invito a celebrar conmigo una noche inolvidable. Mis XV Años — Domingo 14 de Junio, Discoteca 8cero4.",
    images: [
      {
        url: "https://images.pixieset.com/250051611/5ea0fca41f077e864b8ce03b7759fd59-small.jpg",
        alt: "Invitación de XV Años de Melany",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mis XV Años — Melany",
    description:
      "Te invito a celebrar conmigo una noche inolvidable. Mis XV Años — Domingo 14 de Junio, Discoteca 8cero4.",
    images: ["https://images.pixieset.com/250051611/5ea0fca41f077e864b8ce03b7759fd59-small.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${cormorant.variable} ${greatVibes.variable} bg-background`}
    >
      <body className="font-serif antialiased">
        {children}
      </body>
    </html>
  )
}
