"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GradientBackground } from "@/components/GradientBackground";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/products/ProductCard";
import { Footer } from "@/components/Footer";
import {
  FLAGSHIP_PRODUCTS,
  RESEARCH_PRODUCTS,
  RESEARCH_SECTION_COPY,
} from "@/data/products-catalog";

export function ProductsPage() {
  const [readylead, probeiq] = FLAGSHIP_PRODUCTS;

  return (
    <main className="relative overflow-hidden">
      <GradientBackground />
      <Navigation />
      <PageHero
        title="Products"
        subtitle="ReadyLead is our flagship commercial product — 2nd Place at the YC AI Growth Hackathon. ProbeIQ is our second flagship, both ready to evaluate, demo, and deploy."
        supportingText="Research and incubation projects demonstrate where the Applied AI Lab is headed next."
      />

      <section className="relative px-6 pb-20">
        <div className="max-w-6xl mx-auto space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <ProductCard product={readylead} variant="hero" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.06, ease: "easeOut" }}
          >
            <ProductCard product={probeiq} variant="standard" />
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 pb-32 md:pb-48 border-t border-border pt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mb-12"
          >
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-normal tracking-[-0.02em] text-foreground mb-4">
              {RESEARCH_SECTION_COPY.title}
            </h2>
            <p className="text-[15px] leading-relaxed text-muted">
              {RESEARCH_SECTION_COPY.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {RESEARCH_PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
              >
                <ProductCard product={product} variant="compact" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[15px] leading-relaxed text-muted mb-6">
            Want to understand the AI systems and platform capabilities behind
            these products?
          </p>
          <Link
            href="/capabilities"
            className="inline-flex items-center text-[14px] text-muted hover:text-foreground transition-colors duration-300"
          >
            Explore our capabilities →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
