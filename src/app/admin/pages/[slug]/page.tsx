"use client";

import React, { useEffect, useState } from "react";
import { Puck } from "@measured/puck";
import { config } from "@/components/ukasir/builder/puck.config";
import "@measured/puck/puck.css";
import Swal from "sweetalert2";

export default function EditorPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await fetch(`/api/pages/${resolvedParams.slug}`);
        if (!res.ok) {
          Swal.fire('Error', 'Halaman tidak ditemukan', 'error');
          return;
        }
        const page = await res.json();
        // Puck requires { content: [], root: {}, zones: {} }
        const puckData = page.blocks && page.blocks.content ? page.blocks : { content: [], root: {}, zones: {} };
        setData(puckData);
      } catch (error) {
        console.error("Error fetching page:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPage();
  }, [resolvedParams.slug]);

  const save = async (data: any) => {
    try {
      const res = await fetch(`/api/pages/${resolvedParams.slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ blocks: data }),
      });
      
      if (res.ok) {
        Swal.fire({
          title: 'Berhasil Disimpan!',
          text: 'Perubahan landing page telah diperbarui.',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        });
      } else {
        Swal.fire('Error', 'Gagal menyimpan halaman', 'error');
      }
    } catch (error) {
      console.error("Error saving page:", error);
      Swal.fire('Error', 'Terjadi kesalahan sistem', 'error');
    }
  };

  if (isLoading || !data) return <div className="p-8 text-center text-slate-500">Memuat Builder...</div>;

  return (
    <div className="h-[calc(100vh-64px)] w-full font-[family-name:var(--font-outfit)]">
      <Puck 
        config={config} 
        data={data} 
        onPublish={save} 
      />
    </div>
  );
}
