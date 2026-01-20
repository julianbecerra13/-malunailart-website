import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nails Studio | Professionele Nagelbehandelingen",
  description:
    "Welkom bij Nails Studio - Uw specialist voor manicure, pedicure, gellak, acryl nagels en nail art. Professionele nagelbehandelingen in een ontspannen sfeer.",
  keywords: [
    "nagelsalon",
    "manicure",
    "pedicure",
    "gellak",
    "nail art",
    "acryl nagels",
    "nagelverzorging",
  ],
  openGraph: {
    title: "Nails Studio | Professionele Nagelbehandelingen",
    description:
      "Welkom bij Nails Studio - Uw specialist voor manicure, pedicure, gellak, acryl nagels en nail art.",
    type: "website",
    locale: "nl_NL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
