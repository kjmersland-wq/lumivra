import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lumivra — Live Brighter. Age Smarter.",
    template: "%s | Lumivra",
  },
  description:
    "Evidence-based wellness research on sleep, energy, recovery, and healthy aging. Honest supplement reviews and practical protocols — no fluff.",
  keywords: [
    "wellness supplements",
    "sleep optimization",
    "longevity",
    "healthy aging",
    "energy supplements",
    "recovery tools",
    "nootropics",
    "biohacking",
  ],
  authors: [{ name: "Lumivra Editorial Team" }],
  creator: "KM TECH LABS",
  publisher: "KM TECH LABS",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lumivra.com",
    siteName: "Lumivra",
    title: "Lumivra — Live Brighter. Age Smarter.",
    description:
      "Evidence-based wellness research on sleep, energy, recovery, and healthy aging.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=630&fit=crop&auto=format&q=80",
        width: 1200,
        height: 630,
        alt: "Lumivra — Premium Wellness Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumivra — Live Brighter. Age Smarter.",
    description: "Evidence-based wellness research on sleep, energy, recovery, and healthy aging.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
