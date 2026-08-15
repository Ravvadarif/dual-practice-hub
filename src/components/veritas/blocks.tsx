import { Link } from "@tanstack/react-router";
import { useId, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Check, Quote } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { attorneys, faqs, firm, metrics, services } from "@/content/veritas";
import p1 from "@/assets/v-attorney-1.jpg";
import p2 from "@/assets/v-attorney-2.jpg";
import p3 from "@/assets/v-attorney-3.jpg";

const portraits = [p1, p2, p3];

type Dest = "/demo-2" | "/demo-2/about" | "/demo-2/services" | "/demo-2/contact";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

export function VPrimary({ to, children }: { to: Dest; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-16px_var(--primary)] active:translate-y-0"
    >
      {children}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export function VGhost({ to, children }: { to: Dest; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-foreground/40 hover:bg-muted"
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export function VSectionHead({
  tag,
  title,
  intro,
  tone,
  wide,
}: {
  tag: string;
  title: string;
  intro?: string;
  tone?: "light";
  wide?: boolean;
}) {
  return (
    <Reveal className={wide ? "max-w-4xl" : "max-w-2xl"}>
      {tone === "light" ? (
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/80">
          {tag}
        </span>
      ) : (
        <Tag>{tag}</Tag>
      )}
      <h2
        className={`mt-6 font-display text-display-md font-semibold tracking-tight ${tone === "light" ? "text-surface-foreground" : "text-foreground"}`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 text-lg leading-relaxed ${tone === "light" ? "text-surface-muted" : "text-muted-foreground"}`}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}

export function VPageHero({
  tag,
  title,
  intro,
}: {
  tag: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-muted/60">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-96 w-96 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_70%)]"
      />
      <div className="shell relative py-16 md:py-24">
        <Reveal className="max-w-4xl">
          <Tag>{tag}</Tag>
          <h1 className="mt-7 font-display text-display-lg font-semibold tracking-tight text-foreground">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function TrustBar({ items }: { items: string[] }) {
  return (
    <section aria-label="Firm attributes" className="border-y border-border">
      <div className="shell grid divide-y divide-border sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
        {items.map((item, i) => (
          <Reveal key={item} delay={i * 60} className="px-2 py-7 sm:px-6">
            <p className="text-sm font-semibold tracking-tight text-foreground">{item}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ServiceCards({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;
  return (
    <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((service, i) => (
        <li key={service.slug}>
          <Reveal delay={(i % 4) * 60} className="h-full">
            <Link
              to="/demo-2/services"
              hash={service.slug}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_50px_-40px_var(--primary)]"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold text-muted-foreground">{service.num}</span>
              </div>
              <h3 className="mt-7 font-display text-lg font-semibold tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.summary}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Details
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export function MetricBand({ items = metrics }: { items?: { value: string; label: string }[] }) {
  return (
    <section className="bg-muted/60 py-16 md:py-20">
      <div className="shell">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 70} as="li" className="rounded-2xl bg-card p-7">
              <p className="font-display text-4xl font-semibold tracking-tight text-primary">
                {metric.value}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{metric.label}</p>
            </Reveal>
          ))}
        </ul>
        <p className="mt-8 text-xs text-muted-foreground">
          Figures shown are illustrative template statistics for a fictional firm, not claims about a
          real practice.
        </p>
      </div>
    </section>
  );
}

export function StageRow({
  items,
}: {
  items: { num: string; title: string; body: string }[];
}) {
  return (
    <ol className="mt-12 grid gap-6 lg:grid-cols-3">
      {items.map((stage, i) => (
        <Reveal
          key={stage.num}
          delay={i * 90}
          as="li"
          className="relative rounded-2xl border border-border p-8"
        >
          <span className="font-display text-sm font-bold text-primary">{stage.num}</span>
          <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-foreground">
            {stage.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stage.body}</p>
          {i < items.length - 1 ? (
            <span
              aria-hidden="true"
              className="absolute top-1/2 -right-3 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground lg:flex"
            >
              <ArrowRight className="h-3 w-3" />
            </span>
          ) : null}
        </Reveal>
      ))}
    </ol>
  );
}

export function VTestimonials({
  items,
}: {
  items: { quote: string; name: string; role: string }[];
}) {
  return (
    <ul className="mt-12 grid gap-6 lg:grid-cols-3">
      {items.map((t, i) => (
        <Reveal
          key={t.name}
          delay={i * 80}
          as="li"
          className="flex flex-col rounded-2xl bg-muted/70 p-8"
        >
          <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
          <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground">
            {t.quote}
          </blockquote>
          <footer className="mt-7 flex items-center gap-3 border-t border-border pt-5">
            <span
              aria-hidden="true"
              className="grid h-10 w-10 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
            >
              {t.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </span>
            <span>
              <span className="block text-sm font-semibold text-foreground">{t.name}</span>
              <span className="block text-xs text-muted-foreground">{t.role}</span>
            </span>
          </footer>
        </Reveal>
      ))}
    </ul>
  );
}

export function TeamGrid() {
  return (
    <ul className="mt-12 grid gap-8 md:grid-cols-3">
      {attorneys.map((person, i) => (
        <Reveal key={person.name} delay={i * 90} as="li" className="group">
          <div className="overflow-hidden rounded-2xl bg-muted">
            <img
              src={portraits[i]}
              alt={`Portrait of ${person.name}, ${person.role} at Veritas Legal`}
              width={800}
              height={1000}
              loading="lazy"
              className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>
          <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-foreground">
            {person.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-primary">{person.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{person.bio}</p>
          <p className="mt-4 text-xs text-muted-foreground">{person.focus}</p>
        </Reveal>
      ))}
    </ul>
  );
}

export function VFaq({ items = faqs }: { items?: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();
  return (
    <div className="mt-10 space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={`rounded-2xl border transition-colors ${isOpen ? "border-primary/40 bg-accent/40" : "border-border bg-card"}`}
          >
            <h3>
              <button
                type="button"
                id={`${base}-btn-${i}`}
                aria-expanded={isOpen}
                aria-controls={`${base}-panel-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
              >
                <span className="font-display text-base font-semibold text-foreground md:text-lg">
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={`${base}-panel-${i}`}
              role="region"
              aria-labelledby={`${base}-btn-${i}`}
              hidden={!isOpen}
              className="px-6 pb-6"
            >
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function VCta({
  title,
  body,
  label = "Book a Consultation",
}: {
  title: string;
  body: string;
  label?: string;
}) {
  return (
    <section className="py-16 md:py-24">
      <div className="shell">
        <div className="relative overflow-hidden rounded-3xl bg-surface px-8 py-16 md:px-14 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_45%,transparent),transparent_70%)]"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <h2 className="max-w-2xl font-display text-display-md font-semibold tracking-tight text-surface-foreground">
                {title}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-surface-muted">{body}</p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                to="/demo-2/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-surface transition-transform hover:-translate-y-0.5"
              >
                {label}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={`tel:${firm.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-surface-foreground transition-colors hover:bg-white/10"
              >
                {firm.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ contact form ------------------------------ */

type Fields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  area: string;
  message: string;
};

const empty: Fields = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  area: "",
  message: "",
};

const input =
  "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/15 focus:outline-none";
const label = "text-sm font-medium text-foreground";

export function VeritasContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!values.firstName.trim()) e.firstName = "Please enter your first name.";
    if (!values.lastName.trim()) e.lastName = "Please enter your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      e.email = "Please enter a valid email address.";
    if (values.phone.trim() && values.phone.replace(/\D/g, "").length < 7)
      e.phone = "Please enter a reachable phone number.";
    if (!values.area) e.area = "Please choose an area of law.";
    if (values.message.trim().length < 20)
      e.message = "Please give us at least a sentence or two about the matter.";
    setErrors(e);
    if (Object.keys(e).length === 0) setSent(true);
  }

  if (sent) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-3xl border border-primary/30 bg-accent/50 p-10 text-center md:p-14"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground mx-auto">
          <Check className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
          Thanks, {values.firstName} — your enquiry is captured
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          No email service is connected to this template yet, so nothing has been transmitted. Wire up
          a backend or email provider to deliver submissions to the firm's inbox.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(empty);
            setSent(false);
          }}
          className="mt-8 inline-flex rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={submit}
      className="rounded-3xl border border-border bg-card p-6 md:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <VField
          id="v-first"
          text="First Name"
          value={values.firstName}
          error={errors.firstName}
          onChange={(v) => update("firstName", v)}
          autoComplete="given-name"
          required
        />
        <VField
          id="v-last"
          text="Last Name"
          value={values.lastName}
          error={errors.lastName}
          onChange={(v) => update("lastName", v)}
          autoComplete="family-name"
          required
        />
        <VField
          id="v-email"
          text="Email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={(v) => update("email", v)}
          autoComplete="email"
          required
        />
        <VField
          id="v-phone"
          text="Phone"
          type="tel"
          value={values.phone}
          error={errors.phone}
          onChange={(v) => update("phone", v)}
          autoComplete="tel"
        />
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="v-area">
          Area of Law <span className="text-primary">*</span>
        </label>
        <select
          id="v-area"
          className={input}
          value={values.area}
          required
          aria-invalid={Boolean(errors.area)}
          aria-describedby={errors.area ? "v-area-error" : undefined}
          onChange={(e) => update("area", e.target.value)}
        >
          <option value="">Select an area</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Not sure">Not sure yet</option>
        </select>
        {errors.area ? (
          <p id="v-area-error" className="mt-2 text-xs text-destructive">
            {errors.area}
          </p>
        ) : null}
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="v-message">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="v-message"
          rows={5}
          className={`${input} resize-y`}
          placeholder="What are you facing, and what would a good outcome look like?"
          value={values.message}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "v-message-error" : undefined}
          onChange={(e) => update("message", e.target.value)}
        />
        {errors.message ? (
          <p id="v-message-error" className="mt-2 text-xs text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
      >
        Send Inquiry
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </button>

      <p className="mt-6 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
        Submitting this form does not create an attorney-client relationship. Please do not include
        confidential or time-sensitive information.
      </p>
    </form>
  );
}

function VField({
  id,
  text,
  value,
  onChange,
  error,
  type = "text",
  required,
  autoComplete,
}: {
  id: string;
  text: string;
  value: string;
  onChange: (value: string) => void;
  error?: string | undefined;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className={label} htmlFor={id}>
        {text} {required ? <span className="text-primary">*</span> : null}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={input}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function VMap() {
  return (
    <div className="relative aspect-16/9 w-full overflow-hidden rounded-3xl bg-muted">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-0 bottom-0 left-1/4 w-20 rotate-6 bg-[color-mix(in_oklab,var(--primary)_12%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-2/3 h-12 bg-[color-mix(in_oklab,var(--primary)_8%,transparent)]"
      />
      <div className="absolute inset-0 grid place-items-center p-6">
        <div className="rounded-2xl border border-border bg-card px-6 py-5 text-center shadow-sm">
          <p className="text-sm font-semibold text-primary">Veritas Legal</p>
          <p className="mt-2 text-sm text-foreground">{firm.addressLines[0]}</p>
          <p className="text-sm text-muted-foreground">{firm.addressLines[1]}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            Illustrative map graphic — connect a mapping provider for live directions.
          </p>
        </div>
      </div>
    </div>
  );
}
