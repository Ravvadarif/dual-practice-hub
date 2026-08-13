import {
  Building2,
  Scale,
  Home,
  Users,
  Briefcase,
  ScrollText,
  ShieldCheck,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";

export const firm = {
  name: "Harrington & Co.",
  kicker: "Attorneys at Law",
  phone: "+1 (212) 555-0188",
  email: "hello@harringtonlaw.example",
  addressLines: ["1200 Madison Avenue", "New York, NY 10016"],
  hours: [
    { day: "Monday – Thursday", time: "8:30 AM – 6:00 PM" },
    { day: "Friday", time: "8:30 AM – 4:30 PM" },
    { day: "Saturday", time: "By appointment" },
    { day: "Sunday", time: "Closed" },
  ],
};

export type PracticeArea = {
  num: string;
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  detail: string;
  matters: string[];
  expect: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    num: "01",
    slug: "corporate-law",
    title: "Corporate Law",
    icon: Building2,
    summary:
      "Formation, governance, financing and transactional counsel for closely held and growth-stage companies.",
    detail:
      "We act as day-to-day counsel to founders, boards and investors — drafting the agreements that hold a company together and reviewing the ones that could pull it apart. Our work covers entity structuring, shareholder arrangements, commercial contracting and the diligence that precedes a sale or capital raise.",
    matters: [
      "Entity formation and shareholder agreements",
      "Mergers, acquisitions and asset purchases",
      "Commercial and supplier contracting",
      "Board governance and fiduciary questions",
      "Financing rounds and investor documentation",
    ],
    expect:
      "A named partner leads your file, a written summary follows every substantive call, and every draft explains the commercial consequence of each clause in plain language.",
  },
  {
    num: "02",
    slug: "commercial-litigation",
    title: "Commercial Litigation",
    icon: Scale,
    summary:
      "Disciplined advocacy in contract, partnership and business tort disputes before state and federal courts.",
    detail:
      "Litigation is expensive when it is unplanned. We begin by mapping the realistic outcomes, the cost of reaching each one and the leverage available before a complaint is filed. When a matter must be tried, our preparation is exhaustive; when settlement serves you better, we say so early.",
    matters: [
      "Breach of contract and warranty claims",
      "Shareholder and partnership disputes",
      "Restrictive covenant and trade secret actions",
      "Professional liability defence",
      "Arbitration and mediated resolution",
    ],
    expect:
      "A written case assessment within the first two weeks, a defined budget by phase, and no procedural step taken without a reason you understand.",
  },
  {
    num: "03",
    slug: "real-estate-law",
    title: "Real Estate Law",
    icon: Home,
    summary:
      "Acquisitions, leasing, development and title matters for owners, investors and commercial tenants.",
    detail:
      "Property matters turn on documents that outlive the people who sign them. We handle purchase and sale agreements, commercial leasing, easements, financing and the land use approvals that determine whether a project can proceed at all.",
    matters: [
      "Commercial acquisitions and dispositions",
      "Office, retail and industrial leasing",
      "Development and construction agreements",
      "Title review, easements and boundary issues",
      "Landlord and tenant disputes",
    ],
    expect:
      "Clear closing checklists, coordinated dealings with lenders and brokers, and a lease abstract you can actually use after signing.",
  },
  {
    num: "04",
    slug: "family-law",
    title: "Family Law",
    icon: Users,
    summary:
      "Considered representation in divorce, custody, support and pre-marital planning matters.",
    detail:
      "Family matters carry consequences that are financial, practical and personal at once. We work to resolve them without unnecessary conflict, while preparing thoroughly for the possibility that a court will decide. Confidentiality and steadiness matter as much as strategy here.",
    matters: [
      "Divorce and marital settlement negotiation",
      "Custody, parenting time and relocation",
      "Child and spousal support determinations",
      "Pre-marital and cohabitation agreements",
      "Post-judgment modification and enforcement",
    ],
    expect:
      "Direct access to your attorney, a realistic view of likely outcomes from the outset, and an approach calibrated to protect long-term stability.",
  },
  {
    num: "05",
    slug: "employment-law",
    title: "Employment Law",
    icon: Briefcase,
    summary:
      "Counsel to employers and senior executives on agreements, investigations and workplace disputes.",
    detail:
      "We advise on the full arc of the employment relationship — hiring documents, handbooks and classification questions through to separations, investigations and litigation. For executives, we negotiate the compensation and departure terms that determine what an offer is really worth.",
    matters: [
      "Executive employment and severance negotiation",
      "Discrimination, harassment and retaliation claims",
      "Wage, hour and classification compliance",
      "Internal investigations and policy review",
      "Non-competition and confidentiality enforcement",
    ],
    expect:
      "Practical guidance that accounts for operational reality, prompt turnaround on time-sensitive separations, and documentation built to withstand review.",
  },
  {
    num: "06",
    slug: "estate-planning",
    title: "Estate Planning",
    icon: ScrollText,
    summary: "Wills, trusts, succession planning and probate administration for families and owners.",
    detail:
      "A plan is only as good as the family conversation behind it. We design wills, revocable and irrevocable trusts, powers of attorney and business succession structures, then keep them current as circumstances, ownership and tax rules change.",
    matters: [
      "Wills, revocable trusts and healthcare directives",
      "Generational and charitable planning",
      "Business succession and buy-sell structures",
      "Trust and estate administration",
      "Fiduciary guidance and beneficiary disputes",
    ],
    expect:
      "A plain-language summary of your plan, a signing process handled end to end, and a scheduled review so documents never quietly go stale.",
  },
  {
    num: "07",
    slug: "criminal-defense",
    title: "Criminal Defense",
    icon: ShieldCheck,
    summary: "Discreet defence in white collar, regulatory and serious state criminal matters.",
    detail:
      "From the first contact by an investigator, the decisions made in the earliest days shape everything that follows. We intervene early, control the flow of information, test the strength of the government's case and pursue resolution before charges harden where that is achievable.",
    matters: [
      "White collar and financial investigations",
      "Regulatory and licensing proceedings",
      "Pre-charge intervention and grand jury matters",
      "Felony and misdemeanour defence",
      "Appeals and post-conviction relief",
    ],
    expect:
      "Immediate availability during an active investigation, complete discretion, and candid advice about risk rather than reassurance.",
  },
  {
    num: "08",
    slug: "personal-injury",
    title: "Personal Injury",
    icon: HeartPulse,
    summary:
      "Recovery for individuals and families harmed by negligence, with careful damages preparation.",
    detail:
      "Serious injury cases are won on evidence and medical documentation, not volume. We take a limited number of matters, work with treating physicians and economists to establish the full extent of loss, and litigate against insurers who have priced their exposure too low.",
    matters: [
      "Motor vehicle and commercial trucking collisions",
      "Premises liability and unsafe conditions",
      "Product defect and failure claims",
      "Catastrophic and wrongful death matters",
      "Insurance coverage disputes",
    ],
    expect:
      "No fee unless we recover in qualifying matters, regular medical and case-status updates, and a settlement analysis grounded in comparable outcomes.",
  },
];

export const stats = [
  { value: "25+", label: "Years of Experience" },
  { value: "1,200+", label: "Cases Represented" },
  { value: "96%", label: "Successful Outcomes" },
  { value: "18", label: "Practice Areas" },
];

export const advantages = [
  {
    title: "Strategic Thinking",
    body: "We approach every matter with a clear understanding of your objectives, and we plan backwards from the outcome you need.",
  },
  {
    title: "Personal Attention",
    body: "Every client receives direct, thoughtful attention from a partner throughout their case — not a rotating cast of associates.",
  },
  {
    title: "Proven Experience",
    body: "Decades of legal experience across complex and demanding matters in courtrooms, boardrooms and negotiations.",
  },
  {
    title: "Clear Communication",
    body: "You always know where your case stands, what it will cost, and what comes next. No unanswered calls.",
  },
];

export const caseResults = [
  { value: "$18.4M", label: "Commercial Dispute Resolution" },
  { value: "$7.2M", label: "Complex Litigation Matter" },
  { value: "98%", label: "Client Satisfaction" },
];

export const attorneys = [
  {
    name: "Eleanor Harrington",
    role: "Managing Partner",
    bio: "Founded the firm in 2001 after a decade in commercial litigation. Eleanor leads the firm's most complex disputes and advises boards on governance and risk.",
    focus: "Commercial Litigation · Governance",
  },
  {
    name: "Michael Bennett",
    role: "Senior Partner",
    bio: "Michael has tried matters in state and federal court for over twenty years, with a practice centred on partnership disputes and professional liability defence.",
    focus: "Litigation · Employment",
  },
  {
    name: "Sophia Reynolds",
    role: "Partner, Corporate Practice",
    bio: "Sophia advises founders and investors through financings, acquisitions and the shareholder arrangements that follow, from formation to exit.",
    focus: "Corporate · Real Estate",
  },
];

export const testimonials = [
  {
    quote:
      "From our first consultation, the entire team made a complicated legal matter feel manageable. Their preparation, communication, and strategy were exceptional.",
    name: "James Carter",
    role: "Business Client",
  },
  {
    quote:
      "They told me plainly what my case was worth and what it would cost to pursue it. That honesty at the outset saved me from a decision I would have regretted.",
    name: "Marianne Whitfield",
    role: "Estate Planning Client",
  },
  {
    quote:
      "Our acquisition had two weeks of runway and a difficult counterparty. Harrington & Co. closed it without drama and caught two indemnity issues we had missed entirely.",
    name: "David Okonkwo",
    role: "Managing Director, Manufacturing",
  },
];

export const faqs = [
  {
    q: "How do I schedule a consultation?",
    a: "Call the office directly or submit the consultation form on our contact page. We respond to new enquiries within one business day and can usually offer an initial meeting within the same week, in person or by video.",
  },
  {
    q: "What should I bring to my first consultation?",
    a: "Bring any contracts, correspondence, filings or notices relevant to your matter, along with a short timeline of events if one is easy to assemble. If documents are not to hand, come anyway — we can begin with the facts as you understand them.",
  },
  {
    q: "Do you handle cases outside your local area?",
    a: "Yes. We regularly act for clients based elsewhere and, where a matter requires local court admission, we associate with trusted counsel in that jurisdiction while retaining strategic control of the file.",
  },
  {
    q: "How are legal fees structured?",
    a: "Depending on the matter we work on an hourly basis, a fixed fee for defined scopes such as estate planning or contract work, or a contingency arrangement in qualifying injury cases. You receive a written engagement letter setting out rates and estimates before work begins.",
  },
  {
    q: "How quickly can my case be reviewed?",
    a: "Urgent matters — injunctions, active investigations, imminent deadlines — are reviewed the day they reach us. Standard matters receive a written preliminary assessment within seven to ten business days of engagement.",
  },
];

export const timeline = [
  {
    year: "2001",
    title: "Firm Founded",
    body: "Eleanor Harrington opens the practice on Madison Avenue with two attorneys and a litigation-first mandate.",
  },
  {
    year: "2008",
    title: "Corporate Practice Expanded",
    body: "The firm adds transactional counsel, advising closely held companies through a difficult credit cycle.",
  },
  {
    year: "2015",
    title: "Litigation Division Established",
    body: "A dedicated trial group is formed, consolidating the firm's commercial dispute and professional liability work.",
  },
  {
    year: "2021",
    title: "National Client Network Expanded",
    body: "Co-counsel relationships across twelve states allow the firm to serve clients well beyond New York.",
  },
  {
    year: "2026",
    title: "Continuing the Tradition",
    body: "Eighteen practice areas, a partner on every file, and the same standard the firm was built on.",
  },
];

export const approach = [
  {
    step: "I",
    title: "Listen",
    body: "We start with your account of events, uninterrupted, and the outcome you actually want.",
  },
  {
    step: "II",
    title: "Understand",
    body: "Documents, deadlines and exposure are reviewed before any position is taken.",
  },
  {
    step: "III",
    title: "Strategize",
    body: "You receive options with costs, timelines and realistic outcomes attached to each.",
  },
  {
    step: "IV",
    title: "Advocate",
    body: "We pursue the chosen course with preparation that leaves nothing to improvisation.",
  },
];

export const values = [
  {
    title: "Judgment",
    body: "Knowing the law is the minimum. Knowing which battles are worth fighting is the value.",
  },
  {
    title: "Discretion",
    body: "Sensitive matters stay inside the firm. Our clients' names are theirs to share, not ours.",
  },
  {
    title: "Rigour",
    body: "Every filing, agreement and letter is reviewed by a second attorney before it leaves the office.",
  },
  {
    title: "Candour",
    body: "We would rather lose an engagement than promise an outcome we cannot responsibly pursue.",
  },
];
