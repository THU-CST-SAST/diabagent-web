export interface LabSeo {
  title: string;
  description: string;
  canonical: string;
  image: string;
  imageAlt: string;
  ogTitle: string;
  ogType: string;
  schemaTypes: readonly string[];
}

export const LAB_SITE_URL = import.meta.env.SITE.replace(/\/$/, "");
export const LAB_SITE_NAME = "THU CST SAST";

export function getLabSeo(_pathname: string): LabSeo | undefined {
  return undefined;
}

export function getLabStructuredData(seo: LabSeo) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://net9.org/#organization",
        name: "THU CST SAST",
        url: "https://net9.org/",
        sameAs: ["https://github.com/THU-CST-SAST"],
      },
      {
        "@type": seo.schemaTypes.length === 1 ? seo.schemaTypes[0] : seo.schemaTypes,
        "@id": `${seo.canonical}#entity`,
        name: seo.ogTitle,
        description: seo.description,
        url: seo.canonical,
        publisher: { "@id": "https://net9.org/#organization" },
      },
    ],
  };
}
