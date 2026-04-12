"use client";

import { useState } from "react";

export function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <p
        className="text-center text-sm text-emerald-400/90"
        role="status"
      >
        You’re on the list. We’ll be in touch.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
    >
      <label htmlFor="notify-email" className="sr-only">
        Email address
      </label>
      <input
        id="notify-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-h-12 flex-1 rounded-lg border border-white/10 bg-black/40 px-4 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none ring-coral-500/40 transition-[box-shadow,border-color] focus:border-coral-500/50 focus:ring-2"
      />
      <button
        type="submit"
        className="min-h-12 shrink-0 rounded-lg bg-coral-500 px-6 text-sm font-medium text-zinc-950 shadow-[0_0_24px_-4px_rgba(229,152,140,0.5)] transition-[transform,background-color,box-shadow] hover:bg-coral-400 hover:shadow-[0_0_32px_-4px_rgba(229,152,140,0.6)] active:scale-[0.98]"
      >
        Notify Me
      </button>
    </form>
  );
}
