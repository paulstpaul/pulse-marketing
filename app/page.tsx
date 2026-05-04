import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import ColorSection from "@/components/sections/ColorSection";
import TypographySection from "@/components/sections/TypographySection";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import HowItWorks from "@/components/sections/HowItWorks";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <ColorSection />
        <TypographySection />
        <Features />
        <About />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
