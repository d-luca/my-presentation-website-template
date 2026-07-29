import { Section } from "./typography/Section";
import { SectionParagraph } from "./typography/SectionParagraph";
import { SectionTitle } from "./typography/SectionTitle";
import contactData from "@/data/contact.json";

const icons: Record<string, React.ReactNode> = {
  email: (
    <svg
      className="h-4 w-4 fill-none"
      viewBox="0 0 24 24"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  twitter: (
    <svg
      className="h-4 w-4 fill-none"
      viewBox="0 0 24 24"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
      <path d="M5 12c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5c1.3 0 2.5.5 3.4 1.3L8 8.5 5 12c-1.7-1.7-4.1-2.3-6.3-1.5C.6 11.5 0 12.7 0 14c0 3.3 2.7 6 6 6s6-2.7 6-6c0-1.3-.6-2.5-1.5-3.3C11.5 9.7 10.3 9 9 9c-.8 0-1.6.2-2.3.5" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  ),
  github: (
    <svg className="h-4 w-4" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.603-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.31.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  ),
  linkedin: (
    <svg
      className="h-4 w-4 fill-none"
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
};

export default function Contact() {
  const { title, intro, links } = contactData;
  return (
    <Section id="contact" dataOdId="contact">
      <SectionTitle>{title}</SectionTitle>
      <SectionParagraph className="mb-6">{intro}</SectionParagraph>
      <div className="flex flex-wrap gap-5">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-70"
          >
            {icons[link.label.toLowerCase().replace(/\s*\/*\s*/g, "")] ?? null}
            {link.label}
          </a>
        ))}
      </div>
    </Section>
  );
}
