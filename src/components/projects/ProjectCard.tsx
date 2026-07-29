"use client";

import { useState } from "react";
import { type Project } from "./Projects";
import { cn } from "@/utils/cn";
import { ProjectIcon } from "./ProjectIcon";
import Image from "next/image";

export function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      id={project.id}
      data-od-id={project.id}
      className="group mb-4 overflow-hidden rounded-xl border border-border bg-surface transition-[border-color,box-shadow,transform] duration-300  hover:border-card-hover-border hover:shadow-[0_2px_8px_var(--shadow-subtle)]"
    >
      <button
        type="button"
        onClick={handleClick}
        className="flex w-full cursor-pointer items-center gap-3 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5 transition-[background] user-select-none hover:bg-hover-bg sm:flex-row flex-col text-left"
        aria-expanded={isOpen}
      >
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-project-icon transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.name} icon`}
              width={44}
              height={44}
              className="h-full w-full object-cover"
              unoptimized={project.image.startsWith("http")}
            />
          ) : (
            <ProjectIcon
              type={project.icon ?? "grid"}
              className="size-5.5 fill-none stroke-muted"
            />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="mb-0.5 font-display text-[15px] font-semibold tracking-tight text-fg transition-colors duration-200 group-hover:text-accent sm:text-[16px]">
            {project.name}
          </h3>
          <p className="overflow-hidden text-sm text-muted sm:text-sm whitespace-nowrap text-ellipsis transition-colors duration-200">
            {project.brief}
          </p>
        </div>
        <span
          className={`shrink-0 text-muted transition-transform duration-300 ease-out ${isOpen ? "rotate-180" : ""} sm:ml-auto`}
        >
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden py-2">
          <div className="border-t border-border px-4 pt-4 pb-5 sm:px-6 sm:pt-5 sm:pb-6">
            <p
              className={cn(
                "mb-4 text-[15px] leading-relaxed text-muted transition-[opacity,transform] duration-300",
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2",
              )}
            >
              {project.description}
            </p>

            <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={tag}
                  className={cn(
                    "rounded-md bg-card-tag-bg px-2 py-0.5 text-[12px] font-medium tracking-wide text-muted transition-[opacity,transform,filter] duration-300 hover:scale-105 hover:filter-none sm:px-2.5 sm:py-1 sm:text-xs",
                    isOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-1.5",
                  )}
                  style={{
                    transitionDelay: isOpen
                      ? `${100 + index * 50}ms`
                      : `${index * 50}ms`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex text-[13px] sm:text-sm items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-70"
                >
                  <span className="relative">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
