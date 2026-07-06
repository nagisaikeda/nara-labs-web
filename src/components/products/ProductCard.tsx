"use client";

import Image from "next/image";
import Link from "next/link";
import type { CustomerProduct } from "@/types/customer-product";

type ProductTierBadgeProps = {
  product: CustomerProduct;
};

function ProductTierBadge({ product }: ProductTierBadgeProps) {
  if (product.tier === "flagship") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border-strong bg-foreground/[0.06] text-[11px] font-semibold tracking-[0.12em] uppercase text-foreground">
        <span className="w-1.5 h-1.5 rounded-full bg-gradient-mint animate-pulse-soft" />
        Flagship Product
      </span>
    );
  }

  if (product.tier === "flagship-secondary") {
    return (
      <span className="px-3 py-1 rounded-full border border-border bg-surface/50 text-[11px] font-semibold tracking-[0.12em] uppercase text-muted">
        Flagship
      </span>
    );
  }

  if (product.labCategory) {
    return (
      <span className="px-3 py-1 rounded-full border border-border bg-surface/40 text-[11px] font-semibold tracking-[0.1em] uppercase text-muted-soft">
        {product.labCategory}
      </span>
    );
  }

  return null;
}

type ProductCardProps = {
  product: CustomerProduct;
  variant?: "hero" | "standard" | "compact";
};

export function ProductCard({ product, variant = "standard" }: ProductCardProps) {
  const isResearch =
    product.tier === "research" || product.tier === "research-incubation";
  const detailHref = product.externalHref ?? product.href;
  const isHero = variant === "hero";

  return (
    <article
      className={`group flex flex-col rounded-2xl border overflow-hidden transition-colors duration-300 ${
        isHero
          ? "border-border-strong bg-gradient-to-b from-surface-elevated/80 to-surface/30 hover:border-foreground/15"
          : isResearch
            ? "border-border bg-surface/10 hover:border-border-strong"
            : "border-border bg-surface/20 hover:border-border-strong"
      }`}
    >
      {product.previewImage && (
        <div
          className={`flex items-center justify-center bg-[#111] border-b border-border ${
            isHero ? "p-8 md:p-10 min-h-[220px] md:min-h-[280px]" : "p-6 min-h-[180px]"
          }`}
        >
          <Image
            src={product.previewImage}
            alt={`${product.name} preview`}
            width={800}
            height={500}
            className="w-full h-auto max-w-full object-contain"
          />
        </div>
      )}

      <div className={`flex flex-col flex-1 ${isHero ? "p-8 md:p-10" : "p-6 md:p-8"}`}>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <ProductTierBadge product={product} />
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-muted-soft">
            {product.industry}
          </span>
        </div>

        <h3
          className={`font-serif font-normal tracking-[-0.02em] text-foreground ${
            product.accolade ? "mb-1.5" : "mb-2"
          } ${
            isHero
              ? "text-[clamp(1.75rem,3vw,2.25rem)]"
              : "text-[1.35rem]"
          }`}
        >
          {product.name}
        </h3>
        {product.accolade && (
          <p className="text-[13px] text-muted mb-3">{product.accolade}</p>
        )}
        <p className="text-[14px] font-medium text-foreground/90 mb-3">
          {product.tagline}
        </p>
        <p className="text-[14px] leading-relaxed text-muted mb-6 flex-1">
          {product.description}
        </p>

        {!isResearch && detailHref ? (
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={detailHref}
              className={`inline-flex items-center rounded-full text-[14px] font-medium transition-opacity duration-300 ${
                isHero
                  ? "px-5 py-2.5 bg-foreground text-background hover:opacity-90"
                  : "px-5 py-2.5 bg-foreground text-background hover:opacity-90"
              }`}
            >
              Evaluate product
            </Link>
            <Link
              href="/book-demo"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-border-strong text-[13px] text-muted hover:text-foreground transition-colors duration-300"
            >
              Book a demo
            </Link>
          </div>
        ) : detailHref ? (
          <Link
            href={detailHref}
            className="inline-flex items-center text-[14px] text-muted hover:text-foreground transition-colors duration-300"
          >
            Explore research →
          </Link>
        ) : null}
      </div>
    </article>
  );
}
