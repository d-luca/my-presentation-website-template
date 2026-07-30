"use client";

import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  root.dataset.theme = theme;
  root.style.colorScheme = theme;

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#17191f" : "#fcfcfd");
}

export default function ThemeSelector() {
  function toggleTheme() {
    const nextTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";

    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // The theme still applies when storage is unavailable.
    }

    applyTheme(nextTheme);
  }

  return (
    <button
      type="button"
      aria-label="Toggle light and dark theme"
      className="theme-toggle inline-flex size-9 cursor-pointer items-center justify-center rounded-md text-muted transition-colors hover:text-fg"
      title="Toggle light and dark theme"
      onClick={toggleTheme}
    >
      <Moon
        aria-hidden="true"
        className="theme-toggle__dark-icon size-4"
        strokeWidth={1.8}
      />
      <Sun
        aria-hidden="true"
        className="theme-toggle__light-icon size-4"
        strokeWidth={1.8}
      />
    </button>
  );
}
