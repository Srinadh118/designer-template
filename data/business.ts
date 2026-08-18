export interface Project {
  id: string;
  title: string;
  category: "Residential" | "Villas" | "Modular Kitchens" | "Commercial" | "Living Spaces";
  location: string;
  year: string;
  area: string;
  image: string;
  secondaryImages?: string[];
  description: string;
  brief: string;
  materials: string[];
  featured?: boolean;
  aspectRatio?: "landscape" | "portrait" | "tall" | "square";
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  deliverables: string[];
  idealFor: string;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  keyOutcome: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  location: string;
  projectType: string;
  year: string;
  rating: number;
}

export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  eyebrow: string;
  description: string;
  foundedYear: string;
  location: {
    city: string;
    state: string;
    country: string;
    address: string;
    coordinatesText: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string; // international format without spaces (e.g., '919876543210')
    whatsappDisplay: string;
    email: string;
    hours: string;
  };
  social: {
    instagram: string;
    pinterest: string;
    linkedin: string;
    facebook: string;
  };
  stats: {
    value: string;
    label: string;
    note?: string;
  }[];
  hero: {
    eyebrow: string;
    headlinePart1: string;
    headlinePart2: string;
    headlinePart3: string;
    supportingText: string;
    featuredProjectBadge: {
      tag: string;
      title: string;
      location: string;
      specs: string;
    };
    heroImage: string;
  };
  about: {
    headline: string;
    subheadline: string;
    narrativeP1: string;
    narrativeP2: string;
    imageMain: string;
    imageSecondary: string;
    quote: string;
    quoteAuthor: string;
  };
  services: Service[];
  projects: Project[];
  process: ProcessStep[];
  testimonials: Testimonial[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const businessData: BusinessConfig = {
  name: "STUDIO ARCHE",
  shortName: "Arche",
  tagline: "Spaces Designed Around You.",
  eyebrow: "ARCHITECTURE & INTERIOR STUDIO",
  description:
    "A bespoke interior architecture studio crafting high-end residential, luxury villas, and tailored living environments combining timeless minimalism with tactile warmth.",
  foundedYear: "2016",
  location: {
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    address: "Road No. 36, Jubilee Hills, Hyderabad 500033",
    coordinatesText: "17.4319° N, 78.4073° E",
  },
  contact: {
    phone: "+919876543210",
    phoneDisplay: "+91 98765 43210",
    whatsapp: "919876543210",
    whatsappDisplay: "+91 98765 43210",
    email: "hello@studioarche.com",
    hours: "Mon – Sat: 10:00 AM – 7:00 PM",
  },
  social: {
    instagram: "https://instagram.com",
    pinterest: "https://pinterest.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
  },
  stats: [
    {
      value: "10+",
      label: "Years of Studio Craft",
      note: "Continuous practice in high-end architecture",
    },
    {
      value: "150+",
      label: "Completed Sanctuaries",
      note: "Bespoke residences & boutique spaces",
    },
    {
      value: "12",
      label: "Cities Across India",
      note: "Hyderabad, Bengaluru, Mumbai, Goa & more",
    },
    {
      value: "100%",
      label: "Client-Centric Process",
      note: "Dedicated project lead from brief to handover",
    },
  ],
  hero: {
    eyebrow: "INTERIOR ARCHITECTURE & DESIGN STUDIO",
    headlinePart1: "SPACES",
    headlinePart2: "DESIGNED",
    headlinePart3: "AROUND YOU.",
    supportingText:
      "Thoughtfully curated interiors that bring together refined architectural proportions, natural materials, and timeless livability.",
    featuredProjectBadge: {
      tag: "FEATURED RESIDENCE",
      title: "The Jubilee Sanctuary",
      location: "Jubilee Hills, Hyderabad",
      specs: "4,800 sq.ft · Completed 2025",
    },
    // High-res luxury warm minimalist living room architectural photography
    heroImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85",
  },
  about: {
    headline: "Designing spaces that feel like you.",
    subheadline: "An architectural approach to living beautifully.",
    narrativeP1:
      "We believe that a truly exceptional home is never merely styled—it is composed. Every line, shadow, material texture, and void is sculpted to honor how you rest, gather, and live each day.",
    narrativeP2:
      "From bespoke teak joinery and Italian travertine accents to acoustic calibration and intuitive lighting schemes, we balance quiet sophistication with uncompromised comfort.",
    imageMain:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    imageSecondary:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    quote:
      "True luxury in interior design is not about ornament; it is the tranquility of a space perfectly tuned to human rhythm.",
    quoteAuthor: "Principal Architect, Studio Arche",
  },
  projects: [
    {
      id: "jubilee-residence",
      title: "The Jubilee Sanctuary",
      category: "Residential",
      location: "Jubilee Hills, Hyderabad",
      year: "2025",
      area: "4,800 sq.ft",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
      secondaryImages: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      ],
      description:
        "A 4BHK luxury penthouse defined by brushed travertine stone, continuous linen drapes, fluted walnut walls, and bespoke atmospheric lighting.",
      brief:
        "The client desired a peaceful retreat from the bustling city with seamless indoor-outdoor sightlines and generous entertaining zones.",
      materials: ["Roman Travertine", "American Walnut", "Fluted Glass", "Natural Linen"],
      featured: true,
      aspectRatio: "landscape",
    },
    {
      id: "serene-villa-gandipet",
      title: "The Gandipet Lakehouse Villa",
      category: "Villas",
      location: "Gandipet, Hyderabad",
      year: "2024",
      area: "7,200 sq.ft",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      secondaryImages: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      ],
      description:
        "A sprawling lakeside villa embracing brutalist warmth, monolithic concrete forms, warm teak ceilings, and panoramic water reflections.",
      brief:
        "A multi-generational retreat prioritizing natural cross-ventilation, expansive double-height volumes, and earthy tactile durability.",
      materials: ["Exposed Board-form Concrete", "Burmese Teak", "Limewash Plaster", "Bronze Hardware"],
      featured: true,
      aspectRatio: "portrait",
    },
    {
      id: "atelier-modular-kitchen",
      title: "The Sculptural Kitchen Atelier",
      category: "Modular Kitchens",
      location: "Financial District, Hyderabad",
      year: "2025",
      area: "650 sq.ft",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
      secondaryImages: [
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      ],
      description:
        "An architectural culinary studio featuring continuous quartzite monolithic islands, pocketed appliance garages, and concealed touch-to-open joinery.",
      brief:
        "Designed for a passionate home chef who hosts intimate supper clubs, requiring seamless concealment of prep zones and museum-grade finishes.",
      materials: ["Taj Mahal Quartzite", "Smoked Oak Veneer", "Miele Built-in Suite", "Brushed Brass"],
      featured: true,
      aspectRatio: "square",
    },
    {
      id: "kavuri-hills-penthouse",
      title: "Kavuri Sky Suite",
      category: "Living Spaces",
      location: "Madhapur, Hyderabad",
      year: "2024",
      area: "3,600 sq.ft",
      image:
        "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1600&q=85",
      secondaryImages: [
        "https://images.unsplash.com/photo-1618219944342-824e40a13885?auto=format&fit=crop&w=1200&q=80",
      ],
      description:
        "An open-plan living and salon area highlighted by low-slung custom bouclé seating, sculptural pendant lighting, and customized art niches.",
      brief:
        "Creating a gallery-like backdrop for an avid contemporary art collector with high acoustic dampening and flexible entertaining configurations.",
      materials: ["Italian Microcement", "White Bouclé", "Smoked Ash", "Recessed Architectural Lighting"],
      featured: false,
      aspectRatio: "tall",
    },
    {
      id: "hitec-creative-studio",
      title: "Veritas Executive Workspace",
      category: "Commercial",
      location: "HITEC City, Hyderabad",
      year: "2024",
      area: "5,400 sq.ft",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
      secondaryImages: [
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      ],
      description:
        "A boutique wealth management headquarters combining boardroom prestige, acoustic acoustic felt panels, and warm residential hospitality.",
      brief:
        "Moving away from clinical commercial cubicles toward a hospitality-inspired workplace where clients feel confident and at ease.",
      materials: ["Acoustic Wool Felt", "Dark Walnut Paneling", "Nero Marquina Marble", "Custom Leather Desks"],
      featured: false,
      aspectRatio: "landscape",
    },
    {
      id: "banjara-master-suite",
      title: "The Banjara Master Sanctuary",
      category: "Residential",
      location: "Banjara Hills, Hyderabad",
      year: "2025",
      area: "1,200 sq.ft",
      image:
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=85",
      secondaryImages: [
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
      ],
      description:
        "A private master bedroom retreat with an integrated walk-through dressing suite, fluted oak headboard wall, and wellness en-suite bath.",
      brief:
        "Crafting a five-star boutique hotel atmosphere focused on restorative sleep, tactile fabrics, and warm morning light diffusion.",
      materials: ["Belgian Linen", "Fluted White Oak", "Calacatta Gold", "Custom Ambient Sconces"],
      featured: false,
      aspectRatio: "landscape",
    },
  ],
  services: [
    {
      id: "residential",
      number: "01",
      title: "Residential Interiors",
      shortDesc: "Complete interior solutions for apartments, luxury duplexes, and independent homes.",
      fullDesc:
        "From comprehensive spatial reconfiguration to millwork details, we engineer every square inch of your home to balance daily functionality with understated elegance.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      deliverables: [
        "Complete 3D Visualization & Spatial Walkthroughs",
        "Custom Furniture & Millwork Detail Drawings",
        "Material Moodboards & Swatch Curation",
        "Electrical, HVAC & Lighting Layout Coordination",
      ],
      idealFor: "Homeowners embarking on 3BHK, 4BHK or Penthouse transformations",
    },
    {
      id: "villas",
      number: "02",
      title: "Bespoke Villa Architecture",
      shortDesc: "Architectural interiors and landscape integration for sprawling independent villas.",
      fullDesc:
        "We approach villas holistically—harmonizing structural grandeur, double-height volumes, skylight choreography, and indoor-outdoor courtyards.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      deliverables: [
        "Double-height Architectural Feature Planning",
        "Indoor Courtyard & Landscape Lighting Strategy",
        "Custom Monolithic Stone & Staircase Details",
        "Whole-Home Automation & Climate Integration",
      ],
      idealFor: "Luxury gated villa owners & bespoke private estates (4,000+ sq.ft)",
    },
    {
      id: "kitchens",
      number: "03",
      title: "Modular Culinary Ateliers",
      shortDesc: "Custom German & Italian precision kitchen layouts tailored to your culinary flow.",
      fullDesc:
        "We treat the kitchen as the architectural heartbeat of the home. Precision ergonomics, concealed pantry storage, monolithic islands, and heat-resistant quartz surfaces.",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      deliverables: [
        "Ergonomic Working Triangle Optimization",
        "Concealed Appliance & Pantry Engineering",
        "Quartzite & Granite Monolithic Island Detailing",
        "Integrated Under-cabinet Lighting & Touch Hardware",
      ],
      idealFor: "Homeowners who love cooking, entertaining, and clutter-free counters",
    },
    {
      id: "living",
      number: "04",
      title: "Living & Salon Environments",
      shortDesc: "Comfortable and sophisticated entertaining spaces designed for everyday family life.",
      fullDesc:
        "Living areas require delicate acoustic balance, durable tactile textiles, and conversational seating arrangements that feel welcoming for guests yet intimate for quiet evenings.",
      image:
        "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80",
      deliverables: [
        "Conversational Seating & Custom Bouclé Joinery",
        "Acoustic Wall Treatment & TV Unit Integration",
        "Art Curation & Dedicated Feature Niches",
        "Multi-layer Ambient & Accent Lighting Scenarios",
      ],
      idealFor: "Grand formal living rooms, family lounges, and entertainment dens",
    },
    {
      id: "bedroom",
      number: "05",
      title: "Restorative Bedroom Suites",
      shortDesc: "Personalized private suites focused on deep sleep, organization, and tranquility.",
      fullDesc:
        "We design bedrooms as sensory sanctuaries: circadian lighting, blackout drape pockets, fluted acoustic headboards, and walk-in dressing suites crafted with velvet-lined organization.",
      image:
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      deliverables: [
        "Acoustic Padded & Fluted Timber Headboard Walls",
        "Custom Walk-Through Closet & Wardrobe Systems",
        "Circadian Bedside Lighting Controls",
        "Bespoke Vanity & Dressing Islands",
      ],
      idealFor: "Master bedroom suites, guest sanctuaries, and kids' creative rooms",
    },
    {
      id: "turnkey",
      number: "06",
      title: "Turnkey Design & Execution",
      shortDesc: "End-to-end management from concept, procurement, civil execution, to final handover.",
      fullDesc:
        "Enjoy absolute peace of mind. We take full ownership of contractor supervision, quality checkpoints, budget tracking, vendor procurement, and handover with zero guesswork.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      deliverables: [
        "Dedicated On-Site Project Engineer & Quality Audits",
        "Transparent Bill of Quantities (BOQ) Tracking",
        "Curated Material & Appliance Procurement",
        "White-Glove Deep Cleaning & Move-in Ready Handover",
      ],
      idealFor: "Busy professionals, NRIs, and clients seeking an effortless execution",
    },
  ],
  process: [
    {
      step: "01",
      number: "01",
      title: "Discovery & Briefing",
      duration: "Week 1",
      description:
        "We meet on-site or virtually to map your lifestyle rituals, aesthetic preferences, functional priorities, and budget boundaries.",
      deliverables: ["Site Measurement & Spatial Audit", "Design Brief Document", "Budget Scope Estimation"],
      keyOutcome: "A crystal-clear blueprint of your space and expectations.",
    },
    {
      step: "02",
      number: "02",
      title: "Concept & Spatial Layouts",
      duration: "Week 2 – 3",
      description:
        "We explore multiple floor plan iterations, optimize sightlines, and establish material palettes and 3D architectural mood boards.",
      deliverables: ["2D Optimized Floor Plans", "Moodboard & Material Schemes", "Preliminary 3D Volumetric Studies"],
      keyOutcome: "Approval of the core layout and architectural aesthetic direction.",
    },
    {
      step: "03",
      number: "03",
      title: "3D Photorealism & Detail Drawings",
      duration: "Week 4 – 5",
      description:
        "Every room is modeled in photorealistic detail. We produce exact millwork, electrical, plumbing, ceiling, and stone execution drawings.",
      deliverables: [
        "Photorealistic 3D Renders for All Rooms",
        "Detailed Millwork & Joinery Blueprints",
        "Fixed-cost Bill of Quantities (BOQ)",
      ],
      keyOutcome: "Total visual and financial clarity before a single nail is hammered.",
    },
    {
      step: "04",
      number: "04",
      title: "Artisanal Execution & Supervision",
      duration: "Week 6 – 14",
      description:
        "Our vetted master carpenters, stone masons, and technicians bring the drawings to life under strict multi-tier quality supervision.",
      deliverables: [
        "Bi-weekly Milestone Video Updates",
        "Material Verification Sign-offs",
        "Quality Audit Checkpoints",
      ],
      keyOutcome: "Precision execution matching the approved 3D renders down to the millimeter.",
    },
    {
      step: "05",
      number: "05",
      title: "White-Glove Handover",
      duration: "Week 15",
      description:
        "After deep architectural cleaning, styling, and snag-list resolution, we welcome you home with documentation, warranties, and care guides.",
      deliverables: [
        "Snag-free Room-by-Room Walkthrough",
        "Warranty Dossier & Material Care Guide",
        "Professional Project Photography Keepsake",
      ],
      keyOutcome: "A flawless, ready-to-live sanctuary that exceeds every expectation.",
    },
  ],
  testimonials: [
    {
      id: "1",
      quote:
        "Studio Arche completely transformed our Jubilee Hills penthouse. Their restraint, focus on authentic stone textures, and meticulous lighting plan created a calm we look forward to every single evening.",
      client: "Priya & Rahul M.",
      location: "Jubilee Hills, Hyderabad",
      projectType: "Residential 4BHK Penthouse",
      year: "2025",
      rating: 5,
    },
    {
      id: "2",
      quote:
        "As an NRI living in London, executing our Gandipet villa from afar seemed daunting. The Arche team handled everything with utter transparency. The finished home was 100% true to the 3D renders.",
      client: "Vikram & Ananya R.",
      location: "Gandipet, Hyderabad",
      projectType: "Luxury Villa (7,200 sq.ft)",
      year: "2024",
      rating: 5,
    },
    {
      id: "3",
      quote:
        "Their architectural discipline sets them apart from typical interior decorators. Every cabinet, flush door, and shadow gap was thought through. Worth every rupee invested.",
      client: "Siddharth K.",
      location: "Banjara Hills, Hyderabad",
      projectType: "Duplex Residence",
      year: "2025",
      rating: 5,
    },
  ],
  faqs: [
    {
      question: "How does your pricing and fee structure work?",
      answer:
        "We work on a transparent hybrid model: a fixed architectural design & 3D consultation fee plus an itemized Bill of Quantities (BOQ) with zero hidden markups. You always know exactly what goes into materials, craftsmanship, and management.",
    },
    {
      question: "Do you take up projects outside Hyderabad?",
      answer:
        "Yes. While our primary design studio and fabrication workshop are in Hyderabad, we undertake turnkey and design-consultancy residences across Bengaluru, Mumbai, Goa, and Andhra Pradesh.",
    },
    {
      question: "Can I customize the scope (e.g. only modular kitchen or full turnkey)?",
      answer:
        "Absolutely. While most clients engage us for whole-home turnkey transformations, we regularly execute focused interventions for high-spec modular kitchens, master suites, or architectural living spaces.",
    },
    {
      question: "How long does a typical home interior take to complete?",
      answer:
        "A standard 3BHK to 4BHK luxury residence takes approximately 10 to 14 weeks from 3D sign-off to handover. Larger villas range from 16 to 24 weeks depending on structural customizations.",
    },
  ],
};
