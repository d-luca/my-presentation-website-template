import type { ReactNode } from "react";

export function ProjectIcon({
  type,
  className,
}: {
  type: "grid" | "layers" | "sun";
  className?: string;
}): ReactNode {
  const icons: Record<string, ReactNode> = {
    grid: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        strokeWidth="1.6"
        fill="none"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
    layers: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        strokeWidth="1.6"
        fill="none"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    sun: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        strokeWidth="1.6"
        fill="none"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  };

  return icons[type] ?? icons["grid"];
}
