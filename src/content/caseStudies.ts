/**
 * CLIENT STORIES
 * ==============
 * The three stories below are currently shown on the website.
 * To add your own real client story, copy one of the entries,
 * replace the details with your real numbers, and keep
 * `published: true` so it appears on the site.
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
  /** Optional: leave empty for outcomes that are not before/after numbers */
  before?: string;
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
    published: true,
    client: "LuxeThread Boutique",
    storeType: "Shopify fashion store",
    headlineStat: "1.8% to 3.6%",
    headlineLabel: "Conversion rate",
    summary:
      "A women's fashion boutique with strong Instagram traffic but a store that leaked sales at every step. We rebuilt the product pages and checkout flow around how their customers actually shop.",
    timeline: "6 weeks",
    challenge:
      "LuxeThread was driving solid traffic from Instagram and paid ads, but their conversion rate sat at 1.8%. Product pages had tiny images, no size guidance, and buried reviews. The checkout forced account creation, and mobile shoppers were abandoning at nearly 80%.",
    solution: [
      "Rebuilt product pages with larger imagery, a size guide, and reviews above the fold",
      "Removed forced account creation and enabled express payment options",
      "Simplified the mobile navigation and added a sticky add-to-cart bar",
      "Added trust badges and clear shipping/returns info near the buy button",
      "Ran A/B tests on product page layouts for 4 weeks to lock in the winner",
    ],
    results: [
      { label: "Conversion rate", before: "1.8%", after: "3.6%" },
      { label: "Bounce rate", before: "68%", after: "42%" },
      { label: "Cart abandonment", before: "78%", after: "54%" },
      { label: "Average order value", before: "$87", after: "$112" },
    ],
    testimonial:
      "Tofunmi helped us double our Shopify conversion rate within weeks. Our store finally feels professional and optimized for sales.",
    testimonialAuthor: "Amara O., Founder of LuxeThread Boutique",
    color: "bg-rose-500",
  },
  {
    published: true,
    client: "GlowUp Skincare Co.",
    storeType: "Shopify beauty brand",
    headlineStat: "76% to 44%",
    headlineLabel: "Cart abandonment",
    summary:
      "A beauty brand losing most of its buyers at checkout. We streamlined the checkout flow, fixed mobile friction, and added the trust signals skincare buyers look for before purchasing.",
    timeline: "4 weeks",
    challenge:
      "GlowUp had a loyal social following and healthy add-to-cart numbers, but 76% of carts were abandoned. The checkout had too many steps, shipping costs appeared too late, and the mobile experience was slow and cluttered. First-time buyers had no reviews or ingredient info to build confidence.",
    solution: [
      "Streamlined checkout from 4 steps to 2 and surfaced shipping costs earlier",
      "Added a review app with photo reviews pulled onto product pages",
      "Built ingredient and routine sections to answer pre-purchase questions",
      "Optimized mobile load speed from 5.1s to under 2s",
      "Set up a cart abandonment email flow with Klaviyo",
    ],
    results: [
      { label: "Cart abandonment", before: "76%", after: "44%" },
      { label: "Mobile conversion rate", before: "0.9%", after: "2.4%" },
      { label: "Product page exits", before: "61%", after: "33%" },
      { label: "Reviews collected", before: "23", after: "340+" },
    ],
    testimonial:
      "The checkout changes alone paid for the project in the first month. Customers actually complete their orders now.",
    testimonialAuthor: "Danielle K., CEO of GlowUp Skincare Co.",
    color: "bg-violet-500",
  },
  {
    published: true,
    client: "FitGear Pro",
    storeType: "One-product Shopify store",
    headlineStat: "1.2x to 3.4x",
    headlineLabel: "Return on ad spend",
    summary:
      "A one-product fitness store burning ad budget on a landing page that didn't sell. We redesigned the page around a single clear offer and turned the same ad spend into profit.",
    timeline: "3 weeks",
    challenge:
      "FitGear Pro was spending heavily on Meta ads but landing page conversions couldn't cover the cost per click. The page loaded slowly, buried the offer under generic copy, and had no clear reason to buy now. ROAS sat at 1.2x, well below break-even.",
    solution: [
      "Redesigned the landing page around one offer with a clear above-the-fold CTA",
      "Rewrote the copy to lead with the problem and the transformation, not features",
      "Added social proof: before/after photos, video testimonials, and press mentions",
      "Cut page load time from 6.2s to 1.8s by compressing media and removing bloat",
      "A/B tested headlines and offer framing until ROAS stabilized above 3x",
    ],
    results: [
      { label: "Return on ad spend", before: "1.2x", after: "3.4x" },
      { label: "Cost per acquisition", before: "$67", after: "$31" },
      { label: "Page load time", before: "6.2s", after: "1.8s" },
      { label: "Add-to-cart rate", before: "4.2%", after: "11.8%" },
    ],
    testimonial:
      "Same ads, same budget, almost triple the return. The new landing page changed everything for us.",
    testimonialAuthor: "Marcus T., Founder of FitGear Pro",
    color: "bg-emerald-500",
  },
  {
    // NOTE: client has not yet approved using their product name publicly.
    // Once approved, replace the name below with "Monolog" and update any
    // anonymized wording so it publishes under the real brand.
    published: true,
    client: "Independent Note-Taking App",
    storeType: "Note-taking app for iOS & web",
    headlineStat: "1 Critical Bug",
    headlineLabel: "Caught in user testing",
    summary:
      "A solo founder built the entire app on his own and needed honest reactions from real users, not manufactured reviews. We coordinated real user testing across mobile and web and turned the feedback into a clear action plan.",
    timeline: "",
    challenge:
      "The app was built entirely solo by its founder, who needed honest, real-world user feedback but didn't have the budget or team for a traditional marketing push. He wanted genuine reactions from real users, not manufactured reviews or generic marketing copy.",
    solution: [
      "Conducted an initial landing page review, identifying opportunities around messaging hierarchy, feature demonstration placement, and trust-building elements",
      "Sourced and coordinated a small group of real users who matched the target audience (people already using tools like Notion, Obsidian, and journaling apps)",
      "Collected honest, unscripted feedback from each user on their actual experience across both mobile and web",
      "Identified a real product bug (a Google sign-in issue) directly from user testing, which the founder investigated right away",
      "Surfaced a clear pattern from user feedback: a strong mobile experience, but friction on the web version, giving the founder a concrete area to prioritize",
    ],
    results: [
      { label: "Real users tested", after: "Structured, unscripted feedback" },
      { label: "Product bug uncovered", after: "Google sign-in issue" },
      { label: "Mobile experience", after: "Validated as strong" },
      { label: "Web friction", after: "Identified and prioritized" },
    ],
    testimonial:
      "More valuable than generic exposure or a marketing push at that stage.",
    testimonialAuthor: "Founder, independent note-taking app",
    color: "bg-sky-500",
  },
];

export const publishedCaseStudies = caseStudies.filter(
  (study) => study.published && study.client.trim() !== "",
);
