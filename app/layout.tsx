import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://legioncraftsgb.com"),
  title: "LegionCraftsGB — 3D printing & app design",
  description:
    "Parent company for our 3D printing and app design work — custom prints and small-batch designs alongside simple digital tools and utilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-100">
        {children}
      </body>
    </html>
  );
}
