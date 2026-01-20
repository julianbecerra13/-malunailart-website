export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Malu Nail Art",
    url: "https://www.malunailart.nl",
    // TODO: Add real data when available
    // telephone: "+31 XX XXX XXXX",
    // address: {
    //   "@type": "PostalAddress",
    //   streetAddress: "...",
    //   addressLocality: "...",
    //   postalCode: "...",
    //   addressCountry: "NL",
    // },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
