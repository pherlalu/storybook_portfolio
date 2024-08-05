import React from "react";
import { motion } from "framer-motion";

// Import the image assets
import css from "../../assets/programming_logo/css.png";
import docker from "../../assets/programming_logo/docker.png";
import git from "../../assets/programming_logo/git.png";
import html from "../../assets/programming_logo/html.png";
import java from "../../assets/programming_logo/java.png";
import javascript from "../../assets/programming_logo/javascript.png";
import mysql from "../../assets/programming_logo/mysql.png";
import php from "../../assets/programming_logo/php.png";
import python from "../../assets/programming_logo/python.png";
import react from "../../assets/programming_logo/react.png";
import ruby from "../../assets/programming_logo/ruby.png";
import typescript from "../../assets/programming_logo/typescript.png";
import visualstudio from "../../assets/programming_logo/visualstudio.png";
import vue from "../../assets/programming_logo/vue.png";
import SectionHeader from "../SectionHeader/SectionHeader";

// Define the type for the skill items
interface Skill {
  src: string;
  alt: string;
  label: string;
}

// Define the skills data
const skills: Skill[] = [
  { src: css, alt: "CSS", label: "CSS" },
  { src: docker, alt: "Docker", label: "Docker" },
  { src: git, alt: "Git", label: "Git" },
  { src: html, alt: "HTML", label: "HTML" },
  { src: java, alt: "Java", label: "Java" },
  { src: javascript, alt: "JavaScript", label: "JavaScript" },
  { src: mysql, alt: "MySQL", label: "MySQL" },
  { src: php, alt: "PHP", label: "PHP" },
  { src: python, alt: "Python", label: "Python" },
  { src: react, alt: "React", label: "React" },
  { src: ruby, alt: "Ruby", label: "Ruby on Rails" },
  { src: typescript, alt: "TypeScript", label: "TypeScript" },
  { src: visualstudio, alt: "Visual Studio", label: ".NET" },
  { src: vue, alt: "Vue", label: "Vue" },
];

const Skills: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.9,
            transition: {
              staggerChildren: 0.2,
            },
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <SectionHeader
          title="Tech Stack."
          subtitle="Continuously Expanding Technical Expertise"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 mt-4 justify-items-center">
          {skills.map(({ src, alt, label }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center transition-transform transform hover:scale-105"
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.8,
                  transition: { duration: 0.8 },
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.8 },
                },
              }}
            >
              <img
                src={src}
                alt={alt}
                className="h-24 mb-2 transition-transform transform hover:scale-110"
              />
              <span className="text-lg">{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
