"use client";

import { ModeToggle } from "./ThemeSwitch";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/", delay: 50 },
    { label: "About", href: "/about", delay: 100 },
    { label: "Skills", href: "/skill", delay: 150 },
    { label: "Projects", href: "/projects", delay: 200 },
    { label: "Contact", href: "/contact", delay: 250 },
  ];

  return (
    <header
      className="
        fixed top-5 left-2 right-5
        lg:left-40 lg:right-40
        md:left-20 md:right-20
        sm:left-10 sm:right-10
        z-50
        text-foreground
      "
    >
      <div className="container px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center text-2xl font-bold text-foreground"
          >
            Aman
          </Link>

          {/* ─── Desktop Navigation ──────────────────────────────────────────── */}
          <nav className="hidden md:flex items-center justify-between gap-4">
            <div className="flex items-center space-x-8">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="
                    relative
                    text-foreground
                    hover:text-foreground
                    transition-colors duration-300
                    group
                    text-lg
                  "
                >
                  {label}
                  <span
                    className="
                      absolute left-1/2 bottom-[-2px] h-[1px] w-0
                      bg-white
                      transition-all duration-300
                      transform -translate-x-1/2
                      group-hover:w-[calc(100%+8px)]
                    "
                  />
                </Link>
              ))}
            </div>

            {/* Theme switch in desktop nav */}
            <ModeToggle />
          </nav>

          {/* ─── Mobile Menu Button ─────────────────────────────────────────── */}
          <button
            className="md:hidden text-foreground z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ─── Mobile Navigation Overlay ──────────────────────────────────── */}
        <div
          className={`
            fixed inset-0
            bg-background/100 backdrop-blur-3xl
            transition-opacity duration-300 md:hidden
            ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
        >
          {/* Mode toggle at top-left of the overlay */}
          <div className="absolute top-6 left-10 m-4">
            <ModeToggle />
          </div>

          <nav className="h-full flex flex-col items-center justify-center gap-10 text-xl font-semibold">
            {navLinks.map(({ label, href, delay }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  relative
                  text-foreground
                  hover:text-foreground
                  transition-all duration-400
                  group
                  transform
                  ${
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }
                `}
                style={{ transitionDelay: `${delay}ms` }}
              >
                {label}
                <span
                  className="
                    absolute left-1/2 bottom-[-2px] h-[1px] w-0
                    bg-foreground
                    transition-all duration-300
                    transform -translate-x-1/2
                    group-hover:w-[calc(100%+18px)]
                  "
                />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
