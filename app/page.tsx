import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import SolutionTabs from "@/components/SolutionTabs";
import PersonaCards from "@/components/PersonaCards";
import Testimonials from "@/components/Testimonials";
import ScaleAccordion from "@/components/ScaleAccordion";
import Capabilities from "@/components/Capabilities";
import Security from "@/components/Security";
import Resources from "@/components/Resources";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="main-content">
        <Hero />
        <LogoStrip />
        <SolutionTabs />
        <PersonaCards />
        <Testimonials />
        <ScaleAccordion />
        <Capabilities />
        <Security />
        <Resources />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
