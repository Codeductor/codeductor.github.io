import type { Metadata } from "next";
import { Coda, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const coda = Coda({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "codeductor.com",
  description: "Codeductor LLC — software consulting and product engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${coda.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
