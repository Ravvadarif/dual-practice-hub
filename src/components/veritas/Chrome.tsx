import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, Linkedin, Twitter, Instagram } from "lucide-react";
import { firm, services } from "@/content/veritas";
import { useScrollLock } from "@/components/site/useScrollLock";

const nav = [
  { to: "/demo-2", label: "Home", exact: true },
  { to: "/demo-2/about", label: "About", exact: false },
  { to: "/demo-2/services", label: "Services", exact: false },
  { to: "/demo-2/contact", label: "Contact", exact: false },
];

function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className={`grid h-9 w-9 place-items-center rounded-md text-sm font-bold ${
          tone === "light" ? "bg-white text-surface" : "bg-primary text-primary-foreground"
        }`}
      >
        V
      </span>
      <span
        className={`font-display text-lg font-semibold tracking-tight ${
          tone === "light" ? "text-surface-foreground" : "text-foreground"
        }`}
      >
        Veritas<span className="text-primary">{tone === "light" ? "" : " "}</span>
        <span className={tone === "light" ? "text-white/60" : "text-muted-foreground"}>Legal</span>
      </span>
    </span>
  );
}

export function VeritasHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useScrollLock(open);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_var(--hairline),0_10px_30px_-24px_rgba(15,17,26,0.4)]" : ""
      }`}
    >
      <div className="shell flex h-18 items-center gap-8 py-3">
        <Link to="/demo-2" aria-label="Veritas Legal home" className="mr-auto">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground data-[status=active]:bg-accent data-[status=active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/demo-2/contact"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 lg:inline-flex"
        >
          Book a Consultation
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="veritas-mobile-menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Open menu</span>
        </button>
      </div>

      <div
        id="veritas-mobile-menu"
        hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="fixed inset-0 z-50 bg-background lg:hidden"
      >
        <div className="flex h-18 items-center justify-between px-5">
          <Wordmark />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border"
          >
            <X className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <nav aria-label="Mobile" className="flex h-[calc(100%-4.5rem)] flex-col px-5 pt-6 pb-10">
          <ul className="space-y-2">
            {nav.map((item, i) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.exact }}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: `${i * 40}ms` }}
                  className="flex items-center justify-between rounded-2xl bg-muted px-5 py-5 font-display text-2xl font-semibold text-foreground transition-colors data-[status=active]:bg-accent data-[status=active]:text-primary"
                >
                  {item.label}
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-4">
            <Link
              to="/demo-2/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-semibold text-primary-foreground"
            >
              Book a Consultation
            </Link>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <a href={`tel:${firm.phone}`}>{firm.phone}</a>
              <a href={`mailto:${firm.email}`}>{firm.email}</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export function VeritasFooter() {
  return (
    <footer className="bg-surface text-surface-foreground">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Wordmark tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-surface-muted">
              {firm.tagline} A modern practice advising businesses, professionals and families across
              twelve areas of law.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "X" },
                { Icon: Instagram, label: "Instagram" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={`${firm.name} on ${label}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-surface-foreground transition-colors hover:bg-primary"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold text-surface-foreground">Explore Demo</h2>
            <ul className="mt-5 space-y-3 text-sm text-surface-muted">
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
                  All demos
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-surface-foreground">Services</h2>
            <ul className="mt-5 space-y-3 text-sm text-surface-muted">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/demo-2/services"
                    hash={service.slug}
                    className="transition-colors hover:text-surface-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-surface-foreground">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm text-surface-muted">
              <li>
                {firm.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </li>
              <li>
                <a className="hover:text-surface-foreground" href={`tel:${firm.phone}`}>
                  {firm.phone}
                </a>
              </li>
              <li>
                <a className="hover:text-surface-foreground" href={`mailto:${firm.email}`}>
                  {firm.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 text-xs text-surface-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 Veritas Legal. All rights reserved.</p>
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
        <p className="mt-5 max-w-3xl text-xs leading-relaxed text-surface-muted/80">
          Website content is provided for demonstration purposes only and does not constitute legal
          advice. Veritas Legal is a fictional firm created for this template; all names, statistics
          and contact details are illustrative.
        </p>
      </div>
    </footer>
  );
}

export function VeritasDemoBar() {
  return (
    <div className="bg-surface text-surface-foreground">
      <div className="shell flex flex-wrap items-center justify-between gap-3 py-2.5 text-xs">
        <span className="text-surface-muted">Template Demo 02 — Veritas Legal</span>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-surface-muted transition-colors hover:text-white">
            All demos
          </Link>
          <Link
            to="/demo-1"
            className="rounded-full bg-white/10 px-3 py-1.5 transition-colors hover:bg-white/20"
          >
            View demo 01
          </Link>
        </div>
      </div>
    </div>
  );
}
