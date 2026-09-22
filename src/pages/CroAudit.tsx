import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Loader2, Sparkles, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { usePageMeta } from "@/hooks/use-page-meta";

type Recommendation = {
  title: string;
  priority: "high" | "medium" | "low";
  area: string;
  problem: string;
  fix: string;
  expected_impact: string;
  effort: string;
};

type AuditResult = {
  summary: string;
  recommendations: Recommendation[];
};

const MAX_IMAGES = 4;
const MAX_FILE_BYTES = 5 * 1024 * 1024;

const priorityStyles: Record<Recommendation["priority"], string> = {
  high: "bg-accent text-accent-foreground",
  medium: "bg-secondary text-secondary-foreground",
  low: "bg-muted text-muted-foreground",
};

const readFileAsDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Could not read that image."));
    reader.readAsDataURL(file);
  });

const CroAudit = () => {
  usePageMeta(
    "Free AI CRO Audit Tool | Tofunmi Creative",
    "Upload your Shopify page screenshots, describe your conversion goal, and get prioritized CRO recommendations in minutes.",
  );

  const [images, setImages] = useState<{ name: string; dataUrl: string }[]>([]);
  const [goals, setGoals] = useState("");
  const [storeType, setStoreType] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);

  const handleFiles = async (files: FileList | null) => {
    if (!files?.length) return;
    const incoming = Array.from(files);
    const room = MAX_IMAGES - images.length;

    if (room <= 0) {
      toast.error(`You can upload up to ${MAX_IMAGES} screenshots.`);
      return;
    }

    const accepted: { name: string; dataUrl: string }[] = [];
    for (const file of incoming.slice(0, room)) {
      if (!file.type.startsWith("image/")) {
        toast.error(`${file.name} is not an image.`);
        continue;
      }
      if (file.size > MAX_FILE_BYTES) {
        toast.error(`${file.name} is larger than 5MB.`);
        continue;
      }
      try {
        accepted.push({ name: file.name, dataUrl: await readFileAsDataUrl(file) });
      } catch {
        toast.error(`Could not read ${file.name}.`);
      }
    }
    if (accepted.length) setImages((prev) => [...prev, ...accepted]);
  };

  const removeImage = (index: number) =>
    setImages((prev) => prev.filter((_, i) => i !== index));

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!images.length) {
      toast.error("Please upload at least one screenshot.");
      return;
    }
    if (goals.trim().length < 10) {
      toast.error("Tell us a little more about your conversion goal.");
      return;
    }

    setLoading(true);
    setResult(null);
    try {
      const { data, error } = await supabase.functions.invoke("cro-audit", {
        body: {
          goals,
          storeType,
          images: images.map((image) => image.dataUrl),
        },
      });

      if (error) throw error;
      if (data?.error) {
        toast.error(data.error);
        return;
      }
      setResult(data as AuditResult);
    } catch (error) {
      console.error(error);
      toast.error("We could not generate your audit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container-custom section-padding">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>

        <div className="mt-8 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
            <Sparkles size={14} /> Instant CRO Audit
          </span>
          <h1 className="mt-5 font-display text-3xl md:text-5xl font-bold text-foreground">
            Get prioritized CRO fixes for your store pages
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Upload screenshots of your Shopify pages, tell us what you want to improve, and our
            audit tool returns a ranked list of changes with the expected impact and effort.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,420px)_1fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="space-y-2">
              <Label htmlFor="screenshots">Page screenshots (up to {MAX_IMAGES})</Label>
              <label
                htmlFor="screenshots"
                className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-background px-4 py-8 text-center transition-colors hover:border-accent"
              >
                <Upload size={20} className="text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Click to upload images</span>
                <span className="text-xs text-muted-foreground">
                  Home page, product page, cart or checkout. PNG or JPG, max 5MB each.
                </span>
              </label>
              <input
                id="screenshots"
                type="file"
                accept="image/*"
                multiple
                className="sr-only"
                onChange={(event) => {
                  void handleFiles(event.target.files);
                  event.target.value = "";
                }}
              />
            </div>

            {images.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-3">
                {images.map((image, index) => (
                  <div
                    key={`${image.name}-${index}`}
                    className="group relative overflow-hidden rounded-lg border border-border"
                  >
                    <img
                      src={image.dataUrl}
                      alt={`Uploaded screenshot ${index + 1}`}
                      className="h-28 w-full object-cover object-top"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      aria-label={`Remove ${image.name}`}
                      className="absolute right-1.5 top-1.5 rounded-full bg-background/90 p-1 text-foreground shadow-sm"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 space-y-2">
              <Label htmlFor="storeType">What do you sell? (optional)</Label>
              <Input
                id="storeType"
                value={storeType}
                onChange={(event) => setStoreType(event.target.value)}
                placeholder="Fashion, skincare, one product store"
              />
            </div>

            <div className="mt-5 space-y-2">
              <Label htmlFor="goals">Your conversion goal</Label>
              <Textarea
                id="goals"
                value={goals}
                onChange={(event) => setGoals(event.target.value)}
                rows={5}
                placeholder="Example: we get 20,000 visitors a month but only 1.2 percent buy. We want more add to carts and fewer people dropping off at checkout."
              />
            </div>

            <Button type="submit" variant="accent" className="mt-6 w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Reviewing your pages
                </>
              ) : (
                "Get my CRO recommendations"
              )}
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">
              This takes up to a minute. Screenshots are only used to generate your audit.
            </p>
          </form>

          <div>
            {loading && (
              <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
                <Loader2 className="mx-auto animate-spin text-accent" />
                <p className="mt-4 font-display text-lg font-semibold text-foreground">
                  Analysing your pages
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  We are checking messaging, layout, trust signals and friction points.
                </p>
              </div>
            )}

            {!loading && !result && (
              <div className="rounded-2xl border border-dashed border-border p-8">
                <h2 className="font-display text-xl font-semibold text-foreground">
                  What you will get
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li>A short summary of what is holding your conversions back.</li>
                  <li>Five to eight recommendations ranked by revenue impact.</li>
                  <li>The problem, the fix, the expected impact and the effort for each one.</li>
                </ul>
                <Button variant="accent-outline" className="mt-6" asChild>
                  <a
                    href="https://calendly.com/tjexcel07/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Prefer a human audit? Book a call
                  </a>
                </Button>
              </div>
            )}

            {result && (
              <div className="space-y-5">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h2 className="font-display text-xl font-semibold text-foreground">Summary</h2>
                  <p className="mt-3 text-muted-foreground">{result.summary}</p>
                </div>

                {result.recommendations?.map((rec, index) => (
                  <motion.div
                    key={`${rec.title}-${index}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-display text-sm font-bold text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${priorityStyles[rec.priority] ?? priorityStyles.medium}`}
                      >
                        {rec.priority} priority
                      </span>
                      <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                        {rec.area}
                      </span>
                      <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                        {rec.effort}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                      {rec.title}
                    </h3>
                    <div className="mt-4 space-y-3 text-sm">
                      <p>
                        <span className="font-semibold text-foreground">Problem: </span>
                        <span className="text-muted-foreground">{rec.problem}</span>
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Fix: </span>
                        <span className="text-muted-foreground">{rec.fix}</span>
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Expected impact: </span>
                        <span className="text-muted-foreground">{rec.expected_impact}</span>
                      </p>
                    </div>
                  </motion.div>
                ))}

                <div className="rounded-2xl bg-secondary p-6 text-center">
                  <p className="font-display text-lg font-semibold text-secondary-foreground">
                    Want our team to implement these fixes?
                  </p>
                  <Button variant="accent" className="mt-4" asChild>
                    <a
                      href="https://calendly.com/tjexcel07/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Your Free Audit Call
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CroAudit;
