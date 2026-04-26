"use client";
import ThemeToggle from "@/components/theme/ThemeToggle";
import React from "react";
import Image from "next/image";
import userIcon from "@/assets/user.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container mx-auto py-5 flex items-center">
      {/* Centered Links */}
      <div className="flex-1 flex justify-center">
        <ul className="flex items-center gap-8 text-zinc-500 dark:text-zinc-400 font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/career"
              className="hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors"
            >
              Career
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Side: ThemeToggle, User Icon, Login Button */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700">
            <Image
              src={userIcon}
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <Link
            href="/login"
            className="px-8 py-2 bg-zinc-800 dark:bg-zinc-700 text-white font-semibold rounded hover:bg-zinc-700 dark:hover:bg-zinc-600 transition-all"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
