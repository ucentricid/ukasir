import Link from "next/link";
import { ArrowRight, Activity, Edit3, Settings, Eye, LayoutTemplate } from "lucide-react";

export default function AdminOverviewPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 font-red-hat-display">Selamat Datang di uKasir CMS</h1>
        <p className="text-slate-500 mt-2">Kelola seluruh konten landing page uKasir dengan mudah. Perubahan akan langsung terlihat secara real-time.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Status CMS</p>
            <p className="text-xl font-bold text-slate-900">Online</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Eye className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Pratinjau Situs</p>
            <p className="text-xl font-bold text-slate-900">Aktif</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <Edit3 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Unified Editor</p>
            <p className="text-xl font-bold text-slate-900">Tersedia</p>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-slate-900 font-red-hat-display mb-4">Edit Landing Page</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href={`/admin/editor`} className="group bg-gradient-to-br from-white to-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <LayoutTemplate className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Buka Unified Editor</h3>
                <p className="text-sm text-slate-500 mt-1">Edit semua konten dalam satu halaman dengan live preview</p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
            </div>
          </Link>
      </div>
    </div>
  );
}
