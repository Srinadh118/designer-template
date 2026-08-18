import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { businessData } from "@/data/business";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F5F2ED",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://studioarche.example.com"),
  title: {
    default: `${businessData.name} — Luxury Interior Architecture & Design Studio`,
    template: `%s | ${businessData.name}`,
  },
  description: businessData.description,
  keywords: [
    "Interior Designer Hyderabad",
    "Luxury Interior Architecture",
    "Villa Interior Design",
    "Modular Kitchen Hyderabad",
    "Residential Architecture",
    "Bespoke Home Interiors",
    "Turnkey Interior Contractors",
  ],
  authors: [{ name: businessData.name }],
  creator: businessData.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://studioarche.example.com",
    title: `${businessData.name} — Spaces Designed Around You`,
    description: businessData.description,
    siteName: businessData.name,
    images: [
      {
        url: businessData.hero.heroImage,
        width: 1200,
        height: 630,
        alt: `${businessData.name} Luxury Interior Design Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessData.name} — Luxury Interior Architecture`,
    description: businessData.description,
    images: [businessData.hero.heroImage],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Schema for Google rich snippet & local SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: businessData.name,
    description: businessData.description,
    image: businessData.hero.heroImage,
    telephone: businessData.contact.phone,
    email: businessData.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessData.location.address,
      addressLocality: businessData.location.city,
      addressRegion: businessData.location.state,
      addressCountry: businessData.location.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "17.4319",
      longitude: "78.4073",
    },
    priceRange: "₹₹₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F7F5F0] text-[#141413] font-sans selection:bg-[#141413] selection:text-[#FAF8F5] transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
