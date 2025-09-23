"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap, Shield, Leaf } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group min-w-[48px]">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/images%281%29-cPK4BN1Gw1qhEAFA1UCW0vJBKh1pH7.jpeg"
                alt="Log Vikas Logo"
                className="h-10 w-auto max-w-[120px] transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 xl:space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/services"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/lms"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium flex items-center space-x-2 relative group"
            >
              <GraduationCap className="h-4 w-4" />
              <div className="relative flex items-center justify-center min-w-[90px]">
                <span className="group-hover:opacity-0 transition-opacity duration-300">
                  LOT
                </span>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm">
                  Learn On Tap
                </span>
              </div>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-2 xl:space-x-4">
            <Button
              asChild
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 xl:px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 animate-refined-glow"
            >
              <Link
                href="/green-energy"
                className="flex items-center space-x-2"
              >
                <Leaf className="h-4 w-4" />
                <span>Green Switch</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="flex items-center space-x-2 bg-transparent border-2 border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-elegant"
            >
              <Link href="/auth/admin-login">
                <Shield className="h-4 w-4" />
                <span>Admin Login</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 xl:px-6 py-2 rounded-full transition-all duration-300"
            >
              <Link href="/download" download>
                <span>Download</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
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
          <div className="fixed inset-0 z-50 bg-white flex flex-col">
            <div className="flex justify-between bg-white items-center h-20 px-4 border-b border-border/40">
              <Link href="/" className="flex items-center space-x-2 group min-w-[48px]" onClick={() => setIsMenuOpen(false)}>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/images%281%29-cPK4BN1Gw1qhEAFA1UCW0vJBKh1pH7.jpeg"
                  alt="Log Vikas Logo"
                  className="h-10 w-auto max-w-[120px]"
                />
              </Link>
              <button
                className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col bg-white space-y-2 py-6 px-4">
              <Link href="/" className="text-foreground hover:text-primary font-medium px-4 py-2 rounded-lg hover:bg-muted/50" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary font-medium px-4 py-2 rounded-lg hover:bg-muted/50" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/services" className="text-foreground hover:text-primary font-medium px-4 py-2 rounded-lg hover:bg-muted/50" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link href="/lms" className="text-foreground hover:text-primary font-medium flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-muted/50 group" onClick={() => setIsMenuOpen(false)}>
                <GraduationCap className="h-4 w-4" />
                <div className="relative flex items-center justify-center min-w-[90px]">
                  <span className="group-hover:opacity-0 transition-opacity duration-300">
                    Learn On Tap
                  </span>

                </div>
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary font-medium px-4 py-2 rounded-lg hover:bg-muted/50" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <div className="flex flex-col space-y-2 mt-4">
                <Button
                  asChild
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full"
                >
                  <Link
                    href="/green-energy"
                    className="flex items-center justify-center space-x-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Leaf className="h-4 w-4" />
                    <span>Green Switch</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full"
                >
                  <a href="/download" download>
                    <span>Download</span>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex items-center space-x-2 bg-transparent border-2 border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-elegant"
                >
                  <Link href="/auth/admin-login" onClick={() => setIsMenuOpen(false)}>
                    <Shield className="h-4 w-4" />
                    <span>Admin Login</span>
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
