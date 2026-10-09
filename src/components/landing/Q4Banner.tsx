import { motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { useState } from "react";

// ============= Q4 Season Banner =============
// Animated urgency banner shown above the main header.
// Links straight to the booking calendar.

export const Q4Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="relative overflow-hidden bg-[hsl(var(--gradient-accent))] bg-accent"
    >
      {/* Sliding shine effect */}
      <div className="pointer-events-none absolute inset-0 animate-banner-shine bg-gradient-to-r from-transparent via-primary-foreground/25 to-transparent" />

      <div className="relative container-custom flex items-center justify-center gap-2 py-2.5 pr-10 text-center">
        <Sparkles className="h-4 w-4 shrink-0 animate-pulse text-accent-foreground" aria-hidden="true" />
        <p className="text-sm font-medium text-accent-foreground sm:text-base">
          <span className="font-bold">Q4 Season is here:</span>{" "}
          Limited spaces left for October and November.{" "}
          <a
            href="https://calendly.com/tofunmicreative-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            Claim your spot
          </a>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Dismiss banner"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-accent-foreground/80 transition-colors hover:bg-primary-foreground/20 hover:text-accent-foreground"
        >
          <X size={16} />
        </button>
      </div>
    </motion.div>
  );
};
