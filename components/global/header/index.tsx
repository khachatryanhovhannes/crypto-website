"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAVBAR = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Coins",
    href: "/coins",
  },
  {
    label: "Exchanges",
    href: "/exchanges",
  },
  {
    label: "About",
    href: "/about",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="text-white lg:px-12 md:px-6 px-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
    >
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <div className="text-2xl text-red-600 font-bold">
          <Link href="/" aria-label="Go to homepage">
            CryptoTracker
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8" aria-label="Main navigation">
          {NAVBAR.map((nav_item) => (
            <Link
              href={nav_item.href}
              key={nav_item.label}
              className={`hover:text-red-500 ${
                pathname === nav_item.href ? "text-red-600" : ""
              }`}
              aria-current={pathname === nav_item.href ? "page" : undefined}
            >
              {nav_item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block text-2xl focus:outline-none"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls="mobile-menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden text-center py-4 space-y-2"
          aria-label="Mobile navigation"
        >
          {NAVBAR.map((nav_item) => (
            <Link
              href={nav_item.href}
              key={nav_item.label}
              className="hover:text-red-500 block"
              aria-current={pathname === nav_item.href ? "page" : undefined}
            >
              {nav_item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
