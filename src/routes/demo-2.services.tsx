import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Tag, VCta, VPageHero, VSectionHead } from "@/components/veritas/blocks";
import { services } from "@/content/veritas";

const title = "Services | Veritas Legal";
const description =
  "Business and corporate, disputes and litigation, employment, real estate, family, estate planning, personal injury and criminal defence counsel from Veritas Legal.";

export const Route = createFileRoute("/demo-2/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/demo-2/services" },
    ],
    links: [{ rel: "canonical", href: "/demo-2/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <VPageHero
        tag="Services"
        title="Practical Counsel for Complex Moments."
        intro="Twelve practice areas, eight of which are set out in full below — what the work covers, the matters we see most often, and how we approach them."
      />

      {/* Quick index */}
      <section className="border-b border-border bg-muted/50 py-8">
        <div className="shell">
          <ul className="flex flex-wrap gap-2">
            {services.map((service) => (
              <li key={service.slug}>
                <a
                  href={`#${service.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <span className="text-xs font-semibold text-muted-foreground">{service.num}</span>
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="shell space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid scroll-mt-28 gap-10 lg:grid-cols-[0.85fr_1.15fr]"
            >
              <Reveal className={index % 2 === 1 ? "lg:order-2" : undefined}>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-primary">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-6 text-sm font-semibold text-muted-foreground">{service.num}</p>
                <h2 className="mt-2 font-display text-display-md font-semibold tracking-tight text-foreground">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <Link
                  to="/demo-2/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Discuss a {service.title.toLowerCase()} matter
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Reveal>

              <Reveal delay={100} className={index % 2 === 1 ? "lg:order-1" : undefined}>
                <div className="rounded-3xl border border-border bg-card p-7 md:p-9">
                  <p className="text-base leading-relaxed text-foreground">{service.detail}</p>
                  <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    <div>
                      <Tag>Common matters</Tag>
                      <ul className="mt-4 space-y-2.5">
                        {service.matters.map((matter) => (
                          <li key={matter} className="flex gap-2.5 text-sm text-muted-foreground">
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                              aria-hidden="true"
                            />
                            {matter}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <Tag>Our approach</Tag>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {service.approach}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted/60 py-14 md:py-20">
        <div className="shell">
          <VSectionHead
            tag="Also available"
            title="Four Further Practice Areas."
            intro="Regulatory advice, intellectual property, immigration and appellate work are handled in-house or through long-standing co-counsel relationships."
          />
        </div>
      </section>

      <VCta
        title="Not Sure Which Area Your Matter Falls Under?"
        body="Describe the situation in a sentence or two and we will route it to the right attorney."
        label="Start a Conversation"
      />
    </>
  );
}
