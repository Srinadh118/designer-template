"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Project, businessData } from "@/data/business";
import { X, MessageCircle, ArrowRight, MapPin, Calendar, Layers, Maximize2 } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export default function ProjectModal({ project, onClose, onOpenConsultation }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hello ${businessData.name}, I am interested in discussing a project inspired by "${project.title}" (${project.category} · ${project.location}).`
    );
    window.open(`https://wa.me/${businessData.contact.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#141413]/80 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-[#FAF8F5] text-[#141413] shadow-2xl overflow-y-auto no-scrollbar border border-[#E2DBD0] rounded-xs flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E2DBD0]">
          <div className="flex items-center space-x-3">
            <span className="text-[10px] tracking-[0.24em] font-semibold text-[#94785C] uppercase">
              {project.category}
            </span>
            <span className="text-[#DCD5C9]">/</span>
            <span className="text-xs text-[#6B665E]">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            data-cursor="CLOSE"
            className="p-2 rounded-full border border-[#E2DBD0] hover:bg-[#141413] hover:text-[#FAF8F5] transition-luxury focus:outline-hidden"
            aria-label="Close project modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-10 space-y-10">
          {/* Title & Metadata Header */}
          <div className="space-y-4">
            <h2
              id="modal-project-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#141413] leading-tight"
            >
              {project.title}
            </h2>

            <div className="flex flex-wrap gap-4 sm:gap-8 text-xs text-[#6B665E] pt-2 border-t border-[#E2DBD0]">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#94785C]" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Maximize2 className="w-3.5 h-3.5 text-[#94785C]" />
                <span>{project.area}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#94785C]" />
                <span>Completed {project.year}</span>
              </div>
            </div>
          </div>

          {/* Primary Hero Image */}
          <div className="relative w-full h-[320px] sm:h-[460px] md:h-[520px] overflow-hidden bg-[#E2DBD0]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1000px"
              className="object-cover object-center"
            />
          </div>

          {/* Narrative & Specifications Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#94785C] font-semibold">
                Architectural Concept & Narrative
              </h3>
              <p className="text-base sm:text-lg text-[#2B2926] leading-relaxed font-serif italic">
                &ldquo;{project.description}&rdquo;
              </p>
              <div className="space-y-2 pt-2">
                <h4 className="text-xs uppercase tracking-wider text-[#141413] font-semibold">
                  Client Brief
                </h4>
                <p className="text-sm text-[#5A554E] leading-relaxed">
                  {project.brief}
                </p>
              </div>
            </div>

            {/* Right Materiality Palette */}
            <div className="lg:col-span-5 p-6 bg-[#F7F5F0] border border-[#E2DBD0] space-y-5 rounded-xs">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#141413] font-semibold">
                <Layers className="w-4 h-4 text-[#94785C]" />
                <span>Materiality & Textures</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {project.materials.map((mat) => (
                  <span
                    key={mat}
                    className="px-3 py-1.5 text-xs bg-[#FAF8F5] border border-[#DCD5C9] text-[#2B2926] rounded-xs"
                  >
                    {mat}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-[#DCD5C9] space-y-3">
                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-[#141413] text-[#FAF8F5] text-xs font-medium tracking-wider uppercase hover:bg-[#2B2926] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire via WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenConsultation();
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 border border-[#141413] text-[#141413] text-xs font-medium tracking-wider uppercase hover:bg-[#FAF8F5] transition-colors"
                >
                  <span>Book Studio Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Gallery Images */}
          {project.secondaryImages && project.secondaryImages.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-[#E2DBD0]">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#94785C] font-semibold">
                Detail Perspectives & Spatial Flow
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.secondaryImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative w-full h-[260px] sm:h-[320px] bg-[#E2DBD0] overflow-hidden rounded-xs"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} perspective ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
