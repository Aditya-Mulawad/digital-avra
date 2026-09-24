import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, BarChart3, MousePointerClick, Users } from "lucide-react";

const nodes = [
  { label: "Website", detail: "Foundation", icon: MousePointerClick },
  { label: "Traffic", detail: "SEO • Ads • Social", icon: Users },
  { label: "Leads", detail: "Forms • Calls • Chats", icon: BarChart3 },
];

/**
 * Abstract system diagram used in the hero: Website → Traffic → Leads → Growth.
 * Pure CSS/SVG, no imagery — keeps the hero fast and on-brand.
 */
export function GrowthVisual() {
  const reduced = useReducedMotion();
  const float = reduced
    ? {}
    : {
        animate: { y: [0, -8, 0] },
        transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const },
      };

  return (
    <motion.div
      {...float}
      className="border-border bg-card shadow-card relative rounded-xl border p-5 sm:p-6"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between">
        <p className="eyebrow">Digital Growth System</p>
        <span className="bg-primary-soft text-accent-foreground rounded-full px-2.5 py-1 text-[11px] font-semibold">
          Live
        </span>
      </div>

      <div className="mt-5 space-y-2.5">
        {nodes.map((node, i) => (
          <div key={node.label}>
            <motion.div
              initial={reduced ? false : { opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
              className="border-border bg-background flex items-center gap-3 rounded-lg border px-4 py-3"
            >
              <span className="bg-primary-soft text-primary flex size-9 items-center justify-center rounded-md">
                <node.icon className="size-4.5" />
              </span>
              <span className="flex-1">
                <span className="block text-sm font-semibold">{node.label}</span>
                <span className="text-muted-foreground block text-xs">{node.detail}</span>
              </span>
              <span className="bg-border h-1.5 w-16 overflow-hidden rounded-full">
                <motion.span
                  className="bg-primary block h-full"
                  initial={{ width: reduced ? "70%" : 0 }}
                  animate={{ width: `${55 + i * 15}%` }}
                  transition={{ delay: 0.8 + i * 0.15, duration: 1 }}
                />
              </span>
            </motion.div>
            <div className="text-muted-foreground flex justify-center py-0.5">
              <ArrowDown className="size-3.5" />
            </div>
          </div>
        ))}

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="bg-ink text-background rounded-lg px-4 py-4"
        >
          <p className="text-background/60 text-xs font-semibold tracking-[0.14em] uppercase">
            Growth
          </p>
          <p className="mt-1 text-lg font-semibold">Measurable business outcomes</p>
          <div className="mt-3 flex gap-1 pt-1">
            {[38, 52, 44, 66, 58, 78, 92].map((h, i) => (
              <motion.span
                key={i}
                className="bg-primary/80 w-full rounded-sm"
                style={{ height: 44 }}
                initial={{ scaleY: reduced ? h / 100 : 0.15, originY: 1 }}
                animate={{ scaleY: h / 100 }}
                transition={{ delay: 1.1 + i * 0.07, duration: 0.6 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {!reduced && (
        <>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="border-border bg-card shadow-card absolute -top-6 -right-4 hidden rounded-lg border px-4 py-3 sm:block"
          >
            <p className="text-muted-foreground text-[11px] font-semibold tracking-wide uppercase">
              Conversion Rate
            </p>
            <p className="text-primary mt-0.5 text-lg font-semibold">Tracked</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="border-border bg-card shadow-card absolute -bottom-6 -left-5 hidden rounded-lg border px-4 py-3 sm:block"
          >
            <p className="text-muted-foreground text-[11px] font-semibold tracking-wide uppercase">
              Cost Per Lead
            </p>
            <p className="text-primary mt-0.5 text-lg font-semibold">Optimised</p>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
