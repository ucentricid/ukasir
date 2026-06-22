import React from "react";
import { Star } from "lucide-react";
import { defaultTestimonialsData, TestimonialsData } from "./defaultData";

export default function TestimonialsSection({ data = defaultTestimonialsData, isEditor = false }: { data?: Partial<TestimonialsData>, isEditor?: boolean }) {
  const content = { ...defaultTestimonialsData, ...data };
  const editorClass = isEditor ? " hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed hover:cursor-pointer hover:bg-blue-50/50 rounded-lg p-1 -m-1 transition-all" : "";
  const clickHandler = (fieldName: string) => isEditor ? (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'SCROLL_TO_FIELD', fieldName, sectionId: 'testimonials' }, '*');
    }
  } : undefined;

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
             <h2 onClick={clickHandler('badge')} className={`text-sm font-bold leading-7 text-blue-600 uppercase tracking-widest mb-3 ${editorClass}`}>{content.badge}</h2>
             <p onClick={clickHandler('headline')} className={`text-3xl font-extrabold tracking-tight text-gray-900 font-red-hat-display inline-block ${editorClass}`}>
                {content.headline}
             </p>
          </div>
          <div onClick={clickHandler('items')} className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 ${isEditor ? 'hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed hover:cursor-pointer hover:bg-blue-50/50 p-2 rounded-3xl transition-all' : ''}`}>
             {content.items.map((testi, i) => (
               <div key={i} className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all">
                  <div className="flex text-amber-400 mb-6">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                  </div>
                  <div className="text-gray-600 italic mb-8 flex-1 line-clamp-4 [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:ml-4 [&_ol]:ml-4" dangerouslySetInnerHTML={{ __html: testi.quote }} />
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
  );
}
