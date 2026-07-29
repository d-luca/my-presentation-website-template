import { Section } from "./typography/Section";
import { SectionTitle } from "./typography/SectionTitle";
import experienceData from "@/data/experience.json";

interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  subtitle: string;
  description: string;
}

function ExperienceCard({
  title,
  company,
  period,
  subtitle,
  description,
}: ExperienceEntry) {
  return (
    <div className="mb-7">
      <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-display text-base font-semibold tracking-tight text-fg">
          {title} — {company}
        </h3>
        <span className="text-xs text-muted whitespace-nowrap">{period}</span>
      </div>
      <p className="mb-2 text-sm text-muted">{subtitle}</p>
      <p className="text-[15px] leading-relaxed text-fg">{description}</p>
    </div>
  );
}

export default function Experience() {
  const { title, entries } = experienceData;
  return (
    <Section id="experience" dataOdId="experience">
      <SectionTitle>{title}</SectionTitle>
      {entries.map((exp, i) => (
        <ExperienceCard key={i} {...exp} />
      ))}
    </Section>
  );
}
