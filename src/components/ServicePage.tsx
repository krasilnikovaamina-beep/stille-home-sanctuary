import { useState } from "react";
import { Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import { OptionalServices } from "@/components/booking/OptionalServices";
import type { AddonSelection } from "@/components/booking/options";

export type ServicePageData = {
  no: string;
  name: string;
  intro: string;
  lead: string;
  heroImage: string;
  heroAlt: string;
  includesTitle: string;
  includesNote?: string;
  includes: string[];
  suitedTitle: string;
  suited: string[];
};

export function ServicePage({ data }: { data: ServicePageData }) {
  const [addons, setAddons] = useState<AddonSelection>({});

  return (
    <div id="top" className="bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
        <img
          src={data.heroImage}
          alt={data.heroAlt}
          width={1344}
          height={768}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.19_0.004_60_/_0.18)]" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,oklch(0.19_0.004_60_/_0.55),transparent)]" />
        <div className="relative flex h-full items-end">
          <div className="mx-auto w-full max-w-[1600px] px-6 pb-20 md:px-12 md:pb-28">
            <Reveal>
              <p className="text-[0.7rem] tracking-[0.28em] uppercase text-background/70">
                {data.no} — Service
              </p>
              <h1 className="mt-6 max-w-4xl font-serif text-[clamp(2.4rem,6.5vw,5.5rem)] leading-[1.04] text-background">
                {data.name}
              </h1>
              <p className="mt-8 max-w-md font-serif text-lg italic text-background/85 md:text-xl">
                {data.intro}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-44">
        <Reveal className="grid gap-16 md:grid-cols-12">
          <h2 className="font-serif text-[clamp(1.9rem,4vw,3.25rem)] leading-[1.12] md:col-span-5">
            {data.intro}
          </h2>
          <div className="space-y-8 text-sm font-light leading-[2] text-muted-foreground md:col-span-5 md:col-start-8 md:text-base">
            <p>{data.lead}</p>
          </div>
        </Reveal>
      </section>

      {/* Det, vi tager os af */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-36">
          <Reveal className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="eyebrow">Indhold</span>
              <h2 className="mt-8 font-serif text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.12]">
                Det, vi tager os af
              </h2>
              {data.includesNote && (
                <p className="mt-8 max-w-xs text-sm font-light leading-[2] text-muted-foreground">
                  {data.includesNote}
                </p>
              )}
            </div>
            <ul className="md:col-span-7 md:col-start-6">
              {data.includes.map((item) => (
                <li
                  key={item}
                  className="border-b border-border py-5 text-sm font-light leading-relaxed text-muted-foreground first:border-t md:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Hvem passer den til */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-36">
          <Reveal className="grid gap-16 md:grid-cols-12">
            <h2 className="font-serif text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.12] md:col-span-5">
              Hvem passer denne service til
            </h2>
            <div className="space-y-8 text-sm font-light leading-[2] text-muted-foreground md:col-span-5 md:col-start-8 md:text-base">
              {data.suited.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tilvalg */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-36">
          <Reveal className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="font-serif text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.12]">
                Tilpas din STILLE-rutine
              </h2>
              <p className="mt-8 max-w-xs text-sm font-light leading-[2] text-muted-foreground">
                Tilføj ekstra pleje til din faste service og vælg, hvor ofte den skal udføres.
              </p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <OptionalServices value={addons} onChange={setAddons} />
            </div>
            <p className="max-w-xl text-sm font-light leading-[2] text-muted-foreground md:col-span-7 md:col-start-6">
              Din service tilpasses altid dit hjem. Ved første samtale gennemgår vi dine ønsker og
              aftaler præcis, hvad der skal være en del af din faste STILLE-rutine.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-44">
          <Reveal className="max-w-2xl">
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1]">
              Et roligere hjem begynder her.
            </h2>
            <a
              href="/#kontakt"
              className="mt-12 inline-block border border-foreground/60 px-10 py-4 text-[0.7rem] tracking-[0.22em] uppercase transition-colors duration-500 hover:bg-foreground hover:text-background"
            >
              Book en samtale
            </a>
            <p className="mt-6 text-sm font-light text-muted-foreground">
              <a href="mailto:kontakt@stillehome.dk" className="link-underline">
                kontakt@stillehome.dk
              </a>
            </p>
            <div className="mt-14">
              <Link to="/" hash="service" className="link-underline text-[0.7rem] tracking-[0.28em] uppercase">
                Tilbage til vores service
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}