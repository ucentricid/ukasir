import React from "react";
import Link from "next/link";
import { Gift } from "lucide-react";
import { defaultCTAData, CTAData } from "./defaultData";

export default function CTASection({ data = defaultCTAData, isEditor = false }: { data?: Partial<CTAData>, isEditor?: boolean }) {
  const content = { ...defaultCTAData, ...data };
  const editorClassDark = isEditor ? " hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed hover:cursor-pointer hover:bg-white/10 rounded-lg p-1 -m-1 transition-all" : "";
  const clickHandler = (fieldName: string) => isEditor ? (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'SCROLL_TO_FIELD', fieldName, sectionId: 'cta' }, '*');
    }
  } : undefined;

  return (
    <section className="bg-[#061734] py-24 sm:py-32 relative overflow-hidden text-center" id="cta">
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(29,97,230,0.2)_0%,transparent_55%),radial-gradient(ellipse_at_70%_50%,rgba(29,97,230,0.15)_0%,transparent_55%)] pointer-events-none"></div>
       <div className="mx-auto max-w-3xl px-6 lg:px-8 relative z-10">
          <h2 onClick={clickHandler('headline')} className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-red-hat-display mb-5 sm:mb-6 ${editorClassDark}`}>
             {content.headline}
          </h2>
          <p onClick={clickHandler('description')} className={`text-lg text-white/60 mb-10 leading-relaxed ${editorClassDark}`}>
             {content.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <div onClick={clickHandler('buttonText')} className={editorClassDark}>
               <Link href="/buy" className="ukasir-btn-glow rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-500/30 hover:bg-blue-500 transition-all w-full sm:w-auto">
                 {content.buttonText}
               </Link>
             </div>
             <div onClick={clickHandler('trialText')} className={editorClassDark}>
               <Link href="/trial" className="rounded-full border border-white/20 px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-all w-full sm:w-auto flex items-center justify-center gap-2">
                 {content.trialText}
               </Link>
             </div>
          </div>
          <p onClick={clickHandler('guaranteeText')} className={`text-xs text-white/40 mt-8 font-medium inline-block ${editorClassDark}`}>
             {content.guaranteeText}
          </p>
       </div>
    </section>
  );
}
