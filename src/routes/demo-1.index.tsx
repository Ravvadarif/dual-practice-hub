import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import {
  AttorneyGrid,
  CtaBand,
  Eyebrow,
  FaqAccordion,
  PracticeGrid,
  PrimaryLink,
  SecondaryLink,
  SectionHead,
  StatBand,
  Testimonials,
} from "@/components/harrington/blocks";
import { advantages, caseResults, testimonials } from "@/content/harrington";
import heroImage from "@/assets/h-hero.jpg";
import officeImage from "@/assets/h-office.jpg";

const title = "Harrington & Co. | Attorneys at Law";
const description =
  "Experienced legal counsel for individuals, businesses and institutions. Strategic representation across corporate, litigation, real estate and private client matters.";

export const Route = createFileRoute("/demo-1/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/demo-1" },
    ],
    links: [{ rel: "canonical", href: "/demo-1" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Harrington & Co.",
          description,
          telephone: "+1 (212) 555-0188",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1200 Madison Avenue",
            addressLocality: "New York",
            addressRegion: "NY",
            postalCode: "10016",
            addressCountry: "US",
          },
          areaServed: "United States",
          disambiguatingDescription:
            "Fictional firm presented as a website template demonstration.",
        }),
      },
    ],
  }),
  component: HarringtonHome,
});

function HarringtonHome() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-hairline bg-card">
        <div className="shell grid gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Serving Clients Since 2001</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-7 font-display text-display-xl text-primary">
                Trusted Counsel.
                <br />
                <span className="italic">Decisive Representation.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Strategic legal counsel for individuals, businesses, and institutions navigating
                complex challenges with confidence.
              </p>
            </Reveal>
            <Reveal delay={220} className="mt-10 flex flex-wrap gap-4">
              <PrimaryLink to="/demo-1/contact">Schedule a Consultation</PrimaryLink>
              <SecondaryLink to="/demo-1/services">Explore Our Practice Areas</SecondaryLink>
            </Reveal>
            <Reveal delay={280} className="mt-12 flex items-center gap-6 border-t border-hairline pt-8">
              <p className="font-display text-4xl text-primary">25+</p>
              <p className="max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
                Years of experience representing clients in demanding legal matters.
              </p>
            </Reveal>
          </div>

          <Reveal delay={140} className="relative">
            <div className="relative">
              <img
                src={heroImage}
                alt="Managing partner of Harrington & Co. standing in the firm's Madison Avenue office"
                width={1008}
                height={1408}
                className="aspect-4/5 w-full object-cover lg:aspect-3/4"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 -z-10 hidden h-40 w-40 border border-brand lg:block"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <StatBand />

      {/* Introduction */}
      <section className="py-20 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal className="order-2 lg:order-1">
            <img
              src={officeImage}
              alt="The firm's wood-panelled library and conference room"
              width={1408}
              height={1008}
              loading="lazy"
              className="aspect-5/4 w-full object-cover"
            />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHead
              eyebrow="The Firm"
              title="Experience That Works For You."
              intro="Harrington & Co. combines legal knowledge, strategic thinking and personalised representation. We take on matters where the outcome genuinely matters, and we staff them with the seniority they require."
            />
            <ul className="mt-10 space-y-6">
              {[
                {
                  t: "Experienced attorneys",
                  d: "Partners with decades of courtroom and boardroom experience lead every engagement.",
                },
                {
                  t: "Strategic approach",
                  d: "We plan backwards from your objective and price the path to reaching it.",
                },
                {
                  t: "Client-first representation",
                  d: "Fewer matters, handled properly, rather than volume handled quickly.",
                },
                {
                  t: "Clear communication",
                  d: "Written summaries after substantive calls and no unanswered messages.",
                },
              ].map((item, i) => (
                <Reveal key={item.t} delay={i * 70} as="li" className="flex gap-5">
                  <span className="mt-2 h-px w-8 shrink-0 bg-brand" aria-hidden="true" />
                  <span>
                    <span className="block font-display text-xl text-primary">{item.t}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {item.d}
                    </span>
                  </span>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={320} className="mt-10">
              <SecondaryLink to="/demo-1/about">Meet Our Firm</SecondaryLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Practice areas */}
      <section className="border-t border-hairline bg-secondary py-20 md:py-28">
        <div className="shell">
          <SectionHead
            eyebrow="Practice Areas"
            title="Counsel Across the Matters That Define a Business or a Family."
            intro="Eighteen practice areas, eight of which form the core of our daily work."
          />
          <PracticeGrid />
          <Reveal delay={200} className="mt-12">
            <PrimaryLink to="/demo-1/services">View All Practice Areas</PrimaryLink>
          </Reveal>
        </div>
      </section>

      {/* Why clients choose us */}
      <section className="py-20 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHead
            eyebrow="Why Clients Choose Us"
            title="Counsel Built Around What Matters."
            intro="Four commitments that shape how every matter is handled from the first call to the final resolution."
          />
          <ul className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
            {advantages.map((item, i) => (
              <li key={item.title} className="bg-background">
                <Reveal delay={i * 80} className="h-full p-8">
                  <span className="font-display text-sm text-brand">0{i + 1}</span>
                  <h3 className="mt-6 font-display text-2xl text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Case results */}
      <section className="bg-surface py-20 md:py-28">
        <div className="shell">
          <SectionHead
            eyebrow="Featured Experience"
            title="Results That Reflect Preparation."
            tone="light"
            center
          />
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {caseResults.map((result, i) => (
              <Reveal key={result.label} delay={i * 90} as="li" className="text-center">
                <p className="font-display text-5xl text-brand lg:text-6xl">{result.value}</p>
                <p className="mx-auto mt-4 max-w-[14rem] text-sm tracking-wide text-surface-muted">
                  {result.label}
                </p>
              </Reveal>
            ))}
          </ul>
          <p className="mt-14 text-center text-xs text-surface-muted/80">
            Illustrative results shown for demonstration purposes. Past outcomes do not guarantee a
            similar result in any future matter.
          </p>
        </div>
      </section>

      {/* Attorneys */}
      <section className="py-20 md:py-28">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHead
              eyebrow="Our Attorneys"
              title="Partners Who Handle Your File Personally."
            />
            <Reveal delay={120}>
              <Link
                to="/demo-1/about"
                className="group inline-flex items-center gap-3 text-[0.72rem] tracking-[0.18em] text-primary uppercase"
              >
                Meet Our Attorneys
                <ArrowRight
                  className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>
          <AttorneyGrid />
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-hairline bg-secondary py-20 md:py-28">
        <div className="shell">
          <SectionHead
            eyebrow="Client Perspectives"
            title="What Representation Feels Like From the Other Side."
            center
          />
          <Testimonials items={testimonials} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead
            eyebrow="Common Questions"
            title="Before You Call."
            intro="If your question is not answered here, the office will answer it directly."
          />
          <div>
            <FaqAccordion />
          </div>
        </div>
      </section>

      <CtaBand
        title="Your Legal Matter Deserves a Clear Strategy."
        body="Speak with our team about your situation and discover the next best step."
      />
    </>
  );
}
