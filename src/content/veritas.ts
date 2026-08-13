import {
  Landmark,
  Gavel,
  UserRound,
  Building,
  HeartHandshake,
  FileSignature,
  Activity,
  Shield,
  type LucideIcon,
} from "lucide-react";

export const firm = {
  name: "Veritas Legal",
  kicker: "Modern Legal Counsel",
  tagline: "Modern Legal Thinking. Meaningful Results.",
  phone: "+1 (415) 555-0142",
  email: "hello@veritaslegal.example",
  addressLines: ["540 Market Street, Suite 900", "San Francisco, CA 94104"],
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday", time: "10:00 AM – 2:00 PM (by appointment)" },
    { day: "Sunday", time: "Closed" },
  ],
};

export type Service = {
  num: string;
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  detail: string;
  matters: string[];
  approach: string;
};

export const services: Service[] = [
  {
    num: "01",
    slug: "business-corporate",
    title: "Business & Corporate",
    icon: Landmark,
    summary:
      "Counsel for founders, operators and investors — from formation through financing and exit.",
    detail:
      "We work with companies that are moving quickly and cannot afford legal work that arrives late or reads like an obstacle. That means term sheets reviewed in hours, contract templates your team can reuse, and clear answers on the questions that actually gate a decision.",
    matters: [
      "Incorporation, equity and founder agreements",
      "Venture financings and convertible instruments",
      "Customer, vendor and reseller contracting",
      "Acquisitions, diligence and integration",
      "Data, IP and licensing arrangements",
    ],
    approach:
      "Flat fees for defined workstreams, a shared document tracker, and one attorney who knows your business rather than a queue.",
  },
  {
    num: "02",
    slug: "disputes-litigation",
    title: "Disputes & Litigation",
    icon: Gavel,
    summary: "Commercial disputes handled with a settlement plan and a trial plan from day one.",
    detail:
      "Most disputes end in a negotiated result. We prepare as though yours will not, because leverage comes from readiness. Before filing we model outcomes, cost and timeline so you can decide whether litigation is the right instrument at all.",
    matters: [
      "Contract, partnership and investor disputes",
      "Technology and services disputes",
      "Injunctive relief and urgent applications",
      "Arbitration and mediation advocacy",
      "Appellate work",
    ],
    approach:
      "Phase-based budgets, monthly written case updates, and a documented decision point before every escalation.",
  },
  {
    num: "03",
    slug: "employment",
    title: "Employment",
    icon: UserRound,
    summary: "Workplace advice for growing companies and the executives who join them.",
    detail:
      "Employment risk usually arrives through documents written years earlier. We review and rebuild the paperwork — offers, handbooks, contractor terms, separation agreements — and handle claims when prevention has come too late.",
    matters: [
      "Offer letters, equity and executive terms",
      "Handbook, policy and classification review",
      "Separations and reductions in force",
      "Discrimination and retaliation claims",
      "Confidentiality and mobility disputes",
    ],
    approach:
      "Practical positions rather than maximal ones, fast turnaround on separations, and training so managers stop creating the next claim.",
  },
  {
    num: "04",
    slug: "real-estate",
    title: "Real Estate",
    icon: Building,
    summary: "Leasing, acquisitions and development counsel for occupiers, owners and investors.",
    detail:
      "Whether you are signing a first office lease or closing a mixed-use acquisition, the economics live in the details — escalations, exclusivity, repair obligations, financing conditions. We negotiate those terms and translate them into obligations your team can track.",
    matters: [
      "Commercial leases, subleases and assignments",
      "Purchase, sale and joint venture structures",
      "Financing and lender negotiation",
      "Title, survey and zoning review",
      "Construction and development agreements",
    ],
    approach:
      "A negotiated issues list before drafting, a closing timeline everyone can see, and a post-signing lease summary.",
  },
  {
    num: "05",
    slug: "family-private-client",
    title: "Family & Private Client",
    icon: HeartHandshake,
    summary: "Divorce, parenting and private wealth matters handled with restraint and precision.",
    detail:
      "These matters deserve to be resolved rather than won. We favour negotiated and mediated outcomes, prepare financial disclosure carefully, and litigate when the alternative would leave a client unprotected.",
    matters: [
      "Divorce, separation and financial settlement",
      "Custody and parenting arrangements",
      "Support determination and modification",
      "Pre-marital and post-marital agreements",
      "Private client and family governance advice",
    ],
    approach:
      "Predictable scheduling, one point of contact, and communication kept out of the conflict wherever possible.",
  },
  {
    num: "06",
    slug: "estate-planning",
    title: "Estate Planning",
    icon: FileSignature,
    summary: "Wills, trusts and succession structures that stay current as life changes.",
    detail:
      "A plan drafted once and never revisited is a liability. We build wills, trusts and directives around how your assets and family are actually arranged, then review them on a schedule so they still work when they are needed.",
    matters: [
      "Wills, trusts and healthcare directives",
      "Powers of attorney and incapacity planning",
      "Business succession and ownership transition",
      "Trust and estate administration",
      "Charitable and multigenerational planning",
    ],
    approach:
      "A structured intake, a one-page summary of your plan in plain English, and a scheduled review every three years.",
  },
  {
    num: "07",
    slug: "personal-injury",
    title: "Personal Injury",
    icon: Activity,
    summary: "Serious injury claims built on medical evidence and rigorous damages analysis.",
    detail:
      "We take a small number of injury matters and prepare each one thoroughly — working with treating clinicians, vocational experts and economists to document the full extent of loss rather than the insurer's estimate of it.",
    matters: [
      "Vehicle and commercial transport collisions",
      "Premises and unsafe condition claims",
      "Defective product injuries",
      "Catastrophic injury and wrongful death",
      "Coverage and bad faith disputes",
    ],
    approach:
      "Contingency representation in qualifying matters, a clear medical timeline, and no settlement recommended without comparable-outcome analysis.",
  },
  {
    num: "08",
    slug: "criminal-defense",
    title: "Criminal Defense",
    icon: Shield,
    summary: "Early, discreet intervention in investigations, regulatory action and criminal charges.",
    detail:
      "The first week of an investigation shapes the years that follow. We take control of communications, assess the evidence honestly and pursue resolution before positions harden, with the courtroom prepared for if they do.",
    matters: [
      "White collar and financial investigations",
      "Regulatory and professional licensing action",
      "Pre-charge advocacy",
      "Felony and misdemeanour defence",
      "Appeals and record relief",
    ],
    approach:
      "Reachable counsel outside business hours, complete confidentiality, and candour about exposure from the first meeting.",
  },
];

export const trustBar = ["Trusted Counsel", "Strategic Advice", "Client Focused", "Results Driven"];

export const metrics = [
  { value: "20+", label: "Years Combined Experience" },
  { value: "1,500+", label: "Clients Advised" },
  { value: "12", label: "Practice Areas" },
  { value: "4.9/5", label: "Client Experience" },
];

export const stages = [
  {
    num: "01",
    title: "Listen",
    body: "We begin with the full picture — the commercial pressure, the relationships involved and the result you need. No advice is given before the facts are understood.",
  },
  {
    num: "02",
    title: "Analyze",
    body: "Documents, exposure and options are assessed together, and you receive a written view of the realistic paths forward with cost and timing attached.",
  },
  {
    num: "03",
    title: "Act",
    body: "We execute the agreed strategy and adjust it openly when circumstances change. You are never briefed after a decision has already been made.",
  },
];

export const attorneys = [
  {
    name: "Daniel Morgan",
    role: "Founding Partner",
    bio: "Daniel spent twelve years in commercial disputes before founding Veritas Legal on a simpler premise: clear advice, delivered when it is still useful.",
    focus: "Disputes · Business",
  },
  {
    name: "Olivia Carter",
    role: "Corporate Attorney",
    bio: "Olivia advises founders and management teams through financings, commercial contracting and acquisitions, with a focus on technology and services businesses.",
    focus: "Corporate · Employment",
  },
  {
    name: "Marcus Reed",
    role: "Litigation Partner",
    bio: "Marcus handles complex commercial litigation and urgent applications, and has appeared in state and federal courts across the West Coast.",
    focus: "Litigation · Real Estate",
  },
];

export const testimonials = [
  {
    quote:
      "We needed a decision, not a memo. Veritas gave us a clear recommendation the same afternoon and stood behind it when the other side pushed.",
    name: "Priya Raman",
    role: "Chief Operating Officer, SaaS",
  },
  {
    quote:
      "The fee estimate matched the invoice. After years of legal spend I could not forecast, that alone changed how we work with outside counsel.",
    name: "Thomas Vance",
    role: "Founder, Logistics",
  },
  {
    quote:
      "My matter was personal and difficult. They handled it with care, kept it out of court, and explained every step before it happened.",
    name: "Alina Duarte",
    role: "Private Client",
  },
];

export const faqs = [
  {
    q: "How does the consultation process work?",
    a: "Your first conversation is a thirty-minute call with an attorney, not an intake screener. We discuss what you are facing, whether we are the right firm for it, and what engagement would look like in scope and cost.",
  },
  {
    q: "What types of matters do you handle?",
    a: "Business and corporate work, commercial disputes, employment, real estate, family and private client matters, estate planning, personal injury and criminal defence. If a matter falls outside our practice, we will refer you to counsel who handles it well.",
  },
  {
    q: "Can I speak with an attorney before retaining the firm?",
    a: "Yes — always. Every prospective client speaks with the attorney who would lead the work before any engagement letter is signed.",
  },
  {
    q: "How do you communicate with clients?",
    a: "You choose the channel: email, phone or video. Substantive calls are followed by a short written summary, and active matters receive a scheduled update even in quiet weeks.",
  },
  {
    q: "What information should I prepare?",
    a: "A short timeline of events and any contracts, correspondence or filings that relate to the matter. If you are not sure what is relevant, bring everything and we will sort it with you.",
  },
];

export const timeline = [
  { year: "2013", title: "Founded", body: "Veritas Legal opens in San Francisco with three attorneys and a flat-fee pilot." },
  { year: "2017", title: "Corporate group formed", body: "A dedicated transactional team begins advising venture-backed companies." },
  { year: "2020", title: "Fully distributed practice", body: "Remote-first operations extend the firm's reach across the state without adding overhead." },
  { year: "2023", title: "Litigation expansion", body: "The disputes group doubles, taking on complex commercial and injunctive work." },
  { year: "2026", title: "Twelve practice areas", body: "One firm, twelve practice areas, and the same standard of access we started with." },
];

export const valuesList = [
  {
    title: "Clarity",
    body: "Advice you can act on without a second translation. If a document needs a glossary, it needs a rewrite.",
  },
  {
    title: "Integrity",
    body: "We tell clients when a claim is weak, when a deal is bad, and when the right answer is to walk away.",
  },
  {
    title: "Strategy",
    body: "Every matter gets a plan with a defined objective, a budget and an exit — not an open-ended engagement.",
  },
  {
    title: "Commitment",
    body: "Small caseloads by design, so the attorney on your matter has the time it genuinely requires.",
  },
];

export const whyUs = [
  {
    title: "Senior attention as standard",
    body: "The lawyer you meet is the lawyer who does the work. Nothing is delegated down to fill a billing target.",
  },
  {
    title: "Pricing you can plan around",
    body: "Fixed fees wherever scope allows, and phase budgets where it does not. Surprise invoices are a process failure.",
  },
  {
    title: "Commercial before legal",
    body: "We start from what the decision costs your business, then work out how the law gets you there.",
  },
  {
    title: "Responsive by design",
    body: "Enquiries answered within one business day, urgent matters the same day, and a named contact for every file.",
  },
];
