"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Categories = ({ categories }) => {
  const pathname = usePathname();
  const newsCategories = categories?.news_category || [];

  return (
    <div>
      <h2 className="font-bold text-xl mb-4 text-slate-900 dark:text-slate-100 uppercase tracking-wide">
        Categories
      </h2>
      <ul className="flex flex-col gap-1">
        {newsCategories.map((category) => {
          const categoryPath = `/category/${category.category_id}`;

          // FIX: If we are on the Home page (/), make "All News" (ID 08) active.
          // Otherwise, check if the current path matches the category path.
          const isActive =
            pathname === categoryPath ||
            (pathname === "/" && category.category_id === "01");

          return (
            <Link className="block" 
              key={category.category_id}
              href={`/category/${category.category_id}`}
            >
              <li
                className={`text-base font-semibold py-3 pl-4 border-l-4 transition-all cursor-pointer
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
