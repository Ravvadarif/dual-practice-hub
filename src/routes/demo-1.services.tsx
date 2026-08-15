import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero, SectionHead } from "@/components/harrington/blocks";
import { practiceAreas } from "@/content/harrington";

const title = "Practice Areas | Harrington & Co. Attorneys at Law";
const description =
  "Corporate law, commercial litigation, real estate, employment, family law, estate planning, criminal defence and personal injury counsel from Harrington & Co.";

export const Route = createFileRoute("/demo-1/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/demo-1/services" },
    ],
    links: [{ rel: "canonical", href: "/demo-1/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Practice Areas"
        title="Legal Experience Across Critical Practice Areas."
        intro="Eight core practice areas, each led by a partner. Every section below sets out what the work involves, the matters we typically handle, and what you can expect from the engagement."
      />

      <section className="py-16 md:py-24">
        <div className="shell grid gap-14 lg:grid-cols-[15rem_1fr] lg:gap-16">
          {/* Sticky index */}
          <nav aria-label="Practice area index" className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="text-eyebrow text-brand">On This Page</h2>
            <ol className="mt-6 space-y-3 border-l border-hairline">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <a
                    href={`#${area.slug}`}
                    className="-ml-px flex gap-3 border-l border-transparent pl-4 text-sm text-muted-foreground transition-colors hover:border-brand hover:text-primary"
                  >
                    <span className="font-display text-brand">{area.num}</span>
                    {area.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-16 md:space-y-24">
            {practiceAreas.map((area) => (
              <article
                key={area.slug}
                id={area.slug}
                className="scroll-mt-32 border-t border-hairline pt-10"
              >
                <Reveal>
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-display text-lg text-brand">{area.num}</p>
                      <h2 className="mt-3 font-display text-display-md text-primary">{area.title}</h2>
                    </div>
                    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center border border-hairline text-primary">
                      <area.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>
                  <p className="mt-6 max-w-3xl text-lg leading-relaxed text-primary/80">
                    {area.summary}
                  </p>
                  <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                    {area.detail}
                  </p>
                </Reveal>

                <div className="mt-10 grid gap-px border border-hairline bg-hairline md:grid-cols-2">
                  <div className="bg-background p-8">
                    <h3 className="text-eyebrow text-brand">Typical Matters</h3>
                    <ul className="mt-5 space-y-3">
                      {area.matters.map((matter) => (
                        <li key={matter} className="flex gap-3 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                          {matter}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col bg-secondary p-8">
                    <h3 className="text-eyebrow text-brand">What Clients Can Expect</h3>
                    <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {area.expect}
                    </p>
                    <Link
                      to="/demo-1/contact"
                      className="group mt-8 inline-flex items-center gap-3 text-[0.72rem] tracking-[0.18em] text-primary uppercase"
                    >
                      Discuss a {area.title} matter
                      <ArrowRight
                        className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-card py-16 md:py-20">
        <div className="shell">
          <SectionHead
            eyebrow="Not Listed Here?"
            title="We Handle Eighteen Practice Areas In Total."
            intro="Regulatory matters, appellate work, immigration, tax controversy and intellectual property counsel are also available through the firm or trusted co-counsel."
          />
        </div>
      </section>

      <CtaBand
        title="Tell Us Which Matter Brought You Here."
        body="We will confirm within one business day whether the firm is the right fit and what the next step looks like."
      />
    </>
  );
}
