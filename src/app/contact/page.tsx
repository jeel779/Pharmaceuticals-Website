import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Priyan Pharmaceuticals",
  description: "Get in touch with Priyan Pharmaceuticals for inquiries, pharmaceutical product quotes, regulatory dossier support, and international supply partnerships.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-white text-slate-800">
      {/* Contact Hero Banner */}
      <section className="bg-[#092b63] text-white py-14 md:py-20">
        <div className="container-custom text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            CONTACT WITH US
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wide">
            CONTACT US
          </h1>
          <p className="text-sm md:text-base text-slate-200">
            If you have any questions please feel free to contact with us.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
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
