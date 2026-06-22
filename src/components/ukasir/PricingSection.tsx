import React from "react";
import Link from "next/link";
import { Star, Lightbulb, Gift, Check, X } from "lucide-react";
import { defaultPricingData, PricingData } from "./defaultData";

export default function PricingSection({ data = defaultPricingData, isEditor = false }: { data?: Partial<PricingData>, isEditor?: boolean }) {
  const content = { ...defaultPricingData, ...data };
  const editorClass = isEditor ? " hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed hover:cursor-pointer hover:bg-blue-50/50 rounded-lg p-1 -m-1 transition-all" : "";
  const editorClassDark = isEditor ? " hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed hover:cursor-pointer hover:bg-white/10 rounded-lg p-1 -m-1 transition-all" : "";
  
  const clickHandler = (fieldName: string) => isEditor ? (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'SCROLL_TO_FIELD', fieldName, sectionId: 'pricing' }, '*');
    }
  } : undefined;

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 overflow-hidden relative" id="harga">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
             <h2 onClick={clickHandler('badge')} className={`text-sm font-bold leading-7 text-blue-600 uppercase tracking-widest mb-3 ${editorClass}`}>{content.badge}</h2>
             <p onClick={clickHandler('headline')} className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 font-red-hat-display inline-block leading-tight ${editorClass}`}>
                {content.headline}
             </p>
             <div onClick={clickHandler('description')} className={`mt-6 text-lg text-gray-600 [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:ml-5 [&_ol]:ml-5 ${editorClass}`} dangerouslySetInnerHTML={{ __html: content.description }} />
          </div>

          <div className="rounded-2xl sm:rounded-[3rem] bg-[#061734] px-5 py-10 sm:p-16 lg:p-20 border border-gray-800 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-center">
             <div className="relative z-10 lg:w-1/2">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-xs font-bold text-blue-300 uppercase tracking-wider mb-8">
                   uKasir Basic (Lifetime)
                </div>
                <div onClick={clickHandler('price')} className={`flex items-end gap-1.5 sm:gap-2 text-white mb-4 ${editorClassDark}`}>
                   <span className="text-xl sm:text-2xl font-bold text-white/70 pb-1.5 sm:pb-2">Rp</span>
                   <span className="text-5xl sm:text-6xl font-black font-red-hat-display leading-none">{content.price}</span>
                   <span className="text-sm sm:text-base text-white/50 pb-1.5 sm:pb-2">/ device</span>
                </div>
                <p className="text-lg text-white/70 mb-8">
                  Satu kali bayar, pakai selamanya. Tidak ada perpanjangan.
                </p>
                
                <div onClick={clickHandler('savingsText')} className={`bg-blue-600/20 border border-blue-500/30 rounded-xl p-4 text-sm text-blue-100 mb-10 flex items-start gap-3 ${editorClassDark}`}>
                   <span className="text-blue-300 flex-shrink-0 mt-0.5"><Lightbulb className="w-5 h-5" /></span>
                   <p>{content.savingsText}</p>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4">
                    <Link href="/buy" className="ukasir-btn-glow rounded-xl sm:rounded-2xl bg-blue-600 py-3.5 sm:py-4 text-center text-sm sm:text-base font-bold text-white shadow-xl hover:bg-blue-500 transition-all">
                      Beli Sekarang (Rp {content.price})
                    </Link>
                    <Link href="/trial" className="rounded-xl sm:rounded-2xl border border-white/20 py-3.5 sm:py-4 text-center text-xs sm:text-sm font-bold text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                      Coba Trial 7 Hari Gratis Dulu
                    </Link>
                </div>
             </div>
             
             <div onClick={clickHandler('features')} className={`lg:w-1/2 relative z-10 ${isEditor ? 'hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed hover:cursor-pointer hover:bg-white/5 p-4 rounded-3xl transition-all' : ''}`}>
                <ul className="ukasir-feature-list space-y-3 sm:space-y-4">
                   {content.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/80 text-sm border-b border-white/5 pb-3 sm:pb-4 last:border-0 last:pb-0">
                         <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">✓</div>
                         {item}
                      </li>
                   ))}
                </ul>
             </div>

             {/* Pattern Background */}
             <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.25)_0%,transparent_70%)] pointer-events-none"></div>
          </div>

          {/* COMPARISON TABLE */}
          <div className="mt-24">
              <div className="text-center mb-12">
                 <h3 className="text-2xl font-bold text-gray-900 font-red-hat-display">uKasir vs Kompetitor</h3>
                 <p className="text-gray-500 mt-2">Fakta objektif. Pilih yang terbaik untuk usaha Anda.</p>
              </div>
              {/* Mobile scroll hint */}
              <p className="sm:hidden text-xs text-gray-400 text-center mb-3">← Geser untuk melihat perbandingan →</p>
              <div className="ukasir-table-wrap bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
                 <div className="overflow-x-auto scroll-smooth">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                       <thead>
                          <tr className="bg-[#061734] text-white">
                             <th className="px-6 py-5 font-bold font-red-hat-display">Fitur</th>
                             <th className="px-6 py-5 font-bold font-red-hat-display bg-blue-600 relative">
                                uKasir
                                <span className="absolute top-0 right-4 bg-white text-blue-600 text-[10px] font-black px-2 py-0.5 rounded-b-md flex items-center gap-1">
                                  <img src="/icon.svg" className="w-3 h-3" alt="uKasir" /> TERBAIK
                                </span>
                             </th>
                             <th className="px-6 py-5 font-bold font-red-hat-display text-white/70">Kasir Offline Lain</th>
                             <th className="px-6 py-5 font-bold font-red-hat-display text-white/70">Kasir Langganan</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-gray-100">
                          {[
                            {f: "Model Harga", u: `Rp ${content.price} sekali beli`, k: "Rp 99K–250K sekali beli", l: "Rp 55K–200K/bulan"},
                            {f: "Full Offline", u: <Check className="text-emerald-500 w-5 h-5"/>, k: <Check className="text-emerald-500 w-5 h-5"/>, l: <X className="text-red-500 w-5 h-5"/>},
                            {f: "Semua Fitur 1 Paket", u: <Check className="text-emerald-500 w-5 h-5"/>, k: <span className="text-red-500 font-medium text-xs">✗ Beda paket</span>, l: <span className="text-orange-500 font-medium text-xs">~ Tergantung tier</span>},
                            {f: "Laporan Arus Kas", u: <Check className="text-emerald-500 w-5 h-5"/>, k: <span className="text-orange-500 font-medium text-xs">~ Terbatas</span>, l: <Check className="text-emerald-500 w-5 h-5"/>},
                            {f: "Multi-User Kasir", u: <Check className="text-emerald-500 w-5 h-5"/>, k: <span className="text-orange-500 font-medium text-xs">~ Terbatas</span>, l: <Check className="text-emerald-500 w-5 h-5"/>},
                            {f: "Manajemen Pelanggan", u: <Check className="text-emerald-500 w-5 h-5"/>, k: <X className="text-red-500 w-5 h-5"/>, l: <Check className="text-emerald-500 w-5 h-5"/>},
                            {f: "Support Lifetime", u: "✓ via WA", k: <span className="text-orange-500 font-medium text-xs">~ Terbatas</span>, l: <span className="text-orange-500 font-medium text-xs">~ Selama langganan</span>},
                            {f: "Biaya Tahun Kedua", u: <strong className="text-emerald-600">Rp 0</strong>, k: <strong className="text-emerald-600">Rp 0</strong>, l: <strong className="text-red-600">Rp 660K–2.4 Juta</strong>},
                          ].map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                               <td className="px-6 py-4 font-bold text-gray-900">{row.f}</td>
                               <td className="px-6 py-4 font-bold text-blue-900 bg-blue-50/30">{row.u}</td>
                               <td className="px-6 py-4 text-gray-600">{row.k}</td>
                               <td className="px-6 py-4 text-gray-600">{row.l}</td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
          </div>
       </div>
    </section>
  );
}
