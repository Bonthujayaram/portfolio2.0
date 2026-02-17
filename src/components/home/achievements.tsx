"use client";

import { motion } from "framer-motion";
import { Award, Users, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { achievementsData } from "@/data/achievements";
import ElectricBorder from "@/components/ui/electric-border";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white"
    >
      {/* 🌌 Starry Sky Background */}
      <ShootingStars />
      <StarsBackground />

      {/* Subtle vignette for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.85),transparent_85%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-gray-200 via-white to-gray-400 drop-shadow-lg"
        >
          Achievements & Impact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-4 leading-relaxed"
        >
          Showcasing milestones of innovation, collaboration, and real-world impact through
          technology and leadership.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 container mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {achievementsData.map((achievement, index) => {
          // Dynamic icon selection
          let Icon = Award;
          if (achievement.id.includes("intern")) Icon = Briefcase;
          if (achievement.id.includes("certification") || achievement.id.includes("course") || achievement.id.includes("gold")) Icon = GraduationCap;
          if (achievement.id.includes("coders-circle")) Icon = Users;

          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex"
            >
              <ElectricBorder
                color="#FFFFFF"
                thickness={4}
                className="w-full h-full rounded-2xl hover:scale-[1.04] transition-all duration-500"
              >
                <Card
                  className="
                    relative
                    bg-gradient-to-b from-neutral-900/70 to-neutral-800/30
                    backdrop-blur-xl
                    border border-white/10
                    shadow-[0_0_25px_rgba(255,255,255,0.05)]
                    rounded-2xl
                    p-6
                    flex flex-col justify-between
                    w-full h-full
                    min-h-[360px]
                  "
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)] transition-opacity duration-700" />

                  <CardContent className="relative text-center z-10 flex flex-col items-center justify-between h-full">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-tr from-gray-600/20 to-gray-300/10 rounded-full flex items-center justify-center mb-5 hover:from-white/20 transition-all duration-500">
                      <Icon className="w-8 h-8 text-white/80" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
                        {achievement.organization}
                      </h3>
                      <p className="font-semibold text-lg mb-2 tracking-wide">
                        {achievement.title}
                      </p>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ElectricBorder>
            </motion.div>
          );
        })}
      </div>

      {/* Light haze top & bottom */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
