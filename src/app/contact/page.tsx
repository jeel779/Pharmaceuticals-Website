import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Priyan Pharmaceuticals",
  description: "Get in touch with Priyan Pharmaceuticals for inquiries, pharmaceutical product quotes, regulatory dossier support, and international supply partnerships.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. HERO BREADCRUMB BANNER */}
      <section className="relative w-full h-[220px] md:h-[280px] bg-[#092b63] text-white overflow-hidden flex items-center justify-center">
        <Image
          src="/images/medicines.jpg"
          alt="Contact Us Banner Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#092b63]/85" />

        <div className="container-custom relative z-20 text-center space-y-3">
          <h1 className="text-3xl md:text-5xl font-extrabold !text-white tracking-wider uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            CONTACT US
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white font-semibold uppercase tracking-wider">
            <Link href="/" className="text-white hover:text-amber-400 transition-colors">
              HOME
            </Link>
            <ChevronRight className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-bold">CONTACT US</span>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Contact Information Card */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#d97706]">
                  GET IN TOUCH
                </span>
                <h2 className="text-2xl font-bold text-[#092b63] mt-1">
                  Contact Information
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  We are available to assist international partners, healthcare buyers, and clients worldwide.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-50 text-[#d97706] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Corporate Address</h3>
                    <p className="text-sm font-semibold text-slate-800 leading-snug">
                      13 FF, Komal park Co-operative Society, B/S Gyangita primary school, Nr. Chappaya Appartment, Parshwanath Township, Nava Naroda, Ahmedabad-382346, Gujarat, India.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-[#092b63] shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone / WhatsApp</h3>
                    <div className="text-sm font-semibold text-slate-800 space-x-2">
                      <a href="tel:+919727250640" className="hover:text-[#092b63]">+91 9727250640</a>,
                      <a href="tel:+919016808536" className="hover:text-[#092b63]">+91 9016808536</a>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Addresses</h3>
                    <div className="text-sm font-semibold text-slate-800 flex flex-col gap-1">
                      <a href="mailto:info@priyanpharmaceuticals.com" className="hover:text-emerald-700">
                        info@priyanpharmaceuticals.com
                      </a>
                      <a href="mailto:priyanpharmaceuticals@gmail.com" className="hover:text-emerald-700">
                        priyanpharmaceuticals@gmail.com
                      </a>
                    </div>
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
    </div>
  );
}
