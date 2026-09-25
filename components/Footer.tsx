"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
      style={{
        backgroundColor: "var(--plum)",
        color: "var(--cream)",
      }}
    >
      <div className="mx-auto max-w-[1450px] px-6 md:px-10">
        <div className="relative flex min-h-[72vh] flex-col justify-between py-16 md:py-20">
          <div className="flex items-center justify-between">
            <span
              className="text-[10px] uppercase tracking-[0.28em]"
              style={{ color: "var(--lilac)" }}
            >
              Get in touch
            </span>

            <span
              className="text-[10px] tracking-[0.18em]"
              style={{ color: "rgba(251,249,245,.35)" }}
            >
              2026
            </span>
          </div>

          <div className="relative py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p
                className="mb-7 text-sm"
                style={{ color: "rgba(251,249,245,.5)" }}
              >
                Have an idea, project or something you want to improve?
              </p>

              <a
                href="mailto:ramya.s.mca24@gmail.com"
                className="group block w-fit"
              >
                <h2
                  className="font-serif leading-[0.84] tracking-[-0.06em]"
                  style={{
                    fontSize: "clamp(4rem, 10.5vw, 10.5rem)",
                  }}
                >
                  Let&apos;s build
                  <br />
                  <span style={{ color: "var(--lilac)" }}>
                    something useful.
                  </span>
                </h2>

                <div className="mt-9 flex items-center gap-4">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-500 group-hover:rotate-45 group-hover:scale-110"
                    style={{
                      backgroundColor: "var(--lilac)",
                      color: "var(--plum)",
                    }}
                  >
                    <ArrowUpRight size={19} strokeWidth={1.5} />
                  </span>

                  <span
                    className="text-sm transition-colors duration-300 group-hover:text-[var(--lilac)]"
                    style={{ color: "var(--cream)" }}
                  >
                    ramya.s.mca24@gmail.com
                  </span>
                </div>
              </a>
            </motion.div>
          </div>

          <div
            className="grid gap-10 border-t pt-8 md:grid-cols-12"
            style={{ borderColor: "rgba(251,249,245,.14)" }}
          >
            <div className="md:col-span-4">
              <p
                className="font-serif text-2xl"
                style={{ color: "var(--cream)" }}
              >
                ramya.s
              </p>

              <p
                className="mt-2 max-w-[260px] text-xs leading-6"
                style={{ color: "rgba(251,249,245,.4)" }}
              >
                Web development, digital experiences and ideas brought to
                life.
              </p>
            </div>

            <div className="flex items-end justify-between gap-5 md:col-span-12 md:pt-6">
              <div className="flex gap-5">
                <a
                  href="https://www.linkedin.com/in/ramyasmca2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-[0.18em] transition-colors hover:text-[var(--lilac)]"
                  style={{ color: "rgba(251,249,245,.4)" }}
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/Ramya-Saravanan-pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-[0.18em] transition-colors hover:text-[var(--lilac)]"
                  style={{ color: "rgba(251,249,245,.4)" }}
                >
                  GitHub
                </a>
              </div>

              <p
                className="text-[10px]"
                style={{ color: "rgba(251,249,245,.3)" }}
              >
                © 2026 Ramya S
              </p>
            </div>
          </div>

          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, -30, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-20 top-1/3 hidden h-72 w-72 rounded-full blur-3xl md:block"
            style={{
              backgroundColor: "var(--deep-lilac)",
              opacity: 0.16,
            }}
          />

          <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, 25, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -bottom-32 left-1/3 hidden h-64 w-64 rounded-full blur-3xl md:block"
            style={{
              backgroundColor: "var(--lilac)",
              opacity: 0.08,
            }}
          />
        </div>
      </div>
    </footer>
  );
}