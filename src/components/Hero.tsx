"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const tags = [
  "Data-Driven",
  "AI-Native",
  "Builder-Mindset",
];

export default function Hero() {
  return (
    <section id="hello" className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Liquid Glass Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] animate-blob mix-blend-multiply" />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply" />
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-pink-200/40 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply" />
      </div>

      <div className="z-10 flex flex-col items-center text-center space-y-8 px-4">
        {/* Lottie Avatar Placeholder */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-white/30 backdrop-blur-md border border-white/50 shadow-lg flex items-center justify-center relative group cursor-pointer overflow-hidden"
        >
          <img 
            src="/person.JPG" 
            alt="Interactive Avatar" 
            className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110" 
          />
          {/* Hover Effect Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-400/30 transition-all duration-500 pointer-events-none" />
        </motion.div>

        {/* Main Text */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 max-w-3xl leading-tight"
        >
          Hi, I&apos;m Xinting. <br />
          I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI products</span> that actually work.
        </motion.h1>

        {/* Tags */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {tags.map((tag, index) => (
            <div
              key={tag}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium",
                "bg-white/40 backdrop-blur-md border border-white/60 shadow-sm",
                "text-gray-700 hover:scale-105 transition-transform duration-300 cursor-default"
              )}
            >
              {tag}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
