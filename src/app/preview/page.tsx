"use client";

import React, { useEffect, useState } from "react";
import UkasirNavbar from "@/components/ukasir/Navbar";
import HeroSection from "@/components/ukasir/HeroSection";
import PainPointsSection from "@/components/ukasir/PainPointsSection";
import FeaturesSection from "@/components/ukasir/FeaturesSection";
import HowItWorksSection from "@/components/ukasir/HowItWorksSection";
import TargetSegmentsSection from "@/components/ukasir/TargetSegmentsSection";
import PricingSection from "@/components/ukasir/PricingSection";
import TestimonialsSection from "@/components/ukasir/TestimonialsSection";
import FAQ from "@/components/ukasir/FAQ";
import CTASection from "@/components/ukasir/CTASection";
import UkasirFooter from "@/components/ukasir/Footer";
import { FooterData } from "@/components/ukasir/defaultData";

export default function PreviewIframe() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === 'UPDATE_DATA') {
        setData(e.data.data);
      } else if (e.data?.type === 'SCROLL_TO_SECTION') {
        const element = document.getElementById(e.data.sectionId);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 80; // Offset for navbar
          window.scrollTo({ top: y, behavior: 'smooth' });
          
          // Optional: Add a highlight effect to make it clear which section was selected
          element.classList.add('ring-4', 'ring-blue-500/50', 'transition-all', 'duration-500');
          setTimeout(() => {
            element.classList.remove('ring-4', 'ring-blue-500/50');
          }, 1500);
        }
      }
    };
    window.addEventListener('message', handler);
    // Tell parent we are ready
    window.parent.postMessage({ type: 'IFRAME_READY' }, '*');
    
    return () => window.removeEventListener('message', handler);
  }, []);

  useEffect(() => {
    // Intercept clicks to prevent navigation in preview mode
    const blockClick = (e: MouseEvent) => {
       const target = e.target as HTMLElement;
       const anchor = target.closest('a');
       
       if (anchor) {
          e.preventDefault();
          e.stopPropagation(); // crucial to prevent Next.js Link from catching it
       }
    };
    
    // Use capture phase (true) to intercept before React synthetic events
    window.addEventListener('click', blockClick, true);
    return () => window.removeEventListener('click', blockClick, true);
  }, []);

  const handleCanvasClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const section = target.closest('[id]');
    if (section && section.id) {
       const validSections = ['hero', 'painpoints', 'features', 'howitworks', 'segments', 'pricing', 'testimonials', 'faq', 'cta', 'footer'];
       if (validSections.includes(section.id)) {
          window.parent.postMessage({ type: 'SECTION_CLICKED', sectionId: section.id }, '*');
       }
    }
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!data) return (
     <div className="flex h-screen items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-3 opacity-50">
           <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
           <p className="text-sm font-semibold text-slate-500 font-[family-name:var(--font-outfit)]">Memuat Preview...</p>
        </div>
     </div>
  );

  return (
    <div className={`relative font-[family-name:var(--font-outfit)] bg-slate-50 min-h-screen flex flex-col transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <UkasirNavbar />
      <main className="flex-1 cursor-pointer" onClick={handleCanvasClick}>
         <div id="hero" className="hover:ring-2 hover:ring-blue-400/50 transition-all"><HeroSection data={data.hero} isEditor={true} /></div>
         <div id="painpoints" className="hover:ring-2 hover:ring-blue-400/50 transition-all"><PainPointsSection data={data.painpoints} isEditor={true} /></div>
         <div id="features" className="hover:ring-2 hover:ring-blue-400/50 transition-all"><FeaturesSection data={data.features} isEditor={true} /></div>
         <div id="howitworks" className="hover:ring-2 hover:ring-blue-400/50 transition-all"><HowItWorksSection data={data.howitworks} isEditor={true} /></div>
         <div id="segments" className="hover:ring-2 hover:ring-blue-400/50 transition-all"><TargetSegmentsSection data={data.segments} isEditor={true} /></div>
         <div id="pricing" className="hover:ring-2 hover:ring-blue-400/50 transition-all"><PricingSection data={data.pricing} isEditor={true} /></div>
         <div id="testimonials" className="hover:ring-2 hover:ring-blue-400/50 transition-all"><TestimonialsSection data={data.testimonials} isEditor={true} /></div>
         <div id="faq" className="hover:ring-2 hover:ring-blue-400/50 transition-all"><FAQ data={data.faq} isEditor={true} /></div>
         <div id="cta" className="hover:ring-2 hover:ring-blue-400/50 transition-all"><CTASection data={data.cta} isEditor={true} /></div>
      </main>
      <div id="footer" onClick={handleCanvasClick} className="cursor-pointer hover:ring-2 hover:ring-blue-400/50 transition-all"><UkasirFooter data={data.footer as FooterData} isPreview={true} /></div>
    </div>
  );
}
