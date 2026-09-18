import { Linkedin, Twitter, Instagram, Mail, Star } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: Twitter, href: "https://x.com/tofunmicreative", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/akinduro-tofunmi-tofunmi-996924402", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/tofunmi__creative?igsi=bGdlb3ZxMXl4b3Qz", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="section-padding !py-12 bg-background border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#" className="font-display text-xl font-bold text-foreground">
              Tofunmi <span className="text-accent">Creative</span>
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              Shopify CRO &amp; Ecommerce Growth Agency
            </p>

            <a
              href="https://www.trustpilot.com/search?query=Tofunmi+Creative"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors mt-2"
            >
              <Star className="w-3.5 h-3.5 fill-accent text-accent" />
              Listed on Trustpilot
            </a>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:info@tofunmicreative.site"
              className="text-sm hover:text-accent transition-colors"
            >
              info@tofunmicreative.site
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Policy Links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {[
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms-of-service" },
            { label: "Refund & Cancellation Policy", href: "/refund-policy" },
            { label: "Cookie Policy", href: "/cookie-policy" },
          ].map((policy) => (
            <Link
              key={policy.href}
              to={policy.href}
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              {policy.label}
            </Link>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Tofunmi Creative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
