"use client";

import { useState } from "react";
import Image from "next/image";
import { getInitialsFromName } from "@/lib/initials";

type ProfileAvatarProps = {
  name: string;
  image?: string;
  className?: string;
};

function ProfileAvatarPlaceholder({ initials }: { initials: string }) {
  return (
    <div
      className="relative flex size-40 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#121216] via-surface-elevated to-[#09090b]" />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 28% 22%, rgba(200, 184, 224, 0.14) 0%, transparent 58%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 78% 82%, rgba(168, 200, 232, 0.1) 0%, transparent 52%)",
        }}
      />
      <span className="relative font-serif text-[2rem] leading-none tracking-tight text-foreground/30 select-none">
        {initials}
      </span>
    </div>
  );
}

export function ProfileAvatar({ name, image, className }: ProfileAvatarProps) {
  const [hasError, setHasError] = useState(false);
  const initials = getInitialsFromName(name);
  const showPlaceholder = !image || hasError;

  if (showPlaceholder) {
    return (
      <div className={className} role="img" aria-label={`${name} avatar placeholder`}>
        <ProfileAvatarPlaceholder initials={initials} />
      </div>
    );
  }

  return (
    <div
      className={`relative size-40 shrink-0 overflow-hidden rounded-xl border border-border bg-surface-elevated ${className ?? ""}`}
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover object-center"
        sizes="160px"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
