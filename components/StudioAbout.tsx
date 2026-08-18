"use client";

import Image from "next/image";
import { businessData } from "@/data/business";
import { Sparkles, CheckCircle2, Award, Quote } from "lucide-react";

export default function StudioAbout() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10 bg-[#F7F5F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Top Header Tag */}
        <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.24em] text-[#94785C] font-semibold border-b border-[#E2DBD0] pb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Studio Philosophy</span>
        </div>

        {/* Split Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Composition (Dual overlapping editorial images) */}
          <div className="lg:col-span-6 relative">
            {/* Primary Large Studio Image */}
            <div className="relative w-full h-[440px] sm:h-[520px] bg-[#E2DBD0] overflow-hidden rounded-xs shadow-xl">
              <Image
                src={businessData.about.imageMain}
                alt="Studio Arche Interior Architecture Craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-1000"
              />
            </div>

            {/* Overlapping Secondary Detail Card */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-3/5 h-[240px] bg-[#FAF8F5] p-3 shadow-2xl border border-[#E2DBD0] rounded-xs">
              <div className="relative w-full h-full overflow-hidden bg-[#E2DBD0]">
                <Image
                  src={businessData.about.imageSecondary}
                  alt="Architectural Material Details & Textures"
                  fill
                  sizes="30vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Narrative & Philosophy */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#6B665E]">
                {businessData.about.subheadline}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#141413] leading-[1.12]">
                {businessData.about.headline}
              </h2>
            </div>

            <div className="space-y-4 text-sm md:text-base text-[#4D4943] font-light leading-relaxed">
              <p>{businessData.about.narrativeP1}</p>
              <p>{businessData.about.narrativeP2}</p>
            </div>

            {/* Editorial Architect Quote */}
            <div className="p-6 bg-[#FAF8F5] border-l-2 border-[#94785C] space-y-2 rounded-r-xs shadow-xs">
              <Quote className="w-5 h-5 text-[#94785C]/60" />
              <p className="font-serif text-base sm:text-lg italic text-[#141413]">
                &ldquo;{businessData.about.quote}&rdquo;
              </p>
              <span className="block text-[11px] uppercase tracking-widest text-[#6B665E]">
                — {businessData.about.quoteAuthor}
              </span>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#94785C] mt-0.5 shrink-0" />
                <span className="text-xs text-[#2B2926]">
                  Tactile, authentic natural materials (travertine, teak, brass)
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#94785C] mt-0.5 shrink-0" />
                <span className="text-xs text-[#2B2926]">
                  Acoustically calibrated and circadian lighting schemes
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#94785C] mt-0.5 shrink-0" />
                <span className="text-xs text-[#2B2926]">
                  Millimeter-precision 3D visualizations before execution
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#94785C] mt-0.5 shrink-0" />
                <span className="text-xs text-[#2B2926]">
                  Single-point project engineering & turnkey accountability
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Credibility Statistics Grid */}
        <div className="pt-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 p-8 sm:p-12 bg-[#FAF8F5] border border-[#E2DBD0] rounded-xs shadow-xs">
            {businessData.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1.5 text-center sm:text-left">
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141413] font-medium tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-[#141413] font-semibold">
                  {stat.label}
                </div>
                {stat.note && (
                  <p className="text-[11px] text-[#6B665E] font-light leading-snug">
                    {stat.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Transparent Verification Disclaimer */}
          <div className="flex items-center justify-between text-[11px] text-[#8C8478] px-2 pt-3">
            <span className="flex items-center space-x-1">
              <Award className="w-3 h-3 text-[#94785C]" />
              <span>Verified studio project portfolio & metrics</span>
            </span>
            <span className="hidden sm:inline font-mono">CLIENT METRIC AUDIT 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
