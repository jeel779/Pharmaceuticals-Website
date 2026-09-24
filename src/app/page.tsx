"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HomePage() {

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
      <section className="relative w-full h-[380px] sm:h-[480px] md:h-[580px] bg-slate-900 overflow-hidden">
        
        {/* Carousel Slides */}
        {sliderImages.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Clear Image Display */}
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center transform scale-100 transition-transform duration-[10000ms]"
            />

            {/* Subtle Gradient Overlay for High Contrast Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

            {/* Slide Text Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container-custom">
                <div className="max-w-2xl text-white space-y-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-xl text-amber-200 font-semibold tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                    {slide.subhead}
                  </p>
                  
                  {/* Hero CTA Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      href="/contact"
                      className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-lg bg-[#092b63] hover:bg-[#123f91] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xl border border-blue-400/30"
                    >
                      Contact Now
                    </Link>
                    <Link
                      href="/about"
                      className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-lg bg-[#d97706] hover:bg-amber-600 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xl"
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
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#092b63] hover:bg-[#123f91] text-white flex items-center justify-center transition-all shadow-2xl border border-white/20"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#092b63] hover:bg-[#123f91] text-white flex items-center justify-center transition-all shadow-2xl border border-white/20"
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
                idx === currentSlide ? "w-8 bg-[#d97706]" : "w-2.5 bg-white/70 hover:bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. WELCOME TO PRIYAN PHARMACEUTICALS SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center space-y-6">
          
          {/* Section Header with section-img.png heartline divider */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#092b63] tracking-wide uppercase">
              WELCOME TO PRIYAN PHARMACEUTICALS
            </h2>
            
            {/* Heartline section image divider */}
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

    </div>
  );
}
