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
  metadataBase: new URL("https://www.malunailart.nl"),
  title: {
    default: "Malu Nail Art | Professionele Nagelstyliste",
    template: "%s | Malu Nail Art",
  },
  description:
    "Malu Nail Art - Uw specialist voor manicure, pedicure, gellak, acryl nagels en creatieve nail art. Professionele nagelbehandelingen met oog voor detail en kwaliteit. Boek nu online!",
  keywords: [
    "nagelsalon",
    "nagelstyliste",
    "manicure",
    "pedicure",
    "gellak",
    "nail art",
    "acryl nagels",
    "nagelverzorging",
    "gelnagels",
    "nagelverlenging",
    "nagelstudio",
    "malu nail art",
    "nederland",
    "nagelbehandeling",
  ],
  authors: [{ name: "Malu Nail Art" }],
  creator: "Malu Nail Art",
  publisher: "Malu Nail Art",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Malu Nail Art | Professionele Nagelstyliste",
    description:
      "Professionele nagelbehandelingen: manicure, pedicure, gellak, acryl nagels en creatieve nail art. Boek nu online!",
    url: "https://www.malunailart.nl",
    siteName: "Malu Nail Art",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary",
    title: "Malu Nail Art | Professionele Nagelstyliste",
    description:
      "Professionele nagelbehandelingen: manicure, pedicure, gellak, acryl nagels en creatieve nail art.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <meta name="theme-color" content="#e91e8c" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
