"use client";

import { useState, useEffect } from "react";
import { businessData } from "@/data/business";
import { MessageCircle, Menu, X, ArrowUpRight, Phone } from "lucide-react";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Portfolio", href: "#projects" },
    { name: "The Studio", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Stories", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello ${businessData.name}, I came across your portfolio and would like to inquire about an interior design project.`
    );
    window.open(`https://wa.me/${businessData.contact.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#F7F5F0]/90 backdrop-blur-md border-b border-[#E2DBD0] py-3.5 shadow-xs"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Studio Brand / Logo */}
          <a
            href="#"
            className="group flex flex-col focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#141413]"
            aria-label={`${businessData.name} Home`}
          >
            <span className="font-serif text-xl md:text-2xl font-normal tracking-[0.22em] text-[#141413] group-hover:opacity-80 transition-opacity">
              {businessData.name}
            </span>
            <span className="text-[9px] tracking-[0.28em] text-[#6B665E] uppercase -mt-0.5">
              {businessData.location.city} · Architecture
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-9" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-[13px] tracking-[0.14em] uppercase text-[#47443F] hover:text-[#141413] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#141413] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Quick WhatsApp Action */}
            <button
              onClick={openWhatsApp}
              className="p-2.5 rounded-full border border-[#E2DBD0] hover:border-[#141413] text-[#141413] hover:bg-[#141413] hover:text-[#FAF8F5] transition-luxury focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#141413]"
              title="Chat on WhatsApp"
              aria-label="Direct WhatsApp Chat"
            >
              <MessageCircle className="w-4 h-4" />
            </button>

            {/* Primary Consultation CTA */}
            <button
              onClick={() => {
                if (onOpenConsultation) {
                  onOpenConsultation();
                } else {
                  handleNavClick("#contact");
                }
              }}
              data-cursor="START"
              className="inline-flex items-center space-x-2 px-5 py-2.5 text-[12px] tracking-[0.18em] uppercase font-medium bg-[#141413] text-[#FAF8F5] hover:bg-[#292826] active:scale-[0.98] transition-luxury shadow-xs"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={openWhatsApp}
              className="p-2 rounded-full border border-[#E2DBD0] text-[#141413]"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#141413] focus:outline-hidden"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[#F7F5F0] flex flex-col justify-between p-8 transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E2DBD0]">
          <span className="font-serif text-xl tracking-[0.2em]">{businessData.name}</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-full border border-[#E2DBD0] text-[#141413]"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col space-y-6 my-auto py-8">
          {navLinks.map((link, idx) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="flex items-center justify-between text-left group py-1"
            >
              <span className="text-xs font-mono text-[#8C8478] tracking-widest">
                0{idx + 1}
              </span>
              <span className="font-serif text-3xl text-[#141413] group-hover:translate-x-2 transition-transform">
                {link.name}
              </span>
              <ArrowUpRight className="w-5 h-5 text-[#8C8478] group-hover:text-[#141413] transition-colors" />
            </button>
          ))}
        </nav>

        {/* Drawer Footer Actions */}
        <div className="pt-6 border-t border-[#E2DBD0] space-y-4">
          <div className="flex items-center justify-between text-xs text-[#6B665E]">
            <span>{businessData.location.city}, India</span>
            <span>{businessData.contact.phoneDisplay}</span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={openWhatsApp}
              className="flex items-center justify-center space-x-2 py-3 px-4 rounded-none border border-[#141413] text-xs font-medium uppercase tracking-wider text-[#141413] hover:bg-[#141413] hover:text-[#FAF8F5] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
            <a
              href={`tel:${businessData.contact.phone}`}
              className="flex items-center justify-center space-x-2 py-3 px-4 rounded-none bg-[#141413] text-[#FAF8F5] text-xs font-medium uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
