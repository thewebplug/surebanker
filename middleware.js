import { NextResponse } from "next/server";
import jwtDecode from "jwt-decode";

export function middleware(request) {
  try {
    return NextResponse.next();
  } catch (error) {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!api|_next/image).*)"],
};
