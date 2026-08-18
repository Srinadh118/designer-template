"use client";

import { useState } from "react";
import Image from "next/image";
import { businessData, Service } from "@/data/business";
import { ArrowUpRight, Check, ChevronRight, Sparkles } from "lucide-react";

interface ServicesInteractiveProps {
  onOpenConsultation: () => void;
}

export default function ServicesInteractive({ onOpenConsultation }: ServicesInteractiveProps) {
  const [activeServiceId, setActiveServiceId] = useState<string>(businessData.services[0].id);

  const activeService =
    businessData.services.find((s) => s.id === activeServiceId) || businessData.services[0];

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-10 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E2DBD0]">
          <div className="space-y-3">
            <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.24em] text-[#94785C] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Disciplines</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#141413] tracking-tight">
              Interior Disciplines & Expertise
            </h2>
          </div>

          <p className="text-xs md:text-sm text-[#6B665E] max-w-md font-light leading-relaxed">
            From single bespoke interventions to holistic turnkey commissions, each service is grounded in structural discipline and aesthetic longevity.
          </p>
        </div>

        {/* Desktop Interactive Layout (Left List, Right Dynamic Preview) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Vertical Interactive Service List (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-[#E2DBD0] border-y border-[#E2DBD0]">
            {businessData.services.map((service) => {
              const isActive = activeServiceId === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`group py-6 md:py-8 cursor-pointer transition-luxury ${
                    isActive ? "opacity-100" : "opacity-60 hover:opacity-90"
                  }`}
                  data-cursor="EXPLORE"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 md:space-x-6">
                      <span className="font-mono text-xs text-[#94785C] font-semibold pt-1">
                        {service.number}
                      </span>
                      <div className="space-y-2">
                        <h3
                          className={`font-serif text-2xl md:text-3xl text-[#141413] transition-transform duration-300 ${
                            isActive ? "translate-x-2 font-medium" : "group-hover:translate-x-1"
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p className="text-xs md:text-sm text-[#5A554E] max-w-lg font-light leading-relaxed">
                          {service.shortDesc}
                        </p>

                        {/* Mobile Expandable Details */}
                        {isActive && (
                          <div className="block lg:hidden pt-4 space-y-4">
                            <div className="relative w-full h-[220px] rounded-xs overflow-hidden bg-[#E2DBD0]">
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                sizes="100vw"
                                className="object-cover object-center"
                              />
                            </div>
                            <div className="space-y-2 bg-[#F7F5F0] p-4 border border-[#E2DBD0]">
                              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#94785C]">
                                Key Deliverables
                              </span>
                              <ul className="space-y-1.5 text-xs text-[#2B2926]">
                                {service.deliverables.map((item, idx) => (
                                  <li key={idx} className="flex items-start space-x-2">
                                    <Check className="w-3.5 h-3.5 text-[#94785C] mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div
                      className={`p-2 rounded-full border transition-luxury shrink-0 ${
                        isActive
                          ? "border-[#141413] bg-[#141413] text-[#FAF8F5]"
                          : "border-[#E2DBD0] text-[#8C8478] group-hover:border-[#141413] group-hover:text-[#141413]"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Dynamic Architectural Preview (5 cols - Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32 space-y-6">
            <div className="relative w-full h-[380px] bg-[#E2DBD0] overflow-hidden rounded-xs shadow-xl border border-[#E2DBD0]">
              <Image
                key={activeService.id}
                src={activeService.image}
                alt={activeService.title}
                fill
                sizes="40vw"
                className="object-cover object-center animate-fade-in transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-[#FAF8F5]/90 backdrop-blur-xs text-[10px] uppercase tracking-[0.2em] font-semibold text-[#141413]">
                {activeService.number} / 06
              </div>
            </div>

            {/* Active Service Detailed Specification Box */}
            <div className="p-6 bg-[#F7F5F0] border border-[#E2DBD0] space-y-4 rounded-xs">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#94785C] font-semibold">
                  Scope & Deliverables
                </span>
                <p className="text-xs text-[#5A554E] leading-relaxed">
                  {activeService.fullDesc}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#E2DBD0]">
                <span className="text-[10px] uppercase tracking-wider text-[#141413] font-semibold">
                  Included in Commission:
                </span>
                <ul className="space-y-1.5 text-xs text-[#2B2926]">
                  {activeService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-[#94785C] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[#E2DBD0] flex items-center justify-between">
                <span className="text-[11px] text-[#6B665E]">
                  Ideal for: <strong className="text-[#141413] font-medium">{activeService.idealFor}</strong>
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center space-x-1 text-xs font-semibold uppercase tracking-wider text-[#94785C] hover:text-[#141413] transition-colors"
                >
                  <span>Inquire</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
