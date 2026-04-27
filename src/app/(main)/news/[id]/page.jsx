import RightSideBar from '@/components/Homepage/news area/RightSideBar';
import React from 'react';

const NewsDetailsPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 container mx-auto mt-10 px-4 md:px-0">
      <div className="col-span-1 md:col-span-3">
        <h2 className="font-bold text-2xl mb-6 text-slate-900 dark:text-slate-100">News Detail</h2>
        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg shadow-sm">
          <p className="text-slate-600 dark:text-slate-400">This is the news details page. Implementation details would go here.</p>
        </div>
      </div>
      <div className="col-span-1 border-l border-slate-100 dark:border-slate-800 pl-4">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsDetailsPage;