import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { VersionToggle } from "@/components/VersionToggle";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AweNestHost™ - Premier Vacation Rental & Property Management in India",
    template: "%s | AweNestHost™",
  },
  description: "AweNestHost™ offers comprehensive vacation rental and property management services in India. Maximize your rental income with our expert short-term rental, corporate stay, and medical tourism accommodation solutions. Hassle-free property management for owners.",
  keywords: [
    "Vacation Rental Management India",
    "Property Management India",
    "Short-term Rental Management India",
    "Holiday Home Management India",
    "Airbnb Management India",
    "Corporate Stays India",
    "Medical Tourism Accommodation India",
    "Best property management company Bengaluru",
    "Increase rental income India",
    "Hassle-free property management",
    "Professional vacation rental services",
    "Property management for NRIs India",
    "Guest management services India",
    "Property maintenance India",
    "Real estate investment India",
    "Furnished apartments for corporate stays",
    "Medical travel accommodation Bengaluru",
  ],
  authors: [{
    name: "AweNestHost™"
  }],
  creator: "AweNestHost™",
  publisher: "AweNestHost™",
  openGraph: {
    title: "AweNestHost™ - Premier Vacation Rental & Property Management in India",
    description: "AweNestHost™ offers comprehensive vacation rental and property management services in India. Maximize your rental income with our expert short-term rental, corporate stay, and medical tourism accommodation solutions. Hassle-free property management for owners.",
    url: "https://www.awenesthost.com", // Replace with your actual domain
    siteName: "AweNestHost™",
    images: [
      {
        url: "https://www.awenesthost.com/og-image.jpg", // Replace with a relevant image for Open Graph
        width: 1200,
        height: 630,
        alt: "AweNestHost™ Property Management",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AweNestHost™ - Premier Vacation Rental & Property Management in India",
    description: "AweNestHost™ offers comprehensive vacation rental and property management services in India. Maximize your rental income with our expert short-term rental, corporate stay, and medical tourism accommodation solutions. Hassle-free property management for owners.",
    images: ["https://www.awenesthost.com/twitter-image.jpg"], // Replace with a relevant image for Twitter Card
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://awenesthost.com/" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* <VersionToggle /> */}
        <Script
          id="schema-org-json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.awenesthost.com/#organization", // Replace with your actual domain
                  "name": "AweNestHost™",
                  "url": "https://www.awenesthost.com", // Replace with your actual domain
                  "logo": "https://www.awenesthost.com/images/logo.png", // Replace with your actual logo URL
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+918919823564",
                    "contactType": "customer service",
                    "areaServed": "IN",
                    "availableLanguage": "en"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/awenesthost", // Replace with your LinkedIn profile
                    "https://www.instagram.com/awenesthost", // Replace with your Instagram profile
                    "https://twitter.com/awenesthost" // Replace with your Twitter profile
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.awenesthost.com/#localbusiness", // Replace with your actual domain
                  "name": "AweNestHost™",
                  "image": "https://www.awenesthost.com/og-image.jpg", // Replace with a relevant image
                  "url": "https://www.awenesthost.com", // Replace with your actual domain
                  "telephone": "+918919823564",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "[Your Business Street Address Here]", // Replace with your actual street address
                    "addressLocality": "Bengaluru",
                    "addressRegion": "KA", // Karnataka
                    "postalCode": "[Your Postal Code Here]", // Replace with your actual postal code
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "[Your Latitude]", // Replace with your actual latitude
                    "longitude": "[Your Longitude]" // Replace with your actual longitude
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                      ],
                      "opens": "09:00",
                      "closes": "18:00"
                    }
                  ],
                  "priceRange": "$$", // Adjust based on your pricing
                  "servesCuisine": "Property Management Services", // This is a placeholder, adjust as needed
                  "hasMap": "[Link to Google Maps for your business]", // Replace with your Google Maps link
                  "areaServed": {
                    "@type": "Place",
                    "name": "Bengaluru"
                  }
                }
              ]
            })
          }}
        ></Script>
      </body>
    </html>
  );
}
