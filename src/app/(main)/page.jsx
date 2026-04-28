import Categories from "@/components/Homepage/news area/LeftSideBar";
import RightSideBar from "@/components/Homepage/news area/RightSideBar";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";


//Meta data
export const metadata = {
  title: "Home page",
  description:
    "This is the best online news Portal in current generetions, Where you can find International news, Tranding news, News of the sports, entertainment and culture. You can also join as reporter Senior Journalist , Photojournalist by applying in the career section. Our Mission is to unveil the true news of the world Uncompromising Integrity, Deep Investigation.",
};




export default async function Home() {
  // 1. Fetch the list of categories (no ID needed here)
  async function getCategories() {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/news/categories",
    );
    const result = await res.json();
    return result.data;
  }

  // 2. Fetch news based on a specific Category ID
  async function getNewsByCategory(id) {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/news/category/${id}`,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch news data");
    }

    const result = await res.json();
    return result.data; // This is usually an array of news items
  }

  // Execute the fetches
  const categories = await getCategories();

  // Let's fetch "All News" (usually ID "08") or "01" for the home page default
  const news = await getNewsByCategory("08"); // Assuming "08" is the ID for "All News" or a general category
  // console.log(news);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 container mx-auto mt-10 px-4 md:px-0">
      {/* Category Section - Horizontal on mobile, vertical on laptop */}
      <div className="col-span-1 md:col-span-1 md:border-r border-slate-100 dark:border-slate-800 md:pr-4">
        <Categories categories={categories}></Categories>
      </div>

      <div className="col-span-1 md:col-span-2">
        <h2 className="font-bold text-2xl mb-6 text-slate-900 dark:text-slate-100">
          Dragon News Home
        </h2>

        <div className="flex flex-col gap-6">
          {news?.length > 0 ? (
            news.map((n) => (
              <div
                key={n._id}
                className="p-4 border border-slate-100 dark:border-slate-800 rounded-lg shadow-sm bg-white dark:bg-slate-900"
              >
                {/* Author and Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={n.author?.img || "https://via.placeholder.com/40"}
                      alt={n.author?.name || "Author"}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">
                        {n.author?.name || "Unknown Author"}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {n.author?.published_date
                          ? format(
                              new Date(n.author.published_date),
                              "yyyy-MM-dd",
                            )
                          : "Unknown Date"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <span>🔖</span>
                    <span>🔗</span>
                  </div>
                </div>

                {/* News Title */}
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                  {n.title}
                </h3>

                {/* News Image */}
                <div className="relative w-full h-48 sm:h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={n.image_url}
                    alt={n.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>

                {/* News Details and Read More */}
                <p className="text-base text-slate-700 dark:text-slate-300 mb-4">
                  {n.details.length > 200 ? (
                    <>
                      {n.details.substring(0, 200)}...{" "}
                      <Link
                        href={`/news/${n._id}`}
                        className="text-red-600 hover:underline dark:text-red-500"
                      >
                        Read More
                      </Link>
                    </>
                  ) : (
                    n.details
                  )}
                </p>

                {/* Rating and View Count */}
                <div className="flex justify-between items-center border-t border-slate-100 dark:border-slate-800 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-400">
                      {Array.from({
                        length: Math.floor(n.rating?.number || 0),
                      }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                      {n.rating?.number % 1 !== 0 && <span>☆</span>}
                    </div>
                    <span className="text-slate-600 dark:text-slate-400 font-medium">
                      {n.rating?.number || "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <span>👁</span>
                    <span>{n.total_view || 0}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 text-slate-500 dark:text-slate-400">
              No news found.
            </div>
          )}
        </div>
      </div>

      <div className="col-span-1 border-l border-slate-100 dark:border-slate-800 pl-4 mt-10 md:mt-0">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
}
