import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            A brighter future with every sunrise
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Welcome to LogVikas, empowering a Greener Tomorrow with Sustainable
            Solar Energy Solutions. At LogVikas we focus on promoting a brighter
            future by harnessing nature’s power.
            <br />
            We are passionate about changing the energy landscape by offering
            innovative, cost-effective, and sustainable solar energy solutions.
            As a top provider in the solar energy field, we are dedicated to
            making clean, renewable energy available for everyone-from
            government developmental projects to large-scale commercial and
            industrial uses.
            <br />
            Since its inception LogVikas has been in service to the nation for
            the last 10 years with respect to multiple skilling and
            developmental projects. We believe in the power of collaboration and
            building strong relationships with all our partners.
          </p>
        </div>
      </section>

      {/* Company Strength */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Our Strength
              </h2>
              <p className="text-xl text-muted-foreground">
                Understanding that organizations are built by people
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <Users className="h-8 w-8 text-primary" />
                      <h3 className="text-2xl font-semibold">
                        People-Centric Approach
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Any Organization is a group of people. The culture,
                      practices and the beliefs of an Organization develops over
                      a period of time. Mission and Vision can be set for any
                      organisation however the real strength is in its TEAM. The
                      way each one of us contribute in the team makes the fate
                      of the team.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <Target className="h-8 w-8 text-secondary" />
                      <h3 className="text-2xl font-semibold">
                        Gap Analysis & Development
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      People respond the way they have learnt to respond since
                      their childhood from their Parents, Relatives, Friends,
                      Seniors, Society and Situations. Any response within a
                      team which does not create the desired result creates
                      gaps. Log Vikas plays a vital role in developing the team
                      and achieving substantial growth by working closely on the
                      gaps of the team.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Key Projects & Partnerships
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Some of our successful projects and ongoing partnerships with
              industry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Completed Projects */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Completed Projects
              </h3>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Archies Limited</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Outsourced training partnership</li>
                    <li>• Designed Standard Operating Procedures (SOPs)</li>
                    <li>• Store level staff and manager training</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>W. H. Smith</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Mystery shopping and audit services</li>
                    <li>• Geo-tagged online reports</li>
                    <li>• 100% authentic real-time surveys</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>HORIBA India</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Leadership Development Programs (LDP/MDP)</li>
                    <li>• Communication program for sales force</li>
                    <li>• Immediate results in first month</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Ongoing Projects */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Ongoing Projects
              </h3>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                    <span>H & B Stores Limited</span>
                  </CardTitle>
                  <CardDescription>A Dabur Enterprise</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Classroom and on-store training</li>
                    <li>• Mystery shopping services</li>
                    <li>• Operations in North, East, and South India</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                    <span>NHPC</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Training at different project locations</li>
                    <li>• Programs for laborers, clerks, and management</li>
                    <li>• Coverage across North India</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                    <span>BPCL</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Team building programs</li>
                    <li>• Stress management training</li>
                    <li>• Behavioral training initiatives</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
                  <p className="font-bold">At LogVikas, we aim to:</p>
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
      <Footer />
    </div>
  );
}
