import type { Metadata } from "next";
import { Outfit, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/components/providers/I18nProvider";
import { PrivacyProvider } from "@/components/providers/PrivacyProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";

const outfit = Outfit({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap" 
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap"
});

export const metadata: Metadata = {
  title: "HealthCompass – Anonymous Health Risk Checks for Prevention",
  description: "Take short, anonymous self-assessments for common health risks such as dementia and heart attack. Get simple scores, prevention tips, and clear guidance — no login required.",
  openGraph: {
    title: "HealthCompass – Private Health Risk Checks",
    description: "Anonymous, multilingual self-assessments for common health risks. Understand risk factors, get prevention tips, and use the app without registration.",
    images: [{ url: "/social.png", width: 1200, height: 630 }],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${plexArabic.variable}`}>
      <body
        className={`min-h-screen flex flex-col bg-slate-50/50 text-slate-800 antialiased selection:bg-teal-100 selection:text-teal-900 transition-colors duration-300 font-sans`}
      >
        <PrivacyProvider>
          <I18nProvider>
            <SkipLink />
            <Navbar />
            <main id="main-content" className="flex-grow flex flex-col">
              {children}
            </main>
            <Footer />
          </I18nProvider>
        </PrivacyProvider>
      </body>
    </html>
  );
}
