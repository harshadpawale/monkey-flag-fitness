import { SITE_LINKS } from "@/lib/site-data";

export function TrainTrack() {
  return (
    <section id="traintrack" className="scroll-mt-32 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="font-heading text-[11px] tracking-[0.28em] text-primary">
            Member app
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl">
            Your training, tracked. Get the TrainTrack app.
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
            Monkey Flag members use TrainTrack to reserve class spots, view daily
            WODs before stepping into the box, log weights and times, and
            celebrate PRs with the tribe.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={SITE_LINKS.trainTrackRegisterUrl}
              className="inline-flex h-12 items-center justify-center bg-primary px-5 font-heading text-sm uppercase tracking-[0.16em] text-primary-foreground"
            >
              Complete TrainTrack Member Registration →
            </a>
            <div className="flex flex-col gap-3 sm:flex-row">
              <StoreButton href={SITE_LINKS.trainTrackIosUrl} label="Download on the App Store" store="iOS" />
              <StoreButton href={SITE_LINKS.trainTrackAndroidUrl} label="Get it on Google Play" store="Android" />
            </div>
          </div>
        </div>
        <PhoneMockup />
      </div>
    </section>
  );
}

function StoreButton({
  href,
  label,
  store,
}: {
  href: string;
  label: string;
  store: "iOS" | "Android";
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 border border-zinc-800 px-4 py-3 hover:border-zinc-600"
    >
      {store === "iOS" ? <AppleMark /> : <PlayMark />}
      <span className="text-left">
        <span className="block text-[10px] uppercase tracking-[0.16em] text-zinc-500">
          {store}
        </span>
        <span className="font-heading text-xs uppercase tracking-[0.12em]">{label}</span>
      </span>
    </a>
  );
}

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-7 shrink-0 fill-current" aria-hidden>
      <path d="M16.365 1.43c0 1.14-.42 2.09-1.24 2.86-.91.86-1.98 1.37-3.16 1.29-.12-1.1.4-2.17 1.2-2.92.91-.86 2.07-1.5 3.2-1.23zm3.4 16.86c-.9 1.37-1.87 2.72-3.32 2.74-1.43.03-1.89-.85-3.52-.85-1.64 0-2.14.82-3.5.88-1.4.05-2.47-1.47-3.38-2.83-1.86-2.8-3.27-7.91-1.37-11.37.94-1.72 2.62-2.81 4.44-2.84 1.38-.03 2.68.93 3.52.93.83 0 2.4-1.15 4.05-.98.69.03 2.62.28 3.86 2.12-.1.06-2.3 1.34-2.27 4.02.03 3.19 2.8 4.25 2.83 4.26-.03.08-.44 1.51-1.34 2.92z" />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-7 shrink-0 fill-current" aria-hidden>
      <path d="M3.6 2.7c-.37.2-.6.62-.6 1.12v16.36c0 .5.23.92.6 1.12l9.4-9.3-9.4-9.3zm11.02 4.18L12.1 9.4l2.7 2.67 5.38-3.08c.64-.37.64-1.01 0-1.38l-5.56-3.16zM12.1 14.6l2.52 2.52 5.56-3.16c.64-.37.64-1.01 0-1.38L14.8 9.4 12.1 12.07v2.53zM4.86 21.7 11.2 15.4l-2.58-2.55-3.76 8.85z" />
    </svg>
  );
}

function PhoneMockup() {
  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="rounded-[2.2rem] border border-zinc-700 bg-[#121316] p-3 shadow-[0_0_80px_-20px_rgba(46,143,214,0.45)]">
        <div className="rounded-[1.7rem] border border-zinc-800 bg-[#0A0A0B] p-4">
          <p className="text-center font-heading text-[10px] tracking-[0.3em] text-zinc-500">
            TrainTrack · Monkey Flag
          </p>
          <div className="mt-4 border border-zinc-800 p-4">
            <p className="font-heading text-[11px] tracking-[0.2em] text-primary">
              Today · Strength + Metcon
            </p>
            <p className="mt-2 font-heading text-2xl">WOD: Engine Day</p>
            <p className="mt-3 text-xs leading-6 text-zinc-400">
              Back squat 5x5 @ 75%
              <br />
              Then 12 min AMRAP:
              <br />
              10 hang power cleans · 12 box jumps · 200m run
            </p>
          </div>
          <div className="mt-3 border border-zinc-800 p-4">
            <p className="font-heading text-[11px] tracking-[0.2em] text-zinc-500">
              Leaderboard
            </p>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Vikram P.</span>
                <span className="text-primary">9 + 8</span>
              </li>
              <li className="flex justify-between text-zinc-400">
                <span>Neha S.</span>
                <span>8 + 12</span>
              </li>
              <li className="flex justify-between text-zinc-400">
                <span>Meera D.</span>
                <span>8 + 4</span>
              </li>
            </ul>
          </div>
          <div className="mt-3 bg-primary p-4 text-primary-foreground">
            <p className="font-heading text-[11px] tracking-[0.18em]">
              Class booked
            </p>
            <p className="mt-1 text-sm">Thu 18:45 · CrossFit Group Class</p>
          </div>
        </div>
      </div>
    </div>
  );
}
