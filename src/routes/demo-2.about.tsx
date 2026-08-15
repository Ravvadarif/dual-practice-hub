import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import {
  MetricBand,
  StageRow,
  TeamGrid,
  VCta,
  VGhost,
  VPageHero,
  VSectionHead,
} from "@/components/veritas/blocks";
import { stages, timeline, valuesList, whyUs } from "@/content/veritas";
import archImage from "@/assets/v-architecture.jpg";
import meetingImage from "@/assets/v-meeting.jpg";

const title = "About Veritas Legal | Modern Legal Counsel";
const description =
  "Veritas Legal is a modern practice built around clear advice, predictable pricing and senior attention. Our story, philosophy, values and team.";

export const Route = createFileRoute("/demo-2/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/demo-2/about" },
    ],
    links: [{ rel: "canonical", href: "/demo-2/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <VPageHero
        tag="About Veritas Legal"
        title="Legal Counsel Designed Around People."
        intro="We started the firm because good legal advice was arriving too late, priced unpredictably, and written for other lawyers. Everything here is built to correct that."
      />

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <img
              src={archImage}
              alt="Modern glass office tower in San Francisco's financial district"
              width={1400}
              height={900}
              loading="lazy"
              className="aspect-4/3 w-full rounded-3xl object-cover"
            />
          </Reveal>
          <div>
            <VSectionHead
              tag="Our Story"
              title="Thirteen Years of Building a Better Practice."
              intro="Veritas Legal opened in 2013 with three attorneys, a flat-fee pilot and a small number of clients willing to test it."
            />
            <div className="mt-7 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                The pilot worked. Clients could forecast legal spend, and our attorneys stopped
                optimising for hours. That single decision shaped everything after it: smaller
                caseloads, senior staffing, and processes designed to remove the busywork that used to
                be billable.
              </p>
              <p>
                Today twelve practice areas sit under one roof, from venture financings to family
                matters, and the firm still runs on the same promise — you speak to the person doing
                the work, and you know what it costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-y border-border bg-muted/50 py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <VSectionHead
            tag="Our Philosophy"
            title="Advice Is Only Useful If You Can Act On It."
            intro="We write for the person making the decision, not for the file. That means a recommendation, the risk beside it, and no hedging designed to protect the author."
          />
          <Reveal delay={100}>
            <img
              src={meetingImage}
              alt="Attorneys and a client working through documents together"
              width={1408}
              height={1008}
              loading="lazy"
              className="aspect-16/10 w-full rounded-3xl object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 md:py-24">
        <div className="shell">
          <VSectionHead
            tag="How We Work"
            title="Three Stages, Every Matter."
            intro="The method is deliberately unglamorous. It is also why our estimates hold."
            wide
          />
          <StageRow items={stages} />
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-16 text-surface-foreground md:py-24">
        <div className="shell">
          <VSectionHead tag="Our Values" title="Four Commitments We Are Held To." tone="light" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valuesList.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 70}
                as="li"
                className="rounded-2xl bg-white/5 p-7"
              >
                <h3 className="font-display text-xl font-semibold text-surface-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-surface-muted">{value.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline — horizontal */}
      <section className="py-16 md:py-24">
        <div className="shell">
          <VSectionHead tag="Milestones" title="How the Firm Grew." />
          <ol className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {timeline.map((entry, i) => (
              <Reveal
                key={entry.year}
                delay={i * 70}
                as="li"
                className="border-t-2 border-primary/30 pt-5"
              >
                <p className="font-display text-lg font-semibold text-primary">{entry.year}</p>
                <h3 className="mt-2 font-semibold text-foreground">{entry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="shell">
          <VSectionHead
            tag="Meet the Team"
            title="The Attorneys Behind the Work."
            intro="Three partners, supported by associates and a client operations team that keeps matters moving."
          />
          <TeamGrid />
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-muted/60 py-16 md:py-24">
        <div className="shell">
          <VSectionHead tag="Why Veritas" title="Why Clients Choose Veritas." />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {whyUs.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 70}
                as="li"
                className="rounded-2xl bg-card p-7 shadow-[0_1px_0_var(--border)]"
              >
                <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200} className="mt-10">
            <VGhost to="/demo-2/services">See What We Do</VGhost>
          </Reveal>
        </div>
      </section>

      <MetricBand />

      <VCta
        title="Want to Know If We're the Right Fit?"
        body="Tell us what you're dealing with. If it isn't work we do well, we'll point you to someone who does."
      />
    </>
  );
}
