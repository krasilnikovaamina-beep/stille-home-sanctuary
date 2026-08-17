import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";

const title = "Privatlivspolitik — STILLE";
const description =
  "STILLEs privatlivspolitik. Læs om hvordan vi behandler dine personoplysninger med respekt og diskretion.";

const placeholder = (label: string) => (
  <span className="border-b border-dotted border-foreground/40 px-1 text-foreground/80">
    {label}
  </span>
);

export const Route = createFileRoute("/privatlivspolitik")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privatlivspolitik" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privatlivspolitik" }],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    heading: "1. Dataansvarlig",
    content: (
      <>
        <p className="font-serif text-lg text-foreground">STILLE</p>
        <p className="mt-4">
          Website: {placeholder("stillehome.dk")}
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          STILLE er et brand under We Care.
          <br />
          STILLE drives og administreres af We Care.
          <br />
          Virksomhedens juridiske navn: We Care
          <br />
          CVR-nummer: 43510916
          <br />
          Adresse: Helga Pedersens Gade 103, 8000 Aarhus C, Denmark
          <br />
          E-mail:{" "}
          <a href="mailto:kontakt@stillehome.dk" className="link-underline">
            kontakt@stillehome.dk
          </a>
        </p>
        <p className="mt-4 leading-relaxed">
          Alle aftaler, fakturering og juridiske forhold håndteres gennem We Care.
        </p>
      </>
    ),
  },
  {
    heading: "2. Hvilke oplysninger indsamler vi?",
    content: (
      <>
        <p className="leading-relaxed">
          Når du henvender dig til STILLE via vores website, kan vi indsamle de oplysninger, du
          selv afgiver. Det kan blandt andet være:
        </p>
        <ul className="mt-6 space-y-3 text-sm leading-relaxed">
          {[
            "Navn",
            "E-mail",
            "Telefonnummer",
            "Adresse og postnummer",
            "Oplysninger om boligen",
            "Valgte services",
            "Ønsket frekvens",
            "Beskeder og særlige ønsker",
          ].map((item) => (
            <li key={item} className="border-b border-border py-3 first:border-t">
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    heading: "3. Hvorfor behandler vi dine oplysninger?",
    content: (
      <>
        <p className="leading-relaxed">
          Vi bruger dine oplysninger til at give dig den bedst mulige service. Det kan blandt andet
          være for at:
        </p>
        <ul className="mt-6 space-y-3 text-sm leading-relaxed">
          {[
            "Besvare din forespørgsel",
            "Udarbejde tilbud og anbefalinger",
            "Planlægge og levere service i dit hjem",
            "Kommunikere med dig om din service",
            "Administrere kundeforholdet",
            "Overholde juridiske og regnskabsmæssige forpligtelser",
          ].map((item) => (
            <li key={item} className="border-b border-border py-3 first:border-t">
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    heading: "4. Retsgrundlag",
    content: (
      <p className="leading-relaxed">
        Vi behandler dine personoplysninger, når det er nødvendigt for at besvare din henvendelse,
        indgå eller opfylde en aftale med dig, overholde en lovpligtig forpligtelse — eller når du
        selv har givet samtykke til behandlingen. Du kan tilbagetrække et samtykke når som helst.
      </p>
    ),
  },
  {
    heading: "5. Hvor længe gemmer vi oplysningerne?",
    content: (
      <p className="leading-relaxed">
        Vi opbevarer dine oplysninger kun så længe, det er nødvendigt for det formål, de blev
        indsamlet til, og så længe det kræves i henhold til gældende lovgivning. Når oplysningerne
        ikke længere er nødvendige, slettes eller anonymiseres de.
      </p>
    ),
  },
  {
    heading: "6. Hvem deler vi oplysninger med?",
    content: (
      <>
        <p className="leading-relaxed">
          STILLE deler ikke dine oplysninger med tredjepart i markedsføringsøjemed. Vi kan dog
          anvende relevante samarbejdspartnere, der er nødvendige for at drive vores virksomhed og
          website, herunder We Care som administrerende og juridisk enhed. Det kan blandt andet være:
        </p>
        <ul className="mt-6 space-y-3 text-sm leading-relaxed">
          {[
            "Website- og hostingudbydere",
            "E-mail- og kommunikationsudbydere",
            "Bogførings- og regnskabssystemer",
            "Andre nødvendige IT-leverandører",
          ].map((item) => (
            <li key={item} className="border-b border-border py-3 first:border-t">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 leading-relaxed">
          Dine personoplysninger sælges ikke.
        </p>
      </>
    ),
  },
  {
    heading: "7. Cookies og hjemmeside",
    content: (
      <p className="leading-relaxed">
        Vores website anvender nødvendige cookies for at sikre funktionalitet og sikkerhed. Hvis vi
        på et senere tidspunkt indfører analyseredskaber eller markedsføringscookies, opdateres denne
        privatlivspolitik og vores cookie-setup tilsvarende, så du altid har mulighed for at træffe et
        informeret valg.
      </p>
    ),
  },
  {
    heading: "8. Dine rettigheder",
    content: (
      <>
        <p className="leading-relaxed">
          Efter gældende databeskyttelseslov har du en række rettigheder, herunder:
        </p>
        <ul className="mt-6 space-y-3 text-sm leading-relaxed">
          {[
            "Ret til indsigt i dine oplysninger",
            "Ret til at få rettet unøjagtige oplysninger",
            "Ret til sletning i visse tilfælde",
            "Ret til begrænsning af behandlingen",
            "Ret til dataportabilitet, hvor det er relevant",
            "Ret til indsigelse mod behandling, hvor det er relevant",
            "Ret til at trække samtykke tilbage, hvor behandlingen bygger på samtykke",
          ].map((item) => (
            <li key={item} className="border-b border-border py-3 first:border-t">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 leading-relaxed">
          Du er altid velkommen til at kontakte os, hvis du ønsker at gøre brug af dine rettigheder.
        </p>
      </>
    ),
  },
  {
    heading: "9. Kontakt",
    content: (
      <>
        <p className="leading-relaxed">
          Har du spørgsmål til denne privatlivspolitik eller til, hvordan vi behandler dine
          oplysninger, kan du kontakte os:
        </p>
        <p className="mt-6 text-sm leading-relaxed">
          STILLE
          <br />
          E-mail:{" "}
          <a href="mailto:kontakt@stillehome.dk" className="link-underline">
            kontakt@stillehome.dk
          </a>
          <br />
          CVR: 43510916
          <br />
          Adresse: {placeholder("[Indsæt adresse]")}
        </p>
        <p className="mt-4 leading-relaxed">
          STILLE drives og administreres af We Care. Alle aftaler, fakturering og juridiske forhold
          håndteres gennem We Care.
        </p>
      </>
    ),
  },
  {
    heading: "10. Klage",
    content: (
      <p className="leading-relaxed">
        Hvis du mener, at dine personoplysninger behandles i strid med lovgivningen, har du ret til
        at indgive en klage til den relevante danske databeskyttelsesmyndighed. Kontaktoplysninger
        for den aktuelle myndighed kan findes på den officielle danske hjemmeside for
        databeskyttelse.
      </p>
    ),
  },
];

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Header / Intro */}
      <section className="mx-auto max-w-[1600px] px-6 pt-44 pb-20 md:px-12 md:pt-56 md:pb-28">
        <Reveal>
          <p className="font-serif text-lg tracking-[0.42em]">STILLE</p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-12 font-serif text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.08]">
            Privatlivspolitik
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-10 max-w-2xl text-sm font-light leading-[2] text-muted-foreground md:text-base">
            Hos STILLE behandler vi dine personoplysninger med respekt og kun i det omfang, det er
            nødvendigt for at kunne besvare din henvendelse og levere vores service.
          </p>
        </Reveal>
      </section>

      {/* Policy sections */}
      <main className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 md:py-28">
          <div className="space-y-24 md:space-y-32">
            {sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 40}>
                <div className="grid gap-10 md:grid-cols-12 md:gap-16">
                  <h2 className="font-serif text-[clamp(1.5rem,2.8vw,2.25rem)] leading-[1.15] md:col-span-5">
                    {section.heading}
                  </h2>
                  <div className="text-sm font-light leading-[1.9] text-muted-foreground md:col-span-6 md:col-start-7 md:text-base">
                    {section.content}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
