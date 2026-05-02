import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ibooidn.dekatlokal.com"),
  title: "Iboo.idn Wellness Shot | Concentrated Natural Nutrition",
  description:
    "Wellness Shot 70 ml berbahan buah, sayur, dan rempah alami. Tanpa gula dan air tambahan, kaya nutrisi, dan mudah diserap tubuh.",
  openGraph: {
    title: "Iboo.idn Wellness Shot",
    description:
      "Concentrated natural nutrition from fruit, vegetables, and spices in a practical 70 ml wellness shot.",
    images: [
      {
        url: "/images/hero-banner.jpg.PNG",
        width: 1200,
        height: 630,
        alt: "Iboo.idn Wellness Shot",
      },
    ],
    siteName: "Iboo.idn",
    type: "website",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <body className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
