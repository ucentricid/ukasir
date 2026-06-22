"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { NavbarData, defaultNavbarData } from "./defaultData";

export default function UkasirNavbar({ data = defaultNavbarData, isEditor = false }: { data?: Partial<NavbarData>, isEditor?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  const content = { ...defaultNavbarData, ...data };

  if ((pathname.startsWith('/admin') || pathname.startsWith('/preview')) && !isEditor) return null;

  const editorClass = isEditor ? " hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-dashed hover:cursor-pointer hover:bg-blue-50/50 rounded-lg p-1 -m-1 transition-all" : "";
  const clickHandler = (fieldName: string) => isEditor ? (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'SCROLL_TO_FIELD', fieldName, sectionId: 'navbar' }, '*');
    }
  } : undefined;

  const navLinks = content.links;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
    // If not a hash link or not on homepage, let Link handle it normally
  };

  return (
    <nav className="fixed top-3 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl ukasir-nav-pill rounded-full px-4 py-1.5 sm:px-6 sm:py-3 border border-gray-100 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className={`flex items-center gap-2 hover:opacity-90 transition-opacity ${editorClass}`} onClick={clickHandler('logoUrl')}>
            <img 
              src={content.logoUrl || "/images/logo.svg"} 
              alt="uKasir Logo" 
              className="h-6 sm:h-8 w-auto" 
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-8">
            <div className={`${editorClass} flex items-center space-x-8`} onClick={clickHandler('links')}>
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-bold text-gray-500 hover:text-blue-600 transition-all hover:translate-y-[-1px]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-6 border-l border-gray-100 pl-8">
              <Link
                href={content.trialButtonHref}
                className={`text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors ${editorClass}`}
                onClick={clickHandler('trialButtonText')}
              >
                {content.trialButtonText}
              </Link>
              <Link
                href={content.buyButtonHref}
                className={`ukasir-btn-premium rounded-full px-6 py-2.5 text-sm font-bold text-white transition-all flex items-center gap-2 ${editorClass}`}
                onClick={clickHandler('buyButtonText')}
              >
                {content.buyButtonText} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
           <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-full p-1.5 text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[3.5rem] sm:top-20 left-4 right-4 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-300">
          <div className="space-y-4">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100">
                <Link
                  href={content.trialButtonHref}
                  className="block text-center rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  {content.trialButtonText}
                </Link>
                <Link
                  href={content.buyButtonHref}
                  className="block text-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {content.buyButtonText}
                </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
