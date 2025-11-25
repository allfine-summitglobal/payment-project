import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Payment Project - Voucher Game & Premium Online",
    template: "%s | Payment Project"
  },
  description: "Beli voucher game, top up diamond Mobile Legends, PUBG, Free Fire, Netflix Premium, dan layanan digital lainnya dengan harga terbaik dan proses cepat.",
  keywords: ["voucher game", "top up diamond", "mobile legends", "netflix premium", "voucher online"],
  authors: [{ name: "Payment Project" }],
  openGraph: {
    title: "Payment Project - Voucher Game & Premium Online",
    description: "Platform terpercaya untuk membeli voucher game dan layanan premium digital",
    type: "website",
    locale: "id_ID",
  },
  robots: {
    index: true,
    follow: true,
  }
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
      <Header />
        {children}
      </body>
    </html>
  );
}
