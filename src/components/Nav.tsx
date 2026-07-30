import navData from "@/data/nav.json";
import ThemeSelector from "@/components/ThemeSelector";

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: (
    <svg
      className="size-4.5 fill-none stroke-fg sm:h-4.5 sm:w-4.5"
      viewBox="0 0 24 24"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  github: (
    <svg
      className="size-4.5 fill-none stroke-fg sm:h-4.5 sm:w-4.5"
      viewBox="0 0 24 24"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.603-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.31.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  ),
};

export default function Nav() {
  const { name, logoHref, links, socialLinks } = navData;
  return (
    <nav
      aria-label="Primary navigation"
      className="sticky top-0 z-50 border-b border-border bg-nav-bg backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-180 items-center justify-between gap-2 px-4 py-2.5 sm:px-6 sm:py-3.5">
        <a
          href={logoHref}
          className="shrink-0 font-display text-sm font-semibold tracking-tight text-fg"
        >
          {name}
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-6 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium tracking-wide text-muted uppercase transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-3 sm:gap-4 sm:border-l sm:border-border sm:pl-6">
          <ThemeSelector />
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={`${social.ariaLabel} (opens in a new tab)`}
              target="_blank"
              rel="noopener noreferrer"
              className="-m-2 inline-flex size-9 items-center justify-center opacity-[0.45] transition-opacity hover:opacity-[0.85]"
            >
              <span aria-hidden="true">
                {socialIcons[social.label.toLowerCase()] ?? null}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
