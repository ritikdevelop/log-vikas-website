"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Download,
  FileText,
  Building2,
  Award,
  Target,
  Mail,
  Phone,
  MapPin,
  Globe,
  Star,
  Users,
  TrendingUp,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function DownloadPage() {
  const [isViewing, setIsViewing] = useState(false);

  const handleDownload = () => {
    // Create a downloadable PDF link (placeholder)
    const link = document.createElement("a");
    link.href = "/LogVikas_Company_Profile.pdf"; // This would be the actual PDF file
    link.download = "Log-Vikas-Company-Profile.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    setIsViewing(!isViewing);
  };

  return (
    <div className="min-h-screen bg-gradient-mesh">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-modern opacity-90"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-gentle"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-gentle delay-1000"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-scale-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-8">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Company Profile
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover our journey, expertise, and commitment to developing
              people for a better tomorrow
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 -mt-10 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="card-premium animate-slide-up-fade border-0">
              <CardHeader className="text-center pb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-purple rounded-xl mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                  Log Vikas Company Profile
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Get comprehensive insights into our services, achievements,
                  and vision for the future
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleDownload}
                    className="bg-gradient-purple hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download PDF
                  </Button>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-3">
                      <Building2 className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Company Overview
                    </h3>
                    <p className="text-sm text-gray-600">
                      Complete business profile and history
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-3">
                      <Target className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Services & Solutions
                    </h3>
                    <p className="text-sm text-gray-600">
                      Detailed training programs and offerings
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-3">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Achievements
                    </h3>
                    <p className="text-sm text-gray-600">
                      Awards, certifications, and milestones
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {isViewing && (
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="card-premium rounded-3xl overflow-hidden">
                <div className="bg-gradient-modern text-white p-16 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl mb-8">
                      <Building2 className="h-12 w-12 text-white" />
                    </div>
                    <h1 className="text-6xl font-bold mb-4 tracking-tight">
                      Log Vikas
                    </h1>
                    <p className="text-2xl text-white/90 mb-8 font-light">
                      Developing People for Better Tomorrow
                    </p>
                    <div className="inline-flex items-center space-x-8 text-lg text-white/80">
                      <span className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Corporate Training
                      </span>
                      <span className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Est. 2020
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-16 space-y-16">
                  {/* About Us Section */}
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h2 className="text-4xl font-bold text-gray-900 flex items-center">
                        <div className="w-12 h-12 bg-gradient-purple rounded-xl flex items-center justify-center mr-4">
                          <Building2 className="h-6 w-6 text-white" />
                        </div>
                        About Log Vikas
                      </h2>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        Log Vikas is a premier corporate training and
                        development company dedicated to empowering individuals
                        and organizations through comprehensive learning
                        solutions. We specialize in leadership development,
                        skill enhancement, and organizational transformation.
                      </p>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        Our mission is to bridge the gap between potential and
                        performance, creating sustainable growth for both
                        individuals and businesses.
                      </p>
                    </div>
                    <div className="card-premium p-8 rounded-2xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <Star className="h-6 w-6 text-yellow-500 mr-2" />
                        Our Vision
                      </h3>
                      <p className="text-gray-600 italic text-lg leading-relaxed">
                        "To be the leading catalyst in human resource
                        development, fostering a culture of continuous learning
                        and excellence across industries."
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center">
                      <div className="w-12 h-12 bg-gradient-purple rounded-xl flex items-center justify-center mr-4">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      Our Services
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                      {[
                        {
                          title: "Leadership Development",
                          description:
                            "Comprehensive programs to develop effective leaders at all organizational levels.",
                          color: "blue",
                          icon: Users,
                        },
                        {
                          title: "Corporate Training",
                          description:
                            "Customized training solutions for skill enhancement and performance improvement.",
                          color: "purple",
                          icon: TrendingUp,
                        },
                        {
                          title: "Digital Learning",
                          description:
                            "Modern e-learning platforms and digital training methodologies.",
                          color: "green",
                          icon: Globe,
                        },
                      ].map((service, index) => (
                        <Card
                          key={index}
                          className="card-premium border-0 p-6 hover:scale-105 transition-transform duration-300"
                        >
                          <CardHeader className="pb-4">
                            <div
                              className={`inline-flex items-center justify-center w-12 h-12 bg-${service.color}-100 rounded-xl mb-4`}
                            >
                              <service.icon
                                className={`h-6 w-6 text-${service.color}-600`}
                              />
                            </div>
                            <CardTitle className="text-xl font-bold">
                              {service.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600">
                              {service.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-modern text-white p-12 rounded-3xl">
                    <h2 className="text-4xl font-bold mb-12 text-center">
                      Our Impact
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                      {[
                        { number: "500+", label: "Companies Trained" },
                        { number: "10,000+", label: "Professionals Developed" },
                        { number: "50+", label: "Training Programs" },
                        { number: "98%", label: "Client Satisfaction" },
                      ].map((stat, index) => (
                        <div key={index} className="space-y-2">
                          <div className="text-5xl font-bold">
                            {stat.number}
                          </div>
                          <div className="text-white/80 text-lg">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <h2 className="text-4xl font-bold text-gray-900 flex items-center">
                        <div className="w-12 h-12 bg-gradient-purple rounded-xl flex items-center justify-center mr-4">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        Contact Us
                      </h2>
                      <div className="space-y-6">
                        {[
                          { icon: Phone, text: "+91 98765 43210" },
                          { icon: Mail, text: "info@logvikas.com" },
                          { icon: Globe, text: "www.logvikas.com" },
                          {
                            icon: MapPin,
                            text: "Corporate Office\nBusiness District, Mumbai\nMaharashtra, India",
                          },
                        ].map((contact, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4"
                          >
                            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                              <contact.icon className="h-5 w-5 text-purple-600" />
                            </div>
                            <span className="text-gray-600 text-lg whitespace-pre-line">
                              {contact.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="card-premium p-8 rounded-2xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <Award className="h-6 w-6 text-yellow-500 mr-2" />
                        Certifications & Awards
                      </h3>
                      <ul className="space-y-4">
                        {[
                          "ISO 9001:2015 Certified",
                          "Best Training Company Award 2023",
                          "Excellence in Corporate Learning",
                          "Industry Recognition for Innovation",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center space-x-3 text-gray-600"
                          >
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
