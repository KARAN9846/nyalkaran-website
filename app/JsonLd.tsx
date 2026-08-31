export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nyalkaran Technosoft LLP",
    url: "https://nyalkaran-website.vercel.app",
    logo: "https://nyalkaran-website.vercel.app/og-image.png",
    description:
      "Nyalkaran Technosoft LLP is a digital growth and technology partner helping businesses build websites, software, mobile applications and digital solutions.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
