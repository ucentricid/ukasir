import React from 'react';

const Ticker = () => {
  const tickerItems = [
    { text: "⚡ Full Offline — Tanpa Internet" },
    { text: "💳 Sekali Beli Rp 149.000 — Seumur Hidup" },
    { text: "📱 Android & iOS" },
    { text: "🖨️ Support Printer Thermal Bluetooth/USB" },
    { text: "📊 Laporan Otomatis PDF & Excel" },
    { text: "👥 Multi-User Kasir dengan Hak Akses" },
    { text: "🔒 Data Tersimpan di HP Kamu" },
    { text: "🎯 Coba Trial 7 Hari Gratis" },
  ];

  return (
    <div className="bg-blue-600 py-3 overflow-hidden" aria-label="Keunggulan uKasir" role="marquee">
      <div className="flex animate-ticker w-max">
        {/* Render twice for seamless infinite scroll */}
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-8 text-sm font-medium text-white/90 whitespace-nowrap">
            {item.text}
            <span className="w-1 h-1 bg-white/40 rounded-full ml-8"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
