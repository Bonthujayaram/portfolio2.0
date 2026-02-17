"use client";

import { motion } from "framer-motion";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { educationData } from "@/data/achievements";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import {
  ScrollReveal,
  GradientText
} from "@/components/animations";

export function About() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <ScrollReveal delay={0.1}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <GradientText>Me</GradientText>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate about building innovative solutions at the intersection of
              cloud computing, full-stack development, and emerging technologies.
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Hi! I&apos;m Bonthu Jayaram, currently pursuing my B.Tech in Computer Science Engineering.
                I have a strong interest in technology, full-stack development, Data Science, Machine Learning,
                and Artificial Intelligence, and I enjoy building impactful software solutions that solve
                real-world problems.
              </p>

              <p className="text-lg leading-relaxed">
                I have completed internships as a Full Stack Web Developer at Krunatic Solutions and as a
                Data Science & Machine Learning Intern at Cranes Varsity, where I worked on real-world
                applications, backend APIs, data-driven models, and end-to-end system development.
                These experiences strengthened my problem-solving skills and practical industry exposure.
              </p>

              <p className="text-lg leading-relaxed">
                Alongside my technical journey, I actively work on projects spanning web development,
                Android applications, and AI-powered systems. I am passionate about continuous learning,
                applying emerging technologies, and contributing to innovative products with real impact.
              </p>
            </div>



            {/* Education Cards */}
            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeUp}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
                >                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {edu.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {edu.location}
                        </span>
                      </div>

                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}