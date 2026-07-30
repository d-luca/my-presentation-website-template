import Link from "next/link";
import heroData from "@/data/hero.json";

export default function Hero() {
  const { title, content, showGetInTouchButton, showProjectsButton } = heroData;

  const renderButtonContainer = showGetInTouchButton || showProjectsButton;

  return (
    <section id="hero" className="px-6 pt-35 pb-25 text-center">
      <h1 className="animate-hero-in mb-5 font-display text-[clamp(40px,7vw,64px)] leading-[1.1] font-semibold tracking-tight text-fg">
        {title}
      </h1>
      <p className="animate-hero-in-delay-1 mx-auto mb-10 max-w-120 text-base leading-relaxed text-muted">
        {content}
      </p>

      {renderButtonContainer && (
        <div className="animate-hero-in-delay-2 flex flex-wrap justify-center gap-3">
          {showProjectsButton && (
            <Link
              href="#projects"
              className="inline-flex items-center rounded-lg bg-accent px-5.5 py-2.5 font-body text-sm font-medium text-white transition-[background] hover:bg-accent-hover active:scale-[0.98]"
            >
              View Projects
            </Link>
          )}
          {showGetInTouchButton && (
            <Link
              href="#contact"
              className="inline-flex items-center rounded-lg border border-border bg-surface px-5.5 py-2.5 font-body text-sm font-medium text-fg transition-[background] hover:bg-hover-bg active:scale-[0.98]"
            >
              Get in Touch
            </Link>
          )}
        </div>
      )}
    </section>
  );
}
