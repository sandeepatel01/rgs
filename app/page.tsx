import ChooseRG from "@/components/home/ChooseRG";
import CTASection from "@/components/home/CTASection";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ChooseRG />
      <CTASection />
    </>
  );
};

export default Home;
