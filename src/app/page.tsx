import Link from "next/link";
import { 
  CheckCircle2, ShoppingCart, Monitor, ShieldCheck, Zap, Smartphone, HardDrive, 
  LayoutDashboard, X, ArrowRight, TrendingUp, Package, Users, Receipt, Printer, 
  RotateCcw, UserSquare, Store, Scissors, Wrench, Shirt, Check, Star, WifiOff
} from "lucide-react";
import Ticker from "@/components/ukasir/Ticker";
import FAQ from "@/components/ukasir/FAQ";

export default function UkasirPage() {
  return (
    <div className="flex flex-col">
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden ukasir-mesh-gradient pt-32 pb-24 sm:pt-48 sm:pb-32 lg:pb-40">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600 ring-1 ring-inset ring-blue-600/20 mb-8 mx-auto lg:mx-0">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                Tersedia untuk Android & iOS
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl font-red-hat-display leading-[1.1]">
                Kasir <span className="text-blue-600">Offline</span>.<br/>
                Sekali Beli.<br/>
                <span className="ukasir-text-gradient">Selamanya.</span>
              </h1>
              <p className="mt-8 text-xl leading-8 text-gray-600 max-w-lg">
                Aplikasi kasir POS mobile yang benar-benar bekerja tanpa internet.
                Tidak ada tagihan bulanan. Tidak ada biaya tersembunyi.
                Cocok untuk semua jenis UMKM Indonesia.
              </p>
              
              <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm border border-gray-100">
                 <span className="text-xl">💳</span> Hanya <strong className="text-gray-900">Rp 149.000</strong> <span className="line-through text-gray-400 text-xs">/ seumur hidup</span> — 1 device, lifetime
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start">
                <Link
                  href="/buy"
                  className="w-full sm:w-auto justify-center ukasir-btn-glow rounded-2xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 flex items-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" /> Beli Sekarang — Rp 149.000
                </Link>
                <Link href="#fitur" className="w-full sm:w-auto justify-center text-base font-bold leading-6 text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-2 group border border-gray-200 sm:border-transparent rounded-2xl py-4 sm:py-0">
                  Lihat Fitur <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <div className="flex -space-x-3">
                    {['BR', 'SL', 'TK', 'MY'].map((initial, i) => (
                      <div key={i} className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-white bg-gradient-to-br from-blue-500 to-indigo-600 z-[${10-i}]`}>
                        {initial}
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-white bg-gray-900 z-0">
                      +
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 font-medium text-center sm:text-left"><strong className="text-gray-900">500+</strong> pemilik UMKM sudah bergabung</p>
              </div>
            </div>

            <div className="hidden lg:block relative lg:mt-0 w-full max-w-[280px] xl:max-w-[320px] mx-auto">
               <div className="relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                     src="/images/hero-mockup.svg" 
                     alt="uKasir Interface Mockup" 
                     className="w-full h-auto drop-shadow-2xl"
                  />
               </div>
               
               {/* Floating Badges */}
               <div className="absolute top-20 -right-12 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-4 z-20 animate-[bounce_3s_infinite]">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-2xl">📊</div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Rp 3.2 Juta</p>
                    <p className="text-xs text-gray-500">Penjualan hari ini</p>
                  </div>
               </div>

               <div className="absolute bottom-32 -left-12 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-4 z-20 animate-[bounce_4s_infinite]">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">✅</div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Offline Ready</p>
                    <p className="text-xs text-gray-500">Tanpa internet</p>
                  </div>
               </div>

               {/* Background Decorative Circles */}
               <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl z-0"></div>
               <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <Ticker />

      {/* SECTION 2 — PAIN POINTS */}
      <section className="bg-[#061734] py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(29,97,230,0.15)_0%,transparent_60%)]"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-sm font-bold leading-7 text-blue-400 uppercase tracking-widest mb-3">Masalah Yang Kami Selesaikan</h2>
            <p className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-red-hat-display">
               Kenapa Kasir Manual & Berlangganan Sudah Tidak Relevan?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Jutaan UMKM Indonesia masih menghadapi masalah-masalah ini setiap hari.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {[
                { icon: "❌", title: "Pencatatan Manual Rentan Error", desc: "Salah hitung, nota hilang, stok kacau — masalah klasik yang menggerus keuntungan tanpa disadari." },
                { icon: "💸", title: "Biaya Langganan Menggerus Laba", desc: "Kasir berlangganan Rp 55K–200K/bulan. Dalam setahun itu Rp 660K–2.4 juta yang keluar sia-sia." },
                { icon: "📶", title: "Ketergantungan Internet", desc: "Sinyal lemah atau mati = kasir mati. Di banyak area Indonesia, koneksi masih jadi masalah nyata." },
                { icon: "🤯", title: "Aplikasi Terlalu Rumit", desc: "Fitur berlapis-lapis yang tidak dibutuhkan membuat karyawan bingung dan butuh training lama." },
                { icon: "📉", title: "Tidak Ada Laporan Real-Time", desc: "Pemilik usaha tidak tahu laba/rugi, stok kritis, atau performa kasir — semua di kepala saja." },
                { icon: "🔓", title: "Keamanan Data Diragukan", desc: "Data di cloud pihak ketiga berarti ketergantungan layanan. Kalau provider tutup, data ikut hilang." }
              ].map((p, i) => (
                <div key={i} className="flex flex-col p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-blue-600/10 hover:border-blue-500/30 transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/20 flex items-center justify-center text-2xl mb-6">
                    {p.icon}
                  </div>
                  <dt className="text-lg font-bold leading-7 text-white font-red-hat-display mb-3">
                    {p.title}
                  </dt>
                  <dd className="flex flex-auto flex-col text-sm leading-6 text-gray-400">
                    <p className="flex-auto">{p.desc}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* SECTION 3 — FEATURES (BENTO GRID + LIST) */}
      <section className="bg-gray-50 py-24 sm:py-32" id="fitur">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-sm font-bold leading-7 text-emerald-600 uppercase tracking-widest mb-3">Fitur Lengkap</h2>
            <p className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-red-hat-display">
               Semua Yang Dibutuhkan UMKM,<br/>Dalam Satu Aplikasi
            </p>
            <p className="mt-6 text-lg text-gray-600">
               Tidak perlu beli modul tambahan. Tidak perlu upgrade paket. Semua fitur sudah termasuk dari hari pertama.
            </p>
          </div>
          
          <div className="ukasir-bento-grid">
            {/* Feature 1: POS Cepat */}
            <div className="rounded-3xl bg-white border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  <Zap className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-red-hat-display mb-3">POS Cepat & Mudah</h3>
                <p className="text-sm text-gray-600 mb-6 flex-1">2–3 tap untuk menyelesaikan transaksi. Input manual atau scan barcode/QR. Antrian tidak perlu menunggu lama.</p>
                <div><span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">Core Feature</span></div>
            </div>

            {/* Feature 2: Laporan Lengkap (Large) */}
            <div className="md:col-span-2 rounded-3xl bg-blue-600 p-8 sm:p-10 text-white flex flex-col sm:flex-row gap-8 overflow-hidden relative group shadow-xl">
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm">
                      <TrendingUp className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold font-red-hat-display mb-4">Laporan Lengkap<br/>Export PDF & Excel</h3>
                    <p className="text-blue-100 text-base mb-8 max-w-md">Laporan penjualan harian/mingguan/bulanan, laporan arus kas, laba rugi, metode pembayaran — semua bisa di-export dan di-print langsung dari HP.</p>
                    <div><span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">Laporan</span></div>
                </div>
                <div className="hidden sm:block w-64 bg-white rounded-2xl p-4 text-gray-900 shadow-2xl relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="text-xs font-bold text-[#061734] mb-3 border-b pb-2">📋 Laporan Arus Kas</div>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="bg-emerald-50 rounded-lg p-2">
                            <div className="text-[10px] text-gray-500">Kas Masuk</div>
                            <div className="text-sm font-bold text-emerald-600">Rp 90jt</div>
                        </div>
                        <div className="bg-red-50 rounded-lg p-2">
                            <div className="text-[10px] text-gray-500">Kas Keluar</div>
                            <div className="text-sm font-bold text-red-600">Rp 45jt</div>
                        </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                        <div className="text-[10px] text-gray-500">Arus Kas Bersih</div>
                        <div className="text-sm font-bold text-blue-600">+Rp 45.000.000 ↗</div>
                    </div>
                </div>
                {/* Background Decoration */}
                <div className="absolute -bottom-20 -right-20 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <LayoutDashboard size={400} strokeWidth={1} />
                </div>
            </div>

            {/* Feature 3: Produk */}
            <div className="rounded-3xl bg-white border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  <Package className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-red-hat-display mb-3">Produk & Varian</h3>
                <p className="text-sm text-gray-600 mb-6 flex-1">Kelola produk dengan varian lengkap — ukuran, rasa, add-on. Harga jual & modal per varian. Barcode per produk.</p>
                <div><span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">Produk</span></div>
            </div>

            {/* Feature 4: Stok Pintar */}
            <div className="rounded-3xl bg-white border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  <HardDrive className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-red-hat-display mb-3">Manajemen Stok Pintar</h3>
                <p className="text-sm text-gray-600 mb-6 flex-1">Tracking stok masuk/keluar otomatis. Alert stok minimum agar tidak pernah kehabisan barang saat ramai.</p>
                <div><span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">Inventori</span></div>
            </div>

            {/* Feature 5: Multi User */}
            <div className="rounded-3xl bg-white border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-red-hat-display mb-3">Multi-User & Hak Akses</h3>
                <p className="text-sm text-gray-600 mb-6 flex-1">Buat akun kasir karyawan dengan PIN berbeda. Owner punya kontrol penuh, kasir hanya bisa transaksi.</p>
                <div><span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">Tim</span></div>
            </div>
          </div>

          {/* More Features Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { icon: <Receipt className="w-6 h-6 text-gray-700"/>, title: "Diskon & Pajak", desc: "Atur diskon nominal/persen, PPN, dan service charge fleksibel." },
               { icon: <Printer className="w-6 h-6 text-gray-700"/>, title: "Printer Thermal", desc: "Koneksi Bluetooth/USB. Cetak struk rapi dari HP." },
               { icon: <RotateCcw className="w-6 h-6 text-gray-700"/>, title: "Refund & Hold", desc: "Proses refund via PIN atau tahan transaksi customer." },
               { icon: <UserSquare className="w-6 h-6 text-gray-700"/>, title: "Data Pelanggan", desc: "Simpan info pelanggan untuk program loyalitas." },
             ].map((f, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 flex gap-4 hover:border-blue-300 transition-colors">
                   <div className="mt-1">{f.icon}</div>
                   <div>
                     <h4 className="font-bold text-gray-900 mb-1">{f.title}</h4>
                     <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                   </div>
                </div>
             ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/fitur" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors">
              Lihat Detail Seluruh Fitur <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 4 — HOW IT WORKS */}
      <section className="bg-white py-24 sm:py-32" id="cara-kerja">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
           <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-sm font-bold leading-7 text-blue-600 uppercase tracking-widest mb-3">Cara Kerja</h2>
            <p className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-red-hat-display">
               Mulai Berjualan dalam 4 Langkah
            </p>
            <p className="mt-6 text-lg text-gray-600">
               Tidak perlu setup rumit. Tidak perlu teknisi. Siapapun bisa langsung pakai.
            </p>
          </div>

          <div className="relative mt-20">
             {/* Connecting Line */}
             <div className="hidden lg:block absolute top-12 left-24 right-24 h-0.5 bg-gradient-to-r from-blue-100 via-blue-400 to-blue-100"></div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                {[
                  { num: "1", title: "Beli & Dapatkan Token", desc: "Pembayaran sekali. Token aktivasi dikirim ke email & WA dalam hitungan menit." },
                  { num: "2", title: "Download & Aktivasi", desc: "Download uKasir. Masukkan token — aktivasi hanya butuh internet sekali ini saja." },
                  { num: "3", title: "Setup Produk", desc: "Isi nama usaha, tambahkan produk dengan harga dan stok. Selesai dalam 10 menit." },
                  { num: "4", title: "Mulai Jualan!", desc: "Catat transaksi, print struk, pantau laporan — semua full offline di HP." },
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 rounded-full bg-white border-8 border-gray-50 flex items-center justify-center mb-6 shadow-xl shadow-blue-100 relative group">
                          <div className="absolute inset-0 rounded-full bg-blue-600 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center z-0"></div>
                          <span className="font-red-hat-display font-black text-4xl text-blue-600 group-hover:text-white relative z-10 transition-colors">{step.num}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — TARGET SEGMENTS */}
      <section className="bg-gray-50 py-20">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-2xl font-extrabold text-gray-900 font-red-hat-display">Cocok Untuk Semua Jenis Usaha</h2>
               <p className="mt-2 text-gray-600">Satu aplikasi, semua jenis bisnis. Tidak perlu pilih versi khusus.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { icon: <Store className="w-8 h-8 text-orange-500"/>, title: "F&B", desc: "Warung, kafe, kedai" },
                  { icon: <Scissors className="w-8 h-8 text-pink-500"/>, title: "Salon", desc: "Kecantikan, barber" },
                  { icon: <ShoppingCart className="w-8 h-8 text-blue-500"/>, title: "Retail", desc: "Sembako, minimarket" },
                  { icon: <Wrench className="w-8 h-8 text-slate-600"/>, title: "Bengkel", desc: "Motor, mobil" },
                  { icon: <Shirt className="w-8 h-8 text-cyan-500"/>, title: "Laundry", desc: "Kiloan, premium" },
                ].map((seg, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all group">
                     <div className="w-16 h-16 mx-auto bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                        {seg.icon}
                     </div>
                     <h3 className="font-bold text-gray-900 font-red-hat-display mb-1">{seg.title}</h3>
                     <p className="text-xs text-gray-500">{seg.desc}</p>
                  </div>
                ))}
            </div>
         </div>
      </section>

      {/* SECTION 6 — PRICING & COMPARISON */}
      <section className="bg-white py-24 sm:py-32 overflow-hidden relative" id="harga">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-sm font-bold leading-7 text-blue-600 uppercase tracking-widest mb-3">Harga Transparan</h2>
               <p className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-red-hat-display">
                  Satu Harga. Semua Fitur. Selamanya.
               </p>
               <p className="mt-6 text-lg text-gray-600">
                  Tidak ada tier, tidak ada upsell, tidak ada kejutan. Bayar sekali, nikmati selamanya.
               </p>
            </div>

            <div className="rounded-[3rem] bg-[#061734] px-6 py-12 sm:p-16 lg:p-20 border border-gray-800 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-center">
               <div className="relative z-10 lg:w-1/2">
                  <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-xs font-bold text-blue-300 uppercase tracking-wider mb-8">
                     ⭐ uKasir Basic — Lifetime
                  </div>
                  <div className="flex items-end gap-2 text-white mb-4">
                     <span className="text-2xl font-bold text-white/70 pb-2">Rp</span>
                     <span className="text-6xl font-black font-red-hat-display leading-none">149.000</span>
                     <span className="text-base text-white/50 pb-2">/ device</span>
                  </div>
                  <p className="text-lg text-white/70 mb-8">
                    Satu kali bayar, pakai selamanya. Tidak ada perpanjangan.
                  </p>
                  
                  <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-4 text-sm text-blue-100 mb-10 flex items-start gap-3">
                     <span className="text-xl">💡</span>
                     <p>Hemat <strong className="text-white">Rp 660.000</strong> dibanding kasir langganan Rp 55K/bulan selama 1 tahun.</p>
                  </div>

                  <div className="flex flex-col gap-4">
                      <Link href="/buy" className="ukasir-btn-glow rounded-2xl bg-blue-600 py-4 text-center text-base font-bold text-white shadow-xl hover:bg-blue-500 transition-all">
                        Beli Sekarang — Rp 149.000
                      </Link>
                      <Link href="/trial" className="rounded-2xl border border-white/20 py-4 text-center text-sm font-bold text-white hover:bg-white/5 transition-all">
                        🎯 Coba Trial 7 Hari Gratis Dulu
                      </Link>
                  </div>
               </div>
               
               <div className="lg:w-1/2 relative z-10">
                  <ul className="space-y-4">
                     {[
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
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-white/80 text-sm border-b border-white/5 pb-4 last:border-0 last:pb-0">
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
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
                   <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm whitespace-nowrap">
                         <thead>
                            <tr className="bg-[#061734] text-white">
                               <th className="px-6 py-5 font-bold font-red-hat-display">Fitur</th>
                               <th className="px-6 py-5 font-bold font-red-hat-display bg-blue-600 relative">
                                  uKasir
                                  <span className="absolute top-0 right-4 bg-white text-blue-600 text-[10px] font-black px-2 py-0.5 rounded-b-md">★ TERBAIK</span>
                               </th>
                               <th className="px-6 py-5 font-bold font-red-hat-display text-white/70">Kasmini</th>
                               <th className="px-6 py-5 font-bold font-red-hat-display text-white/70">Kasir Langganan</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-gray-100">
                            {[
                              {f: "Model Harga", u: "Rp 149.000 sekali beli", k: "Rp 99K–250K sekali beli", l: "Rp 55K–200K/bulan"},
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
                
                <div className="mt-8 text-center">
                  <Link href="/harga" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors">
                    Lihat Kebijakan Harga Selengkapnya <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
            </div>
         </div>
      </section>

      {/* SECTION 7 — TESTIMONIALS */}
      <section className="bg-gray-50 py-24">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-sm font-bold leading-7 text-blue-600 uppercase tracking-widest mb-3">Testimoni</h2>
               <p className="text-3xl font-extrabold tracking-tight text-gray-900 font-red-hat-display">
                  Kata Mereka yang Sudah Pakai uKasir
               </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { name: "Budi Santoso", role: "Pemilik Warung Makan", quote: "Warung makan saya sekarang jauh lebih rapi. Stok tidak lagi sering meleset, dan laporan harian bisa langsung saya lihat sambil istirahat. Harganya sangat worth it!" },
                 { name: "Sari Rahayu", role: "Owner Salon Cantik", quote: "Salon saya ada di area yang sinyalnya sering jelek. Dengan uKasir, transaksi tetap lancar. Kasir karyawan saya juga langsung bisa pakai tanpa bingung." },
                 { name: "Teguh Wibowo", role: "Pemilik Toko Sembako", quote: "Dulu pakai kasir langganan bayar tiap bulan, sekarang bayar sekali sudah bisa seumur hidup. Fiturnya lebih lengkap dan offline. Tidak ada alasan tidak beli!" }
               ].map((testi, i) => (
                 <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all">
                    <div className="flex text-amber-400 mb-6">
                      {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                    </div>
                    <p className="text-gray-600 italic mb-8 flex-1 line-clamp-4">"{testi.quote}"</p>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-[#061734] flex items-center justify-center text-white font-bold font-red-hat-display">
                          {testi.name.split(' ').map(n => n[0]).join('')}
                       </div>
                       <div>
                          <h4 className="font-bold text-gray-900">{testi.name}</h4>
                          <p className="text-xs text-gray-500">{testi.role}</p>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 8 — FAQ */}
      <section className="bg-white py-24 sm:py-32" id="faq">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-8">
               <h2 className="text-sm font-bold leading-7 text-blue-600 uppercase tracking-widest mb-3">FAQ</h2>
               <p className="text-3xl font-extrabold tracking-tight text-gray-900 font-red-hat-display">
                  Pertanyaan yang Sering Ditanya
               </p>
            </div>
            <FAQ />
         </div>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className="bg-[#061734] py-24 sm:py-32 relative overflow-hidden text-center">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(29,97,230,0.2)_0%,transparent_55%),radial-gradient(ellipse_at_70%_50%,rgba(29,97,230,0.15)_0%,transparent_55%)] pointer-events-none"></div>
         <div className="mx-auto max-w-3xl px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-red-hat-display mb-6">
               Siap Tinggalkan Kasir Manual & Biaya Bulanan?
            </h2>
            <p className="text-lg text-white/60 mb-10 leading-relaxed">
               Bergabung dengan ratusan pemilik UMKM yang sudah mengelola usaha lebih rapi dengan uKasir. Coba gratis 7 hari — tanpa kartu kredit, tanpa komitmen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <Link href="/buy" className="ukasir-btn-glow rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-500/30 hover:bg-blue-500 transition-all w-full sm:w-auto">
                 Beli Sekarang — Rp 149.000
               </Link>
               <Link href="/trial" className="rounded-full border border-white/20 px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-all w-full sm:w-auto">
                 🎯 Trial 7 Hari Gratis
               </Link>
            </div>
            <p className="text-xs text-white/40 mt-8 font-medium">
               ✓ Garansi uang kembali 3 hari &nbsp;·&nbsp; ✓ No credit card &nbsp;·&nbsp; ✓ Support WA lifetime
            </p>
         </div>
      </section>

    </div>
  );
}
