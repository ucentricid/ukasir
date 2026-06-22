import Link from "next/link";
import { ShoppingCart, ArrowRight, BarChart3, CheckCircle2 } from "lucide-react";

export interface HeroData {
  badgeText: string;
  headlineBlack1: string;
  headlineBlue: string;
  headlineBlack2: string;
  headlineGradient: string;
  description: string;
  priceLabel: string;
  priceValue: string;
  buttonText: string;
  userCountText: string;
  salesBadgeText: string;
  heroImageUrl?: string;
}

export const defaultHeroData: HeroData = {
  badgeText: "Tersedia untuk Android & iOS",
  headlineBlack1: "Kasir",
  headlineBlue: "Offline",
  headlineBlack2: "Sekali Beli.",
  headlineGradient: "Selamanya.",
  description: "Aplikasi kasir POS mobile yang benar-benar bekerja tanpa internet. Tidak ada tagihan bulanan. Tidak ada biaya tersembunyi. Cocok untuk semua jenis UMKM Indonesia.",
  priceLabel: "Hanya",
  priceValue: "Rp 149.000",
  buttonText: "Beli Sekarang",
  userCountText: "500+ pemilik UMKM sudah bergabung",
  salesBadgeText: "Rp 3.2 Juta",
  heroImageUrl: "/images/hero-mockup.svg"
};

export default function HeroSection({ data = defaultHeroData, isEditor = false }: { data?: Partial<HeroData>, isEditor?: boolean }) {
  const content = { ...defaultHeroData, ...data };
  
  const editorClass = isEditor ? " hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed hover:cursor-pointer hover:bg-blue-50/50 rounded-lg p-1 -m-1 transition-all" : "";
  const clickHandler = (fieldName: string) => isEditor ? (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'SCROLL_TO_FIELD', fieldName, sectionId: 'hero' }, '*');
    }
  } : undefined;
  
  return (
    <div className="@container w-full">
      <section className="relative overflow-hidden ukasir-mesh-gradient pt-[5.5rem] pb-16 @sm:pt-40 @sm:pb-28 @lg:pb-40">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
        <div className="mx-auto max-w-7xl px-6 @lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 @lg:grid-cols-2 @lg:items-center">
            <div className="max-w-2xl text-center @lg:text-left mx-auto @lg:mx-0">
              <div 
                className={`inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600 ring-1 ring-inset ring-blue-600/20 mb-8 mx-auto @lg:mx-0 ${editorClass}`}
                onClick={clickHandler("badgeText")}
                title={isEditor ? "Klik untuk edit Badge" : ""}
              >
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                {content.badgeText}
              </div>
              <h1 
                className={`text-4xl font-extrabold tracking-tight text-gray-900 @sm:text-6xl @lg:text-7xl font-red-hat-display leading-[1.1] ${editorClass}`}
                onClick={clickHandler("headlineBlack1")}
                title={isEditor ? "Klik untuk edit Headline" : ""}
              >
                {content.headlineBlack1} <span className="text-blue-600">{content.headlineBlue}</span>.<br/>
                {content.headlineBlack2}<br/>
                <span className="ukasir-text-gradient">{content.headlineGradient}</span>
              </h1>
              <div 
                className={`mt-6 text-base @sm:text-xl leading-7 @sm:leading-8 text-gray-600 max-w-lg mx-auto @lg:mx-0 [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:ml-5 [&_ol]:ml-5 ${editorClass}`}
                onClick={clickHandler("description")}
                title={isEditor ? "Klik untuk edit Deskripsi" : ""}
                dangerouslySetInnerHTML={{ __html: content.description }}
              />
              
              <div className="mt-5 flex justify-center @lg:justify-start">
                <div 
                  className={`inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm border border-gray-100 ${editorClass}`}
                  onClick={clickHandler("priceValue")}
                  title={isEditor ? "Klik untuk edit Harga" : ""}
                >
                  {content.priceLabel} <strong className="text-gray-900">{content.priceValue}</strong> <span className="text-gray-400 text-xs">(Lifetime)</span>
                </div>
              </div>

              <div className="mt-10 flex flex-col @sm:flex-row items-center gap-4 @sm:gap-6 justify-center @lg:justify-start">
                <Link
                  href="/buy"
                  className="w-full @sm:w-auto justify-center ukasir-btn-glow rounded-2xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 flex items-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" /> {content.buttonText} ({content.priceValue})
                </Link>
                <Link href="#fitur" className="w-full @sm:w-auto justify-center text-base font-bold leading-6 text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-2 group border border-gray-200 @sm:border-transparent rounded-2xl py-4 @sm:py-0">
                  Lihat Fitur <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="mt-12 flex flex-col @sm:flex-row items-center justify-center @lg:justify-start gap-4">
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
                  <p 
                    className={`text-sm text-gray-500 font-medium text-center @sm:text-left ${editorClass}`}
                    onClick={clickHandler("userCountText")}
                    title={isEditor ? "Klik untuk edit Teks Info Pengguna" : ""}
                  >
                    <strong className="text-gray-900">{content.userCountText.split(' ')[0]}</strong> {content.userCountText.substring(content.userCountText.indexOf(' ') + 1)}
                  </p>
              </div>
            </div>

            <div className="hidden @[768px]:block relative mt-12 @[1024px]:mt-0 w-full max-w-[400px] @[1024px]:max-w-[280px] @[1280px]:max-w-[320px] mx-auto">
             <div className="relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                   src={content.heroImageUrl || "/images/hero-mockup.svg"} 
                   alt="uKasir Interface Mockup" 
                   className="w-full h-auto drop-shadow-2xl"
                />
             </div>
             
             {/* Floating Badges */}
             <div className="absolute top-20 -right-12 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-4 z-20 animate-[bounce_3s_infinite]">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600"><BarChart3 className="w-6 h-6" /></div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{content.salesBadgeText}</p>
                  <p className="text-xs text-gray-500">Penjualan hari ini</p>
                </div>
             </div>

             <div className="absolute bottom-32 -left-12 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-4 z-20 animate-[bounce_4s_infinite]">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600"><CheckCircle2 className="w-6 h-6" /></div>
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
    </div>
  );
}
