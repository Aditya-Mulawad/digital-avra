import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";
import { track } from "@/lib/analytics";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: study.slug }}
      onClick={() => track("view_case_study", { case_study: study.slug })}
      className="group border-border bg-card hover:border-primary/40 hover:shadow-lift flex h-full flex-col rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="bg-primary-soft text-accent-foreground rounded-full px-2.5 py-1 text-xs font-semibold">
          {study.category}
        </span>
        <ArrowUpRight className="text-muted-foreground group-hover:text-primary size-4 transition-colors" />
      </div>

      <h3 className="mt-5 text-lg font-semibold">{study.title}</h3>
      <p className="text-muted-foreground mt-1 text-xs font-medium">{study.industry}</p>
      <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{study.challenge}</p>

      <ul className="border-border mt-6 flex flex-wrap gap-1.5 border-t pt-5">
        {study.focus.map((f) => (
          <li
            key={f}
            className="border-border text-muted-foreground rounded-md border px-2.5 py-1 text-xs"
          >
            {f}
          </li>
        ))}
      </ul>

      <p className="text-muted-foreground mt-5 text-xs">
        Illustrative example — not a client result.
      </p>
    </Link>
  );
}
