"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Database, PenTool, Layout } from "lucide-react";

const skills = [
  { name: "Product Strategy", icon: Layout, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "SQL / Data Analysis", icon: Database, color: "text-purple-500", bg: "bg-purple-50" },
  { name: "Python / AI", icon: Code2, color: "text-green-500", bg: "bg-green-50" },
  { name: "Figma / Design", icon: PenTool, color: "text-pink-500", bg: "bg-pink-50" },
];

const apps = [
  { name: "多邻国", desc: "Gamification Mastery", icon: "/duolingo.png" },
  { name: "小宇宙", desc: "Minimalist Audio", icon: "/xiaoyuzhou.webp" },
  { name: "Forest", desc: "Focus & Growth", icon: "/forest.webp" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Skills Column */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Tech Stack & Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`${skill.bg} p-6 rounded-2xl flex flex-col items-center justify-center gap-4 text-center border border-gray-100 shadow-sm cursor-pointer`}
                >
                  <Icon className={`w-10 h-10 ${skill.color}`} />
                  <span className="font-medium text-gray-800">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Radar / Curator's Choice Column */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Curator's Radar</h2>
          <p className="text-gray-500 mb-8">
            App designs and philosophies that inspire my product thinking.
          </p>
          <div className="space-y-4">
            {apps.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow cursor-default"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                    <Image
                      src={app.icon}
                      alt={app.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-semibold text-gray-800">{app.name}</span>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-blue-500 transition-colors">
                  {app.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
