import HeroBanner from "../components/HeroBanner";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import CTABand from "../components/CTABand";
import HowWeHelp from "../components/HowWeHelp";
import ContactSection from "../components/ContactSection";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <ServicesSection />
      <WhyChooseUs />
      <CTABand />
      <HowWeHelp />
      <ContactSection />
      <ScrollToTop />
    </main>
  );
}
