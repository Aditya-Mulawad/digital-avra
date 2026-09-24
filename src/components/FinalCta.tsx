import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { whatsappHref } from "@/data/site";
import { track } from "@/lib/analytics";

export function FinalCta() {
  return (
    <section className="bg-ink relative overflow-hidden py-20 sm:py-28">
      <div className="grid-faint pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden />
      <div
        className="bg-primary/15 pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full blur-3xl"
        aria-hidden
      />
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
            Ready when you are
          </p>
          <h2 className="text-background mt-4 text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
            Let's Build Your Digital Growth System.
          </h2>
          <p className="text-background/70 mt-5 text-base leading-relaxed">
            Whether you're starting from scratch or scaling what you already have, we'll
            map the fastest path to more visibility, more enquiries and more customers.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="group h-13 px-6 text-base">
              <Link
                to="/free-growth-audit"
                onClick={() => track("click_cta", { location: "final_cta_primary" })}
              >
                Get Your Free Growth Audit
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-background/25 text-background hover:bg-background hover:text-ink h-13 bg-transparent px-6 text-base"
            >
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("click_whatsapp", { location: "final_cta" })}
              >
                <MessageCircle className="mr-1 size-4" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
