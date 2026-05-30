import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, X, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Harga uKasir | Investasi Sekali Seumur Hidup',
  description: 'Tidak ada biaya langganan bulanan. Cukup bayar Rp 149.000 sekali untuk mendapatkan lisensi uKasir seumur hidup dengan semua fitur kasir offline.',
  keywords: ['harga ukasir', 'aplikasi kasir sekali bayar', 'kasir lifetime', 'harga pos system', 'beli ukasir'],
  alternates: {
    canonical: '/harga',
  },
  openGraph: {
    title: 'Harga uKasir | Investasi Sekali Seumur Hidup',
    description: 'Cukup bayar Rp 149.000 sekali untuk mendapatkan lisensi uKasir seumur hidup.',
    url: '/harga',
    images: ['/images/ukasir-og.png'],
  },
};

export default function HargaPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Link href="/#harga" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Kembali
        </Link>
        
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h2 className="text-sm font-bold leading-7 text-blue-600 uppercase tracking-widest mb-3">Harga Transparan</h2>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl font-red-hat-display mb-6">
            Investasi Sekali. Tanpa Biaya Tersembunyi.
          </h1>
          <p className="text-lg text-gray-600">
            Mengapa bayar setiap bulan jika Anda bisa memilikinya selamanya? uKasir dirancang untuk memberdayakan UMKM tanpa membebani biaya operasional rutin.
          </p>
        </div>

        <div className="rounded-[3rem] bg-[#061734] px-6 py-12 sm:p-16 lg:p-20 border border-gray-800 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-center mb-24 max-w-5xl mx-auto">
           <div className="relative z-10 lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-xs font-bold text-blue-300 uppercase tracking-wider mb-8">
                 Lisensi Seumur Hidup
              </div>
              <div className="flex items-end gap-2 text-white mb-4">
                 <span className="text-2xl font-bold text-white/70 pb-2">Rp</span>
                 <span className="text-6xl font-black font-red-hat-display leading-none">149.000</span>
                 <span className="text-base text-white/50 pb-2">/ device</span>
              </div>
              <p className="text-lg text-white/70 mb-8">
                Satu kali bayar, pakai selamanya. Tidak ada perpanjangan.
              </p>

              <div className="flex flex-col gap-4">
                  <Link href="/buy" className="ukasir-btn-glow rounded-2xl bg-blue-600 py-4 text-center text-base font-bold text-white shadow-xl hover:bg-blue-500 transition-all">
                    Beli Sekarang — Rp 149.000
                  </Link>
              </div>
           </div>
           
           <div className="lg:w-1/2 relative z-10">
              <h3 className="text-xl font-bold text-white mb-6">Yang Anda Dapatkan:</h3>
              <ul className="space-y-4">
                 {[
                    "Lisensi 1 Perangkat (Device)",
                    "Semua fitur kasir & laporan",
                    "Update fitur gratis selamanya",
                    "Bantuan Support via WhatsApp",
                    "Akses 100% Offline Tanpa Internet",
                 ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/80 text-sm border-b border-white/5 pb-4 last:border-0 last:pb-0">
                       <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">✓</div>
                       {item}
                    </li>
                 ))}
              </ul>
           </div>
        </div>

        <div className="bg-blue-50 rounded-3xl p-8 lg:p-12 text-center max-w-4xl mx-auto border border-blue-100">
           <h3 className="text-2xl font-bold text-gray-900 font-red-hat-display mb-4">Coba Dulu Sebelum Membeli</h3>
           <p className="text-gray-600 mb-6">
              Kami ingin Anda benar-benar yakin sebelum berinvestasi. Gunakan uKasir secara gratis selama 7 hari dengan akses ke seluruh fitur premium. Tanpa syarat, tanpa perlu memasukkan kartu kredit.
           </p>
           <Link href="/trial" className="font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-2">
              Mulai Trial 7 Hari Gratis Sekarang <ArrowRight className="w-4 h-4" />
           </Link>
        </div>

      </div>
    </div>
  );
}
