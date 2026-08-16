import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import harringtonPreview from "@/assets/h-hero.jpg";
import veritasPreview from "@/assets/v-hero.jpg";

const title = "Two Premium Law Firm Website Demos | Legal Template";
const description =
  "Choose between two complete law firm website demos: Harrington & Co., a classic luxury practice, and Veritas Legal, a modern legal consultancy.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: DemoSelector,
});

const demos = [
  {
    to: "/demo-1" as const,
    index: "Demo 01",
    name: "Harrington & Co.",
    kicker: "Classic Luxury Law Firm",
    blurb:
      "Deep navy, warm ivory and restrained brass. Serif editorial headlines, hairline rules and a stat-led credibility structure for an established Madison Avenue practice.",
    image: harringtonPreview,
    alt: "Preview of the Harrington & Co. demo showing an attorney in a traditional law office",
    tags: ["Serif editorial", "Navy & brass", "Heritage authority"],
  },
  {
    to: "/demo-2" as const,
    index: "Demo 02",
    name: "Veritas Legal",
    kicker: "Modern Premium Legal Practice",
    blurb:
      "White, graphite and deep indigo. Large sans headlines, rounded cards and a process-led narrative for a contemporary, transparent legal consultancy.",
    image: veritasPreview,
    alt: "Preview of the Veritas Legal demo showing an attorney in a modern glass office",
    tags: ["Modern sans", "Indigo accent", "Editorial scale"],
  },
];

function DemoSelector() {
  return (
    <div className="theme-veritas min-h-screen bg-background font-body text-foreground">
      <header className="border-b border-border">
        <div className="shell flex h-16 items-center justify-between">
          <p className="text-sm font-semibold tracking-tight">Legal Website Template</p>
          <p className="text-xs text-muted-foreground">Two complete demos · 4 pages each</p>
        </div>
      </header>

      <main>
        <section className="shell py-14 md:py-20">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-primary">
              Choose a demo
            </span>
            <h1 className="mt-6 font-display text-display-lg font-semibold tracking-tight">
              Two premium law firm brands. One template.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Each demo is a complete website — home, about, services and contact — with its own
              typography, palette, layout system and personality. Open either to explore it in full.
            </p>
          </Reveal>

          <ul className="mt-14 grid gap-8 lg:grid-cols-2">
            {demos.map((demo, i) => (
              <Reveal key={demo.to} delay={i * 100} as="li">
                <Link
                  to={demo.to}
                  className="group block overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-45px_rgba(15,17,26,0.6)]"
                >
                  <div className="overflow-hidden">
                    <img
                      src={demo.image}
                      alt={demo.alt}
                      width={1600}
                      height={1104}
                      loading={i === 0 ? undefined : "lazy"}
                      className="aspect-16/10 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-7 md:p-9">
                    <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                      {demo.index}
                    </p>
                    <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                      {demo.name}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-primary">{demo.kicker}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{demo.blurb}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {demo.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-muted px-3 py-1.5 text-xs text-muted-foreground"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      View demo
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="shell space-y-3">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Harrington &amp; Co. and Veritas Legal are fictional firms created for demonstration
            purposes. All names, statistics, results and contact details are illustrative, and nothing
            on these pages constitutes legal advice.
          </p>
          <p className="text-xs text-muted-foreground">© 2026 Legal Website Template.</p>
        </div>
      </footer>
    </div>
  );
}
