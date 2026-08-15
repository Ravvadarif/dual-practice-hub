import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import {
  Eyebrow,
  HarringtonContactForm,
  MapPanel,
  PageHero,
} from "@/components/harrington/blocks";
import { firm } from "@/content/harrington";

const title = "Contact Harrington & Co. | Schedule a Consultation";
const description =
  "Request a consultation with Harrington & Co. Call +1 (212) 555-0188 or send an enquiry describing your legal matter. Madison Avenue, New York.";

export const Route = createFileRoute("/demo-1/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/demo-1/contact" },
    ],
    links: [{ rel: "canonical", href: "/demo-1/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Discuss Your Legal Matter."
        intro="Consultations are arranged within the same week wherever possible, in person at our Madison Avenue office or by video. Urgent matters are reviewed the day they reach us."
      />

      <section className="py-16 md:py-24">
        <div className="shell grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <h2 className="font-display text-display-md text-primary">Request a Consultation</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Required fields are marked with an asterisk. The more context you can provide about
              deadlines and the outcome you are seeking, the more useful the first conversation will
              be.
            </p>
            <div className="mt-10">
              <HarringtonContactForm />
            </div>
          </Reveal>

          <div className="space-y-10">
            <Reveal delay={100} className="border border-hairline bg-card p-8">
              <Eyebrow>Office</Eyebrow>
              <ul className="mt-7 space-y-6 text-sm">
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <span className="text-muted-foreground">
                    {firm.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <a className="text-primary hover:text-brand" href={`tel:${firm.phone}`}>
                    {firm.phone}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <a className="text-primary hover:text-brand" href={`mailto:${firm.email}`}>
                    {firm.email}
                  </a>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={160} className="border border-hairline bg-secondary p-8">
              <Eyebrow>Office Hours</Eyebrow>
              <ul className="mt-7 space-y-4 text-sm">
                {firm.hours.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-baseline justify-between gap-4 border-b border-hairline pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-primary">{row.day}</span>
                    <span className="text-muted-foreground">{row.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                For active investigations and injunctive matters, a partner is reachable outside
                office hours by prior arrangement.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-card py-16 md:py-20">
        <div className="shell">
          <div className="max-w-2xl">
            <Eyebrow>Finding Us</Eyebrow>
            <h2 className="mt-5 font-display text-display-md text-primary">
              Madison Avenue, Upper East Side.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The office sits two blocks from the 77th Street subway entrance, with parking available
              on the adjacent block. Please announce yourself at reception on the twelfth floor.
            </p>
          </div>
          <Reveal delay={120} className="mt-10">
            <MapPanel />
          </Reveal>
          <p className="mt-8 max-w-3xl border-t border-hairline pt-8 text-xs leading-relaxed text-muted-foreground">
            Submitting this form does not create an attorney-client relationship. Please do not submit
            confidential or time-sensitive information through this form. Harrington &amp; Co. is a
            fictional firm and all contact details on this template are illustrative.
          </p>
        </div>
      </section>
    </>
  );
}
