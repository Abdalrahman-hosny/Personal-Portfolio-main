import { personalInfo } from "@/lib/data";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    url: "https://protfilo-ruddy.vercel.app",
    image: "https://protfilo-ruddy.vercel.app/landing.png",
    sameAs: [
      personalInfo.github,
      personalInfo.linkedin,
    ],
    jobTitle: "Frontend Developer",
    worksFor: {
      "@type": "Organization",
      name: "Brmja Tech",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: personalInfo.location.split(", ")[0],
      addressRegion: "Cairo",
      addressCountry: "EG",
    },
    email: personalInfo.email,
    telephone: personalInfo.phone,
    description: personalInfo.about,
    knowsAbout: [
      "React.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "Web Development",
      "Frontend Development",
      "UI/UX Design",
      "Responsive Design",
      "Web Performance Optimization",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Bani Sweif University",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Frontend Developer",
      occupationLocation: {
        "@type": "Country",
        name: "Egypt",
      },
      estimatedSalary: {
        "@type": "MonetaryAmountDistribution",
        name: "Competitive",
        currency: "USD",
      },
      skills: "React.js, Angular, TypeScript, JavaScript, Bootstrap, Tailwind CSS",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Abdalrahman Hosny - Frontend Developer Portfolio",
    url: "https://protfilo-ruddy.vercel.app",
    description:
      "Frontend Developer Portfolio showcasing React.js and Angular projects",
    author: {
      "@type": "Person",
      name: personalInfo.name,
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://protfilo-ruddy.vercel.app/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Abdalrahman Hosny - Frontend Development Services",
    image: "https://protfilo-ruddy.vercel.app/landing.png",
    url: "https://protfilo-ruddy.vercel.app",
    telephone: personalInfo.phone,
    email: personalInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressRegion: "Cairo",
      addressCountry: "EG",
    },
    priceRange: "$$",
    serviceType: [
      "Web Development",
      "Frontend Development",
      "React Development",
      "Angular Development",
      "TypeScript Development",
    ],
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Front-End Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "React.js Development",
            description:
              "Building modern, responsive web applications with React.js",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Next.js Development",
            description:
              "Creating high-performance, SEO-optimized websites with Next.js",
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://protfilo-ruddy.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://protfilo-ruddy.vercel.app/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: "https://protfilo-ruddy.vercel.app/projects",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Experience",
        item: "https://protfilo-ruddy.vercel.app/experience",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://protfilo-ruddy.vercel.app/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        key="person-schema"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        key="website-schema"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalService),
        }}
        key="service-schema"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        key="breadcrumb-schema"
      />
    </>
  );
}
