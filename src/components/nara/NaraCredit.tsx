import Link from "next/link";
import { NARA_CREDIT } from "@/data/nara";
import { LABOTR_SITE_URL } from "@/data/labotr";

const nameClass =
  "rounded-sm text-nara-foreground underline decoration-transparent decoration-1 underline-offset-[5px] transition-colors duration-300 hover:decoration-nara-green/60 focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-nara-green";

export function NaraCredit() {
  return (
    <aside
      aria-label="Credits"
      className="relative bg-nara-background px-5 pb-20 sm:px-6 md:pb-24"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span aria-hidden className="mb-10 h-px w-10 bg-nara-border-strong" />
        <p className="font-serif text-[22px] leading-none tracking-[-0.01em] text-nara-foreground">
          {NARA_CREDIT.wordmark}
        </p>
        <p className="mt-4 font-serif text-[15px] leading-relaxed tracking-[0.005em] text-nara-muted sm:text-base">
          <span className="whitespace-nowrap">
            {NARA_CREDIT.lead}{" "}
            <span role="img" aria-label="love" className="text-[0.85em] text-nara-green">
              {NARA_CREDIT.heart}
            </span>{" "}
            {NARA_CREDIT.by}
          </span>{" "}
          <span className="whitespace-nowrap">
            <Link href="/" className={nameClass}>
              {NARA_CREDIT.maker}
            </Link>{" "}
            <span className="text-nara-sage">{NARA_CREDIT.separator}</span>{" "}
            {LABOTR_SITE_URL ? (
              <a
                href={LABOTR_SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${NARA_CREDIT.partner} (opens in new tab)`}
                className={nameClass}
              >
                {NARA_CREDIT.partner}
              </a>
            ) : (
              <span className="text-nara-foreground">{NARA_CREDIT.partner}</span>
            )}
          </span>
        </p>
      </div>
    </aside>
  );
}
