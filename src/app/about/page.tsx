import React from "react";
import Metadata from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Globe2, Award, Target, Eye, ArrowRight, Building2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

export const metadata = {
  title: "About Us | Priyan Pharmaceuticals",
  description: "Learn about Priyan Pharmaceuticals, a professionally managed Indian pharmaceutical export organization dedicated to high quality finished formulations, nutraceuticals, cosmetics, APIs, and intermediates.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#092b63] to-[#123f91] text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3fa56b]">
              CORPORATE OVERVIEW
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              About Priyan Pharmaceuticals
            </h1>
            <p className="text-base md:text-lg text-slate-200 leading-relaxed">
              A professionally managed pharmaceutical export organization committed to delivering high-quality healthcare products to global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Main Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#123f91]">
                OUR HERITAGE & VISION
              </span>
              <h2 className="text-slate-900 font-bold">
                A Trusted Partner in Pharmaceutical Exports
              </h2>
              <p className="text-sm md:text-base text-[#667085] leading-relaxed">
                Priyan Pharmaceuticals is engaged in the export of pharmaceutical finished products, nutraceuticals, food supplements, cosmetics, surgical products, APIs, excipients, pellets, and intermediates.
              </p>
              <p className="text-sm md:text-base text-[#667085] leading-relaxed">
                Our core philosophy centers on providing quality-assured healthcare products that support better health outcomes worldwide. We operate as a central export hub connecting verified, regulatory-compliant Indian manufacturing partners with international healthcare distributors, hospital networks, and pharmaceutical importers.
              </p>
              <p className="text-sm md:text-base text-[#667085] leading-relaxed">
                We place heavy emphasis on strict regulatory documentation, quality management, transparent communication, and cost-effective sourcing strategies.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="image-wrapper rounded-3xl overflow-hidden border-4 border-slate-100 shadow-xl">
                <Image
                  src="/images/about_pharma_facility.jpg"
                  alt="Priyan Pharmaceuticals Partner Manufacturing Site"
                  width={600}
                  height={450}
                  className="w-full h-[380px] md:h-[440px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission and Vision Grid */}
      <section className="py-16 bg-[#f8fafc] border-t border-b border-slate-200/60">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#123f91] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                To serve as a dependable global pharmaceutical export hub by making high-quality, regulatory-compliant, and cost-effective healthcare formulations accessible across international markets.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#3fa56b] flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                To build long-lasting international healthcare partnerships based on quality sourcing, regulatory transparency, technical documentation support, and operational excellence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Manufacturing Partner Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-4xl space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#123f91]">
              QUALITY ECOSYSTEM
            </span>
            <h2 className="text-slate-900 font-bold">
              Our Manufacturing Partner Approach
            </h2>
            <p className="text-sm md:text-base text-[#667085]">
              Exported products are manufactured at appropriate regulatory-approved partner manufacturing sites operating under stringent quality control procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-[#123f91] flex items-center justify-center mx-auto">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900">Regulatory Approval</h4>
              <p className="text-xs text-[#667085] leading-relaxed">
                Working strictly with manufacturing sites holding applicable WHO-GMP and ISO accreditations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#3fa56b] flex items-center justify-center mx-auto">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900">Analytical Testing</h4>
              <p className="text-xs text-[#667085] leading-relaxed">
                Every product batch undergoes complete analytical testing matching pharmacopoeial monographs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-[#123f91] flex items-center justify-center mx-auto">
                <Globe2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900">Export Coordination</h4>
              <p className="text-xs text-[#667085] leading-relaxed">
                Providing comprehensive dossiers, Certificate of Analysis (COA), and custom market packaging.
              </p>
            </div>
          </div>

          <div className="pt-6 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#123f91] hover:bg-[#092b63] text-white font-semibold text-sm shadow transition-all"
            >
              Contact Our Corporate Desk <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
