import { useState } from "react";

type DayItem = {
  title: string;
  emoji: string;
  subtitle: string;
  imageSrc: string;
  imageFit?: "cover" | "contain";
};

const WEEK: DayItem[] = [
  {
    title: "Rose Day",
    emoji: "🌹",
    subtitle: "A little rose to start the week.",
    imageSrc: "/rose.webp",
    imageFit: "contain",
  },
  {
    title: "Propose Day",
    emoji: "💍",
    subtitle: "Say it out loud (or quietly) — you mean a lot.",
    imageSrc: "/proposal-ring.webp",
  },
  {
    title: "Chocolate Day",
    emoji: "🍫",
    subtitle: "Something sweet, just like you.",
    imageSrc: "/chocolate.webp",
  },
  {
    title: "Teddy Day",
    emoji: "🧸",
    subtitle: "A hug, in plush form.",
    imageSrc: "/teddy.webp",
  },
  {
    title: "Promise Day",
    emoji: "🤝",
    subtitle: "To show up, to care, to stay kind.",
    imageSrc: "/promise-day.webp",
  },
  {
    title: "Hug Day",
    emoji: "🤗",
    subtitle: "Warm, safe, and close.",
    imageSrc: "/hug.webp",
    imageFit: "contain",
  },
  {
    title: "Kiss Day",
    emoji: "💋",
    subtitle: "A moment sealed with love.",
    imageSrc: "/kiss.webp",
  },
  {
    title: "Valentine's Day",
    emoji: "❤️",
    subtitle: "The day for us.",
    imageSrc: "/valentine.webp",
  },
];

function DayCard({ item, dayNumber }: { item: DayItem; dayNumber: number }) {
  const fitClass =
    item.imageFit === "contain" ? "object-contain p-2" : "object-cover";

  return (
    <div className="rounded-3xl border bg-white/70 backdrop-blur px-5 py-5 shadow-sm animate-fadeUp">
      <div className="mb-4 overflow-hidden rounded-2xl border border-white/60 bg-white/60">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-100">
          <img
            src={item.imageSrc}
            alt={item.title}
            className={`absolute inset-0 block h-full w-full object-center ${fitClass}`}
            loading="eager"
          />
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 text-white text-2xl">
          {item.emoji}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="text-lg font-semibold text-neutral-900">
              {item.title}
            </div>
            <div className="text-xs rounded-full bg-rose-50 text-rose-700 px-2 py-0.5 border border-rose-100">
              Day {dayNumber}
            </div>
          </div>
          <div className="mt-2 text-sm text-neutral-600">{item.subtitle}</div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [accepted, setAccepted] = useState(false);
  const [noClicks, setNoClicks] = useState(0);
  const [dayIndex, setDayIndex] = useState(0);
  const [showRestartAnim, setShowRestartAnim] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-rose-50 via-pink-50 to-white overflow-hidden">
      {/* Decorative Hearts Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="heart absolute top-10 left-10 scale-[0.3] rotate-[15deg] animate-pulse"></div>
        <div className="heart absolute top-40 right-20 scale-[0.5] -rotate-[10deg]"></div>
        <div className="heart absolute bottom-20 left-1/4 scale-[0.4] rotate-[25deg]"></div>
        <div className="heart absolute bottom-40 right-1/3 scale-[0.2] -rotate-[15deg] animate-pulse"></div>
        <div className="heart absolute top-1/2 left-10 scale-[0.3]"></div>
        <div className="heart absolute top-1/3 right-10 scale-[0.4] rotate-[10deg]"></div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl items-center justify-center px-4 py-10">
        {!accepted ? (
          <div className="w-full max-w-lg rounded-3xl border border-white/60 bg-white/70 backdrop-blur px-6 py-8 shadow-lg animate-softPop">
            <div className="text-center">
              <div className="mx-auto mb-3 h-12 w-12 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 text-white flex items-center justify-center text-2xl">
                ❤️
              </div>
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
                Will you be my Valentine?
              </h1>
              <p className="mt-2 text-sm text-neutral-600">
                (No Valentine content will appear until you press “Yes”.)
              </p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setAccepted(true);
                  setDayIndex(0);
                }}
                className="rounded-2xl px-4 py-3 font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-500 shadow-sm hover:brightness-105 active:brightness-95 focus:outline-none focus:ring-2 focus:ring-rose-400/70"
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => {
                  if (noClicks < 4) {
                    setNoClicks((n) => n + 1);
                  } else {
                    setAccepted(true);
                    setDayIndex(0);
                  }
                }}
                className={`rounded-2xl px-4 py-3 font-semibold transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 ${noClicks < 4
                  ? "text-neutral-800 bg-white border border-neutral-200 hover:bg-neutral-50 active:bg-neutral-100 focus:ring-neutral-300"
                  : "text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:brightness-105 active:brightness-95 focus:ring-rose-400/70"
                  }`}
              >
                {noClicks < 4 ? "No" : "Yes"}
              </button>
            </div>

            {noClicks > 0 ? (
              <div className="mt-4 text-center text-sm text-neutral-600">
                {noClicks === 1
                  ? "Take your time — I can wait."
                  : noClicks === 2
                    ? "Still no? That’s okay. I’ll ask nicely again."
                    : "I’m still here. The “Yes” button looks pretty cute though."}
              </div>
            ) : null}
          </div>
        ) : (
          <div className="w-full">
            <div className="mx-auto w-full max-w-2xl rounded-3xl border border-white/60 bg-white/60 backdrop-blur px-6 py-6 shadow-lg animate-softPop">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-medium text-rose-700">
                    You said yes.
                  </div>
                  <h1 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
                    Here’s our Valentine Week
                  </h1>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setAccepted(false);
                    setDayIndex(0);
                    setNoClicks(0);
                  }}
                  className="rounded-2xl px-3 py-2 text-sm font-semibold text-neutral-800 bg-white border border-neutral-200 hover:bg-neutral-50"
                >
                  Reset
                </button>
              </div>

              <div className="mt-5 bg-gradient-to-br from-rose-50 via-pink-50 to-white rounded-3xl border border-white/60 px-5 py-6 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm text-neutral-600">
                    Day {Math.min(dayIndex + 1, WEEK.length)} of {WEEK.length}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {WEEK[Math.min(dayIndex, WEEK.length - 1)].emoji}
                  </div>
                </div>

                <div className="mt-3">
                  {showRestartAnim ? (
                    <div className="rounded-3xl border bg-pink-200/80 px-5 py-10 shadow-lg animate-fadeUp flex flex-col items-center justify-center min-h-[180px] transition-all duration-700">
                      <div className="text-2xl font-bold text-pink-700 animate-bounce mb-2">Restarting...</div>
                    </div>
                  ) : dayIndex < WEEK.length ? (
                    <DayCard item={WEEK[dayIndex]} dayNumber={dayIndex + 1} />
                  ) : (
                    <div className="rounded-3xl border bg-white/70 backdrop-blur px-5 py-6 shadow-sm animate-fadeUp">
                      <div className="text-xl font-semibold text-neutral-900">
                        Completed ❤️
                      </div>
                      <div className="mt-2 text-sm text-neutral-600">
                        Thanks for going through Valentine Week with me.
                        <span className="block mt-1">BY PRABIN KARKI</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-5 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setDayIndex((i) => Math.max(0, i - 1))}
                    disabled={dayIndex <= 0 || showRestartAnim}
                    className="rounded-2xl px-4 py-3 font-semibold bg-white border border-neutral-200 shadow-sm hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={async () => {
                      if (dayIndex > WEEK.length - 1) {
                        setShowRestartAnim(true);
                        setTimeout(() => {
                          setShowRestartAnim(false);
                          setDayIndex(0);
                        }, 1200);
                      } else {
                        setDayIndex((i) => i + 1);
                      }
                    }}
                    className="flex-1 rounded-2xl px-4 py-3 font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-500 shadow-sm hover:brightness-105 active:brightness-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={showRestartAnim}
                  >
                    {dayIndex < WEEK.length - 1
                      ? "Next"
                      : dayIndex === WEEK.length - 1
                        ? "Finish"
                        : "Restart"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
