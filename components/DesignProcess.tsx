"use client";

import { useState } from "react";
import { businessData } from "@/data/business";
import { Sparkles, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export default function DesignProcess() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const steps = businessData.process;

  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-10 bg-[#F7F5F0] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E2DBD0]">
          <div className="space-y-3">
            <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.24em] text-[#94785C] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Execution Methodology</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#141413] tracking-tight">
              The Five-Phase Studio Journey
            </h2>
          </div>

          <p className="text-xs md:text-sm text-[#6B665E] max-w-md font-light leading-relaxed">
            A structured, transparent roadmap ensuring your home transitions from early sketch to final handover with zero surprises and meticulous craftsmanship.
          </p>
        </div>

        {/* Step Selector Horizontal Timeline on Desktop */}
        <div className="hidden lg:grid grid-cols-5 gap-4 border-b border-[#E2DBD0] pb-6">
          {steps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-4 rounded-xs transition-luxury relative group focus:outline-hidden ${
                  isActive ? "bg-[#FAF8F5] shadow-xs border border-[#E2DBD0]" : "hover:bg-[#EAE4DC]/50"
                }`}
                data-cursor="SELECT"
              >
                {/* Active Top Line Indicator */}
                {isActive && (
                  <div className="absolute -top-[25px] left-0 right-0 h-[2px] bg-[#141413]" />
                )}

                <div className="flex items-center justify-between text-xs font-mono text-[#94785C] mb-2">
                  <span>PHASE {step.number}</span>
                  <Clock className="w-3 h-3 text-[#6B665E]" />
                </div>

                <h3 className="font-serif text-lg text-[#141413] font-medium leading-snug">
                  {step.title}
                </h3>

                <span className="block text-[11px] text-[#6B665E] mt-1 font-light">
                  {step.duration}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase (Desktop) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 p-10 bg-[#FAF8F5] border border-[#E2DBD0] rounded-xs shadow-xs items-center">
          <div className="col-span-4 border-r border-[#E2DBD0] pr-8 space-y-4">
            <span className="text-xs font-mono text-[#94785C] uppercase tracking-widest">
              Phase {steps[activeStepIndex].number} of 05
            </span>
            <h3 className="font-serif text-3xl text-[#141413] font-normal leading-tight">
              {steps[activeStepIndex].title}
            </h3>
            <div className="inline-flex items-center space-x-2 text-xs px-3 py-1.5 bg-[#F7F5F0] border border-[#E2DBD0] text-[#141413]">
              <Clock className="w-3.5 h-3.5 text-[#94785C]" />
              <span>Timeline: <strong>{steps[activeStepIndex].duration}</strong></span>
            </div>
            <p className="text-sm text-[#5A554E] leading-relaxed pt-2">
              {steps[activeStepIndex].description}
            </p>
          </div>

          <div className="col-span-8 pl-4 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#141413] font-semibold">
                Core Deliverables in this Phase:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {steps[activeStepIndex].deliverables.map((del, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-2.5 p-3 bg-[#F7F5F0] border border-[#E2DBD0] rounded-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#94785C] mt-0.5 shrink-0" />
                    <span className="text-xs text-[#2B2926] font-medium">{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-[#F7F5F0] border-l-2 border-[#141413] space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-[#6B665E]">
                Phase Milestone
              </span>
              <p className="text-xs text-[#141413] font-medium">
                {steps[activeStepIndex].keyOutcome}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Stacked Accordion Process (Mobile & Tablet) */}
        <div className="grid grid-cols-1 gap-4 lg:hidden">
          {steps.map((step, idx) => (
            <div
              key={step.step}
              className="p-6 bg-[#FAF8F5] border border-[#E2DBD0] rounded-xs space-y-4 shadow-xs"
            >
              <div className="flex items-center justify-between border-b border-[#E2DBD0] pb-3">
                <span className="font-mono text-xs font-semibold text-[#94785C]">
                  PHASE {step.number}
                </span>
                <span className="text-xs text-[#6B665E] flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{step.duration}</span>
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-[#141413]">{step.title}</h3>
                <p className="text-xs text-[#5A554E] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-[10px] uppercase tracking-wider text-[#141413] font-semibold">
                  Deliverables:
                </span>
                <ul className="space-y-1.5 text-xs text-[#2B2926]">
                  {step.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#94785C] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-[#E2DBD0] text-[11px] text-[#6B665E]">
                <strong className="text-[#141413]">Outcome:</strong> {step.keyOutcome}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
