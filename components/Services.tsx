"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Responsive websites and web applications built around the way your business actually works.",
  },
  {
    number: "02",
    title: "E-commerce",
    description:
      "Store experiences that make products easier to discover, understand and buy.",
  },
  {
    number: "03",
    title: "Automation",
    description:
      "Connect your everyday tools and remove repetitive tasks from your workflow.",
  },
  {
    number: "04",
    title: "Digital Experiences",
    description:
      "Clean, thoughtful interfaces that make a brand feel clear, modern and easy to use.",
  },
  {
    number: "05",
    title: "Analytics",
    description:
      "Set up the right tracking so you can understand what people do after they reach your website.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-28 md:py-40"
      style={{
        backgroundColor: "var(--plum)",
        color: "var(--cream)",
      }}
    >
      <div className="mx-auto max-w-[1450px] px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-[10px] uppercase tracking-[0.28em]"
              style={{ color: "var(--lilac)" }}
            >
              Services
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif leading-[0.9] tracking-[-0.05em]"
              style={{
                fontSize: "clamp(4rem, 9vw, 9rem)",
              }}
            >
              What I
              <br />
              <span style={{ color: "var(--lilac)" }}>can build.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-[360px] text-sm leading-7"
            style={{ color: "rgba(251,249,245,.55)" }}
          >
            Digital solutions built with a focus on clarity, usability and
            the actual problem behind the project.
          </motion.p>
        </div>

        {/* Service index */}
        <div
          className="border-t"
          style={{ borderColor: "rgba(251,249,245,.16)" }}
        >
          {services.map((service, index) => (
            <ServiceRow
              key={service.number}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-5 flex flex-col gap-6 pt-10 md:flex-row md:items-center md:justify-between"
          style={{ borderColor: "rgba(251,249,245,.16)" }}
        >
          <p
            className="font-serif leading-tight tracking-[-0.03em]"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)",
            }}
          >
            One idea.
            <span style={{ color: "var(--lilac)" }}> Many ways to build it.</span>
          </p>

          <a
            href="#contact"
            className="group flex w-fit items-center gap-3 text-[10px] uppercase tracking-[0.2em]"
            style={{ color: "var(--cream)" }}
          >
            Start a conversation
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              style={{ borderColor: "rgba(251,249,245,.25)" }}
            >
              <ArrowUpRight size={15} strokeWidth={1.5} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceRow({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const detail = [
    {
      intro: "I start with the business goal, then shape the structure, interface and functionality around it.",
      steps: ["Understand", "Design", "Build", "Launch"],
    },
    {
      intro: "I focus on making the path from product discovery to checkout feel simple, clear and trustworthy.",
      steps: ["Discover", "Structure", "Optimise", "Convert"],
    },
    {
      intro: "I map repetitive tasks, connect the right tools and create flows that quietly work in the background.",
      steps: ["Map", "Connect", "Automate", "Improve"],
    },
    {
      intro: "I combine visual direction with interaction and development so every part of the experience feels connected.",
      steps: ["Direction", "Interface", "Motion", "Refine"],
    },
    {
      intro: "I set up useful tracking and turn website behaviour into information you can actually act on.",
      steps: ["Track", "Measure", "Understand", "Act"],
    },
  ][index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay: index * 0.06,
      }}
      className="group relative border-b"
      style={{ borderColor: "rgba(251,249,245,.16)" }}
    >
      {/* Hover preview */}
      <div className="pointer-events-none absolute left-[12%] right-[4%] top-1/2 z-20 hidden -translate-y-1/2 md:block">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
            x: 30,
            clipPath: "inset(0 0 0 100%)",
          }}
          whileHover={{
            opacity: 1,
            scale: 1,
            x: 0,
            clipPath: "inset(0 0 0 0%)",
          }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute right-0 top-1/2 w-[390px] -translate-y-1/2 rounded-[28px] border p-6 shadow-2xl"
          style={{
            borderColor: "rgba(184,161,217,.35)",
            backgroundColor: "rgba(36,27,45,.96)",
            boxShadow: "0 24px 80px rgba(0,0,0,.28)",
          }}
        >
          <div className="relative overflow-hidden">
            <motion.div
              animate={{
                x: ["-20%", "120%"],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-10 h-32 w-20 rotate-12 blur-2xl"
              style={{
                backgroundColor: "var(--lilac)",
                opacity: 0.14,
              }}
            />

            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <span
                  className="text-[9px] uppercase tracking-[0.22em]"
                  style={{ color: "var(--lilac)" }}
                >
                  How I work
                </span>

                <span
                  className="text-[10px]"
                  style={{ color: "rgba(251,249,245,.35)" }}
                >
                  {service.number}
                </span>
              </div>

              <h4
                className="font-serif text-3xl tracking-[-0.035em]"
                style={{ color: "var(--cream)" }}
              >
                {service.title}
              </h4>

              <p
                className="mt-4 text-xs leading-6"
                style={{ color: "rgba(251,249,245,.58)" }}
              >
                {detail.intro}
              </p>

              <div className="mt-6 grid grid-cols-4 gap-2">
                {detail.steps.map((step, stepIndex) => (
                  <div key={step} className="relative">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      animate={{ scaleX: [0.35, 1, 0.35] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: stepIndex * 0.18,
                        ease: "easeInOut",
                      }}
                      className="mb-2 h-px origin-left"
                      style={{
                        backgroundColor:
                          stepIndex === 0
                            ? "var(--lilac)"
                            : "rgba(251,249,245,.22)",
                      }}
                    />

                    <span
                      className="text-[8px] uppercase tracking-[0.12em]"
                      style={{
                        color:
                          stepIndex === 0
                            ? "var(--lilac)"
                            : "rgba(251,249,245,.4)",
                      }}
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2">
                {[0, 1, 2].map((dot) => (
                  <motion.span
                    key={dot}
                    animate={{
                      y: [0, -4, 0],
                      opacity: [0.35, 1, 0.35],
                    }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      delay: dot * 0.18,
                    }}
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      backgroundColor:
                        dot === 1
                          ? "var(--lilac)"
                          : "rgba(251,249,245,.35)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 origin-left"
        initial={{ scaleX: 0, opacity: 0 }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          background:
            "linear-gradient(90deg, rgba(184,161,217,.13), rgba(184,161,217,.035), transparent)",
        }}
      />

      <motion.div
        className="absolute left-0 top-0 h-full w-1"
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          backgroundColor: "var(--lilac)",
          transformOrigin: "top",
        }}
      />

      <div className="relative grid gap-5 py-9 md:grid-cols-12 md:items-center md:gap-6 md:py-11">
        <div
          className="text-[10px] tracking-[0.18em] md:col-span-1"
          style={{ color: "rgba(251,249,245,.35)" }}
        >
          {service.number}
        </div>

        <div className="md:col-span-5">
          <motion.h3
            className="font-serif leading-none tracking-[-0.035em]"
            whileHover={{
              x: 12,
              color: "var(--lilac)",
            }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              fontSize: "clamp(2rem, 4vw, 4.2rem)",
            }}
          >
            {service.title}
          </motion.h3>
        </div>

        <div className="md:col-span-5">
          <p
            className="max-w-[460px] text-sm leading-6 transition-transform duration-500 group-hover:translate-x-2"
            style={{ color: "rgba(251,249,245,.55)" }}
          >
            {service.description}
          </p>
        </div>

        <div className="flex md:col-span-1 md:justify-end">
          <motion.div
            className="flex h-11 w-11 items-center justify-center rounded-full border"
            whileHover={{
              rotate: 45,
              scale: 1.1,
              backgroundColor: "var(--lilac)",
              color: "var(--plum)",
            }}
            transition={{ duration: 0.35 }}
            style={{
              borderColor: "rgba(251,249,245,.22)",
            }}
          >
            <ArrowUpRight size={17} strokeWidth={1.5} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
