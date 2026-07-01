"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { HackathonGalleryImage } from "@/data/readylead-hackathon";

type HackathonGalleryProps = {
  images: HackathonGalleryImage[];
};

export function HackathonGallery({ images }: HackathonGalleryProps) {
  const [selected, setSelected] = useState<HackathonGalleryImage | null>(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected, close]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.button
            key={image.src}
            type="button"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onClick={() => setSelected(image)}
            className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-border bg-[#111] hover:border-border-strong transition-colors duration-300 cursor-pointer"
            aria-label={`View ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </motion.button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-muted hover:text-foreground transition-colors duration-300 text-[14px] px-3 py-1.5 rounded-full border border-border-strong"
          >
            Close
          </button>
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selected.src}
              alt={selected.alt}
              width={1600}
              height={1200}
              className="max-h-[85vh] w-auto h-auto max-w-full object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
