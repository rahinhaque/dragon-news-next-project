"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Categories = ({ categories }) => {
  const pathname = usePathname();
  const newsCategories = categories?.news_category || [];

  return (
    <div className="w-full">
      <h2 className="font-bold text-xl mb-4 text-slate-900 dark:text-slate-100 uppercase tracking-wide hidden md:block">
        Categories
      </h2>
      <ul className="flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {newsCategories.map((category) => {
          const categoryPath = `/category/${category.category_id}`;

          const isActive =
            pathname === categoryPath ||
            (pathname === "/" && category.category_id === "01");

          return (
            <Link
              className="block shrink-0"
              key={category.category_id}
              href={`/category/${category.category_id}`}
            >
              <li
                className={`text-sm md:text-base font-semibold py-2 md:py-3 px-4 md:pl-4 border-b-2 md:border-b-0 md:border-l-4 transition-all cursor-pointer whitespace-nowrap
                  ${
                    isActive
                      ? "border-red-600 bg-slate-100 text-red-600 dark:bg-slate-800 dark:text-red-500 dark:border-red-500"
                      : "border-transparent text-slate-600 hover:border-red-600 hover:bg-slate-50 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-500 dark:hover:bg-slate-800/50"
                  }`}
              >
                {category.category_name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
