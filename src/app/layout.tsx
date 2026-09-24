import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquiryProvider } from "@/components/EnquiryModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://priyanpharmaceuticals.com"),
  title: {
    default: "Priyan Pharmaceuticals | Pharmaceutical Exporter from India",
    template: "%s | Priyan Pharmaceuticals",
  },
  description:
    "Priyan Pharmaceuticals supplies pharmaceutical, nutraceutical, cosmetic, surgical, API, and healthcare products to global markets. Sourced from regulatory-approved partner manufacturing sites.",
  keywords: [
    "Pharmaceutical Exporter India",
    "Pharma Export Company India",
    "Finished Pharmaceutical Formulations",
    "Nutraceuticals Export",
    "Cosmetics & Skincare Export",
    "Surgical Products Supplier",
    "APIs and Excipients",
    "Pharmaceutical Pellets",
    "WHO-GMP Manufacturer Partner"
  ],
  authors: [{ name: "Priyan Pharmaceuticals" }],
  openGraph: {
    title: "Priyan Pharmaceuticals | Pharmaceutical Exporter from India",
    description: "Quality pharmaceutical, nutraceutical, cosmetic, surgical, API, and intermediate products for global healthcare markets.",
    url: "https://priyanpharmaceuticals.com",
    siteName: "Priyan Pharmaceuticals",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyan Pharmaceuticals",
    description: "Quality healthcare products for global markets.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Priyan Pharmaceuticals",
    "alternateName": "Priyan Pharma",
    "url": "https://priyanpharmaceuticals.com",
    "logo": "https://priyanpharmaceuticals.com/images/hero_pharma_lab.jpg",
    "description": "Professionally managed Indian organization engaged in the export of pharmaceutical finished products, nutraceuticals, cosmetics, surgical products, APIs, excipients, pellets, and intermediates.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@priyanpharmaceuticals.com",
      "contactType": "export desk",
      "areaServed": "Global"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col justify-between">
        <EnquiryProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </EnquiryProvider>
      </body>
    </html>
  );
}
