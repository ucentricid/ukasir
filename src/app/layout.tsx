import type { Metadata } from "next";
import { Outfit, Red_Hat_Display } from "next/font/google";
import UkasirNavbar from "@/components/ukasir/Navbar";
import UkasirFooter from "@/components/ukasir/Footer";
import { getContentBlock } from "@/actions/content";
import { FooterData } from "@/components/ukasir/defaultData";
import "./globals.css";
import "@/styles/ukasir.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ukasir.id"),
  title: "uKasir - Aplikasi Kasir Offline UMKM #1 di Indonesia",
  description: "Aplikasi kasir sederhana, cepat, dan stabil untuk UMKM. Tanpa biaya bulanan, cukup beli sekali pakai selamanya. Mendukung Offline Mode & Printer Thermal.",
  keywords: ["aplikasi kasir", "pos system offline", "kasir umkm", "software kasir murah", "ukasir indonesia", "aplikasi kasir tanpa internet", "kasir android", "kasir iOS", "aplikasi toko"],
  applicationName: "uKasir",
  authors: [{ name: "uKasir Team", url: "https://ukasir.com" }],
  generator: "Next.js",
  publisher: "uKasir Indonesia",
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "uKasir | Solusi Kasir Offline UMKM Terbaik",
    description: "Transaksi lebih cepat, laporan otomatis, dan tidak perlu biaya bulanan. Beli sekali, pakai selamanya.",
    url: '/',
    siteName: 'uKasir',
    images: [
      {
        url: "/images/ukasir-og.png",
        width: 1200,
        height: 630,
        alt: "uKasir - Aplikasi Kasir UMKM",
      }
    ],
    locale: 'id_ID',
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "uKasir - Aplikasi Kasir Offline UMKM",
    description: "Beli sekali, pakai selamanya. Solusi cerdas UMKM Indonesia.",
    images: ["/images/ukasir-og.png"],
    creator: "@ukasir",
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footerBlock = await getContentBlock("footer");
  const footerData = footerBlock ? (footerBlock as unknown as FooterData) : undefined;

  return (
    <html lang="id" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${outfit.variable} ${redHatDisplay.variable} relative flex min-h-screen flex-col bg-slate-50 font-[family-name:var(--font-outfit)]`}>
        <UkasirNavbar />
        <main className="flex-1">
          {children}
        </main>
        <UkasirFooter data={footerData} />
      </body>
    </html>
  );
}
