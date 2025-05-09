"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Twitter, Facebook, Linkedin, Github, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
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

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-10 md:px-20 lg:px-32 text-white">
      <motion.div
        className="max-w-4xl mx-auto "
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.h1
          className="text-3xl lg:text-5xl font-bold mb-8"
          variants={item}
        >
          I&apos;M AMAN KHANAL
        </motion.h1>

        <div className="space-y-10 text-gray-300 text-base md:text-lg leading-relaxed mx-auto">
          <motion.p variants={item}>
            Your friendly neighborhood frontend developer, UX architect, and
            JavaScript engineer. I spend my days (and often nights) painting the
            Internet canvas with{" "}
            <span className="text-white font-medium">PROJECTS</span> and lines
            of code, turning zeroes and ones into immersive, interactive
            experiences,
          </motion.p>

          <motion.p variants={item}>
            I tread the path of minimalism, finding beauty in simplicity and
            order. When I&apos;m not crafting beautiful web experiences, you can
            find me reading{" "}
            <span className="text-white font-medium">ARTICLES</span> or swaying
            to the rhythm of Pop Music & Jazz, losing myself in the captivating
            flow of melodies. anyways you can{" "}
            <span className="text-white font-medium">CONTACT ME</span>
          </motion.p>
        </div>

        <motion.div className="mt-12" variants={item}>
          <Link
            href="#about"
            className="inline-flex items-center text-white hover:opacity-80 transition-opacity"
          >
            <span className="mr-2">See More About Me</span>
            <ArrowRight size={20} />
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
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            variants={socialItem}
            whileHover={{ y: -3 }}
          >
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </motion.a>
          <motion.a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            variants={socialItem}
            whileHover={{ y: -3 }}
          >
            <Facebook size={20} />
            <span className="sr-only">Facebook</span>
          </motion.a>
          <motion.a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            variants={socialItem}
            whileHover={{ y: -3 }}
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </motion.a>
          <motion.a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            variants={socialItem}
            whileHover={{ y: -3 }}
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </motion.a>
          <motion.a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            variants={socialItem}
            whileHover={{ y: -3 }}
          >
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
