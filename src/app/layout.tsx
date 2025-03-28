import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { FloatingNav } from "@/components/ui/floating-navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coalbanks.ca"),
  title: "Coalbanks Creative | Professional Video Production",
  description: "Bringing your vision to life through expert videography and compelling narratives. Coalbanks Creative offers comprehensive video production services in Lethbridge, Alberta.",
  keywords: "video production, videography, Lethbridge, Alberta, Coalbanks Creative, storytelling",
  authors: [{ name: "Coalbanks Creative Inc." }],
  openGraph: {
    title: "Coalbanks Creative | Professional Video Production",
    description: "Expert videography and compelling narratives for your brand or project",
    url: "https://coalbanks.ca",
    siteName: "Coalbanks Creative",
    images: [
      {
        url: "/images/og-image.jpg", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Coalbanks Creative Video Production",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coalbanks Creative | Professional Video Production",
    description: "Expert videography and compelling narratives for your brand or project",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingNav
          navItems={[
            { name: "Home", link: "/" },
            { name: "About Us", link: "/about" },
            { name: "Services", link: "/services" },
            { name: "Products", link: "/products" },
            { name: "Contact", link: "/contact" },
          ]}
        />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
