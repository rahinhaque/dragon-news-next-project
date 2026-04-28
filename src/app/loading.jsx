import React from 'react';

const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-4">
      <div className="relative flex items-center justify-center">
        {/* Outer pulse effect */}
        <div className="absolute w-24 h-24 bg-red-500/10 dark:bg-red-500/5 rounded-full animate-ping"></div>
        
        {/* DaisyUI Loading component */}
        <span className="loading loading-infinity loading-lg text-red-600 dark:text-red-500 scale-150"></span>
      </div>
      
      <div className="flex flex-col items-center animate-pulse">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 tracking-wider">
          DRAGON NEWS
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
          Fetching latest stories...
        </p>
      </div>
    </div>
  );
};

export default loading;