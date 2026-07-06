import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { AppToaster } from "./components/AppToaster";

export const metadata: Metadata = {
  title: {
    default: "Sachin Bansal | MERN Stack Developer",
    template: "%s | Sachin Bansal",
  },
  description:
    "Portfolio of Sachin Bansal, a MERN Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB, and building modern, responsive web applications.",
  keywords: [
    "Sachin Bansal",
    "MERN Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Sachin Bansal" }],
  creator: "Sachin Bansal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full not-first:flex flex-col">
        <ThemeProvider>
          {children}
          <AppToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
