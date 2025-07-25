import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/modules/Header";
import Footer from "@/components/modules/Footer";
import RootInitializer from "@/components/providers/RootInitializer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{minHeight: "100dvh", display: "flex", flexDirection: "column"}}>
        <RootInitializer />
        <Header />
        <main style={{flex: 1}}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
