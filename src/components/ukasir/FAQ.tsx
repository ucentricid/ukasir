"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQData {
  badge: string;
  headline: string;
  items: FAQItem[];
}

export const defaultFAQData: FAQData = {
  badge: "FAQ",
  headline: "Pertanyaan yang Sering Ditanya",
  items: [
    {
      q: "Apakah uKasir benar-benar bisa dipakai tanpa internet?",
      a: "Ya, 100%. uKasir beroperasi full offline setelah aktivasi awal. Aktivasi pertama memerlukan internet sekali saja untuk memvalidasi token. Setelah itu, seluruh operasional — transaksi, laporan, stok — berjalan tanpa internet."
    },
    {
      q: "Bagaimana cara mendapatkan token setelah pembayaran?",
      a: "Setelah pembayaran terkonfirmasi, token aktivasi akan dikirim otomatis ke email dan WhatsApp kamu dalam waktu maksimal 5 menit. Token bersifat unik — 1 token untuk 1 device."
    },
    {
      q: "Apakah ada biaya tambahan setelah membeli?",
      a: "Tidak ada. Rp 149.000 adalah satu-satunya biaya yang akan kamu bayar. Tidak ada biaya perpanjangan, biaya update, biaya support, atau biaya fitur tambahan. Semua update fitur ke depan termasuk gratis."
    },
    {
      q: "HP saya masih lama, apakah uKasir bisa jalan?",
      a: "uKasir dirancang ringan dan bisa berjalan di HP Android maupun iOS lama. Spesifikasi minimum: Android 6.0 ke atas atau iOS 12 ke atas dengan RAM 2GB. Tidak perlu beli HP baru."
    },
    {
      q: "Bagaimana kalau saya ganti HP? Apakah token bisa dipindah?",
      a: "1 token berlaku untuk 1 device. Jika ganti HP, kamu perlu membeli token baru dengan harga yang sama (Rp 149.000). Untuk backup data, kamu bisa export laporan ke PDF/Excel kapan saja sebagai arsip."
    },
    {
      q: "Printer apa yang kompatibel dengan uKasir?",
      a: "uKasir mendukung printer thermal yang terkoneksi via Bluetooth maupun USB. Merk yang umum digunakan: Epson, Xprinter, iDPRT, dan Bluetooth thermal printer standar 58mm/80mm. Daftar lengkap printer kompatibel tersedia di halaman support kami."
    }
  ]
};

export default function FAQ({ data = defaultFAQData, isEditor = false }: { data?: Partial<FAQData>, isEditor?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const content = { ...defaultFAQData, ...data };
  const editorClass = isEditor ? " hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed hover:cursor-pointer hover:bg-blue-50/50 rounded-lg p-1 -m-1 transition-all" : "";
  const clickHandler = (fieldName: string) => isEditor ? (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'SCROLL_TO_FIELD', fieldName, sectionId: 'faq' }, '*');
    }
  } : undefined;

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32" id="faq">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-8">
             <h2 onClick={clickHandler('badge')} className={`text-sm font-bold leading-7 text-blue-600 uppercase tracking-widest mb-3 ${editorClass}`}>{content.badge}</h2>
             <p onClick={clickHandler('headline')} className={`text-3xl font-extrabold tracking-tight text-gray-900 font-red-hat-display inline-block ${editorClass}`}>
                {content.headline}
             </p>
          </div>
          <div onClick={clickHandler('items')} className={`max-w-3xl mx-auto mt-12 space-y-4 ${isEditor ? 'hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed hover:cursor-pointer hover:bg-blue-50/50 p-2 rounded-3xl transition-all' : ''}`}>
            {content.items.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  aria-expanded={openIndex === idx}
                >
                  <span className="font-semibold text-gray-900 font-red-hat-display text-lg pr-8">
                    {faq.q}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === idx ? 'bg-blue-100 text-blue-600' : 'bg-gray-50 text-gray-400'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
       </div>
    </section>
  );
}
