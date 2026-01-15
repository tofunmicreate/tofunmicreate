import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Data-Driven CRO Decisions",
    description: "Every recommendation is backed by analytics, user behavior data, and proven conversion principles.",
  },
  {
    title: "Shopify-Focused Expertise",
    description: "Specialized knowledge of the Shopify platform, apps, themes, and best practices.",
  },
  {
    title: "Conversion Psychology Applied",
    description: "Understanding what makes people buy and applying those principles to your store.",
  },
  {
    title: "Clear Communication",
    description: "No confusing jargon. Just straightforward strategies you can understand and track.",
  },
  {
    title: "Focus on Revenue, Not Just Design",
    description: "Beautiful stores are great, but stores that convert are better. I focus on both.",
  },
];

export const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="heading-section mt-3 mb-6">
              What Makes Tofunmi Creative Different
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              I don't just make your store look pretty. I make it sell. Here's what 
              sets my approach apart from typical web designers or agencies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex gap-4 p-4 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{benefit.title}</h4>
                  <p className="text-primary-foreground/70 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
