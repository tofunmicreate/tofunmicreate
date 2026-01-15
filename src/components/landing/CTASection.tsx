import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Free comprehensive store audit",
  "Actionable optimization roadmap",
  "No commitment required",
];

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="heading-section text-primary-foreground mb-6">
            Ready to Increase Your Shopify Revenue?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's find out what's stopping your visitors from buying. Book a free CRO 
            audit and get a custom optimization roadmap for your store.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          <Button variant="accent" size="lg" className="shadow-xl" asChild>
            <a href="mailto:hello@tofunmicreative.com">
              Book Your Free Audit
              <ArrowRight className="ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
