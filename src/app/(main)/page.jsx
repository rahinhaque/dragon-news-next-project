import Categories from "@/components/Homepage/news area/LeftSideBar";
import RightSideBar from "@/components/Homepage/news area/RightSideBar";
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
        <Categories categories={categories}></Categories>
      </div>

      <div className="font-bold text-2xl bg-amber-300 col-span-3">
        Dragon News Home
      </div>
      <div className="font-bold text-2xl  col-span-1">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
}
