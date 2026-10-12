import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, ArrowRight, ShieldCheck, FileCheck, Award, CheckCircle2, Globe, Sparkles } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/products";

export const metadata: Metadata = {
  title: "Products | KANISH PHARMACEUTICALS PVT LTD.",
  description:
    "Explore our core pharmaceutical export portfolio: Pharmaceuticals Products, Nutraceuticals products, MDS products, and Surgical products from Kanish Pharmaceuticals Pvt. Ltd.",
  openGraph: {
    title: "Products | KANISH PHARMACEUTICALS PVT LTD.",
    description:
      "Explore Pharmaceuticals Products, Nutraceuticals products, MDS products, and Surgical products from Kanish Pharmaceuticals Pvt. Ltd.",
    images: [{ url: "/products/medicine-pills.jpg" }],
  },
};

const MAIN_PRODUCTS = [
  {
    id: "finished-pharma",
    slug: "pharmaceuticals",
    title: "Pharmaceuticals Products",
    tagline: "Finished Formulations",
    description: "Quality-assured finished pharmaceutical formulations conforming to USP/BP/EP international standards.",
    image: "/products/medicine-pills.jpg",
    highlights: [
      "Tablets & Hard Gelatin Capsules",
      "Liquid & Dry Powder Injections",
      "Oral Liquids, Syrups & Suspensions",
      "Topical Creams & Ointments",
    ],
  },
  {
    id: "nutraceuticals",
    slug: "nutraceuticals",
    title: "Nutraceuticals products",
    tagline: "Wellness & Dietary Supplements",
    description: "Nutrition-focused supplements and botanical formulations designed to support daily health and holistic wellness.",
    image: "/products/nutracutical-products.jpg",
    highlights: [
      "Multivitamins & Mineral Softgels",
      "Herbal & Botanical Extracts",
      "Protein & Amino Acid Complexes",
      "Joint Care & Collagen Support",
    ],
  },
  {
    id: "mds",
    slug: "mds",
    title: "MDS products",
    tagline: "Metered Dose & Aerosols",
    description: "Sterile metered dose sprays, specialized inhalers, and targeted aerosol formulations with precise dosage delivery.",
    image: "/products/stock-photo-pharmacy.jpg",
    highlights: [
      "Metered Dose Nasal Sprays",
      "Pressurized Dose Inhalers (pMDI)",
      "Sterile Topical Aerosols & Sprays",
      "Oral Mucosal Solutions",
    ],
  },
  {
    id: "surgicals",
    slug: "surgical-products",
    title: "Surgical products",
    tagline: "Hospital & Medical Disposables",
    description: "Sterile surgical disposables, wound care essentials, and hospital consumables for global institutional procurement.",
    image: "/products/surgical-product.jpg",
    highlights: [
      "Sterile Syringes & Needles",
      "IV Cannulas, Catheters & Sets",
      "Latex & Nitrile Surgical Gloves",
      "Wound Dressings & Sterile Sutures",
    ],
  },
];

const QUALITY_STANDARDS = [
  {
    icon: ShieldCheck,
    title: "WHO-GMP Partner Sites",
    description: "Formulations manufactured exclusively at audited, regulatory-approved partner manufacturing facilities in India.",
  },
  {
    icon: FileCheck,
    title: "CTD Dossier Technical Support",
    description: "Comprehensive regulatory documentation including CTD/eCTD dossiers, stability studies, and batch COAs.",
  },
  {
    icon: Award,
    title: "Pharmacopoeial Standards",
    description: "Strict conformity with USP, BP, and EP specifications with exhaustive batch-to-batch analytical verification.",
  },
  {
    icon: Globe,
    title: "Worldwide Export Reach",
    description: "Reliable logistics coordination supporting importers, hospitals, and distributors across Asia, Africa, MENA, and CIS.",
  },
];

export default function ProductsPage() {
  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. HERO BREADCRUMB BANNER */}
      <section className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] bg-[#092b63] text-white overflow-hidden flex items-center justify-center">
        <Image
          src="/images/background image.jpg"
          alt="Products Banner Background"
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[#092b63]/80" />

        <div className="container-custom relative z-20 text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold !text-white tracking-wider uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            Products
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white font-semibold uppercase tracking-wider">
            <Link href="/" className="text-white hover:text-amber-400 transition-colors">
              HOME
            </Link>
            <ChevronRight className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-bold">PRODUCTS</span>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION MATCHING WEBSITE STRUCTURE */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#092b63] tracking-wide uppercase">
              OUR PRODUCTS PORTFOLIO
            </h2>

            {/* Heartline image divider matching about and manufacturing pages */}
            <div className="flex justify-center py-1">
              <Image
                src="/images/section-img.png"
                alt="Heart Line Divider"
                width={80}
                height={24}
                className="h-5 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm font-semibold text-slate-500 tracking-wider uppercase">
              Healthy horizons for all
            </p>
          </div>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto text-justify sm:text-center">
            Kanish Pharmaceuticals is a professionally managed organization engaged in exporting high-grade pharmaceutical finished products, nutraceuticals, specialized MDS (Metered Dose Sprays), and sterile surgical consumables. Sourced from audited, regulatory-approved partner manufacturing sites in India, our products adhere to international pharmacopoeial standards to deliver safe, effective, and cost-effective healthcare worldwide.
          </p>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORIES CARDS GRID */}
      <section className="py-12 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-bold text-[#123f91] uppercase tracking-widest">
              Core Categories
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#092b63]">
              Featured Product Lines
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MAIN_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Image */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-[#092b63]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg backdrop-blur-xs shadow-xs">
                      {prod.tagline}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-bold text-[#092b63] group-hover:text-amber-600 transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {prod.description}
                    </p>

                    {/* Highlights List */}
                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Available Formulations:
                      </div>
                      <ul className="space-y-1">
                        {prod.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#3fa56b] shrink-0" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="p-5 pt-0">
                  <Link
                    href={`/products/${prod.slug}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#092b63] text-[#092b63] hover:text-white border border-slate-200 hover:border-[#092b63] text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 group/btn"
                  >
                    <span>View Category Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. QUALITY & REGULATORY ASSURANCE SECTION */}
      <section className="py-14 md:py-20 bg-white border-t border-slate-200">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-[#123f91] uppercase tracking-widest">
              Quality Assurance
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#092b63]">
              Regulatory Compliance & Documentation
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every shipment is backed by verified technical documentation, analytical testing certificates, and regulatory compliance reports to facilitate international registrations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITY_STANDARDS.map((std, idx) => {
              const Icon = std.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#123f91]/30 hover:shadow-md transition-all duration-300 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-[#092b63] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#092b63]" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {std.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {std.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
