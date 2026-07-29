import { Section } from "./typography/Section";
import { SectionParagraph } from "./typography/SectionParagraph";
import { SectionTitle } from "./typography/SectionTitle";
import aboutData from "@/data/about.json";

export default function About() {
  const { title, content } = aboutData;
  return (
    <Section dataOdId="about" id="about">
      <SectionTitle>{title}</SectionTitle>
      <SectionParagraph>{content}</SectionParagraph>
    </Section>
  );
}
