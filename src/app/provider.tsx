"use client";

import { ThemeProvider } from "next-themes";
import React, { ReactNode, useEffect } from "react";

interface ProviderProps {
  children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  useEffect(() => {
    console.log("HTML class:", document.documentElement.className); // Debugging
  });

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default Provider;
