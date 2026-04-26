"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  if (!mounted) {
    return (
      <div className="w-10 h-10 animate-pulse bg-gray-200 rounded-full"></div>
    );
  }

  return (
    <div className="flex items-center gap-3 ">
      <span className="text-sm font-bold text-gray-700 dark:text-gray-200 hover:bg-indigo-200 transition 2s transform-3d cursor-pointer">
        MODE: {theme?.toUpperCase()}
      </span>
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="toggle toggle-lg toggle-success bg-indigo-200 hover:bg-indigo-200 transition 2s transform-3d"
      />
    </div>
  );
};

export default ThemeToggle;
