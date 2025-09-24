import Link from "next/link";
import { Phone, Mail, MapPin, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/images%281%29-cPK4BN1Gw1qhEAFA1UCW0vJBKh1pH7.jpeg"
              alt="Log Vikas Logo"
              className="h-12 w-auto"
            />
            <p className="text-muted-foreground text-sm">
              Developing People for Better Tomorrow. Professional training
              company with 2000+ man days of experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact Us
              </Link>
              <Button
                asChild
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 animate-refined-glow !w-[100%]"
              >
                <Link
                  href="/green-energy"
                  className="flex items-center justify-start space-x-2"
                >
                  <Leaf className="h-4 w-4" />
                  <span className="leading-tight">
                    LV Green Energy
                    <br /> Consulting Services
                  </span>
                </Link>
              </Button>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <nav className="flex flex-col space-y-2">
              <span className="text-muted-foreground text-sm">
                Corporate Training
              </span>
              <span className="text-muted-foreground text-sm">
                Skill Development
              </span>
              <span className="text-muted-foreground text-sm">
                Event Management
              </span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  91-9560090847
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  91-7303761417
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  contact@logvikas.in | logvikas.india@gmail.com
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Vaishali Sector-3 Ghaziabad
                  <br />
                  Uttar-Pradesh-201010
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Log Vikas. All rights reserved. | Developing People for
            Better Tomorrow
          </p>
        </div>
      </div>
    </footer>
  );
}
