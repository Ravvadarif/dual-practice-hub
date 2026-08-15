import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import {
  AttorneyGrid,
  CtaBand,
  PageHero,
  SectionHead,
  StatBand,
  SecondaryLink,
} from "@/components/harrington/blocks";
import { approach, timeline, values } from "@/content/harrington";
import archImage from "@/assets/h-architecture.jpg";
import officeImage from "@/assets/h-office.jpg";

const title = "About the Firm | Harrington & Co.";
const description =
  "Founded in 2001, Harrington & Co. represents individuals, businesses and institutions with senior attention on every matter. Our story, values and attorneys.";

export const Route = createFileRoute("/demo-1/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/demo-1/about" },
    ],
    links: [{ rel: "canonical", href: "/demo-1/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Harrington & Co."
        title="Built on Experience. Focused on Your Future."
        intro="Twenty-five years of representing clients whose matters carry real consequence — and a structure designed so that a partner, not a queue, is responsible for the outcome."
      />

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHead
              eyebrow="Our Story"
              title="A Practice Built Deliberately, Not Quickly."
              intro="Eleanor Harrington opened the firm in 2001 with two attorneys and a conviction that most clients were being under-served by the very firms they were paying most."
            />
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                We grew by adding capability rather than headcount: transactional counsel in 2008, a
                dedicated trial group in 2015, and a national network of co-counsel relationships that
                allows us to act well beyond New York without diluting how a file is handled.
              </p>
              <p>
                Today the firm advises founders and boards, families protecting what they have built,
                and individuals facing the most difficult year of their lives. The common thread is
                consequence: matters where the wrong strategy costs more than the fee.
              </p>
              <p>
                Our mission is straightforward — to give clients the clarity to make good decisions,
                and the advocacy to make those decisions hold.
              </p>
            </div>
          </div>
          <Reveal delay={120}>
            <img
              src={archImage}
              alt="Stone colonnade of a classical courthouse at golden hour"
              width={1400}
              height={900}
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <StatBand />

      {/* Timeline */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="shell">
          <SectionHead eyebrow="Firm History" title="Twenty-Five Years, Marked Plainly." />
          <ol className="mt-14 border-l border-hairline">
            {timeline.map((entry, i) => (
              <Reveal key={entry.year} delay={i * 70} as="li" className="relative pb-12 pl-8 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute top-2 -left-[5px] h-2.5 w-2.5 rounded-full bg-brand"
                />
                <p className="font-display text-3xl text-brand">{entry.year}</p>
                <h3 className="mt-2 font-display text-2xl text-primary">{entry.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {entry.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-28">
        <div className="shell">
          <SectionHead
            eyebrow="Our Approach"
            title="Four Steps, In This Order, Every Time."
            intro="A repeatable method is what allows judgment to be applied consistently rather than improvised."
            center
          />
          <ul className="mt-14 grid gap-px border border-hairline bg-hairline lg:grid-cols-4">
            {approach.map((item, i) => (
              <li key={item.title} className="bg-background">
                <Reveal delay={i * 80} className="h-full p-9">
                  <span className="font-display text-2xl text-brand">{item.step}</span>
                  <h3 className="mt-8 font-display text-2xl text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Values + philosophy */}
      <section className="border-t border-hairline bg-card py-20 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <img
              src={officeImage}
              alt="Conference room of the firm's Madison Avenue office"
              width={1408}
              height={1008}
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </Reveal>
          <div>
            <SectionHead
              eyebrow="Values & Philosophy"
              title="What We Hold Ourselves To."
              intro="Our philosophy is that legal work is a service business first: the quality of the advice matters, and so does the experience of receiving it."
            />
            <ul className="mt-10 grid gap-8 sm:grid-cols-2">
              {values.map((value, i) => (
                <Reveal key={value.title} delay={i * 70} as="li">
                  <h3 className="font-display text-xl text-primary">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Attorneys */}
      <section className="py-20 md:py-28">
        <div className="shell">
          <SectionHead
            eyebrow="Our Attorneys"
            title="The People Who Will Handle Your Matter."
            intro="Three partners, each leading their own files, supported by a small team of associates and paralegals."
          />
          <AttorneyGrid />
          <Reveal delay={200} className="mt-12">
            <SecondaryLink to="/demo-1/services">See Our Practice Areas</SecondaryLink>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Considering Whether We Are the Right Firm?"
        body="A short conversation is usually enough to know. We will tell you plainly if your matter belongs elsewhere."
      />
    </>
  );
}
