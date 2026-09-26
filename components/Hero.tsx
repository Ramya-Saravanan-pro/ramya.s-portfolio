"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  {
    title: ["Good ideas need", "a great digital space."],
    body: "I turn rough concepts into polished websites, products and experiences that feel intentional from the first click.",
    visual: "interface",
  },
  {
    title: ["Made for people,", "not just screens."],
    body: "I care about the small details — how something looks, feels, moves and ultimately helps a business work better.",
    visual: "stack",
  },
  {
    title: ["From first sketch", "to live URL."],
    body: "Design, development, integrations and deployment come together to turn an idea into something people can actually use.",
    visual: "pipeline",
  },
  {
    title: ["A little design.", "A little code.", "A lot of curiosity."],
    body: "I enjoy exploring better ways to build digital experiences for modern brands, businesses and people.",
    visual: "network",
  },
  {
    title: ["Something worth", "building?"],
    body: "Let's turn the idea in your head into something clear, useful and memorable.",
    visual: "signal",
  },
];

const AUTOPLAY_MS = 5800;
const ease = [0.16, 1, 0.3, 1] as const;

/* ---------- small line-icon primitives, reused inside the SVG scenes ---------- */

function IconPencil({ x, y, s = 1, color = "var(--deep-lilac)" }: { x: number; y: number; s?: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M-6 6 L5 -5 L9 -1 L-2 10 L-7 11 Z" />
      <path d="M2 -8 L8 -2" />
    </g>
  );
}

function IconPalette({ x, y, s = 1, color = "var(--deep-lilac)" }: { x: number; y: number; s?: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M0 -9a9 9 0 1 0 0 18c1.4 0 2-.8 2-2s-.6-1.8-.6-2.6c0-1.1.9-1.9 2-1.9h2.4A4.2 4.2 0 0 0 10 0 9 9 0 0 0 0-9Z" />
      <circle cx="-4.5" cy="-3" r="1.3" fill={color} stroke="none" />
      <circle cx="0" cy="-6" r="1.3" fill={color} stroke="none" />
      <circle cx="4.5" cy="-3" r="1.3" fill={color} stroke="none" />
    </g>
  );
}

function IconCode({ x, y, s = 1, color = "var(--deep-lilac)" }: { x: number; y: number; s?: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M-4 -8 L-10 0 L-4 8" />
      <path d="M4 -8 L10 0 L4 8" />
    </g>
  );
}

function IconRocket({ x, y, s = 1, color = "var(--deep-lilac)" }: { x: number; y: number; s?: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M0 -10c3 2 5 6 5 11 0 2-1.5 4-5 6-3.5-2-5-4-5-6 0-5 2-9 5-11Z" />
      <circle cx="0" cy="-3" r="1.6" />
      <path d="M-5 4c-3 0-4 3-4 6 3-1 4-2 4-4" />
      <path d="M5 4c3 0 4 3 4 6-3-1-4-2-4-4" />
    </g>
  );
}

function IconEnvelope({ x, y, s = 1, color = "var(--deep-lilac)" }: { x: number; y: number; s?: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <rect x="-11" y="-8" width="22" height="16" rx="3" />
      <path d="M-11 -6 L0 2 L11 -6" />
    </g>
  );
}

/* ---------- scene artwork ---------- */

function Artwork({ type }: { type: string }) {
  if (type === "interface") {
    return (
      <svg viewBox="0 0 420 420" className="h-full w-full" fill="none">
        <motion.circle
          cx="210" cy="210" r="168"
          stroke="var(--line)" strokeDasharray="2 8" strokeWidth={1}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "210px 210px" }}
        />
        <rect x="46" y="70" width="328" height="252" rx="20" fill="var(--cream)" stroke="var(--line)" strokeWidth={1.5} />
        <rect x="46" y="70" width="328" height="42" rx="20" fill="var(--soft-lilac)" opacity={0.6} />
        <circle cx="70" cy="91" r="5" fill="var(--line)" />
        <circle cx="88" cy="91" r="5" fill="var(--lilac)" />
        <circle cx="106" cy="91" r="5" fill="var(--deep-lilac)" />
        <line x1="46" y1="112" x2="374" y2="112" stroke="var(--line)" strokeWidth={1} />

        <motion.rect
          x="70" y="134" width="140" height="96" rx="14" fill="var(--soft-lilac)"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <rect x="230" y="140" width="104" height="8" rx="4" fill="var(--line)" />
        <rect x="230" y="160" width="80" height="8" rx="4" fill="var(--line)" />
        <rect x="230" y="180" width="92" height="8" rx="4" fill="var(--line)" />
        <rect x="230" y="208" width="70" height="22" rx="11" fill="var(--plum)" />

        <rect x="70" y="252" width="110" height="34" rx="17" fill="var(--plum)" />
        <rect x="192" y="252" width="110" height="34" rx="17" fill="none" stroke="var(--line)" strokeWidth={1.5} />

        <motion.g
          animate={{ x: [0, 14, 0], y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="322" cy="290" r="20" fill="var(--deep-lilac)" />
          <path d="M314 282 L322 298 L326 291 L333 288 Z" fill="var(--cream)" />
        </motion.g>
      </svg>
    );
  }

  if (type === "stack") {
    const layers = [
      { label: "Deploy", y: 90, fill: "var(--plum)", text: "var(--cream)" },
      { label: "Develop", y: 168, fill: "var(--soft-lilac)", text: "var(--plum)" },
      { label: "Design", y: 246, fill: "var(--cream)", text: "var(--plum)", stroke: true },
    ];
    return (
      <svg viewBox="0 0 420 420" className="h-full w-full" fill="none">
        <line x1="210" y1="60" x2="210" y2="340" stroke="var(--line)" strokeDasharray="3 6" strokeWidth={1} />
        {layers.map((layer, i) => (
          <motion.g
            key={layer.label}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.7, ease }}
          >
            <rect
              x="80" y={layer.y} width="260" height="76" rx="18"
              fill={layer.fill}
              stroke={layer.stroke ? "var(--line)" : "none"}
              strokeWidth={1.5}
            />
            <circle cx="112" cy={layer.y + 38} r="14" fill="rgba(0,0,0,0.06)" />
            <text x="140" y={layer.y + 34} fontSize="15" fontFamily="serif" fontStyle="italic" fill={layer.text}>
              {layer.label}
            </text>
            <rect x="140" y={layer.y + 44} width="150" height="6" rx="3" fill={layer.text} opacity={0.25} />
          </motion.g>
        ))}
        <motion.g
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* <rect x="270" y="52" width="72" height="26" rx="13" fill="var(--cream)" stroke="var(--line)" strokeWidth={1.2} />
          <text x="282" y="69" fontSize="11" letterSpacing="1" fill="var(--muted)">v1.0</text> */}
        </motion.g>
      </svg>
    );
  }

  if (type === "pipeline") {
    const nodes = [
      { x: 70, label: "Sketch", Icon: IconPencil },
      { x: 163, label: "Design", Icon: IconPalette },
      { x: 256, label: "Code", Icon: IconCode },
      { x: 349, label: "Ship", Icon: IconRocket },
    ];
    return (
      <svg viewBox="0 0 420 300" className="h-full w-full" fill="none">
        <line x1="70" y1="150" x2="349" y2="150" stroke="var(--line)" strokeDasharray="4 7" strokeWidth={1.5} />
        <motion.circle
          r="6" fill="var(--plum)"
          animate={{ cx: [70, 163, 256, 349, 349, 70], cy: 150 }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", times: [0, 0.22, 0.44, 0.66, 0.9, 1] }}
        />
        {nodes.map(({ x, label, Icon }, i) => (
          <motion.g
            key={label}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.12, duration: 0.6, ease }}
          >
            <circle cx={x} cy="150" r="27" fill="var(--cream)" stroke="var(--line)" strokeWidth={1.5} />
            <Icon x={x} y={150} />
            <text x={x} y="204" fontSize="11" textAnchor="middle" letterSpacing="1.5" fill="var(--muted)">
              {label.toUpperCase()}
            </text>
          </motion.g>
        ))}
      </svg>
    );
  }

  if (type === "network") {
    const satellites = [
      { x: 110, y: 120, label: "design" },
      { x: 320, y: 130, label: "code" },
      { x: 210, y: 330, label: "curiosity" },
    ];
    return (
      <svg viewBox="0 0 420 420" className="h-full w-full" fill="none">
        {satellites.map((s, i) => (
          <motion.line
            key={s.label}
            x1="210" y1="215" x2={s.x} y2={s.y}
            stroke="var(--line)" strokeWidth={1.2}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: i * 0.2, duration: 0.9, ease }}
          />
        ))}

        <motion.circle
          cx="210" cy="215" r="46"
          fill="var(--soft-lilac)"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M210 190 L219 206 L236 215 L219 224 L210 240 L201 224 L184 215 L201 206 Z"
          fill="var(--deep-lilac)"
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "210px 215px" }}
        />

        {satellites.map((s, i) => (
          <motion.g
            key={s.label}
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 3.6 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
          >
            <circle cx={s.x} cy={s.y} r="30" fill="var(--cream)" stroke="var(--line)" strokeWidth={1.5} />
            <text x={s.x} y={s.y + 4} fontSize="10.5" textAnchor="middle" letterSpacing="1" fill="var(--plum)">
              {s.label}
            </text>
          </motion.g>
        ))}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 420 420" className="h-full w-full" fill="none">
      <motion.rect
        x="118" y="46" width="256" height="256" rx="40"
        fill="var(--plum)"
        animate={{ scale: [1, 1.04, 1], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "246px 174px" }}
      />
      <text x="40" y="230" fontSize="86" fontFamily="serif" fontStyle="italic" fill="var(--deep-lilac)">
        Hello.
      </text>

      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "340px 340px" }}
      >
        <circle cx="340" cy="340" r="38" fill="var(--cream)" stroke="var(--lilac)" strokeWidth={1.5} />
      </motion.g>
      <g transform="translate(340 340)">
        <IconEnvelope x={0} y={0} color="var(--lilac)" />
      </g>

      {[...Array(5)].map((_, row) =>
        [...Array(5)].map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={40 + col * 11}
            cy={330 + row * 11}
            r="1.4"
            fill="var(--line)"
          />
        ))
      )}
    </svg>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const restartTimer = useRef<() => void>(() => {});

  const goTo = useCallback((index: number) => {
    setActive(((index % slides.length) + slides.length) % slides.length);
    setProgressKey((k) => k + 1);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const previous = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(next, AUTOPLAY_MS);
    restartTimer.current = () => window.clearInterval(timer);
    return () => window.clearInterval(timer);
  }, [next, paused]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") previous();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, previous]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "var(--cream)", color: "var(--plum)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 -top-32 h-[430px] w-[430px] rounded-full blur-3xl"
          style={{ backgroundColor: "var(--soft-lilac)", opacity: 0.5 }}
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{ backgroundColor: "var(--lilac)", opacity: 0.16 }}
        />
        <svg className="absolute inset-0 h-full w-full opacity-[0.4]">
          <defs>
            <pattern id="grain" width="26" height="26" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1" fill="var(--line)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grain)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col px-6 pb-8 pt-28 md:px-10 md:pt-32">
        <div className="grid flex-1 items-center gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              {/* <span
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.2em]"
                style={{ borderColor: "var(--line)", color: "var(--muted)" }}
              >
                <motion.span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "#4ade80" }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                Available for new projects
              </span> */}
              {/* <span
                className="text-[11px] uppercase tracking-[0.25em]"
                style={{ color: "var(--muted)" }}
              >
                {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span> */}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -35 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 35 }}
                transition={{ duration: 0.7, ease }}
                aria-live="polite"
              >
                <motion.h1
                  key={`title-${active}`}
                  initial="hidden"
                  animate="show"
                  className="max-w-[950px] font-serif font-normal leading-[0.86] tracking-[-0.06em]"
                  style={{ fontSize: "clamp(4rem, 8.4vw, 8.5rem)" }}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
                  }}
                >
                  {slides[active].title.map((line, index) => (
                    <span key={line} className="block overflow-hidden pb-[0.06em]">
                      <motion.span
                        className="block"
                        variants={{
                          hidden: { y: "115%", opacity: 0, rotate: index % 2 === 0 ? 2 : -2 },
                          show: { y: 0, opacity: 1, rotate: 0, transition: { duration: 0.85, ease } },
                        }}
                      >
                        {line}
                      </motion.span>
                    </span>
                  ))}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.45, ease }}
                  className="mt-8 max-w-[520px] text-sm leading-7 md:text-[15px]"
                  style={{ color: "var(--muted)" }}
                >
                  {slides[active].body}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease }}
                  className="mt-9 flex items-center gap-4"
                >
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-3 rounded-full border px-6 py-3 text-[13px] font-medium transition-colors hover:bg-[var(--plum)] hover:text-[var(--cream)]"
                    style={{ borderColor: "var(--plum)" }}
                  >
                    Start a project
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  <a
                    href="#work"
                    className="text-[13px] font-medium underline decoration-[var(--line)] underline-offset-4 transition-colors hover:decoration-[var(--plum)]"
                    style={{ color: "var(--muted)" }}
                  >
                    View work
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden md:relative md:block md:h-[570px] md:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.94, x: 35 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.03, x: -35 }}
                transition={{ duration: 0.8, ease }}
                className="absolute inset-0"
              >
                <Artwork type={slides[active].visual} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-2 md:flex">
            {slides.map((slide, index) => (
              <button
                key={slide.title.join("-")}
                type="button"
                onClick={() => goTo(index)}
                className="group relative flex h-6 w-6 items-center justify-center"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === active}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full transition-all duration-300 group-hover:scale-125"
                  style={{ backgroundColor: index === active ? "var(--plum)" : "var(--line)" }}
                />
              </button>
            ))}
          </div>

          <div className="relative h-px flex-1 overflow-hidden" style={{ backgroundColor: "var(--line)" }}>
            <motion.div
              key={progressKey || active}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: paused ? undefined : 1 }}
              transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
              className="absolute inset-y-0 left-0 w-full origin-left"
              style={{ backgroundColor: "var(--plum)" }}
            />
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={previous}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:-translate-x-0.5 hover:bg-[var(--plum)] hover:text-[var(--cream)]"
              style={{ borderColor: "var(--line)" }}
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:translate-x-0.5 hover:bg-[var(--plum)] hover:text-[var(--cream)]"
              style={{ borderColor: "var(--line)" }}
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}