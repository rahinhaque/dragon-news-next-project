import Categories from "@/components/Homepage/news area/LeftSideBar";
import RightSideBar from "@/components/Homepage/news area/RightSideBar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsBookmark, BsShare, BsEye } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const CategoriesAllNews = async ({ params }) => {
  // Next.js 15 requires awaiting params
  const { id } = await params;

  // 1. Fetch Categories for the Sidebar and the Dynamic Heading
  const categoriesRes = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
    { next: { revalidate: 60 } }, // Optional: cache for 60 seconds
  );
  const categoriesData = await categoriesRes.json();
  const categories = categoriesData.data.news_category;

  // 2. Fetch News for this specific Category
  const newsRes = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`,
    { cache: "no-store" }, // Ensure we get fresh news on every click
  );
  const newsData = await newsRes.json();
  const news = newsData.data;

  // Find the current category name for the header
  const currentCategory = categories.find((c) => c.category_id === id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 container mx-auto mt-10 mb-20 px-4 md:px-0">
      {/* --- Left Sidebar (Category Navigation) - Horizontal on mobile --- */}
      <div className="col-span-1 md:col-span-1 md:border-r border-slate-100 dark:border-slate-800 md:pr-4">
        <Categories categories={{ news_category: categories }} />
      </div>

      {/* --- Main Content Area --- */}
      <div className="col-span-1 md:col-span-2">
        <h2 className="font-bold text-xl mb-6 text-slate-800 dark:text-slate-100">
          {currentCategory
            ? `${currentCategory.category_name} News`
            : "Dragon News Home"}
        </h2>

        <div className="flex flex-col gap-8">
          {news && news.length > 0 ? (
            news.map((n) => (
              <div
                key={n._id}
                className="border border-slate-200 dark:border-slate-800 rounded-md bg-white dark:bg-slate-900 overflow-hidden shadow-sm"
              >
                {/* 1. Author & Action Header */}
                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50">
                  <div className="flex items-center gap-3">
                    <Image
                      src={n.author?.img || "https://via.placeholder.com/40"}
                      alt={n.author?.name || "Author"}
                      width={40}
                      height={40}
                      className="rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {n.author?.name || "Anonymous"}
                      </p>
                      <p className="text-xs text-slate-500">
                        {n.author?.published_date?.split(" ")[0] || "No Date"}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 text-slate-500 cursor-pointer">
                    <BsBookmark className="hover:text-red-500 transition-colors" />
                    <BsShare className="hover:text-red-500 transition-colors" />
                  </div>
                </div>

                {/* 2. Content Body */}
                <div className="p-4">
                  <h3 className="text-xl font-extrabold mb-4 leading-tight text-slate-800 dark:text-slate-100">
                    {n.title}
                  </h3>

                  <div className="relative w-full h-48 sm:h-80 mb-5 rounded-lg overflow-hidden bg-slate-100">
                    <Image
                      src={n.image_url}
                      alt={n.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="w-full h-full"
                    />
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3 line-clamp-4">
                    {n.details}
                  </p>

                  <Link
                    href={`/news/${n._id}`}
                    className="text-orange-500 font-bold text-sm hover:underline inline-block mb-4"
                  >
                    Read More
                  </Link>

                  <hr className="border-slate-100 dark:border-slate-800 mb-4" />

                  {/* 3. Rating & Views Footer */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="flex text-amber-500 text-lg">
                        {[...Array(5)].map((_, i) => (
                          <AiFillStar
                            key={i}
                            className={
                              i < Math.floor(n.rating?.number || 0)
                                ? "text-amber-500"
                                : "text-slate-300"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-slate-600 dark:text-slate-400 font-semibold text-sm">
                        {n.rating?.number}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-500 font-medium">
                      <BsEye className="text-lg" />
                      <span>{n.total_view || 0}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            /* --- Empty State Placeholder --- */
            <div className="flex flex-col items-center justify-center py-24 px-4 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50/30">
              <div className="text-6xl mb-6 grayscale opacity-50">📰</div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2 text-center">
                No News Articles Found
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-center max-w-sm mb-8">
                We couldn't find any news in the
                <span className="font-bold text-red-600 px-1">
                  {currentCategory?.category_name || "selected"}
                </span>
                category at this moment. Please check back later or explore
                other sections.
              </p>
              <Link
                href="/"
                className="px-8 py-3 bg-red-600 text-white font-bold rounded shadow-lg hover:bg-red-700 active:scale-95 transition-all"
              >
                Back to Home Feed
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* --- Right Sidebar (Login/Social/Ads) --- */}
      <div className="col-span-1 border-l border-slate-100 dark:border-slate-800 pl-4 mt-10 md:mt-0">
        <RightSideBar />
      </div>
    </div>
  );
};

export default CategoriesAllNews;
