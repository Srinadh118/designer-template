"use client";

import { useState } from "react";
import { businessData } from "@/data/business";
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, Sparkles, Check } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Residential 3BHK / 4BHK",
    location: businessData.location.city,
    budget: "₹20L – ₹40L",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Interior Design Inquiry — ${businessData.name}*\n\n` +
      `*Name:* ${formData.name || "Interested Client"}\n` +
      `*Phone:* ${formData.phone || "Not specified"}\n` +
      `*Project Type:* ${formData.projectType}\n` +
      `*City / Location:* ${formData.location}\n` +
      `*Budget Range:* ${formData.budget}\n` +
      (formData.message ? `*Notes:* ${formData.message}\n` : "") +
      `\n_Sent via ${businessData.name} Website Portal_`;
    return encodeURIComponent(text);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${businessData.contact.whatsapp}?text=${generateWhatsAppMessage()}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  const handleStandardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Emulate smooth submit & trigger WhatsApp option
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E2DBD0]">
          <div className="space-y-3">
            <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.24em] text-[#94785C] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio Consultation</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#141413] tracking-tight">
              Start Your Design Conversation
            </h2>
          </div>

          <p className="text-xs md:text-sm text-[#6B665E] max-w-md font-light leading-relaxed">
            Fill in your project details below or chat with our design team instantly on WhatsApp. We respond to all inquiries within 2 business hours.
          </p>
        </div>

        {/* Grid Layout (Left Studio Contact Info, Right Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Studio Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[#F7F5F0] border border-[#E2DBD0] rounded-xs space-y-6">
              <h3 className="font-serif text-2xl text-[#141413]">
                Studio & Atelier
              </h3>

              <div className="space-y-4 text-xs text-[#4D4943]">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#94785C] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-[#141413] block">Studio Address</span>
                    <span>{businessData.location.address}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#94785C] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-[#141413] block">Direct Consultation Line</span>
                    <a href={`tel:${businessData.contact.phone}`} className="hover:text-[#141413] underline">
                      {businessData.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-[#94785C] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-[#141413] block">Email Inquiries</span>
                    <a href={`mailto:${businessData.contact.email}`} className="hover:text-[#141413] underline">
                      {businessData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-[#94785C] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-[#141413] block">Studio Hours</span>
                    <span>{businessData.contact.hours}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-[#E2DBD0] space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-[#94785C] font-semibold block">
                  Instant Response via WhatsApp
                </span>
                <p className="text-xs text-[#6B665E]">
                  Prefer sending your floor plan or Pinterest moodboards directly? Tap below to chat immediately with our project architect.
                </p>
                <a
                  href={`https://wa.me/${businessData.contact.whatsapp}?text=${encodeURIComponent(
                    `Hello ${businessData.name}, I would like to consult with an architect about my interior space.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 w-full py-3 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1EBE5B] transition-colors rounded-xs shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Direct</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right High-Conversion Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-[#F7F5F0] border border-[#E2DBD0] rounded-xs shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#141413] text-[#FAF8F5] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-3xl text-[#141413]">
                  Thank You for Reaching Out
                </h3>
                <p className="text-sm text-[#6B665E] max-w-md mx-auto">
                  Your inquiry has been received. Our lead architect will review your project requirements and connect within 2 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleWhatsAppSubmit}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#1EBE5B] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Also Send to WhatsApp Now</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleStandardSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#141413]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DCD5C9] text-sm text-[#141413] focus:border-[#141413] focus:outline-hidden transition-colors rounded-xs"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#141413]">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DCD5C9] text-sm text-[#141413] focus:border-[#141413] focus:outline-hidden transition-colors rounded-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Project Type */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#141413]">
                      Project Scope *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DCD5C9] text-sm text-[#141413] focus:border-[#141413] focus:outline-hidden transition-colors rounded-xs"
                    >
                      <option value="Residential 3BHK / 4BHK">Residential 3BHK / 4BHK</option>
                      <option value="Luxury Villa / Independent House">Luxury Villa / Independent House</option>
                      <option value="Modular Kitchen & Dining Atelier">Modular Kitchen Atelier</option>
                      <option value="Living & Salon Renovation">Living & Salon Renovation</option>
                      <option value="Master Bedroom Suite">Master Bedroom Suite</option>
                      <option value="Commercial / Executive Office">Commercial / Executive Office</option>
                      <option value="Complete Turnkey Architecture">Complete Turnkey Architecture</option>
                    </select>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#141413]">
                      Location / City *
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      placeholder="e.g. Jubilee Hills, Hyderabad"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DCD5C9] text-sm text-[#141413] focus:border-[#141413] focus:outline-hidden transition-colors rounded-xs"
                    />
                  </div>
                </div>

                {/* Estimated Budget Range */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#141413]">
                    Estimated Investment Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DCD5C9] text-sm text-[#141413] focus:border-[#141413] focus:outline-hidden transition-colors rounded-xs"
                  >
                    <option value="₹10 Lakhs – ₹20 Lakhs">₹10 Lakhs – ₹20 Lakhs</option>
                    <option value="₹20 Lakhs – ₹40 Lakhs">₹20 Lakhs – ₹40 Lakhs</option>
                    <option value="₹40 Lakhs – ₹75 Lakhs">₹40 Lakhs – ₹75 Lakhs</option>
                    <option value="₹75 Lakhs – ₹1.5 Crore+">₹75 Lakhs – ₹1.5 Crore+</option>
                    <option value="Undecided / Open to Guidance">Undecided / Open to Guidance</option>
                  </select>
                </div>

                {/* Message / Brief */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#141413]">
                    Tell Us About Your Space (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="e.g. Handover scheduled next month; seeking warm minimalist travertine & walnut interiors..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DCD5C9] text-sm text-[#141413] focus:border-[#141413] focus:outline-hidden transition-colors rounded-xs"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    data-cursor="SUBMIT"
                    className="flex-1 inline-flex items-center justify-center space-x-2 py-4 px-6 bg-[#141413] text-[#FAF8F5] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#2B2926] transition-luxury shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Consultation Request</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="inline-flex items-center justify-center space-x-2 py-4 px-6 bg-[#25D366] text-white text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#1EBE5B] transition-colors rounded-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
