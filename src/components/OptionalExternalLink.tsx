import type { ReactNode } from "react";

type OptionalExternalLinkProps = {
  href: string | undefined;
  /** Accessible name, e.g. "Labotr on LinkedIn". */
  label: string;
  className?: string;
  children: ReactNode;
};

export function OptionalExternalLink({
  href,
  label,
  className,
  children,
}: OptionalExternalLinkProps) {
  if (!href) {
    return (
      <span
        aria-disabled="true"
        aria-label={`${label} (link coming soon)`}
        title="Link coming soon"
        className={`${className ?? ""} cursor-default opacity-60`}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in new tab)`}
      className={className}
    >
      {children}
    </a>
  );
}
