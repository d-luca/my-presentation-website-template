"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { type PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  dataOdId: string;
  id: string;
}

export function Section({ dataOdId, id, children }: SectionProps) {
  const ref = useScrollReveal();

  return (
    <section
      id={id}
      data-od-id={dataOdId}
      ref={ref}
      className="reveal mx-auto max-w-180 px-6 py-24 md:min-w-180"
    >
      {children}
    </section>
  );
}
