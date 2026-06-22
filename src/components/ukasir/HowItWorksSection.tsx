import React from "react";
import { defaultHowItWorksData, HowItWorksData } from "./defaultData";

export default function HowItWorksSection({ data = defaultHowItWorksData, isEditor = false }: { data?: Partial<HowItWorksData>, isEditor?: boolean }) {
  const content = { ...defaultHowItWorksData, ...data };
  const editorClass = isEditor ? " hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed hover:cursor-pointer hover:bg-blue-50/50 rounded-lg p-1 -m-1 transition-all" : "";
  const clickHandler = (fieldName: string) => isEditor ? (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'SCROLL_TO_FIELD', fieldName, sectionId: 'howitworks' }, '*');
    }
  } : undefined;

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32" id="cara-kerja">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
         <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-16">
          <h2 onClick={clickHandler('badge')} className={`text-sm font-bold leading-7 text-blue-600 uppercase tracking-widest mb-3 ${editorClass}`}>{content.badge}</h2>
          <p onClick={clickHandler('headline')} className={`text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl font-red-hat-display ${editorClass}`}>
             {content.headline}
          </p>
          <div onClick={clickHandler('description')} className={`mt-6 text-lg text-gray-600 [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:ml-5 [&_ol]:ml-5 ${editorClass}`} dangerouslySetInnerHTML={{ __html: content.description }} />
        </div>

        <div onClick={clickHandler('steps')} className={`relative mt-12 sm:mt-20 ${isEditor ? 'hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed hover:cursor-pointer p-2 rounded-3xl transition-all' : ''}`}>
           {/* Connecting Line (Desktop only) */}
           <div className="hidden lg:block absolute top-12 left-24 right-24 h-0.5 bg-gradient-to-r from-blue-100 via-blue-400 to-blue-100"></div>
           
           <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 relative z-10">
              {content.steps.map((step, i) => (
                <div key={i} className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center gap-4 sm:gap-6 p-5 sm:p-6 lg:p-0 bg-gradient-to-br from-white to-blue-50/10 lg:from-transparent lg:to-transparent rounded-2xl sm:rounded-3xl border border-gray-100 lg:border-none shadow-sm lg:shadow-none relative group transition-all duration-300 hover:border-blue-200 lg:hover:border-transparent">
                    <div className="flex-shrink-0 w-12 h-12 lg:w-24 lg:h-24 rounded-full bg-blue-600 lg:bg-white text-white lg:text-blue-600 border-4 border-blue-50 lg:border-8 lg:border-gray-50 flex items-center justify-center shadow-lg lg:shadow-xl shadow-blue-100 relative group-hover:scale-105 transition-transform duration-300">
                        <span className="font-red-hat-display font-black text-xl lg:text-4xl relative z-10">{step.num}</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 lg:mb-3">{step.title}</h3>
                        <div className="text-gray-500 text-xs sm:text-sm leading-relaxed [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:ml-4 [&_ol]:ml-4" dangerouslySetInnerHTML={{ __html: step.desc }} />
                    </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
