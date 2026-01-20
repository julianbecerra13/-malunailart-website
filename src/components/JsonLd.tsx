export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Malu Nail Art",
    url: "https://www.malunailart.nl",
    telephone: "+31654149732",
    email: "Malunailart@gmail.com",
    image: "https://www.malunailart.nl/images/logo.jpeg",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
