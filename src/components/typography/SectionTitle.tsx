import { type PropsWithChildren } from "react";

export function SectionTitle({ children }: PropsWithChildren) {
  return (
    <h2 className="mb-6 font-display text-[28px] font-semibold tracking-tight text-fg">
      {children}
    </h2>
  );
}
