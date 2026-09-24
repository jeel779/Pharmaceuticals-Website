"use client";

import React from "react";
import { Send } from "lucide-react";
import { useEnquiry } from "@/components/EnquiryModal";

interface Props {
  categorySlug: string;
  categoryTitle: string;
}

export const CategoryDetailClient: React.FC<Props> = ({ categorySlug, categoryTitle }) => {
  const { openEnquiryModal } = useEnquiry();

  return (
    <div className="p-6 rounded-3xl bg-gradient-to-br from-[#123f91] to-[#092b63] text-white space-y-4 shadow-xl">
      <h3 className="text-xl font-bold text-white">
        Request Specifications & Quote
      </h3>
      <p className="text-xs text-slate-200 leading-relaxed">
        Looking for bulk export quantities, technical dossiers, or pricing for {categoryTitle}? Our team will respond within 24 hours.
      </p>
      <button
        onClick={() => openEnquiryModal(categorySlug)}
        className="w-full py-3.5 px-4 rounded-xl bg-[#3fa56b] hover:bg-emerald-600 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
      >
        Enquire for {categoryTitle} <Send className="w-4 h-4" />
      </button>
    </div>
  );
};
