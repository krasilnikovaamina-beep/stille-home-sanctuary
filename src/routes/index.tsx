import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { Reveal } from "@/components/Reveal";
import { BookingFlow } from "@/components/booking/BookingFlow";
import heroImg from "@/assets/hero.jpg";
import detailTowelsImg from "@/assets/detail-towels.jpg";
import detailStoneImg from "@/assets/detail-stone.jpg";
import bedroomImg from "@/assets/bedroom.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import serviceEssentialImg from "@/assets/service-essential.jpg";
import serviceSignatureImg from "@/assets/service-signature.jpg";
import serviceHousekeepingImg from "@/assets/service-housekeeping.jpg";


const title = "STILLE — Diskret home care og rengøring i Aarhus";
const description =
  "STILLE tilbyder diskret home care og premium rengøring til private hjem i Aarhus og omegn. Ro. Omsorg. Detaljer.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

const services = [
  {
    no: "01",
    name: "STILLE Essential",
    to: "/service/essential" as const,
    short: "Den faste pleje af dit hjem.",
    description:
      "En gennemført rengøring af de rum og overflader, der danner rammen om din hverdag.",
    image: serviceEssentialImg,
    imageAlt: "Roligt skandinavisk stuemiljø med linned, egetræ og dagslys",
    imagePosition: "right",
  },
  {
    no: "02",
    name: "STILLE Signature",
    to: "/service/signature" as const,
    short: "Når detaljerne får mere plads.",
    description:
      "En udvidet service med særlig opmærksomhed på køkken, badeværelser og de områder, der kræver lidt ekstra.",
    image: serviceSignatureImg,
    imageAlt: "Elegant badeværelsesdetalje med sten, foldede håndklæder og messing",
    imagePosition: "left",
  },
  {
    no: "03",
    name: "STILLE Housekeeping",
    to: "/service/housekeeping" as const,
    short: "Når hjemmet skal føles helt færdigt.",
    description:
      "Vores mest komplette løsning, hvor rengøring møder personlig home care og de små detaljer, der skaber ro.",
    image: serviceHousekeepingImg,
    imageAlt: "Perfekt redt seng med hvidt linned i et lyst soveværelse",
    imagePosition: "right",
  },
];


const steps = [
  { no: "01", label: "Fortæl os om dit hjem" },
  { no: "02", label: "Vi sammensætter din service" },
  { no: "03", label: "Din faste STILLE-rutine begynder" },
];

function Index() {
  return (
    <div id="top" className="bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Roligt skandinavisk hjem med dagslys, linned og naturmaterialer"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.19_0.004_60_/_0.18)]" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,oklch(0.19_0.004_60_/_0.55),transparent)]" />
        <div className="relative flex h-full items-end">
          <div className="mx-auto w-full max-w-[1600px] px-6 pb-20 md:px-12 md:pb-28">
            <Reveal>
              <h1 className="max-w-4xl font-serif text-[clamp(2.6rem,7.5vw,6.5rem)] leading-[1.02] text-background">
                Et hjem, der føles stille.
              </h1>
              <p className="mt-8 max-w-md text-sm font-light leading-relaxed text-background/85 md:text-base">
                Diskret home care og rengøring til private hjem i Aarhus og omegn.
              </p>
              <p className="mt-10 text-[0.7rem] tracking-[0.28em] uppercase text-background/70">
                Ro. Omsorg. Detaljer.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-[1600px] px-6 py-32 md:px-12 md:py-52">
        <Reveal className="grid gap-16 md:grid-cols-12">
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] md:col-span-6">
            Mere end rengøring.
          </h2>
          <div className="space-y-8 text-sm font-light leading-[2] text-muted-foreground md:col-span-5 md:col-start-8 md:text-base">
            <p>STILLE handler ikke kun om et rent hjem.</p>
            <p>
              Det handler om følelsen, når du træder ind ad døren.
              <br />
              Duften.
              <br />
              Lyset.
              <br />
              Overfladerne.
              <br />
              Roen.
            </p>
            <p className="text-foreground">
              Vi tager os af detaljerne, så dit hjem føles præcis, som det skal.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section id="service" className="bg-background">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-36">
          {services.map((s, i) => {
            const textCol =
              s.imagePosition === "right"
                ? "md:col-span-4 md:col-start-2"
                : "md:col-span-4 md:col-start-9";
            const imgCol =
              s.imagePosition === "right"
                ? "md:col-span-6 md:col-start-7"
                : "md:col-span-7 md:col-start-1";

            return (
              <article
                key={s.name}
                className={`grid gap-12 md:grid-cols-12 md:items-center md:gap-16 ${
                  i !== 0 ? "mt-28 md:mt-44" : ""
                }`}
              >
                <Reveal className={textCol} delay={i * 120}>
                  <span className="eyebrow">{s.no}</span>
                  <h2 className="mt-8 font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-tight">
                    {s.name}
                  </h2>
                  <p className="mt-6 max-w-sm font-serif text-lg italic text-muted-foreground md:text-xl">
                    {s.short}
                  </p>
                  <p className="mt-8 max-w-sm text-sm font-light leading-[1.9] text-muted-foreground">
                    {s.description}
                  </p>
                  <Link
                    to={s.to}
                    className="link-underline mt-10 inline-block text-[0.7rem] tracking-[0.28em] uppercase"
                  >
                    Læs mere
                  </Link>
                </Reveal>
                <Reveal className={imgCol} delay={i * 120 + 80}>
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    width={1344}
                    height={768}
                    loading="lazy"
                    className="h-[45vh] min-h-[320px] w-full object-cover md:h-[55vh] md:max-h-[720px]"
                  />
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>


      {/* Details / Atmosphere */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 py-32 md:px-12 md:py-52">
          <div className="grid gap-16 md:grid-cols-12">
            <Reveal className="md:col-span-5 md:col-start-1">
              <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1]">
                Detaljerne ændrer alt.
              </h2>
              <div className="mt-12 space-y-6 text-sm font-light leading-[2] text-muted-foreground md:text-base">
                <p>
                  Et foldet håndklæde.
                  <br />
                  En perfekt overflade.
                  <br />
                  En diskret duft.
                  <br />
                  En rolig helhed.
                </p>
                <p className="text-foreground">
                  STILLE er skabt omkring de små ting, man måske ikke altid lægger mærke til – men
                  altid mærker.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160} className="md:col-span-6 md:col-start-7">
              <div className="grid gap-8">
                <img
                  src={detailTowelsImg}
                  alt="Foldede linnedhåndklæder på en stenhylde i et minimalistisk badeværelse"
                  width={1600}
                  height={1104}
                  loading="lazy"
                  className="w-full object-cover"
                />
                <img
                  src={detailStoneImg}
                  alt="Linned vaskeklud på en stenoverflade med naturlig sæbe"
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="ml-auto w-3/4 object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40">
          <div className="grid gap-16 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.no} delay={i * 140}>
                <p className="font-serif text-4xl text-muted-foreground/60">{s.no}</p>
                <p className="mt-8 font-serif text-2xl leading-snug">{s.label}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-24">
            <p className="max-w-md text-sm font-light leading-[2] text-muted-foreground">
              Vi tilpasser frekvens, service og detaljer efter dit hjem og din hverdag.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Trust / team */}
      <section id="om" className="border-t border-border">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-6 py-28 md:grid-cols-2 md:items-center md:px-12 md:py-40">
          <Reveal>
            <img
              src={kitchenImg}
              alt="Detalje fra et skandinavisk køkken i egetræ og sten"
              width={1200}
              height={1504}
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120} className="md:pl-12">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.1]">
              De samme hænder. Den samme standard.
            </h2>
            <div className="mt-10 space-y-8 text-sm font-light leading-[2] text-muted-foreground md:text-base">
              <p>STILLE arbejder med et lille, nøje udvalgt team.</p>
              <p>
                Vi prioriterer kontinuitet, diskretion og tillid, så du ved, hvem der kommer ind i
                dit hjem.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="border-t border-border">
        <img
          src={bedroomImg}
          alt="Perfekt redt seng med hvidt linned i et lyst soveværelse"
          width={1600}
          height={1104}
          loading="lazy"
          className="h-[50vh] w-full object-cover md:h-[70vh]"
        />
        <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40">
          <Reveal className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1]">
                Et roligere hjem begynder her.
              </h2>
              <p className="mt-10 max-w-sm text-sm font-light leading-[2] text-muted-foreground">
                Fortæl os lidt om dit hjem, så vender vi tilbage med en personlig anbefaling.
              </p>
              <p className="mt-10 text-[0.7rem] tracking-[0.28em] uppercase">Kontakt STILLE</p>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <BookingFlow />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-20 md:grid-cols-2 md:px-12">
          <div>
            <p className="font-serif text-lg tracking-[0.42em]">STILLE</p>
            <p className="mt-6 text-sm font-light text-muted-foreground">
              Premium home care
              <br />
              Aarhus &amp; omegn
            </p>
            <p className="mt-6 text-sm font-light text-muted-foreground">stillehome.dk</p>
          </div>
          <nav className="flex flex-col gap-4 text-sm font-light md:items-end">
            <a href="#service" className="link-underline self-start md:self-end">Vores service</a>
            <a href="#om" className="link-underline self-start md:self-end">Om STILLE</a>
            <a href="#kontakt" className="link-underline self-start md:self-end">Kontakt</a>
            <a href="#kontakt" className="link-underline self-start md:self-end">Privatlivspolitik</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
