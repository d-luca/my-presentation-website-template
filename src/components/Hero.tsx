import Link from "next/link";
import heroData from "@/data/hero.json";

export default function Hero() {
  const { title, content, showGetInTouchButton, showProjectsButton } = heroData;

  const renderButtonContainer = showGetInTouchButton || showProjectsButton;

  return (
    <section id="hero" className="px-6 pt-35 pb-25 text-center">
      <h1 className="mb-5 animate-hero-in font-display text-[clamp(40px,7vw,64px)] font-semibold tracking-tight leading-[1.1] text-fg">
        {title}
      </h1>
      <p className="mx-auto mb-10 max-w-120 text-base leading-relaxed text-muted animate-hero-in-delay-1">
        {content}
      </p>

      {renderButtonContainer && (
        <div className="flex justify-center gap-3 flex-wrap animate-hero-in-delay-2">
          {showProjectsButton && (
            <Link
              href="#projects"
              className="inline-flex items-center rounded-lg bg-accent px-5.5 py-2.5 text-sm font-medium text-white transition-[background] hover:bg-accent-hover active:scale-[0.98] font-body"
            >
              View Projects
            </Link>
          )}
          {showGetInTouchButton && (
            <Link
              href="#contact"
              className="inline-flex items-center rounded-lg border border-border bg-surface px-5.5 py-2.5 text-sm font-medium text-fg transition-[background] hover:bg-hover-bg active:scale-[0.98] font-body"
            >
              Get in Touch
            </Link>
          )}
        </div>
      )}
    </section>
  );
}
