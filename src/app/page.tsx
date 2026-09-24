"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  FlaskConical, 
  TrendingDown, 
  Globe2, 
  CheckCircle2, 
  ArrowRight, 
  Send,
  Building2,
  FileCheck,
  Award,
  Users,
  Pill,
  Apple,
  Sparkles,
  Activity,
  Layers,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { PRODUCT_CATEGORIES, COMPANY_INFO } from "@/data/products";
import { useEnquiry } from "@/components/EnquiryModal";
import { ContactForm } from "@/components/ContactForm";

export default function HomePage() {
  const { openEnquiryModal } = useEnquiry();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Pill": return <Pill className="w-6 h-6 text-blue-600" />;
      case "Apple": return <Apple className="w-6 h-6 text-emerald-600" />;
      case "Sparkles": return <Sparkles className="w-6 h-6 text-amber-600" />;
      case "Activity": return <Activity className="w-6 h-6 text-teal-600" />;
      case "FlaskConical": return <FlaskConical className="w-6 h-6 text-indigo-600" />;
      case "Layers": return <Layers className="w-6 h-6 text-sky-600" />;
      default: return <Pill className="w-6 h-6 text-blue-600" />;
    }
  };

  const featureCards = [
    {
      icon: <FlaskConical className="w-7 h-7 text-[#123f91]" />,
      title: "Quality Products",
      description: "Pharmaceutical products trusted by doctors and healthcare partners across global markets.",
      bgColor: "bg-blue-50/80",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#3fa56b]" />,
      title: "Strict Regulatory Compliance",
      description: "We follow applicable regulatory standards and work with approved manufacturing partners.",
      bgColor: "bg-emerald-50/80",
    },
    {
      icon: <TrendingDown className="w-7 h-7 text-[#2468c9]" />,
      title: "Cost-Effective Healthcare",
      description: "Our goal is to make quality healthcare products accessible across different markets.",
      bgColor: "bg-[#eef5ff]",
    },
    {
      icon: <Globe2 className="w-7 h-7 text-[#123f91]" />,
      title: "Global Supply Network",
      description: "We support customers and partners with pharmaceutical products across international markets.",
      bgColor: "bg-indigo-50/80",
    },
  ];

  const whyChooseUs = [
    {
      num: "01",
      title: "Wide Product Portfolio",
      desc: "Access pharmaceutical, nutraceutical, cosmetic, surgical, API, and intermediate product categories through one reliable partner.",
    },
    {
      num: "02",
      title: "Trusted Manufacturing Network",
      desc: "Products are sourced from regulatory-approved partner sites operating under stringent quality systems.",
    },
    {
      num: "03",
      title: "Quality & Compliance Focus",
      desc: "Every product is selected with market compliance, safety standards, and analytical specifications in mind.",
    },
    {
      num: "04",
      title: "Cost-Effective Sourcing",
      desc: "Leveraging India's manufacturing efficiency to provide affordable, high-value healthcare formulations.",
    },
    {
      num: "05",
      title: "Technical Documentation Support",
      desc: "We support international partners with CTD/eCTD dossiers, COA, MOA, and regulatory documentation.",
    },
    {
      num: "06",
      title: "International Customer Orientation",
      desc: "Dedicated export management ensuring reliable communication, custom labeling, and delivery coordination.",
    },
  ];

  return (
    <div className="w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-[#eef5ff]/60 via-white to-white overflow-hidden">
        
        {/* Background Decorative Graphic Elements */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 -ml-24 -mb-24 w-80 h-80 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eaf7ef] border border-[#3fa56b]/30 text-[#3fa56b] text-xs md:text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#3fa56b] animate-pulse" />
                {COMPANY_INFO.tagline}
              </div>

              <h1 className="text-slate-900 font-bold tracking-tight">
                India Hub of <span className="text-[#123f91]">Pharmaceutical</span> Manufacturing
              </h1>

              <p className="text-base md:text-lg text-[#667085] leading-relaxed max-w-2xl">
                {COMPANY_INFO.heroSubhead}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/products"
                  className="px-7 py-3.5 rounded-xl bg-[#123f91] hover:bg-[#092b63] text-white font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  Explore Our Products <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => openEnquiryModal()}
                  className="px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#123f91] border-2 border-[#123f91]/30 font-semibold text-sm md:text-base shadow-sm hover:border-[#123f91] transition-all flex items-center gap-2"
                >
                  Contact Us <Send className="w-4 h-4 text-[#123f91]" />
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80">
                <div>
                  <div className="text-xl md:text-2xl font-bold text-[#092b63]">WHO-GMP</div>
                  <div className="text-xs text-[#667085]">Partner Standards</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-[#3fa56b]">6+</div>
                  <div className="text-xs text-[#667085]">Product Categories</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-[#123f91]">Global</div>
                  <div className="text-xs text-[#667085]">Export Reach</div>
                </div>
              </div>
            </div>

            {/* Hero Right Column Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Decorative background shape */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#123f91] to-[#3fa56b] opacity-10 blur-xl" />

                {/* Hero Image Container */}
                <div className="image-wrapper relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/hero_pharma_lab.jpg"
                    alt="Pharmaceutical Laboratory and Research Manufacturing Facility"
                    width={600}
                    height={450}
                    priority
                    className="w-full h-[360px] md:h-[440px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#092b63]/60 via-transparent to-transparent" />
                </div>

                {/* Floating Metric Card Overlay */}
                <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white/95 backdrop-blur-md p-4 md:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-[280px]">
                  <div className="p-3 rounded-xl bg-blue-50 text-[#123f91] shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#123f91] uppercase tracking-wider">Trusted Quality</div>
                    <p className="text-xs font-semibold text-slate-800 leading-snug">
                      Trusted Healthcare Partner Across Global Markets
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. HERO FEATURE CARDS */}
      <section className="relative z-20 -mt-6 md:-mt-10 pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card, idx) => (
              <div
                key={idx}
                className="feature-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${card.bgColor} flex items-center justify-center mb-4`}>
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#667085] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 3. WELCOME / ABOUT PREVIEW SECTION */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative">
                <div className="image-wrapper rounded-3xl shadow-xl overflow-hidden border-4 border-white">
                  <Image
                    src="/images/about_pharma_facility.jpg"
                    alt="Priyan Pharmaceuticals Export Manufacturing Line"
                    width={600}
                    height={450}
                    className="w-full h-[380px] md:h-[440px] object-cover"
                  />
                </div>

                {/* Overlapping Badge */}
                <div className="absolute top-6 right-6 bg-[#3fa56b] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Quality Sourcing
                </div>

                {/* Blue circular accent background */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full -z-10 blur-xl" />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#123f91]">
                  WELCOME TO PRIYAN PHARMACEUTICALS
                </span>
                <h2 className="text-slate-900 font-bold mt-2">
                  Your Health Is Our Mission
                </h2>
              </div>

              <p className="text-sm md:text-base text-[#667085] leading-relaxed">
                Priyan Pharmaceuticals is a professionally managed organization engaged in the export of pharmaceutical finished products, nutraceuticals, food supplements, cosmetics, surgical products, APIs, excipients, pellets, and intermediates.
              </p>

              <p className="text-sm md:text-base text-[#667085] leading-relaxed">
                Our goal is to provide high-quality products that support better healthcare outcomes. We work with trusted manufacturing partners and focus on quality, regulatory compliance, dependable service, and cost-effective solutions.
              </p>

              <p className="text-sm md:text-base text-[#667085] leading-relaxed">
                Through our global supply network, we help make healthcare products available to customers across different countries and markets.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Quality-focused sourcing",
                  "Regulatory documentation support",
                  "Trusted manufacturing partnerships",
                  "International supply capability",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#3fa56b] shrink-0" />
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#123f91] hover:bg-[#092b63] text-white font-semibold text-sm transition-all shadow-md"
                >
                  Know More About Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 4. PRODUCTS CATEGORIES GRID SECTION */}
      <section className="py-16 md:py-24 bg-[#f8fafc] border-t border-b border-slate-200/60">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#123f91]">
              OUR PRODUCT RANGE
            </span>
            <h2 className="text-slate-900 font-bold">
              Healthcare Products for Global Markets
            </h2>
            <p className="text-sm md:text-base text-[#667085]">
              We offer a broad range of pharmaceutical and healthcare products sourced from trusted manufacturing partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.map((category) => (
              <div key={category.id} className="product-card group flex flex-col justify-between">
                <div>
                  {/* Category Image Header */}
                  <div className="relative h-52 overflow-hidden">
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

                  {/* Category Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#123f91] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-[#667085] leading-relaxed mb-4">
                      {category.description}
                    </p>

                    <div className="space-y-1 mb-6">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Key Offerings:
                      </div>
                      {category.productTypes.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="text-xs text-slate-600 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3fa56b]" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/products/${category.slug}`}
                    className="text-xs font-bold text-[#123f91] group-hover:text-[#2468c9] flex items-center gap-1 uppercase tracking-wider"
                  >
                    View Category <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={() => openEnquiryModal(category.slug)}
                    className="px-3 py-1.5 rounded-lg bg-blue-50 text-[#123f91] hover:bg-[#123f91] hover:text-white text-xs font-semibold transition-colors"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#123f91] hover:bg-[#092b63] text-white font-semibold text-sm shadow-md transition-all"
            >
              Browse Complete Catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* 5. QUALITY AND COMPLIANCE SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative">
                <div className="image-wrapper rounded-3xl shadow-xl overflow-hidden border-4 border-white">
                  <Image
                    src="/images/quality_assurance_lab.jpg"
                    alt="Pharmaceutical Quality Control and Regulatory Compliance Lab"
                    width={600}
                    height={450}
                    className="w-full h-[380px] md:h-[440px] object-cover"
                  />
                </div>

                {/* Quality Stat Panel */}
                <div className="absolute -bottom-6 -right-4 md:right-6 bg-[#092b63] text-white p-5 rounded-2xl shadow-xl max-w-[240px]">
                  <div className="text-xs uppercase font-bold tracking-widest text-[#3fa56b] mb-1">
                    Compliance Focused
                  </div>
                  <p className="text-xs text-slate-200 leading-snug">
                    Sourced strictly from audited, regulatory-approved partner manufacturing sites.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#123f91]">
                  QUALITY ASSURANCE
                </span>
                <h2 className="text-slate-900 font-bold mt-2">
                  Committed to Quality and Compliance
                </h2>
              </div>

              <p className="text-sm md:text-base text-[#667085] leading-relaxed">
                We believe that quality, transparency, and regulatory responsibility are essential to building long-term healthcare partnerships. Products exported by Priyan Pharmaceuticals are manufactured at appropriate regulatory-approved partner manufacturing sites.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  { title: "Trusted Manufacturing Partners", desc: "Collaborating strictly with WHO-GMP and ISO certified partner production units." },
                  { title: "Quality-Focused Product Selection", desc: "Rigorous analytical evaluation matching pharmacopoeial standards (USP/BP/EP)." },
                  { title: "Regulatory Documentation Support", desc: "Providing CTD dossiers, Certificate of Analysis (COA), and stability study data." },
                  { title: "Customer-Specific Export Coordination", desc: "Fulfilling target market labeling, custom packaging, and shipping requirements." },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3fa56b] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-[#667085] mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/quality"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#123f91] hover:bg-[#092b63] text-white font-semibold text-sm transition-all shadow"
                >
                  Explore Quality Standards <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 6. GLOBAL PRESENCE SECTION */}
      <section className="py-16 md:py-24 bg-[#092b63] text-white relative overflow-hidden">
        
        {/* Background Network Graphic */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            src="/images/global_logistics_map.jpg"
            alt="Global Network Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container-custom relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3fa56b]">
              INTERNATIONAL REACH
            </span>
            <h2 className="text-white font-bold">
              Priyan Across the Globe
            </h2>
            <p className="text-sm md:text-base text-slate-300">
              We are committed to increasing global access to quality and cost-effective healthcare products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-blue-950/80 border border-blue-800/60 backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-blue-900/60 flex items-center justify-center text-emerald-400 mb-4">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Global Product Access</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Serving customers and institutional distributors through international pharmaceutical supply channels.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-950/80 border border-blue-800/60 backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-blue-900/60 flex items-center justify-center text-emerald-400 mb-4">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Reliable Export Coordination</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Supporting complete export documentation, regulatory dossiers, communication, and delivery logistics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-950/80 border border-blue-800/60 backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-blue-900/60 flex items-center justify-center text-emerald-400 mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Long-Term Partnerships</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Building dependable, transparent relationships with pharmaceutical importers and healthcare providers.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/global-presence"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#3fa56b] hover:bg-emerald-600 text-white font-semibold text-sm shadow-lg transition-all"
            >
              Partner With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* 7. WHY CHOOSE US SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#123f91]">
              OUR ADVANTAGES
            </span>
            <h2 className="text-slate-900 font-bold">
              Why Choose Priyan Pharmaceuticals?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200/70 hover:border-blue-300 transition-colors">
                <div className="text-2xl font-extrabold text-[#123f91] mb-2 font-mono">
                  {item.num}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 8. CALL TO ACTION BANNER */}
      <section className="py-16 bg-gradient-to-r from-[#092b63] via-[#123f91] to-[#092b63] text-white relative overflow-hidden">
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-white font-bold">
            Looking for a Reliable Pharmaceutical Partner?
          </h2>
          <p className="text-base text-slate-200">
            Tell us about your product requirements, target market, and documentation needs. Our team will get back to you.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openEnquiryModal()}
              className="px-8 py-3.5 rounded-xl bg-white text-[#123f91] hover:bg-slate-100 font-bold text-sm shadow-lg transition-all flex items-center gap-2"
            >
              Send an Enquiry <Send className="w-4 h-4" />
            </button>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl border-2 border-white/40 hover:border-white text-white font-semibold text-sm transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>


      {/* 9. HOMEPAGE CONTACT SECTION */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#123f91]">
                  GET IN TOUCH
                </span>
                <h2 className="text-slate-900 font-bold mt-2">
                  Let&apos;s Discuss Your Requirements
                </h2>
                <p className="text-sm text-[#667085] mt-3 leading-relaxed">
                  Share your product and market requirements with us. We will help you identify suitable solutions and provide the necessary technical information.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-[#123f91]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Inquiry</h4>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-slate-900 hover:text-[#123f91]">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-50 text-[#3fa56b]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone / WhatsApp</h4>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm font-bold text-slate-900 hover:text-[#3fa56b]">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-50 text-[#123f91]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Export Hub Location</h4>
                    <p className="text-sm font-bold text-slate-900">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
