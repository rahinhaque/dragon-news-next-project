import RightSideBar from '@/components/Homepage/news area/RightSideBar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiArrowLeft } from 'react-icons/hi';


//Meta data
export async function generateMetadata({ params }) {
  const { id } = await params;

  // 1. Fetch the specific news item
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`,
  );
  const result = await res.json();

  // The API returns an array in 'data', so we take the first item
  const newsItem = result.data[0];

  return {
    title: `${newsItem?.title} | Dragon News`,
    description: newsItem?.details?.slice(0, 160), // Good for Google search results
    openGraph: {
      images: [newsItem?.image_url], // Shows the news image when shared on Facebook/Twitter
    },
  };
}




const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;

  // Fetch specific news by ID
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`,
    {
      cache: "no-store",
    },
  );
  const data = await res.json();
  const news = data.data?.[0];

  // if (!news) {
  //   return (
  //     <div className="container mx-auto mt-10 text-center py-20">
  //       <h2 className="text-2xl font-bold">News not found</h2>
  //       <Link href="/" className="btn btn-error mt-4">Back to Home</Link>
  //     </div>
  //   );
  // }

  return (
    <div className="container mx-auto mb-20 mt-10 grid grid-cols-1 items-start gap-6 px-4 md:grid-cols-4 md:px-0">
      <div className="col-span-1 md:col-span-3">
        <h2 className="font-bold text-2xl mb-6 text-slate-900 dark:text-slate-100 uppercase">Dragon News</h2>
        
        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm">
          {/* Main News Image */}
          <div className="relative w-full h-[300px] md:h-[450px] mb-6 rounded-lg overflow-hidden">
            <Image
              src={news.image_url}
              alt={news.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-slate-900 dark:text-slate-100 leading-tight">
            {news.title}
          </h1>

          {/* Details */}
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-8">
            {news.details}
          </p>

          {/* Back Button */}
          <Link 
            href={`/category/${news.category_id}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded transition-all active:scale-95"
          >
            <HiArrowLeft className="text-xl" />
            All news in this category
          </Link>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-1 mt-10 border-l border-slate-100 pl-4 dark:border-slate-800 md:sticky md:top-24 md:mt-0 md:self-start">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsDetailsPage;