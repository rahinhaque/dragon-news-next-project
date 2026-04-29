"use client";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-8 md:pt-12 pb-6 md:pb-8 space-y-2 md:space-y-3">
      {/* Logo */}
      <div className="relative w-full max-w-[400px] md:max-w-[600px] px-6 md:px-4">
        <Image
          src={logo}
          alt="The Dragon News Logo"
          priority
          className="w-full h-auto object-contain dark:invert"
        />
      </div>

      {/* Tagline */}
      <p className="text-zinc-500 text-sm md:text-lg font-medium text-center px-4">
        Journalism Without Fear or Favour
      </p>

      {/* Date */}
      <div className="flex items-center text-base md:text-xl">
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
