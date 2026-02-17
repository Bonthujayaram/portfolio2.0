import { Metadata } from "next";
import { About } from "@/components/sections/about";
import { SkillsShowcase } from "@/components/sections/skills";
import { Achievements } from "@/components/sections/achievements";

export const metadata: Metadata = {
  title: "About | Jayaram Bonthu",
  description: "Learn more about Jayaram Bonthu - Data Scientist and Full Stack Developer",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-20">
        <About />
        <SkillsShowcase />
        <Achievements />
      </div>
    </>
  );
}