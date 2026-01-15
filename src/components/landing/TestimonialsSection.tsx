import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Tofunmi helped us double our Shopify conversion rate within weeks. The ROI on their services was incredible.",
    author: "Sarah Mitchell",
    role: "Founder, LuxeThreads",
    rating: 5,
  },
  {
    quote: "Our store finally feels professional and optimized for sales. The checkout improvements alone paid for the entire project.",
    author: "James Chen",
    role: "CEO, TechGadgets Store",
    rating: 5,
  },
  {
    quote: "Clear communication, data-driven approach, and real results. Exactly what we needed for our Shopify store.",
    author: "Emma Rodriguez",
    role: "Marketing Director, BeautyBox",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="heading-section text-foreground mt-3 mb-4">
            What Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take my word for it. Here's what store owners have to say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-elevated p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
