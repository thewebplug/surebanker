import { NextResponse } from "next/server";
import jwtDecode from "jwt-decode";

export function middleware(request) {
  // First, check if the request is for an image or static asset
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/assets') ||  // Add this if your images are in /assets
    request.nextUrl.pathname.includes('/images') ||    // Add this if you have an /images path
    request.nextUrl.pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // Define paths that don't require authentication
  const publicPaths = ["/", "/register", "/forgot-password", "/login"];

  // Check if the current path is in the public paths
  const isPublicPath = publicPaths.some(
    (path) =>
      request.nextUrl.pathname === path ||
      request.nextUrl.pathname.startsWith(`${path}/`)
  );

  // If it's a public path, allow access without a token
  if (isPublicPath) {
    return NextResponse.next();
  }

  // For other paths, check for a token in cookies
  const token = request.cookies.get("auth_token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // Decode the JWT token
    const decodedToken = jwtDecode(token);

    // Check if the token has expired
    if (decodedToken.exp * 1000 < Date.now()) {
      // Token has expired
      const response = NextResponse.redirect(new URL("/login", request.url));

      // Remove the expired token from cookies
      response.cookies.delete("auth_token");

      return response;
    }

    // Token is valid
    return NextResponse.next();
  } catch (error) {
    // If there's an error decoding the token, consider it invalid
    console.error("Error decoding token:", error);
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("auth_token");
    return response;
  }
}

export const config = {
  matcher: [
    // Skip all internal Next.js routes
    "/((?!api|_next/static|_next/image|favicon.ico|assets|images).*)",
  ],
};