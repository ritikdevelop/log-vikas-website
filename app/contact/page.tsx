import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Youtube } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              Contact Us
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Let's Start Your Training Journey
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get in touch with our team to discuss your training needs and
              discover how Log Vikas can help develop your people for better
              tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We're here to help you transform your organization through
                  effective training and development programs. Reach out to us
                  through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone Numbers */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">
                          Phone Numbers
                        </h3>
                        <div className="space-y-1">
                          <p className="text-muted-foreground">
                            +91-9560090847 | 73037 61417
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">
                          Email Addresses
                        </h3>
                        <div className="space-y-1">
                          <p className="text-muted-foreground">
                            contact@logvikas.in | logvikas.india@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Address */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">
                          Office Address
                        </h3>
                        <p className="text-muted-foreground">
                          Vaishali Sector-3 Ghaziabad 
                          <br />
                          Uttar-Pradesh-201010
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24
                  hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium text-foreground"
                      >
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="lastName"
                        className="text-sm font-medium text-foreground"
                      >
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-foreground"
                    >
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="+91 9876543210" />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-foreground"
                    >
                      Company Name
                    </label>
                    <Input id="company" placeholder="Your Company" />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="service"
                      className="text-sm font-medium text-foreground"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="corporate-training">
                        Corporate Training
                      </option>
                      <option value="skill-development">
                        Skill Development
                      </option>
                      <option value="event-management">Event Management</option>
                      <option value="mystery-shopping">Mystery Shopping</option>
                      <option value="placement">Placement Services</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your training requirements..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-right">
                    <p className="text-muted-foreground">Monday - Friday:</p>
                    <p className="text-muted-foreground">Saturday:</p>
                    <p className="text-muted-foreground">Sunday:</p>
                  </div>
                  <div className="text-left">
                    <p className="font-medium">9:00 AM - 6:00 PM</p>
                    <p className="font-medium">9:00 AM - 2:00 PM</p>
                    <p className="font-medium">Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
