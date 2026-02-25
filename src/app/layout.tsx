import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://loftydijital.com"),
  title: {
    default: "Lofty Dijital | Markaya Değer, Dijitale Zarafet Katıyoruz",
    template: "%s | Lofty Dijital"
  },
  description: "Minimalist, lüks ve modern dijital çözümlerle markanızı geleceğe taşıyın. Stratejik web tasarım, yazılım ve sosyal medya yönetimi.",
  openGraph: {
    title: "Lofty Dijital | Dijital Ajans",
    description: "Markaya değer, dijitale zarafet katıyoruz. Minimalist, lüks ve modern dijital çözümler.",
    url: "https://loftydijital.com",
    siteName: "Lofty Dijital",
    images: [
      {
        url: "/logo.png", // Daha geniş ve markayı temsil eden bir OG görseli (og-image.jpg) eklenmesi önerilir
        width: 1200,
        height: 630,
        alt: "Lofty Dijital Banner",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lofty Dijital | Dijital Ajans",
    description: "Markaya değer, dijitale zarafet katıyoruz. Minimalist, lüks ve modern dijital çözümler.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
      <body className={`${montserrat.variable} bg-background-dark text-white font-sans antialiased min-h-screen flex flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
