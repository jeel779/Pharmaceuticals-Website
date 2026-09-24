"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Send, ArrowRight } from "lucide-react";
import { useEnquiry } from "@/components/EnquiryModal";

export default function HomePage() {
  const { openEnquiryModal } = useEnquiry();

  // Hero carousel image slider state
  const sliderImages = [
    {
      src: "/images/holding medicines.jpg",
      title: "Cost effectiveness Our mission to do available cost-effective products across the globe",
      subhead: "Your Health is our mission",
    },
    {
      src: "/images/medicines.jpg",
      title: "Quality Formulations & Global Export Reach",
      subhead: "Your Health is our mission",
    },
    {
      src: "/images/lab testing.jpg",
      title: "Rigorous Quality Compliance & Regulatory Excellence",
      subhead: "Your Health is our mission",
    },
    {
      src: "/images/nursetesting.jpg",
      title: "Comprehensive Healthcare Solutions Worldwide",
      subhead: "Your Health is our mission",
    },
    {
      src: "/images/indiagate.jpg",
      title: "Premier Pharmaceutical Export Partner From India",
      subhead: "Your Health is our mission",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. HERO IMAGE TRANSFORM SLIDER */}
      <section className="relative w-full h-[380px] sm:h-[450px] md:h-[550px] bg-slate-900 overflow-hidden">
        
        {/* Carousel Slides */}
        {sliderImages.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center transform scale-105 transition-transform duration-[10000ms]"
            />
            {/* Dark Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

            {/* Slide Text Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container-custom">
                <div className="max-w-2xl text-white space-y-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#d97706] drop-shadow-md leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-amber-200 font-medium tracking-wide">
                    {slide.subhead}
                  </p>
                  
                  {/* Hero CTA Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      href="/contact"
                      className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-lg bg-[#092b63] hover:bg-[#123f91] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg"
                    >
                      Contact Now
                    </Link>
                    <Link
                      href="/about"
                      className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-lg bg-[#d97706] hover:bg-amber-600 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg"
                    >
                      About Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#092b63]/80 hover:bg-[#092b63] text-white flex items-center justify-center transition-all shadow-lg border border-white/20"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#092b63]/80 hover:bg-[#092b63] text-white flex items-center justify-center transition-all shadow-lg border border-white/20"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {sliderImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === currentSlide ? "w-8 bg-[#d97706]" : "w-2.5 bg-white/60 hover:bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. WELCOME TO PRIYAN PHARMACEUTICALS SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center space-y-8">
          
          {/* Section Header */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#092b63] tracking-wide uppercase">
              WELCOME TO PRIYAN PHARMACEUTICALS
            </h2>
            <div className="flex items-center justify-center gap-2 text-sky-500">
              <span className="w-8 h-0.5 bg-sky-500" />
              <span className="text-xs font-mono">--\--</span>
              <span className="w-8 h-0.5 bg-sky-500" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 tracking-wider uppercase">
              Your Health is our mission
            </p>
          </div>

          {/* OUR COMPANY Details */}
          <div className="text-left space-y-6 pt-4">
            <h3 className="text-lg sm:text-xl font-bold text-[#d97706] uppercase tracking-wider border-b border-slate-200 pb-2">
              OUR COMPANY
            </h3>
            
            <div className="space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed text-justify">
              <p>
                Priyan Pharmaceuticals is a professionally managed and dynamic organization, engaged in the pharmaceutical business involving to export pharmaceutical finished products, nutraceutical/food supplements, cosmetics, surgical products and also raw material – API, Excipients, pellets, and intermediates etc. With a desire of providing opportunities for a better life, we work very hard to bring supreme quality products to our customers with regulatory compliance and cost effective
              </p>
              <p>
                We have instilled a level of trust and confidence amongst our clients by supplying the best quality products to its esteemed patrons. Our products will be available in the various parts of the different country and we are committed to further increasing global access for cost effective healthcare. We venture to make products available to everyone and everywhere.
              </p>
              <p>
                Priyan Pharmaceuticals is registered with Gujarat State FDA (Food and Drug Administration) under Drugs and Cosmetics and register with Udyam Aadhar (MSME). It also follows all international regulatory standard while providing service to globally presented client. We believe in sustainable growth & innovative solution.
              </p>
              <p>
                All the pharmaceutical products that we export are manufactured at our appropriate regulatory approved partner manufacturing sites We are committed to offer you wide variety of quality products from various manufacturers of repute in India, along with all technical documents required by customer as per demand.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PRIYAN ACROSS GLOBAL SECTION (WORLD MAP) */}
      <section className="py-12 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="container-custom text-center space-y-8">
          
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#092b63] uppercase tracking-wide">
              Priyan across global
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
              Expanding Healthcare Reach & Cost-Effective Supply Chain
            </p>
          </div>

          {/* World Map Image Container */}
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white p-2">
            <Image
              src="/images/World_location_map.jpg"
              alt="Priyan Across Global Map"
              width={1200}
              height={600}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* 4. QUICK PRODUCT CATEGORIES PORTFOLIO */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-[#092b63] uppercase tracking-wider">
                Product Categories
              </h2>
              <p className="text-xs font-semibold text-slate-500 uppercase mt-1">
                Wide spectrum of pharmaceutical & healthcare formulations
              </p>
            </div>
            <Link
              href="/products"
              className="px-5 py-2.5 rounded-lg bg-[#092b63] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#123f91] transition-all flex items-center gap-2"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Pharmaceutical Finished Products", slug: "pharmaceuticals", img: "/images/cat_finished_pharma.jpg" },
              { title: "Nutraceuticals and Food Supplements", slug: "nutraceuticals", img: "/images/cat_nutraceuticals.jpg" },
              { title: "Cosmetics and Personal Care", slug: "cosmetics", img: "/images/cat_cosmetics.jpg" },
              { title: "Surgical Products", slug: "surgical-products", img: "/images/cat_surgicals.jpg" },
              { title: "APIs and Excipients", slug: "apis-excipients", img: "/images/cat_apis.jpg" },
              { title: "Pellets and Intermediates", slug: "pellets-intermediates", img: "/images/cat_pellets.jpg" },
            ].map((cat, idx) => (
              <Link
                key={idx}
                href={`/products/${cat.slug}`}
                className="group relative rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white hover:shadow-md transition-all"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={cat.img}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#092b63]/90 via-[#092b63]/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      {cat.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
