import React from 'react';
import { CreditCard, Smartphone, Printer, FileText } from 'lucide-react';

const Ticker = () => {
  const tickerItems = [
    { text: "Sekali Beli Rp 149.000 — Seumur Hidup", icon: <CreditCard className="w-4 h-4" /> },
    { text: "Android & iOS", icon: <Smartphone className="w-4 h-4" /> },
    { text: "Support Printer Thermal Bluetooth/USB", icon: <Printer className="w-4 h-4" /> },
    { text: "Laporan Otomatis PDF & Excel", icon: <FileText className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-blue-600 py-3 overflow-hidden" aria-label="Keunggulan uKasir" role="marquee">
      <div className="flex animate-ticker w-max">
        {/* Render twice for seamless infinite scroll */}
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-8 text-sm font-medium text-white/90 whitespace-nowrap">
            {item.icon}
            {item.text}
            <span className="w-1 h-1 bg-white/40 rounded-full ml-8"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
