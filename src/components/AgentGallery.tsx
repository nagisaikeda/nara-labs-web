"use client";

import Image from "next/image";

export type AgentGalleryProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export function AgentGallery({ images }: AgentGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {images.map((image) => (
          <div
            key={image.src}
            className="group/image relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-surface-elevated hover:border-border-strong transition-colors duration-500"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover/image:scale-[1.04]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
