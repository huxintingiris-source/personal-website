"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";

const navItems = [
  { name: "Hello", to: "hello" },
  { name: "The Impact", to: "impact" },
  { name: "The Builds", to: "builds" },
  { name: "Skills & Radar", to: "skills" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-full px-6 py-3 shadow-sm"
    >
      <ul className="flex items-center gap-6 text-sm font-medium text-gray-600">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              offset={-100}
              className="cursor-pointer hover:text-black transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
