import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = "https://cristianosantos.dev"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Cristiano Pereira Santos | Systems Analyst, IT Support & Infrastructure",
  description:
    "IT professional working across Systems Analysis, Technical Support (N1/N2), Infrastructure, Field Service and Web Development. Belo Horizonte, MG - Brazil.",
  keywords: [
    "Cristiano Pereira Santos",
    "Systems Analyst",
    "Analista de Sistemas",
    "Technical Support",
    "Suporte Técnico",
    "IT Infrastructure",
    "Field Service",
    "Web Developer",
    "Active Directory",
    "Microsoft 365",
    "Belo Horizonte",
  ],
  authors: [{ name: "Cristiano Pereira Santos" }],
  creator: "Cristiano Pereira Santos",
  generator: "v0.app",
  openGraph: {
    title: "Cristiano Pereira Santos | Systems Analyst & IT Professional",
    description:
      "IT professional combining Systems Analysis, Technical Support, Infrastructure, Field Service and Web Development.",
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Cristiano Pereira Santos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristiano Pereira Santos | Systems Analyst & IT Professional",
    description:
      "IT professional combining Systems Analysis, Technical Support, Infrastructure, Field Service and Web Development.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#08080a",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Cristiano Pereira Santos",
              url: siteUrl,
              jobTitle: "Systems Analyst / IT Support / Infrastructure",
              email: "mailto:cristiano200203@gmail.com",
              telephone: "+5531982347447",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Belo Horizonte",
                addressRegion: "MG",
                addressCountry: "BR",
              },
              sameAs: ["https://github.com/Nukaus"],
              knowsAbout: [
                "Systems Analysis",
                "Technical Support",
                "IT Infrastructure",
                "Field Service",
                "Active Directory",
                "Microsoft 365",
                "Web Development",
                "MySQL",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
