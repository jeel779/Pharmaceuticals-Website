import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Global Presence | Priyan Pharmaceuticals",
  description: "OUR BUSINESS - Asia, Africa, MENA and CIS. Priyan Pharmaceuticals supports international distributors, hospitals, and pharmaceutical importers with reliable export coordination and supply logistics.",
};

export default function GlobalPresencePage() {
  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. HERO BREADCRUMB BANNER USING BACKGROUND IMAGE */}
      <section className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] bg-[#092b63] text-white overflow-hidden flex items-center justify-center">
        <Image
          src="/images/background image.jpg"
          alt="Global Presence Banner Background"
          fill
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[#092b63]/80" />

        <div className="container-custom relative z-20 text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold !text-white tracking-wider uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            Global Presence
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white font-semibold uppercase tracking-wider">
            <Link href="/" className="text-white hover:text-amber-400 transition-colors">
              HOME
            </Link>
            <ChevronRight className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-bold">GLOBAL PRESENCE</span>
          </div>
        </div>
      </section>

      {/* 2. OUR BUSINESS CONTENT SECTION */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-custom text-center space-y-5 max-w-5xl mx-auto">
          
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#092b63] uppercase tracking-wide">
              OUR BUSINESS
            </h2>
            <p className="text-sm sm:text-base font-semibold text-slate-500 tracking-wider">
              Asia, Africa, MENA and CIS
            </p>
            
            {/* Heartline image divider */}
            <div className="flex justify-center py-1">
              <Image
                src="/images/section-img.png"
                alt="Heart Line Divider"
                width={80}
                height={24}
                className="h-5 w-auto object-contain"
              />
            </div>
          </div>

          {/* World Location Map Container */}
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white p-2 mt-6">
            <Image
              src="/images/World_location_map.jpg"
              alt="Priyan Global Presence World Location Map"
              width={1200}
              height={600}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>

        </div>
      </section>

    </div>
  );
}
