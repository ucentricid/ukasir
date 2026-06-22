import { Config } from "@measured/puck";
import HeroSection from "../HeroSection";
import PainPointsSection from "../PainPointsSection";
import FeaturesSection from "../FeaturesSection";
import HowItWorksSection from "../HowItWorksSection";
import TargetSegmentsSection from "../TargetSegmentsSection";
import PricingSection from "../PricingSection";
import TestimonialsSection from "../TestimonialsSection";
import FAQ from "../FAQ";
import CTASection from "../CTASection";

import {
  defaultHeroData, HeroData,
  defaultPainPointsData, PainPointsData,
  defaultFeaturesData, FeaturesData,
  defaultHowItWorksData, HowItWorksData,
  defaultTargetSegmentsData, TargetSegmentsData,
  defaultPricingData, PricingData,
  defaultTestimonialsData, TestimonialsData,
  defaultCTAData, CTAData
} from "../defaultData";
import { defaultFAQData, FAQData } from "../FAQ";

// Define the shape of our blocks
type Props = {
  Hero: HeroData;
  PainPoints: PainPointsData;
  Features: FeaturesData;
  HowItWorks: HowItWorksData;
  TargetSegments: TargetSegmentsData;
  Pricing: PricingData;
  Testimonials: TestimonialsData;
  FAQ: FAQData;
  CTA: CTAData;
  RichText: { content: string };
};

export const config: Config<Props> = {
  components: {
    Hero: {
      fields: {
        badgeText: { type: "text" },
        headlineBlack1: { type: "text" },
        headlineBlue: { type: "text" },
        headlineBlack2: { type: "text" },
        headlineGradient: { type: "text" },
        description: { type: "textarea" },
        priceLabel: { type: "text" },
        priceValue: { type: "text" },
        buttonText: { type: "text" },
        userCountText: { type: "text" },
        salesBadgeText: { type: "text" },
        heroImageUrl: { type: "text" },
      },
      defaultProps: defaultHeroData,
      render: (props) => <HeroSection data={props} />
    },
    PainPoints: {
      fields: {
        badge: { type: "text" },
        headline: { type: "text" },
        description: { type: "textarea" },
        points: {
          type: "array",
          getItemSummary: (item: any) => item.title || "Point",
          arrayFields: {
            title: { type: "text" },
            desc: { type: "textarea" },
            icon: { type: "text" }
          }
        }
      },
      defaultProps: defaultPainPointsData,
      render: (props) => <PainPointsSection data={props} />
    },
    Features: {
      fields: {
        badge: { type: "text" },
        headline: { type: "text" },
        description: { type: "textarea" },
        ctaText: { type: "text" },
        bentoItems: {
          type: "array",
          getItemSummary: (item: any) => item.title || "Bento Item",
          arrayFields: {
            title: { type: "text" },
            desc: { type: "textarea" },
            tag: { type: "text" },
            icon: { type: "text" },
          }
        },
        smallItems: {
          type: "array",
          getItemSummary: (item: any) => item.title || "Small Item",
          arrayFields: {
            title: { type: "text" },
            desc: { type: "textarea" },
            icon: { type: "text" },
          }
        }
      },
      defaultProps: defaultFeaturesData,
      render: (props) => <FeaturesSection data={props} />
    },
    HowItWorks: {
      fields: {
        badge: { type: "text" },
        headline: { type: "text" },
        description: { type: "textarea" },
        steps: {
          type: "array",
          getItemSummary: (item: any) => item.title || "Step",
          arrayFields: {
            num: { type: "text" },
            title: { type: "text" },
            desc: { type: "textarea" }
          }
        }
      },
      defaultProps: defaultHowItWorksData,
      render: (props) => <HowItWorksSection data={props} />
    },
    TargetSegments: {
      fields: {
        headline: { type: "text" },
        description: { type: "textarea" },
        segments: {
          type: "array",
          getItemSummary: (item: any) => item.title || "Segment",
          arrayFields: {
            title: { type: "text" },
            desc: { type: "text" },
            icon: { type: "text" }
          }
        }
      },
      defaultProps: defaultTargetSegmentsData,
      render: (props) => <TargetSegmentsSection data={props} />
    },
    Pricing: {
      fields: {
        badge: { type: "text" },
        headline: { type: "text" },
        description: { type: "textarea" },
        price: { type: "text" },
        savingsText: { type: "text" },
        features: {
          type: "array",
          getItemSummary: (item: any) => item.text || "Feature",
          arrayFields: {
            text: { type: "text" }
          }
        }
      },
      // Since defaultPricingData.features is an array of strings, Puck's array field 
      // expects array of objects. We need to adapt it.
      defaultProps: {
        ...defaultPricingData,
        // @ts-ignore
        features: defaultPricingData.features.map(f => ({ text: f }))
      },
      render: (props) => {
        // Adapt back for our component
        const adaptedProps = {
          ...props,
          // @ts-ignore
          features: props.features?.map(f => f.text) || []
        };
        return <PricingSection data={adaptedProps} />;
      }
    },
    Testimonials: {
      fields: {
        badge: { type: "text" },
        headline: { type: "text" },
        items: {
          type: "array",
          getItemSummary: (item: any) => item.name || "Testimonial",
          arrayFields: {
            name: { type: "text" },
            role: { type: "text" },
            quote: { type: "textarea" }
          }
        }
      },
      defaultProps: defaultTestimonialsData,
      render: (props) => <TestimonialsSection data={props} />
    },
    FAQ: {
      fields: {
        badge: { type: "text" },
        headline: { type: "text" },
        items: {
          type: "array",
          getItemSummary: (item: any) => item.q || "FAQ",
          arrayFields: {
            q: { type: "text" },
            a: { type: "textarea" }
          }
        }
      },
      defaultProps: defaultFAQData,
      render: (props) => <FAQ data={props} />
    },
    CTA: {
      fields: {
        headline: { type: "text" },
        description: { type: "textarea" },
        buttonText: { type: "text" },
        trialText: { type: "text" },
        guaranteeText: { type: "text" }
      },
      defaultProps: defaultCTAData,
      render: (props) => <CTASection data={props} />
    },
    RichText: {
      fields: {
        content: { type: "textarea" }
      },
      defaultProps: { content: "<h1>Judul Custom</h1><p>Isi paragraf custom untuk halaman promo khusus.</p>" },
      render: (props) => (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 prose prose-slate max-w-none w-full" dangerouslySetInnerHTML={{ __html: props.content }} />
        </section>
      )
    }
  }
};
