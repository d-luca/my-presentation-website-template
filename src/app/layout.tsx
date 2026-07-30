import type { Metadata, Viewport } from "next";
import siteData from "@/data/site.json";
import { siteUrl } from "@/utils/siteUrl";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteData.title,
    template: `%s | ${siteData.title}`,
  },
  description: siteData.description,
  applicationName: siteData.title,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteData.title,
    description: siteData.description,
    locale: "en_US",
    siteName: siteData.title,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: siteData.title,
    description: siteData.description,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: "#fcfcfd",
};

const themeScript = `
  (() => {
    const root = document.documentElement;
    let savedTheme = null;

    try {
      const storedTheme = localStorage.getItem("theme");
      if (["light", "dark"].includes(storedTheme)) {
        savedTheme = storedTheme;
      }
    } catch {}

    const resolvedTheme =
      savedTheme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    root.dataset.theme = resolvedTheme;
    root.style.colorScheme = resolvedTheme;

    const themeColor = document.querySelector('meta[name="theme-color"]');
    themeColor?.setAttribute(
      "content",
      resolvedTheme === "dark" ? "#17191f" : "#fcfcfd",
    );
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
