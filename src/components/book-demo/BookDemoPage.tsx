"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { GradientBackground } from "@/components/GradientBackground";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";

function BookDemoForm() {
  const searchParams = useSearchParams();
  const isPartner = searchParams.get("partner") === "1";
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title={isPartner ? "Become a design partner" : "Book a demo"}
        subtitle={
          isPartner
            ? "Tell us about your industry workflow and how you'd like to shape the next product from the lab."
            : "See ReadyLead, ProbeIQ, or discuss how applied AI products can fit your workflow."
        }
        supportingText="We'll follow up within two business days."
      />

      <section className="relative pb-32 md:pb-48 px-6">
        <div className="max-w-xl mx-auto">
          {submitted ? (
            <div className="rounded-2xl border border-border bg-surface/20 p-8 md:p-10 text-center">
              <h2 className="font-serif text-[1.5rem] font-normal text-foreground mb-3">
                Thank you
              </h2>
              <p className="text-[15px] leading-relaxed text-muted">
                We received your request and will be in touch shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-surface/20 p-8 md:p-10 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-[12px] font-semibold tracking-[0.1em] uppercase text-muted-soft mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/40 text-[14px] text-foreground placeholder:text-muted-soft focus:outline-none focus:border-border-strong transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[12px] font-semibold tracking-[0.1em] uppercase text-muted-soft mb-2"
                >
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/40 text-[14px] text-foreground placeholder:text-muted-soft focus:outline-none focus:border-border-strong transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-[12px] font-semibold tracking-[0.1em] uppercase text-muted-soft mb-2"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/40 text-[14px] text-foreground placeholder:text-muted-soft focus:outline-none focus:border-border-strong transition-colors"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-[12px] font-semibold tracking-[0.1em] uppercase text-muted-soft mb-2"
                >
                  {isPartner ? "Workflow interest" : "Product interest"}
                </label>
                <select
                  id="interest"
                  name="interest"
                  defaultValue={isPartner ? "design-partner" : "readylead"}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/40 text-[14px] text-foreground focus:outline-none focus:border-border-strong transition-colors"
                >
                  <option value="readylead">ReadyLead (Flagship)</option>
                  <option value="probeiq">ProbeIQ</option>
                  <option value="design-partner">Design partner program</option>
                  <option value="research">Lab research (Ahead, Local PM OS)</option>
                  <option value="general">General inquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[12px] font-semibold tracking-[0.1em] uppercase text-muted-soft mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/40 text-[14px] text-foreground placeholder:text-muted-soft focus:outline-none focus:border-border-strong transition-colors resize-y min-h-[120px]"
                  placeholder={
                    isPartner
                      ? "Describe the workflow you'd like us to explore together."
                      : "Tell us about your use case or questions."
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-full bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity duration-300"
              >
                {isPartner ? "Submit partner request" : "Request demo"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

export function BookDemoPage() {
  return (
    <main className="relative overflow-hidden">
      <GradientBackground />
      <Navigation />
      <Suspense fallback={null}>
        <BookDemoForm />
      </Suspense>
      <Footer />
    </main>
  );
}
