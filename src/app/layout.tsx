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
  title: "Bitcoin Diagrams",
  description: "Visual guides to understand Bitcoin. Clear, educational infographics explaining how Bitcoin works, wallets, transactions, and economics.",
  keywords: ["Bitcoin", "cryptocurrency", "infographics", "education", "blockchain", "wallet", "transactions"],
  openGraph: {
    title: "Bitcoin Diagrams",
    description: "Visual guides to understand Bitcoin. Clear, educational infographics explaining how Bitcoin works.",
    type: "website",
    locale: "en_US",
    siteName: "Bitcoin Diagrams",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Diagrams",
    description: "Visual guides to understand Bitcoin.",
  },
  appleWebApp: {
    title: 'Bitcoin Diagrams',
    statusBarStyle: 'black-translucent',
  },
  icons: {
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#F7931A',
      },
    ],
  },
  other: {
    'msapplication-TileColor': '#F7931A',
  },
  manifest: '/manifest.webmanifest',
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
