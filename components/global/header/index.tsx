"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" text-white lg:px-12 md:px-6 px-3" style={{backgroundColor: "rgba(0, 0, 0, 0.85)"}}>
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <div className="text-2xl text-red-600 font-bold">
          <Link href="/">CryptoTracker</Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-red-500">
            Home
          </Link>
          <Link href="/crypto" className="hover:text-red-500">
            Crypto
          </Link>
          <Link href="/exchanges" className="hover:text-red-500">
            Exchanges
          </Link>
          <Link href="/about" className="hover:text-red-500">
            About
          </Link>
        </nav>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 text-center py-4 space-y-2">
          <Link href="/" className="block hover:text-red-500">
            Home
          </Link>
          <Link href="/markets" className="block hover:text-red-500">
            Markets
          </Link>
          <Link href="/exchanges" className="block hover:text-red-500">
            Exchanges
          </Link>
          <Link href="/about" className="block hover:text-red-500">
            About
          </Link>
        </nav>
      )}
    </header>
  );
}
