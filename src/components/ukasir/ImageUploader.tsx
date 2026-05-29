"use client";

import React, { useState } from 'react';
import { UploadCloud, Image as ImageIcon, Loader2 } from 'lucide-react';
import Swal from 'sweetalert2';

interface ImageUploaderProps {
  currentImage?: string;
  onUpload: (url: string) => void;
  className?: string;
}

export default function ImageUploader({ currentImage, onUpload, className = "" }: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      Swal.fire('Error', 'File harus berupa gambar', 'error');
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      Swal.fire('Error', 'Ukuran gambar maksimal 2MB', 'error');
      return;
    }

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Upload failed');
      
      const data = await res.json();
      onUpload(data.url);
    } catch (err) {
      console.error("Upload error:", err);
      Swal.fire('Error', 'Gagal mengunggah gambar', 'error');
    } finally {
      setIsUploading(false);
      // Reset input
      e.target.value = '';
    }
  };

  return (
    <div className={`relative ${className}`}>
       {currentImage ? (
         <div className="relative group rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
            <img src={currentImage} alt="Uploaded" className="w-full h-32 object-contain" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
               <label className="cursor-pointer bg-white text-slate-800 px-3 py-1.5 rounded-lg text-xs font-bold shadow flex items-center gap-2 hover:bg-slate-100">
                  <UploadCloud className="w-4 h-4" /> Ganti Gambar
                  <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} disabled={isUploading} />
               </label>
            </div>
         </div>
       ) : (
         <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 hover:border-blue-400 transition-all">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {isUploading ? (
                 <Loader2 className="w-8 h-8 text-blue-500 animate-spin mb-2" />
              ) : (
                 <UploadCloud className="w-8 h-8 text-slate-400 mb-2" />
              )}
              <p className="mb-1 text-xs text-slate-500 font-semibold">
                {isUploading ? "Mengunggah..." : "Klik untuk unggah gambar"}
              </p>
              <p className="text-[10px] text-slate-400">SVG, PNG, JPG, or WEBP (Max 2MB)</p>
            </div>
            <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} disabled={isUploading} />
         </label>
       )}
    </div>
  );
}
