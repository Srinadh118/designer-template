"use client";

import { useState } from "react";
import { businessData } from "@/data/business";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = (customText?: string) => {
    const text = customText || `Hello ${businessData.name}, I would like to inquire about an interior design consultation.`;
    window.open(`https://wa.me/${businessData.contact.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {/* Quick Popup Prompt on Mobile / Desktop */}
      {isOpen && (
        <div className="bg-[#FAF8F5] border border-[#E2DBD0] p-4 rounded-xs shadow-2xl max-w-xs text-[#141413] space-y-3 animate-fade-in">
          <div className="flex items-center justify-between border-b border-[#E2DBD0] pb-2">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                {businessData.shortName} Studio Direct
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#6B665E] hover:text-[#141413]"
              aria-label="Close WhatsApp prompt"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-[#5A554E] leading-relaxed">
            Have floor plans or looking for an instant estimate? Chat directly with our principal design team.
          </p>

          <div className="space-y-1.5 pt-1">
            <button
              onClick={() => openWhatsApp("Hi, I want to discuss a 3BHK/4BHK residential interior project.")}
              className="w-full text-left px-3 py-2 text-[11px] bg-[#F7F5F0] hover:bg-[#EAE4DC] text-[#141413] border border-[#E2DBD0] rounded-xs transition-colors"
            >
              &ldquo;Consult for Residential 3BHK/4BHK&rdquo;
            </button>

            <button
              onClick={() => openWhatsApp("Hi, I would like to inquire about Villa architecture & turnkey execution.")}
              className="w-full text-left px-3 py-2 text-[11px] bg-[#F7F5F0] hover:bg-[#EAE4DC] text-[#141413] border border-[#E2DBD0] rounded-xs transition-colors"
            >
              &ldquo;Inquire about Villa Architecture&rdquo;
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        data-cursor="WHATSAPP"
        className="flex items-center space-x-2.5 px-4 py-3 bg-[#141413] hover:bg-[#2B2926] text-[#FAF8F5] shadow-2xl border border-[#FAF8F5]/20 rounded-full transition-luxury group active:scale-95"
        aria-label="Toggle WhatsApp Consultation"
      >
        <div className="relative">
          <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#25D366]" />
        </div>
        <span className="text-[11px] uppercase tracking-wider font-semibold hidden sm:inline-block">
          Instant WhatsApp
        </span>
      </button>
    </div>
  );
}
