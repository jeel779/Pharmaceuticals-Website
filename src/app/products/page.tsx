import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, ArrowRight } from "lucide-react";

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
    image: "/products/medicine-pills.jpg",
  },
  {
    id: "nutraceuticals",
    slug: "nutraceuticals",
    title: "Nutraceuticals products",
    image: "/products/nutracutical-products.jpg",
  },
  {
    id: "mds",
    slug: "mds",
    title: "MDS products",
    image: "/products/stock-photo-pharmacy.jpg",
  },
  {
    id: "surgicals",
    slug: "surgical-products",
    title: "Surgical products",
    image: "/products/surgical-product.jpg",
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
          sizes="100vw"
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

      {/* 2. SECTION HEADER WITH TITLE & DIVIDER */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#092b63] tracking-wide uppercase">
              OUR PRODUCTS
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
              Healthy horizons for all
            </p>
          </div>

          {/* 3. PRODUCT CARDS GRID (REFERENCE FORMAT FROM SCREENSHOT) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MAIN_PRODUCTS.map((prod) => (
              <Link
                key={prod.id}
                href={`/products/${prod.slug}`}
                className="group block bg-white rounded-lg overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#092b63]/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Container with crisp aspect ratio */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-50">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Card Title Box */}
                <div className="py-5 px-4 text-center border-t border-slate-100 bg-white group-hover:bg-slate-50/50 transition-colors">
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-[#092b63] transition-colors flex items-center justify-center gap-1.5">
                    <span>{prod.title}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[#092b63] transition-all duration-300" />
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
