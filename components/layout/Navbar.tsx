"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center justify-between px-4 transition-all duration-300 sm:px-6",
          scrolled ? "h-14" : "h-[4.5rem]",
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4"
          aria-label="Tridav — home"
        >
          <span
            aria-hidden
            className="flex size-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground"
          >
            T
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Tridav
            <span className="text-brand-bright">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                  active ? "text-foreground" : "text-muted-foreground",
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <Button asChild size="sm" className="ml-3">
            <Link href="/contact">Book a Consultation</Link>
          </Button>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-lg md:hidden"
          >
            <div className="space-y-1 px-4 pb-6 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-3 text-base font-medium",
                    pathname.startsWith(link.href)
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-3 w-full">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Book a Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
