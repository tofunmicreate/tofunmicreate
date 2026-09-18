import { useEffect } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Compass, Search, TrendingUp, Rocket, CheckCircle } from "lucide-react";

const CALENDLY = "https://calendly.com/tjexcel07/30min";

const sections = [
  {
    id: "strategy",
    icon: Compass,
    kicker: "Part 1",
    title: "Strategy: getting found by Google and by AI",
    intro:
      "Search now has two front doors. People still type into Google, but a growing share ask ChatGPT, Perplexity or Google AI Overviews and buy from whichever brand the answer names. Our strategy covers both.",
    points: [
      "Position the brand around the exact phrases buyers use: best Shopify agency, Shopify development agency, Shopify CRO expert, AI website builder for small business, Shopify store designer.",
      "Support those with secondary themes: ecommerce conversion optimization, AEO services, AI search optimization, small business website design, Shopify expert for hire, product launch marketing agency.",
      "Write one clear, plain definition of the business near the top of the homepage, because AI tools quote short factual statements.",
      "Answer real buyer questions in direct question and answer format, two to four sentences each, no filler.",
      "Publish structured data (organization, professional service, individual services, FAQ) so machines can read the offer, not just guess it.",
      "Keep trust signals visible: Trustpilot listing, client results, contact details and service area.",
      "Maintain robots.txt, sitemap.xml and llms.txt so both search crawlers and AI assistants can read and cite the site accurately.",
    ],
  },
  {
    id: "audit",
    icon: Search,
    kicker: "Part 2",
    title: "Audit: what we check before changing anything",
    intro:
      "Every engagement opens with a free audit. We look at the store the way a first-time buyer and a crawler both see it, then write down what is measurably losing money.",
    points: [
      "Technical basics: page titles and descriptions on every page, one main heading per page, clean heading order, image alt text, mobile layout, image compression and lazy loading, load speed.",
      "Discoverability: indexing status, sitemap accuracy, crawler rules, structured data coverage, AI crawler access.",
      "Analytics health: is traffic tracked correctly, where do sessions drop, which devices and sources convert worst.",
      "Buyer journey: homepage clarity, collection and product pages, size or spec information, reviews, delivery and returns visibility.",
      "Cart and checkout: steps required, guest checkout, payment options, shipping surprises, mobile friction.",
      "Trust: reviews, guarantees, contact route, about page, policy pages.",
      "Output: a prioritised list of fixes ranked by likely revenue impact against effort.",
    ],
  },
  {
    id: "cro",
    icon: TrendingUp,
    kicker: "Part 3",
    title: "CRO: turning the same traffic into more sales",
    intro:
      "Conversion rate optimization is the work of earning more revenue from visitors you already pay for. It is research, then changes, then measurement, in that order.",
    points: [
      "Rebuild product pages around the decision: strong imagery, clear benefits, objections answered on the page, visible social proof.",
      "Remove checkout friction: fewer steps, guest checkout, wallet payments, honest shipping and returns information up front.",
      "Apply conversion psychology carefully: clarity, reassurance and genuine scarcity, never fake urgency.",
      "Design mobile first, since most Shopify traffic and most lost sales happen on phones.",
      "Test changes one at a time where traffic allows, and keep a record of what won and what did not.",
      "Report on revenue, conversion rate and average order value, not on design opinions.",
    ],
  },
  {
    id: "launch",
    icon: Rocket,
    kicker: "Part 4",
    title: "Launch: putting a product in front of buyers",
    intro:
      "A launch is a plan, not a date. We prepare the store, the message and the traffic so the first week produces sales and learning rather than guesswork.",
    points: [
      "Pre-launch: offer and pricing clarity, landing page built for paid and social traffic, tracking verified before spend begins.",
      "Message: one promise, one audience, one next action, repeated consistently across the page, ads and email.",
      "Traffic: paid campaigns, email and social pointed at a page designed to convert them, not at a generic homepage.",
      "Launch week: watch add to cart, checkout starts and completion rates daily, and fix the biggest drop-off first.",
      "Post-launch: collect reviews and customer feedback, then feed both into the next round of optimization.",
    ],
  },
];

const AeoBrief = () => {
  usePageMeta(
    "AEO, SEO and CRO Brief | Tofunmi Creative",
    "How Tofunmi Creative approaches search and AI visibility, store audits, conversion rate optimization and product launches for Shopify brands.",
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        <div className="container-custom max-w-4xl">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Playbook</span>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            The Tofunmi Creative AEO Brief
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Tofunmi Creative is a Shopify conversion and growth agency. We build and optimize stores,
            make them visible in both Google and AI answers, and launch products for small
            businesses, startups and solo founders. This page sets out exactly how we work, in four
            parts: strategy, audit, CRO and launch.
          </p>

          <nav className="flex flex-wrap gap-3 mb-14">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {section.title.split(":")[0]}
              </a>
            ))}
          </nav>

          <div className="space-y-16">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-accent uppercase tracking-wider">
                    {section.kicker}
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{section.intro}</p>
                <ul className="space-y-3">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-foreground/90 leading-relaxed">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-16 card-elevated p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">
              Want this applied to your store?
            </h2>
            <p className="text-muted-foreground mb-6">
              Book a free audit and we will walk you through the biggest wins on your Shopify store.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 font-medium text-accent-foreground hover:opacity-90 transition-opacity"
            >
              Book Your Free Audit
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AeoBrief;
