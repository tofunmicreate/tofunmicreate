import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Fashion Boutique",
    category: "Shopify Fashion Store",
    metric: "1.8% → 3.6%",
    metricLabel: "Conversion Rate",
    description: "Complete store redesign focusing on product presentation and streamlined checkout flow.",
    color: "bg-rose-500",
  },
  {
    title: "GlowUp Beauty",
    category: "Beauty & Skincare Brand",
    metric: "-42%",
    metricLabel: "Cart Abandonment",
    description: "Improved checkout experience and added trust signals to reduce abandonment.",
    color: "bg-violet-500",
  },
  {
    title: "FitGear Pro",
    category: "One-Product Store",
    metric: "+180%",
    metricLabel: "ROAS Improvement",
    description: "Landing page redesign optimized for paid traffic with compelling product storytelling.",
    color: "bg-emerald-500",
  },
];

export const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            A selection of Shopify stores I've helped optimize for better conversions.
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
                <button className="inline-flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all">
                  View Case Study
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
