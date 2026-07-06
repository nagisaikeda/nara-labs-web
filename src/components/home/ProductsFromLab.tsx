"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/products/ProductCard";
import {
  FLAGSHIP_PRODUCTS,
  RESEARCH_PRODUCTS,
  RESEARCH_SECTION_COPY,
} from "@/data/products-catalog";

export function ProductsFromLab() {
  const [readylead, probeiq] = FLAGSHIP_PRODUCTS;

  return (
    <section
      id="products"
      className="relative py-32 md:py-48 px-6 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground mb-4">
            Products from the Lab
          </h2>
          <p className="text-[16px] leading-relaxed text-muted">
            ReadyLead is our flagship commercial product. ProbeIQ is our second
            flagship — both built from workflow discovery and ready to evaluate.
          </p>
        </motion.div>

        <div className="space-y-5 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <ProductCard product={readylead} variant="hero" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
          >
            <ProductCard product={probeiq} variant="standard" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mb-10"
        >
          <h3 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-normal tracking-[-0.02em] text-foreground mb-3">
            {RESEARCH_SECTION_COPY.title}
          </h3>
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
              transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
            >
              <ProductCard product={product} variant="compact" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <Link
            href="/products"
            className="inline-flex items-center text-[14px] text-muted hover:text-foreground transition-colors duration-300"
          >
            View all products →
          </Link>
          <Link
            href="/capabilities"
            className="inline-flex items-center text-[14px] text-muted hover:text-foreground transition-colors duration-300"
          >
            Explore our capabilities →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
