import React, { useState } from "react";
import { Plus, Trash2, ChevronDown, ChevronUp, GripVertical, Image as ImageIcon } from "lucide-react";
import ImageUploader from "../ImageUploader";

import RichTextEditor from "./RichTextEditor";

interface FieldDef {
  name: string;
  label: string;
  type: "text" | "textarea" | "icon" | "image" | "richtext";
}

interface ArrayFieldEditorProps {
  title: string;
  items: any[];
  fields: FieldDef[];
  onChange: (newItems: any[]) => void;
  id?: string;
}

export default function ArrayFieldEditor({ id, title, items, fields, onChange }: ArrayFieldEditorProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleItemChange = (index: number, fieldName: string, value: string) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [fieldName]: value };
    onChange(newItems);
  };

  const addItem = () => {
    const newItem: any = {};
    fields.forEach(f => newItem[f.name] = "");
    onChange([...items, newItem]);
    setExpandedIndex(items.length);
  };

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    onChange(newItems);
  };

  const moveItem = (index: number, dir: number) => {
    if (index + dir < 0 || index + dir >= items.length) return;
    const newItems = [...items];
    const temp = newItems[index];
    newItems[index] = newItems[index + dir];
    newItems[index + dir] = temp;
    onChange(newItems);
  };

  return (
    <div id={id} className="bg-slate-50 border border-slate-200 p-4 rounded-xl mb-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-slate-800 text-sm">{title}</h3>
        <span className="text-[10px] font-bold bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">{items.length} items</span>
      </div>

      <div className="space-y-2">
        {items.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div key={index} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
               {/* Header / Collapse Trigger */}
               <div className="flex items-center gap-2 p-2 bg-slate-50/50 cursor-pointer" onClick={() => setExpandedIndex(isExpanded ? null : index)}>
                 <div className="flex-shrink-0 text-slate-400 p-1 hover:bg-slate-200 rounded cursor-grab" onClick={(e) => { e.stopPropagation(); moveItem(index, -1); }}>
                    <ChevronUp className="w-4 h-4" />
                 </div>
                 <div className="flex-shrink-0 text-slate-400 p-1 hover:bg-slate-200 rounded cursor-grab" onClick={(e) => { e.stopPropagation(); moveItem(index, 1); }}>
                    <ChevronDown className="w-4 h-4" />
                 </div>
                 
                 <div className="flex-1 font-semibold text-xs text-slate-700 truncate pl-2 border-l border-slate-200">
                   {item.title || item.name || item.q || `Item #${index + 1}`}
                 </div>
                 
                 <button onClick={(e) => { e.stopPropagation(); removeItem(index); }} className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                   <Trash2 className="w-3.5 h-3.5" />
                 </button>
               </div>

               {/* Expanded Content */}
               {isExpanded && (
                 <div className="p-4 border-t border-slate-100 flex flex-col gap-3 bg-white">
                    {fields.map((field) => (
                      <div key={field.name}>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                          {field.label}
                        </label>
                        {field.type === "textarea" ? (
                          <textarea
                            value={item[field.name] || ""}
                            onChange={(e) => handleItemChange(index, field.name, e.target.value)}
                            rows={3}
                            className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-[13px] rounded-lg px-3 py-2 focus:bg-white focus:border-blue-500 transition-colors"
                          />
                        ) : field.type === "richtext" ? (
                          <RichTextEditor
                            value={item[field.name] || ""}
                            onChange={(val) => handleItemChange(index, field.name, val)}
                          />
                        ) : field.type === "icon" ? (
                          <div className="flex items-center gap-2">
                             <input
                              type="text"
                              value={item[field.name] || ""}
                              onChange={(e) => handleItemChange(index, field.name, e.target.value)}
                              placeholder="e.g. Star, Heart, Zap"
                              className="flex-1 bg-slate-50 border border-slate-200 text-slate-800 text-[13px] rounded-lg px-3 py-2 focus:bg-white focus:border-blue-500 transition-colors"
                             />
                             <div className="text-[10px] text-slate-400 w-24">Lucide Icon name</div>
                          </div>
                        ) : field.type === "image" ? (
                          <ImageUploader 
                            currentImage={item[field.name]}
                            onUpload={(url: string) => handleItemChange(index, field.name, url)}
                          />
                        ) : (
                          <input
                            type="text"
                            value={item[field.name] || ""}
                            onChange={(e) => handleItemChange(index, field.name, e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-[13px] rounded-lg px-3 py-2 focus:bg-white focus:border-blue-500 transition-colors"
                          />
                        )}
                      </div>
                    ))}
                 </div>
               )}
            </div>
          );
        })}
      </div>

      <button onClick={addItem} className="mt-3 w-full py-2 border border-dashed border-blue-300 bg-blue-50/50 hover:bg-blue-100 text-blue-600 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5">
        <Plus className="w-3.5 h-3.5" /> Tambah Item
      </button>
    </div>
  );
}
