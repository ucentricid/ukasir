import React from "react";
import { defaultTargetSegmentsData, TargetSegmentsData } from "./defaultData";
import { DynamicIcon } from "./DynamicIcon";

export default function TargetSegmentsSection({ data = defaultTargetSegmentsData, isEditor = false }: { data?: Partial<TargetSegmentsData>, isEditor?: boolean }) {
  const content = { ...defaultTargetSegmentsData, ...data };
  const editorClass = isEditor ? " hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed hover:cursor-pointer hover:bg-blue-50/50 rounded-lg p-1 -m-1 transition-all inline-block" : "";
  const clickHandler = (fieldName: string) => isEditor ? (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'SCROLL_TO_FIELD', fieldName, sectionId: 'segments' }, '*');
    }
  } : undefined;

  // Define colors based on index for variety, matching original design
  const colors = ["text-orange-500", "text-pink-500", "text-blue-500", "text-slate-600", "text-cyan-500"];

  return (
    <section className="bg-gray-50 py-14 sm:py-20">
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
             <h2 onClick={clickHandler('headline')} className={`text-2xl font-extrabold text-gray-900 font-red-hat-display ${editorClass}`}>{content.headline}</h2>
             <div onClick={clickHandler('description')} className={`mt-2 text-gray-600 [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:ml-5 [&_ol]:ml-5 ${editorClass}`} dangerouslySetInnerHTML={{ __html: content.description }} />
          </div>
          <div onClick={clickHandler('segments')} className={`flex flex-wrap justify-center gap-3 sm:gap-4 ${isEditor ? 'hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed hover:cursor-pointer p-2 rounded-3xl transition-all' : ''}`}>
              {content.segments.map((seg, i) => (
                <div key={i} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-gray-100 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all group w-[calc(50%-6px)] sm:w-[calc(33.333%-12px)] lg:w-[calc(20%-16px)] flex-shrink-0 flex flex-col items-center justify-center">
                   <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-gray-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-50 transition-colors">
                      <DynamicIcon name={seg.icon} className={`w-8 h-8 ${colors[i % colors.length]}`} />
                   </div>
                   <h3 className="font-bold text-gray-900 font-red-hat-display mb-1">{seg.title}</h3>
                   <p className="text-xs text-gray-500">{seg.desc}</p>
                </div>
              ))}
          </div>
       </div>
    </section>
  );
}
