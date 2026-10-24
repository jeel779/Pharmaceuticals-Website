"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, User, Mail, Phone, MessageSquare } from "lucide-react";

interface Props {
  categorySlug: string;
  categoryTitle: string;
}

export const CategoryDetailClient: React.FC<Props> = ({ categorySlug, categoryTitle }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email required";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

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
          product: categoryTitle,
          subject: `Product Enquiry: ${categoryTitle} - from ${formData.name}`,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitError(data.error || "Failed to send inquiry. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setSubmitError("Failed to connect. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 md:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-md">
      <div className="mb-4">
        <span className="text-[11px] font-bold text-[#d97706] uppercase tracking-wider block mb-1">
          Direct Inquiry
        </span>
        <h3 className="text-xl font-extrabold text-[#092b63]">
          Inquire for {categoryTitle}
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Send your requirement directly to our team via Gmail. We will get back to you promptly.
        </p>
      </div>

      {isSuccess ? (
        <div className="py-6 text-center space-y-3 bg-emerald-50/60 rounded-xl border border-emerald-200/60 p-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-[#3fa56b]">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="text-base font-bold text-[#092b63]">Inquiry Sent Successfully!</h4>
          <p className="text-xs text-slate-600">
            Thank you! Your requirement has been emailed to our team. We will contact you shortly.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="text-xs font-semibold text-[#092b63] hover:underline pt-2 inline-block cursor-pointer"
          >
            Send another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          {submitError && (
            <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-600">
              {submitError}
            </div>
          )}

          {/* Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Your Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full pl-9 pr-3 py-2 rounded-lg border text-xs sm:text-sm outline-none transition-colors ${
                  errors.name ? "border-red-400 bg-red-50/30" : "border-slate-300 focus:border-[#092b63]"
                }`}
                placeholder="e.g. Robert Smith"
              />
            </div>
            {errors.name && <p className="text-[11px] text-red-500 mt-0.5">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full pl-9 pr-3 py-2 rounded-lg border text-xs sm:text-sm outline-none transition-colors ${
                  errors.email ? "border-red-400 bg-red-50/30" : "border-slate-300 focus:border-[#092b63]"
                }`}
                placeholder="e.g. robert@example.com"
              />
            </div>
            {errors.email && <p className="text-[11px] text-red-500 mt-0.5">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Phone / WhatsApp <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm outline-none focus:border-[#092b63]"
                placeholder="e.g. +91 98765 43210"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Requirement / Message *
            </label>
            <div className="relative">
              <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full pl-9 pr-3 py-2 rounded-lg border text-xs sm:text-sm outline-none transition-colors resize-none ${
                  errors.message ? "border-red-400 bg-red-50/30" : "border-slate-300 focus:border-[#092b63]"
                }`}
                placeholder="Enter required quantities, dosage forms, or target country..."
              />
            </div>
            {errors.message && <p className="text-[11px] text-red-500 mt-0.5">{errors.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 px-4 rounded-lg bg-[#092b63] hover:bg-[#123f91] text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-1"
          >
            {isSubmitting ? (
              <span>Sending to Gmail...</span>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
