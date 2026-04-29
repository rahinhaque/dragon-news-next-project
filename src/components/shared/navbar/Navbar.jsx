"use client";
import ThemeToggle from "@/components/theme/ThemeToggle";
import React from "react";
import Image from "next/image";
import userIcon from "@/assets/user.png";
import Link from "next/link";
import Navlink from "../navlink/Navlink";
import { authClient } from "@/lib/auth-client";



const Navbar = () => {
  const {data: session, isPending} = authClient.useSession();
  const user = session?.user;
  const greeting = user ? user.name : "Please login";
  // console.log(user);


  return (
    <nav className="container mx-auto py-3 md:py-5 px-4 md:px-0">
      <div className="flex items-center justify-between gap-3">
        {/* Mobile Hamburger Menu (DaisyUI) */}
        <div className="md:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-slate-800 rounded-box w-52"
            >
              <li>
                <Navlink href="/">Home</Navlink>
              </li>
              <li>
                <Navlink href="/about">About</Navlink>
              </li>
              <li>
                <Navlink href="/career">Career</Navlink>
              </li>
            </ul>
          </div>
        </div>

        {/* Centered Links - Visible on md and up */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-8 text-zinc-500 dark:text-zinc-400 font-medium">
            <li>
              <Navlink
                href="/"
                className="hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors"
              >
                Home
              </Navlink>
            </li>
            <li>
              <Navlink
                href="/about"
                className="hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors"
              >
                About
              </Navlink>
            </li>
            <li>
              <Navlink
                href="/career"
                className="hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors"
              >
                Career
              </Navlink>
            </li>
          </ul>
        </div>

        {/* Right Side: ThemeToggle, User Icon, Login Button */}
        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle compact hideOnMobile />
          <h2 className="hidden md:block font-black text-lg text-red-500">
            Hello, {greeting}
          </h2>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700">
            <Image
              src={user?.image || userIcon}
              alt="User Profile"
              className="w-full h-full object-cover"
              width={300}
              height={300}
            />
          </div>
          {isPending ? (
            <span className="loading loading-ring loading-md md:loading-lg"></span>
          ) : user ? (
            <button
              className="btn btn-xs md:btn-sm btn-outline border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 normal-case"
              onClick={async () => await authClient.signOut()}
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="px-3 md:px-8 py-1.5 md:py-2 bg-zinc-800 dark:bg-zinc-700 text-white text-xs md:text-base font-semibold rounded hover:bg-zinc-700 dark:hover:bg-zinc-600 transition-all"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      <h2 className="md:hidden mt-2 text-sm font-black text-red-500 truncate">
        Hello, {greeting}
      </h2>
    </nav>
  );
};

export default Navbar;
