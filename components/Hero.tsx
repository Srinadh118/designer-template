"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { businessData } from "@/data/business";
import { ArrowDown, ArrowUpRight, Compass, Sparkles } from "lucide-react";

interface HeroProps {
  onExploreProjects: () => void;
  onOpenConsultation: () => void;
}

export default function Hero({ onExploreProjects, onOpenConsultation }: HeroProps) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 14; // subtle +/- 7px
      const y = (e.clientY / innerHeight - 0.5) * 14;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 md:px-10 overflow-hidden bg-[#F7F5F0]"
    >
      {/* Subtle Architectural Grid Lines */}
      <div className="absolute inset-0 bg-architectural-grid pointer-events-none opacity-40" />

      {/* Top Meta Details & Studio Coordinates */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 text-xs text-[#6B665E] border-b border-[#E2DBD0]/70 pb-5">
        <div className="flex items-center space-x-3">
          <span className="w-2 h-2 rounded-full bg-[#94785C] animate-pulse" />
          <span className="tracking-[0.22em] uppercase font-medium text-[#141413]">
            {businessData.hero.eyebrow}
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-[11px] tracking-[0.16em] uppercase">
          <span>Est. {businessData.foundedYear}</span>
          <span className="text-[#E2DBD0]">|</span>
          <span className="flex items-center space-x-1.5">
            <Compass className="w-3.5 h-3.5 text-[#94785C]" />
            <span>{businessData.location.coordinatesText}</span>
          </span>
          <span className="text-[#E2DBD0]">|</span>
          <span>{businessData.location.city}, India</span>
        </div>
      </div>

      {/* Main Architectural Hero Composition */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Editorial Typography Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8 animate-text-reveal">
          <div className="space-y-2">
            <span className="inline-flex items-center space-x-2 text-[11px] tracking-[0.26em] uppercase text-[#94785C] font-semibold">
              <Sparkles className="w-3 h-3" />
              <span>Bespoke Living Environments</span>
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4rem] leading-[1.06] text-[#141413] tracking-tight">
              <span className="block font-light italic">Spaces</span>
              <span className="block font-normal">Designed</span>
              <span className="block font-medium">Around You.</span>
            </h1>
          </div>

          <p className="text-sm md:text-base text-[#5A554E] leading-relaxed max-w-md font-light">
            {businessData.hero.supportingText}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onExploreProjects}
              data-cursor="EXPLORE"
              className="inline-flex items-center justify-center space-x-3 px-7 py-4 bg-[#141413] text-[#FAF8F5] text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#2B2926] active:scale-[0.99] transition-luxury shadow-md group"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onOpenConsultation}
              data-cursor="CONSULT"
              className="inline-flex items-center justify-center space-x-3 px-6 py-4 border border-[#141413] text-[#141413] text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#141413] hover:text-[#FAF8F5] transition-luxury"
            >
              <span>Get a Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#E2DBD0]">
            <div>
              <div className="font-serif text-2xl md:text-3xl text-[#141413] font-medium">
                {businessData.stats[1].value}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#6B665E]">
                {businessData.stats[1].label}
              </div>
            </div>
            <div>
              <div className="font-serif text-2xl md:text-3xl text-[#141413] font-medium">
                {businessData.stats[0].value}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#6B665E]">
                {businessData.stats[0].label}
              </div>
            </div>
          </div>
        </div>

        {/* Right Architectural Image Showcase (7 cols) with Parallax & Floating Card */}
        <div className="lg:col-span-7 relative">
          <div
            className="relative w-full h-[380px] sm:h-[460px] lg:h-[560px] overflow-hidden rounded-xs bg-[#E2DBD0] shadow-2xl transition-transform duration-700 ease-out will-change-transform animate-space-reveal"
            style={{
              transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
            }}
          >
            <Image
              src={businessData.hero.heroImage}
              alt="Luxury Interior Architecture Living Space"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
            />
            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141413]/40 via-transparent to-transparent pointer-events-none" />

            {/* Floating Architectural Badge Card */}
            <div
              className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs p-4 sm:p-5 bg-[#FAF8F5]/95 backdrop-blur-md border border-[#FAF8F5]/30 text-[#141413] shadow-lg transition-transform duration-500 hover:-translate-y-1"
              data-cursor="VIEW"
              onClick={onExploreProjects}
            >
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-[#94785C] font-semibold mb-1">
                <span>{businessData.hero.featuredProjectBadge.tag}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#94785C]" />
              </div>
              <h3 className="font-serif text-base md:text-lg font-medium text-[#141413] leading-snug">
                {businessData.hero.featuredProjectBadge.title}
              </h3>
              <p className="text-[11px] text-[#6B665E] tracking-wide mt-0.5">
                {businessData.hero.featuredProjectBadge.location}
              </p>
              <div className="text-[10px] text-[#9E9280] font-mono mt-2 pt-2 border-t border-[#E2DBD0]">
                {businessData.hero.featuredProjectBadge.specs}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Scroll Cue */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pt-6 border-t border-[#E2DBD0]/60 text-xs text-[#6B665E]">
        <button
          onClick={onExploreProjects}
          className="flex items-center space-x-2 text-[11px] tracking-[0.2em] uppercase hover:text-[#141413] transition-colors group"
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#94785C] group-hover:translate-y-1 transition-transform" />
          <span>Scroll to Discover Architecture</span>
        </button>

        <span className="hidden sm:inline-block tracking-widest text-[10px] text-[#9E9280] font-mono">
          RESIDENTIAL · VILLAS · ATELIERS
        </span>
      </div>
    </section>
  );
}
