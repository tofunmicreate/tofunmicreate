import { Sparkles, X } from "lucide-react";
import { useState } from "react";

// ============= Q4 Season Banner =============
// Animated urgency banner shown above the main header.
// The message scrolls continuously like a news ticker and
// links straight to the booking calendar.

const Message = () => (
  <span className="flex shrink-0 items-center gap-3 text-sm font-medium text-accent-foreground sm:text-base">
    <Sparkles className="h-4 w-4 shrink-0 animate-pulse" aria-hidden="true" />
    <span>
      <span className="font-bold">Q4 Season is here:</span> Limited spaces left
      for October and November.
    </span>
    <a
      href="https://calendly.com/tofunmicreative-info/30min"
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold underline underline-offset-4 transition-opacity hover:opacity-80"
      onClick={(event) => event.stopPropagation()}
    >
      Claim your spot
    </a>
  </span>
);

export const Q4Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className="relative overflow-hidden"
      style={{ backgroundImage: "var(--gradient-accent)" }}
      role="region"
      aria-label="Q4 season announcement"
    >
      {/* Sliding shine effect */}
      <div className="pointer-events-none absolute inset-0 z-10 animate-banner-shine bg-gradient-to-r from-transparent via-primary-foreground/25 to-transparent" />

      {/* Dismiss button */}
      <button
        onClick={() => setIsVisible(false)}
        aria-label="Dismiss banner"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full p-1 text-accent-foreground/80 transition-colors hover:bg-primary-foreground/20 hover:text-accent-foreground"
      >
        <X size={16} />
      </button>

      {/* Scrolling ticker: the track holds two copies of the message
          and slides left by half its width, looping seamlessly */}
      <div className="flex overflow-hidden py-2.5">
        <div className="animate-banner-marquee flex w-max shrink-0 items-center gap-12 pr-12">
          <Message />
          <Message />
        </div>
        <div
          aria-hidden="true"
          className="animate-banner-marquee flex w-max shrink-0 items-center gap-12 pr-12"
        >
          <Message />
          <Message />
        </div>
      </div>
    </div>
  );
};
