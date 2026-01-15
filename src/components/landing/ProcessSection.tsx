import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Audit & Research",
    description: "I deep-dive into your store analytics, user behavior, and competitor landscape to identify conversion opportunities.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Optimize & Build",
    description: "Based on findings, I implement data-driven changes to your store design, copy, and user experience.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Test, Improve & Scale",
    description: "Continuous A/B testing and iteration to maximize conversions and scale what works.",
  },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Process</span>
          <h2 className="heading-section text-foreground mt-3 mb-4">
            A Simple, Proven Process
          </h2>
          <p className="text-muted-foreground text-lg">
            Three straightforward steps to transform your Shopify store into a conversion machine.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}

              <div className="relative bg-background z-10 text-center">
                <div className="w-24 h-24 mx-auto rounded-2xl bg-secondary flex items-center justify-center mb-6 relative group">
                  <step.icon className="w-10 h-10 text-accent" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="heading-card text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
