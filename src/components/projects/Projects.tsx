import { Section } from "../typography/Section";
import { SectionTitle } from "../typography/SectionTitle";
import { ProjectCard } from "./ProjectCard";
import projectsDataRaw from "@/data/projects.json";

export interface Project {
  id: string;
  icon?: "grid" | "layers" | "sun";
  image?: string;
  name: string;
  brief: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
}

const projects: Project[] = projectsDataRaw.projects as unknown as Project[];

export default function Projects() {
  const { title } = projectsDataRaw;
  return (
    <Section id="projects" dataOdId="projects">
      <SectionTitle>{title}</SectionTitle>

      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
