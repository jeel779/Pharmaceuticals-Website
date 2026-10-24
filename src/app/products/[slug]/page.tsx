import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ChevronRight, Phone, Mail, ArrowRight, ShieldCheck, Layers, Sparkles } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { CategoryDetailClient } from "./CategoryDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: `${category.title} | KANISH PHARMACEUTICALS PVT LTD.`,
    description: category.description,
    openGraph: {
      title: `${category.title} Exporter | KANISH PHARMACEUTICALS PVT LTD.`,
      description: category.fullDescription,
      images: [{ url: category.image }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  // Filter other categories to allow fast switching
  const otherCategories = PRODUCT_CATEGORIES.filter((c) => c.slug !== category.slug).slice(0, 4);

  return (
    <div className="w-full bg-white text-slate-800">
      {/* 1. HERO BREADCRUMB BANNER (IDENTICAL CONSISTENT STYLE ACROSS ALL PAGES) */}
      <section className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] bg-[#092b63] text-white overflow-hidden flex items-center justify-center">
        <Image
          src="/images/background image.jpg"
          alt="Products Banner Background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[#092b63]/80" />

        <div className="container-custom relative z-20 text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold !text-white tracking-wider uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            {category.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white font-semibold uppercase tracking-wider flex-wrap">
            <Link href="/" className="text-white hover:text-amber-400 transition-colors">
              HOME
            </Link>
            <ChevronRight className="w-4 h-4 text-amber-400 shrink-0" />
            <Link href="/products" className="text-white hover:text-amber-400 transition-colors">
              PRODUCTS
            </Link>
            <ChevronRight className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-amber-400 font-bold truncate max-w-[200px] sm:max-w-none">
              {category.title.toUpperCase()}
            </span>
          </div>
        </div>
      </section>

      {/* 2. SECTION HEADER WITH TITLE & DIVIDER */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#092b63] tracking-wide uppercase">
              {category.title}
            </h2>

            {/* Heartline divider matching site design */}
            <div className="flex justify-center py-1">
              <Image
                src="/images/section-img.png"
                alt="Divider"
                width={80}
                height={24}
                className="h-5 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm font-semibold text-slate-500 tracking-wider uppercase">
              {category.subtitle}
            </p>
          </div>

          {/* 3. MAIN PRODUCT DETAILS & SIDEBAR INQUIRY GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Content (Image, Description, Formulations, Categories) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Product Featured Image Card */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-50">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>

              {/* Product Overview */}
              <div className="p-6 md:p-8 rounded-2xl bg-slate-50/60 border border-slate-200/80 space-y-3">
                <h3 className="text-xl font-bold text-[#092b63] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#3fa56b]" />
                  Product Overview
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify sm:text-left">
                  {category.fullDescription}
                </p>
              </div>

              {/* Available Formulations / Product Types */}
              {category.productTypes && category.productTypes.length > 0 && (
                <div className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
                  <h3 className="text-lg font-bold text-[#092b63] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#3fa56b]" />
                    Available Formulations & Dosage Forms
                  </h3>
                  <div className="grid grid-cols-1 gap-2.5">
                    {category.productTypes.map((type, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 transition-colors hover:bg-blue-50/40"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#3fa56b] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">
                          {type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Therapeutic Categories */}
              {category.therapeuticCategories && category.therapeuticCategories.length > 0 && (
                <div className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
                  <h3 className="text-lg font-bold text-[#092b63] flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#3fa56b]" />
                    Therapeutic Categories & Segments
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.therapeuticCategories.map((tc, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-blue-50/80 text-[#092b63] text-xs font-semibold border border-blue-100"
                      >
                        {tc}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar: Quick Direct Inquiry Form & Quick Links */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              
              {/* Direct Inquiry Form (Lightweight, No Unnecessary Info, Sends directly to Gmail) */}
              <CategoryDetailClient
                categorySlug={category.slug}
                categoryTitle={category.title}
              />

              {/* Explore Other Products Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Other Product Categories
                </h4>
                <div className="space-y-1.5">
                  {otherCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/products/${cat.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#092b63] transition-colors group"
                    >
                      <span>{cat.title}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#092b63] group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Contact Info Card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Direct Contact
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="w-3.5 h-3.5 text-[#092b63]" />
                    <a href="tel:+919106789609" className="hover:text-[#092b63] font-medium">
                      +91 9106789609
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Mail className="w-3.5 h-3.5 text-[#092b63]" />
                    <a href="mailto:info@kanishpharmaceuticals.com" className="hover:text-[#092b63] font-medium">
                      info@kanishpharmaceuticals.com
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
