export interface ProductCategory {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  iconName: string;
  productTypes: string[];
  therapeuticCategories: string[];
  technicalSupport: string[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "finished-pharma",
    slug: "pharmaceuticals",
    title: "Pharmaceutical Finished Products",
    subtitle: "Quality-assured finished formulations for global healthcare markets",
    description: "Quality-assured finished pharmaceutical formulations for different therapeutic categories and global markets.",
    fullDescription: "Priyan Pharmaceuticals supplies finished pharmaceutical formulations (tablets, capsules, injections, oral liquids, ointments, dry powder inhalers) sourced from regulatory-approved partner manufacturing facilities. We ensure every batch conforms to international pharmacopoeial standards (USP/BP/EP) and customer-specific market requirements.",
    image: "/images/cat_finished_pharma.jpg",
    iconName: "Pill",
    productTypes: [
      "Oral Solid Dosage (Tablets & Hard Gelatin Capsules)",
      "Injectable Formulations (Liquid Vials, Ampoules & Dry Powder Injections)",
      "Oral Liquids, Syrups & Suspensions",
      "Topical Creams, Ointments & Gels",
      "Ophthalmic & Nasal Formulations"
    ],
    therapeuticCategories: [
      "Antibiotics & Anti-Infective Agents",
      "Cardiovascular & Metabolic Care",
      "Gastroenterology & Anti-Ulcerants",
      "Pain Management & Analgesics",
      "Central Nervous System (CNS) Formulations"
    ],
    technicalSupport: [
      "Certificate of Analysis (COA) per batch",
      "Finished Product Specifications & Test Methods",
      "Stability Study Data (Zone IVb accelerated & real-time)",
      "Method of Analysis (MOA)",
      "CTD / eCTD Dossier Technical Support"
    ]
  },
  {
    id: "nutraceuticals",
    slug: "nutraceuticals",
    title: "Nutraceuticals and Food Supplements",
    subtitle: "Nutrition-focused formulations to support wellness and daily health",
    description: "Nutrition-focused products designed to support wellness and daily health requirements.",
    fullDescription: "Our nutraceutical product portfolio encompasses vitamins, minerals, herbal extracts, protein supplements, and dietary formulations designed to support holistic health. We collaborate with quality-oriented manufacturing partners to deliver safe, compliant, and cost-effective health supplements for international distributors.",
    image: "/images/cat_nutraceuticals.jpg",
    iconName: "Apple",
    productTypes: [
      "Multivitamin & Mineral Softgel Capsules",
      "Herbal Extracts & Botanical Supplements",
      "Protein Powders & Amino Acid Complexes",
      "Joint Care & Collagen Support Formulations",
      "Probiotic & Digestive Enzyme Supplements"
    ],
    therapeuticCategories: [
      "Immune System Support & Daily Wellness",
      "Bone, Joint & Cartilage Health",
      "Cardiovascular & Metabolic Balance",
      "Women's & Men's Specialized Health",
      "Active Lifestyle & Sports Nutrition"
    ],
    technicalSupport: [
      "Batch Analytical Reports & Certificate of Analysis",
      "Nutritional Content Verification",
      "Heavy Metal & Microbiological Testing Reports",
      "Free Sale Certificate (FSC) Assistance",
      "Custom Export Packaging & Private Labeling Support"
    ]
  },
  {
    id: "cosmetics",
    slug: "cosmetics",
    title: "Cosmetics and Personal Care",
    subtitle: "Personal care and dermatological products manufactured through reliable partners",
    description: "Personal-care and cosmetic products manufactured through reliable and quality-focused partners.",
    fullDescription: "We facilitate the supply of high-grade dermatological skincare, hair care, and personal hygiene products. Manufactured under strict quality guidelines by accredited partner sites, our cosmetic portfolio caters to retail distributors, pharmacy chains, and specialized skincare brands.",
    image: "/images/cat_cosmetics.jpg",
    iconName: "Sparkles",
    productTypes: [
      "Dermatological Serums & Facial Creams",
      "Broad-Spectrum Sunscreens & Photoprotective Gels",
      "Skin Brightening & Anti-Aging Complexes",
      "Acne Care & Medicated Lotions",
      "Nourishing Scalp & Hair Growth Treatments"
    ],
    therapeuticCategories: [
      "Clinical Skincare & Dermatological Care",
      "Daily Cleansers & Hydrating Formulas",
      "Targeted Cosmeceuticals",
      "Trichology & Hair Fortification",
      "Gentle Pediatric Skincare"
    ],
    technicalSupport: [
      "Dermatological Safety & Compatibility Testing",
      "INCI Ingredient Declaration Documents",
      "Stability & Preservative Challenge Data",
      "Material Safety Data Sheets (MSDS)",
      "Regulatory Label Compliance Check"
    ]
  },
  {
    id: "surgicals",
    slug: "surgical-products",
    title: "Surgical Products",
    subtitle: "Healthcare and surgical items for hospitals, distributors, and institutional buyers",
    description: "Healthcare and surgical products intended for hospitals, clinics, distributors, and institutional buyers.",
    fullDescription: "Priyan Pharmaceuticals supplies a wide spectrum of sterile surgical disposables, wound care items, diagnostic consumables, and hospital equipment. Sourced from certified medical device manufacturers, our surgical portfolio supports hospital networks and international healthcare procurement agencies.",
    image: "/images/cat_surgicals.jpg",
    iconName: "Activity",
    productTypes: [
      "Disposable Surgical Drapes, Gowns & Caps",
      "Sterile Surgical Gloves (Latex & Nitrile)",
      "IV Cannulas, Catheters & Infusion Sets",
      "Wound Care Dressing & Surgical Sutures",
      "Sterile Syringes, Needles & Blood Tubes"
    ],
    therapeuticCategories: [
      "Operating Theater Consumables",
      "Infection Control & Barrier Protection",
      "Intravenous & Fluid Management",
      "Trauma Care & Wound Management",
      "Hospital Ward & Diagnostic Supplies"
    ],
    technicalSupport: [
      "Sterilization Certificates (EO / Gamma Irradiation)",
      "Quality Standard Compliance Declarations",
      "Detailed Product Specifications & Dimensional Charts",
      "Batch Traceability & Lot Documentation",
      "International Shipping Documentation"
    ]
  },
  {
    id: "apis-excipients",
    slug: "apis-excipients",
    title: "APIs and Excipients",
    subtitle: "Active ingredients and supporting materials for pharmaceutical manufacturing",
    description: "Active pharmaceutical ingredients and supporting materials for pharmaceutical manufacturing.",
    fullDescription: "We provide pharmaceutical manufacturers across international markets with high-purity Active Pharmaceutical Ingredients (APIs) and essential excipients. Sourced from audited raw material producers, our materials adhere to pharmacopoeial specifications to ensure batch-to-batch consistency in drug synthesis.",
    image: "/images/cat_apis.jpg",
    iconName: "FlaskConical",
    productTypes: [
      "Active Pharmaceutical Ingredients (APIs)",
      "Pharmaceutical Excipients (Binders & Disintegrants)",
      "Coating Agents, Polymers & Solvents",
      "Buffering Agents & pH Adjusters",
      "Preservatives & Stabilizers"
    ],
    therapeuticCategories: [
      "Antibacterial & Anti-Infective Raw Materials",
      "Analgesic & NSAID Active Ingredients",
      "Cardiovascular API Compounds",
      "Metabolic & Endocrine APIs",
      "Custom Synthesis Material Sourcing"
    ],
    technicalSupport: [
      "Drug Master File (DMF) Availability Support",
      "Comprehensive Certificate of Analysis (COA)",
      "Impurity & Residual Solvent Profiles",
      "Particle Size & Polymorphism Analysis",
      "Regulatory Documentation & Quality Statements"
    ]
  },
  {
    id: "pellets-intermediates",
    slug: "pellets-intermediates",
    title: "Pellets and Intermediates",
    subtitle: "Specialized pharmaceutical materials for manufacturing and formulation applications",
    description: "Specialized pharmaceutical materials for manufacturing and formulation applications.",
    fullDescription: "Priyan Pharmaceuticals offers sustained-release, enteric-coated, and modified-release pharmaceutical pellets alongside key chemical intermediates. These specialized materials empower drug manufacturers to create advanced solid dosage formulations with optimized bio-availability and targeted release profiles.",
    image: "/images/cat_pellets.jpg",
    iconName: "Layers",
    productTypes: [
      "Enteric-Coated Omeprazole & Esomeprazole Pellets",
      "Sustained-Release Itraconazole & Diclofenac Pellets",
      "Extended-Release Duloxetine & Venlafaxine Pellets",
      "Advanced Synthetic Organic Intermediates",
      "Custom Coated Granules & Micro-Pellets"
    ],
    therapeuticCategories: [
      "Gastroenterology Modified-Release Pellets",
      "Antifungal Sustained-Release Pellets",
      "Neuropsychiatry Extended-Release Pellets",
      "Cardiovascular Release-Controlled Pellets",
      "Key Starting Materials (KSMs)"
    ],
    technicalSupport: [
      "In-Vitro Dissolution Profile Test Data",
      "Assay & Related Substance Certificates",
      "Drug Release Kinetic Specifications",
      "Technical Batch Documentation",
      "Dossier Integration & Regulatory Guidance"
    ]
  }
];

export const COMPANY_INFO = {
  name: "Priyan Pharmaceuticals",
  tagline: "Your Health Is Our Mission",
  heroHeadline: "India Hub of Pharmaceutical Manufacturing",
  heroSubhead: "Delivering quality pharmaceutical, nutraceutical, cosmetic, surgical, and healthcare products to customers across the globe.",
  email: "info@priyanpharmaceuticals.com",
  phone: "+91 98765 43210",
  address: "Gujarat / Maharashtra Industrial Belt, India",
  copyrightYear: 2026,
};
