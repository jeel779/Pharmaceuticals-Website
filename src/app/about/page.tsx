import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";

export const metadata = {
  title: "About Us | Priyan Pharmaceuticals",
  description: "Learn about Priyan Pharmaceuticals, a professionally managed organization engaged in exporting pharmaceutical finished products, nutraceuticals, cosmetics, surgical products, APIs, and intermediates.",
};

export default function AboutPage() {
  const whyUsList = [
    { label: "Quality", text: "Wide range product portfolio with quality standard." },
    { label: "Our People", text: "Experience staff with sound technical background." },
    { label: "Price Policy", text: "Comparatively affordable and Competitive prices" },
    { label: "Delivery", text: "Hassle free and timely" },
    { label: "Network", text: "Broad Supply Network." },
    { label: "Follow ups", text: "Continues follow up with customer to fulfil requirement as per commitment." },
  ];

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. HERO BREADCRUMB BANNER */}
      <section className="relative w-full h-[220px] md:h-[280px] bg-[#092b63] text-white overflow-hidden flex items-center justify-center">
        <Image
          src="/images/medicines.jpg"
          alt="About Us Banner Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#092b63]/85" />

        <div className="container-custom relative z-20 text-center space-y-3">
          <h1 className="text-3xl md:text-5xl font-extrabold !text-white tracking-wider uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            About Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white font-semibold uppercase tracking-wider">
            <Link href="/" className="text-white hover:text-amber-400 transition-colors">
              HOME
            </Link>
            <ChevronRight className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-bold">ABOUT US</span>
          </div>
        </div>
      </section>

      {/* 2. WELCOME TO PRIYAN PHARMACEUTICALS SECTION */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center space-y-6">
          
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#092b63] tracking-wide uppercase">
              WELCOME TO PRIYAN PHARMACEUTICALS
            </h2>
            
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

            <p className="text-xs sm:text-sm font-semibold text-slate-500 tracking-wider uppercase">
              Your Health is our mission
            </p>
          </div>

          <div className="text-left space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed text-justify pt-4">
            <p>
              Priyan Pharmaceuticals is a professionally managed and dynamic organization, engaged in the pharmaceutical business involving to export pharmaceutical finished products, nutraceutical/food supplements, cosmetics, surgical products and also raw material – API, Excipients, pellets, and intermediates etc. With a desire of providing opportunities for a better life, we work very hard to bring supreme quality products to our customers with regulatory compliance and cost effective.
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
      </section>

      {/* 3. WHY US? SECTION */}
      <section className="py-14 md:py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Image: why chose us.webp */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white p-2">
                <Image
                  src="/images/why chose us.webp"
                  alt="Why Choose Priyan Pharmaceuticals"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            </div>

            {/* Right Checklist Details */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#092b63] uppercase tracking-wider">
                WHY US?
              </h2>

              <ul className="space-y-4">
                {whyUsList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-200 text-[#092b63] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      <strong className="text-[#092b63] font-bold">{item.label}:</strong> {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OUR VISION & OUR MISSION SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Our Vision Card */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-lg hover:shadow-xl transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#092b63] text-white flex items-center justify-center font-bold shadow">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <h3 className="text-xl font-bold text-[#092b63]">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To enter the advanced markets of the world with a sustained presence over the long term.
              </p>
            </div>

            {/* Our Mission Card */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-lg hover:shadow-xl transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#092b63] text-white flex items-center justify-center font-bold shadow">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <h3 className="text-xl font-bold text-[#092b63]">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To consistently delivering high quality, safe and effective pharmaceutical products and services that meet customer expectations across the globe
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
