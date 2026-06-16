"use client";

import { useState } from "react";
import Image from "next/image";

type TeamAvatarProps = {
  src: string;
  name: string;
  initials: string;
};

export function TeamAvatar({ src, name, initials }: TeamAvatarProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-br from-gradient-lavender/15 to-gradient-sky/10 flex items-center justify-center border border-border">
        <span className="font-serif text-[clamp(2rem,5vw,2.75rem)] text-foreground/50 tracking-tight">
          {initials}
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-surface-elevated">
      <Image
        src={src}
        alt={name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
