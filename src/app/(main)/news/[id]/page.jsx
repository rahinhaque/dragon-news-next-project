import RightSideBar from '@/components/Homepage/news area/RightSideBar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiArrowLeft } from 'react-icons/hi';


//Meta data
export const metadata = {
  title: " News Details",
  description:
    "This is the best online news Portal in current generetions, Where you can find International news, Tranding news, News of the sports, entertainment and culture. You can also join as reporter Senior Journalist , Photojournalist by applying in the career section. Our Mission is to unveil the true news of the world Uncompromising Integrity, Deep Investigation.",
};




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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 container mx-auto mt-10 mb-20 px-4 md:px-0">
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
      <div className="col-span-1 border-l border-slate-100 dark:border-slate-800 pl-4 mt-10 md:mt-0">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsDetailsPage;