import { faqItems } from "@/data/faq";
import { productOrder, products } from "@/data/products";
import { INSTAGRAM_URL, WHATSAPP_PHONE_E164 } from "@/lib/constants";
import {
  absoluteUrl,
  BRAND_NAME,
  HERO_IMAGE_ALT,
  LOGO_IMAGE_PATH,
  OG_IMAGE_PATH,
  SAFE_PRODUCT_DESCRIPTIONS,
  SEO_DESCRIPTION,
  SEO_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function StructuredData() {
  const logoUrl = absoluteUrl(LOGO_IMAGE_PATH);
  const imageUrl = absoluteUrl(OG_IMAGE_PATH);
  const productSchemas = productOrder.map((key) => {
    const product = products[key];

    return {
      "@type": "Product",
      "@id": `${SITE_URL}/#product-${product.key.replaceAll("_", "-")}`,
      name: `${product.name} ${BRAND_NAME}`,
      description: SAFE_PRODUCT_DESCRIPTIONS[key],
      image: absoluteUrl(product.image),
      brand: {
        "@type": "Brand",
        name: BRAND_NAME,
      },
      category: "Wellness shot",
      url: `${SITE_URL}/#produk`,
    };
  });

  const resellerFaq = faqItems.find((item) =>
    item.question.toLowerCase().includes("reseller"),
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: BRAND_NAME,
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
        },
        image: imageUrl,
        sameAs: [INSTAGRAM_URL],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: BRAND_NAME,
        url: `${SITE_URL}/`,
        description:
          "Iboo.idn adalah brand wellness shot 70 ml berbahan buah, sayur, dan rempah alami untuk mendukung rutinitas gaya hidup sehat secara praktis.",
        telephone: WHATSAPP_PHONE_E164,
        image: imageUrl,
        logo: logoUrl,
        areaServed: [
          { "@type": "Place", name: "Sulawesi Selatan" },
          { "@type": "Place", name: "Makassar" },
          { "@type": "Place", name: "Rappocini" },
          { "@type": "Place", name: "Tamalanrea" },
          { "@type": "Place", name: "Sombaopu" },
          { "@type": "Place", name: "Ujung Bulu" },
          { "@type": "Place", name: "Sidrap" },
          { "@type": "Place", name: "Jeneponto" },
          { "@type": "Place", name: "Labakkang" },
          { "@type": "Place", name: "Toraja" },
        ],
        parentOrganization: {
          "@id": `${SITE_URL}/#organization`,
        },
        hasOfferCatalog: {
          "@id": `${SITE_URL}/#offer-catalog`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: BRAND_NAME,
        url: `${SITE_URL}/`,
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        name: SEO_TITLE,
        url: `${SITE_URL}/`,
        description: SEO_DESCRIPTION,
        inLanguage: "id-ID",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#localbusiness`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: imageUrl,
          width: 1200,
          height: 630,
          caption: HERO_IMAGE_ALT,
        },
        breadcrumb: {
          "@id": `${SITE_URL}/#breadcrumb`,
        },
        mainEntity: {
          "@id": `${SITE_URL}/#offer-catalog`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: SITE_NAME,
            item: `${SITE_URL}/`,
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        "@id": `${SITE_URL}/#offer-catalog`,
        name: "Varian wellness shot Iboo.idn",
        itemListElement: productSchemas.map((productSchema, index) => ({
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@id": productSchema["@id"],
          },
        })),
      },
      ...productSchemas,
      resellerFaq && {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: resellerFaq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: resellerFaq.answer,
            },
          },
        ],
      },
    ].filter(Boolean),
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: safeJsonLd(structuredData) }}
      type="application/ld+json"
    />
  );
}
