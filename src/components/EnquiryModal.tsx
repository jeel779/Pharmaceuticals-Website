"use client";

import React, { createContext, useContext, useState } from "react";
import { X, CheckCircle2, AlertCircle, Upload, Send, ShieldCheck } from "lucide-react";
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
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    category: selectedCategory || "pharmaceuticals",
    message: "",
    file: null as File | null,
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Update form category if prop changes
  React.useEffect(() => {
    if (selectedCategory) {
      setFormData((prev) => ({ ...prev, category: selectedCategory }));
    }
  }, [selectedCategory]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.message.trim()) newErrors.message = "Message details are required";
    if (!formData.consent) newErrors.consent = "You must agree to allow us to contact you regarding your inquiry";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          subject: `Enquiry: ${formData.category} (${formData.companyName} - ${formData.country})`,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({
            fullName: "",
            companyName: "",
            email: "",
            phone: "",
            country: "",
            category: "pharmaceuticals",
            message: "",
            file: null,
            consent: false,
          });
          onClose();
        }, 2500);
      } else {
        alert("Failed to send inquiry. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending inquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 md:p-8 animate-modal"
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
          <div className="py-12 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-2">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Enquiry Received</h3>
            <p className="text-slate-600 max-w-md mx-auto">
              Thank you for your enquiry. Our global export desk will review your product and market requirements and contact you shortly.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5" /> B2B Product Inquiry
              </div>
              <h2 id="enquiry-title" className="text-2xl font-bold text-slate-900">
                Request Product Specifications & Quote
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Provide your requirements, target region, and technical documentation needs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors outline-none ${
                      errors.fullName ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    }`}
                    placeholder="e.g. Dr. Robert Vance"
                  />
                  {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors outline-none ${
                      errors.companyName ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    }`}
                    placeholder="e.g. Apex Health Ltd."
                  />
                  {errors.companyName && <p className="text-xs text-red-600 mt-1">{errors.companyName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors outline-none ${
                      errors.email ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    }`}
                    placeholder="name@company.com"
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors outline-none ${
                      errors.phone ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    }`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Country / Target Market *
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors outline-none ${
                      errors.country ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    }`}
                    placeholder="e.g. UAE, Vietnam, Kenya"
                  />
                  {errors.country && <p className="text-xs text-red-600 mt-1">{errors.country}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Product Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm transition-colors outline-none bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  >
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <option key={cat.slug} value={cat.slug}>
                        {cat.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Product Details / Quantity / Documentation Needed *
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors outline-none ${
                    errors.message ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  }`}
                  placeholder="Specify dosage forms, therapeutic category, required dossiers (CTD/COA), estimated volume..."
                />
                {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
              </div>

              {/* Optional File Attachment */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Attachment (Optional - RFQ / Spec Document)
                </label>
                <div className="flex items-center gap-3 border border-dashed border-slate-300 rounded-lg p-3 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer">
                  <Upload className="w-5 h-5 text-slate-400" />
                  <span className="text-xs text-slate-600">
                    {formData.file ? formData.file.name : "Upload RFP, product specification, or PDF (Max 10MB)"}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFormData({ ...formData, file: e.target.files[0] });
                      }
                    }}
                  />
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.value ? e.target.checked : false })}
                    className="mt-1 rounded border-slate-300 text-blue-700 focus:ring-blue-600"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    I agree to allow Priyan Pharmaceuticals to store and process my business details to respond to this B2B export enquiry.
                  </span>
                </label>
                {errors.consent && <p className="text-xs text-red-600 mt-1">{errors.consent}</p>}
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-lg bg-[#123f91] hover:bg-[#092b63] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Enquiry <Send className="w-4 h-4" />
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
