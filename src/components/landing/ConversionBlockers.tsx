import { motion } from "framer-motion";
import { ShoppingCart, MousePointerClick, MessageSquareX } from "lucide-react";

const blockers = [
  {
    icon: MousePointerClick,
    title: "Poor User Experience",
    description: "Confusing navigation, slow load times, and cluttered layouts frustrate visitors and drive them away before they even see your products.",
    stat: "88%",
    statLabel: "of users won't return after bad UX"
  },
  {
    icon: ShoppingCart,
    title: "Complicated Checkout",
    description: "Too many steps, forced account creation, and hidden fees cause cart abandonment. Simplifying checkout can recover 20-30% of lost sales.",
    stat: "70%",
    statLabel: "average cart abandonment rate"
  },
  {
    icon: MessageSquareX,
    title: "Weak Trust Signals",
    description: "Missing reviews, unclear policies, and no social proof make visitors hesitant to buy. Trust is the foundation of online conversions.",
    stat: "93%",
    statLabel: "read reviews before buying"
  }
];

export const ConversionBlockers = () => {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Common Problems
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Why Your Store Isn't Converting
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            These three issues are responsible for most lost sales on Shopify stores
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blockers.map((blocker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                <blocker.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">{blocker.title}</h3>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                {blocker.description}
              </p>
              <div className="pt-4 border-t border-primary-foreground/10">
                <span className="text-3xl font-bold text-accent">{blocker.stat}</span>
                <p className="text-sm text-primary-foreground/60 mt-1">{blocker.statLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
