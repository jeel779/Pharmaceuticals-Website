"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe, ShieldCheck, ArrowRight } from "lucide-react";
import { COMPANY_INFO, PRODUCT_CATEGORIES } from "@/data/products";
import { useEnquiry } from "@/components/EnquiryModal";

export const Footer: React.FC = () => {
  const { openEnquiryModal } = useEnquiry();

  return (
    <footer className="bg-[#092b63] text-white pt-16 pb-8 border-t border-blue-900/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-blue-900/60">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-0.5 shadow-sm flex items-center justify-center">
                <svg className="w-6 h-6 text-[#123f91]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20" strokeLinecap="round" opacity="0.2" />
                  <path d="M12 4a8 8 0 0 1 8 8c0 4.418-3.582 8-8 8s-8-3.582-8-8a8 8 0 0 1 8-8z" stroke="#123f91" />
                  <path d="M12 7v10M7 12h10" stroke="#3fa56b" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-white leading-none">
                  PRIYAN
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-[#3fa56b] uppercase">
                  PHARMACEUTICALS
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed">
              A professionally managed pharmaceutical export organization focused on quality, regulatory compliance, and global healthcare access.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-lg bg-blue-950/80 border border-blue-800/60 text-xs font-medium text-emerald-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Quality & Compliance Focused
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 uppercase tracking-wider text-xs text-blue-300">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Products Directory
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Quality & Compliance
                </Link>
              </li>
              <li>
                <Link href="/global-presence" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Global Presence
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 uppercase tracking-wider text-xs text-blue-300">
              Product Categories
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/products/${cat.slug}`} className="hover:text-white hover:translate-x-1 transition-all inline-block">
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs text-blue-300">
              Global Export Desk
            </h3>
            
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Email Inquiry</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-emerald-300 font-medium">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Phone / WhatsApp</span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-white hover:text-emerald-300 font-medium">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Export & Manufacturing Hub</span>
                  <span className="text-white font-medium">{COMPANY_INFO.address}</span>
                </div>
              </li>
            </ul>

            <button
              onClick={() => openEnquiryModal()}
              className="w-full mt-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow"
            >
              Send B2B Enquiry <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {COMPANY_INFO.copyrightYear} {COMPANY_INFO.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/quality" className="hover:text-slate-200 transition-colors">
              Export Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
