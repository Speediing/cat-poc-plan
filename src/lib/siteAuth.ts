/**
 * Password-gate helpers for middleware + login API.
 * Edge-safe (Web Crypto). Secrets come from env — never hardcode.
 */

export const SESSION_COOKIE = "cat_poc_session";
export const SESSION_MAX_AGE_SEC = 60 * 60 * 24 * 14; // 14 days

const encoder = new TextEncoder();

function getSitePassword(): string {
  return process.env.SITE_PASSWORD?.trim() ?? "";
}

function getSessionSecret(): string {
  return process.env.SESSION_SECRET?.trim() ?? "";
}

/** True when both required env vars are present. */
export function isAuthConfigured(): boolean {
  return Boolean(getSitePassword() && getSessionSecret());
}

function timingSafeEqualBytes(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) {
    let unused = 0;
    for (let i = 0; i < a.length; i++) unused |= a[i] ?? 0;
    void unused;
    return false;
  }
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a[i]! ^ b[i]!;
  }
  return diff === 0;
}

/** Timing-safe string compare (UTF-8). */
export function timingSafeEqualString(a: string, b: string): boolean {
  return timingSafeEqualBytes(encoder.encode(a), encoder.encode(b));
}

export async function verifyPassword(password: string): Promise<boolean> {
  const expected = getSitePassword();
  if (!expected) return false;
  return timingSafeEqualString(password, expected);
}

function toBase64Url(bytes: ArrayBuffer | Uint8Array): string {
  const view = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let binary = "";
  for (let i = 0; i < view.length; i++) {
    binary += String.fromCharCode(view[i]!);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function fromBase64Url(value: string): Uint8Array | null {
  try {
    const padded = value.replace(/-/g, "+").replace(/_/g, "/");
    const pad = padded.length % 4 === 0 ? "" : "=".repeat(4 - (padded.length % 4));
    const binary = atob(padded + pad);
    const out = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i);
    return out;
  } catch {
    return null;
  }
}

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

async function signPayload(payload: string, secret: string): Promise<string> {
  const key = await hmacKey(secret);
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return toBase64Url(sig);
}

/** Create a signed session token: `exp.<hmac>`. */
export async function createSessionToken(): Promise<string | null> {
  const secret = getSessionSecret();
  if (!secret) return null;
  const exp = String(Date.now() + SESSION_MAX_AGE_SEC * 1000);
  const sig = await signPayload(exp, secret);
  return `${exp}.${sig}`;
}

/** Verify cookie value. Returns false if missing, expired, or tampered. */
export async function verifySessionToken(
  token: string | undefined | null,
): Promise<boolean> {
  if (!token) return false;
  const secret = getSessionSecret();
  if (!secret) return false;

  const [exp, sig] = token.split(".");
  if (!exp || !sig) return false;

  const expMs = Number(exp);
  if (!Number.isFinite(expMs) || Date.now() > expMs) return false;

  const expected = await signPayload(exp, secret);
  if (!timingSafeEqualString(sig, expected)) return false;

  // Ensure sig decoded as bytes for extra paranoia on empty secrets
  if (!fromBase64Url(sig)) return false;

  return true;
}

export function sessionCookieOptions(secure: boolean) {
  return {
    name: SESSION_COOKIE,
    httpOnly: true,
    secure,
    sameSite: "lax" as const,
    path: "/",
    maxAge: SESSION_MAX_AGE_SEC,
  };
}
