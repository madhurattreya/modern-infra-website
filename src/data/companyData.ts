export interface ProductInfo {
  id: string;
  slug: string;
  code: string;
  title: string;
  shortDesc: string;
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
  applications: string[];
  image: string;
}

export interface IndustryInfo {
  id: string;
  name: string;
  code: string;
  description: string;
  benefits: string[];
  icon: string;
  projectsCount: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  code: string;
  title: string;
  category: string;
  location: string;
  area: string;
  steelTonnage: string;
  completionYear: string;
  image: string;
  highlights: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  content: string[];
}

export const COMPANY_CONTACT = {
  name: "HAM Engineering Exim India Pvt Ltd",
  brandKicker: "HEAVY FABRICATION & EXIM // EST. 2008",
  phone: "+91-7668813647",
  whatsapp: "+917668813647",
  altPhone: "+91-7689891603",
  email: "hameximpvtltd@gmail.com",
  address: "Plot No. 42-45, Industrial Growth Area, Sector 58, Faridabad / NCR, India",
  plantArea: "7,50,000+ SQ. FT.",
  capacityMT: "75,000 MT/Year",
  projectsCompleted: "500+",
  yearsExperience: "18+",
  workforce: "150+ Technical Specialists",
  isoCert: "ISO 9001:2015 & ISO 14001 Certified",
  tagline: "Turnkey Pre-Engineered Steel Buildings, Heavy Fabrication & Export Infrastructure"
};

export const PRODUCTS: ProductInfo[] = [
  {
    id: "peb",
    slug: "pre-engineered-building",
    code: "PEB-SYS-01",
    title: "Pre-Engineered Building (PEB)",
    shortDesc: "Computer-engineered rigid frame steel structures designed for massive clear spans, rapid assembly, and seismic resilience.",
    description: "Modern Infra is a premier manufacturer of custom-designed Pre-Engineered Buildings. Built using high-grade structural steel conforming to ASTM and IS standards, our PEBs optimize weight, maximize usable internal volumetric space, and reduce construction cycle time by up to 50% compared to traditional concrete construction.",
    specs: [
      { label: "Clear Span Capacity", value: "Up to 90+ Meters without intermediate columns" },
      { label: "Steel Yield Strength", value: "345 MPa to 550 MPa High-Tensile Steel" },
      { label: "Erection Velocity", value: "30-50% faster than conventional civil structures" },
      { label: "Design Standards", value: "IS:800-2007, MBMA 2010, AISC 360-16" }
    ],
    features: [
      "Tapered built-up primary frames with submerged arc welding",
      "Galvanized Z and C cold-formed secondary purlins and girts",
      "Integrated crane runway beams up to 50 MT capacity",
      "Pre-punched bolted connections for zero site welding"
    ],
    applications: ["Logistics Mega-Warehouses", "Heavy Industrial Manufacturing Plants", "Aviation Hangars", "FMCG Distribution Hubs"],
    image: "/images/peb_erection.jpg"
  },
  {
    id: "puf",
    slug: "puf-panel",
    code: "PUF-PAN-02",
    title: "PUF (Polyurethane Foam) Panels",
    shortDesc: "Continuous line insulated sandwich panels offering superior thermal insulation, acoustic barrier, and airtight envelope.",
    description: "Our high-density CFC/HCFC-free Polyurethane Foam panels provide state-of-the-art thermal resistance with an exceptional U-value. Engineered with interlocking tongue-and-groove joints, they prevent thermal bridging in cold chains, pharmaceuticals, and temperature-controlled facilities.",
    specs: [
      { label: "Core Density", value: "40 ± 2 kg/m³ Rigorous Polyurethane Foam" },
      { label: "Thermal Conductivity", value: "0.022 W/m·K (Superior K-value)" },
      { label: "Facing Sheet Thickness", value: "0.45mm to 0.80mm Pre-painted Galvalume/GI" },
      { label: "Standard Thickness Range", value: "40mm, 50mm, 60mm, 80mm, 100mm, 120mm, 150mm" }
    ],
    features: [
      "Continuous auto-injection manufacturing technology",
      "Fire-retardant B2/B1 grade insulation core",
      "Vapour-tight gasketed joint profile preventing condensations",
      "Antibacterial food-grade coating options available"
    ],
    applications: ["Cold Storage & Blast Freezers", "Pharma Clean Rooms", "Food Processing Units", "Controlled Atmosphere Warehouses"],
    image: "/images/puf_cold_chain.jpg"
  },
  {
    id: "mezzanine",
    slug: "mezzanine-building",
    code: "MEZ-MLT-03",
    title: "Mezzanine Building / Multi-Storey Systems",
    shortDesc: "Heavy-duty modular intermediate floor systems that double or triple usable vertical space within your industrial footprint.",
    description: "Engineered to withstand heavy dynamic live loads, our mezzanine floor systems integrate seamlessly with primary PEB portal frames or as independent freestanding platforms. Designed with decking sheets, shear studs, and reinforced structural girders.",
    specs: [
      { label: "Live Load Rating", value: "300 kg/m² up to 2,500 kg/m²" },
      { label: "Decking Slab Profile", value: "Composite Metal Deck (44/130 or 52/300)" },
      { label: "Column Grid Flexibility", value: "Custom column spacing up to 12m bays" },
      { label: "Corrosion Treatment", value: "Hot-dip galvanizing or high-build epoxy zinc primer" }
    ],
    features: [
      "Custom integration with freight elevators and conveyor ramps",
      "Composite steel-concrete action using welded shear connectors",
      "Safety kick plates, industrial stairways, and pallet load gates",
      "Quick bolt-on installation without disrupting ground operations"
    ],
    applications: ["E-Commerce Fulfillment Centers", "Multi-Tier Parts Storage", "Factory Administrative Offices", "Assembly Line Overheads"],
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "conventional",
    slug: "conventional-building",
    code: "CON-HVY-04",
    title: "Conventional Steel Buildings",
    shortDesc: "Fabrication and turnkey erection of heavy hot-rolled structural steelwork for complex architectural geometries and extreme loads.",
    description: "For infrastructure demanding bespoke structural layouts, heavy process equipment support, or non-standard geometrical envelopes, Modern Infra delivers shop-fabricated standard sections, trusses, and plate girders built to exact engineering tolerances.",
    specs: [
      { label: "Steel Profiles", value: "ISMB, ISMC, ISA, Built-up Box Columns, Circular Hollow" },
      { label: "Weld Inspection", value: "100% Ultrasonic & Radiographic Testing (UT/RT)" },
      { label: "Crane Support Capacity", value: "Up to 100+ MT overhead EOT cranes" },
      { label: "Fabrication Accuracy", value: "±2mm strict shop floor tolerance" }
    ],
    features: [
      "Heavy lattice girders and space frames for complex spans",
      "High-tonnage process plant structural steel fabrication",
      "Heavy-duty blast-cleaned surfaces (SA 2.5 standard)",
      "Site bolting with High-Strength Friction Grip (HSFG) bolts"
    ],
    applications: ["Steel Rolling Mills & Foundry Shops", "Cement & Fertilizer Heavy Plants", "Power Generation Enclosures", "Bridge Trusses"],
    image: "/images/factory_floor.jpg"
  },
  {
    id: "roof-sheeting",
    slug: "roof-sheeting",
    code: "ROF-SHT-05",
    title: "High-Tensile Roof Sheeting",
    shortDesc: "Precision roll-formed Galvalume and colour-coated corrugated profile sheets offering weather tightness and solar reflectance.",
    description: "Our premium cold-rolled roofing sheets use 55% Al-Zn alloy coated steel (Galvalume AZ-150) with high tensile yield strength (550 MPa). Designed with anti-capillary grooves and crest-fastened profiles, they deliver leak-proof protection and exceptional UV resistance.",
    specs: [
      { label: "Base Metal Thickness", value: "0.45mm to 0.70mm BMT" },
      { label: "Yield Strength", value: "550 MPa (Grade G550 High-Tensile)" },
      { label: "Coating Class", value: "AZ150 Galvalume / SMP Paint System" },
      { label: "Profile Height", value: "28mm to 35mm deep rib profile for maximum water drainage" }
    ],
    features: [
      "Anti-capillary side-lap siphon groove to prevent capillary seepage",
      "Solar Reflectance Index (SRI) > 75 for reduced indoor heat gain",
      "Available in continuous lengths up to 14+ meters (no end laps)",
      "Supplied with self-drilling EPDM-washered hex-head fasteners"
    ],
    applications: ["Industrial Shed Roofs", "Railway Platform Canopies", "Agricultural Storage Units", "Commercial Warehouses"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "cladding",
    slug: "cladding-systems",
    code: "CLD-FAC-06",
    title: "Architectural Cladding Systems",
    shortDesc: "Aesthetic wall facades and protective exterior envelope profiles crafted for modern architectural appeal and environmental defense.",
    description: "Modern Infra offers customized wall cladding systems combining structural durability with eye-catching modern architectural styling. Available in micro-ribbed, wave, and flat-line profiles in a wide range of RAL industrial color finishes.",
    specs: [
      { label: "Material Composition", value: "Pre-painted Galvalume / Aluminium / Polycarbonate inserts" },
      { label: "Paint Coating", value: "Regular Modified Polyester (RMP) or PVDF (70/30)" },
      { label: "Corrosion Resistance", value: "Tested up to 1,000+ hours Salt Spray Test" },
      { label: "Orientation", value: "Vertical or Horizontal architectural lay" }
    ],
    features: [
      "Concealed fastener systems for seamless smooth exterior",
      "Integrated louvers for natural ventilation and thermal air exhaust",
      "High UV resistance preventing chalking and fading",
      "Impact resistant against heavy industrial wear"
    ],
    applications: ["Corporate Headquarters & Industrial Facades", "Automobile Showrooms", "Airport Terminals", "Data Centers"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "steel-structures",
    slug: "steel-structures",
    code: "STR-ENG-07",
    title: "Fabricated Structural Steelwork",
    shortDesc: "Engineered built-up box sections, heavy columns, crane beams, and high-load architectural frameworks.",
    description: "We manufacture custom steel structures for complex industrial projects. Utilizing computerized automated cutting and fitting lines, our fabrication ensures tight assembly tolerances, high weld integrity, and smooth on-site erection.",
    specs: [
      { label: "Plate Thickness Handled", value: "6mm up to 80mm thick structural plates" },
      { label: "Welding Protocols", value: "AWS D1.1 Structural Welding Code compliant" },
      { label: "Surface Prep", value: "Centrifugal wheel blast cleaning to SA 2.5" },
      { label: "Painting System", value: "Zinc silicate primer + polyurethane aliphatic topcoat" }
    ],
    features: [
      "Custom welded plate girders and heavy crane brackets",
      "High-precision computerized base plate drilling",
      "Comprehensive Non-Destructive Testing (NDT) documentation",
      "Complete anchor bolt cast-in cage assemblies"
    ],
    applications: ["Metro Train Depots & Stations", "Steel Plants & Foundries", "Refinery Pipe Racks", "Bulk Material Handling Sheds"],
    image: "/images/cnc_cutting.jpg"
  },
  {
    id: "metal-ceiling",
    slug: "metal-false-ceiling-systems",
    code: "CEI-MTL-08",
    title: "Metal False Ceiling Systems",
    shortDesc: "Acoustic and aesthetic powder-coated aluminum and GI ceiling grid panels for modern commercial and institutional spaces.",
    description: "High-grade metal suspended ceilings offering outstanding acoustic damping, clean room compatibility, and seamless integration with industrial LED lighting and HVAC diffusers.",
    specs: [
      { label: "Panel Substrate", value: "High grade Aluminium alloy or Galvanized Steel" },
      { label: "Coating Finish", value: "Electrostatic Polyester Powder Coating (60-80 microns)" },
      { label: "Sound Absorption (NRC)", value: "Up to 0.75 with acoustic non-woven fleece" },
      { label: "Grid Suspension", value: "Heavy-duty hot-dipped galvanized T-grid system" }
    ],
    features: [
      "Micro-perforated options for acoustic sound absorption",
      "Moisture and fire resistant (Class A rating)",
      "Demountable panels allowing 100% plenum accessibility",
      "Clean room and dust-free surface finish"
    ],
    applications: ["Airport Terminals", "Metro Concourse Areas", "Corporate Tech Parks", "Hospital Clean Rooms"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
  }
];

export const INDUSTRIES: IndustryInfo[] = [
  {
    id: "logistics",
    name: "Logistics & Warehousing",
    code: "IND-LOG-01",
    description: "High-bay automated warehouses with 30m+ height, clear spans, and laser-screed floor compliance for robotic retrieval.",
    benefits: ["Zero intermediate columns for seamless forklift transit", "Integrated dock levelers and canopy overhangs", "Optimized roof skylight coverage reducing daylight power consumption"],
    icon: "Truck",
    projectsCount: "180+ Units Built",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Heavy Engineering",
    code: "IND-MFG-02",
    description: "Robust PEB factory sheds equipped with heavy EOT crane brackets, vibration isolation, and high-capacity electrical runs.",
    benefits: ["Support for 10 MT to 50 MT overhead cranes", "Thermal and ventilation optimization via continuous ridge vents", "Heavy floor slab integration for heavy stamping machinery"],
    icon: "Factory",
    projectsCount: "140+ Plants Ereceted",
    image: "/images/factory_floor.jpg"
  },
  {
    id: "aviation",
    name: "Aviation & Defense Hangars",
    code: "IND-AVN-03",
    description: "Ultra-wide clear span hangars with custom multi-leaf sliding doors designed to accommodate commercial and defense aircraft.",
    benefits: ["Massive 60m-90m clear span open doorways", "Fire deluge suppression structural beam integration", "Specialized blast-resistant blast coatings"],
    icon: "Plane",
    projectsCount: "15+ Hangars",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cold-storage",
    name: "Cold Chains & Agro Logistics",
    code: "IND-CLD-04",
    description: "Hermetically sealed multi-chamber cold storage facilities using continuous line PUF panel envelopes for minus 25°C preservation.",
    benefits: ["Complete thermal bridge elimination", "Food-grade non-toxic interior wall liners", "Rapid refrigeration power efficiency"],
    icon: "Snowflake",
    projectsCount: "65+ Cold Facilities",
    image: "/images/puf_cold_chain.jpg"
  },
  {
    id: "infrastructure",
    name: "Metro, Rail & Public Infrastructure",
    code: "IND-INF-05",
    description: "Architectural steel stations, concourse trusses, railway platform sheds, and public transport terminal steel buildings.",
    benefits: ["Rapid night-time erection with minimal civic disruption", "Aesthetic architectural exposed steel (AESS) finishing", "100-year design life structural durability"],
    icon: "TrainTrack",
    projectsCount: "40+ Transit Stations",
    image: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sports-commercial",
    name: "Sports Arenas & Commercial Showrooms",
    code: "IND-SPT-06",
    description: "High-volume indoor stadiums, swimming complexes, auto dealerships, and multi-tier retail shopping hubs.",
    benefits: ["Architectural curved roof profiles & skylights", "Column-free spectator viewing lines", "Seamless glazing and ACP facade integration"],
    icon: "Building2",
    projectsCount: "60+ Commercial Units",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "metro-station",
    code: "PRJ // DMRC-084",
    title: "Metro Elevated Station Structural Steelwork",
    category: "Transit Infrastructure",
    location: "Delhi-NCR, India",
    area: "125,000 SQ. FT.",
    steelTonnage: "1,850 MT",
    completionYear: "2024",
    image: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=900&q=80",
    highlights: ["Pre-assembled arched portal frames", "Installed over active traffic corridors without downtime", "Specialized fire-rated intumescent coating"]
  },
  {
    id: "logistics-hub",
    code: "PRJ // FMCG-201",
    title: "E-Commerce Mega Distribution Center",
    category: "Logistics & Warehousing",
    location: "Bhiwandi, Maharashtra",
    area: "450,000 SQ. FT.",
    steelTonnage: "3,200 MT",
    completionYear: "2023",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    highlights: ["38m clear span bays with 14m clear height", "Multi-tier structural mezzanine flooring", "Integrated 60-bay dock leveler overhangs"]
  },
  {
    id: "chemical-manufacturing",
    code: "PRJ // CHEM-419",
    title: "Heavy Chemical Processing Plant Shed",
    category: "Manufacturing",
    location: "Dahej SEZ, Gujarat",
    area: "210,000 SQ. FT.",
    steelTonnage: "2,400 MT",
    completionYear: "2024",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    highlights: ["30 MT overhead EOT crane gantry systems", "Anti-corrosion marine grade C5-M epoxy coating", "Explosion-vented wall cladding profile"]
  },
  {
    id: "cold-chain-pharma",
    code: "PRJ // PHRM-772",
    title: "Pharmaceutical Cold Chain Storage Facility",
    category: "PUF & Clean Room",
    location: "Baddi, Himachal Pradesh",
    area: "95,000 SQ. FT.",
    steelTonnage: "850 MT",
    completionYear: "2023",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    highlights: ["120mm thick continuous PUF sandwich envelope", "Precise -20°C to +4°C dual climate chambers", "100% thermal bridge insulated floor transitions"]
  },
  {
    id: "auto-ancillary",
    code: "PRJ // AUTO-103",
    title: "Automobile Stamping & Assembly Works",
    category: "Heavy Industry",
    location: "Manesar, Haryana",
    area: "310,000 SQ. FT.",
    steelTonnage: "2,900 MT",
    completionYear: "2024",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    highlights: ["40 MT crane runways with crane stops", "Translucent polycarbonate daylight wall strips", "High-velocity wind load tested per IS:875 Part 3"]
  },
  {
    id: "sports-complex",
    code: "PRJ // SPT-550",
    title: "Multi-Purpose Indoor Sports Arena",
    category: "Public Architecture",
    location: "Jaipur, Rajasthan",
    area: "85,000 SQ. FT.",
    steelTonnage: "920 MT",
    completionYear: "2022",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    highlights: ["55m unobstructed clear span curved truss", "Acoustic metal false ceiling grid", "Standing seam insulated roof cladding"]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "peb-vs-conventional",
    slug: "peb-vs-conventional-construction-speed",
    title: "Why Pre-Engineered Buildings Reduce Construction Timelines by 50%",
    category: "Technical Analysis",
    date: "OCT 02, 2026",
    readTime: "5 MIN READ",
    author: "Eng. R. Sharma (Head of Engineering)",
    excerpt: "A direct comparative analysis of pre-engineered steel framing versus traditional in-situ RCC construction in industrial warehouse applications.",
    content: [
      "In industrial infrastructure, time to commercial operation directly governs capital payback. Traditional Reinforced Cement Concrete (RCC) construction requires sequential on-site shuttering, steel tying, concrete pouring, and a mandatory 28-day curing period for each structural lift.",
      "Pre-Engineered Buildings (PEBs) disrupt this linear dependency through parallel processing. While site grading and anchor bolt casting take place on the worksite, 100% of the primary tapered members, cold-formed purlins, and roof sheets are precision-fabricated in an automated factory environment.",
      "By eliminating on-site curing delays and replacing wet work with high-strength bolted connections, project developers typically compress a 12-month construction schedule down to just 5.5 months."
    ]
  },
  {
    id: "puf-panel-thermal-efficiency",
    slug: "puf-panel-thermal-insulation-guide",
    title: "Selecting Optimal PUF Panel Thickness for Cold Storage & Cleanrooms",
    category: "Material Science",
    date: "SEP 18, 2026",
    readTime: "7 MIN READ",
    author: "Dr. K. Verma (Thermal Systems Lead)",
    excerpt: "How to calculate heat ingress, thermal conductivity (K-value), and condensation points when specifying insulated sandwich panels.",
    content: [
      "Specifying insulated wall and roof panels for cold storage is not merely a question of thickness—it is an economic balance between initial capital expenditure and decade-long refrigeration power consumption.",
      "High-density rigid Polyurethane Foam (PUF) at 40 kg/m³ boasts an exceptional thermal conductivity of 0.022 W/m·K, which is more than twice as insulative as standard expanded polystyrene (EPS) or rockwool of identical thickness.",
      "For deep-freeze chambers maintained at -20°C in tropical ambient climates exceeding 45°C, a minimum panel core thickness of 120mm to 150mm with double-gasket tongue-and-groove sealing is essential to permanently prevent interstitial condensation."
    ]
  },
  {
    id: "seismic-wind-design-steel",
    slug: "seismic-and-wind-load-engineering-in-peb",
    title: "Designing PEB Portal Frames for High-Velocity Wind & Zone V Seismic Forces",
    category: "Structural Engineering",
    date: "AUG 29, 2026",
    readTime: "6 MIN READ",
    author: "Modern Infra Technical Bureau",
    excerpt: "Understanding the rigorous mathematical modeling required to ensure structural stability in extreme coastal cyclones and earthquake belts.",
    content: [
      "Large-span PEBs exhibit high strength-to-weight ratios, meaning wind uplift forces and cross-wind suction on roof sheets frequently govern design over gravity dead loads.",
      "Our structural bureau conducts 3D finite element modeling in STAAD.Pro and Tekla Structures conforming to IS:875 (Part 3) 2015 wind code updates, incorporating terrain category modifiers, cyclonic importance factors, and localized suction coefficients at eaves and corners.",
      "Through strategically placed rod bracing, portal frames, and flange bracing at primary moment connections, the structure absorbs lateral forces while preserving total elastic recovery."
    ]
  }
];
