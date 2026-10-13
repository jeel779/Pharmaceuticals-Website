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
  metadataBase: new URL("https://kanishpharmaceuticals.com"),
  title: {
    default: "Kanish Pharmaceuticals Pvt. Ltd. | Pharmaceutical Exporter from India",
    template: "%s | Kanish Pharmaceuticals Pvt. Ltd.",
  },
  description:
    "Kanish Pharmaceuticals Pvt. Ltd. supplies pharmaceutical, nutraceutical, cosmetic, surgical, API, and healthcare products to global markets. Sourced from regulatory-approved partner manufacturing sites.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
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
  authors: [{ name: "Kanish Pharmaceuticals Pvt. Ltd." }],
  openGraph: {
    title: "Kanish Pharmaceuticals Pvt. Ltd. | Pharmaceutical Exporter from India",
    description: "Quality pharmaceutical, nutraceutical, cosmetic, surgical, API, and intermediate products for global healthcare markets.",
    url: "https://kanishpharmaceuticals.com",
    siteName: "Kanish Pharmaceuticals Pvt. Ltd.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanish Pharmaceuticals Pvt. Ltd.",
    description: "Quality healthcare products for global markets.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "4jD-1E5y_hYl2lvJc42lBIAsnJYpSIg51UD-IgYhQlE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KANISH PHARMACEUTICALS PVT LTD.",
    "alternateName": "Kanish Pharmaceuticals",
    "url": "https://kanishpharmaceuticals.com",
    "logo": "https://kanishpharmaceuticals.com/images/logo.png",
    "description": "Professionally managed Indian organization engaged in the export of pharmaceutical finished products, nutraceuticals, cosmetics, surgical products, APIs, excipients, pellets, and intermediates.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@kanishpharmaceuticals.com",
      "contactType": "export desk",
      "areaServed": "Global"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
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
