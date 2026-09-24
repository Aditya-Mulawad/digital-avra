import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";

const navLinks = [
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
  { label: "Industries", to: "/industries" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/blog" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 border-border border-b shadow-[0_1px_20px_-12px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="container-page flex h-16 items-center justify-between gap-6 sm:h-20"
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="text-foreground/75 hover:text-foreground hover:bg-secondary rounded-md px-3 py-2 text-sm font-medium transition-colors"
                activeProps={{ className: "text-primary" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild size="lg" className="group h-11 rounded-md px-5">
            <Link
              to="/free-growth-audit"
              onClick={() => track("click_cta", { location: "navbar" })}
            >
              Get Free Growth Audit
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="hover:bg-secondary inline-flex size-11 items-center justify-center rounded-md lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="bg-background fixed inset-0 top-16 z-40 flex flex-col overflow-y-auto px-5 pt-6 pb-10 lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.to} className="border-border border-b">
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-lg font-medium"
                  activeProps={{ className: "text-primary" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-8 h-13 w-full text-base">
            <Link
              to="/free-growth-audit"
              onClick={() => {
                setOpen(false);
                track("click_cta", { location: "mobile_nav" });
              }}
            >
              Get Free Growth Audit
              <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="mt-3 h-13 w-full text-base">
            <Link to="/contact" onClick={() => setOpen(false)}>
              Talk to Digital Avra
            </Link>
          </Button>
        </div>
      ) : null}
    </header>
  );
}
