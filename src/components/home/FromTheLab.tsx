"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FROM_THE_LAB } from "@/data/homepage";

export function FromTheLab() {
  return (
    <section
      id="from-the-lab"
      aria-labelledby="from-the-lab-heading"
      className="relative border-t border-border px-6 py-28 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8"
        >
          <div className="lg:col-span-6">
            <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-soft">
              {FROM_THE_LAB.eyebrow}
            </p>
            <h2
              id="from-the-lab-heading"
              className="font-serif text-[clamp(2.2rem,4.2vw,3.25rem)] font-normal leading-[1.05] tracking-[-0.02em] text-foreground"
            >
              {FROM_THE_LAB.title}
            </h2>
          </div>
          <p className="max-w-md text-[16px] leading-relaxed text-muted lg:col-span-5 lg:col-start-8 lg:pb-1.5">
            {FROM_THE_LAB.description}
          </p>
        </motion.div>

        <ul className="mt-16 border-b border-border md:mt-20">
          {FROM_THE_LAB.entries.map((entry, index) => (
            <motion.li
              key={entry.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
              className="border-t border-border"
            >
              <Link
                href={entry.href}
                className="group relative grid gap-y-2 py-7 pr-10 transition-colors duration-300 md:grid-cols-12 md:items-baseline md:gap-x-8 md:py-9"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-soft md:col-span-2">
                  {entry.maturity}
                </span>
                <div className="md:col-span-4">
                  <h3 className="font-serif text-[1.65rem] font-normal leading-tight tracking-[-0.01em] text-foreground/90 transition-colors duration-300 group-hover:text-foreground">
                    {entry.name}
                  </h3>
                  {entry.accolade && (
                    <span className="mt-1.5 block text-[12px] text-muted-soft">
                      {entry.accolade}
                    </span>
                  )}
                </div>
                <span className="text-[15px] leading-relaxed text-muted md:col-span-5">
                  {entry.tagline}
                </span>
                <span
                  aria-hidden
                  className="absolute right-0 top-7 text-[15px] text-muted-soft transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-foreground md:top-1/2 md:-translate-y-1/2 md:group-hover:-translate-y-1/2"
                >
                  →
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>

        <Link
          href="/products"
          className="mt-10 inline-flex items-center text-[14px] text-muted transition-colors duration-300 hover:text-foreground"
        >
          All products →
        </Link>
      </div>
    </section>
  );
}
