"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/components/NavBar";
import LoadingPage from "./LoadingPage";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <LoadingPage />;
  }

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <NavBar />
        {children}
      </ThemeProvider>
    </>
  );
}
