import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/ServicePage";
import serviceSignatureImg from "@/assets/service-signature.jpg";

const title = "STILLE Signature — Detaljeret home care i Aarhus";
const description =
  "STILLE Signature er en udvidet service, hvor detaljerne får mere plads – med særlig omhu for køkken og badeværelser.";

export const Route = createFileRoute("/service/signature")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/service/signature" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/service/signature" }],
  }),
  component: SignaturePage,
});

function SignaturePage() {
  return (
    <ServicePage
      data={{
        no: "02",
        name: "STILLE Signature",
        intro: "Når detaljerne får mere plads.",
        lead:
          "En udvidet service med særlig opmærksomhed på køkken, badeværelser og de områder, der kræver lidt ekstra. Alt fra STILLE Essential er en del af besøget.",
        heroImage: serviceSignatureImg,
        heroAlt: "Elegant badeværelsesdetalje med sten, foldede håndklæder og messing",
        includesTitle: "Det, vi tager os af",
        includesNote:
          "Indeholder alt fra STILLE Essential – med et stærkere fokus på følgende.",
        includes: [
          "Grundigere pleje af køkken og badeværelser",
          "Detaljer omkring armaturer og fliser",
          "Mere grundig rengøring af bruseområdet",
          "Ekstra opmærksomhed på paneler, kanter og detaljer",
          "Aftørring af flere dekorative og synlige overflader",
          "Mere tid til områder, der kræver særlig opmærksomhed",
          "En mere gennemført finish i hjemmets vigtigste rum",
        ],
        suitedTitle: "Hvem passer denne service til",
        suited: [
          "STILLE Signature er til dig, der ønsker mere end vedligeholdelse.",
          "Du sætter pris på den ekstra opmærksomhed på detaljen – og på et hjem, der føles gennemarbejdet.",
        ],
      }}
    />
  );
}