import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tridav.africa"),
  title: {
    default: "Tridav — Digital Transformation & ERP Partner for Africa",
    template: "%s — Tridav",
  },
  description:
    "Tridav helps African businesses and institutions modernize with digital transformation, IT consultancy, ERP implementation, and custom software built in-house.",
  openGraph: {
    type: "website",
    siteName: "Tridav",
    url: "https://tridav.africa",
    title: "Tridav — Digital Transformation & ERP Partner for Africa",
    description:
      "Digital transformation, IT consultancy, ERP implementation, and custom software — engineered in-house for African businesses and institutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tridav — Digital Transformation & ERP Partner for Africa",
    description:
      "Digital transformation, IT consultancy, ERP implementation, and custom software — engineered in-house for African businesses and institutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
