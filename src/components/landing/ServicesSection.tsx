import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Layout, LineChart, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Conversion Rate Optimization",
    description: "Improve store design, structure and buying experience to turn more visitors into customers.",
  },
  {
    icon: ShoppingCart,
    title: "Shopify Store Optimization",
    description: "Product pages, cart flow, checkout, and trust elements optimized for maximum conversions.",
  },
  {
    icon: Layout,
    title: "Landing Page Design",
    description: "High-converting landing pages designed specifically for ads and marketing campaigns.",
  },
  {
    icon: LineChart,
    title: "Analytics & A/B Testing",
    description: "Data-driven decisions through comprehensive analytics and continuous testing.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Services</span>
          <h2 className="heading-section text-foreground mt-3 mb-4">
            Everything You Need to Boost Conversions
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive CRO services tailored to Shopify stores at every stage of growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-elevated p-6 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="heading-card text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
