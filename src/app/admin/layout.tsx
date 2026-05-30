
import Sidebar from "@/components/admin/Sidebar";

export const metadata = {
  title: "uKasir CMS Admin",
  description: "Content Management System for uKasir Landing Page",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-50 font-[family-name:var(--font-outfit)] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Topbar */}
        <header className="bg-white h-16 border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0 z-10 shadow-sm">
          <h1 className="font-bold text-slate-800 font-red-hat-display text-lg">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
              AD
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col overflow-hidden min-h-0">
          {children}
        </main>
      </div>
    </div>
  );
}
