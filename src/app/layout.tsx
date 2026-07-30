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
  colorScheme: "light",
  themeColor: "#fcfcfd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
