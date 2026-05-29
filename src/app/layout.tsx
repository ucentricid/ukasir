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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "uKasir - Aplikasi Kasir Offline UMKM #1 di Indonesia",
  description: "Aplikasi kasir sederhana, cepat, dan stabil untuk UMKM. Tanpa biaya bulanan, cukup beli sekali pakai selamanya. Mendukung Offline Mode & Printer Thermal.",
  keywords: ["aplikasi kasir", "pos system offline", "kasir umkm", "software kasir murah", "ukasir indonesia"],
  openGraph: {
    title: "uKasir | Solusi Kasir Offline UMKM Terbaik",
    description: "Transaksi lebih cepat, laporan otomatis, dan tidak perlu biaya bulanan.",
    images: ["/images/ukasir-og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "uKasir - Aplikasi Kasir Offline UMKM",
    description: "Beli sekali, pakai selamanya. Solusi cerdas UMKM Indonesia.",
    images: ["/images/ukasir-og.png"],
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
