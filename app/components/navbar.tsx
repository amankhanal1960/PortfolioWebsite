"use client";

import { ModeToggle } from "./ThemeSwitch";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/", delay: 50 },
    { label: "About", href: "/about", delay: 50 },
    { label: "Projects", href: "/projects", delay: 50 },
    { label: "Skills", href: "/skills", delay: 50 },
    { label: "Contact", href: "/contact", delay: 50 },
  ];

  return (
    <header className="fixed top-5 left-2 right-5 lg:left-40 lg:right-40 md:left-20 md:right-20 sm:left-10 sm:right-10 z-50 dark:text-white text-gray-800">
      <div className="container px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center text-2xl font-bold dark:text-white text-gray-800"
          >
            Aman
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-between text-gray-400 gap-4">
            <div className="flex items-center space-x-8">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="relative text-gray-300 hover:text-white transition-colors duration-300 group text-lg"
                >
                  {label}
                  <span className="absolute left-1/2 bottom-[-2px] h-[0.5px] w-0 bg-white transition-all duration-300 transform -translate-x-1/2 group-hover:w-[calc(100%+8px)]" />
                </Link>
              ))}
            </div>

            <ModeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 bg-[#030d14] transition-opacity duration-300 md:hidden ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute top-6 left-10 m-4">
            <ModeToggle />
          </div>

          <nav className="h-full flex flex-col items-center justify-center gap-10 text-xl font-semibold">
            {navLinks.map(({ label, href, delay }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`relative text-gray-400 hover:text-white transition-all duration-400 group transform ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                {label}
                <span className="absolute left-1/2 bottom-[-2px] h-[0.5px] w-0 bg-white transition-all duration-300 transform -translate-x-1/2 group-hover:w-[calc(100%+18px)]"></span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
