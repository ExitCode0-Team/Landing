type SectionEdgeProps = {
  from: string;
  to: string;
  /** Bleed height in px — pair with `sectionOverlap(height)` on the section below */
  height?: number;
};

/** Negative margin-top for the section below a SectionEdge */
export function sectionOverlap(edgeHeight: number) {
  return Math.round(edgeHeight * 0.72);
}

/** Bottom fade inside a section; pair with negative margin on the section below */
export function SectionEdge({ from, to, height = 64 }: SectionEdgeProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 z-[1]"
      style={{
        height,
        background: `linear-gradient(180deg, ${from} 0%, ${to} 100%)`,
      }}
    />
  );
}
