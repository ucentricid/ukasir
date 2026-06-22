"use client";

import React, { useState, useEffect, useRef } from "react";
import { LayoutTemplate, AlertCircle, Star, ListOrdered, Users, CreditCard, MessageSquare, HelpCircle, Megaphone, Save, Monitor, Smartphone, LayoutGrid, PanelTop } from "lucide-react";
import Swal from "sweetalert2";

// Import Landing Page components for live preview
import HeroSection, { HeroData } from "@/components/ukasir/HeroSection";
import PainPointsSection from "@/components/ukasir/PainPointsSection";
import FeaturesSection from "@/components/ukasir/FeaturesSection";
import HowItWorksSection from "@/components/ukasir/HowItWorksSection";
import TargetSegmentsSection from "@/components/ukasir/TargetSegmentsSection";
import PricingSection from "@/components/ukasir/PricingSection";
import TestimonialsSection from "@/components/ukasir/TestimonialsSection";
import FAQ from "@/components/ukasir/FAQ";
import CTASection from "@/components/ukasir/CTASection";

// Import defaults
import { 
  defaultHeroData, defaultPainPointsData, defaultFeaturesData, defaultHowItWorksData,
  defaultTargetSegmentsData, defaultPricingData, defaultTestimonialsData, defaultCTAData,
  defaultFooterData, FooterData, defaultNavbarData
} from "@/components/ukasir/defaultData";
import { defaultFAQData } from "@/components/ukasir/FAQ";
import UkasirFooter from "@/components/ukasir/Footer";

import HeroFormFields from "@/components/ukasir/HeroFormFields";
import { 
  PainPointsFormFields, FeaturesFormFields, HowItWorksFormFields, 
  TargetSegmentsFormFields, PricingFormFields, TestimonialsFormFields, 
  FAQFormFields, CTAFormFields, FooterFormFields, NavbarFormFields
} from "@/components/ukasir/editor/SectionForms";

const SECTIONS = [
  { id: "navbar", label: "Navbar", icon: PanelTop, defaultData: defaultNavbarData },
  { id: "hero", label: "Hero Section", icon: LayoutTemplate, defaultData: defaultHeroData },
  { id: "painpoints", label: "Masalah (Pain Points)", icon: AlertCircle, defaultData: defaultPainPointsData },
  { id: "features", label: "Fitur Unggulan", icon: Star, defaultData: defaultFeaturesData },
  { id: "howitworks", label: "Cara Kerja", icon: ListOrdered, defaultData: defaultHowItWorksData },
  { id: "segments", label: "Target Segmen", icon: Users, defaultData: defaultTargetSegmentsData },
  { id: "pricing", label: "Harga (Pricing)", icon: CreditCard, defaultData: defaultPricingData },
  { id: "testimonials", label: "Testimoni", icon: MessageSquare, defaultData: defaultTestimonialsData },
  { id: "faq", label: "FAQ", icon: HelpCircle, defaultData: defaultFAQData },
  { id: "cta", label: "Final CTA", icon: Megaphone, defaultData: defaultCTAData },
  { id: "footer", label: "Footer", icon: LayoutGrid, defaultData: defaultFooterData },
];

export default function UnifiedEditorPage() {
  const [activeSection, setActiveSection] = useState("navbar");
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "mobile">("desktop");
  const [isSaving, setIsSaving] = useState(false);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // State for all sections data
  const [cmsData, setCmsData] = useState<Record<string, any>>({});

  // Send CMS data to iframe whenever it changes
  useEffect(() => {
     if (iframeRef.current?.contentWindow && Object.keys(cmsData).length > 0) {
         iframeRef.current.contentWindow.postMessage({ type: 'UPDATE_DATA', data: cmsData }, '*');
     }
  }, [cmsData]);

  // Handle incoming messages from iframe
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === 'SCROLL_TO_FIELD') {
        if (e.data.sectionId) {
          setActiveSection(e.data.sectionId);
        }
        setTimeout(() => {
          const field = document.getElementById(`field-${e.data.fieldName}`);
          if (field) {
            field.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => field.focus(), 100);
            field.classList.add('ring-4', 'ring-blue-500', 'bg-blue-50', 'scale-[1.02]', 'transition-all', 'duration-300', 'z-10', 'relative');
            setTimeout(() => {
              field.classList.remove('ring-4', 'ring-blue-500', 'bg-blue-50', 'scale-[1.02]', 'z-10', 'relative');
            }, 1200);
          }
        }, 100);
      } else if (e.data?.type === 'SECTION_CLICKED') {
         // User clicked a section inside the live canvas!
         setActiveSection(e.data.sectionId);
         
         // Scroll the sidebar menu to show the selected icon if needed
         const menuBtn = document.getElementById(`menu-sec-${e.data.sectionId}`);
         if (menuBtn) {
           menuBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
         }
      } else if (e.data?.type === 'IFRAME_READY') {
         if (iframeRef.current?.contentWindow && Object.keys(cmsData).length > 0) {
             iframeRef.current.contentWindow.postMessage({ type: 'UPDATE_DATA', data: cmsData }, '*');
         }
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [cmsData]);

  const isLoaded = Object.keys(cmsData).length > 0;

  useEffect(() => {
    if (!isLoaded) return;

    let timeoutId: NodeJS.Timeout;

    const updateScale = () => {
      if (containerRef.current) {
        const padding = window.innerWidth < 640 ? 32 : 64; // p-4 or p-8
        const availableWidth = containerRef.current.clientWidth - padding;
        const availableHeight = containerRef.current.clientHeight - padding;
        
        if (availableWidth <= 0 || availableHeight <= 0) return;
        
        const targetWidth = previewDevice === 'mobile' ? 375 : 1280;
        const targetHeight = previewDevice === 'mobile' ? 812 : 800;
        
        const scaleX = availableWidth / targetWidth;
        const scaleY = availableHeight / targetHeight;
        
        setScale(Math.min(scaleX, scaleY, 1));
      }
    };
    
    // Initial calculation
    updateScale();
    
    // Fallback calculation shortly after mount to handle layout thrashing/hydration delays
    timeoutId = setTimeout(updateScale, 150);
    
    const observer = new ResizeObserver(() => {
      window.requestAnimationFrame(updateScale);
    });
    
    if (containerRef.current) observer.observe(containerRef.current);
    window.addEventListener('resize', updateScale);
    
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener('resize', updateScale);
    };
  }, [previewDevice, activeSection, isLoaded]); // Re-run if section changes just in case height changes

  useEffect(() => {
    // Load initial data
    const loadData = async () => {
      try {
        const res = await fetch("/api/content");
        let loadedData: Record<string, any> = {};
        
        if (res.ok) {
          const blocks = await res.json();
          blocks.forEach((b: any) => {
             loadedData[b.sectionId] = b.data;
          });
        }
        
        // Merge with defaults for empty ones
        const finalData: Record<string, any> = {};
        SECTIONS.forEach(sec => {
          finalData[sec.id] = loadedData[sec.id] || sec.defaultData;
        });
        setCmsData(finalData);
      } catch (err) {
        console.error("Failed to load CMS data", err);
        // Fallback to purely default data
        const fallbackData: Record<string, any> = {};
        SECTIONS.forEach(sec => {
          fallbackData[sec.id] = sec.defaultData;
        });
        setCmsData(fallbackData);
      }
    };
    loadData();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const activeData = cmsData[activeSection];
      const res = await fetch(`/api/content?section=${activeSection}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: activeData }),
      });
      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Tersimpan!',
          text: `${SECTIONS.find(s => s.id === activeSection)?.label} berhasil diperbarui.`,
          timer: 2000,
          showConfirmButton: false
        });
      }
    } catch (err) {
      Swal.fire('Error', 'Gagal menyimpan data.', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const updateActiveData = (newData: any) => {
    setCmsData(prev => ({
      ...prev,
      [activeSection]: typeof newData === 'function' ? newData(prev[activeSection]) : newData
    }));
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage({ type: 'SCROLL_TO_SECTION', sectionId: id }, '*');
    }
  };

  if (Object.keys(cmsData).length === 0) return <div className="p-8">Loading Editor...</div>;

  // Helper to render the correct form
  const renderForm = () => {
    const props = { data: cmsData[activeSection], setData: updateActiveData };
    switch (activeSection) {
      case "navbar": return <NavbarFormFields {...props} />;
      case "hero": return <HeroFormFields {...props} inputBase="w-full bg-white border border-slate-200 text-slate-800 text-[13px] rounded-lg px-3 py-2.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm" handleChange={(e: any) => updateActiveData({ ...cmsData["hero"], [e.target.name]: e.target.value })} />;
      case "painpoints": return <PainPointsFormFields {...props} />;
      case "features": return <FeaturesFormFields {...props} />;
      case "howitworks": return <HowItWorksFormFields {...props} />;
      case "segments": return <TargetSegmentsFormFields {...props} />;
      case "pricing": return <PricingFormFields {...props} />;
      case "testimonials": return <TestimonialsFormFields {...props} />;
      case "faq": return <FAQFormFields {...props} />;
      case "cta": return <CTAFormFields {...props} />;
      case "footer": return <FooterFormFields {...props} />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-1 bg-[#F8FAFC] font-inter overflow-hidden min-h-0">
      
      {/* LEFT SIDEBAR: Unified Menu & Editor */}
      <div className="w-[420px] bg-white border-r border-slate-200 flex flex-col shadow-xl z-20 flex-shrink-0">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-[#061734] shrink-0 text-white">
          <div className="flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-blue-400" />
            <h1 className="font-bold tracking-tight">uKasir Editor</h1>
          </div>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Save className="w-3.5 h-3.5" /> {isSaving ? 'Menyimpan...' : 'Save Section'}
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Section List (Narrow Sidebar) */}
          <div className="w-16 bg-slate-50 border-r border-slate-200 flex flex-col items-center py-4 gap-2 overflow-y-auto">
             {SECTIONS.map((sec) => {
               const Icon = sec.icon;
               const isActive = activeSection === sec.id;
               return (
                 <button 
                   key={sec.id}
                   id={`menu-sec-${sec.id}`}
                   onClick={() => scrollToSection(sec.id)}
                   title={sec.label}
                   className={`w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center transition-all ${isActive ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-blue-100 hover:text-blue-600'}`}
                 >
                   <Icon className="w-5 h-5" />
                 </button>
               )
             })}
          </div>

          {/* Form Area */}
          <div className="flex-1 flex flex-col bg-white overflow-hidden">
             <div className="p-4 border-b border-slate-100 bg-white">
                <h2 className="font-bold text-slate-800">{SECTIONS.find(s => s.id === activeSection)?.label}</h2>
                <p className="text-xs text-slate-500">Edit konten khusus untuk section ini.</p>
             </div>
             <div className="flex-1 overflow-y-auto p-4">
                {renderForm()}
             </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Live Preview Canvas */}
      <div className="flex-1 flex flex-col bg-slate-100 relative min-w-0 min-h-0">
        <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-center gap-2 z-10 shadow-sm relative flex-shrink-0">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live Canvas
          </div>
          <div className="flex p-1 bg-slate-100 rounded-lg border border-slate-200">
            <button 
              onClick={() => setPreviewDevice("desktop")}
              className={`p-1.5 rounded-md flex items-center gap-1.5 transition-all ${previewDevice === "desktop" ? "bg-white text-blue-600 shadow-sm font-bold" : "text-slate-500 hover:text-slate-700"}`}
            >
              <Monitor className="w-4 h-4" /> <span className="text-[10px] uppercase tracking-wider hidden sm:block">Desktop</span>
            </button>
            <button 
              onClick={() => setPreviewDevice("mobile")}
              className={`p-1.5 rounded-md flex items-center gap-1.5 transition-all ${previewDevice === "mobile" ? "bg-white text-blue-600 shadow-sm font-bold" : "text-slate-500 hover:text-slate-700"}`}
            >
              <Smartphone className="w-4 h-4" /> <span className="text-[10px] uppercase tracking-wider hidden sm:block">Mobile</span>
            </button>
          </div>
        </div>

        <div ref={containerRef} className="flex-1 overflow-hidden min-w-0 min-h-0 p-4 sm:p-8 flex items-center justify-center">
          <div 
            style={{ 
              width: (previewDevice === 'mobile' ? 375 : 1280) * scale,
              height: (previewDevice === 'mobile' ? 812 : 800) * scale,
              position: 'relative'
            }}
            className="flex-shrink-0 transition-all duration-300"
          >
            <div
              style={{
                width: previewDevice === 'mobile' ? 375 : 1280,
                height: previewDevice === 'mobile' ? 812 : 800,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
              }}
              className={`absolute top-0 left-0 bg-white shadow-2xl flex flex-col overflow-hidden ${previewDevice === 'mobile' ? 'rounded-[2.5rem] outline outline-[12px] outline-slate-800' : 'rounded-b-2xl rounded-t-sm border border-slate-200'}`}
            >
               {previewDevice === 'desktop' && (
                  <div className="h-6 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-1.5 flex-shrink-0 sticky top-0 z-50">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                  </div>
               )}
               <iframe 
                 ref={iframeRef}
                 src="/preview" 
                 className="flex-1 w-full h-full border-none"
                 title="Live Preview"
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
