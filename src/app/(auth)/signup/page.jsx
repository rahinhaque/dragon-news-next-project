import Link from 'next/link';
import React from 'react';

const SignUpPage = () => {
  return (
    <div className="min-h-[85vh] flex justify-center items-center bg-slate-100 dark:bg-slate-900/50 py-10 px-4">
      <div className="w-full max-w-[600px] bg-white dark:bg-slate-900 p-8 md:p-16 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold text-center text-slate-700 dark:text-slate-100 mb-8">
          Register your account
        </h2>
        
        <hr className="border-slate-100 dark:border-slate-800 mb-8" />

        <form className="space-y-6">
          {/* Name Field */}
          <div className="space-y-3">
            <label className="text-lg font-semibold text-slate-700 dark:text-slate-200">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-5 bg-slate-50 dark:bg-slate-800 border-none rounded focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 text-slate-600 dark:text-slate-300"
              required
            />
          </div>

          {/* Photo URL Field */}
          <div className="space-y-3">
            <label className="text-lg font-semibold text-slate-700 dark:text-slate-200">
              Photo URL
            </label>
            <input
              type="text"
              placeholder="Enter your photo URL"
              className="w-full p-5 bg-slate-50 dark:bg-slate-800 border-none rounded focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 text-slate-600 dark:text-slate-300"
              required
            />
          </div>

          {/* Email Field */}
          <div className="space-y-3">
            <label className="text-lg font-semibold text-slate-700 dark:text-slate-200">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-5 bg-slate-50 dark:bg-slate-800 border-none rounded focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 text-slate-600 dark:text-slate-300"
              required
            />
          </div>

          {/* Password Field */}
          <div className="space-y-3">
            <label className="text-lg font-semibold text-slate-700 dark:text-slate-200">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-5 bg-slate-50 dark:bg-slate-800 border-none rounded focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 text-slate-600 dark:text-slate-300"
              required
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center gap-3">
            <input type="checkbox" className="checkbox checkbox-sm rounded-none border-slate-300" id="terms" required/>
            <label htmlFor="terms" className="text-slate-500 dark:text-slate-400 font-medium cursor-pointer">
              Accept <span className="font-bold text-slate-700 dark:text-slate-300">Terms & Conditions</span>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-4 bg-zinc-700 dark:bg-zinc-800 text-white font-semibold text-xl rounded hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-all active:scale-[0.98]"
          >
            Register
          </button>
        </form>

        <p className="mt-8 text-center font-semibold text-slate-500 dark:text-slate-400">
          Already Have An Account ?{" "}
          <Link href="/login" className="text-red-500 hover:underline ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;