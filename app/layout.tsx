import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "AAAAS | Asian American Academy of Arts and Sciences",
  description: "The premier honoring society, leadership nexus, and public leadership platform for Asian Americans.",
  keywords: ["Asian American Academy", "Asian American leadership", "Top Asian American Honoring Society", "Summer Academy", "Congressional Fellows"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-text-main">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
