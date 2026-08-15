import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import {
  MetricBand,
  ServiceCards,
  StageRow,
  Tag,
  TeamGrid,
  TrustBar,
  VCta,
  VFaq,
  VGhost,
  VPrimary,
  VSectionHead,
  VTestimonials,
} from "@/components/veritas/blocks";
import { stages, testimonials, trustBar } from "@/content/veritas";
import heroImage from "@/assets/v-hero.jpg";
import meetingImage from "@/assets/v-meeting.jpg";

const title = "Veritas Legal | Modern Legal Counsel";
const description =
  "Practical, strategic legal counsel for businesses, professionals, families and individuals facing important decisions. Modern legal thinking, meaningful results.";

export const Route = createFileRoute("/demo-2/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/demo-2" },
    ],
    links: [{ rel: "canonical", href: "/demo-2" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Veritas Legal",
          description,
          telephone: "+1 (415) 555-0142",
          address: {
            "@type": "PostalAddress",
            streetAddress: "540 Market Street, Suite 900",
            addressLocality: "San Francisco",
            addressRegion: "CA",
            postalCode: "94104",
            addressCountry: "US",
          },
          areaServed: "United States",
          disambiguatingDescription:
            "Fictional firm presented as a website template demonstration.",
        }),
      },
    ],
  }),
  component: VeritasHome,
});

function VeritasHome() {
  return (
    <>
      {/* Hero — asymmetric grid, image bleeds right */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_70%)]"
        />
        <div className="shell relative grid gap-10 pt-12 pb-16 md:pt-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14 lg:pb-24">
          <div>
            <Reveal>
              <Tag>{"Modern Legal Thinking. Meaningful Results."}</Tag>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-7 font-display text-display-xl font-semibold tracking-tight text-foreground">
                Clarity When the <span className="text-primary">Stakes Are High.</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Practical, strategic legal counsel for businesses, professionals, families and
                individuals facing important decisions.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-9 flex flex-wrap gap-3">
              <VPrimary to="/demo-2/contact">Start a Conversation</VPrimary>
              <VGhost to="/demo-2/services">Explore Our Services</VGhost>
            </Reveal>
            <Reveal delay={260} className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { v: "20+", l: "Years combined" },
                { v: "1,500+", l: "Clients advised" },
                { v: "12", l: "Practice areas" },
              ].map((item) => (
                <div key={item.l}>
                  <p className="font-display text-2xl font-semibold text-foreground">{item.v}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.l}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <img
              src={heroImage}
              alt="Founding partner of Veritas Legal in the firm's San Francisco office"
              width={1600}
              height={1104}
              className="aspect-4/3 w-full rounded-3xl object-cover lg:aspect-5/4"
            />
            <div className="absolute -bottom-6 left-4 hidden max-w-[15rem] rounded-2xl border border-border bg-card p-5 shadow-[0_20px_50px_-30px_rgba(15,17,26,0.5)] md:block">
              <p className="text-sm font-semibold text-foreground">Same-week consultations</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Every prospective client speaks with the attorney who would lead the work.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <TrustBar items={trustBar} />

      {/* Intro — split screen */}
      <section className="py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <VSectionHead
              tag="Our Approach"
              title="Law That Moves With You."
              intro="Legal work should keep pace with the decision it supports. We built the firm around fast, practical advice and pricing you can plan for."
            />
            <ul className="mt-9 space-y-4">
              {[
                {
                  t: "Practical advice",
                  d: "A recommendation, not a survey of possibilities, with the risk stated plainly.",
                },
                {
                  t: "Transparent communication",
                  d: "Fixed fees where scope allows and written updates whether or not there is news.",
                },
                {
                  t: "Strategic thinking",
                  d: "Every matter has a defined objective, budget and exit before we begin.",
                },
                {
                  t: "Efficient processes",
                  d: "Shared trackers, reusable templates and no re-explaining your business each call.",
                },
                {
                  t: "Personalised representation",
                  d: "Small caseloads by design, so senior attention is the standard rather than the upgrade.",
                },
              ].map((item, i) => (
                <Reveal
                  key={item.t}
                  delay={i * 60}
                  as="li"
                  className="rounded-2xl border border-border p-5"
                >
                  <p className="font-semibold text-foreground">{item.t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={120} className="lg:sticky lg:top-28">
            <img
              src={meetingImage}
              alt="Veritas Legal attorneys reviewing documents with a client"
              width={1408}
              height={1008}
              loading="lazy"
              className="aspect-4/3 w-full rounded-3xl object-cover"
            />
            <div className="mt-6 rounded-2xl bg-muted/70 p-6">
              <p className="text-sm leading-relaxed text-foreground">
                “We do not bill for getting up to speed twice. The attorney who takes your first call
                stays with the matter.”
              </p>
              <p className="mt-3 text-xs text-muted-foreground">Daniel Morgan, Founding Partner</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <VSectionHead
              tag="Services"
              title="Counsel Across Twelve Areas of Law."
              intro="Eight of them make up the majority of our work. Each is led by an attorney who practises in it daily."
            />
            <Reveal delay={100}>
              <Link
                to="/demo-2/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                All services
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <ServiceCards />
        </div>
      </section>

      {/* Feature / stages */}
      <section className="bg-muted/60 py-16 md:py-24">
        <div className="shell">
          <VSectionHead
            tag="How We Work"
            title="Good Legal Advice Starts With Understanding."
            intro="Three stages, in the same order on every matter, so nothing important is assumed."
            wide
          />
          <StageRow items={stages} />
        </div>
      </section>

      <MetricBand />

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="shell">
          <VSectionHead tag="Client Experience" title="What Clients Say About Working With Us." />
          <VTestimonials items={testimonials} />
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <VSectionHead
              tag="The Team"
              title="Senior Attorneys, Directly Reachable."
              intro="Three partners lead the practice, each carrying a deliberately limited caseload."
            />
            <Reveal delay={100}>
              <VGhost to="/demo-2/about">Meet the Team</VGhost>
            </Reveal>
          </div>
          <TeamGrid />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/60 py-16 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <VSectionHead
            tag="FAQ"
            title="Questions Before You Get in Touch."
            intro="If yours is not covered here, ask us directly — we answer enquiries within one business day."
          />
          <div>
            <VFaq />
          </div>
        </div>
      </section>

      <VCta
        title="Let's Find the Right Way Forward."
        body="Whether you're protecting a business, resolving a dispute, or planning your next chapter, our team is ready to help."
      />
    </>
  );
}
