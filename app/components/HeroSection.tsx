"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  const greetings = [
    "Hello",
    "Bonjour",
    "Salut",
    "Hola",
    "Ciao",
    "Guten Tag",
    "Namaste",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(id);
  }, [greetings.length]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const socialItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const fade = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

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

  return (
    <section className="min-h-screen flex flex-col justify-center px-5 sm:px-10 md:px-20 lg:px-32 text-white">
      <motion.div
        className="max-w-4xl mx-auto "
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="flex items-start h-[3rem] mb-4">
          <AnimatePresence mode="wait">
            <motion.span
              key={greetings[index]}
              variants={fade}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="text-2xl font-serif text-white"
            >
              {greetings[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.h1
          className="text-3xl lg:text-5xl font-bold mb-8"
          variants={item}
        >
          I&apos;M AMAN KHANAL
        </motion.h1>

        <div className="space-y-10 text-gray-300 text-sm md:text-base leading-loose mx-auto">
          <motion.p variants={item}>
            Your friendly neighborhood Fullstack web developer. I spend most of
            my days (and often nights) painting the Internet canvas with{" "}
            <span className="text-white font-medium">PROJECTS</span> and lines
            of code, turning zeroes and ones into immersive, interactive
            experiences,
          </motion.p>

          <motion.p variants={item}>
            I tread the path of minimalism, finding beauty in simplicity and
            order. When I&apos;m not crafting beautiful web experiences, you can
            find me reading{" "}
            <span className="text-white font-medium">ARTICLES</span> or swaying
            to the rhythm of classic music, losing myself in the captivating
            flow of melodies. anyways you can always{" "}
            <span className="text-white font-medium">CONTACT ME !</span>
          </motion.p>
        </div>

        <motion.div className="mt-12" variants={item}>
          <Link
            href="#about"
            className="inline-flex items-center text-white hover:opacity-80 transition-opacity"
          >
            <span className="mr-2 lg:text-sm text-xs">See More About Me </span>{" "}
            <motion.span {...arrowAnim}>
              <FontAwesomeIcon icon={faArrowRight} />
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          className="flex space-x-6 mt-16 justify-start"
          variants={container}
          initial="hidden"
          animate="show"
          transition={{ delayChildren: 1.2, staggerChildren: 0.1 }}
        >
          <motion.a
            href="https://x.com/AmanKhanal1960"
            className="text-gray-400 hover:text-white transition-colors"
            variants={socialItem}
            whileHover={{ y: -3 }}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faXTwitter} />
            <span className="sr-only">Twitter</span>
          </motion.a>
          <motion.a
            href="https://www.facebook.com/amankhanal1960"
            className="text-gray-400 hover:text-white transition-colors"
            variants={socialItem}
            whileHover={{ y: -3 }}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
            <span className="sr-only">Facebook</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/aman-khanal-225700260/"
            className="text-gray-400 hover:text-white transition-colors"
            variants={socialItem}
            whileHover={{ y: -3 }}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="sr-only">LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://github.com/amankhanal1960"
            className="text-gray-400 hover:text-white transition-colors"
            variants={socialItem}
            whileHover={{ y: -3 }}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span className="sr-only">GitHub</span>
          </motion.a>
          <motion.a
            href="https://www.instagram.com/_amankhanal/"
            className="text-gray-400 hover:text-white transition-colors"
            variants={socialItem}
            whileHover={{ y: -3 }}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
            <span className="sr-only">Instagram</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
