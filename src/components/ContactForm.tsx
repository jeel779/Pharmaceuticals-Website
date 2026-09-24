"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Upload, ShieldCheck } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/products";

interface ContactFormProps {
  defaultCategory?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ defaultCategory = "pharmaceuticals" }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    category: defaultCategory,
    message: "",
    file: null as File | null,
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.country.trim()) newErrors.country = "Country / Region is required";
    if (!formData.message.trim()) newErrors.message = "Message details are required";
    if (!formData.consent) newErrors.consent = "You must accept the consent checkbox to submit your enquiry";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        country: "",
        category: defaultCategory,
        message: "",
        file: null,
        consent: false,
      });
    }, 1200);
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-100">
      {isSuccess ? (
        <div className="py-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-2">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Thank You for Your Enquiry</h3>
          <p className="text-slate-600 max-w-md mx-auto">
            Thank you for your enquiry. Our team will review your product and export documentation requirements and contact you shortly.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="mt-4 px-6 py-2.5 rounded-xl bg-[#123f91] text-white text-sm font-semibold hover:bg-[#092b63] transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none ${
                  errors.fullName ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-[#123f91] focus:ring-1 focus:ring-[#123f91]"
                }`}
                placeholder="e.g. Dr. Arthur Pendelton"
              />
              {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="companyName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Company Name *
              </label>
              <input
                id="companyName"
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none ${
                  errors.companyName ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-[#123f91] focus:ring-1 focus:ring-[#123f91]"
                }`}
                placeholder="e.g. Global Med Distributors"
              />
              {errors.companyName && <p className="text-xs text-red-600 mt-1">{errors.companyName}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none ${
                  errors.email ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-[#123f91] focus:ring-1 focus:ring-[#123f91]"
                }`}
                placeholder="name@company.com"
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Phone / WhatsApp *
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none ${
                  errors.phone ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-[#123f91] focus:ring-1 focus:ring-[#123f91]"
                }`}
                placeholder="+91 / Country Code + Number"
              />
              {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="country" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Country / Export Market *
              </label>
              <input
                id="country"
                type="text"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none ${
                  errors.country ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-[#123f91] focus:ring-1 focus:ring-[#123f91]"
                }`}
                placeholder="e.g. Nigeria, Brazil, Philippines"
              />
              {errors.country && <p className="text-xs text-red-600 mt-1">{errors.country}</p>}
            </div>

            <div>
              <label htmlFor="category" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Product Category *
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm transition-colors outline-none bg-white focus:border-[#123f91] focus:ring-1 focus:ring-[#123f91]"
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
            <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Message / Product Requirements *
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none ${
                errors.message ? "border-red-500 bg-red-50/20" : "border-slate-300 focus:border-[#123f91] focus:ring-1 focus:ring-[#123f91]"
              }`}
              placeholder="Tell us about your product requirements, target market, dosage forms, and technical documentation needs..."
            />
            {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Attachment (Optional - Product Specs / Tender Document)
            </label>
            <div className="flex items-center gap-3 border border-dashed border-slate-300 rounded-xl p-3 bg-slate-50 hover:bg-slate-100/60 transition-colors cursor-pointer">
              <Upload className="w-5 h-5 text-slate-400" />
              <span className="text-xs text-slate-600">
                {formData.file ? formData.file.name : "Attach specification sheet or tender document (PDF/DOC, Max 10MB)"}
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

          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 rounded border-slate-300 text-[#123f91] focus:ring-[#123f91]"
              />
              <span className="text-xs text-slate-600 leading-relaxed">
                I agree to allow Priyan Pharmaceuticals to contact me regarding my product requirements and technical documentation needs.
              </span>
            </label>
            {errors.consent && <p className="text-xs text-red-600 mt-1">{errors.consent}</p>}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-[#123f91] hover:bg-[#092b63] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting Enquiry...
                </>
              ) : (
                <>
                  Submit Enquiry <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
