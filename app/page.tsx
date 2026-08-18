"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGallery from "@/components/ProjectGallery";
import StudioAbout from "@/components/StudioAbout";
import ServicesInteractive from "@/components/ServicesInteractive";
import DesignProcess from "@/components/DesignProcess";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BrandCustomizerModal from "@/components/BrandCustomizerModal";
import { Sliders } from "lucide-react";

export default function Home() {
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#F7F5F0] text-[#141413] flex flex-col">
      {/* Desktop Smooth Magnetic Cursor */}
      <CustomCursor />

      {/* Sticky Architectural Navigation */}
      <Navbar onOpenConsultation={() => scrollToSection("#contact")} />

      {/* Signature Space Revealed Hero Section */}
      <Hero
        onExploreProjects={() => scrollToSection("#projects")}
        onOpenConsultation={() => scrollToSection("#contact")}
      />

      {/* Curated Architectural Asymmetric Portfolio */}
      <ProjectGallery onOpenConsultation={() => scrollToSection("#contact")} />

      {/* Studio Philosophy, Narrative & Verified Credibility Metrics */}
      <StudioAbout />

      {/* Interactive Architectural Services with Hover Visuals */}
      <ServicesInteractive onOpenConsultation={() => scrollToSection("#contact")} />

      {/* 5-Step Narrative Design & Execution Process */}
      <DesignProcess />

      {/* Client Testimonials & Trust Badges */}
      <Testimonials />

      {/* Full-width Architectural Atmosphere Closing CTA */}
      <FinalCTA onOpenConsultation={() => scrollToSection("#contact")} />

      {/* High-Conversion Consultation & WhatsApp Direct Form */}
      <ContactSection />

      {/* Minimal Architectural Footer */}
      <Footer />

      {/* Mobile-first Floating WhatsApp Direct Consultation Action */}
      <FloatingWhatsApp />

      {/* Template Rebranding Preview Trigger (For Client Presentations & White-Labeling) */}
      <div className="fixed bottom-6 left-6 z-30 hidden md:block">
        <button
          onClick={() => setIsCustomizerOpen(true)}
          data-cursor="CONFIG"
          className="flex items-center space-x-2 px-3.5 py-2 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#E2DBD0] text-[#141413] text-[11px] font-mono uppercase tracking-wider shadow-md hover:bg-[#141413] hover:text-[#FAF8F5] transition-luxury rounded-xs"
          title="Rebrand / Configure Template"
        >
          <Sliders className="w-3.5 h-3.5 text-[#94785C]" />
          <span>Rebrand Config</span>
        </button>
      </div>

      {/* Brand Customizer / Rebranding Guide Modal */}
      <BrandCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
      />
    </main>
  );
}
