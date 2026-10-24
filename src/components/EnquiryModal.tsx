"use client";

import React, { createContext, useContext, useState } from "react";
import { X, CheckCircle2, Send, ShieldCheck, Mail, Phone, User, MessageSquare } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/products";

interface EnquiryContextType {
  isOpen: boolean;
  selectedCategory: string;
  openEnquiryModal: (categorySlug?: string) => void;
  closeEnquiryModal: () => void;
}

const EnquiryContext = createContext<EnquiryContextType>({
  isOpen: false,
  selectedCategory: "",
  openEnquiryModal: () => {},
  closeEnquiryModal: () => {},
});

export const useEnquiry = () => useContext(EnquiryContext);

export const EnquiryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const openEnquiryModal = (categorySlug?: string) => {
    if (categorySlug) {
      setSelectedCategory(categorySlug);
    } else {
      setSelectedCategory("");
    }
    setIsOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsOpen(false);
  };

  return (
    <EnquiryContext.Provider value={{ isOpen, selectedCategory, openEnquiryModal, closeEnquiryModal }}>
      {children}
      <EnquiryModalDialog isOpen={isOpen} selectedCategory={selectedCategory} onClose={closeEnquiryModal} />
    </EnquiryContext.Provider>
  );
};

interface ModalProps {
  isOpen: boolean;
  selectedCategory: string;
  onClose: () => void;
}

const EnquiryModalDialog: React.FC<ModalProps> = ({ isOpen, selectedCategory, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: selectedCategory || "pharmaceuticals",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Update form category if selectedCategory prop changes
  React.useEffect(() => {
    if (selectedCategory) {
      setFormData((prev) => ({ ...prev, category: selectedCategory }));
    }
  }, [selectedCategory]);

  if (!isOpen) return null;

  const currentCategory = PRODUCT_CATEGORIES.find((c) => c.slug === formData.category);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Please write your inquiry or requirement";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not specified",
          product: currentCategory ? currentCategory.title : formData.category,
          subject: `Product Enquiry: ${currentCategory ? currentCategory.title : formData.category} - from ${formData.name}`,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            category: "pharmaceuticals",
            message: "",
          });
          onClose();
        }, 2200);
      } else {
        setSubmitError(data.error || "Failed to send inquiry to Gmail. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setSubmitError("Failed to connect to server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 md:p-8 animate-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Close enquiry modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-10 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-2">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#092b63]">Inquiry Sent Successfully!</h3>
            <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
              Your inquiry has been emailed directly to our team via Gmail. We will get back to you shortly.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#092b63] text-xs font-semibold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3fa56b]" /> Quick Product Inquiry
              </div>
              <h2 id="enquiry-title" className="text-2xl font-bold text-[#092b63]">
                Send Product Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill in the details below to receive product specifications, dossier info, or a quotation.
              </p>
            </div>

            {submitError && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Product Category Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Product / Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#092b63] focus:ring-1 focus:ring-[#092b63] outline-none bg-white font-medium text-slate-800"
                >
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <option key={cat.slug} value={cat.slug}>
                      {cat.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Your Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
                      errors.name ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-[#092b63] focus:ring-1 focus:ring-[#092b63]"
                    }`}
                    placeholder="e.g. John Doe"
                  />
                </div>
                {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
                      errors.email ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-[#092b63] focus:ring-1 focus:ring-[#092b63]"
                    }`}
                    placeholder="e.g. name@company.com"
                  />
                </div>
                {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Phone / WhatsApp <span className="text-slate-400 normal-case font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none focus:border-[#092b63] focus:ring-1 focus:ring-[#092b63]"
                    placeholder="e.g. +91 98765 43210"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Inquiry / Requirement Details *
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm outline-none transition-colors resize-none ${
                      errors.message ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-[#092b63] focus:ring-1 focus:ring-[#092b63]"
                    }`}
                    placeholder="Please mention product quantities, target market, or required specifications..."
                  />
                </div>
                {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl bg-[#092b63] hover:bg-[#123f91] text-white font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending to Gmail...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
