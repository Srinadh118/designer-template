"use client";

import { useState } from "react";
import { businessData } from "@/data/business";
import { Sliders, X, Check, Copy, Sparkles, RefreshCw } from "lucide-react";

interface BrandCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrandCustomizerModal({ isOpen, onClose }: BrandCustomizerModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyCodeSnippet = () => {
    const snippet = `// To rebrand this template, simply edit data/business.ts:
export const businessData = {
  name: "YOUR STUDIO NAME",
  tagline: "Spaces Designed Around You",
  location: { city: "Your City", address: "..." },
  contact: { whatsapp: "91XXXXXXXXXX", phone: "..." },
  // Add your custom projects, stats, & services!
};`;
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#141413]/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF8F5] text-[#141413] p-6 sm:p-8 rounded-xs shadow-2xl border border-[#E2DBD0] space-y-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#E2DBD0] pb-4">
          <div className="flex items-center space-x-2">
            <Sliders className="w-5 h-5 text-[#94785C]" />
            <h3 className="font-serif text-2xl font-normal text-[#141413]">
              Template Rebranding & Modular Architecture
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full border border-[#E2DBD0] text-[#6B665E] hover:text-[#141413]"
            aria-label="Close customizer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-[#5A554E] leading-relaxed">
          This template is engineered with a <strong>100% modular content layer</strong> in <code className="px-1.5 py-0.5 bg-[#F7F5F0] border border-[#E2DBD0] text-[#94785C] font-mono text-xs">data/business.ts</code>. You can customize the studio name, typography, phone/WhatsApp, projects, services, verified stats, and city without writing or touching any component code.
        </p>

        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-[#141413]">
            What can be customized in 60 seconds:
          </h4>
          <div className="grid grid-cols-2 gap-3 text-xs text-[#4D4943]">
            <div className="p-3 bg-[#F7F5F0] border border-[#E2DBD0] rounded-xs">
              <span className="font-semibold text-[#141413] block">Studio Branding</span>
              <span>Name, tagline, founding year, coordinates</span>
            </div>
            <div className="p-3 bg-[#F7F5F0] border border-[#E2DBD0] rounded-xs">
              <span className="font-semibold text-[#141413] block">Contact & WhatsApp</span>
              <span>Phone number, email, direct chat prompts</span>
            </div>
            <div className="p-3 bg-[#F7F5F0] border border-[#E2DBD0] rounded-xs">
              <span className="font-semibold text-[#141413] block">Project Portfolio</span>
              <span>Images, materials, dimensions, categories</span>
            </div>
            <div className="p-3 bg-[#F7F5F0] border border-[#E2DBD0] rounded-xs">
              <span className="font-semibold text-[#141413] block">Verified Stats</span>
              <span>Projects count, years experience, cities</span>
            </div>
          </div>
        </div>

        {/* Rebranding snippet */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-[#6B665E]">
            <span>Modular Data File: <code className="text-[#141413] font-mono">data/business.ts</code></span>
            <button
              onClick={handleCopyCodeSnippet}
              className="flex items-center space-x-1 text-[#94785C] hover:text-[#141413] font-medium"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy config snippet</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-4 bg-[#141413] text-[#FAF8F5] text-xs font-mono rounded-xs overflow-x-auto">
{`export const businessData: BusinessConfig = {
  name: "${businessData.name}",
  tagline: "${businessData.tagline}",
  location: { city: "${businessData.location.city}", address: "..." },
  contact: { whatsapp: "${businessData.contact.whatsapp}", phone: "..." },
  stats: [ /* customize your real metrics */ ],
  projects: [ /* add your studio's photography */ ],
};`}
          </pre>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#141413] text-[#FAF8F5] text-xs uppercase tracking-wider font-medium hover:bg-[#2B2926]"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
