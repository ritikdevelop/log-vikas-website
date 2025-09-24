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
            Welcome to Log Vikas, empowering a Greener Tomorrow with Sustainable
            Solar Energy Solutions. At Log Vikas we focus on promoting a
            brighter future by harnessing nature’s power.
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
          <h3 className="text-2xl flex !items-center !justify-center font-semibold text-foreground mb-6">
            Competed Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Completed Projects */}
            <div className="space-y-6">
              <h3 className="text-2xl flex !items-center !justify-center font-semibold text-foreground mb-13">
                {/* Completed Projects */}
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
              <h3 className="text-2xl font-semibold text-foreground mb-13">
                {/* Ongoing Projects */}
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

      
      <Footer />
    </div>
  );
}
