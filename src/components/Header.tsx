"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
} from "lucide-react";
import { useEnquiry } from "@/components/EnquiryModal";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { openEnquiryModal } = useEnquiry();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { name: "PRODUCTS", href: "/products" },
    { name: "CONTACT US", href: "/contact" },
  ];

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
            <a href="mailto:info@kanishpharmaceuticals.com">info@kanishpharmaceuticals.com</a>
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
              alt="KANISH PHARMACEUTICALS PVT LTD. Logo"
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
