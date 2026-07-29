import { cn } from "@/utils/cn";
import { type PropsWithChildren } from "react";

interface SectionParagraphProps extends PropsWithChildren {
  className?: string;
}

export function SectionParagraph({
  children,
  className,
}: SectionParagraphProps) {
  return (
    <p
      className={cn(
        "max-w-[80ch] text-[17px] leading-relaxed text-muted text-pretty",
        className,
      )}
    >
      {children}
    </p>
  );
}
