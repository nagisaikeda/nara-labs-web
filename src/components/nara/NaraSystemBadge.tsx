import {
  NARA_STATUS_LABELS,
  type NaraHeroSystem,
  type NaraSystemStatus,
} from "@/data/nara";
import { NaraSystemIcon } from "@/components/nara/NaraSystemIcon";

export function NaraStatusIndicator({ status }: { status: NaraSystemStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[13px] ${
        status === "known" ? "text-nara-sage-text" : "text-nara-amber-text"
      }`}
    >
      <span
        aria-hidden
        className={`h-1.5 w-1.5 rounded-full ${
          status === "known" ? "bg-nara-sage" : "bg-nara-amber"
        }`}
      />
      {NARA_STATUS_LABELS[status]}
    </span>
  );
}

export function NaraSystemGlyph({ system }: { system: NaraHeroSystem }) {
  return (
    <span
      aria-hidden
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
        system.status === "known"
          ? "bg-nara-green-soft text-nara-green"
          : "bg-nara-surface-sunk text-nara-body"
      }`}
    >
      <NaraSystemIcon system={system.id} className="h-5 w-5" />
    </span>
  );
}
