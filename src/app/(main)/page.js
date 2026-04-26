import Image from "next/image";

export default async function Home() {
  async function categoriesList() {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/news/categories",
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = res.json();
    return data;
  }
  const categories = await categoriesList();
  console.log(categories);

  return (
    <div className="grid grid-cols-5 gap-4 container mx-auto mt-10">
      <div className="font-bold text-2xl bg-amber-100 col-span-1">
        All Caterogy
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
