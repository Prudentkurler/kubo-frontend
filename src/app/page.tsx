import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { FeatureBento } from '@/components/sections/FeatureBento';
import { HowItWorksCarousel } from '@/components/sections/HowItWorksCarousel';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';
import contentData from '@/data/content.json';
import { Feature, WorkflowStep, NewsArticle } from '@/types';
import { StatsSection } from '@/components/sections/StatsSection';
import { NewsPreview } from '@/components/sections/NewsPreview';

export default function HomePage() {
  const heroData = {
    heading: 'AI Radiology for the Real World',
    subheading: 'Precision-driven chest X-ray insights designed for clinicians. Built for clinical use, HIPAA-ready, GDPR support.',
    primaryCTA: {
      label: 'Request Early Access',
      href: '/contact',
      variant: 'primary' as const,
    },
    secondaryCTA: {
      label: 'View Demo',
      href: '/demo',
      variant: 'secondary' as const,
    },
    heroImage: '/images/hero-main.jpg',
    alt: 'HealthTech4Africa AI Radiology Platform',
  };

  return (
    <main id="main-content">
      <Navbar />
      
      <Hero {...heroData} />
      
      <FeatureBento features={contentData.features as Feature[]} />
      
      <HowItWorksCarousel steps={contentData.workflowSteps as WorkflowStep[]} />
      
      <StatsSection />
      
      <NewsPreview articles={contentData.news as NewsArticle[]} />
      
      <CTASection />
      
      <Footer />
    </main>
  );
}
