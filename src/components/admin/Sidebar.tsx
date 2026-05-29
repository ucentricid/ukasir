"use client";

import { LayoutDashboard, LogOut, Settings, LayoutTemplate } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen flex flex-col hidden md:flex flex-shrink-0">
      <div className="p-6 border-b border-slate-800">
        <h2 className="text-2xl font-bold font-red-hat-display flex items-center gap-2">
          <img src="/icon.svg" alt="uKasir" className="w-6 h-6 brightness-0 invert" />
          uKasir <span className="text-blue-400 font-light">CMS</span>
        </h2>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 mt-4 px-2">Halaman Utama</div>
        <Link 
          href="/admin" 
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
            pathname === '/admin' 
              ? 'bg-blue-600/20 text-blue-400' 
              : 'text-slate-400 hover:bg-slate-800 hover:text-white'
          }`}
        >
          <LayoutDashboard className="w-5 h-5" /> Overview
        </Link>
        <Link 
          href="/admin/editor" 
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
            pathname?.startsWith('/admin/editor')
              ? 'bg-blue-600/20 text-blue-400' 
              : 'text-slate-400 hover:bg-slate-800 hover:text-white'
          }`}
        >
          <LayoutTemplate className="w-5 h-5" /> Unified Editor
        </Link>
      </nav>

      <div className="p-4 border-t border-slate-800 space-y-2">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors text-left text-sm font-medium">
          <Settings className="w-5 h-5" /> Pengaturan CMS
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-red-900/30 hover:text-red-400 transition-colors text-left text-sm font-medium">
          <LogOut className="w-5 h-5" /> Keluar
        </button>
      </div>
    </aside>
  );
}
