"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight, Pill, Apple, Sparkles, Activity, FlaskConical, Layers, Send, FileCheck } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { useEnquiry } from "@/components/EnquiryModal";

export default function ProductsPage() {
  const { openEnquiryModal } = useEnquiry();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategorySlug, setSelectedCategorySlug] = useState("all");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Pill": return <Pill className="w-5 h-5 text-blue-600" />;
      case "Apple": return <Apple className="w-5 h-5 text-emerald-600" />;
      case "Sparkles": return <Sparkles className="w-5 h-5 text-amber-600" />;
      case "Activity": return <Activity className="w-5 h-5 text-teal-600" />;
      case "FlaskConical": return <FlaskConical className="w-5 h-5 text-indigo-600" />;
      case "Layers": return <Layers className="w-5 h-5 text-sky-600" />;
      default: return <Pill className="w-5 h-5 text-blue-600" />;
    }
  };

  // Filter Categories & Types
  const filteredCategories = PRODUCT_CATEGORIES.filter((cat) => {
    const matchesSlug = selectedCategorySlug === "all" || cat.slug === selectedCategorySlug;
    const matchesSearch =
      cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.productTypes.some((type) => type.toLowerCase().includes(searchTerm.toLowerCase())) ||
      cat.therapeuticCategories.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesSlug && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Products Hero */}
      <section className="bg-gradient-to-r from-[#092b63] to-[#123f91] text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3fa56b]">
              EXPORT PRODUCT PORTFOLIO
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Healthcare Products for Global Markets
            </h1>
            <p className="text-base md:text-lg text-slate-200 leading-relaxed">
              Explore our broad range of pharmaceutical finished products, nutraceuticals, cosmetics, surgical supplies, APIs, excipients, and pellets.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Controls Bar */}
      <section className="py-8 bg-white border-b border-slate-200/80 sticky top-[73px] z-30 shadow-xs">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products or dosage forms..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#123f91] focus:ring-1 focus:ring-[#123f91] outline-none"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategorySlug("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                selectedCategorySlug === "all"
                  ? "bg-[#123f91] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Categories
            </button>
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategorySlug(cat.slug)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedCategorySlug === cat.slug
                    ? "bg-[#123f91] text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container-custom">
          {filteredCategories.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <p className="text-lg text-slate-600">No products found matching your search criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategorySlug("all");
                }}
                className="px-6 py-2.5 rounded-xl bg-[#123f91] text-white text-sm font-semibold"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category) => (
                <div key={category.id} className="product-card group flex flex-col justify-between">
                  <div>
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md shadow">
                        {getCategoryIcon(category.iconName)}
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#123f91] transition-colors">
                        {category.title}
                      </h2>
                      <p className="text-xs text-[#667085] leading-relaxed mb-4">
                        {category.description}
                      </p>

                      <div className="space-y-3 border-t border-slate-100 pt-4">
                        <div>
                          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                            Available Dosage Forms / Types:
                          </div>
                          <ul className="space-y-1">
                            {category.productTypes.map((type, idx) => (
                              <li key={idx} className="text-xs text-slate-700 flex items-start gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3fa56b] mt-1.5 shrink-0" />
                                <span>{type}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      href={`/products/${category.slug}`}
                      className="text-xs font-bold text-[#123f91] hover:text-[#2468c9] flex items-center gap-1 uppercase tracking-wider"
                    >
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => openEnquiryModal(category.slug)}
                      className="px-4 py-2 rounded-xl bg-[#123f91] text-white hover:bg-[#092b63] text-xs font-semibold shadow transition-colors flex items-center gap-1.5"
                    >
                      Enquire <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
