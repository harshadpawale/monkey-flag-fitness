import type { Metadata } from "next";
import { Oswald, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE, SITE_LINKS } from "@/lib/site-data";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Monkey Flag Fitness | CrossFit & Functional Fitness in Pune";
const description =
  "Hard work. Grit. The best hour of your day. Monkey Flag Fitness is a CrossFit and functional fitness box in Pune with world-class coaching, scaled workouts, and an ego-free community.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: title,
    template: "%s | Monkey Flag Fitness",
  },
  description,
  keywords: [
    "CrossFit Pune",
    "Functional Fitness Pune",
    "Strength and Conditioning Pune",
    "CrossFit gym Pune",
    "Monkey Flag Fitness",
    "TrainTrack",
    "Beginner CrossFit India",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.domain,
    siteName: SITE.name,
    title,
    description,
    images: [{ url: "/logo.gif", alt: "Monkey Flag Fitness logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo.gif"],
  },
  icons: {
    icon: "/logo.gif",
    apple: "/logo.gif",
  },
  alternates: {
    canonical: SITE.domain,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${jakarta.variable} ${geistMono.variable} dark h-full`}
    >
      <body className="min-h-full flex flex-col bg-background pb-20 md:pb-0">
        <JsonLd />
        <Header introUrl={SITE_LINKS.introBookingUrl} />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCtaBar href={SITE_LINKS.introBookingUrl} />
      </body>
    </html>
  );
}
