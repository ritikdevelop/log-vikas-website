"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Leaf,
  Sun,
  Zap,
  Users,
  Award,
  Globe,
  CheckCircle,
  Factory,
  Lightbulb,
  BookOpen,
  Home,
  Phone,
  Mail,
  MapPin,
  Recycle,
  Battery,
  TreePine,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";

export default function GreenEnergyPage() {
  return (
    <div className="min-h-screen bg-white">
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
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 overflow-hidden">
        <div className="absolute top-4 left-4 z-20">
          <Link
            href="/"
            className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200 group bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2"
          >
            <Home className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>

        <div className="absolute inset-0 bg-[url('/solar-panels-and-wind-turbines-landscape.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-light mb-4 text-green-200">
              Welcome To Log Vikas Green Energy
            </h3>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Together We Can Make A
              <span className="block text-green-400">Difference.</span>
            </h1>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-lg font-semibold rounded-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 uppercase tracking-wider"
            >
              Discover More
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
          <div className="text-3xl font-bold">2500+</div>
          <div className="text-sm">Trained Professionals</div>
        </div>
        <div className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
          <div className="text-3xl font-bold">500MW</div>
          <div className="text-sm">Project Capacity</div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Recycle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Sustainability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Promoting sustainable practices for a greener future through
                comprehensive renewable energy training programs.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Award className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Leading in environmental training and green energy consultation
                with industry-proven methodologies.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                <Lightbulb className="h-12 w-12 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Pioneering green energy certifications and sustainable training
                concepts for tomorrow's workforce.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-4">
            <h4 className="text-green-600 font-semibold text-lg">
              About Log Vikas Green Energy
            </h4>
            <div className="w-20 h-1 bg-green-600 mx-auto mt-2"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            We Have The Power Today To Change Tomorrow
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Prepare to set out on a path toward a more environmentally
                friendly and sustainable future with us. Log Vikas Green Energy
                is your go-to source, leading the way in the fields of
                Environmental Training, Green Energy Education, and
                Sustainability Consultations.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      @ Log Vikas Green Energy, we aim for a global zero
                      environmental footprint.
                    </h4>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Expertise in Environmental Training, Green Energy
                      Solutions, and Sustainability Consultations.
                    </h4>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Pioneering innovative ways to reduce carbon emissions
                      through education.
                    </h4>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Together, we create a sustainable world through
                      comprehensive training programs.
                    </h4>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-none uppercase tracking-wider">
                Discover More
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/solar-panel-installation-training.jpg"
                alt="Green Energy Training"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  2500+
                </div>
                <div className="text-sm text-gray-600">
                  Supporters are working with us
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TreePine,
                title: "Sustainability Extended Services",
                description:
                  "Comprehensive sustainability training and consultation services for organizations.",
              },
              {
                icon: BookOpen,
                title: "Green Energy Training & Consulting",
                description:
                  "Professional development programs in renewable energy technologies and implementation.",
              },
              {
                icon: Factory,
                title: "Green Building Facilitation & Certification",
                description:
                  "Training for green building standards, LEED certification, and sustainable construction.",
              },
              {
                icon: Sun,
                title: "Solar Energy Systems",
                description:
                  "Comprehensive solar power training from design to installation and maintenance.",
              },
              {
                icon: Battery,
                title: "Energy Storage & Analysis",
                description:
                  "Advanced training in energy storage systems, grid integration, and efficiency analysis.",
              },
              {
                icon: Leaf,
                title: "Environmental Impact Assessment",
                description:
                  "Training in environmental assessment methodologies and sustainability reporting.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-xl transition-all duration-300 group border-0 shadow-lg"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-none uppercase tracking-wider">
              Read More
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-600 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-green-200 font-semibold text-lg mb-2">
              Our Global Reach
            </h4>
            <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
            <h2 className="text-4xl font-bold mb-4">
              Training Programs Delivered Across
            </h2>
            <p className="text-xl text-green-100">
              India, UAE, Singapore, Malaysia, and Bangladesh
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-2">Sparkling Energy</h4>
              <p className="text-green-100 text-sm">
                68,85,000 units generated annually with minimum 20% savings
                achieved.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-2">Global Impact</h4>
              <p className="text-green-100 text-sm">
                Training professionals across 5 countries with sustainable
                practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-2">Eco-Champions</h4>
              <p className="text-green-100 text-sm">
                Reducing 1100 Tons of CO2 emissions yearly through trained
                professionals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-2">Trained Professionals</h4>
              <p className="text-green-100 text-sm">
                2500+ professionals trained with 95% placement success rate.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">23+</div>
              <div className="text-green-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">450+</div>
              <div className="text-green-200">Training Programs</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2500+</div>
              <div className="text-green-200">Professionals Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500MW</div>
              <div className="text-green-200">Project Capacity</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5M</div>
              <div className="text-green-200">Sq. Mt. Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-green-200">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-green-600 font-semibold text-lg mb-2">
              Our Testimonials
            </h4>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What They Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our successful graduates who are now leading the
              renewable energy revolution across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Solar Project Manager",
                // image: "/placeholder.svg?height=100&width=100",
                testimonial:
                  "Log Vikas Green Energy transformed my career. The comprehensive training program gave me the skills and confidence to lead major solar projects.",
              },
              {
                name: "Priya Sharma",
                role: "Wind Energy Consultant",
                // image: "/placeholder.svg?height=100&width=100",
                testimonial:
                  "The practical approach and industry connections provided by Log Vikas helped me secure my dream job in renewable energy consulting.",
              },
              {
                name: "Mohammed Ali",
                role: "Energy Auditor",
                // image: "/placeholder.svg?height=100&width=100",
                testimonial:
                  "Excellent training methodology and expert instructors. The program covered every aspect of energy auditing and sustainability practices.",
              },
              {
                name: "Sneha Patel",
                role: "Green Building Specialist",
                // image: "/placeholder.svg?height=100&width=100",
                testimonial:
                  "The green building certification training was comprehensive and practical. Now I'm successfully managing LEED projects across multiple cities.",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                {/* <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden"> */}
                  {/* <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  /> */}
                {/* </div> */}
                <p className="text-gray-600 mb-4 italic leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-green-600 text-sm">{testimonial.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-800 to-emerald-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/renewable-energy-project-management.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            22 Years of Eco-Innovation: Our Sustainable Journey
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Join the next generation of renewable energy professionals. Start
            your journey towards a sustainable career today.
          </p>
          <Button
            size="lg"
            className="bg-white text-green-800 hover:bg-gray-100 px-12 py-6 text-lg font-semibold rounded-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 uppercase tracking-wider"
          >
            Discover More
          </Button>
        </div>
      </section>

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
                Log Vikas Green Energy – a visionary force in the realm of
                Environmental Training, Green Energy Education, and
                Sustainability Consultations.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/share/1Wdvm87d43/"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Facebook
                </Link>
                <Link
                  href="https://x.com/logvikas_India"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Twitter
                </Link>
                <Link
                  href="https://www.youtube.com/@logvikas4449"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Youtube
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Explore</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
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
              <h4 className="font-bold text-lg mb-6">Get in touch</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">
                    +91-9560090847 <br />
                    +91-7303761417
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">
                    contact@logvikas.in <br /> logvikas.india@gmail.com
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-green-400 mt-1" />
                  <span className="text-muted-foreground text-sm">
                    Vaishali Sector-3 Ghaziabad
                    <br />
                    Uttar-Pradesh-201010
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Log Vikas Green Energy. All Rights Reserved. Designed &
              Developed by Log Vikas Team
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
