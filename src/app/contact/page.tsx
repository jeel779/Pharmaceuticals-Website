import React from "react";
import { Mail, Phone, MapPin, Globe2, HelpCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { COMPANY_INFO } from "@/data/products";

export const metadata = {
  title: "Contact Us | Priyan Pharmaceuticals Export Desk",
  description: "Get in touch with Priyan Pharmaceuticals for B2B export inquiries, pharmaceutical product quotes, regulatory dossier support, and international supply partnerships.",
};

export default function ContactPage() {
  const faqs = [
    {
      q: "What product categories does Priyan Pharmaceuticals export?",
      a: "We export pharmaceutical finished products (oral solids, injectables, liquids, ointments), nutraceuticals and food supplements, cosmetics and skincare, surgical products, APIs and excipients, pellets, and intermediates.",
    },
    {
      q: "Do you provide regulatory CTD dossiers and Certificates of Analysis (COA)?",
      a: "Yes, technical documentation including Certificates of Analysis (COA), finished product specifications, and CTD/eCTD dossier support can be provided according to target market requirements.",
    },
    {
      q: "Where are the products manufactured?",
      a: "Products are manufactured at appropriate regulatory-approved partner manufacturing facilities in India operating under strict quality management systems (WHO-GMP/ISO).",
    },
    {
      q: "How do I request a quote or product specifications?",
      a: "You can complete the enquiry form on this page or email our global export desk directly at info@priyanpharmaceuticals.com with your target market, dosage forms, and volume requirements.",
    },
  ];

  return (
    <div className="w-full">
      {/* Contact Hero */}
      <section className="bg-gradient-to-r from-[#092b63] to-[#123f91] text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3fa56b]">
              B2B EXPORT DESK
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Contact Priyan Pharmaceuticals
            </h1>
            <p className="text-base md:text-lg text-slate-200 leading-relaxed">
              Share your product and market requirements with us. We will help you identify suitable solutions and provide the necessary technical information.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#123f91]">
                  CONNECT WITH US
                </span>
                <h2 className="text-slate-900 font-bold mt-2">
                  Let&apos;s Discuss Your Requirements
                </h2>
                <p className="text-sm text-[#667085] mt-3 leading-relaxed">
                  Our corporate export desk is available to assist international distributors, healthcare procurement officers, and pharmaceutical importers.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-[#123f91]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Inquiry</h3>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-base font-bold text-slate-900 hover:text-[#123f91]">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-50 text-[#3fa56b]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone / WhatsApp</h3>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-base font-bold text-slate-900 hover:text-[#3fa56b]">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-50 text-[#123f91]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Export Hub Location</h3>
                    <p className="text-base font-bold text-slate-900">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="container-custom max-w-4xl space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#123f91]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-slate-900 font-bold">
              Common B2B Inquiry Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200/80 space-y-2">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#123f91] shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
