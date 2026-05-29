import React from "react";
import ArrayFieldEditor from "./ArrayFieldEditor";

// Reusable Input Field Helper
const InputField = ({ id, label, value, onChange, type = "text", isTextArea = false }: { id?: string, label: string, value: string, onChange: (val: string) => void, type?: string, isTextArea?: boolean }) => (
  <div className="mb-4">
    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">{label}</label>
    {isTextArea ? (
      <textarea 
        id={id}
        value={value || ""} onChange={(e) => onChange(e.target.value)} rows={3}
        className="w-full bg-white border border-slate-200 text-slate-800 text-[13px] rounded-lg px-3 py-2.5 focus:border-blue-500 transition-colors shadow-sm"
      />
    ) : (
      <input 
        id={id}
        type={type} value={value || ""} onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-slate-200 text-slate-800 text-[13px] rounded-lg px-3 py-2.5 focus:border-blue-500 transition-colors shadow-sm"
      />
    )}
  </div>
);

// 1. PainPoints Form
export const PainPointsFormFields = ({ data, setData }: any) => {
  const handleChange = (key: string, val: any) => setData((prev: any) => ({ ...prev, [key]: val }));
  return (
    <div>
      <InputField id="field-badge" label="Badge Text" value={data.badge} onChange={(v) => handleChange("badge", v)} />
      <InputField id="field-headline" label="Headline" value={data.headline} onChange={(v) => handleChange("headline", v)} />
      <InputField id="field-description" label="Description" value={data.description} onChange={(v) => handleChange("description", v)} isTextArea />
      
      <ArrayFieldEditor 
        id="field-points"
        title="Daftar Masalah (Grid)" 
        items={data.points || []} 
        onChange={(items) => handleChange("points", items)}
        fields={[
          { name: "title", label: "Judul", type: "text" },
          { name: "desc", label: "Deskripsi", type: "textarea" },
          { name: "icon", label: "Lucide Icon Name (e.g. FileX, Coins)", type: "icon" }
        ]}
      />
    </div>
  );
};

// 2. Features Form
export const FeaturesFormFields = ({ data, setData }: any) => {
  const handleChange = (key: string, val: any) => setData((prev: any) => ({ ...prev, [key]: val }));
  return (
    <div>
      <InputField id="field-badge" label="Badge Text" value={data.badge} onChange={(v) => handleChange("badge", v)} />
      <InputField id="field-headline" label="Headline (HTML allowed for <br/>)" value={data.headline} onChange={(v) => handleChange("headline", v)} isTextArea />
      <InputField id="field-description" label="Description" value={data.description} onChange={(v) => handleChange("description", v)} isTextArea />
      <InputField id="field-ctaText" label="Tombol CTA Bawah" value={data.ctaText} onChange={(v) => handleChange("ctaText", v)} />
      
      <ArrayFieldEditor 
        id="field-bentoItems"
        title="Fitur Utama (Bento Grid)" 
        items={data.bentoItems || []} 
        onChange={(items) => handleChange("bentoItems", items)}
        fields={[
          { name: "title", label: "Judul", type: "text" },
          { name: "desc", label: "Deskripsi", type: "textarea" },
          { name: "tag", label: "Tag/Label", type: "text" },
          { name: "icon", label: "Lucide Icon", type: "icon" },
        ]}
      />
      <ArrayFieldEditor 
        id="field-smallItems"
        title="Fitur Tambahan (Small Grid)" 
        items={data.smallItems || []} 
        onChange={(items) => handleChange("smallItems", items)}
        fields={[
          { name: "title", label: "Judul", type: "text" },
          { name: "desc", label: "Deskripsi", type: "textarea" },
          { name: "icon", label: "Lucide Icon", type: "icon" },
        ]}
      />
    </div>
  );
};

// 3. How It Works Form
export const HowItWorksFormFields = ({ data, setData }: any) => {
  const handleChange = (key: string, val: any) => setData((prev: any) => ({ ...prev, [key]: val }));
  return (
    <div>
      <InputField id="field-badge" label="Badge Text" value={data.badge} onChange={(v) => handleChange("badge", v)} />
      <InputField id="field-headline" label="Headline" value={data.headline} onChange={(v) => handleChange("headline", v)} />
      <InputField id="field-description" label="Description" value={data.description} onChange={(v) => handleChange("description", v)} isTextArea />
      
      <ArrayFieldEditor 
        id="field-steps"
        title="Langkah-Langkah" 
        items={data.steps || []} 
        onChange={(items) => handleChange("steps", items)}
        fields={[
          { name: "num", label: "Nomor/Angka", type: "text" },
          { name: "title", label: "Judul Langkah", type: "text" },
          { name: "desc", label: "Deskripsi", type: "textarea" },
        ]}
      />
    </div>
  );
};

// 4. Target Segments Form
export const TargetSegmentsFormFields = ({ data, setData }: any) => {
  const handleChange = (key: string, val: any) => setData((prev: any) => ({ ...prev, [key]: val }));
  return (
    <div>
      <InputField id="field-headline" label="Headline" value={data.headline} onChange={(v) => handleChange("headline", v)} />
      <InputField id="field-description" label="Description" value={data.description} onChange={(v) => handleChange("description", v)} isTextArea />
      <ArrayFieldEditor 
        id="field-segments"
        title="Jenis Bisnis" 
        items={data.segments || []} 
        onChange={(items) => handleChange("segments", items)}
        fields={[
          { name: "title", label: "Nama Bisnis", type: "text" },
          { name: "desc", label: "Contoh (e.g. Kafe, Warung)", type: "text" },
          { name: "icon", label: "Lucide Icon", type: "icon" },
        ]}
      />
    </div>
  );
};

// 5. Pricing Form
export const PricingFormFields = ({ data, setData }: any) => {
  const handleChange = (key: string, val: any) => setData((prev: any) => ({ ...prev, [key]: val }));
  return (
    <div>
      <InputField id="field-badge" label="Badge Text" value={data.badge} onChange={(v) => handleChange("badge", v)} />
      <InputField id="field-headline" label="Headline" value={data.headline} onChange={(v) => handleChange("headline", v)} />
      <InputField id="field-description" label="Description" value={data.description} onChange={(v) => handleChange("description", v)} isTextArea />
      <InputField id="field-price" label="Harga (Format Angka misal 149.000)" value={data.price} onChange={(v) => handleChange("price", v)} />
      <InputField id="field-savingsText" label="Teks Hemat (Highlight)" value={data.savingsText} onChange={(v) => handleChange("savingsText", v)} />
      
      <div className="mb-4">
        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Daftar Fitur (Pisahkan dengan koma atau baris baru)</label>
        <textarea 
          id="field-features"
          value={(data.features || []).join("\n")} 
          onChange={(e) => handleChange("features", e.target.value.split("\n"))} 
          rows={8}
          className="w-full bg-white border border-slate-200 text-slate-800 text-[13px] rounded-lg px-3 py-2.5 shadow-sm"
        />
      </div>
    </div>
  );
};

// 6. Testimonials Form
export const TestimonialsFormFields = ({ data, setData }: any) => {
  const handleChange = (key: string, val: any) => setData((prev: any) => ({ ...prev, [key]: val }));
  return (
    <div>
      <InputField id="field-badge" label="Badge Text" value={data.badge} onChange={(v) => handleChange("badge", v)} />
      <InputField id="field-headline" label="Headline" value={data.headline} onChange={(v) => handleChange("headline", v)} />
      <ArrayFieldEditor 
        id="field-items"
        title="Daftar Testimoni" 
        items={data.items || []} 
        onChange={(items) => handleChange("items", items)}
        fields={[
          { name: "name", label: "Nama Lengkap", type: "text" },
          { name: "role", label: "Peran/Bisnis", type: "text" },
          { name: "quote", label: "Kutipan Review", type: "textarea" },
        ]}
      />
    </div>
  );
};

// 7. FAQ Form
export const FAQFormFields = ({ data, setData }: any) => {
  const handleChange = (key: string, val: any) => setData((prev: any) => ({ ...prev, [key]: val }));
  return (
    <div>
      <InputField id="field-badge" label="Badge Text" value={data.badge} onChange={(v) => handleChange("badge", v)} />
      <InputField id="field-headline" label="Headline" value={data.headline} onChange={(v) => handleChange("headline", v)} />
      <ArrayFieldEditor 
        id="field-items"
        title="Daftar Pertanyaan" 
        items={data.items || []} 
        onChange={(items) => handleChange("items", items)}
        fields={[
          { name: "q", label: "Pertanyaan", type: "text" },
          { name: "a", label: "Jawaban", type: "textarea" },
        ]}
      />
    </div>
  );
};

// 8. CTA Form
export const CTAFormFields = ({ data, setData }: any) => {
  const handleChange = (key: string, val: any) => setData((prev: any) => ({ ...prev, [key]: val }));
  return (
    <div>
      <InputField id="field-headline" label="Headline" value={data.headline} onChange={(v) => handleChange("headline", v)} isTextArea />
      <InputField id="field-description" label="Description" value={data.description} onChange={(v) => handleChange("description", v)} isTextArea />
      <InputField id="field-buttonText" label="Teks Tombol Utama" value={data.buttonText} onChange={(v) => handleChange("buttonText", v)} />
      <InputField id="field-trialText" label="Teks Tombol Trial" value={data.trialText} onChange={(v) => handleChange("trialText", v)} />
      <InputField id="field-guaranteeText" label="Teks Garansi/Kepercayaan (Bawah)" value={data.guaranteeText} onChange={(v) => handleChange("guaranteeText", v)} />
    </div>
  );
};

// 9. Footer Form
export const FooterFormFields = ({ data, setData }: any) => {
  const handleChange = (key: string, val: any) => setData((prev: any) => ({ ...prev, [key]: val }));
  return (
    <div>
      <InputField id="field-brandName" label="Nama Brand" value={data.brandName} onChange={(v) => handleChange("brandName", v)} />
      <InputField id="field-brandTagline" label="Tagline Brand" value={data.brandTagline} onChange={(v) => handleChange("brandTagline", v)} isTextArea />
      <InputField id="field-copyrightText" label="Teks Copyright" value={data.copyrightText} onChange={(v) => handleChange("copyrightText", v)} />
      <InputField id="field-contactEmail" label="Email Kontak" value={data.contactEmail} onChange={(v) => handleChange("contactEmail", v)} />
      <InputField id="field-contactWhatsapp" label="Nomor WhatsApp Kontak" value={data.contactWhatsapp} onChange={(v) => handleChange("contactWhatsapp", v)} />

      {(data.columns || []).map((col: any, colIdx: number) => (
        <ArrayFieldEditor
          key={colIdx}
          id={`field-column-${colIdx}`}
          title={`Kolom "${col.title || `Kolom ${colIdx + 1}`}"`}
          items={col.links || []}
          onChange={(links) => {
            const newCols = [...(data.columns || [])];
            newCols[colIdx] = { ...newCols[colIdx], links };
            handleChange("columns", newCols);
          }}
          fields={[
            { name: "label", label: "Teks Link", type: "text" },
            { name: "href", label: "URL (e.g. /fitur)", type: "text" },
          ]}
        />
      ))}
    </div>
  );
};

