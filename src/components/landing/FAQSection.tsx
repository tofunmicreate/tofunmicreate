import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why isn't my Shopify store converting visitors into customers?",
    answer: "There are usually three main culprits: poor product page design that doesn't build trust, a complicated checkout process that causes friction, or unclear messaging that confuses visitors about your value proposition. A proper CRO audit identifies exactly which issues are hurting your sales."
  },
  {
    question: "How long does it take to see results from CRO?",
    answer: "Most clients see measurable improvements within 2-4 weeks of implementing changes. However, the full impact of optimization compounds over time as we test, learn, and refine. The key is continuous improvement, not one-time fixes."
  },
  {
    question: "What's the difference between CRO and just redesigning my store?",
    answer: "A redesign focuses on aesthetics, while CRO focuses on revenue. We use data, psychology, and proven frameworks to make strategic changes that increase conversions—not just make things look pretty. Every change we make is backed by research and tested for performance."
  },
  {
    question: "Do I need a lot of traffic for CRO to work?",
    answer: "While more traffic means faster testing, CRO principles work at any traffic level. Even stores with 1,000 monthly visitors can benefit from foundational optimizations like improved product pages, trust signals, and clearer CTAs. These changes often have immediate impact."
  },
  {
    question: "What ROI can I expect from conversion optimization?",
    answer: "Most stores we work with see a 20-50% increase in conversion rate. For a store doing $20k/month, even a 0.5% conversion rate improvement can mean an extra $3,000-5,000 in monthly revenue—without spending more on ads."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get answers to common questions about conversion rate optimization
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-xl border border-border/50 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-primary font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
