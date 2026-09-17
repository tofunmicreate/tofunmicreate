import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, TrendingUp, X, CheckCircle, Target, Zap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Fashion Boutique",
    category: "Shopify Fashion Store",
    metric: "1.8% → 3.6%",
    metricLabel: "Conversion Rate",
    description: "Complete store redesign focusing on product presentation and streamlined checkout flow.",
    color: "bg-rose-500",
    caseStudy: {
      client: "LuxeThread Boutique",
      industry: "Women's Fashion & Accessories",
      timeline: "6 weeks",
      challenge: "LuxeThread was struggling with a 1.8% conversion rate despite strong traffic from Instagram ads. Their bounce rate was 68%, and cart abandonment sat at 78%. The store felt cluttered, product pages lacked compelling visuals, and the checkout process had unnecessary friction.",
      solution: [
        "Redesigned homepage with lifestyle imagery and clear value proposition",
        "Implemented quick-view product modals to reduce page load friction",
        "Added size guides and fit predictor to reduce purchase anxiety",
        "Streamlined checkout from 5 steps to 3 with guest checkout option",
        "Added trust badges, reviews, and social proof throughout the funnel"
      ],
      results: [
        { label: "Conversion Rate", before: "1.8%", after: "3.6%", change: "+100%" },
        { label: "Bounce Rate", before: "68%", after: "42%", change: "-38%" },
        { label: "Cart Abandonment", before: "78%", after: "54%", change: "-31%" },
        { label: "Average Order Value", before: "$87", after: "$112", change: "+29%" }
      ],
      testimonial: "Working with Tofunmi completely transformed our store. The new design not only looks premium but actually converts. Our revenue doubled within the first month.",
      testimonialAuthor: "Sarah Chen, Founder"
    }
  },
  {
    title: "GlowUp Beauty",
    category: "Beauty & Skincare Brand",
    metric: "-42%",
    metricLabel: "Cart Abandonment",
    description: "Improved checkout experience and added trust signals to reduce abandonment.",
    color: "bg-violet-500",
    caseStudy: {
      client: "GlowUp Skincare Co.",
      industry: "Beauty & Skincare",
      timeline: "4 weeks",
      challenge: "GlowUp had beautiful products but was losing 76% of customers at checkout. Analysis revealed customers were hesitant due to lack of ingredient transparency, no return policy visibility, and a checkout that felt unsecure. Mobile users had an even worse experience with 82% abandonment.",
      solution: [
        "Added ingredient breakdown with benefits on every product page",
        "Implemented sticky 'Satisfaction Guarantee' banner throughout checkout",
        "Added real-time customer reviews with photo uploads",
        "Redesigned mobile checkout with Apple Pay and Shop Pay integration",
        "Created urgency with low-stock indicators and limited-time bundles"
      ],
      results: [
        { label: "Cart Abandonment", before: "76%", after: "44%", change: "-42%" },
        { label: "Mobile Conversion", before: "0.9%", after: "2.4%", change: "+167%" },
        { label: "Return Rate", before: "12%", after: "4%", change: "-67%" },
        { label: "Customer Reviews", before: "23", after: "340+", change: "+1378%" }
      ],
      testimonial: "The checkout optimization alone paid for itself in the first week. But more importantly, our customers now trust us. The reviews keep coming in and our return rate dropped significantly.",
      testimonialAuthor: "Michelle Torres, CEO"
    }
  },
  {
    title: "FitGear Pro",
    category: "One-Product Store",
    metric: "+180%",
    metricLabel: "ROAS Improvement",
    description: "Landing page redesign optimized for paid traffic with compelling product storytelling.",
    color: "bg-emerald-500",
    caseStudy: {
      client: "FitGear Pro",
      industry: "Fitness Equipment",
      timeline: "3 weeks",
      challenge: "FitGear was spending $15k/month on Facebook ads but seeing only 1.2x ROAS. Their landing page was generic, didn't address customer objections, and failed to differentiate from competitors. The page loaded slowly and had no social proof from fitness influencers.",
      solution: [
        "Created story-driven landing page with problem-agitation-solution framework",
        "Added video demonstrations showing product in action",
        "Implemented comparison table vs. gym membership costs",
        "Added influencer testimonials and transformation stories",
        "Optimized page speed from 6.2s to 1.8s load time"
      ],
      results: [
        { label: "ROAS", before: "1.2x", after: "3.4x", change: "+180%" },
        { label: "Cost Per Acquisition", before: "$67", after: "$31", change: "-54%" },
        { label: "Page Load Time", before: "6.2s", after: "1.8s", change: "-71%" },
        { label: "Add to Cart Rate", before: "4.2%", after: "11.8%", change: "+181%" }
      ],
      testimonial: "I was ready to give up on paid ads. The Tofunmi Creative team showed me the problem wasn't my product or my targeting, it was my landing page. Now I'm scaling profitably and actually enjoying running ads.",
      testimonialAuthor: "Marcus Johnson, Founder"
    }
  },
];

export const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="section-padding bg-secondary">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="heading-section text-foreground mt-3 mb-4">
            Real Results for Real Stores
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of Shopify stores our team has optimized for better conversions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group card-elevated overflow-hidden"
            >
              {/* Project Header */}
              <div className={`h-48 ${project.color} p-6 flex flex-col justify-between relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10">
                  <span className="text-white/80 text-xs font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mt-1">{project.title}</h3>
                </div>
                <div className="relative z-10 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-white" />
                  <span className="text-white font-bold text-2xl">{project.metric}</span>
                  <span className="text-white/80 text-sm">{project.metricLabel}</span>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all"
                >
                  View Case Study
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className={`-mx-6 -mt-6 mb-4 p-6 ${selectedProject.color}`}>
                  <span className="text-white/80 text-xs font-medium uppercase tracking-wider">
                    Case Study
                  </span>
                  <DialogTitle className="text-white text-2xl font-bold mt-1">
                    {selectedProject.caseStudy.client}
                  </DialogTitle>
                  <div className="flex gap-4 mt-3 text-white/90 text-sm">
                    <span>Industry: {selectedProject.caseStudy.industry}</span>
                    <span>•</span>
                    <span>Timeline: {selectedProject.caseStudy.timeline}</span>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                {/* Challenge */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-destructive" />
                    <h3 className="font-semibold text-foreground">The Challenge</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {selectedProject.caseStudy.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold text-foreground">The Solution</h3>
                  </div>
                  <ul className="space-y-2">
                    {selectedProject.caseStudy.solution.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-emerald-500" />
                    <h3 className="font-semibold text-foreground">The Results</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProject.caseStudy.results.map((result, i) => (
                      <div key={i} className="bg-secondary rounded-lg p-3">
                        <p className="text-xs text-muted-foreground mb-1">{result.label}</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-muted-foreground text-sm line-through">{result.before}</span>
                          <span className="text-foreground font-bold">{result.after}</span>
                          <span className="text-emerald-500 text-xs font-medium">{result.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-accent/10 rounded-lg p-4 border-l-4 border-accent">
                  <p className="text-foreground italic text-sm mb-2">
                    "{selectedProject.caseStudy.testimonial}"
                  </p>
                  <p className="text-accent font-medium text-sm">
                   , {selectedProject.caseStudy.testimonialAuthor}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
