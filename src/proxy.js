import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  // return NextResponse.redirect(new URL("/login", request.url));

 const session = await auth.api.getSession({
   headers: await headers(),
 });
 if (!session) {
   return NextResponse.redirect(new URL("/login", request.url));
 } else {
   return NextResponse.next();
 }
  
}
 

export const config = {
  matcher: ["/about" , "/career" ,"/news/:path*"],
};