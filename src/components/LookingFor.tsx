import { Section } from "./typography/Section";
import { SectionParagraph } from "./typography/SectionParagraph";
import { SectionTitle } from "./typography/SectionTitle";
import lookingForData from "@/data/looking-for.json";

export default function LookingFor() {
  const { title, intro, items, cvButton } = lookingForData;
  return (
    <Section id="looking-for" dataOdId="looking-for">
      <SectionTitle>{title}</SectionTitle>
      <SectionParagraph className="mb-6">{intro}</SectionParagraph>

      <ul className="mb-6 list-none space-y-0">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 border-b border-border py-3 text-[16px] text-fg last:border-b-0"
          >
            <span
              className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>

      {cvButton.show && cvButton.href !== "#" && (
        <div className="mt-6">
          <a
            href={cvButton.href}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5.5 py-2.5 font-body text-sm font-medium text-fg transition-[background] hover:bg-hover-bg active:scale-[0.98]"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            {cvButton.label}
          </a>
        </div>
      )}
    </Section>
  );
}
