type MetaLineProps = {
  /** Values to show, separated by a middle dot, e.g. ["Tooling", "4 min"]. */
  items: string[];
  /** "caption" is small monospace (cards); "body" is serif paragraph size (page headers). */
  variant?: "caption" | "body";
  className?: string;
};

/** A row of short details separated by dots ("Meta data" / "Details" in Figma). */
export function MetaLine({ items, variant = "caption", className = "" }: MetaLineProps) {
  const style = variant === "caption" ? "type-caption" : "type-body";
  return (
    <p className={`flex flex-wrap gap-2 text-muted ${style} ${className}`}>
      {items.map((item, i) => (
        <span key={item + i} className="contents">
          {i > 0 && <span aria-hidden>·</span>}
          <span>{item}</span>
        </span>
      ))}
    </p>
  );
}
