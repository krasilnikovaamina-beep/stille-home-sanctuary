import { useEffect, useState } from "react";

const links = [
  { label: "Hjem", href: "#top" },
  { label: "Vores service", href: "#service" },
  { label: "Om STILLE", href: "#om" },
  { label: "Kontakt", href: "#kontakt" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${
        scrolled || open ? "bg-background/95 backdrop-blur-sm" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <a
          href="#top"
          className="font-serif text-xl tracking-[0.42em] text-foreground"
          onClick={() => setOpen(false)}
        >
          STILLE
        </a>

        <nav className="hidden items-center gap-12 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="link-underline text-[0.8rem] font-light tracking-[0.16em] text-foreground/80 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="border border-foreground/60 px-7 py-3 text-[0.7rem] tracking-[0.22em] uppercase text-foreground transition-colors duration-500 hover:bg-foreground hover:text-background"
          >
            Book en samtale
          </a>
        </nav>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-[0.7rem] tracking-[0.22em] uppercase md:hidden"
        >
          {open ? "Luk" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 pb-10 pt-6 md:hidden">
          <nav className="flex flex-col gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-serif text-2xl"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-4 border border-foreground/60 px-7 py-4 text-center text-[0.7rem] tracking-[0.22em] uppercase"
            >
              Book en samtale
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}