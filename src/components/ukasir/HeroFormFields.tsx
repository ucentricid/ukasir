import React from "react";
import Swal from "sweetalert2";
import { HeroData } from "./HeroSection";

export default function HeroFormFields({
  data,
  handleChange,
  setData,
  inputBase,
}: {
  data: HeroData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setData: React.Dispatch<React.SetStateAction<HeroData>>;
  inputBase: string;
}) {
  type FieldConfig = { label: string; name: keyof HeroData; type?: string; accent?: string; rows?: number; colSpan?: number };
  
  const groups: { title: string; fields: FieldConfig[] }[] = [
    {
      title: "1. Headline Utama",
      fields: [
        { label: "Teks Awal (Hitam)", name: "headlineBlack1" },
        { label: "Sorotan (Biru)", name: "headlineBlue", accent: "text-blue-600 font-semibold" },
        { label: "Teks Tengah (Hitam)", name: "headlineBlack2", colSpan: 2 },
        { label: "Teks Akhir (Gradient)", name: "headlineGradient", accent: "font-semibold", colSpan: 2 },
      ]
    },
    {
      title: "2. Deskripsi & Info",
      fields: [
        { label: "Badge Top", name: "badgeText", colSpan: 2 },
        { label: "Deskripsi Utama", name: "description", type: "textarea", rows: 3, colSpan: 2 },
        { label: "Info Pengguna", name: "userCountText", colSpan: 2 },
      ]
    },
    {
      title: "3. Tombol & Harga (CTA)",
      fields: [
        { label: "Teks Tombol CTA", name: "buttonText", accent: "font-semibold text-blue-700", colSpan: 2 },
        { label: "Label Harga", name: "priceLabel" },
        { label: "Nominal Harga", name: "priceValue", accent: "font-bold text-slate-900" },
      ]
    },
    {
      title: "4. Mockup Overlay",
      fields: [
        { label: "Teks Badge Penjualan", name: "salesBadgeText", accent: "text-emerald-600 font-semibold", colSpan: 2 },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {groups.map((group, idx) => (
        <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
            {group.title}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {group.fields.map((f) => (
              <div key={f.name} className={f.colSpan === 2 ? "col-span-2" : "col-span-1"}>
                <label className="block text-[11px] font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                  {f.label}
                </label>
                {f.type === "textarea" ? (
                  <textarea
                    id={`field-${f.name}`}
                    name={f.name}
                    value={data[f.name] as string}
                    onChange={handleChange}
                    rows={f.rows ?? 3}
                    className={`${inputBase} resize-none ${f.accent ?? ""}`}
                  />
                ) : (
                  <input
                    id={`field-${f.name}`}
                    type="text"
                    name={f.name}
                    value={data[f.name] as string}
                    onChange={handleChange}
                    className={`${inputBase} ${f.accent ?? ""}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      
      {/* File Upload Field Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
          5. Gambar Hero Mockup
        </h3>
        <label className="block text-[11px] font-semibold text-slate-500 mb-2 uppercase tracking-wide">
          Upload Gambar (JPG, PNG, SVG maks 10MB)
        </label>
        <div className="flex flex-col xl:flex-row items-start xl:items-center gap-4">
          {data.heroImageUrl && (
            <img src={data.heroImageUrl} alt="Hero" className="w-16 h-16 object-contain bg-white rounded-lg border border-slate-200 shrink-0 shadow-sm" />
          )}
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.svg"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              if (file.size > 10 * 1024 * 1024) {
                Swal.fire({ title: "Gagal!", text: "Ukuran file maksimal 10MB.", icon: "error", confirmButtonColor: "#2563eb" });
                return;
              }
              const formData = new FormData();
              formData.append("file", file);
              Swal.fire({ title: "Mengunggah...", allowOutsideClick: false, didOpen: () => Swal.showLoading() });
              try {
                const res = await fetch("/api/upload", { method: "POST", body: formData });
                const json = await res.json();
                if (json.url) {
                  setData(prev => ({ ...prev, heroImageUrl: json.url }));
                  Swal.fire({ title: "Berhasil!", text: "Gambar Hero diperbarui.", icon: "success", timer: 1500, showConfirmButton: false });
                } else {
                  Swal.fire({ title: "Gagal!", text: json.error || "Gagal mengunggah file.", icon: "error", confirmButtonColor: "#2563eb" });
                }
              } catch {
                Swal.fire({ title: "Gagal!", text: "Terjadi kesalahan server.", icon: "error", confirmButtonColor: "#2563eb" });
              }
            }}
            className={`${inputBase} !py-1.5 cursor-pointer file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 transition-colors bg-white`}
          />
        </div>
      </div>
    </div>
  );
}
