import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Leaf,
  Sun,
  Battery,
  TreePine,
  Factory,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Recycle,
  Home,
  Globe,
  Lightbulb,
  Star,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ServicesPage() {
  const services = [
    {
      icon: TreePine,
      title: "Sustainability Extended Services",
      description:
        "Comprehensive sustainability training and consultation services for organizations looking to implement green practices.",
      features: [
        "Environmental Impact Assessment",
        "Sustainability Reporting",
        "Carbon Footprint Analysis",
        "Green Certification Support",
      ],
    },
    {
      icon: BookOpen,
      title: "Green Energy Training & Consulting",
      description:
        "Professional development programs in renewable energy technologies and implementation strategies.",
      features: [
        "Solar Energy Systems",
        "Wind Power Technology",
        "Energy Storage Solutions",
        "Grid Integration Training",
      ],
    },
    {
      icon: Factory,
      title: "Green Building Facilitation & Certification",
      description:
        "Training for green building standards, LEED certification, and sustainable construction practices.",
      features: [
        "LEED Certification Training",
        "Green Building Design",
        "Energy Efficient Systems",
        "Sustainable Materials",
      ],
    },
    {
      icon: Sun,
      title: "Solar Energy Systems",
      description:
        "Comprehensive solar power training from design to installation and maintenance of photovoltaic systems.",
      features: [
        "Solar Panel Installation",
        "System Design & Sizing",
        "Maintenance & Troubleshooting",
        "Grid-Tie Systems",
      ],
    },
    {
      icon: Battery,
      title: "Energy Storage & Analysis",
      description:
        "Advanced training in energy storage systems, grid integration, and efficiency analysis methodologies.",
      features: [
        "Battery Technology",
        "Energy Management Systems",
        "Load Analysis",
        "Storage Integration",
      ],
    },
    {
      icon: Recycle,
      title: "Environmental Impact Assessment",
      description:
        "Training in environmental assessment methodologies and sustainability reporting for various industries.",
      features: [
        "EIA Procedures",
        "Environmental Monitoring",
        "Compliance Training",
        "Sustainability Metrics",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
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

      {/* Header */}
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
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-green-800 to-emerald-800">
        <div className="absolute inset-0 bg-[url('/energy-efficiency-audit-training.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-green-100">
            Comprehensive training and consulting solutions for a sustainable
            future
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-green-600 font-semibold text-lg mb-2">
              What We Offer
            </h4>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Training & Consulting Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive training programs and consulting services
              designed to empower professionals with the knowledge and skills
              needed for the renewable energy sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 group border-0 shadow-lg"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg rounded-none uppercase tracking-wider">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Why Choose Log Vikas?
            </h2>
            <p className="text-xl text-orange-500 max-w-3xl mx-auto leading-relaxed font-medium">
              Learn why Log Vikas is the best option for your team-building and
              training needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Expertise & Experience
                  </h3>
                  <p className="text-gray-600">
                    With years in the renewable energy field, we have built a
                    skilled team in solar energy solutions. We stay updated with
                    the latest technologies to offer the most efficient and
                    cost-effective systems available. We have a deep
                    understanding of government regulations, tender procedures,
                    and compliance standards. LogVikas has successfully
                    delivered solar energy solutions for several government
                    projects, building a reputation for dependability and
                    quality work.
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Customized Solutions
                  </h3>
                  <p className="text-gray-600">
                    We believe that each customer’s energy needs are different.
                    Our solutions are tailored to meet your specific
                    requirements, ensuring you get the most benefits from your
                    solar energy system.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Commitment to Sustainability
                  </h3>
                  <p className="text-gray-600">
                    At LogVikas, we care deeply about sustainability. We help
                    our clients reduce fossil fuel dependency, lower their
                    carbon footprints, and contribute to a cleaner planet.
                  </p>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div className="space-y-8">
              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    End-to-End Service
                  </h3>
                  <p className="text-gray-600">
                    From initial consulting and system installation to
                    post-installation maintenance, we offer complete solutions;
                    we offer a complete range of services. We make your
                    transition to solar energy smooth and easy thus meeting
                    deadlines, budgets, and government standards.
                  </p>
                </div>
              </div>
              {/* Feature 4 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Scalability & Flexibility
                  </h3>
                  <p className="text-gray-600">
                    We recognize the each project’s feasibility and provide
                    personalised solutions. Be it be government projects which
                    involves large and complex installations or residential and
                    basic commercial projects. Our solutions are scalable and
                    adaptable, ensuring we can cater to the specific needs of
                    any project, regardless of size.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Transparent & Affordable Pricing
                  </h3>
                  <p className="text-gray-600">
                    We offer competitive pricing and clear cost structures,
                    ensuring no hidden fees. We also work with financial
                    partners to provide affordable financing options, making
                    solar energy more accessible. Our solar solutions help
                    governments reduce energy costs while meeting sustainability
                    goals. We also assist with accessing government subsidies
                    and financial incentives that make solar energy more
                    affordable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-green-600 font-semibold text-lg mb-2">
              Our Process
            </h4>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures you receive the best training
              experience and achieve your sustainability goals.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description:
                  "We evaluate your current knowledge and training needs",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Custom training program designed for your specific requirements",
              },
              {
                step: "03",
                title: "Training",
                description:
                  "Hands-on learning with expert instructors and real-world applications",
              },
              {
                step: "04",
                title: "Certification",
                description:
                  "Industry-recognized certification and ongoing support",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Green Energy Journey?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers
            with our comprehensive training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-none font-medium">
              View All Programs
            </Button>
            <Button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-none font-medium">
              Contact Us Today
            </Button>
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
              <h4 className="font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Solar Energy Training
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Green Building Certification
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Energy Storage Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Environmental Assessment
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
