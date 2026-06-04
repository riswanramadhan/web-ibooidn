import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const siteUrl = "https://ibooidn.dekatlokal.com";
const siteName = "Iboo Idn";
const siteDescription =
  "Iboo Idn menyediakan wellness shot 70 ml berbahan buah, sayur, dan rempah alami tanpa gula dan air tambahan, kaya nutrisi, dan mudah diserap tubuh.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: siteDescription,
  alternates: {
    canonical: `${siteUrl}/`,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: `${siteUrl}/`,
    locale: "id_ID",
    images: [
      {
        url: `${siteUrl}/images/hero-banner.jpg.PNG`,
        width: 1200,
        height: 630,
        alt: "Iboo Idn Wellness Shot",
      },
    ],
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [`${siteUrl}/images/hero-banner.jpg.PNG`],
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: `${siteUrl}/`,
  };

  return (
    <html className="scroll-smooth" lang="id" suppressHydrationWarning>
      <body className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 transition-colors duration-300">
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          type="application/ld+json"
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
