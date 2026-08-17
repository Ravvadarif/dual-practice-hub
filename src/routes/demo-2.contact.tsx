import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Tag, VMap, VPageHero, VeritasContactForm } from "@/components/veritas/blocks";
import { firm } from "@/content/veritas";

const title = "Contact Veritas Legal | Book a Consultation";
const description =
  "Tell us what you're facing. Book a consultation with Veritas Legal in San Francisco — enquiries answered within one business day.";

export const Route = createFileRoute("/demo-2/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/demo-2/contact" },
    ],
    links: [{ rel: "canonical", href: "/demo-2/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <VPageHero
        tag="Contact"
        title="Tell Us What You're Facing."
        intro="Enquiries are answered within one business day, and urgent matters the same day. Your first conversation is with an attorney, not an intake screener."
      />

      <section className="py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <VeritasContactForm />
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={100} className="rounded-3xl bg-muted/70 p-8">
              <Tag>Office</Tag>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-muted-foreground">
                    {firm.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <a className="font-medium text-foreground hover:text-primary" href={`tel:${firm.phone}`}>
                    {firm.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <a
                    className="font-medium text-foreground hover:text-primary"
                    href={`mailto:${firm.email}`}
                  >
                    {firm.email}
                  </a>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={160} className="rounded-3xl border border-border p-8">
              <Tag>Office hours</Tag>
              <ul className="mt-6 space-y-3 text-sm">
                {firm.hours.map((row) => (
                  <li key={row.day} className="flex items-baseline justify-between gap-4">
                    <span className="text-foreground">{row.day}</span>
                    <span className="text-muted-foreground">{row.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex gap-3 text-xs leading-relaxed text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                For urgent applications and active investigations, a partner is reachable outside
                office hours by arrangement.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <VMap />
            </Reveal>
          </div>
        </div>

        <div className="shell">
          <p className="mt-4 max-w-3xl border-t border-border pt-8 text-xs leading-relaxed text-muted-foreground">
            Submitting this form does not create an attorney-client relationship. Please do not include
            confidential or time-sensitive information. Veritas Legal is a fictional firm and all
            contact details on this template are illustrative.
          </p>
        </div>
      </section>
    </>
  );
}
