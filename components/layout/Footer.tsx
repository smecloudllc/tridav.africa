import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import { products } from "@/lib/data/products";
import { services } from "@/lib/data/services";

/* Brand icons — lucide-react no longer ships these. */
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2" aria-label="Tridav — home">
              <span
                aria-hidden
                className="flex size-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground"
              >
                T
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Tridav<span className="text-brand-bright">.</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Digital transformation, IT consultancy, ERP implementation, and
              custom software — engineered in-house for African businesses and
              institutions.
            </p>
            <div className="mt-5 flex gap-3">
              {/* TODO: replace with real social profile URLs */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tridav on LinkedIn"
                className="flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href="https://github.com/smecloudllc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tridav on GitHub"
                className="flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <GithubIcon className="size-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Services">
            <h2 className="text-sm font-semibold">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Products">
            <h2 className="text-sm font-semibold">Products</h2>
            <ul className="mt-4 space-y-2.5">
              {products.map((product) => (
                <li key={product.name}>
                  {product.live ? (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {product.name}
                      <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      {product.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>Accra, Ghana</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden />
                <a
                  href="mailto:hello@tridav.africa"
                  className="transition-colors hover:text-foreground"
                >
                  hello@tridav.africa
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-bright transition-colors hover:text-foreground"
            >
              Book a consultation
              <ArrowUpRight className="size-3.5" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Tridav. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built in-house by the Tridav engineering team.
          </p>
        </div>
      </div>
    </footer>
  );
}
