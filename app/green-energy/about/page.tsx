"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Leaf,
  CheckCircle,
  Target,
  Eye,
  Heart,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Home,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-green-600 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 98500 55791</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>green@logvikas.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Andheri, Mumbai - 12</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-green-200 transition-colors">
              Facebook
            </Link>
            <Link href="#" className="hover:text-green-200 transition-colors">
              Instagram
            </Link>
            <Link href="#" className="hover:text-green-200 transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-green-200 transition-colors">
              Twitter
            </Link>
          </div>
        </div>
      </div>
      <Navigation />
      {/* Back to home */}
      <div className="absolute top-32 left-2 z-20">
        <Link
          href="/"
          className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200 group bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2"
        >
          <Home className="h-5 w-5 group-hover:scale-110 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>
      <div className="py-15 px-2">hl</div>
    </section>
    
  );
}
