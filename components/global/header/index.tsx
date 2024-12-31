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
  console.log(pathname);
  return (
    <header
      className=" text-white lg:px-12 md:px-6 px-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
    >
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <div className="text-2xl text-red-600 font-bold">
          <Link href="/">CryptoTracker</Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          {NAVBAR.map((nav_item) => (
            <Link
              href={nav_item.href}
              key={nav_item.label}
              className={`hover:text-red-500 ${
                pathname === nav_item.href ? "text-red-600" : ""
              }`}
            >
              {nav_item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden  text-center py-4 space-y-2">
          {NAVBAR.map((nav_item) => (
            <Link
              href={nav_item.href}
              key={nav_item.label}
              className="hover:text-red-500 block"
            >
              {nav_item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
