import { useState, type FormEvent } from "react";

const fieldClass =
  "w-full border-0 border-b border-border bg-transparent py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/70 focus:border-foreground focus:outline-none transition-colors duration-500";

const labelClass = "eyebrow block mb-2";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border-t border-border pt-12">
        <p className="font-serif text-2xl">Tak for din henvendelse.</p>
        <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
          Vi vender personligt tilbage inden for få hverdage med en anbefaling til dit hjem.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-10 sm:grid-cols-2">
      <div>
        <label className={labelClass} htmlFor="navn">Navn</label>
        <input id="navn" name="navn" required className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" required className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="telefon">Telefon</label>
        <input id="telefon" name="telefon" type="tel" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="postnummer">Postnummer</label>
        <input id="postnummer" name="postnummer" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="stoerrelse">Boligens størrelse</label>
        <input id="stoerrelse" name="stoerrelse" placeholder="m²" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="frekvens">Hvor ofte ønsker du service?</label>
        <select id="frekvens" name="frekvens" defaultValue="" className={fieldClass}>
          <option value="" disabled>Vælg</option>
          <option>Ugentligt</option>
          <option>Hver 14. dag</option>
          <option>Månedligt</option>
          <option>Efter aftale</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="besked">Besked</label>
        <textarea id="besked" name="besked" rows={4} className={`${fieldClass} resize-none`} />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="border border-foreground/60 px-10 py-4 text-[0.7rem] tracking-[0.22em] uppercase transition-colors duration-500 hover:bg-foreground hover:text-background"
        >
          Send forespørgsel
        </button>
      </div>
    </form>
  );
}