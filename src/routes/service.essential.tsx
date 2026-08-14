import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/ServicePage";
import serviceEssentialImg from "@/assets/service-essential.jpg";

const title = "STILLE Essential — Fast home care i Aarhus";
const description =
  "STILLE Essential er den faste pleje af dit hjem. Diskret, gennemført rengøring med omsorg for detaljerne.";

export const Route = createFileRoute("/service/essential")({
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
  component: EssentialPage,
});

function EssentialPage() {
  return (
    <ServicePage
      data={{
        no: "01",
        name: "STILLE Essential",
        intro: "Den faste pleje af dit hjem.",
        lead:
          "En gennemført rengøring af de rum og overflader, der danner rammen om din hverdag. Roligt, diskret og med den samme standard hver gang.",
        heroImage: serviceEssentialImg,
        heroAlt: "Roligt skandinavisk stuemiljø med linned, egetræ og dagslys",
        includesTitle: "Det, vi tager os af",
        includes: [
          "Aftørring af tilgængelige overflader",
          "Støvsugning af gulve og tæpper",
          "Gulvvask",
          "Støvsugning af sofa og polstrede overflader efter behov",
          "Rengøring af køkkenets arbejdsflader",
          "Aftørring af køkkenfronter udvendigt",
          "Rengøring af køkkenapparater udvendigt",
          "Rengøring af badeværelse og toilet",
          "Aftørring af spejle",
          "Rengøring af bruseområde og synlige flader",
          "Aftørring af paneler og fodlister",
          "Aftørring af lyskontakter og ofte berørte flader",
          "Aftørring af billedrammer og synlige interiørdetaljer",
          "Aftørring af trappegelændere",
          "Tømning af almindeligt husholdningsaffald",
        ],
        suitedTitle: "Hvem passer denne service til",
        suited: [
          "STILLE Essential er skabt til hjem, der ønsker en fast og professionel vedligeholdelse på regelmæssig basis.",
          "Du kender rytmen, og hjemmet holdes roligt i orden – uge efter uge.",
        ],
      }}
    />
  );
}