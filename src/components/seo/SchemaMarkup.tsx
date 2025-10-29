import React from 'react';
import { Helmet } from 'react-helmet-async';

// Organization Schema for CYNERZA
export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CYNERZA",
    "alternateName": "Cynerza",
    "url": "https://cynerza.com",
    "logo": "https://cynerza.com/logo.png",
    "description": "Next-generation AI-first platform for web development, mobile apps, automation, custom APIs & multimodal AI. Unified ecosystem for startups, developers & enterprises.",
    "foundingDate": "2025",
    "email": "info@cynerza.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "PLOT NO. 1184/1573, TOP FLOOR, JAGANNATH NAGAR, ROAD NO.14, GGP COLONY",
      "addressLocality": "Bhubaneswar",
      "addressRegion": "Odisha",
      "postalCode": "751025",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@cynerza.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/cynerza",
      "https://twitter.com/cynerza"
    ],
    "slogan": "Unified AI, Simplified Tech"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Website Schema
export const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CYNERZA",
    "alternateName": "Cynerza - Unified AI Platform",
    "url": "https://cynerza.com",
    "description": "All-in-one AI platform combining web/mobile development, automation, custom APIs & multimodal AI tools",
    "publisher": {
      "@type": "Organization",
      "name": "CYNERZA"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Service Schema for main offerings
export const ServiceSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Technology Services",
    "provider": {
      "@type": "Organization",
      "name": "CYNERZA",
      "url": "https://cynerza.com"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CYNERZA Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "High-performance, SEO-ready websites and web applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native Android & iOS and Flutter cross-platform applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Automation",
            "description": "AI-powered RPA and workflow automation solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom API Development",
            "description": "Scalable REST and GraphQL API solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing & Analytics",
            "description": "AI-driven SEO optimization and marketing automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multimodal AI Suite",
            "description": "Text, Image, Voice, and Video AI tools with APIs"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Software Application Schema for AI Platform
export const SoftwarePlatformSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CYNERZA Unified AI Platform",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based, Cross-platform",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0",
      "highPrice": "Custom",
      "offerCount": "4",
      "offers": [
        {
          "@type": "Offer",
          "name": "Freemium",
          "price": "0",
          "description": "Free access for testing and casual users"
        },
        {
          "@type": "Offer",
          "name": "Individual",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "priceCurrency": "USD",
            "referenceQuantity": {
              "@type": "QuantitativeValue",
              "value": "1",
              "unitCode": "MON"
            }
          },
          "description": "Subscription for individuals"
        },
        {
          "@type": "Offer",
          "name": "Team",
          "description": "Subscription for teams and agencies"
        },
        {
          "@type": "Offer",
          "name": "Enterprise",
          "description": "Custom packages with SLAs and dedicated support"
        }
      ]
    },
    "description": "Unified AI platform for web/mobile development, automation, custom APIs, and multimodal AI tools",
    "featureList": [
      "Web Development",
      "Mobile App Development",
      "Business Automation",
      "Custom API Solutions",
      "Digital Marketing",
      "AI Tools (Text, Image, Voice, Video)"
    ],
    "screenshot": "https://cynerza.com/og-image.jpg",
    "url": "https://cynerza.com"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
