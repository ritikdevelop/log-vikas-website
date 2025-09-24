"use client";

import { Button } from "@/components/ui/button";
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
  Award,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-green-600 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-around items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span className="text-nowrap">
                +91-9560090847 | 91-7303761417
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span className="text-nowrap">
                contact@logvikas.in | logvikas.india@gmail.com
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span className="text-nowrap">
                Vaishali Sector-3 Ghaziabad
                <br />
                Uttar-Pradesh-201010
              </span>
            </div>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/share/1Wdvm87d43/"
              className="hover:text-green-200 transition-colors"
            >
              Facebook
            </Link>
            <Link
              href="https://youtube.com/@logvikas4449?si=OaCTMt07XAY23140"
              className="hover:text-green-200 transition-colors"
            >
              Youtube
            </Link>
            <Link
              href="https://x.com/logvikas_India"
              className="hover:text-green-200 transition-colors"
            >
              Twitter
            </Link>
          </div>
        </div>
      </div>
      <Navigation />
      {/* Back to home */}
      <div className="absolute top-38 left-2 z-20">
        <Link
          href="/"
          className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200 group bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2"
        >
          <Home className="h-5 w-5 group-hover:scale-110 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>
      {/* Our Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto  items-center">
            {/* Mission */}
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-md w-full">
              <CardHeader className="flex items-start">
                <div className="bg-primary/10 rounded-full p-4 mb-2 flex items-start justify-start">
                  <Target className="h-10 w-10 text-primary items-start" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary tracking-wide absolute top-10 left-26">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground text-start leading-relaxed">
                  <p className="font-bold">At Log Vikas, we aim to:</p>
                  <li className="list-disc ml-6 !text-[16px] leading-6">
                    Encourage the adoption of solar energy by providing complete
                    solutions-from installation to maintenance and optimization.
                  </li>
                  <li className="list-disc ml-6 !text-[16px] leading-6">
                    Educate our clients on how to save energy while contributing
                    to a greener planet.
                  </li>
                  <li className="list-disc ml-6 !text-[16px] leading-6">
                    Use solar technology to reduce reliance on fossil fuels and
                    build a sustainable future.
                  </li>
                  <p className="font-bold">Our Solar Energy Solutions</p>
                  <p className="ml-6">
                    We focus on a variety of solar energy services designed to
                    meet the needs of each client. Whether you are a homeowner
                    wanting to cut down on electricity bills or a business
                    seeking to operate sustainably, we have the right solution
                    for you.
                  </p>
                  <p className="font-bold">Residential Solar Solutions</p>
                  <p className="ml-6">
                    We focus on a variety of solar energy services designed to
                    meet the needs of each client. Whether you are a homeowner
                    wanting to cut down on electricity bills or a business
                    seeking to operate sustainably, we have the right solution
                    for you.
                  </p>
                  <p className="font-bold">Government Developmental Projects</p>
                  <p className="ml-6">
                    We focus on a variety of solar energy services designed to
                    meet the needs of each client. Whether you are a homeowner
                    wanting to cut down on electricity bills or a business
                    seeking to operate sustainably, we have the right solution
                    for you.
                    <ul>
                      <li className="list-disc ml-6 !text-[16px] leading-6">
                        <span className="font-bold">
                          Customized Solar Systems:{" "}
                        </span>
                        Tailor-made solar power systems that match the energy
                        needs of government buildings
                      </li>
                      <li className="list-disc ml-6 !text-[16px] leading-6">
                        <span className="font-bold">Cost Savings:</span> Notable
                        reductions in electricity bills, allowing for more
                        effective resource allocation.
                      </li>
                      <li className="list-disc ml-6 !text-[16px] leading-6">
                        <span className="font-bold">Sustainability:</span>{" "}
                        Supporting India's renewable energy goals and
                        encouraging eco-friendly practices.
                      </li>
                      <li className="list-disc ml-6 !text-[16px] leading-6">
                        <span className="font-bold">
                          Solar Street Lighting:
                        </span>{" "}
                        Cost-effective and reliable solar-powered lighting for
                        cities and towns.
                      </li>
                      <li className="list-disc ml-6 !text-[16px] leading-6">
                        <span className="font-bold">
                          Solar-Powered Transportation Hubs:
                        </span>{" "}
                        Installing solar systems at bus and train stations to
                        power waiting areas, lights, and ticket kiosks.
                      </li>
                      <li className="list-disc ml-6 !text-[16px] leading-6">
                        <span className="font-bold">
                          Integration with Smart City Projects:
                        </span>{" "}
                        Supporting smart city efforts with solar technologies to
                        promote a sustainable urban future.
                      </li>
                    </ul>
                  </p>
                  <p className="font-bold">Commercial Solar Solutions</p>
                  <p className="ml-6">
                    For businesses looking to lower operational costs and
                    improve sustainability, LogVikas offers solar energy systems
                    that meet commercial energy demands. Our solar solutions are
                    scalable and can be customized for factories, office
                    buildings, retail spaces, and more. Save money on
                    electricity while positioning your business as a leader in
                    sustainability.
                  </p>

                  <p className="font-bold">Industrial Solar Solutions</p>
                  <p className="ml-6">
                    Large industries can gain significantly from using solar
                    power. With our expertise in implementing industrial solar
                    systems, LogVikas helps industries lower energy costs and
                    their environmental impact. We offer large-scale solar
                    solutions for manufacturing plants, warehouses, and
                    distribution centres, ensuring efficiency and long-term
                    savings.
                  </p>

                  <p className="font-bold">Off-Grid Solar Solutions</p>
                  <p className="ml-6">
                    In rural and remote areas where reliable power is hard to
                    find, LogVikas provides off-grid solar energy solutions.
                    These systems operate independently from the main
                    electricity grid, offering clean, reliable energy for
                    communities, businesses, and homes without needing expensive
                    infrastructure.
                  </p>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-5 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto  items-center">
            {/* Vision */}
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-md">
              <CardHeader className="flex flex-col items-center space-y-2">
                <div className="bg-secondary/10 rounded-full p-4 mb-2">
                  <Award className="h-10 w-10 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-bold text-secondary tracking-wide">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                  We strive to lead India’s push for renewable energy by
                  delivering reliable, sustainable, and innovative solar energy
                  solutions. Our goal is to help businesses, communities,
                  government and individuals lower their carbon footprints and
                  energy costs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </section>
  );
}
