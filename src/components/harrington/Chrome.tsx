import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Linkedin, Twitter, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { firm } from "@/content/harrington";
import { useScrollLock } from "@/components/site/useScrollLock";
import { practiceAreas } from "@/content/harrington";

const nav = [
  { to: "/demo-1", label: "Home", exact: true },
  { to: "/demo-1/about", label: "About", exact: false },
  { to: "/demo-1/services", label: "Services", exact: false },
  { to: "/demo-1/contact", label: "Contact", exact: false },
] as const;

function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="block leading-none">
      <span
        className={`font-display text-2xl tracking-tight ${tone === "light" ? "text-surface-foreground" : "text-primary"}`}
      >
        Harrington <span className="text-brand">&amp;</span> Co.
      </span>
      <span
        className={`mt-1 block text-[0.6rem] tracking-[0.28em] uppercase ${tone === "light" ? "text-surface-muted" : "text-muted-foreground"}`}
      >
        {firm.kicker}
      </span>
    </span>
  );
}

export function HarringtonHeader() {
  const [open, setOpen] = useState(false);
  useScrollLock(open);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/95 backdrop-blur-sm">
      <div className="shell flex h-20 items-center justify-between gap-6 md:h-24">
        <Link to="/demo-1" aria-label="Harrington & Co. home">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className="group relative py-2 text-[0.78rem] tracking-[0.16em] text-foreground/80 uppercase transition-colors hover:text-primary data-[status=active]:text-primary"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand transition-all duration-300 group-hover:w-full group-data-[status=active]:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/demo-1/contact"
            className="inline-flex items-center border border-primary px-6 py-3.5 text-[0.72rem] tracking-[0.18em] text-primary uppercase transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Schedule a Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="harrington-mobile-menu"
          className="inline-flex h-11 w-11 items-center justify-center border border-hairline text-primary lg:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Open menu</span>
        </button>
      </div>

      <div
        id="harrington-mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-50 lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div
          className="absolute inset-0 bg-primary/40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-surface transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
            <Wordmark tone="light" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-surface-foreground"
            >
              <X className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 py-8">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.exact }}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 py-4 font-display text-2xl text-surface-foreground transition-colors data-[status=active]:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/demo-1/contact"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex w-full items-center justify-center bg-brand px-6 py-4 text-[0.72rem] tracking-[0.18em] text-brand-foreground uppercase"
            >
              Schedule a Consultation
            </Link>
            <div className="mt-8 space-y-2 text-sm text-surface-muted">
              <a className="block hover:text-surface-foreground" href={`tel:${firm.phone}`}>
                {firm.phone}
              </a>
              <a className="block hover:text-surface-foreground" href={`mailto:${firm.email}`}>
                {firm.email}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function HarringtonFooter() {
  return (
    <footer className="bg-surface text-surface-foreground">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-4">
        <div>
          <Wordmark tone="light" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-surface-muted">
            A Madison Avenue practice offering strategic counsel to individuals, businesses and
            institutions since 2001.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Twitter, label: "X" },
              { Icon: Facebook, label: "Facebook" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={`${firm.name} on ${label}`}
                className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-surface-muted transition-colors hover:border-brand hover:text-brand"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-eyebrow text-brand">Navigation</h2>
          <ul className="mt-6 space-y-3 text-sm text-surface-muted">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.exact }}
                  className="transition-colors hover:text-surface-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/" className="transition-colors hover:text-surface-foreground">
                Explore Demos
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-eyebrow text-brand">Practice Areas</h2>
          <ul className="mt-6 space-y-3 text-sm text-surface-muted">
            {practiceAreas.slice(0, 6).map((area) => (
              <li key={area.slug}>
                <Link
                  to="/demo-1/services"
                  hash={area.slug}
                  className="transition-colors hover:text-surface-foreground"
                >
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-eyebrow text-brand">Office</h2>
          <ul className="mt-6 space-y-4 text-sm text-surface-muted">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>
                {firm.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a className="hover:text-surface-foreground" href={`tel:${firm.phone}`}>
                {firm.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a className="hover:text-surface-foreground" href={`mailto:${firm.email}`}>
                {firm.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-4 py-6 text-xs text-surface-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 Harrington &amp; Co. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {["Privacy Policy", "Terms", "Disclaimer"].map((label) => (
              <li key={label}>
                <a href="#" className="transition-colors hover:text-surface-foreground">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="shell pb-8">
          <p className="max-w-3xl text-xs leading-relaxed text-surface-muted/80">
            Website content is provided for demonstration purposes only and does not constitute legal
            advice. Harrington &amp; Co. is a fictional firm created for this template; all names,
            results and contact details are illustrative.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function DemoSwitcher({ current }: { current: 1 | 2 }) {
  return (
    <div className="border-b border-hairline bg-primary text-primary-foreground">
      <div className="shell flex flex-wrap items-center justify-between gap-3 py-2.5 text-[0.68rem] tracking-[0.14em] uppercase">
        <span className="opacity-70">
          Template Demo {current === 1 ? "01 — Harrington & Co." : "02 — Veritas Legal"}
        </span>
        <div className="flex items-center gap-4">
          <Link to="/" className="opacity-70 transition-opacity hover:opacity-100">
            All demos
          </Link>
          <Link
            to={current === 1 ? "/demo-2" : "/demo-1"}
            className="border border-white/25 px-3 py-1.5 transition-colors hover:bg-white/10"
          >
            View demo {current === 1 ? "02" : "01"}
          </Link>
        </div>
      </div>
    </div>
  );
}
