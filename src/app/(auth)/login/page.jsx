'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {

 const {register , handleSubmit , formState: {errors} } = useForm();


  const handleLoginFunc = async(data) => {
    // console.log(data);?
    const {email , password} = data;
    console.log(email , password);


    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res , error);
    if(error){
      alert(error.message);
    }
    if(res){
      alert("Login successful!");
    }
  }


  const [isShowPassword, setIsShowPassword] = useState(false);


  return (
    <div className="min-h-[85vh] flex justify-center items-center bg-slate-100 dark:bg-slate-900/50 py-10 px-4">
      <div className="w-full max-w-[600px] bg-white dark:bg-slate-900 p-8 md:p-16 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold text-center text-slate-700 dark:text-slate-100 mb-8">
          Login your account
        </h2>

        <hr className="border-slate-100 dark:border-slate-800 mb-8" />

        <form className="space-y-6" onSubmit={handleSubmit(handleLoginFunc)}>
          {/* Email Field */}
          <div className="space-y-3">
            <label className="text-lg font-semibold text-slate-700 dark:text-slate-200">
              Email address
            </label>
            <input
              type="email"
              {...register("email", { required: "Please enter a valid email" })}
              placeholder="Enter your email address"
              className="w-full p-5 bg-slate-50 dark:bg-slate-800 border-none rounded focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 text-slate-600 dark:text-slate-300"
            />
            {errors.email && (
              <p className="text-red-200">{errors.email.message}</p>
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
                required: "Please enter a valid password",
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
            <span className="absolute right-4 top-12 cursor-pointer" onClick={()=> setIsShowPassword(!isShowPassword)}>
              {isShowPassword ?  <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && (
              <p className="text-red-200">{errors.password.message}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-4 bg-zinc-700 dark:bg-zinc-800 text-white font-semibold text-xl rounded hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-all active:scale-[0.98]"
          >
            Login
          </button>
        </form>

        <p className="mt-8 text-center font-semibold text-slate-500 dark:text-slate-400">
          Dont&apos;t Have An Account ?{" "}
          <Link href="/signup" className="text-red-500 hover:underline ml-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
