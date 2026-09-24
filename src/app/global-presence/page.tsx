import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe2, FileCheck, Users, ArrowRight, ShieldCheck, Truck } from "lucide-react";

export const metadata = {
  title: "Global Presence | Priyan Pharmaceuticals",
  description: "Priyan Pharmaceuticals supports international distributors, hospitals, and pharmaceutical importers with reliable export coordination and supply logistics.",
};

export default function GlobalPresencePage() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#092b63] to-[#123f91] text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3fa56b]">
              INTERNATIONAL SUPPLY NETWORK
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Priyan Across the Globe
            </h1>
            <p className="text-base md:text-lg text-slate-200 leading-relaxed">
              We are committed to increasing global access to quality and cost-effective healthcare products across international markets.
            </p>
          </div>
        </div>
      </section>

      {/* World Map Visual Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-slate-900 font-bold">
              Global Healthcare Sourcing & Distribution
            </h2>
            <p className="text-sm md:text-base text-[#667085]">
              Through our global supply network, we help make healthcare products available to customers across different countries and regions.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
            <Image
              src="/images/global_logistics_map.jpg"
              alt="Global Pharmaceutical Supply Chain and Logistics Network Map"
              width={1200}
              height={600}
              className="w-full h-[360px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#092b63]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
              <div>
                <h3 className="text-xl font-bold text-white">India Export Operations Hub</h3>
                <p className="text-xs text-slate-300">Coordinating international shipments, custom packaging, and regulatory clearance.</p>
              </div>
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-xl bg-[#3fa56b] hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider transition-all shrink-0"
              >
                Partner With Us
              </Link>
            </div>
          </div>

          {/* 3 Core Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#123f91] flex items-center justify-center">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Global Product Access</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Serving customers and institutional partners through established international pharmaceutical export channels.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#3fa56b] flex items-center justify-center">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Reliable Export Coordination</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Supporting complete documentation, communication, customs compliance, and delivery logistics requirements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-[#123f91] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Long-Term Partnerships</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Building dependable, transparent relationships with international distributors and healthcare businesses.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
