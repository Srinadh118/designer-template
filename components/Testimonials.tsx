"use client";

import { useState } from "react";
import { businessData } from "@/data/business";
import { Quote, Star, Sparkles, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = businessData.testimonials;
  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 md:px-10 bg-[#FAF8F5] relative">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.24em] text-[#94785C] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Stories</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#141413] tracking-tight">
            Sanctuaries We Have Brought to Life
          </h2>
        </div>

        {/* Editorial Single-Focus Testimonial Card */}
        <div className="p-8 sm:p-12 md:p-16 bg-[#F7F5F0] border border-[#E2DBD0] rounded-xs shadow-xs space-y-8 relative">
          <div className="flex items-center justify-between">
            {/* Star Rating */}
            <div className="flex items-center space-x-1 text-[#94785C]">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            <Quote className="w-8 h-8 text-[#E2DBD0]" />
          </div>

          {/* Big Editorial Quote */}
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl font-light italic text-[#141413] leading-relaxed">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Client Attribution */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#E2DBD0]">
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-serif text-xl font-medium text-[#141413]">
                  {current.client}
                </h3>
                <span className="inline-flex items-center space-x-1 text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#FAF8F5] border border-[#DCD5C9] text-[#94785C]">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Project</span>
                </span>
              </div>
              <p className="text-xs text-[#6B665E] mt-0.5">
                {current.projectType} · {current.location}
              </p>
            </div>

            {/* Navigation Carousel Controls */}
            <div className="flex items-center space-x-3">
              <span className="text-xs font-mono text-[#8C8478] mr-2">
                0{currentIndex + 1} / 0{testimonials.length}
              </span>

              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full border border-[#E2DBD0] hover:border-[#141413] hover:bg-[#141413] hover:text-[#FAF8F5] transition-luxury focus:outline-hidden"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                className="p-2.5 rounded-full border border-[#E2DBD0] hover:border-[#141413] hover:bg-[#141413] hover:text-[#FAF8F5] transition-luxury focus:outline-hidden"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs text-[#6B665E] pt-4">
          <div className="p-4 bg-[#FAF8F5] border border-[#E2DBD0]/60">
            <span className="block font-serif text-lg text-[#141413] font-medium">100% Fixed BOQ</span>
            <span>Zero hidden escalation</span>
          </div>
          <div className="p-4 bg-[#FAF8F5] border border-[#E2DBD0]/60">
            <span className="block font-serif text-lg text-[#141413] font-medium">10-Year Warranty</span>
            <span>On all bespoke millwork</span>
          </div>
          <div className="p-4 bg-[#FAF8F5] border border-[#E2DBD0]/60">
            <span className="block font-serif text-lg text-[#141413] font-medium">On-Time Handover</span>
            <span>Penalized milestone guarantee</span>
          </div>
          <div className="p-4 bg-[#FAF8F5] border border-[#E2DBD0]/60">
            <span className="block font-serif text-lg text-[#141413] font-medium">Single Point Lead</span>
            <span>Dedicated studio architect</span>
          </div>
        </div>
      </div>
    </section>
  );
}
