// src/components/ukasir/defaultData.ts

// 0. NAVBAR
export interface NavbarLink {
  label: string;
  href: string;
}

export interface NavbarData {
  logoUrl?: string;
  links: NavbarLink[];
  trialButtonText: string;
  trialButtonHref: string;
  buyButtonText: string;
  buyButtonHref: string;
}

export const defaultNavbarData: NavbarData = {
  logoUrl: "/images/logo.svg",
  links: [
    { label: "Fitur", href: "/#fitur" },
    { label: "Cara Kerja", href: "/#cara-kerja" },
    { label: "Harga", href: "/#harga" },
    { label: "FAQ", href: "/#faq" },
    { label: "Reseller", href: "/reseller" },
  ],
  trialButtonText: "Coba Gratis",
  trialButtonHref: "/trial",
  buyButtonText: "Beli",
  buyButtonHref: "/buy",
};

// 1. HERO
export interface HeroData {
  badgeText?: string;
  headlineBlack1?: string;
  headlineBlue?: string;
  headlineBlack2?: string;
  headlineGradient?: string;
  description?: string;
  priceLabel?: string;
  priceValue?: string;
  buttonText?: string;
  userCountText?: string;
  salesBadgeText?: string;
  heroImageUrl?: string;
}

export const defaultHeroData: HeroData = {
  badgeText: "Tersedia untuk Android & iOS",
  headlineBlack1: "Kasir",
  headlineBlue: "Offline",
  headlineBlack2: "Sekali Beli.",
  headlineGradient: "Selamanya.",
  description: "Aplikasi kasir POS mobile yang benar-benar bekerja tanpa internet. Tidak ada tagihan bulanan. Tidak ada biaya tersembunyi. Cocok untuk semua jenis UMKM Indonesia.",
  priceLabel: "Harga Spesial",
  priceValue: "Rp 149.000",
  buttonText: "Beli Sekarang",
  userCountText: "500+ pemilik UMKM sudah bergabung",
  salesBadgeText: "Telah terjual 5+ hari ini",
  heroImageUrl: "/live-preview-dashboard.webp",
};

// 2. PAIN POINTS
export interface PainPointItem {
  icon: string; // e.g., 'FileX', 'Coins'
  title: string;
  desc: string;
}

export interface PainPointsData {
  badge: string;
  headline: string;
  description: string;
  points: PainPointItem[];
}

export const defaultPainPointsData: PainPointsData = {
  badge: "Masalah Yang Kami Selesaikan",
  headline: "Kenapa Kasir Manual & Berlangganan Sudah Tidak Relevan?",
  description: "Jutaan UMKM Indonesia masih menghadapi masalah-masalah ini setiap hari.",
  points: [
    { icon: "FileX", title: "Pencatatan Manual Rentan Error", desc: "Salah hitung, nota hilang, dan stok kacau adalah masalah klasik yang menggerus keuntungan tanpa disadari." },
    { icon: "Coins", title: "Biaya Langganan Menggerus Laba", desc: "Kasir berlangganan Rp 55K-200K/bulan. Dalam setahun itu Rp 660K-2.4 juta yang keluar sia-sia." },
    { icon: "WifiOff", title: "Ketergantungan Internet", desc: "Sinyal lemah atau mati sama dengan kasir mati. Di banyak area Indonesia, koneksi masih jadi masalah nyata." },
    { icon: "AlertCircle", title: "Aplikasi Terlalu Rumit", desc: "Fitur berlapis-lapis yang tidak dibutuhkan membuat karyawan bingung dan butuh training lama." },
    { icon: "LineChart", title: "Tidak Ada Laporan Real-Time", desc: "Pemilik usaha tidak tahu laba/rugi, stok kritis, atau performa kasir. Semuanya hanya ada di kepala saja." },
    { icon: "ShieldAlert", title: "Keamanan Data Diragukan", desc: "Data di cloud pihak ketiga berarti ketergantungan layanan. Kalau provider tutup, data ikut hilang." }
  ]
};

// 3. FEATURES
export interface FeatureBentoItem {
  icon: string;
  title: string;
  desc: string;
  tag: string;
  isLarge?: boolean;
}

export interface FeatureSmallItem {
  icon: string;
  title: string;
  desc: string;
}

export interface FeaturesData {
  badge: string;
  headline: string;
  description: string;
  bentoItems: FeatureBentoItem[];
  smallItems: FeatureSmallItem[];
  ctaText: string;
}

export const defaultFeaturesData: FeaturesData = {
  badge: "Fitur Lengkap",
  headline: "Semua Yang Dibutuhkan UMKM,<br/>Dalam Satu Aplikasi",
  description: "Tidak perlu beli modul tambahan. Tidak perlu upgrade paket. Semua fitur sudah termasuk dari hari pertama.",
  bentoItems: [
    { icon: "Zap", title: "POS Cepat & Mudah", desc: "2–3 tap untuk menyelesaikan transaksi. Input manual atau scan barcode/QR. Antrian tidak perlu menunggu lama.", tag: "Core Feature" },
    { icon: "TrendingUp", title: "Laporan Lengkap<br/>Export PDF & Excel", desc: "Laporan penjualan harian/mingguan/bulanan, laporan arus kas, laba rugi, metode pembayaran — semua bisa di-export dan di-print langsung dari HP.", tag: "Laporan", isLarge: true },
    { icon: "Package", title: "Produk & Varian", desc: "Kelola produk dengan varian lengkap seperti ukuran, rasa, dan add-on. Harga jual & modal per varian. Barcode per produk.", tag: "Produk" },
    { icon: "HardDrive", title: "Manajemen Stok Pintar", desc: "Tracking stok masuk/keluar otomatis. Alert stok minimum agar tidak pernah kehabisan barang saat ramai.", tag: "Inventori" },
    { icon: "Users", title: "Multi-User & Hak Akses", desc: "Buat akun kasir karyawan dengan PIN berbeda. Owner punya kontrol penuh, kasir hanya bisa transaksi.", tag: "Tim" },
  ],
  smallItems: [
    { icon: "Receipt", title: "Diskon & Pajak", desc: "Atur diskon nominal/persen, PPN, dan service charge fleksibel." },
    { icon: "Printer", title: "Printer Thermal", desc: "Koneksi Bluetooth/USB. Cetak struk rapi dari HP." },
    { icon: "RotateCcw", title: "Refund & Hold", desc: "Proses refund via PIN atau tahan transaksi customer." },
    { icon: "UserSquare", title: "Data Pelanggan", desc: "Simpan info pelanggan untuk program loyalitas." },
  ],
  ctaText: "Lihat Detail Seluruh Fitur"
};

// 4. HOW IT WORKS
export interface HowItWorksItem {
  num: string;
  title: string;
  desc: string;
}

export interface HowItWorksData {
  badge: string;
  headline: string;
  description: string;
  steps: HowItWorksItem[];
}

export const defaultHowItWorksData: HowItWorksData = {
  badge: "Cara Kerja",
  headline: "Mulai Berjualan dalam 4 Langkah",
  description: "Tidak perlu setup rumit. Tidak perlu teknisi. Siapapun bisa langsung pakai.",
  steps: [
    { num: "1", title: "Beli & Dapatkan Token", desc: "Pembayaran sekali. Token aktivasi dikirim ke email & WA dalam hitungan menit." },
    { num: "2", title: "Download & Aktivasi", desc: "Download uKasir. Masukkan token — aktivasi hanya butuh internet sekali ini saja." },
    { num: "3", title: "Setup Produk", desc: "Isi nama usaha, tambahkan produk dengan harga dan stok. Selesai dalam 10 menit." },
    { num: "4", title: "Mulai Jualan!", desc: "Catat transaksi, print struk, pantau laporan — semua full offline di HP." },
  ]
};

// 5. TARGET SEGMENTS
export interface SegmentItem {
  icon: string;
  title: string;
  desc: string;
}

export interface TargetSegmentsData {
  headline: string;
  description: string;
  segments: SegmentItem[];
}

export const defaultTargetSegmentsData: TargetSegmentsData = {
  headline: "Cocok Untuk Semua Jenis Usaha",
  description: "Satu aplikasi, semua jenis bisnis. Tidak perlu pilih versi khusus.",
  segments: [
    { icon: "Store", title: "F&B", desc: "Warung, kafe, kedai" },
    { icon: "Scissors", title: "Salon", desc: "Kecantikan, barber" },
    { icon: "ShoppingCart", title: "Retail", desc: "Sembako, minimarket" },
    { icon: "Wrench", title: "Bengkel", desc: "Motor, mobil" },
    { icon: "Shirt", title: "Laundry", desc: "Kiloan, premium" },
  ]
};

// 6. PRICING
export interface PricingData {
  badge: string;
  headline: string;
  description: string;
  price: string;
  savingsText: string;
  features: string[];
}

export const defaultPricingData: PricingData = {
  badge: "Harga Transparan",
  headline: "Satu Harga. Semua Fitur. Selamanya.",
  description: "Tidak ada tier, tidak ada upsell, tidak ada kejutan. Bayar sekali, nikmati selamanya.",
  price: "149.000",
  savingsText: "Hemat Rp 660.000 dibanding kasir langganan Rp 55K/bulan selama 1 tahun.",
  features: [
    "Kasir POS (manual + scan barcode/QR)",
    "Manajemen produk & varian unlimited",
    "Manajemen stok + alert minimum stok",
    "Laporan harian/mingguan/bulanan",
    "Export PDF & Excel",
    "Multi-user kasir + hak akses PIN",
    "Printer thermal Bluetooth/USB",
    "Diskon, pajak, service charge",
    "Manajemen pelanggan",
    "Laporan arus kas & laba rugi",
    "Support WA lifetime"
  ]
};

// 7. TESTIMONIALS
export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
}

export interface TestimonialsData {
  badge: string;
  headline: string;
  items: TestimonialItem[];
}

export const defaultTestimonialsData: TestimonialsData = {
  badge: "Testimoni",
  headline: "Kata Mereka yang Sudah Pakai uKasir",
  items: [
    { name: "Budi Santoso", role: "Pemilik Warung Makan", quote: "Warung makan saya sekarang jauh lebih rapi. Stok tidak lagi sering meleset, dan laporan harian bisa langsung saya lihat sambil istirahat. Harganya sangat worth it!" },
    { name: "Sari Rahayu", role: "Owner Salon Cantik", quote: "Salon saya ada di area yang sinyalnya sering jelek. Dengan uKasir, transaksi tetap lancar. Kasir karyawan saya juga langsung bisa pakai tanpa bingung." },
    { name: "Teguh Wibowo", role: "Pemilik Toko Sembako", quote: "Dulu pakai kasir langganan bayar tiap bulan, sekarang bayar sekali sudah bisa seumur hidup. Fiturnya lebih lengkap dan offline. Tidak ada alasan tidak beli!" }
  ]
};

// 8. FINAL CTA
export interface CTAData {
  headline: string;
  description: string;
  buttonText: string;
  trialText: string;
  guaranteeText: string;
}

export const defaultCTAData: CTAData = {
  headline: "Siap Tinggalkan Kasir Manual & Biaya Bulanan?",
  description: "Bergabung dengan ratusan pemilik UMKM yang sudah mengelola usaha lebih rapi dengan uKasir. Coba gratis 7 hari tanpa kartu kredit dan tanpa komitmen.",
  buttonText: "Beli Sekarang (Rp 149.000)",
  trialText: "Trial 7 Hari Gratis",
  guaranteeText: "✓ Garansi uang kembali 3 hari  ·  ✓ No credit card  ·  ✓ Support WA lifetime"
};

// 9. FOOTER
export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterColumnData {
  title: string;
  links: FooterLinkItem[];
}

export interface FooterData {
  brandName: string;
  brandTagline: string;
  copyrightText: string;
  columns: FooterColumnData[];
  contactEmail: string;
  contactWhatsapp: string;
}

export const defaultFooterData: FooterData = {
  brandName: "uKasir",
  brandTagline: "Solusi kasir offline modern untuk UMKM Indonesia. Cukup beli sekali, pakai selamanya tanpa biaya langganan.",
  copyrightText: "uKasir. Part of UCENTRIC.",
  columns: [
    {
      title: "Menu",
      links: [
        { label: "Home", href: "/" },
        { label: "Fitur", href: "/fitur" },
        { label: "Harga", href: "/harga" },
        { label: "Download", href: "/download" },
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Reseller", href: "/reseller" },
        { label: "Pusat Bantuan", href: "/support" },
        { label: "Kebijakan Privasi", href: "/privacy" },
        { label: "Syarat & Ketentuan", href: "/terms" },
      ]
    }
  ],
  contactEmail: "support@ukasir.id",
  contactWhatsapp: "+62 8xx-xxxx-xxxx",
};

