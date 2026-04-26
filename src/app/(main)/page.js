import Image from "next/image";

export default async function Home() {
  async function categoriesList() {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/news/categories",
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const result = await res.json();
    return result.data;
  }

  const categories = await categoriesList();
  console.log(categories.news_category);

  return (
    <div className="grid grid-cols-5 gap-4 container mx-auto mt-10">
      {/* Category Section */}
      <div className="col-span-1 border-r border-slate-100 dark:border-slate-800 pr-4">
        <h2 className="font-bold text-xl mb-4 text-slate-900 dark:text-slate-100 uppercase tracking-wide">
          Categories
        </h2>
        <ul className="flex flex-col gap-1">
          {categories.news_category.map((category) => (
            <li
              key={category.category_id}
              className="text-base font-semibold py-3 pl-4 border-l-4 border-transparent transition-all cursor-pointer
                         /* Light Mode Styles */
                         text-slate-600 hover:border-red-600 hover:bg-slate-50 hover:text-red-600 
                         /* Dark Mode Styles */
                         dark:text-slate-400 dark:hover:text-red-500 dark:hover:bg-slate-800/50 dark:hover:border-red-500"
            >
              {category.category_name}
            </li>
          ))}
        </ul>
      </div>

      <div className="font-bold text-2xl bg-amber-300 col-span-3">
        Dragon News Home
      </div>
      <div className="font-bold text-2xl bg-amber-500 col-span-1">
        Login with
      </div>
    </div>
  );
}
