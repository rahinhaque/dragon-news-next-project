"use client";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center pt-6 md:pt-12 pb-5 md:pb-8 px-4 md:px-0 space-y-2 md:space-y-3">
      {/* Logo */}
      <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[600px] px-2 md:px-4">
        <Image
          src={logo}
          alt="The Dragon News Logo"
          priority
          className="w-full h-auto object-contain dark:invert"
        />
      </div>

      {/* Tagline */}
      <p className="text-zinc-500 text-xs sm:text-sm md:text-lg font-medium text-center px-2 md:px-4">
        Journalism Without Fear or Favour
      </p>

      {/* Date */}
      <div className="flex flex-wrap justify-center items-center text-sm sm:text-base md:text-xl">
        <span className="font-bold text-zinc-800 dark:text-zinc-100">
          {format(new Date(), "EEEE")},
        </span>
        <span className="ml-1 text-zinc-500">
          {format(new Date(), " MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default Header;
