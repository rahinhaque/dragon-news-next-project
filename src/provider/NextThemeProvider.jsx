"use client";

import { ThemeProvider } from "next-themes";

const NextThemeProvider = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      // This is the "magic" prop for Next.js 15/16 + React 19
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default NextThemeProvider;
