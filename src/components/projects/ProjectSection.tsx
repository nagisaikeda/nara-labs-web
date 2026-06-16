type ProjectSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function ProjectSection({ title, children }: ProjectSectionProps) {
  return (
    <section className="border-t border-border pt-10 first:border-t-0 first:pt-0">
      <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-soft mb-4">
        {title}
      </h3>
      <div className="w-full">{children}</div>
    </section>
  );
}
