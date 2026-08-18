"use client";

import Image from "next/image";
import { businessData } from "@/data/business";
import { ArrowUpRight, MessageCircle, Phone, Sparkles } from "lucide-react";

interface FinalCTAProps {
  onOpenConsultation: () => void;
}

export default function FinalCTA({ onOpenConsultation }: FinalCTAProps) {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello ${businessData.name}, I would like to schedule an interior design consultation for my space.`
    );
    window.open(`https://wa.me/${businessData.contact.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <section className="relative py-28 md:py-36 px-6 md:px-10 overflow-hidden bg-[#141413] text-[#FAF8F5]">
      {/* Background Architectural Atmosphere Image */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity">
        <Image
          src={businessData.hero.heroImage}
          alt="Architectural Interior Sanctuary"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
      </div>

      {/* Dark Gradient Vignette for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-[#141413]/80 to-[#141413] z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.28em] text-[#C7BDAE] font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#94785C]" />
          <span>Begin Your Transformation</span>
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.12] tracking-tight">
          Let&apos;s create a space <br className="hidden sm:block" />
          <span className="italic font-light text-[#C7BDAE]">you&apos;ll love coming home to.</span>
        </h2>

        <p className="text-sm md:text-base text-[#FAF8F5]/70 max-w-xl mx-auto font-light leading-relaxed">
          Whether you have architect floor plans ready or are exploring early inspirations, we are here to listen and guide your space toward timeless elegance.
        </p>

        {/* Action Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenConsultation}
            data-cursor="START"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#FAF8F5] text-[#141413] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#C7BDAE] active:scale-[0.99] transition-luxury shadow-xl"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={openWhatsApp}
            data-cursor="CHAT"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 border border-[#FAF8F5]/40 text-[#FAF8F5] text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#FAF8F5]/10 transition-luxury"
          >
            <MessageCircle className="w-4 h-4 text-[#94785C]" />
            <span>Chat on WhatsApp</span>
          </button>

          <a
            href={`tel:${businessData.contact.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 text-xs tracking-[0.16em] uppercase text-[#FAF8F5]/70 hover:text-[#FAF8F5] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{businessData.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
