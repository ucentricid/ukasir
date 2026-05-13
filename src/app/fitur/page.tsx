import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Package, Users, Receipt, Printer, RotateCcw, UserSquare, Zap, HardDrive, TrendingUp, LayoutDashboard } from 'lucide-react';

export const metadata = {
  title: 'Fitur Lengkap uKasir | Aplikasi Kasir Offline',
  description: 'Pelajari semua fitur uKasir secara detail. Dari POS cepat, manajemen stok, laporan keuangan lengkap, hingga multi-user kasir.',
};

export default function FiturPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Link href="/#fitur" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Kembali
        </Link>
        
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl font-red-hat-display mb-6">
            Detail Fitur uKasir
          </h1>
          <p className="text-lg text-gray-600">
            Aplikasi kasir uKasir dirancang untuk memberikan semua fitur kelas *enterprise* tanpa harus berlangganan bulanan. Berikut adalah rincian fungsionalitas yang akan Anda dapatkan.
          </p>
        </div>

        <div className="space-y-12">
          {/* Detailed Feature Blocks */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-sm flex flex-col lg:flex-row gap-12 items-center">
             <div className="lg:w-1/2">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 font-red-hat-display mb-4">Laporan & Analitik Super Lengkap</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Tidak perlu lagi merekap laporan secara manual. uKasir secara otomatis mencatat setiap transaksi dan menyajikannya dalam bentuk laporan yang mudah dibaca. Anda dapat mengekspor laporan ke format PDF dan Excel.
                </p>
                <ul className="space-y-3">
                  {['Laporan Penjualan Harian, Mingguan, Bulanan', 'Laporan Laba Rugi & Arus Kas', 'Laporan Stok Barang Keluar/Masuk', 'Laporan Metode Pembayaran'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="lg:w-1/2 bg-gray-50 rounded-2xl p-6 border border-gray-100 w-full">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-xs text-gray-500">Total Penjualan Bulan Ini</p>
                    <p className="text-2xl font-bold font-red-hat-display text-blue-600">Rp 45.200.000</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500">Laba Bersih</p>
                      <p className="text-xl font-bold font-red-hat-display text-emerald-600">Rp 12.450.000</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-emerald-100" />
                  </div>
                </div>
             </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-sm flex flex-col lg:flex-row-reverse gap-12 items-center">
             <div className="lg:w-1/2">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  <HardDrive className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 font-red-hat-display mb-4">Manajemen Stok Anti Bocor</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ketahui persis berapa sisa barang di toko Anda. uKasir akan memotong stok secara otomatis setiap ada penjualan. Dapatkan peringatan saat stok mulai menipis agar Anda bisa segera kulakan.
                </p>
                <ul className="space-y-3">
                  {['Notifikasi Stok Minimum', 'Kartu Stok (Riwayat Keluar Masuk)', 'Penyesuaian Stok (Stock Opname)', 'Multi-Varian Produk (Ukuran, Warna, dll)'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="lg:w-1/2 w-full">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {name: "Kopi Susu Literan", sisa: "5 Botol", status: "Kritis"},
                    {name: "Biji Kopi Arabica", sisa: "25 Kg", status: "Aman"},
                    {name: "Susu UHT", sisa: "2 Dus", status: "Kritis"},
                    {name: "Gula Aren", sisa: "10 Kg", status: "Aman"}
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                      <p className="font-bold text-gray-900 text-sm mb-1">{item.name}</p>
                      <div className="flex justify-between items-end">
                        <p className="text-xs text-gray-500">Sisa: <strong className="text-gray-900">{item.sisa}</strong></p>
                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${item.status === 'Kritis' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'}`}>{item.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>

        <div className="mt-16 text-center">
           <h3 className="text-2xl font-bold text-gray-900 font-red-hat-display mb-6">Siap Menggunakan Semua Fitur Ini?</h3>
           <Link href="/buy" className="ukasir-btn-glow inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-blue-700 transition-all">
             Beli Sekarang — Rp 149.000
           </Link>
        </div>
      </div>
    </div>
  );
}
