import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightSideBar = () => {
  return (
    <div className="space-y-8">
      {/* Login Section */}
      <div>
        <h2 className="font-bold text-xl mb-4 text-slate-900 dark:text-slate-100 uppercase tracking-wide">
          Login With
        </h2>
        <div className="flex flex-col gap-2">
          <button className="btn btn-outline border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 normal-case flex items-center justify-center gap-2">
            <FaGoogle className="text-blue-500 text-lg" />
            Login with Google
          </button>
          <button className="btn btn-outline border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 normal-case flex items-center justify-center gap-2">
            <FaGithub className="text-slate-900 dark:text-slate-100 text-lg" />
            Login with GitHub
          </button>
        </div>
      </div>

      {/* Find Us On Section */}
      <div>
        <h2 className="font-bold text-xl mb-4 text-slate-900 dark:text-slate-100 uppercase tracking-wide">
          Find Us On
        </h2>
        <div className="flex flex-col border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
          <a
            href="#"
            className="flex items-center gap-3 p-4 border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
              <FaFacebook className="text-blue-600" />
            </div>
            <span className="font-medium text-slate-600 dark:text-slate-400">
              Facebook
            </span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-4 border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-sky-100 dark:group-hover:bg-sky-900/30 transition-colors">
              <FaTwitter className="text-sky-500" />
            </div>
            <span className="font-medium text-slate-600 dark:text-slate-400">
              Twitter
            </span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-pink-100 dark:group-hover:bg-pink-900/30 transition-colors">
              <FaInstagram className="text-pink-600" />
            </div>
            <span className="font-medium text-slate-600 dark:text-slate-400">
              Instagram
            </span>
          </a>
        </div>
      </div>

      {/* Q-Zone Section */}
      <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
        <h2 className="font-bold text-xl mb-6 text-slate-900 dark:text-slate-100 uppercase tracking-wide">
          Q-Zone
        </h2>
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-800 p-2 rounded shadow-sm border border-slate-100 dark:border-slate-700">
            <img
              src="https://i.ibb.co.com/DfB0WgXh/unnamed-7.png"
              alt="Swimming"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white dark:bg-slate-800 p-2 rounded shadow-sm border border-slate-100 dark:border-slate-700">
            <img
              src="https://i.ibb.co.com/KjwRNY6n/unnamed-6.png"
              alt="Class"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white dark:bg-slate-800 p-2 rounded shadow-sm border border-slate-100 dark:border-slate-700">
            <img
              src="https://i.ibb.co.com/cSXLF2Hn/unnamed-5.png"
              alt="Playground"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Amazing Newspaper Section */}
      <div className="relative overflow-hidden rounded-lg bg-slate-900 text-white p-8 py-16 text-center space-y-6">
        <div className="relative z-10">
          <h3 className="text-3xl font-bold leading-tight">
            Create an Amazing Newspaper
          </h3>
          <p className="text-slate-300 text-lg">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="btn btn-error text-white px-8 normal-case text-lg rounded-none">
            Learn More
          </button>
        </div>
        {/* Simple decorative background pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
    </div>
  );
};

export default RightSideBar;
