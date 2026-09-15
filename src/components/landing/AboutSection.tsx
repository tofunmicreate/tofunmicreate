import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, TrendingUp, Users } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">About</span>
            <h2 className="heading-section text-foreground mt-3 mb-6">
              I Help Shopify Stores Turn Traffic Into Revenue
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Hi, I'm Tofunmi, a Shopify Conversion Rate Optimization specialist 
              focused on helping ecommerce brands turn traffic into consistent revenue.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I believe every store deserves to convert at its best. Too many Shopify 
              merchants waste ad spend on traffic that doesn't convert. My mission is 
              to fix that, by combining data, design, and psychology to create stores 
              that sell.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <span className="font-medium text-foreground">Data-Driven</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <span className="font-medium text-foreground">Results-Focused</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <span className="font-medium text-foreground">Client-First</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="card-elevated p-8 md:p-10">
              <h3 className="heading-card text-foreground mb-8">Why Work With Me?</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Shopify Expertise</h4>
                    <p className="text-muted-foreground text-sm">Deep understanding of the Shopify ecosystem and what makes stores convert.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Conversion Psychology</h4>
                    <p className="text-muted-foreground text-sm">I understand what makes people buy and apply that to every optimization.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Clear Communication</h4>
                    <p className="text-muted-foreground text-sm">No jargon, no fluff. Just clear strategies and actionable insights.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-xl bg-accent/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
