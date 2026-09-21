import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, TrendingUp, CheckCircle, Target, Zap, Search, LineChart, Rocket } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { publishedCaseStudies, type CaseStudy } from "@/content/caseStudies";

const approach = [
  {
    icon: Search,
    title: "Audit and research",
    copy: "We study analytics, heatmaps and real buyer behaviour before touching a single page.",
  },
  {
    icon: LineChart,
    title: "Optimize and test",
    copy: "Product pages, cart and checkout are rebuilt around what the data says is losing sales.",
  },
  {
    icon: Rocket,
    title: "Scale what wins",
    copy: "Winning changes are rolled out across the store and measured month after month.",
  },
];

export const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<CaseStudy | null>(null);

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
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Client Work</span>
          <h2 className="heading-section text-foreground mt-3 mb-4">
            Real Results for Real Stores
          </h2>
          <p className="text-muted-foreground text-lg">
            {publishedCaseStudies.length > 0
              ? "Stores and products our team has optimized, with the numbers behind the work."
              : "Client stories are published here as soon as each store owner approves the numbers. In the meantime, here is exactly how we work."}
          </p>
        </motion.div>

        {publishedCaseStudies.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {publishedCaseStudies.map((study, index) => (
              <motion.div
                key={study.client}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group card-elevated overflow-hidden"
              >
                <div className={`h-48 ${study.color} p-6 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10">
                    <span className="text-white/80 text-xs font-medium uppercase tracking-wider">
                      {study.storeType}
                    </span>
                    <h3 className="text-white text-xl font-bold mt-1">{study.client}</h3>
                  </div>
                  <div className="relative z-10 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-white" />
                    <span className="text-white font-bold text-2xl">{study.headlineStat}</span>
                    <span className="text-white/80 text-sm">{study.headlineLabel}</span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {study.summary}
                  </p>
                  <button
                    onClick={() => setSelected(study)}
                    className="inline-flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all"
                  >
                    View Case Study
                    <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {approach.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-elevated p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <div className={`-mx-6 -mt-6 mb-4 p-6 ${selected.color}`}>
                  <span className="text-white/80 text-xs font-medium uppercase tracking-wider">
                    Case Study
                  </span>
                  <DialogTitle className="text-white text-2xl font-bold mt-1">
                    {selected.client}
                  </DialogTitle>
                  <div className="flex flex-wrap gap-3 mt-3 text-white/90 text-sm">
                    <span>{selected.storeType}</span>
                    {selected.timeline && (
                      <>
                        <span>•</span>
                        <span>Timeline: {selected.timeline}</span>
                      </>
                    )}
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                {selected.challenge && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-5 h-5 text-destructive" />
                      <h3 className="font-semibold text-foreground">The Challenge</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{selected.challenge}</p>
                  </div>
                )}

                {selected.solution.filter(Boolean).length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-accent" />
                      <h3 className="font-semibold text-foreground">What We Did</h3>
                    </div>
                    <ul className="space-y-2">
                      {selected.solution.filter(Boolean).map((item) => (
                        <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selected.results.filter((r) => r.label).length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-5 h-5 text-emerald-500" />
                      <h3 className="font-semibold text-foreground">The Results</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {selected.results
                        .filter((r) => r.label)
                        .map((result) => (
                          <div key={result.label} className="bg-secondary rounded-lg p-3">
                            <p className="text-xs text-muted-foreground mb-1">{result.label}</p>
                            {result.before ? (
                              <div className="flex items-baseline gap-2">
                                <span className="text-muted-foreground text-sm line-through">{result.before}</span>
                                <span className="text-foreground font-bold">{result.after}</span>
                              </div>
                            ) : (
                              <span className="text-foreground font-bold text-sm leading-snug">{result.after}</span>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {selected.testimonial && (
                  <div className="bg-accent/10 rounded-lg p-4 border-l-4 border-accent">
                    <p className="text-foreground italic text-sm mb-2">"{selected.testimonial}"</p>
                    {selected.testimonialAuthor && (
                      <p className="text-accent font-medium text-sm">{selected.testimonialAuthor}</p>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
