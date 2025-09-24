"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap, Shield, Leaf } from "lucide-react";
import { useState } from "react";
export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/green-energy" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Leaf className="h-6 w-6 text-green-600" />
            </div>
            <span className="font-semibold text-gray-800 leading-tight">
              LV Green Energy
              <br /> Consulting Services
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/green-energy/about"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              About us
            </Link>
            <Link
              href="/green-energy/services"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/green-energy/contact"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Contact us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/green-energy/about"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                About us
              </Link>
              <Link
                href="/green-energy/services"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                href="/green-energy/contact"
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Contact us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
