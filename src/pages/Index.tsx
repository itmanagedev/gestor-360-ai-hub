import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MetricsBar from "@/components/MetricsBar";
import ProblemsSection from "@/components/ProblemsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductPreview from "@/components/ProductPreview";
import HowItWorks from "@/components/HowItWorks";
import AgentsSection from "@/components/AgentsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PlansSection from "@/components/PlansSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <MetricsBar />
      <ProblemsSection />
      <FeaturesSection />
      <ProductPreview />
      <HowItWorks />
      <AgentsSection />
      <TestimonialsSection />
      <PlansSection />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
