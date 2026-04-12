import { NotifyForm } from "./components/notify-form";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(18,48,40,0.55),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_100%,rgba(229,152,140,0.1),transparent_60%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(3,7,6,0.85))]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px]"
        aria-hidden
      />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-4 py-16 text-center sm:px-8">
        <p className="mb-3 max-w-md text-pretty font-mono text-[0.7rem] leading-snug tracking-wide text-emerald-600/90 sm:text-xs">
          Moracle and Chaya Present:
        </p>
        <h1 className="font-display text-5xl font-semibold tracking-tight text-zinc-50 sm:text-6xl md:text-7xl">
          youwill<span className="text-coral-500">.</span>live
        </h1>
        <p className="mt-6 font-display text-2xl font-medium tracking-wide text-emerald-100/90 sm:text-3xl">
          Coming Soon
        </p>
        <p className="mt-4 max-w-md text-balance text-base leading-relaxed text-zinc-400 sm:text-lg">
          Your choices have consequences. We do the math.
        </p>
        <div className="mt-10 w-full">
          <NotifyForm />
        </div>
      </main>
    </div>
  );
}
