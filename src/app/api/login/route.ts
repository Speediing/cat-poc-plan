import { NextRequest, NextResponse } from "next/server";
import {
  createSessionToken,
  isAuthConfigured,
  sessionCookieOptions,
  verifyPassword,
} from "@/lib/siteAuth";

export async function POST(request: NextRequest) {
  if (!isAuthConfigured()) {
    return NextResponse.json(
      { error: "Site password is not configured." },
      { status: 503 },
    );
  }

  let password = "";
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body = (await request.json().catch(() => null)) as {
      password?: string;
    } | null;
    password = body?.password?.toString() ?? "";
  } else {
    const form = await request.formData().catch(() => null);
    password = form?.get("password")?.toString() ?? "";
  }

  const valid = await verifyPassword(password);
  if (!valid) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const token = await createSessionToken();
  if (!token) {
    return NextResponse.json(
      { error: "Could not create session." },
      { status: 500 },
    );
  }

  const secure =
    request.nextUrl.protocol === "https:" ||
    process.env.NODE_ENV === "production";

  const response = NextResponse.json({ ok: true });
  const opts = sessionCookieOptions(secure);
  response.cookies.set(opts.name, token, opts);
  return response;
}
