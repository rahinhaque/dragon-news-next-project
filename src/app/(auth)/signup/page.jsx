"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUpFunc = async (data) => {
    // console.log("Registration Data:", data);
    const { name, photo, email, password } = data;
    // console.log(name , email , photo , password);

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });
    console.log(res, error);
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Registration successful!");
    }
  };

  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div className="min-h-[85vh] flex justify-center items-center bg-slate-100 dark:bg-slate-900/50 py-10 px-4">
      <div className="w-full max-w-[600px] bg-white dark:bg-slate-900 p-8 md:p-16 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold text-center text-slate-700 dark:text-slate-100 mb-8">
          Register your account
        </h2>

        <hr className="border-slate-100 dark:border-slate-800 mb-8" />

        {/* Use onSubmit, not onClick, to prevent bubbling issues */}
        <form className="space-y-6" onSubmit={handleSubmit(handleSignUpFunc)}>
          {/* Name Field */}
          <div className="space-y-3">
            <label className="text-lg font-semibold text-slate-700 dark:text-slate-200">
              Your Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              className="w-full p-5 bg-slate-50 dark:bg-slate-800 border-none rounded focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 text-slate-600 dark:text-slate-300"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Photo URL Field */}
          <div className="space-y-3">
            <label className="text-lg font-semibold text-slate-700 dark:text-slate-200">
              Photo URL
            </label>
            <input
              type="text"
              {...register("photo", { required: "Photo URL is required" })}
              placeholder="Enter your photo URL"
              className="w-full p-5 bg-slate-50 dark:bg-slate-800 border-none rounded focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 text-slate-600 dark:text-slate-300"
            />
            {errors.photo && (
              <p className="text-red-500 text-sm mt-1">
                {errors.photo.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-3">
            <label className="text-lg font-semibold text-slate-700 dark:text-slate-200">
              Email address
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
              placeholder="Enter your email address"
              className="w-full p-5 bg-slate-50 dark:bg-slate-800 border-none rounded focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 text-slate-600 dark:text-slate-300"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-3 relative">
            <label className="text-lg font-semibold text-slate-700 dark:text-slate-200">
              Password
            </label>
            <input
              type={isShowPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                  message: "Must include at least one letter and one number",
                },
              })}
              placeholder="Enter your password"
              className="w-full p-5 bg-slate-50 dark:bg-slate-800 border-none rounded focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 text-slate-600 dark:text-slate-300"
            />
            <span
              className="absolute right-4 top-12 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="checkbox checkbox-sm rounded-none border-slate-300"
                id="terms"
                {...register("terms", {
                  required: "You must accept the terms",
                })}
              />
              <label
                htmlFor="terms"
                className="text-slate-500 dark:text-slate-400 font-medium cursor-pointer"
              >
                Accept{" "}
                <span className="font-bold text-slate-700 dark:text-slate-300">
                  Terms & Conditions
                </span>
              </label>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm">{errors.terms.message}</p>
            )}
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
