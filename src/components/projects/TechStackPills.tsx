type TechStackPillsProps = {
  items: string[];
};

export function TechStackPills({ items }: TechStackPillsProps) {
  return (
    <div className="flex w-full flex-wrap justify-start gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="px-3 py-1.5 rounded-full border border-border bg-background/40 text-[12px] text-muted"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
