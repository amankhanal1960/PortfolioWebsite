"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
}

// Arrow animation
const arrowAnim = {
  animate: {
    x: [2, 15, 2], // move right then back
    scaleX: [2, 2, 2], // stretch horizontally
  },
  transition: {
    duration: 1.2,
    ease: "easeInOut",
    repeat: Number.POSITIVE_INFINITY,
  },
};

const projects: ProjectProps[] = [
  {
    title: "Medium Clone",
    description:
      "A full-featured Medium clone with article publishing capabilities and user authentication.",
    imageUrl: "/medium1.png",
    projectUrl: "https://medium-clone-three-nu.vercel.app/",
    tags: ["Next.js", "React", "Tailwind CSS", "Authentication"],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills.",
    imageUrl: "/portfolio1.png",
    projectUrl: "https://portfolio-website-two-gray-97.vercel.app/",
    tags: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="z-50 px-2"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-foreground hover:text-white transition-color gap-10 group"
          >
            <motion.span {...arrowAnim} className="inline-block origin-left">
              <FaArrowLeft className="w-4 h-4" />
            </motion.span>
            <span className="text-sm lg:text-base">Home</span>
          </Link>
        </motion.div>
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 mb-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>

        {/* Single "My Skills" link at the bottom of the page */}
        <div className="flex justify-items-start mt-8 sm:mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center hover:opacity-80 transition-opacity group"
          >
            <span className="mr-2 text-sm md:text-base lg:text-lg text-foreground transition-colors">
              Let&apos;s Get In Touch{" "}
            </span>
            <motion.span {...arrowAnim} className="inline-block origin-left">
              <FaArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: ProjectProps;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative w-full overflow-hidden rounded-t-xl h-48 sm:h-56 md:h-64">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full font-medium transform hover:scale-105 transition-transform border border-white/30"
          >
            <ExternalLink size={20} />
            <span className="text-sm">View Project</span>
          </Link>
        </motion.div>

        <motion.div
          className="relative h-full w-full"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index < 2}
          />
        </motion.div>
      </div>

      {/* Project Info */}
      <div className="p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-b-xl flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-gray-100 transition-colors duration-300">
            {project.title}
          </h3>
          <Link
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              animate={{
                rotate: isHovered ? 45 : 0,
                x: isHovered ? 2 : 0,
                y: isHovered ? -2 : 0,
              }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
            >
              <ArrowUpRight
                size={20}
                className="text-gray-400 group-hover:text-gray-100 dark:group-hover:text-gray-100"
              />
            </motion.div>
          </Link>
        </div>

        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, tagIdx) => (
            <motion.span
              key={tagIdx}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs sm:text-sm rounded-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + tagIdx * 0.05 }}
              whileHover={{ y: -2 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
