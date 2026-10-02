import { NARA_TRANSITION } from "@/data/nara";

export function NaraTransition() {
  return (
    <section
      aria-label="Coming next"
      className="relative bg-nara-background px-5 pb-28 pt-4 sm:px-6 md:pb-36"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span
          aria-hidden
          className="mb-10 h-20 w-px bg-gradient-to-b from-transparent to-nara-border-strong"
        />
        <p className="font-serif text-[clamp(1.6rem,3.2vw,2.4rem)] leading-snug tracking-[-0.01em] text-nara-muted">
          {NARA_TRANSITION.line}
        </p>
      </div>
    </section>
  );
}
