import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, FileCheck, Award, Microscope, ClipboardCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Quality & Compliance | Priyan Pharmaceuticals",
  description: "Learn about Priyan Pharmaceuticals' commitment to quality assurance, regulatory documentation, CTD dossier support, and regulatory-approved manufacturing partners.",
};

export default function QualityPage() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#092b63] to-[#123f91] text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3fa56b]">
              REGULATORY RESPONSIBILITY
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Quality & Regulatory Compliance
            </h1>
            <p className="text-base md:text-lg text-slate-200 leading-relaxed">
              We believe that quality, transparency, and regulatory responsibility are essential to building long-term healthcare partnerships globally.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Philosophy Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#123f91]">
                OUR QUALITY STANDARDS
              </span>
              <h2 className="text-slate-900 font-bold">
                Committed to Quality and Compliance
              </h2>
              <p className="text-sm md:text-base text-[#667085] leading-relaxed">
                Products exported by Priyan Pharmaceuticals are manufactured at appropriate regulatory-approved partner manufacturing sites operating under stringent quality control procedures.
              </p>
              <p className="text-sm md:text-base text-[#667085] leading-relaxed">
                We work closely with audited manufacturing partners to ensure all supplied batches conform to international pharmacopoeial standards such as USP, BP, and EP. Technical documents and quality reports can be provided based on customer and market-specific regulatory requirements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Trusted Manufacturing Partners",
                  "Quality-Focused Sourcing",
                  "Regulatory Dossier Support",
                  "Customer-Specific Export Support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-[#3fa56b] shrink-0" />
                    <span className="text-xs font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="image-wrapper rounded-3xl shadow-xl border-4 border-white overflow-hidden">
                  <Image
                    src="/images/quality_assurance_lab.jpg"
                    alt="Pharmaceutical Quality Testing Laboratory"
                    width={600}
                    height={450}
                    className="w-full h-[380px] md:h-[440px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#092b63] text-white p-5 rounded-2xl shadow-xl max-w-xs">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#3fa56b] mb-1">
                    Compliance Focused
                  </div>
                  <p className="text-xs text-slate-300">
                    All products are sourced from regulatory-approved partner facilities.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dossier & Technical Support */}
      <section className="py-16 bg-[#f8fafc] border-t border-b border-slate-200/60">
        <div className="container-custom max-w-4xl space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#123f91]">
              REGULATORY DOSSIERS
            </span>
            <h2 className="text-slate-900 font-bold">
              Technical Documentation & Regulatory Assistance
            </h2>
            <p className="text-sm md:text-base text-[#667085]">
              We help international importers and healthcare buyers streamline product registration in their local health ministries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <FileCheck className="w-8 h-8 text-[#123f91]" />
              <h3 className="text-lg font-bold text-slate-900">CTD / eCTD Dossier Support</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Technical dossiers structured in Common Technical Document format (Modules 1 through 5) covering CMC data, process validation, and stability profiles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <ClipboardCheck className="w-8 h-8 text-[#3fa56b]" />
              <h3 className="text-lg font-bold text-slate-900">Certificates of Analysis (COA)</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Batch-specific analytical testing certificates documenting assay, dissolution, purity, microbial limits, and physical parameters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <Microscope className="w-8 h-8 text-[#2468c9]" />
              <h3 className="text-lg font-bold text-slate-900">Stability Study Data</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Real-time and accelerated stability study data suitable for Zone IVb climatic zones and global regulatory filings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <Award className="w-8 h-8 text-indigo-600" />
              <h3 className="text-lg font-bold text-slate-900">Method of Analysis (MOA)</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Detailed analytical test procedure validation documentation and finished product testing specifications.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#123f91] hover:bg-[#092b63] text-white font-semibold text-sm shadow transition-all"
            >
              Request Regulatory Assistance <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
