"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const colors = {
  cream: "#fbf9f5",
  lilac: "#b8a1d9",
  deepLilac: "#8064a8",
  softLilac: "#e9e1f3",
  plum: "#241b2d",
  line: "#ded5e7",
};

export default function Navbar() {
  const { scrollY } = useScroll();

  const width = useTransform(
    scrollY,
    [0, 100],
    ["92%", "94%"]
  );

  const maxWidth = useTransform(
    scrollY,
    [0, 100],
    ["1440px", "1180px"]
  );

  const top = useTransform(
    scrollY,
    [0, 100],
    [0, 14]
  );

  const paddingX = useTransform(
    scrollY,
    [0, 100],
    [0, 18]
  );

  const paddingY = useTransform(
    scrollY,
    [0, 100],
    [24, 11]
  );

  const radius = useTransform(
    scrollY,
    [0, 100],
    [0, 999]
  );

  const background = useTransform(
    scrollY,
    [0, 100],
    [
      "rgba(251,249,245,0)",
      "rgba(251,249,245,0.88)",
    ]
  );

  const borderColor = useTransform(
    scrollY,
    [0, 100],
    [
      "rgba(222,213,231,0)",
      "rgba(222,213,231,0.95)",
    ]
  );

  const shadow = useTransform(
    scrollY,
    [0, 100],
    [
      "0 0 0 rgba(36,27,45,0)",
      "0 18px 50px rgba(36,27,45,0.12)",
    ]
  );

  return (
    <motion.header
      style={{
        width,
        maxWidth,
        top,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        borderRadius: radius,
        backgroundColor: background,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor,
        boxShadow: shadow,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
      className="fixed left-1/2 z-50 -translate-x-1/2"
    >
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          style={{ color: colors.plum }}
          className="group text-xl font-medium tracking-[-0.07em]"
        >
          ramya
          <motion.span
            style={{ color: colors.deepLilac }}
            className="transition-opacity duration-300 group-hover:opacity-70"
          >
            .s
          </motion.span>
        </motion.a>

        {/* Let's Build */}
        <motion.a
          href="#contact"
          style={{
            color: colors.plum,
            borderColor: `${colors.deepLilac}45`,
            backgroundColor: colors.softLilac,
          }}
          className="group flex items-center gap-2 rounded-full border px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent"
          whileHover={{
            backgroundColor: colors.lilac,
          }}
          whileTap={{ scale: 0.97 }}
        >
          Let's build

          <span
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
            style={{ color: colors.deepLilac }}
          >
            ↗
          </span>
        </motion.a>
      </nav>
    </motion.header>
  );
}