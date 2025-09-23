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
import Link from "next/link";
import {
  Building2,
  GraduationCap,
  Calendar,
  Users,
  Search,
  TrendingUp,
  Award,
  CheckCircle,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Comprehensive Training & Development Solutions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Three specialized business units delivering end-to-end training,
              skill development, and event management services across
              industries.
            </p>
          </div>
        </div>
      </section>

      {/* CBU Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center space-x-3">
              <Building2 className="h-8 w-8 text-primary" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Corporate Business Unit (CBU)
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive corporate training and business services
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Training Services */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Training Services</span>
                </CardTitle>
                <CardDescription>
                  Professional development programs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  {[
                    "Sales Training",
                    "Behavioral Training",
                    "Presentation Skills",
                    "Email Etiquette",
                    "Business Etiquette",
                    "Process Training",
                    "Personal Leadership Training",
                    "Personality Development",
                    "Motivational Training",
                    "Team Building",
                    "Work Life Balance Training",
                    "Strategy and Planning",
                  ].map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Business Services */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Search className="h-5 w-5 text-secondary" />
                  <span>Business Services</span>
                </CardTitle>
                <CardDescription>Research and audit solutions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  {[
                    "Customer Survey",
                    "Data Collection",
                    "Mystery Shopping (Retail)",
                    "Non-Financial Audit",
                  ].map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm text-muted-foreground">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* OD Intervention */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <span>OD Intervention</span>
                </CardTitle>
                <CardDescription>Organizational Development</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  {[
                    "Social Accountability 2008",
                    "Ethical Trading Initiative Code",
                    "Organizational Culture Development",
                    "Change Management",
                  ].map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SDBU Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center space-x-3">
              <GraduationCap className="h-8 w-8 text-secondary" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Skill Development Business Unit (SDBU)
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional skilling and placement services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Skilling Programs */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-secondary" />
                  <span>Skilling Programs</span>
                </CardTitle>
                <CardDescription>
                  Industry-relevant skill development
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  {[
                    "Retail Management",
                    "Call Centre Training",
                    "Stitching & Tailoring",
                    "Office Assistant",
                    "Information Technology",
                  ].map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm text-muted-foreground">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Placement Partners */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <span>Placement Partners</span>
                </CardTitle>
                <CardDescription>
                  Leading companies for job placement
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Archies Ltd.",
                    "Hallmark Greetings",
                    "Dabur",
                    "NHPC",
                    "BPCL",
                    "Durian Furniture",
                    "BNI Gurugram",
                    "W. H. Smith",
                    "Madame",
                    "Beer Café",
                    "HORIBA India",
                    "ICICI Lombard",
                    "Honda Dealership",
                  ].map((company) => (
                    <div key={company} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span className="text-xs text-muted-foreground">
                        {company}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* EBU Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center space-x-3">
              <Calendar className="h-8 w-8 text-accent" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Event Business Unit (EBU)
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete event planning and marketing solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Event Planning */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span>Event Planning & Execution</span>
                </CardTitle>
                <CardDescription>End-to-end event management</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  {[
                    "Product Launching",
                    "Pre-Launching Planning",
                    "Pre-Launching Market Analysis",
                    "Event Coordination",
                    "Venue Management",
                  ].map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Marketing Services */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Marketing Services</span>
                </CardTitle>
                <CardDescription>
                  Comprehensive marketing solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  {[
                    "Marketing of New Products",
                    "ATL & BTL Activities",
                    "Canopy & Road Shows",
                    "Digital Marketing",
                    "Bplus NEWS & Reports YouTube Channel",
                  ].map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90">
              Contact us today to discuss how our services can help transform
              your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/lms">View Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
