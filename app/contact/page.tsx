import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/sections/ContactForm";
import { phoneNumbers } from "@/lib/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation with Tridav — digital transformation, IT consultancy, ERP implementation, and custom software for African businesses and institutions.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid fade-mask-b" />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 h-[360px] w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]"
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:pt-40">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-bright">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Book a consultation
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tell us about your organisation and what you want to change.
            We&apos;ll come back with an honest read on what it takes — usually
            within one business day.
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 text-brand-bright" aria-hidden />
              <div>
                <dt className="font-medium">Email</dt>
                <dd className="mt-0.5 text-muted-foreground">
                  <a
                    href="mailto:hello@tridav.africa"
                    className="transition-colors hover:text-foreground"
                  >
                    hello@tridav.africa
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 text-brand-bright" aria-hidden />
              <div>
                <dt className="font-medium">Phone</dt>
                <dd className="mt-0.5 flex flex-col gap-1 text-muted-foreground">
                  {phoneNumbers.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="transition-colors hover:text-foreground"
                    >
                      {phone.display}
                    </a>
                  ))}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 text-brand-bright" aria-hidden />
              <div>
                <dt className="font-medium">Location</dt>
                <dd className="mt-0.5 text-muted-foreground">Accra, Ghana</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 text-brand-bright" aria-hidden />
              <div>
                <dt className="font-medium">Response time</dt>
                <dd className="mt-0.5 text-muted-foreground">
                  Within one business day
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
