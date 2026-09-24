import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Manufacturing | Priyan Pharmaceuticals",
  description: "Priyan manufacturing mindset is quality first and quantity second. State of the art manufacturing facility equipped with high tech machinery for Tablets, Capsules, Injections, MDS, Syrups and Suspensions.",
};

export default function ManufacturingPage() {
  const categories = [
    {
      title: "Tablets and Capsules",
      image: "/images/Tablets&Capsules.jpg",
      href: "/products/pharmaceuticals",
    },
    {
      title: "Injections",
      image: "/images/Injections1.jpg",
      href: "/products/pharmaceuticals",
    },
    {
      title: "MDS",
      image: "/images/MDS1.jpg",
      href: "/products/surgical-products",
    },
    {
      title: "Syrup and Suspensions",
      image: "/images/Syrup&Suspensions.jpg",
      href: "/products/pharmaceuticals",
    },
  ];

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. HERO BREADCRUMB BANNER */}
      <section className="relative w-full h-[220px] md:h-[280px] bg-[#092b63] text-white overflow-hidden flex items-center justify-center">
        <Image
          src="/images/medicines.jpg"
          alt="Manufacturing Banner Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[#092b63]/85" />

        <div className="container-custom relative z-10 text-center space-y-3">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide uppercase">
            Manufacturing
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300 font-semibold uppercase tracking-wider">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-amber-500" />
            <span className="text-amber-400">Manufacturing</span>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center space-y-5">
          
          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
            Priyan manufacturing mindset is quality first and quantity second. We work to the most complex of customer requirements.
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

          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We have state of the art manufacturing facility equipped with high tech machinery and operated by qualified pharma technicians and professionals.
          </p>

        </div>
      </section>

      {/* 3. MANUFACTURING CATEGORY CARDS GRID */}
      <section className="py-12 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                href={cat.href}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center bg-white border-t border-slate-100">
                  <h3 className="text-base font-bold text-[#092b63] group-hover:text-amber-600 transition-colors">
                    {cat.title}
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
