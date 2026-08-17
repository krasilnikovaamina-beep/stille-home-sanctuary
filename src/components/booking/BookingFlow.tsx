import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";

import { submitBooking } from "@/lib/booking.functions";
import { OptionalServices } from "./OptionalServices";
import {
  BASE_FREQUENCIES,
  SERVICES,
  type AddonSelection,
} from "./options";

const fieldClass =
  "w-full border-0 border-b border-border bg-transparent py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none transition-colors duration-500";
const labelClass = "eyebrow block mb-2";

const steps = [
  "Vælg din service",
  "Hvor ofte ønsker du din faste service?",
  "Tilpas din STILLE-rutine",
  "Fortæl os om dit hjem",
  "Din STILLE-rutine",
];

type Details = {
  navn: string;
  email: string;
  telefon: string;
  adresse: string;
  postnummer: string;
  stoerrelse: string;
  etager: string;
  badevaerelser: string;
  besked: string;
};

const emptyDetails: Details = {
  navn: "",
  email: "",
  telefon: "",
  adresse: "",
  postnummer: "",
  stoerrelse: "",
  etager: "",
  badevaerelser: "",
  besked: "",
};

function Choice({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect();
    }
  };

  return (
    <div
      role="button"
      aria-label={label}
      aria-pressed={selected}
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      className={`group flex w-full cursor-pointer items-baseline justify-between border-b border-border py-6 text-left transition-all duration-200 ${
        selected
          ? "border-foreground bg-foreground/[0.04] text-foreground"
          : "text-muted-foreground hover:bg-[#f5f4f2] hover:text-foreground"
      }`}
    >
      <span className="font-serif text-xl md:text-2xl">{label}</span>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
        className={`cursor-pointer text-[0.65rem] tracking-[0.22em] uppercase transition-all duration-200 ${
          selected
            ? "text-foreground"
            : "border-b border-border pb-0.5 text-muted-foreground hover:border-foreground hover:text-foreground group-hover:border-foreground group-hover:text-foreground"
        }`}
      >
        {selected ? (
          <span className="inline-flex items-center gap-2">
            Valgt <span aria-hidden="true">✓</span>
          </span>
        ) : (
          "Vælg"
        )}
      </button>
    </div>
  );
}

export function BookingFlow({ initialService }: { initialService?: string }) {
  const [step, setStep] = useState(0);
  const [service, setService] = useState(initialService ?? "");
  const [frequency, setFrequency] = useState("");
  const [addons, setAddons] = useState<AddonSelection>({});
  const [details, setDetails] = useState<Details>(emptyDetails);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const send = useServerFn(submitBooking);

  const set = (key: keyof Details) => (e: { target: { value: string } }) =>
    setDetails((d) => ({ ...d, [key]: e.target.value }));

  const canContinue =
    (step === 0 && service !== "") ||
    (step === 1 && frequency !== "") ||
    step === 2 ||
    (step === 3 && details.navn.trim() !== "" && details.email.trim() !== "");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (step !== steps.length - 1 || sending) return;
    setSending(true);
    setError("");
    try {
      await send({ data: { ...details, service, frequency, addons } });
      setSent(true);
    } catch {
      setError(
        "Din forespørgsel kunne ikke sendes. Prøv igen, eller skriv til kontakt@stillehome.dk.",
      );
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="border-t border-border pt-12">
        <p className="font-serif text-2xl">Tak for din forespørgsel.</p>
        <p className="mt-6 max-w-md text-sm font-light leading-[2] text-muted-foreground">
          Vi har modtaget din ønskede STILLE-rutine. Vi vender personligt tilbage inden for få
          hverdage og bekræfter tilgængelighed samt de sidste detaljer.
        </p>
        <p className="mt-6 max-w-md text-sm font-light leading-[2] text-muted-foreground">
          Spørgsmål? Skriv til os på{" "}
          <a href="mailto:kontakt@stillehome.dk" className="link-underline">
            kontakt@stillehome.dk
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex items-baseline justify-between border-b border-border pb-4">
        <span className="eyebrow">
          Trin {step + 1} / {steps.length}
        </span>
        <span className="text-[0.65rem] tracking-[0.22em] uppercase text-muted-foreground">
          Forespørgsel
        </span>
      </div>

      <h3 className="mt-10 font-serif text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.15]">
        {steps[step]}
      </h3>

      <div className="mt-10">
        {step === 0 && (
          <div>
            {SERVICES.map((s) => (
              <Choice
                key={s}
                label={s}
                selected={service === s}
                onSelect={() => setService(s)}
              />
            ))}
          </div>
        )}

        {step === 1 && (
          <div>
            {BASE_FREQUENCIES.map((f) => (
              <Choice
                key={f}
                label={f}
                selected={frequency === f}
                onSelect={() => setFrequency(f)}
              />
            ))}
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="mb-10 max-w-md text-sm font-light leading-[2] text-muted-foreground">
              Tilføj ekstra pleje til din faste service og vælg, hvor ofte den skal udføres.
            </p>
            <OptionalServices value={addons} onChange={setAddons} />
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="navn">Navn</label>
              <input id="navn" required value={details.navn} onChange={set("navn")} maxLength={100} className={fieldClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="email">E-mail</label>
              <input id="email" type="email" required value={details.email} onChange={set("email")} maxLength={255} className={fieldClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="telefon">Telefon</label>
              <input id="telefon" type="tel" value={details.telefon} onChange={set("telefon")} maxLength={40} className={fieldClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="adresse">Adresse</label>
              <input id="adresse" value={details.adresse} onChange={set("adresse")} maxLength={160} className={fieldClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="postnummer">Postnummer</label>
              <input id="postnummer" value={details.postnummer} onChange={set("postnummer")} maxLength={10} className={fieldClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="stoerrelse">Boligens størrelse i m²</label>
              <input id="stoerrelse" value={details.stoerrelse} onChange={set("stoerrelse")} maxLength={10} className={fieldClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="etager">Antal etager</label>
              <input id="etager" value={details.etager} onChange={set("etager")} maxLength={4} className={fieldClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="badevaerelser">Antal badeværelser</label>
              <input id="badevaerelser" value={details.badevaerelser} onChange={set("badevaerelser")} maxLength={4} className={fieldClass} />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="besked">Særlige ønsker / besked</label>
              <textarea id="besked" rows={4} value={details.besked} onChange={set("besked")} maxLength={1000} className={`${fieldClass} resize-none`} />
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <dl className="border-t border-border">
              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border py-6">
                <dt className="eyebrow">Service</dt>
                <dd className="font-serif text-xl md:text-2xl">{service || "—"}</dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border py-6">
                <dt className="eyebrow">Fast frekvens</dt>
                <dd className="font-serif text-xl md:text-2xl">{frequency || "—"}</dd>
              </div>
              {Object.entries(addons).map(([name, freq]) => (
                <div
                  key={name}
                  className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border py-6"
                >
                  <dt className="font-serif text-xl md:text-2xl">{name}</dt>
                  <dd className="text-sm font-light text-muted-foreground">{freq}</dd>
                </div>
              ))}
              {Object.keys(addons).length === 0 && (
                <div className="border-b border-border py-6 text-sm font-light text-muted-foreground">
                  Ingen tilvalg valgt.
                </div>
              )}
            </dl>
            <p className="mt-10 max-w-md text-sm font-light leading-[2] text-muted-foreground">
              Dette er en forespørgsel – ikke en bekræftet booking. STILLE bekræfter tilgængelighed
              og de sidste detaljer efter din henvendelse.
            </p>
          </div>
        )}
      </div>

      <div className="mt-14 flex flex-wrap items-center gap-8">
        {step > 0 && (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="link-underline text-[0.7rem] tracking-[0.22em] uppercase text-muted-foreground"
          >
            Tilbage
          </button>
        )}
        {step < steps.length - 1 ? (
          <button
            key="next"
            type="button"
            disabled={!canContinue}
            onClick={() => setStep((s) => s + 1)}
            className="border border-foreground/60 px-10 py-4 text-[0.7rem] tracking-[0.22em] uppercase transition-colors duration-500 hover:bg-foreground hover:text-background disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground"
          >
            Fortsæt
          </button>
        ) : (
          <button
            key="submit"
            type="submit"
            disabled={sending}
            className="border border-foreground/60 px-10 py-4 text-[0.7rem] tracking-[0.22em] uppercase transition-colors duration-500 hover:bg-foreground hover:text-background disabled:opacity-40"
          >
            {sending ? "Sender …" : "Send forespørgsel"}
          </button>
        )}
        {error && (
          <p className="w-full text-sm font-light text-muted-foreground">{error}</p>
        )}
      </div>
    </form>
  );
}
