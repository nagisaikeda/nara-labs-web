import type { NaraSystemId } from "@/data/nara";

type NaraSystemIconProps = {
  system: NaraSystemId;
  className?: string;
};

export function NaraSystemIcon({ system, className }: NaraSystemIconProps) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
    focusable: false,
  };

  if (system === "hvac") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="1.6" />
        <path d="M12 10.4c-.9-2.6-.6-5.4 1.4-6.2 1.8-.7 3.3.9 2.7 2.8-.5 1.6-2.1 2.6-4.1 3.4" />
        <path d="M13.6 12c2.6-.9 5.4-.6 6.2 1.4.7 1.8-.9 3.3-2.8 2.7-1.6-.5-2.6-2.1-3.4-4.1" />
        <path d="M12 13.6c.9 2.6.6 5.4-1.4 6.2-1.8.7-3.3-.9-2.7-2.8.5-1.6 2.1-2.6 4.1-3.4" />
        <path d="M10.4 12c-2.6.9-5.4.6-6.2-1.4-.7-1.8.9-3.3 2.8-2.7 1.6.5 2.6 2.1 3.4 4.1" />
      </svg>
    );
  }

  if (system === "water") {
    return (
      <svg {...common}>
        <path d="M12 3.5c-2.9 3.6-5.5 6.9-5.5 10.2a5.5 5.5 0 0 0 11 0c0-3.3-2.6-6.6-5.5-10.2Z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M13.2 3 6.5 13.2h5.2L10.8 21l6.7-10.2h-5.2L13.2 3Z" />
    </svg>
  );
}
