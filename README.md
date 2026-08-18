# Studio Arche — Luxury Interior Architecture & Design Studio Template

> An **Awwwards-level, editorial, modular, and conversion-optimized website template** designed for high-end interior designers, architecture firms, and luxury residential studios.

![Template Preview](https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85)

---

## Highlights & Design Direction

Inspired by the visual serenity of top architectural publications (Architectural Digest, Elle Decor, Axel Vervoordt, Studio McGee), this template is engineered to give local interior design studios an **ultra-premium ₹20,000–₹50,000+ agency presence** with zero complexity.

- **Aesthetic**: Warm minimalist architectural palette (Ivory `#FAF8F5`, Sand `#F7F5F0`, Charcoal `#141413`, Bronze `#94785C`).
- **Typography**: Editorial serif (*Cormorant Garamond*) paired with geometric sans (*Plus Jakarta Sans*).
- **Zero-Code Rebranding**: All studio details, colors, projects, metrics, process steps, and WhatsApp numbers live in a single centralized config: `data/business.ts`.
- **Conversion-Driven**: Mobile-first WhatsApp consultation trigger, instant quote form with pre-formatted WhatsApp chat dispatch, and quick call hooks.

---

## Key Sections & Architectural Interactions

1. **Space Revealed Signature Hero**:
   - Choreographed typographic reveal (`SPACES DESIGNED AROUND YOU.`).
   - Architectural crop expansion and subtle mouse-parallax depth shift on desktop.
   - Floating live project badge with coordinates and specs.

2. **Editorial Asymmetric Portfolio**:
   - Filterable categories (`All`, `Residential`, `Villas`, `Modular Kitchens`, `Living Spaces`, `Commercial`).
   - Asymmetric magazine-style layout with hover reframing and custom cursor indicator.
   - **Shared-Element Project Detail Modal**: In-depth view featuring project specifications, client brief, materiality palette, additional perspective photos, and direct WhatsApp inquiry.

3. **Interactive Architectural Services**:
   - Typographic numbered list (`01` to `06`).
   - Dynamic real-time image preview and deliverables breakdown on hover/click.
   - Accordion expansion for mobile devices.

4. **Studio Philosophy & Verified Credibility Stats**:
   - Human, design-focused narrative (*"Designing spaces that feel like you"*).
   - Dual overlapping editorial image composition.
   - Configurable credibility metric counters (`10+ Years`, `150+ Sanctuaries`, `12 Cities`, `100% Client-Focused`).

5. **5-Phase Design Process Timeline**:
   - Numbered step-by-step roadmap from *01 Discovery & Briefing* to *05 White-Glove Handover*.
   - Interactive milestone checklist and duration specifications.

6. **Client Stories & Trust Badges**:
   - Editorial quotation carousel with project attribution and verified client badges.
   - Fixed BOQ, 10-year warranty, and on-time completion guarantees.

7. **Cinematic Full-Width Closing CTA**:
   - Ambient interior visual backdrop with high-contrast consultation triggers.

8. **High-Conversion Studio Consultation Form**:
   - Scope selection, city/location, budget range, and project brief inputs.
   - **Instant WhatsApp Pre-fill**: Automatically generates a clean, structured inquiry message and opens WhatsApp with one click.

9. **Desktop Magnetic Custom Cursor**:
   - Smooth contextual feedback (`VIEW`, `EXPLORE`, `START`, `WHATSAPP`) that gracefully disables on touch devices.

10. **Sticky Mobile-First WhatsApp Bar**:
    - Floating consultation launcher with instant pre-written prompts for rapid mobile conversions.

---

## ⚡ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React Server Components)
- **React**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom `@theme` tokens
- **Typography**: `next/font/google` (`Cormorant_Garamond` + `Plus_Jakarta_Sans`)
- **Icons**: [Lucide React](https://lucide.dev/) + Inline Architectural SVGs
- **SEO & Structured Data**: Native Next.js 16 metadata, OpenGraph tags, and JSON-LD `LocalBusiness` schema

---

## Project Structure

```text
├── app/
│   ├── favicon.ico
│   ├── globals.css             # Tailwind v4 theme variables, custom typography, animations & grid patterns
│   ├── layout.tsx              # Google Fonts, SEO metadata, JSON-LD Schema
│   └── page.tsx                # Composition of sections with full client interactivity
├── components/
│   ├── BrandCustomizerModal.tsx # Live rebrand & white-label customization modal
│   ├── ContactSection.tsx      # High-conversion consultation form & WhatsApp formatter
│   ├── CustomCursor.tsx        # Desktop-only smooth magnetic cursor with contextual labels
│   ├── DesignProcess.tsx       # 5-phase interactive design process timeline
│   ├── FinalCTA.tsx            # Cinematic full-width closing atmosphere banner
│   ├── FloatingWhatsApp.tsx    # Mobile-first floating consultation widget
│   ├── Footer.tsx              # Minimal architectural footer with schema links
│   ├── Hero.tsx                # Space Revealed architectural hero with floating project badge
│   ├── Navbar.tsx              # Sticky blur navbar with mobile slide-out drawer & CTA
│   ├── ProjectGallery.tsx      # Editorial asymmetric portfolio with category filters
│   ├── ProjectModal.tsx        # Shared-element project modal with specs & material palette
│   ├── ServicesInteractive.tsx # Vertical interactive service list with hover image preview
│   ├── StudioAbout.tsx         # Editorial studio narrative & verified metrics grid
│   └── Testimonials.tsx        # Editorial quotes carousel with verified project badges
├── data/
│   └── business.ts             # Centralized business configuration (Single Source of Truth)
├── public/
│   └── images/                 # Architectural photography assets
├── next.config.ts              # Next.js configuration with remote image patterns
└── README.md                   # Project documentation & client onboarding guide
```

---

## How to Rebrand for a New Client in 60 Seconds

All client data is isolated in [`data/business.ts`](./data/business.ts). To personalize the website for a client:

1. Open `data/business.ts`.
2. Update the studio name, tagline, city, coordinates, and contact details:
   ```ts
   export const businessData = {
     name: "YOUR STUDIO NAME",
     tagline: "Spaces Designed Around You",
     location: {
       city: "Hyderabad",
       state: "Telangana",
       country: "India",
       address: "Road No. 36, Jubilee Hills, Hyderabad",
       coordinatesText: "17.4319° N, 78.4073° E",
     },
     contact: {
       phone: "+919876543210",
       phoneDisplay: "+91 98765 43210",
       whatsapp: "919876543210", // WhatsApp international number
       email: "hello@yourstudio.com",
     },
     // Replace projects with your client's real photography:
     projects: [ ... ],
     // Add your client's verified stats:
     stats: [ ... ]
   };
   ```
3. Run `npm run build` to compile the customized website.

---

## Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the template.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## Deploying to Production

This project is optimized for zero-config deployment on [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the project into Vercel.
3. The build command `next build` will execute automatically with optimized static prerendering.

---

## License & Commercial Use

Created as a reusable commercial website template for interior designers, architects, and studio owners.
