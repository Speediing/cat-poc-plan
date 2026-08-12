import { NextRequest, NextResponse } from "next/server";
import {
  SESSION_COOKIE,
  isAuthConfigured,
  verifySessionToken,
} from "@/lib/siteAuth";

const PUBLIC_PATHS = new Set(["/login", "/api/login", "/api/logout"]);

function isPublicAsset(pathname: string): boolean {
  if (pathname.startsWith("/_next")) return true;
  if (pathname === "/favicon.ico") return true;
  if (pathname === "/robots.txt") return true;
  if (/\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|woff2?)$/i.test(pathname)) {
    return true;
  }
  // Public images used on login / locked pages
  if (pathname.startsWith("/illustrations/")) return true;
  if (pathname.startsWith("/images/")) return true;
  return false;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_PATHS.has(pathname) || isPublicAsset(pathname)) {
    return NextResponse.next();
  }

  // Misconfigured deploy: fail closed in production, open in local/dev builds
  if (!isAuthConfigured()) {
    if (process.env.NODE_ENV === "production") {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/login";
      loginUrl.searchParams.set("error", "config");
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const ok = await verifySessionToken(token);

  if (ok) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = "/login";
  const next = pathname + request.nextUrl.search;
  if (next && next !== "/") {
    loginUrl.searchParams.set("next", next);
  }
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
