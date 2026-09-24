import { Reveal } from "./Reveal";

const categories = ["Web", "SEO", "Paid Ads", "Social", "Branding", "Analytics"];

export function TrustStrip() {
  return (
    <section className="border-border bg-surface border-y">
      <div className="container-page py-10 sm:py-12">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-foreground max-w-md text-sm font-medium sm:text-base">
            Everything your business needs to build, market and grow online.
          </p>
          <ul className="grid grid-cols-3 gap-x-6 gap-y-4 sm:grid-cols-6 lg:gap-x-10">
            {categories.map((c) => (
              <li
                key={c}
                className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
