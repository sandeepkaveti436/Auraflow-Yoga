import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yoga Premium",
  description: "Premium yoga classes, guided meditation, and mindful movement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
