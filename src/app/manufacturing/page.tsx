"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, CheckCircle2, Send, ArrowRight, Building2, FlaskConical } from "lucide-react";
import { useEnquiry } from "@/components/EnquiryModal";

export default function ManufacturingPage() {
  const { openEnquiryModal } = useEnquiry();

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* Header Banner */}
      <section className="bg-[#092b63] text-white py-14 md:py-20 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-4 h-4" /> Regulatory Compliant Partner Facilities
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wide">
            MANUFACTURING
          </h1>
          <p className="text-sm md:text-base text-slate-200 leading-relaxed">
            All the pharmaceutical products that we export are manufactured at our appropriate regulatory approved partner manufacturing sites with complete technical & analytical documentation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d97706]">
                  State-of-the-Art Partner Infrastructure
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#092b63]">
                  WHO-GMP & Regulatory Approved Manufacturing Facilities
                </h2>
              </div>

              <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify">
                Priyan Pharmaceuticals collaborates with leading, audited manufacturing facilities in India equipped with modern automated production lines, climate-controlled environments, and advanced analytical testing laboratories.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: "Strict Regulatory Compliance",
                    desc: "Facilities operate under WHO-GMP standards, state FDA registration (Drugs & Cosmetics), and MSME Udyam Aadhar certification.",
                  },
                  {
                    title: "Advanced Dosage Form Capabilities",
                    desc: "State-of-the-art production for Tablets, Hard Gelatin Capsules, Liquid & Dry Injections, Ointments, Syrups, Pellets, and APIs.",
                  },
                  {
                    title: "Complete Dossier & Document Support",
                    desc: "Provision of CTD/eCTD dossiers, Certificate of Analysis (COA), Method of Analysis (MOA), and real-time stability study reports.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3fa56b] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-[#092b63]">{item.title}</h3>
                      <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => openEnquiryModal()}
                  className="px-6 py-3 rounded-xl bg-[#092b63] hover:bg-[#123f91] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
                >
                  Contact Manufacturing Desk <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/quality_assurance_lab.jpg"
                  alt="Pharmaceutical Manufacturing Facility Lab"
                  width={600}
                  height={450}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#092b63] text-white text-center">
        <div className="container-custom space-y-4">
          <h2 className="text-xl md:text-2xl font-bold uppercase">
            Need Contract Manufacturing or Bulk Export Inquiries?
          </h2>
          <p className="text-xs md:text-sm text-slate-200 max-w-xl mx-auto">
            Contact Priyan Pharmaceuticals today to discuss your dosage requirements and dossier documentation needs.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
