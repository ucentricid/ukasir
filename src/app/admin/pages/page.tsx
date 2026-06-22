"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, ExternalLink } from "lucide-react";
import Swal from "sweetalert2";

export default function AdminPagesList() {
  const [pages, setPages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPages = async () => {
    try {
      const res = await fetch('/api/pages');
      const data = await res.json();
      setPages(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const handleCreateNew = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Buat Landing Page Promo',
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Judul Halaman (ex: Promo Merdeka)">
        <input id="swal-input2" class="swal2-input" placeholder="Slug URL (ex: promo-merdeka)">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Buat Halaman',
      confirmButtonColor: '#2563eb',
      preConfirm: () => {
        return {
          title: (document.getElementById('swal-input1') as HTMLInputElement).value,
          slug: (document.getElementById('swal-input2') as HTMLInputElement).value
        }
      }
    });

    if (formValues) {
      const { title, slug } = formValues;
      if (!title || !slug) {
        Swal.fire('Error', 'Judul dan slug harus diisi!', 'error');
        return;
      }
      
      const res = await fetch('/api/pages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, slug })
      });

      if (res.ok) {
        Swal.fire('Sukses!', 'Halaman berhasil dibuat.', 'success');
        fetchPages();
      } else {
        const error = await res.json();
        Swal.fire('Error', error.error || 'Gagal membuat halaman', 'error');
      }
    }
  };

  const handleDelete = async (slug: string) => {
    const result = await Swal.fire({
      title: 'Yakin ingin menghapus?',
      text: "Halaman ini akan dihapus permanen!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Ya, hapus!'
    });

    if (result.isConfirmed) {
      const res = await fetch(`/api/pages/${slug}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        Swal.fire('Dihapus!', 'Halaman telah dihapus.', 'success');
        fetchPages();
      } else {
        Swal.fire('Error', 'Gagal menghapus halaman', 'error');
      }
    }
  };

  if (isLoading) return <div className="p-8 text-center text-slate-500">Memuat...</div>;

  return (
    <div className="p-6 max-w-7xl mx-auto font-[family-name:var(--font-outfit)]">
      <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-red-hat-display">Landing Pages</h1>
          <p className="text-slate-500 mt-1">Kelola halaman promosi dan landing page dinamis menggunakan drag-and-drop builder.</p>
        </div>
        <button 
          onClick={handleCreateNew}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/20"
        >
          <Plus className="w-5 h-5" />
          Buat Halaman
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="px-6 py-4 font-semibold text-slate-600 text-sm uppercase tracking-wider">Judul Halaman</th>
              <th className="px-6 py-4 font-semibold text-slate-600 text-sm uppercase tracking-wider">URL Slug</th>
              <th className="px-6 py-4 font-semibold text-slate-600 text-sm uppercase tracking-wider">Diperbarui</th>
              <th className="px-6 py-4 font-semibold text-slate-600 text-sm uppercase tracking-wider text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {pages.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                  Belum ada halaman landing page yang dibuat.
                </td>
              </tr>
            ) : pages.map((page) => (
              <tr key={page.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-semibold text-slate-900">{page.title}</div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    /promo/{page.slug}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">
                  {new Date(page.updatedAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/promo/${page.slug}`}
                      target="_blank"
                      className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Lihat Publik"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                    <Link
                      href={`/admin/pages/${page.slug}`}
                      className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Edit dengan Builder"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => handleDelete(page.slug)}
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Hapus"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
