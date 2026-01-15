import { motion } from "framer-motion";

const platforms = [
  { name: "Shopify", color: "#96BF48" },
  { name: "Klaviyo", color: "#000000" },
  { name: "Google Analytics", color: "#F9AB00" },
  { name: "Hotjar", color: "#FF3C00" },
  { name: "Meta Ads", color: "#0081FB" },
  { name: "Figma", color: "#A259FF" },
  { name: "Triple Whale", color: "#5865F2" },
  { name: "Recharge", color: "#5433FF" },
];

export const PlatformIcons = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <p className="text-center text-muted-foreground text-sm uppercase tracking-wider font-medium">
          Tools & Platforms I Work With
        </p>
      </div>
      
      {/* Infinite scroll container */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />
        
        {/* Scrolling track */}
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -1200],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {/* Double the items for seamless loop */}
          {[...platforms, ...platforms, ...platforms].map((platform, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 flex items-center gap-3 bg-background border border-border/50 rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: platform.color }}
              />
              <span className="text-primary font-medium whitespace-nowrap">
                {platform.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
