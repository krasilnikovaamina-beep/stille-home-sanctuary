import { ADDON_FREQUENCIES, OPTIONAL_SERVICES, type AddonSelection } from "./options";

export function OptionalServices({
  value,
  onChange,
}: {
  value: AddonSelection;
  onChange: (next: AddonSelection) => void;
}) {
  const toggle = (name: string) => {
    const next = { ...value };
    if (name in next) delete next[name];
    else next[name] = ADDON_FREQUENCIES[1];
    onChange(next);
  };

  return (
    <ul className="border-t border-border">
      {OPTIONAL_SERVICES.map((name) => {
        const added = name in value;
        return (
          <li key={name} className="border-b border-border py-6">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <p className="font-serif text-xl leading-snug md:text-2xl">{name}</p>
                {added && (
                  <p className="mt-2 text-[0.7rem] tracking-[0.22em] uppercase text-muted-foreground">
                    ✓ Tilføjet
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => toggle(name)}
                aria-pressed={added}
                className={`px-6 py-2.5 text-[0.65rem] tracking-[0.22em] uppercase transition-colors duration-500 ${
                  added
                    ? "border border-foreground bg-foreground text-background"
                    : "border border-foreground/30 hover:border-foreground"
                }`}
              >
                {added ? "Fjern" : "Tilføj"}
              </button>
            </div>

            {added && (
              <div className="mt-6 max-w-sm">
                <label
                  className="eyebrow block mb-3"
                  htmlFor={`frekvens-${name}`}
                >
                  Frekvens
                </label>
                <select
                  id={`frekvens-${name}`}
                  value={value[name]}
                  onChange={(e) => onChange({ ...value, [name]: e.target.value })}
                  className="w-full border-0 border-b border-border bg-transparent py-3 text-sm font-light text-foreground focus:border-foreground focus:outline-none transition-colors duration-500"
                >
                  {ADDON_FREQUENCIES.map((f) => (
                    <option key={f}>{f}</option>
                  ))}
                </select>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
