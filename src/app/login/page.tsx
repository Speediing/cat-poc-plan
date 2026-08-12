"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Lockup } from "@/components/Lockup";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(
    searchParams.get("error") === "config"
      ? "Site password is not configured on this deployment."
      : null,
  );
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setError(data?.error ?? "Incorrect password.");
        setPending(false);
        return;
      }

      const next = searchParams.get("next") || "/";
      router.replace(next.startsWith("/") ? next : "/");
      router.refresh();
    } catch {
      setError("Something went wrong. Try again.");
      setPending(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <Lockup />
      <p className="mt-10 text-[12px] font-medium tracking-[0.06em] text-cursor-orange uppercase">
        Private leave-behind
      </p>
      <h1 className="mt-3 text-[1.75rem] font-medium leading-[1.12] tracking-[-0.02em] text-ink">
        Enter the password to continue.
      </h1>

      <form onSubmit={onSubmit} className="mt-10 space-y-4">
        <label className="block">
          <span className="text-[13px] font-medium text-ink-faint">
            Password
          </span>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full rounded-xl border border-hairline-strong bg-white px-4 py-3 text-[16px] text-ink outline-none ring-cursor-orange/0 transition focus:ring-2"
          />
        </label>

        {error ? (
          <p className="text-[14px] leading-relaxed text-cursor-orange" role="alert">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={pending || !password}
          className="inline-flex w-full items-center justify-center rounded-full bg-ink px-5 py-3 text-[14px] font-medium text-canvas transition-opacity hover:opacity-85 disabled:opacity-40"
        >
          {pending ? "Checking…" : "Continue"}
        </button>
      </form>
    </div>
  );
}

export default function LoginPage() {
  return (
    <main className="relative min-h-screen bg-canvas">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-16 sm:px-10">
        <Suspense fallback={<div className="text-ink-muted">Loading…</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
