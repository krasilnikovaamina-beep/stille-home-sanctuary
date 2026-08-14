import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12">
        <div className="grid gap-12 md:grid-cols-2">
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
            <Link to="/" hash="service" className="link-underline self-start md:self-end">
              Vores service
            </Link>
            <Link to="/" hash="om" className="link-underline self-start md:self-end">
              Om STILLE
            </Link>
            <Link to="/" hash="kontakt" className="link-underline self-start md:self-end">
              Kontakt
            </Link>
            <Link to="/privatlivspolitik" className="link-underline self-start md:self-end">
              Privatlivspolitik
            </Link>
          </nav>
        </div>
        <div className="mt-20 border-t border-border pt-10">
          <p className="text-xs font-light tracking-wide text-muted-foreground/80">
            STILLE er et brand under We Care · CVR 43510916
          </p>
          <p className="mt-2 text-xs font-light tracking-wide text-muted-foreground/80">
            Alle aftaler, fakturering og juridiske forhold håndteres gennem We Care.
          </p>
        </div>
      </div>
    </footer>
  );
}
