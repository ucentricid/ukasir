import React from "react";
import { defaultPainPointsData, PainPointsData } from "./defaultData";
import { DynamicIcon } from "./DynamicIcon";

export default function PainPointsSection({ data = defaultPainPointsData, isEditor = false }: { data?: Partial<PainPointsData>, isEditor?: boolean }) {
  const content = { ...defaultPainPointsData, ...data };
  const editorClass = isEditor ? " hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed hover:cursor-pointer hover:bg-white/10 rounded-lg p-1 -m-1 transition-all" : "";
  const clickHandler = (fieldName: string) => isEditor ? (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'SCROLL_TO_FIELD', fieldName, sectionId: 'painpoints' }, '*');
    }
  } : undefined;

  return (
    <section className="bg-[#061734] py-16 sm:py-24 lg:py-32 relative overflow-hidden" id="painpoints">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(29,97,230,0.15)_0%,transparent_60%)]"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 onClick={clickHandler('badge')} className={`text-sm font-bold leading-7 text-blue-400 uppercase tracking-widest mb-3 ${editorClass}`}>
            {content.badge}
          </h2>
          <p onClick={clickHandler('headline')} className={`text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-red-hat-display ${editorClass}`}>
             {content.headline}
          </p>
          <p onClick={clickHandler('description')} className={`mt-6 text-lg leading-8 text-gray-400 ${editorClass}`}>
            {content.description}
          </p>
        </div>
        <div onClick={clickHandler('points')} className={`mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none ${isEditor ? 'hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed hover:cursor-pointer hover:bg-white/5 rounded-2xl p-2 transition-all' : ''}`}>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.points.map((p, i) => (
              <div key={i} className="flex sm:flex-col flex-row items-start gap-4 sm:gap-0 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 hover:bg-blue-600/10 hover:border-blue-500/30 transition-all hover:-translate-y-1">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-red-500/20 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 sm:mb-6">
                  <DynamicIcon name={p.icon} className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <dt className="text-base sm:text-lg font-bold leading-6 text-white font-red-hat-display mb-1 sm:mb-3">
                    {p.title}
                  </dt>
                  <dd className="text-xs sm:text-sm leading-5 sm:leading-6 text-gray-400">{p.desc}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
