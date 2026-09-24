"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Send,
  Pill,
  Apple,
  Sparkles,
  Activity,
  FlaskConical,
  Layers
} from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/products";
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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "MANUFACTURING", href: "/manufacturing" },
    { name: "GLOBAL PRESENCE", href: "/global-presence" },
    { name: "PRODUCTS", href: "/products", hasDropdown: true },
    { name: "CONTACT US", href: "/contact" },
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
    <div className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-slate-50 border-b border-slate-200 text-[#d97706] py-1.5 text-xs font-semibold">
        <div className="container-custom flex items-center justify-end gap-6">
          <div className="flex items-center gap-1.5 hover:text-[#b45309] transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#092b63]" />
            <a href="tel:+919727250640">+91 9727250640</a>, <a href="tel:+919016808536">+91 9016808536</a>
          </div>
          <div className="flex items-center gap-1.5 hover:text-[#b45309] transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#092b63]" />
            <a href="mailto:info@priyanpharmaceuticals.com">info@priyanpharmaceuticals.com</a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className={`sticky top-0 z-40 w-full bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md border-b border-slate-200 py-3" : "border-b border-slate-100 py-4"
      }`}>
        <div className="container-custom flex items-center justify-between">
          
          {/* Company Logo Image */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="Priyan Pharmaceuticals Logo"
              width={220}
              height={55}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
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
                      className={`px-3 py-2 text-xs xl:text-sm font-semibold tracking-wide transition-colors flex items-center gap-1 ${
                        isActive ? "text-[#d97706] border-b-2 border-[#092b63]" : "text-[#d97706] hover:text-[#092b63]"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 w-80 pt-2 transition-all duration-200 ${
                      isProductsDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    }`}>
                      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-3 space-y-1">
                        <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          Product Categories
                        </div>
                        {PRODUCT_CATEGORIES.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/products/${cat.slug}`}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-amber-50/70 transition-colors group/item"
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
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-xs xl:text-sm font-semibold tracking-wide transition-colors ${
                    isActive ? "text-[#d97706] border-b-2 border-[#092b63]" : "text-[#d97706] hover:text-[#092b63]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>



          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#123f91] rounded-xl transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slide-Over Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm top-[90px]">
            <div className="bg-white w-full h-[calc(100vh-90px)] overflow-y-auto p-6 flex flex-col justify-between shadow-2xl">
              <div className="space-y-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
                  Menu
                </div>
                <div className="space-y-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                          isActive ? "text-[#d97706] bg-amber-50" : "text-slate-800 hover:bg-slate-50"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>


            </div>
          </div>
        )}
      </header>
    </div>
  );
};
