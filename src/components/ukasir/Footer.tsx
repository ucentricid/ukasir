"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { defaultFooterData, FooterData } from "./defaultData";

export default function UkasirFooter({ data = defaultFooterData, isPreview = false }: { data?: Partial<FooterData>; isPreview?: boolean }) {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const content = { ...defaultFooterData, ...data };

  if (!isPreview && (pathname.startsWith('/admin') || pathname.startsWith('/preview'))) return null;

  const editorClass = isPreview ? " hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed hover:cursor-pointer hover:bg-blue-50/50 rounded-lg p-1 -m-1 transition-all" : "";
  const clickHandler = (fieldName: string) => isPreview ? (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'SCROLL_TO_FIELD', fieldName, sectionId: 'footer' }, '*');
    }
  } : undefined;

  return (
    <footer className="bg-white border-t border-gray-100" id="footer">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div onClick={clickHandler('brandName')} className={`inline-block ${editorClass}`}>
              <Link href="/" className="text-2xl font-black text-[#1E1B4B] font-red-hat-display tracking-tight">
                {content.brandName}<span className="text-blue-600">.</span>
              </Link>
            </div>
            <p onClick={clickHandler('brandTagline')} className={`mt-6 text-sm text-gray-500 leading-relaxed font-medium ${editorClass}`}>
              {content.brandTagline}
            </p>
          </div>

          {/* Dynamic Link Columns */}
          {content.columns.map((col, i) => (
            <div key={i} onClick={clickHandler(`column-${i}`)} className={isPreview ? 'hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed hover:cursor-pointer hover:bg-blue-50/50 p-2 -m-2 rounded-xl transition-all' : ''}>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">{col.title}</h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link href={link.href} className="text-gray-600 hover:text-blue-600 text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Kontak */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Kontak Kami</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li onClick={clickHandler('contactEmail')} className={editorClass}>Email: <a href={`mailto:${content.contactEmail}`} className="hover:text-blue-600">{content.contactEmail}</a></li>
              <li onClick={clickHandler('contactWhatsapp')} className={editorClass}>WhatsApp: <a href={`https://wa.me/${content.contactWhatsapp.replace(/[^0-9]/g, '')}`} className="hover:text-blue-600">{content.contactWhatsapp}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p onClick={clickHandler('copyrightText')} className={`text-center text-sm text-gray-500 inline-block w-full ${editorClass}`}>
            &copy; {currentYear} {content.copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
}
