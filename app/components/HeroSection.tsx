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
    "Halløja",
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
        duration: 0.3,
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
    <section
      className="
        h-screen
        flex flex-col justify-center px-5 sm:px-10 md:px-20 lg:px-32 text-foreground relative pt-16
      "
    >
      <motion.div
        className="max-w-4xl mx-auto"
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
              className="text-2xl font-serif text-foreground"
            >
              {greetings[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.h1
          className="text-3xl lg:text-5xl font-bold mb-8 text-foreground glitch-text"
          variants={item}
          data-text="I'M AMAN KHANAL"
        >
          I&apos;M AMAN KHANAL
        </motion.h1>

        <div className="space-y-6 text-foreground text-sm md:text-base leading-loose mx-auto">
          <motion.p variants={item}>
            Your friendly neighborhood Fullstack web developer. I spend most of
            my days (and often nights) painting the Internet canvas with{" "}
            <Link href="/projects" className="font-semibold">
              {" "}
              PROJECTS{" "}
            </Link>
            and lines of code, turning zeroes and ones into immersive,
            interactive experiences.
          </motion.p>

          <motion.p variants={item}>
            I tread the path of minimalism, finding beauty in simplicity and
            order. When I&apos;m not crafting beautiful web experiences, you can
            find me reading
            <Link href="/articles" className="font-semibold">
              {" "}
              ARTICLES{" "}
            </Link>
            or swaying to the rhythm of classic music, losing myself in the
            captivating flow of melodies. Anways, you can always{" "}
            <Link href="/contact" className="font-semibold">
              CONTACT ME!
            </Link>
          </motion.p>
        </div>

        <motion.div className="mt-8" variants={item}>
          <Link
            href="/about"
            className="inline-flex items-center hover:opacity-80 transition-opacity"
          >
            <span className="mr-2 lg:text-sm text-xs text-foreground">
              See More About Me
            </span>{" "}
            <motion.span {...arrowAnim}>
              <FontAwesomeIcon icon={faArrowRight} />
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          className="flex space-x-6 mt-10 justify-start"
          variants={container}
          initial="hidden"
          animate="show"
          transition={{ delayChildren: 1.2, staggerChildren: 0.1 }}
        >
          <motion.a
            href="https://x.com/AmanKhanal1960"
            className="hover:opacity-80 transition-opacity"
            variants={socialItem}
            whileHover={{ y: -3 }}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faXTwitter} className="text-foreground" />
            <span className="sr-only">Twitter</span>
          </motion.a>
          <motion.a
            href="https://www.facebook.com/amankhanal1960"
            className="hover:opacity-80 transition-opacity"
            variants={socialItem}
            whileHover={{ y: -3 }}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} className="text-foreground" />
            <span className="sr-only">Facebook</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/aman-khanal-225700260/"
            className="hover:opacity-80 transition-opacity"
            variants={socialItem}
            whileHover={{ y: -3 }}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-foreground" />
            <span className="sr-only">LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://github.com/amankhanal1960"
            className="hover:opacity-80 transition-opacity"
            variants={socialItem}
            whileHover={{ y: -3 }}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="text-foreground" />
            <span className="sr-only">GitHub</span>
          </motion.a>
          <motion.a
            href="https://www.instagram.com/_amankhanal/"
            className="hover:opacity-80 transition-opacity"
            variants={socialItem}
            whileHover={{ y: -3 }}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-foreground" />
            <span className="sr-only">Instagram</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
