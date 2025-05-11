"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((res) => setTimeout(res, 1000));
      setFormData({ name: "", email: "", message: "" });
      toast.success("Message Sent Successfully!");
    } catch {
      toast.error("Failed to Send Message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-gray-100 relative overflow-hidden">
      <motion.div
        className="z-50 px-2 pt-4"
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

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Contact.
            </motion.h1>
            <motion.p
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Get in touch or shoot me an email directly on{" "}
              <a
                href="mailto:hellocodewonders@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                amankhanal1960@gmail.com
              </a>
            </motion.p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <div>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full bg-transparent border-b border-gray-400 focus:border-gray-200 py-4 px-2 text-gray-200 placeholder-gray-500 focus:placeholder-gray-200 outline-none transition-all duration-300"
              />
            </div>

            <div>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full bg-transparent border-b border-gray-400 focus:border-gray-200 py-4 px-2 text-gray-200 placeholder-gray-500 focus:placeholder-gray-200 outline-none transition-all duration-300"
              />
            </div>

            <div>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                rows={5}
                className="w-full bg-transparent border-b border-gray-400 focus:border-gray-200 py-4 px-2 text-gray-200 placeholder-gray-500 focus:placeholder-gray-200 outline-none transition-all duration-300 resize-none"
              />
            </div>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="px-7 py-[14px] bg-gray-100 hover:bg-white text-gray-900 font-medium rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </div>
          </motion.form>
          <motion.div
            className="flex space-x-6 mt-10 justify-start"
            variants={container}
            initial="hidden"
            animate="show"
            transition={{ delayChildren: 1.2, staggerChildren: 0.1 }}
          >
            <motion.a
              href="https://x.com/AmanKhanal1960"
              className="text-foreground hover:opacity-80 transition-opacity"
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
              className="text-foreground hover:opacity-80 transition-opacity"
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
              className="text-foreground hover:opacity-80 transition-opacity"
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
              className="text-foreground hover:opacity-80 transition-opacity"
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
              className="text-foreground hover:opacity-80 transition-opacity"
              variants={socialItem}
              whileHover={{ y: -3 }}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
              <span className="sr-only">Instagram</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
