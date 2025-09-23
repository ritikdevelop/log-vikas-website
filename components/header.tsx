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
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/images%281%29-cPK4BN1Gw1qhEAFA1UCW0vJBKh1pH7.jpeg"
                alt="Log Vikas Logo"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            {/* <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">Log Vikas</h1>
              <p className="text-xs text-muted-foreground">
                Developing People for Better Tomorrow
              </p>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
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

          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 animate-refined-glow"
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
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
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
          <div className="lg:hidden py-6 border-t border-border/40 elegant-card rounded-b-lg">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 rounded-lg hover:bg-muted/50"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 rounded-lg hover:bg-muted/50"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 rounded-lg hover:bg-muted/50"
              >
                Services
              </Link>
              <Link
                href="/lms"
                className="text-foreground hover:text-primary transition-colors font-medium flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-muted/50 group"
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
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2 rounded-lg hover:bg-muted/50"
              >
                Contact
              </Link>

              <Button
                asChild
                className="bg-green-500 hover:bg-green-600 text-white font-semibold mx-4 rounded-full"
              >
                <Link
                  href="/green-energy"
                  className="flex items-center justify-center space-x-2"
                >
                  <Leaf className="h-4 w-4" />
                  <span>Green Switch</span>
                </Link>
              </Button>

              <div className="pt-4 border-t border-border/40 mx-4">
                <Link
                  href="/auth/admin-login"
                  className="text-foreground hover:text-primary transition-colors flex items-center space-x-2 py-2 px-4 rounded-lg hover:bg-muted/50"
                >
                  <Shield className="h-4 w-4" />
                  <span>Admin Login</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
