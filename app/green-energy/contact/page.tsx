"use client";

import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Leaf, Phone, Mail, MapPin, Clock, Menu, X, Send, Home } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h4 className="text-green-600 font-semibold text-lg mb-2">
                Get In Touch
              </h4>
              <div className="w-20 h-1 bg-green-600 mb-8"></div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Send Us A Message
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Ready to start your green energy journey? Contact us today to
                learn more about our training programs and consulting services.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-green-500 focus:border-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-green-500 focus:border-green-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-green-500 focus:border-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-none uppercase tracking-wider flex items-center space-x-2">
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-green-600 font-semibold text-lg mb-2">
                Contact Information
              </h4>
              <div className="w-20 h-1 bg-green-600 mb-8"></div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Let's Connect
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We're here to help you achieve your sustainability goals. Reach
                out to us through any of the following channels.
              </p>

              <div className="space-y-8">
                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-600">+91 98500 55791</p>
                      <p className="text-gray-600">+91 22 2673 4567</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">green@logvikas.com</p>
                      <p className="text-gray-600">info@logvikas.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-600">
                        Log Vikas Training Institute
                        <br />
                        Andheri West, Mumbai
                        <br />
                        Maharashtra, India - 400058
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Working Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 10:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h4 className="text-green-600 font-semibold text-lg mb-2">
              Find Us
            </h4>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Location
            </h2>
            <p className="text-lg text-gray-600">
              Visit our training center in the heart of Mumbai
            </p>
          </div>

          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Interactive Map Coming Soon</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl">Log Vikas</div>
                  <div className="text-green-400 text-sm">Green Energy</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Leading the way in environmental training and sustainable
                solutions for a better tomorrow.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/green-energy"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/green-energy/about"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/green-energy/services"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/green-energy/contact"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">+91 9850055791</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">green@logvikas.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-green-400 mt-1" />
                  <span className="text-gray-400">
                    Mumbai, Maharashtra, India
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Follow Us</h4>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Facebook
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Instagram
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  LinkedIn
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Twitter
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Log Vikas Green Energy. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
