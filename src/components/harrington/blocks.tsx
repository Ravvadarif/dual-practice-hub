import { Link } from "@tanstack/react-router";
import { useId, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Minus, Plus, Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { attorneys, faqs, practiceAreas, stats, firm } from "@/content/harrington";
import a1 from "@/assets/h-attorney-1.jpg";
import a2 from "@/assets/h-attorney-2.jpg";
import a3 from "@/assets/h-attorney-3.jpg";

const portraits = [a1, a2, a3];

/* ------------------------------ primitives ------------------------------ */

export function Eyebrow({ children, tone }: { children: ReactNode; tone?: "light" }) {
  return (
    <p className={`text-eyebrow ${tone === "light" ? "text-brand" : "text-brand"}`}>
      <span className="mr-3 inline-block h-px w-8 translate-y-[-0.25rem] bg-brand align-middle" />
      {children}
    </p>
  );
}

const btnBase =
  "inline-flex items-center justify-center gap-2 px-7 py-4 text-[0.72rem] tracking-[0.18em] uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2";

export function PrimaryLink({
  to,
  children,
  hash,
}: {
  to: string;
  children: ReactNode;
  hash?: string;
}) {
  return (
    <Link
      to={to}
      hash={hash}
      className={`${btnBase} bg-primary text-primary-foreground hover:bg-brand hover:text-brand-foreground active:translate-y-px`}
    >
      {children}
      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
    </Link>
  );
}

export function SecondaryLink({
  to,
  children,
  hash,
  tone,
}: {
  to: string;
  children: ReactNode;
  hash?: string;
  tone?: "light";
}) {
  return (
    <Link
      to={to}
      hash={hash}
      className={`${btnBase} border ${
        tone === "light"
          ? "border-white/30 text-surface-foreground hover:border-brand hover:text-brand"
          : "border-primary/30 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground"
      } active:translate-y-px`}
    >
      {children}
    </Link>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  center,
  tone,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  center?: boolean;
  tone?: "light";
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className={`mt-5 font-display text-display-md ${tone === "light" ? "text-surface-foreground" : "text-primary"}`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 text-base leading-relaxed ${tone === "light" ? "text-surface-muted" : "text-muted-foreground"}`}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}

/* -------------------------------- sections -------------------------------- */

export function StatBand({ items = stats }: { items?: { value: string; label: string }[] }) {
  return (
    <section aria-label="Firm credentials" className="border-y border-hairline bg-card">
      <div className="shell grid grid-cols-2 divide-hairline lg:grid-cols-4 lg:divide-x">
        {items.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 70}
            className="px-2 py-10 text-center lg:px-8 lg:py-14 lg:text-left"
          >
            <p className="font-display text-4xl text-primary lg:text-5xl">{stat.value}</p>
            <p className="mt-3 text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function PracticeGrid({ limit }: { limit?: number }) {
  const items = limit ? practiceAreas.slice(0, limit) : practiceAreas;
  return (
    <ul className="mt-14 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
      {items.map((area, i) => (
        <li key={area.slug}>
          <Reveal delay={(i % 4) * 60} className="h-full">
            <Link
              to="/demo-1/services"
              hash={area.slug}
              className="group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-primary"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-lg text-brand">{area.num}</span>
                <area.icon
                  className="h-6 w-6 text-primary/40 transition-colors group-hover:text-brand"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-10 font-display text-2xl text-primary transition-colors group-hover:text-primary-foreground">
                {area.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/70">
                {area.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[0.68rem] tracking-[0.18em] text-primary/60 uppercase transition-colors group-hover:text-brand">
                Learn more
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export function AttorneyGrid() {
  return (
    <ul className="mt-14 grid gap-10 md:grid-cols-3">
      {attorneys.map((person, i) => (
        <li key={person.name}>
          <Reveal delay={i * 90}>
            <div className="group overflow-hidden border border-hairline bg-card">
              <div className="overflow-hidden">
                <img
                  src={portraits[i]}
                  alt={`Portrait of ${person.name}, ${person.role} at Harrington & Co.`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl text-primary">{person.name}</h3>
                <p className="mt-1 text-[0.68rem] tracking-[0.18em] text-brand uppercase">
                  {person.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{person.bio}</p>
                <p className="mt-5 border-t border-hairline pt-4 text-xs tracking-wide text-muted-foreground">
                  {person.focus}
                </p>
              </div>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export function Testimonials({
  items,
}: {
  items: { quote: string; name: string; role: string }[];
}) {
  return (
    <ul className="mt-14 grid gap-px border border-hairline bg-hairline lg:grid-cols-3">
      {items.map((t, i) => (
        <li key={t.name} className="bg-background">
          <Reveal delay={i * 80} className="flex h-full flex-col p-9">
            <span aria-hidden="true" className="font-display text-5xl leading-none text-brand">
              &ldquo;
            </span>
            <blockquote className="mt-4 flex-1 font-display text-xl leading-snug text-primary">
              {t.quote}
            </blockquote>
            <footer className="mt-7 border-t border-hairline pt-5">
              <p className="text-sm font-medium text-primary">{t.name}</p>
              <p className="mt-1 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                {t.role}
              </p>
            </footer>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export function FaqAccordion({ items = faqs }: { items?: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();
  return (
    <div className="mt-12 divide-y divide-hairline border-y border-hairline">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${base}-panel-${i}`}
                id={`${base}-btn-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-brand"
              >
                <span className="font-display text-xl text-primary md:text-2xl">{item.q}</span>
                {isOpen ? (
                  <Minus className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                ) : (
                  <Plus className="h-5 w-5 shrink-0 text-primary/50" aria-hidden="true" />
                )}
              </button>
            </h3>
            <div
              id={`${base}-panel-${i}`}
              role="region"
              aria-labelledby={`${base}-btn-${i}`}
              hidden={!isOpen}
              className="pr-10 pb-7"
            >
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function CtaBand({
  title,
  body,
  label = "Schedule a Consultation",
}: {
  title: string;
  body: string;
  label?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(115deg,transparent,color-mix(in_oklab,var(--brand)_18%,transparent))]"
      />
      <div className="shell relative grid gap-10 py-20 md:py-28 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <Reveal>
          <Eyebrow tone="light">Next Step</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-display-lg text-surface-foreground">
            {title}
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-surface-muted">{body}</p>
        </Reveal>
        <Reveal delay={120} className="flex flex-wrap gap-4 lg:justify-end">
          <Link
            to="/demo-1/contact"
            className={`${btnBase} bg-brand text-brand-foreground hover:bg-white`}
          >
            {label}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <a
            href={`tel:${firm.phone}`}
            className={`${btnBase} border border-white/30 text-surface-foreground hover:border-brand hover:text-brand`}
          >
            {firm.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="border-b border-hairline bg-card">
      <div className="shell grid gap-8 py-16 md:py-24 lg:grid-cols-[1.15fr_1fr] lg:items-end">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-display-lg text-primary">{title}</h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="border-l border-brand pl-6 text-base leading-relaxed text-muted-foreground">
            {intro}
          </p>
        </Reveal>
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
  service: string;
  contactMethod: string;
  message: string;
  consent: boolean;
};

const empty: Fields = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  contactMethod: "Email",
  message: "",
  consent: false,
};

const fieldClass =
  "w-full border border-input bg-background px-4 py-3.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-brand focus:outline-none";
const labelClass = "block text-[0.68rem] tracking-[0.16em] text-primary uppercase";

export function HarringtonContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  function validate(v: Fields) {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!v.firstName.trim()) e.firstName = "Please enter your first name.";
    if (!v.lastName.trim()) e.lastName = "Please enter your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
      e.email = "Please enter a valid email address.";
    if (v.phone.trim() && v.phone.replace(/\D/g, "").length < 7)
      e.phone = "Please enter a reachable phone number.";
    if (!v.service) e.service = "Please select the service you need.";
    if (v.message.trim().length < 20)
      e.message = "Please describe your matter in at least 20 characters.";
    if (!v.consent) e.consent = "Please confirm you agree to the privacy policy.";
    return e;
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length === 0) setSent(true);
  }

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  if (sent) {
    return (
      <div
        role="status"
        className="border border-brand/40 bg-card p-10 text-center md:p-14"
        aria-live="polite"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center border border-brand text-brand">
          <Check className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="mt-6 font-display text-3xl text-primary">Your request has been captured</h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thank you, {values.firstName}. This template has no email service connected yet, so nothing
          was transmitted — connect a backend or email provider to deliver submissions to the firm.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(empty);
            setSent(false);
          }}
          className={`${btnBase} mt-8 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground`}
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={submit} className="border border-hairline bg-card p-7 md:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="h-first"
          label="First Name"
          error={errors.firstName}
          value={values.firstName}
          onChange={(v) => update("firstName", v)}
          autoComplete="given-name"
          required
        />
        <Field
          id="h-last"
          label="Last Name"
          error={errors.lastName}
          value={values.lastName}
          onChange={(v) => update("lastName", v)}
          autoComplete="family-name"
          required
        />
        <Field
          id="h-email"
          label="Email"
          type="email"
          error={errors.email}
          value={values.email}
          onChange={(v) => update("email", v)}
          autoComplete="email"
          required
        />
        <Field
          id="h-phone"
          label="Phone"
          type="tel"
          error={errors.phone}
          value={values.phone}
          onChange={(v) => update("phone", v)}
          autoComplete="tel"
        />

        <div>
          <label className={labelClass} htmlFor="h-service">
            Service Needed <span className="text-brand">*</span>
          </label>
          <select
            id="h-service"
            required
            className={`${fieldClass} mt-3`}
            value={values.service}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "h-service-error" : undefined}
            onChange={(e) => update("service", e.target.value)}
          >
            <option value="">Select a practice area</option>
            {practiceAreas.map((area) => (
              <option key={area.slug} value={area.title}>
                {area.title}
              </option>
            ))}
            <option value="Other">Something else</option>
          </select>
          {errors.service ? (
            <p id="h-service-error" className="mt-2 text-xs text-destructive">
              {errors.service}
            </p>
          ) : null}
        </div>

        <fieldset>
          <legend className={labelClass}>Preferred Contact Method</legend>
          <div className="mt-3 flex gap-3">
            {["Email", "Phone", "Video"].map((option) => (
              <label
                key={option}
                className={`flex-1 cursor-pointer border px-3 py-3 text-center text-xs tracking-wide transition-colors ${
                  values.contactMethod === option
                    ? "border-brand bg-brand/10 text-primary"
                    : "border-input text-muted-foreground hover:border-primary/40"
                }`}
              >
                <input
                  type="radio"
                  name="h-contact-method"
                  className="sr-only"
                  value={option}
                  checked={values.contactMethod === option}
                  onChange={() => update("contactMethod", option)}
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-6">
        <label className={labelClass} htmlFor="h-message">
          Message <span className="text-brand">*</span>
        </label>
        <textarea
          id="h-message"
          rows={5}
          required
          className={`${fieldClass} mt-3 resize-y`}
          placeholder="Briefly describe your matter, any deadlines, and what you would like to achieve."
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "h-message-error" : undefined}
          onChange={(e) => update("message", e.target.value)}
        />
        {errors.message ? (
          <p id="h-message-error" className="mt-2 text-xs text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="mt-6">
        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 accent-[oklch(0.255_0.048_262)]"
            checked={values.consent}
            aria-invalid={Boolean(errors.consent)}
            onChange={(e) => update("consent", e.target.checked)}
          />
          <span>I agree to the privacy policy.</span>
        </label>
        {errors.consent ? <p className="mt-2 text-xs text-destructive">{errors.consent}</p> : null}
      </div>

      <button
        type="submit"
        className={`${btnBase} mt-8 w-full bg-primary text-primary-foreground hover:bg-brand hover:text-brand-foreground sm:w-auto`}
      >
        Request a Consultation
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </button>

      <p className="mt-6 border-t border-hairline pt-6 text-xs leading-relaxed text-muted-foreground">
        Submitting this form does not create an attorney-client relationship. Please do not submit
        confidential or time-sensitive information through this form.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className={labelClass} htmlFor={id}>
        {label} {required ? <span className="text-brand">*</span> : null}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={`${fieldClass} mt-3`}
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

export function MapPanel() {
  return (
    <div className="relative aspect-16/10 w-full overflow-hidden border border-hairline bg-muted">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(var(--hairline) 1px, transparent 1px), linear-gradient(90deg, var(--hairline) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-1/3 w-16 -rotate-12 bg-[color-mix(in_oklab,var(--brand)_22%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-0 left-0 h-10 bg-[color-mix(in_oklab,var(--primary)_10%,transparent)]"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="border border-brand bg-card/95 px-6 py-5 text-center shadow-sm">
          <p className="text-eyebrow text-brand">Our Office</p>
          <p className="mt-3 font-display text-xl text-primary">{firm.addressLines[0]}</p>
          <p className="text-sm text-muted-foreground">{firm.addressLines[1]}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            Illustrative map graphic — connect a mapping provider to display live directions.
          </p>
        </div>
      </div>
    </div>
  );
}
