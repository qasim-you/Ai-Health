"use client"
import { useState } from "react"; 
 
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg mx-5">
          Health Bot
        </Link>

        {/* Hamburger Menu (visible on small screens) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden px-3 py-2 border rounded text-gray-700 border-gray-400 hover:bg-gray-200"
        >
          <span className="sr-only">Toggle Menu</span>
          {/* Icon */}
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`flex-col lg:flex lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 absolute lg:relative top-16 lg:top-0 left-0 right-0 bg-background lg:bg-transparent p-4 lg:p-0 transition-transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full lg:translate-y-0"
          }`}
        >
          <Link href="/dashboard">
            <Button variant="ghost">Dashboard</Button>
          </Link>
          <Link href="/symptom-analysis">
            <Button variant="ghost">Symptom Analysis</Button>
          </Link>
          <Link href="/report-analysis">
            <Button variant="ghost">Report Analysis</Button>
          </Link>
    
          <Link href="/appointments">
            <Button variant="ghost">Appointments</Button>
          </Link>
          <Link href="/medications">
            <Button variant="ghost">Medications</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
