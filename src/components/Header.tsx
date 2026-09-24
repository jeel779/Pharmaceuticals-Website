"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Pill, 
  ShieldCheck, 
  Globe2, 
  Send,
  Building2,
  Sparkles,
  Apple,
  Activity,
  FlaskConical,
  Layers
} from "lucide-react";
import { PRODUCT_CATEGORIES, COMPANY_INFO } from "@/data/products";
import { useEnquiry } from "@/components/EnquiryModal";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { openEnquiryModal } = useEnquiry();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products", hasDropdown: true },
    { name: "Quality", href: "/quality" },
    { name: "Global Presence", href: "/global-presence" },
    { name: "Contact Us", href: "/contact" },
  ];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Pill": return <Pill className="w-4 h-4 text-blue-600" />;
      case "Apple": return <Apple className="w-4 h-4 text-emerald-600" />;
      case "Sparkles": return <Sparkles className="w-4 h-4 text-amber-600" />;
      case "Activity": return <Activity className="w-4 h-4 text-teal-600" />;
      case "FlaskConical": return <FlaskConical className="w-4 h-4 text-indigo-600" />;
      case "Layers": return <Layers className="w-4 h-4 text-sky-600" />;
      default: return <Pill className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <header className={`sticky top-0 z-40 w-full bg-white transition-all duration-300 ${
      isScrolled ? "shadow-md border-b border-slate-200/80 py-3" : "border-b border-slate-100 py-4"
    }`}>
      <div className="container-custom flex items-center justify-between">
        
        {/* Company Logo */}
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#123f91] to-[#3fa56b] p-0.5 shadow-sm group-hover:shadow transition-shadow">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              {/* Abstract medical leaf + cross symbol */}
              <svg className="w-6 h-6 text-[#123f91]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M2 12h20" strokeLinecap="round" opacity="0.2" />
                <path d="M12 4a8 8 0 0 1 8 8c0 4.418-3.582 8-8 8s-8-3.582-8-8a8 8 0 0 1 8-8z" stroke="#123f91" />
                <path d="M12 7v10M7 12h10" stroke="#3fa56b" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg md:text-xl tracking-tight text-[#092b63] leading-none">
              PRIYAN
            </span>
            <span className="text-[10px] md:text-[11px] font-semibold tracking-widest text-[#3fa56b] uppercase">
              PHARMACEUTICALS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            if (link.hasDropdown) {
              return (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => setIsProductsDropdownOpen(true)}
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                      isActive ? "text-[#123f91] font-semibold bg-blue-50/60" : "text-slate-700 hover:text-[#123f91] hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                  </Link>

                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 w-80 pt-2 transition-all duration-200 ${
                    isProductsDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}>
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-3 space-y-1">
                      <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Product Portfolio
                      </div>
                      {PRODUCT_CATEGORIES.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/products/${cat.slug}`}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group/item"
                        >
                          <div className="p-2 rounded-lg bg-slate-100 group-hover/item:bg-white transition-colors">
                            {getCategoryIcon(cat.iconName)}
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-900 group-hover/item:text-[#123f91]">
                              {cat.title}
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              {cat.subtitle}
                            </div>
                          </div>
                        </Link>
                      ))}
                      <div className="pt-2 border-t border-slate-100">
                        <Link 
                          href="/products"
                          className="block text-center text-xs font-semibold text-[#123f91] hover:underline py-1.5"
                        >
                          Explore Full Catalog →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? "text-[#123f91] font-semibold bg-blue-50/60" : "text-slate-700 hover:text-[#123f91] hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => openEnquiryModal()}
            className="px-5 py-2.5 rounded-xl bg-[#123f91] hover:bg-[#092b63] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            Enquire Now
            <Send className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2.5 text-slate-700 hover:text-[#123f91] hover:bg-slate-100 rounded-xl transition-colors"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-Over Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm top-[65px]">
          <div className="bg-white w-full h-[calc(100vh-65px)] overflow-y-auto p-6 flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
                Navigation
              </div>
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                        isActive ? "text-[#123f91] bg-blue-50" : "text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Product Categories Quick Mobile List */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
                  Product Categories
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/products/${cat.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-3 py-2 text-xs font-medium text-slate-600 hover:text-[#123f91] hover:bg-blue-50/50 rounded-lg flex items-center gap-2"
                    >
                      {getCategoryIcon(cat.iconName)}
                      {cat.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Footer CTA */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openEnquiryModal();
                }}
                className="w-full py-3 rounded-xl bg-[#123f91] text-white text-base font-semibold shadow-md flex items-center justify-center gap-2"
              >
                Enquire Now <Send className="w-4 h-4" />
              </button>
              <p className="text-center text-xs text-slate-400">
                Global B2B Healthcare & Pharma Exports
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
