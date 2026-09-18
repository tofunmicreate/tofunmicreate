/**
 * REAL CLIENT STORIES
 * ===================
 * Type your real client details into the entries below.
 * Set `published: true` once a story is filled in and the client is happy
 * for it to appear publicly. Anything left `published: false` stays hidden
 * from the website, so nothing unfinished is ever shown to visitors.
 *
 * Fields:
 *  client        - the client or store name (e.g. "Bloom & Co")
 *  storeType     - what kind of store it is (e.g. "Shopify fashion store")
 *  headlineStat  - the single best number (e.g. "1.8% to 3.1%")
 *  headlineLabel - what that number measures (e.g. "Conversion rate")
 *  summary       - one or two sentences shown on the card
 *  timeline      - how long the work took (e.g. "5 weeks")
 *  challenge     - what was going wrong before you started
 *  solution      - the things you actually did (one line each)
 *  results       - real before/after numbers only
 *  testimonial   - the client's own words (leave empty if you have none)
 *  testimonialAuthor - name and role of the person quoted
 */

export interface CaseStudyResult {
  label: string;
  before: string;
  after: string;
}

export interface CaseStudy {
  published: boolean;
  client: string;
  storeType: string;
  headlineStat: string;
  headlineLabel: string;
  summary: string;
  timeline: string;
  challenge: string;
  solution: string[];
  results: CaseStudyResult[];
  testimonial: string;
  testimonialAuthor: string;
  color: string;
}

export const caseStudies: CaseStudy[] = [
  {
    published: false,
    client: "",
    storeType: "",
    headlineStat: "",
    headlineLabel: "",
    summary: "",
    timeline: "",
    challenge: "",
    solution: [""],
    results: [{ label: "", before: "", after: "" }],
    testimonial: "",
    testimonialAuthor: "",
    color: "bg-rose-500",
  },
  {
    published: false,
    client: "",
    storeType: "",
    headlineStat: "",
    headlineLabel: "",
    summary: "",
    timeline: "",
    challenge: "",
    solution: [""],
    results: [{ label: "", before: "", after: "" }],
    testimonial: "",
    testimonialAuthor: "",
    color: "bg-violet-500",
  },
  {
    published: false,
    client: "",
    storeType: "",
    headlineStat: "",
    headlineLabel: "",
    summary: "",
    timeline: "",
    challenge: "",
    solution: [""],
    results: [{ label: "", before: "", after: "" }],
    testimonial: "",
    testimonialAuthor: "",
    color: "bg-emerald-500",
  },
];

export const publishedCaseStudies = caseStudies.filter(
  (study) => study.published && study.client.trim() !== "",
);
