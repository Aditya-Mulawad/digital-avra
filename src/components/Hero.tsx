import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { GrowthVisual } from "./GrowthVisual";
import { track } from "@/lib/analytics";

const capabilities = [
  "Websites",
  "SEO",
  "Meta Ads",
  "Google Ads",
  "Social Media",
  "Branding",
];

export function Hero() {
  const reduced = useReducedMotion();
  const rise = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28">
      <div className="grid-faint pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div
        className="from-primary/8 pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-gradient-to-b to-transparent blur-3xl"
        aria-hidden
      />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <motion.p
            {...rise(0)}
            className="border-border bg-card text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold"
          >
            <span className="bg-primary size-1.5 rounded-full" aria-hidden />
            Digital Solutions &amp; Growth Agency
          </motion.p>

          <motion.h1
            {...rise(0.08)}
            className="mt-6 text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl"
          >
            Turn Your Online Presence Into a{" "}
            <span className="text-primary">Growth Engine.</span>
          </motion.h1>

          <motion.div {...rise(0.16)} className="mt-6 max-w-xl">
            <span className="hairline mb-6 block w-24" aria-hidden />
            <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
              Digital Avra helps businesses build a stronger digital presence and
              generate more customers through high-performance websites, SEO, paid
              advertising, social media and digital growth strategies.
            </p>
          </motion.div>

          <motion.div {...rise(0.24)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="group h-13 px-6 text-base">
              <Link
                to="/free-growth-audit"
                onClick={() => track("click_cta", { location: "hero_primary" })}
              >
                Get Your Free Growth Audit
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-13 px-6 text-base">
              <Link
                to="/services"
                onClick={() => track("click_cta", { location: "hero_secondary" })}
              >
                Explore Our Services
              </Link>
            </Button>
          </motion.div>

          <motion.ul
            {...rise(0.32)}
            className="text-muted-foreground mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm"
          >
            {capabilities.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && <span className="bg-border size-1 rounded-full" aria-hidden />}
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.p {...rise(0.4)} className="text-foreground mt-5 text-sm font-medium">
            One partner. Everything digital.
          </motion.p>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:pl-6"
        >
          <GrowthVisual />
        </motion.div>
      </div>
    </section>
  );
}
