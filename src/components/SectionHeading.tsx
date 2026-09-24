import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h2" | "h1" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  as: Tag = "h2",
}: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <Tag className="text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[2.75rem]">
        {title}
      </Tag>
      {subtitle ? (
        <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}

export function Section({
  children,
  className,
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "muted" | "ink";
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-24 lg:py-28",
        tone === "muted" && "bg-surface",
        tone === "ink" && "bg-ink text-background",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}
