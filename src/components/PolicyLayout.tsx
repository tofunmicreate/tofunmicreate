import { useEffect } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

interface PolicyLayoutProps {
  title: string;
  description: string;
  updated: string;
  children: React.ReactNode;
}

export const PolicyLayout = ({ title, description, updated, children }: PolicyLayoutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        <div className="container-custom max-w-3xl">
          <p className="text-sm font-medium text-accent mb-2">Last updated: {updated}</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            {title}
          </h1>
          <p className="text-muted-foreground mb-10">{description}</p>
          <div className="space-y-8 text-foreground/90 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:leading-relaxed [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:leading-relaxed [&_a]:text-accent [&_a]:underline">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
