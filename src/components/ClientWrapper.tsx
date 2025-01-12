"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/components/NavBar";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading && " "}

      {mounted && (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          {children}
        </ThemeProvider>
      )}
    </>
  );
}
