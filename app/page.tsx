import Starfield from "@/components/Starfield";
import ScrollReveal from "@/components/ScrollReveal";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Showcase from "@/components/Showcase";
import Features from "@/components/Features";
import AIAssistant from "@/components/AIAssistant";
import Why from "@/components/Why";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Forms from "@/components/Forms";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Starfield />
      <Nav />
      <main>
        <Hero />
        <Logos />
        <Showcase />
        <Features />
        <AIAssistant />
        <Why />
        <Stats />
        <Timeline />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Forms />
        <CTA />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
