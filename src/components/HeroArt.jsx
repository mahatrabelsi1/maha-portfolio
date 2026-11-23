// Original "3D" hero composition built from CSS gradients and inline SVG.
// Themed on the research: neural networks, biomedical signals, medical imaging.

function Sparkle({ className = "", fill = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 0c.8 6.4 5.6 11.2 12 12-6.4.8-11.2 5.6-12 12-.8-6.4-5.6-11.2-12-12C6.4 11.2 11.2 6.4 12 0Z" fill={fill} />
    </svg>
  );
}

function Ball({ size, className, style, colors = ["#ffffff", "#a5b4fc", "#4f46e5", "#1e1b4b"] }) {
  return (
    <div
      className={`absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 32% 28%, ${colors[0]} 0%, ${colors[1]} 18%, ${colors[2]} 55%, ${colors[3]} 100%)`,
        boxShadow: "0 18px 40px -12px rgba(30, 27, 75, 0.55)",
        ...style,
      }}
    />
  );
}

export function HeroArt() {
  return (
    <div className="relative h-[300px] w-full select-none sm:h-[380px] lg:h-[440px]" aria-hidden="true">
      {/* Ringed planet */}
      <div className="absolute left-[2%] top-[4%] animate-float-slow" style={{ animationDelay: "-2s" }}>
        <div className="relative h-24 w-24 sm:h-28 sm:w-28">
          <Ball size="100%" className="inset-0" colors={["#ffffff", "#7dd3fc", "#6366f1", "#312e81"]} />
          <svg viewBox="0 0 200 80" className="absolute -left-10 top-1/2 w-[190%] -translate-y-1/2 -rotate-12">
            <defs>
              <linearGradient id="ring" x1="0" x2="1">
                <stop offset="0" stopColor="#c4b5fd" />
                <stop offset=".5" stopColor="#38bdf8" />
                <stop offset="1" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <ellipse cx="100" cy="40" rx="92" ry="20" fill="none" stroke="url(#ring)" strokeWidth="7" opacity=".9" />
          </svg>
        </div>
      </div>

      {/* Big glass neural orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="animate-float">
          <div
            className="relative h-44 w-44 rounded-full sm:h-56 sm:w-56 lg:h-64 lg:w-64"
            style={{
              background:
                "radial-gradient(circle at 30% 25%, rgba(255,255,255,.95) 0%, rgba(199,210,254,.9) 14%, #6d7cff 48%, #3730a3 78%, #1e1b4b 100%)",
              boxShadow: "0 40px 80px -24px rgba(49, 46, 129, .7), inset -18px -24px 50px rgba(15, 10, 60, .45)",
            }}
          >
            <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
              <g stroke="rgba(255,255,255,.75)" strokeWidth="1.6">
                <line x1="55" y1="70" x2="100" y2="50" />
                <line x1="55" y1="70" x2="80" y2="120" />
                <line x1="100" y1="50" x2="140" y2="85" />
                <line x1="80" y1="120" x2="140" y2="85" />
                <line x1="80" y1="120" x2="120" y2="150" />
                <line x1="140" y1="85" x2="120" y2="150" />
                <line x1="100" y1="50" x2="80" y2="120" />
                <line x1="140" y1="85" x2="160" y2="130" />
              </g>
              <g fill="#fff">
                <circle cx="55" cy="70" r="7" />
                <circle cx="100" cy="50" r="6" />
                <circle cx="140" cy="85" r="9" fill="#ffd166" />
                <circle cx="80" cy="120" r="8" />
                <circle cx="120" cy="150" r="6" fill="#ff8a8a" />
                <circle cx="160" cy="130" r="5" />
              </g>
            </svg>
            <div className="absolute left-[18%] top-[12%] h-8 w-14 -rotate-[30deg] rounded-full bg-white/60 blur-md" />
          </div>
        </div>
      </div>

      {/* Pulse / PPG chip */}
      <div className="absolute bottom-[8%] left-0 animate-float" style={{ "--r": "-6deg", animationDelay: "-1s" }}>
        <div className="rounded-2xl bg-white/90 px-4 py-3 shadow-[0_20px_40px_-15px_rgba(30,27,75,.5)] backdrop-blur">
          <svg viewBox="0 0 140 40" className="h-8 w-32">
            <path
              d="M0 22h28l6-10 7 22 9-30 7 26 6-8h20l6-10 7 22 9-30 7 26 6-8h12"
              fill="none"
              stroke="#ff6b6b"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="mt-1 font-display text-[11px] font-bold tracking-widest text-ink">PPG · BVP</p>
        </div>
      </div>

      {/* MRI tile */}
      <div className="absolute right-[2%] top-[8%] animate-float-slow" style={{ "--r": "8deg" }}>
        <div className="rounded-2xl bg-ink p-2.5 shadow-[0_20px_40px_-15px_rgba(10,12,18,.7)]">
          <svg viewBox="0 0 80 80" className="h-16 w-16 sm:h-20 sm:w-20">
            <defs>
              <radialGradient id="brain" cx=".45" cy=".4" r=".6">
                <stop offset="0" stopColor="#e5e7eb" />
                <stop offset=".7" stopColor="#6b7280" />
                <stop offset="1" stopColor="#1f2937" />
              </radialGradient>
            </defs>
            <ellipse cx="40" cy="40" rx="28" ry="32" fill="url(#brain)" />
            <path d="M40 10v60M26 26c6 4 8 10 6 16M54 26c-6 4-8 10-6 16" stroke="#374151" strokeWidth="1.5" fill="none" />
            <ellipse cx="30" cy="50" rx="6" ry="3.5" fill="#8b5cf6" />
            <ellipse cx="50" cy="50" rx="6" ry="3.5" fill="#38bdf8" />
          </svg>
          <p className="text-center font-display text-[10px] font-bold tracking-widest text-white/80">MRI</p>
        </div>
      </div>

      {/* EMNLP sticker */}
      <div className="absolute bottom-[14%] right-[4%] animate-float" style={{ "--r": "10deg", animationDelay: "-3s" }}>
        <div className="rounded-xl bg-sunny px-3 py-2 font-display text-sm font-bold text-ink shadow-[0_16px_30px_-12px_rgba(0,0,0,.45)]">
          EMNLP ’26 ★
        </div>
      </div>

      {/* Small floating balls and sparkles */}
      <Ball size={34} className="right-[24%] top-[2%] animate-float" style={{ animationDelay: "-4s" }} colors={["#fff", "#fecaca", "#ff6b6b", "#7f1d1d"]} />
      <Ball size={22} className="bottom-[4%] left-[42%] animate-float-slow" colors={["#fff", "#fde68a", "#f59e0b", "#78350f"]} />
      <Ball size={18} className="left-[30%] top-[18%] animate-float" style={{ animationDelay: "-2.5s" }} />
      <Sparkle className="absolute right-[30%] bottom-[30%] h-6 w-6 text-white animate-float" />
      <Sparkle className="absolute left-[24%] bottom-[36%] h-4 w-4 text-ink/80" />
    </div>
  );
}

export { Sparkle };
