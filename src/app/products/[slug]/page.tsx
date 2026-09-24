import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, FileCheck, ShieldCheck, ArrowRight, Send, ChevronRight, Layers } from "lucide-react";
import { PRODUCT_CATEGORIES, ProductCategory } from "@/data/products";
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
    title: `${category.title} | Priyan Pharmaceuticals Export`,
    description: category.description,
    openGraph: {
      title: `${category.title} Exporter | Priyan Pharmaceuticals`,
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

  const otherCategories = PRODUCT_CATEGORIES.filter((c) => c.slug !== category.slug);

  return (
    <div className="w-full">
      {/* Category Hero */}
      <section className="bg-gradient-to-r from-[#092b63] to-[#123f91] text-white py-14 md:py-20">
        <div className="container-custom">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-emerald-400 font-semibold">{category.title}</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              {category.title}
            </h1>
            <p className="text-base md:text-lg text-slate-200">
              {category.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Category Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Image & Overview */}
            <div className="lg:col-span-7 space-y-8">
              <div className="image-wrapper rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={800}
                  height={500}
                  className="w-full h-[380px] md:h-[460px] object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Category Overview</h2>
                <p className="text-sm md:text-base text-[#667085] leading-relaxed">
                  {category.fullDescription}
                </p>
              </div>

              {/* Product Types / Dosage Forms */}
              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200/80 space-y-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#123f91]" />
                  Product Types & Dosage Formulations
                </h3>
                <div className="grid grid-cols-1 gap-2.5">
                  {category.productTypes.map((type, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-2xs">
                      <CheckCircle2 className="w-5 h-5 text-[#3fa56b] shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-slate-800">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Therapeutic Categories */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#3fa56b]" />
                  Therapeutic Categories & Applications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.therapeuticCategories.map((tc, idx) => (
                    <span key={idx} className="px-3.5 py-2 rounded-xl bg-blue-50 text-[#123f91] text-xs font-semibold">
                      {tc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar: Documentation & Enquiry Trigger */}
            <div className="lg:col-span-5 space-y-6">
              
              <CategoryDetailClient categorySlug={category.slug} categoryTitle={category.title} />

              {/* Technical Documentation Support Card */}
              <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-4 shadow-lg">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4" /> Technical Documentation
                </div>
                <h3 className="text-xl font-bold text-white">Regulatory Support</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We support global buyers with comprehensive technical and dossier documentation required for market registration:
                </p>
                <ul className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-200">
                  {category.technicalSupport.map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#3fa56b] shrink-0" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Explore Other Categories */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-xs">
                  Other Product Categories
                </h4>
                <div className="space-y-2">
                  {otherCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/products/${cat.slug}`}
                      className="block p-2.5 rounded-xl hover:bg-blue-50 text-xs font-semibold text-slate-700 hover:text-[#123f91] transition-colors"
                    >
                      {cat.title} →
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
