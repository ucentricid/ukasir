import React from "react";
import Link from "next/link";
import { ArrowRight, ClipboardList, LayoutDashboard } from "lucide-react";
import { defaultFeaturesData, FeaturesData } from "./defaultData";
import { DynamicIcon } from "./DynamicIcon";

export default function FeaturesSection({ data = defaultFeaturesData, isEditor = false }: { data?: Partial<FeaturesData>, isEditor?: boolean }) {
  const content = { ...defaultFeaturesData, ...data };
  const editorClass = isEditor ? " hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed hover:cursor-pointer hover:bg-blue-50/50 rounded-lg p-1 -m-1 transition-all" : "";
  const clickHandler = (fieldName: string) => isEditor ? (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'SCROLL_TO_FIELD', fieldName, sectionId: 'features' }, '*');
    }
  } : undefined;

  return (
    <section className="bg-gray-50 py-16 sm:py-24 lg:py-32" id="fitur">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-16">
          <h2 onClick={clickHandler('badge')} className={`text-sm font-bold leading-7 text-emerald-600 uppercase tracking-widest mb-3 ${editorClass}`}>{content.badge}</h2>
          <div onClick={clickHandler('headline')} className={`inline-block ${editorClass}`}>
            <p 
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 font-red-hat-display leading-tight"
              dangerouslySetInnerHTML={{ __html: content.headline }}
            ></p>
          </div>
          <div onClick={clickHandler('description')} className={`mt-6 text-lg text-gray-600 [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:ml-5 [&_ol]:ml-5 ${editorClass}`} dangerouslySetInnerHTML={{ __html: content.description }} />
        </div>
        
        <div onClick={clickHandler('bentoItems')} className={`ukasir-bento-grid ${isEditor ? 'hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed hover:cursor-pointer p-2 rounded-3xl transition-all' : ''}`}>
          {content.bentoItems.map((item, i) => {
            if (item.isLarge) {
              return (
                <div key={i} className="sm:col-span-2 rounded-3xl bg-blue-600 p-8 sm:p-10 text-white flex flex-col sm:flex-row gap-8 overflow-hidden relative group shadow-xl">
                    <div className="relative z-10 flex-1 flex flex-col justify-center">
                        <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm">
                          <DynamicIcon name={item.icon} className="h-7 w-7 text-white" />
                        </div>
                        <h3 
                          className="text-3xl font-bold font-red-hat-display mb-4"
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        ></h3>
                        <div className="text-blue-100 text-base mb-8 max-w-md [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:ml-5 [&_ol]:ml-5" dangerouslySetInnerHTML={{ __html: item.desc }} />
                        <div><span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">{item.tag}</span></div>
                    </div>
                    {/* Visual Decorator for the large block */}
                    <div className="hidden sm:block w-64 bg-white rounded-2xl p-4 text-gray-900 shadow-2xl relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                        <div className="text-xs font-bold text-[#061734] mb-3 border-b pb-2 flex items-center gap-1.5"><ClipboardList className="w-3.5 h-3.5" /> Laporan Arus Kas</div>
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
                    <div className="absolute -bottom-20 -right-20 opacity-10 group-hover:scale-110 transition-transform duration-700">
                        <LayoutDashboard size={400} strokeWidth={1} />
                    </div>
                </div>
              );
            }
            return (
              <div key={i} className="rounded-2xl sm:rounded-3xl bg-white border border-gray-200 p-5 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                    <DynamicIcon name={item.icon} className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-red-hat-display mb-3">{item.title}</h3>
                  <div className="text-sm text-gray-600 mb-6 flex-1 [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:ml-5 [&_ol]:ml-5" dangerouslySetInnerHTML={{ __html: item.desc }} />
                  <div><span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">{item.tag}</span></div>
              </div>
            );
          })}
        </div>

        {/* More Features Grid */}
        <div onClick={clickHandler('smallItems')} className={`mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 ${isEditor ? 'hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed hover:cursor-pointer p-2 rounded-2xl transition-all' : ''}`}>
           {content.smallItems.map((f, i) => {
              const colors = [
                "bg-amber-100 text-amber-600",
                "bg-indigo-100 text-indigo-600",
                "bg-rose-100 text-rose-600",
                "bg-emerald-100 text-emerald-600",
              ];
              const colorClass = colors[i % colors.length];
              return (
              <div key={i} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100 flex items-start gap-4 hover:border-blue-300 transition-colors shadow-sm">
                 <div className={`mt-0.5 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${colorClass}`}>
                   <DynamicIcon name={f.icon} className="w-6 h-6" />
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-900 mb-1.5 text-sm sm:text-base">{f.title}</h4>
                   <div className="text-xs sm:text-sm text-gray-500 leading-relaxed [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:ml-4 [&_ol]:ml-4" dangerouslySetInnerHTML={{ __html: f.desc }} />
                 </div>
              </div>
           )})}
        </div>
        
        <div className={`mt-12 text-center ${editorClass}`} onClick={clickHandler('ctaText')}>
          <Link href="/fitur" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors">
            {content.ctaText} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
