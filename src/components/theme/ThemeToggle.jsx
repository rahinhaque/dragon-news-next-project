"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeToggle = ({ compact = false, hideOnMobile = false }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  if (!mounted) {
    return (
      <div
        className={`animate-pulse rounded-full bg-gray-200 ${
          compact ? "w-7 h-7" : "w-10 h-10"
        } ${hideOnMobile ? "hidden md:block" : ""}`}
      ></div>
    );
  }

  return (
    <div
      className={`items-center gap-2 ${hideOnMobile ? "hidden md:flex" : "flex"}`}
    >
      <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
        MODE: {theme?.toUpperCase()}
      </span>
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`toggle ${
          compact ? "toggle-sm" : "toggle-md"
        } toggle-success bg-indigo-200 hover:bg-indigo-200`}
      />
    </div>
  );
};

export default ThemeToggle;
