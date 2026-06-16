function isExternalUrl(value?: string): value is string {
  return Boolean(value && value.startsWith("http"));
}

type ProjectLinksProps = {
  demoVideo?: string;
  githubRepo?: string;
  variant?: "default" | "hero";
};

export function ProjectLinks({
  demoVideo,
  githubRepo,
  variant = "default",
}: ProjectLinksProps) {
  const demoIsLink = isExternalUrl(demoVideo);
  const repoIsLink = isExternalUrl(githubRepo);

  if (variant === "hero") {
    return (
      <div className="flex flex-wrap items-center gap-3">
        {demoIsLink ? (
          <a
            href={demoVideo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity duration-300"
          >
            Watch demo
          </a>
        ) : (
          <span
            aria-disabled="true"
            className="px-5 py-2.5 rounded-full border border-border bg-surface/40 text-[14px] text-muted-soft cursor-not-allowed"
          >
            Demo video coming soon
          </span>
        )}
        {repoIsLink ? (
          <a
            href={githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-border-strong text-[14px] text-muted hover:text-foreground transition-colors duration-300"
          >
            View on GitHub
          </a>
        ) : (
          <span
            aria-disabled="true"
            className="px-5 py-2.5 rounded-full border border-border bg-surface/40 text-[14px] text-muted-soft cursor-not-allowed"
          >
            GitHub repo coming soon
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="rounded-xl border border-border bg-background/30 px-5 py-4">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-muted-soft mb-2">
          Demo Video
        </p>
        {demoIsLink ? (
          <a
            href={demoVideo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-foreground hover:text-gradient-mint transition-colors duration-300"
          >
            Watch demo →
          </a>
        ) : (
          <p className="text-[14px] text-muted italic">Demo video coming soon</p>
        )}
      </div>
      <div className="rounded-xl border border-border bg-background/30 px-5 py-4">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-muted-soft mb-2">
          GitHub Repo
        </p>
        {repoIsLink ? (
          <a
            href={githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-foreground hover:text-gradient-mint transition-colors duration-300"
          >
            View repository →
          </a>
        ) : (
          <p className="text-[14px] text-muted italic">GitHub repo coming soon</p>
        )}
      </div>
    </div>
  );
}
