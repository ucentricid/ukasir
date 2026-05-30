import HeroSection, { HeroData } from "@/components/ukasir/HeroSection";
import PainPointsSection from "@/components/ukasir/PainPointsSection";
import FeaturesSection from "@/components/ukasir/FeaturesSection";
import HowItWorksSection from "@/components/ukasir/HowItWorksSection";
import TargetSegmentsSection from "@/components/ukasir/TargetSegmentsSection";
import PricingSection from "@/components/ukasir/PricingSection";
import TestimonialsSection from "@/components/ukasir/TestimonialsSection";
import FAQ, { FAQData } from "@/components/ukasir/FAQ";
import CTASection from "@/components/ukasir/CTASection";

import { getContentBlock } from "@/actions/content";
import { 
  PainPointsData, FeaturesData, HowItWorksData, TargetSegmentsData, 
  PricingData, TestimonialsData, CTAData 
} from "@/components/ukasir/defaultData";

export default async function UkasirPage() {
  // Fetch ALL sections dynamically
  const heroBlock = await getContentBlock("hero");
  const heroData = heroBlock ? (heroBlock as unknown as HeroData) : undefined;

  const painPointsBlock = await getContentBlock("painpoints");
  const painPointsData = painPointsBlock ? (painPointsBlock as unknown as PainPointsData) : undefined;

  const featuresBlock = await getContentBlock("features");
  const featuresData = featuresBlock ? (featuresBlock as unknown as FeaturesData) : undefined;

  const howItWorksBlock = await getContentBlock("howitworks");
  const howItWorksData = howItWorksBlock ? (howItWorksBlock as unknown as HowItWorksData) : undefined;

  const segmentsBlock = await getContentBlock("segments");
  const segmentsData = segmentsBlock ? (segmentsBlock as unknown as TargetSegmentsData) : undefined;

  const pricingBlock = await getContentBlock("pricing");
  const pricingData = pricingBlock ? (pricingBlock as unknown as PricingData) : undefined;

  const testimonialsBlock = await getContentBlock("testimonials");
  const testimonialsData = testimonialsBlock ? (testimonialsBlock as unknown as TestimonialsData) : undefined;

  const faqBlock = await getContentBlock("faq");
  const faqData = faqBlock ? (faqBlock as unknown as FAQData) : undefined;

  const ctaBlock = await getContentBlock("cta");
  const ctaData = ctaBlock ? (ctaBlock as unknown as CTAData) : undefined;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'uKasir',
    operatingSystem: 'ANDROID, IOS, WINDOWS',
    applicationCategory: 'BusinessApplication',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1250',
    },
    offers: {
      '@type': 'Offer',
      price: '149000',
      priceCurrency: 'IDR',
    },
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection data={heroData} />
      <PainPointsSection data={painPointsData} />
      <FeaturesSection data={featuresData} />
      <HowItWorksSection data={howItWorksData} />
      <TargetSegmentsSection data={segmentsData} />
      <PricingSection data={pricingData} />
      <TestimonialsSection data={testimonialsData} />
      <FAQ data={faqData} />
      <CTASection data={ctaData} />
    </div>
  );
}
