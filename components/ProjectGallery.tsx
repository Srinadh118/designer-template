"use client";

import { useState } from "react";
import Image from "next/image";
import { businessData, Project } from "@/data/business";
import { ArrowUpRight, Filter, Sparkles } from "lucide-react";
import ProjectModal from "./ProjectModal";

interface ProjectGalleryProps {
  onOpenConsultation: () => void;
}

export default function ProjectGallery({ onOpenConsultation }: ProjectGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = [
    "All",
    "Residential",
    "Villas",
    "Modular Kitchens",
    "Living Spaces",
    "Commercial",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? businessData.projects
      : businessData.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-10 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[#E2DBD0]">
          <div className="space-y-3 max-w-xl">
            <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.24em] text-[#94785C] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Portfolio</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#141413] tracking-tight">
              Curated Sanctuaries & Architectural Residences
            </h2>
          </div>

          <p className="text-xs md:text-sm text-[#6B665E] max-w-sm font-light leading-relaxed">
            Every residence is crafted through architectural discipline, bespoke material curation, and an uncompromising focus on everyday tranquility.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-wider text-[#6B665E] mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Category:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs tracking-wider uppercase transition-luxury rounded-none ${
                  selectedCategory === cat
                    ? "bg-[#141413] text-[#FAF8F5]"
                    : "bg-[#F7F5F0] text-[#5A554E] hover:bg-[#EAE4DC] hover:text-[#141413] border border-[#E2DBD0]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Editorial Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {filteredProjects.map((project, index) => {
            // Asymmetric layout logic for high-end editorial rhythm
            let colSpan = "md:col-span-6";
            let heightClass = "h-[420px] sm:h-[480px]";

            if (index % 5 === 0) {
              colSpan = "md:col-span-8";
              heightClass = "h-[460px] sm:h-[540px]";
            } else if (index % 5 === 1) {
              colSpan = "md:col-span-4";
              heightClass = "h-[460px] sm:h-[540px]";
            } else if (index % 5 === 2) {
              colSpan = "md:col-span-4";
              heightClass = "h-[400px] sm:h-[460px]";
            } else if (index % 5 === 3) {
              colSpan = "md:col-span-4";
              heightClass = "h-[400px] sm:h-[460px]";
            } else if (index % 5 === 4) {
              colSpan = "md:col-span-4";
              heightClass = "h-[400px] sm:h-[460px]";
            }

            return (
              <article
                key={project.id}
                className={`${colSpan} group flex flex-col space-y-4 cursor-pointer`}
                onClick={() => setActiveProjectModal(project)}
                data-cursor="VIEW"
              >
                {/* Project Image Container */}
                <div
                  className={`relative w-full ${heightClass} overflow-hidden bg-[#E2DBD0] shadow-xs rounded-xs`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Dark subtle overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141413]/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#FAF8F5]/90 backdrop-blur-xs text-[10px] uppercase tracking-[0.2em] font-medium text-[#141413]">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Details (Mobile/Hover) */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-[#FAF8F5]">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#DCD5C9] font-mono">
                        {project.area} · {project.year}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#FAF8F5] font-normal leading-snug">
                        {project.title}
                      </h3>
                    </div>

                    <div className="p-2.5 rounded-full bg-[#FAF8F5] text-[#141413] group-hover:bg-[#94785C] group-hover:text-[#FAF8F5] transition-luxury shadow-md transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Sub-Card Metadata */}
                <div className="flex items-center justify-between text-xs text-[#6B665E] px-1">
                  <span>{project.location}</span>
                  <span className="flex items-center space-x-1 text-[#141413] group-hover:text-[#94785C] font-medium transition-colors">
                    <span className="tracking-wider uppercase text-[11px]">View Project Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Portfolio CTA Note */}
        <div className="p-8 sm:p-10 bg-[#F7F5F0] border border-[#E2DBD0] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#141413]">
              Have a bespoke space in mind?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B665E] mt-1 font-light">
              We take on a limited number of residential and villa commissions each quarter to ensure uncompromising craftsmanship.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            data-cursor="CONSULT"
            className="px-6 py-3.5 bg-[#141413] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#2B2926] transition-luxury whitespace-nowrap"
          >
            Discuss Your Space
          </button>
        </div>
      </div>

      {/* Shared-Element Project Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onOpenConsultation={onOpenConsultation}
      />
    </section>
  );
}
