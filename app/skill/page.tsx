"use client";

import type React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface TimelineItemProps {
  title: string;
  description: string;
  href?: string;
  label?: string;
  Icon?: React.ComponentType;
}

const arrowAnim = {
  animate: {
    x: [1, 10, 1],
    scaleX: [1.5, 1.5, 1.5],
  },
  transition: {
    duration: 1.5,
    ease: "easeInOut",
    repeat: Number.POSITIVE_INFINITY,
  },
};

// Animation variants for timeline items
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const skills: TimelineItemProps[] = [
  {
    title: "Programming Languages",
    description: `I am proficient in a variety of programming languages, including C, C++ and JavaScript. My expertise in C includes not only systems-level programming but also implementing efficient data structures and algorithms (DSA) to solve complex computational problems. In C++, I leverage modern features such as smart pointers and templates to write safe and reusable code.While JavaScript powers my dynamic and interactive front-end implementations.`,
  },
  {
    title: "Web Development",
    description: `I have a strong foundation in web development technologies, including HTML5, CSS3 (with Flexbox and Grid layouts), and vanilla JavaScript. I excel at creating responsive, accessible, and user-friendly web applications that deliver seamless experiences across devices. My workflow incorporates modern tooling such as Webpack and Babel to optimize performance and support cutting-edge language features.`,
  },
  {
    title: "Frameworks & Tools",
    description: `I have hands-on experience with popular front-end frameworks and tools:
- **React.js**: Building component-driven UIs, managing state with hooks and context, and optimizing renders for performance.
- **Next.js**: Creating server-side rendered and statically generated applications; I have completed multiple Next.js projects, including e-commerce sites, blogs, and dashboards.
- **Node.js**: Developing RESTful APIs and real-time applications with Express.js and integrating databases like MongoDB.
- **Git & GitHub**: Version control best practices, branching strategies (Git Flow), pull request workflows, and collaborating on open-source repositories.
- **Additional Tools**: Familiar with package managers (npm, yarn, pnpm).`,
  },
];
interface TimelineSectionProps {
  title: string;
  items: TimelineItemProps[];
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ title, items }) => {
  return (
    <div className="container mx-auto px-4 max-w-4xl mb-16">
      <motion.h2
        className="lg:text-3xl text-xl font-bold mb-8 text-center text-gray-100"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1 sm:left-2 md:left-3 lg:left-4 top-2 bottom-0 w-[1px] bg-gray-200 h-[calc(100%-8px)]"></div>

        {items.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative flex mb-16 last:mb-0"
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={itemVariants}
          >
            {/* Circle Bullet */}
            <div className="absolute left-1 sm:left-2 md:left-3 lg:left-4 top-2 w-4 h-4 border-2 border-black bg-gray-200 rounded-full transform -translate-x-1/2 z-10"></div>

            {/* Content Container */}
            <div className="ml-6 sm:ml-8 md:ml-10 lg:ml-12 flex-1">
              <div className="flex items-center mb-3">
                {item.Icon && (
                  <div className="p-3 mr-2">
                    <item.Icon />
                  </div>
                )}
                <h3 className="lg:text-2xl text-lg font-bold text-gray-200">
                  {item.title}
                </h3>
              </div>

              <div className="p-2">
                <div className="text-gray-300 leading-relaxed mb-4 lg:text-sm">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {item.description}
                  </ReactMarkdown>
                </div>
                {item.href && item.label && (
                  <a
                    href={item.href}
                    className="group relative inline-block font-semibold text-gray-300 hover:text-gray-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label} →
                    <span className="absolute left-1/2 bottom-[-2px] h-[0.5px] w-0 bg-white transition-all duration-300 transform -translate-x-1/2 group-hover:w-[calc(100%+8px)]"></span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="z-50 px-2 mb-8"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-gray-300 hover:text-white transition-color gap-5"
          >
            <motion.span {...arrowAnim} className="inline-block origin-left">
              <FaArrowLeft className="w-4 h-4" />
            </motion.span>
            <span className="text-sm lg:text-base">Home</span>
          </Link>
        </motion.div>
      </div>

      <TimelineSection title="My Skills." items={skills} />

      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="mt-8 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center text-foreground hover:opacity-80 transition-opacity py-2"
          >
            <span className="mr-2 text-xs sm:text-sm md:text-base lg:text-lg">
              Let&apos;s See My Projects{" "}
            </span>
            <motion.span {...arrowAnim} className="inline-block origin-left">
              <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.span>
          </Link>
        </motion.div>
      </div>

      <footer className="text-center text-gray-500 text-sm py-8 mt-8">
        <p>© {new Date().getFullYear()} Aman Khanal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Timeline;
