import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/lib/theme";
import { Header, Footer } from "@/components/layout";
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
  title: "BTCDiagrams - Educational Bitcoin Infographics",
  description: "Visual guides to understand Bitcoin. Clear, educational infographics explaining how Bitcoin works, wallets, transactions, and economics.",
  keywords: ["Bitcoin", "cryptocurrency", "infographics", "education", "blockchain", "wallet", "transactions"],
  openGraph: {
    title: "BTCDiagrams - Educational Bitcoin Infographics",
    description: "Visual guides to understand Bitcoin. Clear, educational infographics explaining how Bitcoin works.",
    type: "website",
    locale: "en_US",
    siteName: "BTCDiagrams",
  },
  twitter: {
    card: "summary_large_image",
    title: "BTCDiagrams - Educational Bitcoin Infographics",
    description: "Visual guides to understand Bitcoin.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
