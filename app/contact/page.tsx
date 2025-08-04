// components/Contact.jsx
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

const containerVariants = {
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
    transition: { duration: 0.3 },
  },
};

const arrowAnim = {
  animate: {
    x: [1, 10, 1], // small left-right animation
    scaleX: [1.5, 1.5, 1.5], // slight horizontal stretch
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error || "Failed to send message");
      }

      setFormData({ name: "", email: "", message: "" });
      toast.success("Message Sent Successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to Send Message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Back to Home Link */}
        <motion.div
          className="z-50 px-2 pt-4"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-foreground transition-color gap-5"
          >
            <motion.span {...arrowAnim} className="inline-block origin-left">
              <FaArrowLeft className="w-4 h-4" />
            </motion.span>
            <span className="text-sm lg:text-base">Home</span>
          </Link>
        </motion.div>

        {/* Main Container */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-2xl mx-auto">
            {/* Header Title */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
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
                className="text-muted-foreground text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Get in touch or shoot me an email directly at{" "}
                <a
                  href="mailto:amankhanal1960@gmail.com"
                  className="text-foreground font-semibold hover:underline transition-colors"
                >
                  amankhanal1960@gmail.com
                </a>
              </motion.p>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              {/* Name Field */}
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
                  className="
                  w-full
                  bg-transparent
                  border-b border-foreground
                  focus:border-primary
                  py-4 px-2
                  text-foreground
                  placeholder-muted-foreground
                  outline-none
                  transition-all duration-300
                "
                />
              </div>

              {/* Email Field */}
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
                  className="
                  w-full
                  bg-transparent
                  border-b border-foreground
                  focus:border-primary
                  py-4 px-2
                  text-foreground
                  placeholder-muted-foreground
                  outline-none
                  transition-all duration-300
                "
                />
              </div>

              {/* Message Field */}
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
                  className="
                  w-full
                  bg-transparent
                  border-b border-foreground
                  focus:border-primary
                  py-4 px-2
                  text-foreground
                  placeholder-muted-foreground
                  outline-none
                  transition-all duration-300
                  resize-none
                "
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="
                  px-7 py-[14px]
                  dark:bg-gray-600
                  text-foreground
                  font-medium
                  rounded-lg
                  transition-all duration-300
                  hover:opacity-80
                  disabled:opacity-70 disabled:cursor-not-allowed

                "
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </div>
            </motion.form>

            {/* Social Icons */}
            <motion.div
              className="flex space-x-6 mt-10 justify-start"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              transition={{ delayChildren: 1.2, staggerChildren: 0.1 }}
            >
              {[
                {
                  href: "https://x.com/AmanKhanal1960",
                  icon: faXTwitter,
                  label: "Twitter",
                },
                {
                  href: "https://www.facebook.com/amankhanal1960",
                  icon: faFacebook,
                  label: "Facebook",
                },
                {
                  href: "https://www.linkedin.com/in/aman-khanal-225700260/",
                  icon: faLinkedin,
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/amankhanal1960",
                  icon: faGithub,
                  label: "GitHub",
                },
                {
                  href: "https://www.instagram.com/_amankhanal/",
                  icon: faInstagram,
                  label: "Instagram",
                },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  className="text-foreground hover:opacity-80 transition-opacity"
                  variants={socialItem}
                  whileHover={{ y: -3 }}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={icon} />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <footer className="text-center text-gray-500 text-sm py-8 mt-8">
        <p>© {new Date().getFullYear()} Aman Khanal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
