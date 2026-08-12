import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE } from "@/lib/siteAuth";

export async function POST(request: NextRequest) {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, "", {
    httpOnly: true,
    secure:
      request.nextUrl.protocol === "https:" ||
      process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return response;
}
