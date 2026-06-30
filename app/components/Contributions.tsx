"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function GithubGraph() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-36" />;
  }

  return (
    <div className="flex justify-center p-2">
      <GitHubCalendar
        username="sachin55551010"
        colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  );
}
