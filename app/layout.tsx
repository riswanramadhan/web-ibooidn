import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import {
  absoluteUrl,
  HERO_IMAGE_ALT,
  OG_IMAGE_PATH,
  SEO_DESCRIPTION,
  SEO_TITLE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_TITLE,
  TWITTER_DESCRIPTION,
  TWITTER_TITLE,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  applicationName: "Iboo.idn",
  creator: "DekatLokal",
  publisher: "Iboo.idn",
  category: "wellness shot",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: SOCIAL_TITLE,
    description: SEO_DESCRIPTION,
    url: `${SITE_URL}/`,
    locale: "id_ID",
    images: [
      {
        url: absoluteUrl(OG_IMAGE_PATH),
        width: 1200,
        height: 630,
        alt: HERO_IMAGE_ALT,
      },
    ],
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TWITTER_TITLE,
    description: TWITTER_DESCRIPTION,
    images: [
      {
        url: absoluteUrl(OG_IMAGE_PATH),
        alt: HERO_IMAGE_ALT,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="scroll-smooth" lang="id" suppressHydrationWarning>
      <body className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
