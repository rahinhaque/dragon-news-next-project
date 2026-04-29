import {Poppins } from "next/font/google";
import "./globals.css";

import NextThemeProvider from "@/provider/NextThemeProvider";



const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400" , "500" , "700"]
});

export const metadata = {
  title: "Dragon News Online",
  description:
    "This is the best online news Portal in current generetions, Where you can find International news, Tranding news, News of the sports, entertainment and culture. You can also join as reporter Senior Journalist , Photojournalist by applying in the career section. Our Mission is to unveil the true news of the world Uncompromising Integrity, Deep Investigation."
};

// src/app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <body>
        <NextThemeProvider>
           {children}
        </NextThemeProvider>
      </body>
    </html>
  );
}
