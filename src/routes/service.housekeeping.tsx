import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/ServicePage";
import serviceHousekeepingImg from "@/assets/service-housekeeping.jpg";

const title = "STILLE Housekeeping — Komplet home care i Aarhus";
const description =
  "STILLE Housekeeping er vores mest komplette løsning, hvor rengøring møder personlig home care og de detaljer, der skaber ro.";

export const Route = createFileRoute("/service/housekeeping")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HousekeepingPage,
});

function HousekeepingPage() {
  return (
    <ServicePage
      data={{
        no: "03",
        name: "STILLE Housekeeping",
        intro: "Når hjemmet skal føles helt færdigt.",
        lead:
          "Vores mest komplette løsning, hvor rengøring møder personlig home care og de små detaljer, der skaber ro. Alt fra STILLE Signature er en del af besøget.",
        heroImage: serviceHousekeepingImg,
        heroAlt: "Perfekt redt seng med hvidt linned i et lyst soveværelse",
        includesTitle: "Det, vi tager os af",
        includesNote:
          "Indeholder alt fra STILLE Signature – suppleret med personlig housekeeping.",
        includes: [
          "Skift af sengetøj",
          "Elegant redning af senge",
          "Sammenlægning og placering af håndklæder",
          "Let organisering af synlige overflader",
          "Let oprydning som en naturlig del af besøget",
          "Placering af puder og plaider",
          "Små housekeeping-detaljer, der skaber en færdig og rolig helhed",
          "Ekstra opmærksomhed på hjemmets samlede udtryk, før vi går",
        ],
        suitedTitle: "Hvem passer denne service til",
        suited: [
          "STILLE Housekeeping er til dig, der ønsker følelsen af at komme hjem til et hjem, der er taget hånd om – ikke blot nyrengjort.",
          "Hver detalje er på plads, når vi lukker døren efter os.",
        ],
      }}
    />
  );
}