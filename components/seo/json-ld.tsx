import { faqs, SITE, SITE_LINKS } from "@/lib/site-data";

export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["ExerciseGym", "LocalBusiness"],
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.domain,
    image: `${SITE.domain}/logo.gif`,
    telephone: SITE.phone,
    email: SITE.email,
    description:
      "CrossFit and functional fitness box in Pune, India. World-class coaching, scaled workouts, and the best hour of your day.",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.addressLocality,
      addressRegion: SITE.address.addressRegion,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    openingHoursSpecification: SITE.openingHours.map((block) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: block.days,
      opens: block.opens,
      closes: block.closes,
    })),
    potentialAction: {
      "@type": "ReserveAction",
      name: "Book an Intro Session",
      target: SITE_LINKS.introBookingUrl,
    },
    areaServed: {
      "@type": "City",
      name: "Pune",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
