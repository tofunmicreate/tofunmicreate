import { motion } from "framer-motion";

const badges = [
  {
    name: "Trustpilot",
    href: "https://www.trustpilot.com/search?query=Tofunmi+Creative",
    label: "Reviewed on",
    mark: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <rect width="24" height="24" rx="5" fill="#00B67A" />
        <path
          d="M12 4.5l2.05 5.03 5.42.4-4.14 3.53 1.3 5.28L12 15.85l-4.63 2.89 1.3-5.28-4.14-3.53 5.42-.4L12 4.5z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: "Clutch",
    href: "https://clutch.co/search?query=Tofunmi+Creative",
    label: "Listed on",
    mark: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#FF3D2E" />
        <path
          d="M16.8 14.9a5.2 5.2 0 1 1 0-5.8l-2.1 1.4a2.7 2.7 0 1 0 0 3l2.1 1.4z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: "TechBehemoths",
    href: "https://techbehemoths.com/search?query=Tofunmi+Creative",
    label: "Listed on",
    mark: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <rect width="24" height="24" rx="12" fill="#1B6AC9" />
        <path
          d="M6 16.5V8.2c0-.4.3-.7.7-.7h4.6c1.6 0 2.9 1.1 2.9 2.6 0 .9-.5 1.7-1.2 2.2l1.5 3.5c.1.3-.1.7-.5.7h-1.3c-.2 0-.4-.1-.5-.3l-1.3-3.1H8.8v2.7c0 .4-.3.7-.7.7H6.7c-.4 0-.7-.3-.7-.7zm2.8-4.6h2.3c.5 0 .9-.3.9-.8s-.4-.8-.9-.8H8.8v1.6z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
];

export const trustBadges = badges;

export const TrustBadgesSection = () => {
  return (
    <section className="py-10 md:py-12 border-y border-border bg-background overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-muted-foreground text-sm uppercase tracking-wider font-medium mb-6">
            Registered &amp; Reviewed On
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5">
            {badges.map((badge) => (
              <a
                key={badge.name}
                href={badge.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${badge.label} ${badge.name}`}
                className="inline-flex items-center gap-2.5 bg-card border border-border/50 rounded-full px-5 py-2.5 shadow-card hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                {badge.mark}
                <span className="text-sm">
                  <span className="hidden sm:inline text-muted-foreground">
                    {badge.label}{" "}
                  </span>
                  <span className="font-semibold text-foreground">
                    {badge.name}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
