// components/GithubGraph.jsx
"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
export default function GithubGraph() {
  const theme = useTheme();
  const currentTheme = theme.resolvedTheme;

  return (
    <div className="flex justify-center p-2">
      <GitHubCalendar
        username="sachin55551010"
        colorScheme={currentTheme === "dark" ? "dark" : "light"} // Matches a dark-mode portfolio well
      />
    </div>
  );
}
