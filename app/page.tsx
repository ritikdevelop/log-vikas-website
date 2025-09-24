import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Building2,
  GraduationCap,
  Calendar,
  ArrowRight,
  Star,
  Users,
  Award,
  Target,
  TrendingUp,
  Globe,
  Trophy,
  Lightbulb,
  Shield,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-5 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/20180211_133826.jpg"
            alt="Team Building Results In Action"
            className="w-full sm:h-[1000px] lg:h-[600px] object-cover object-center"

          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6 animate-elegant-fade-up">
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight text-white break-words">
                Training Results In Action
              </h1>
              <p className="text-base sm:text-lg lg:text-2xl text-white leading-relaxed max-w-3xl mx-auto font-medium break-words">
                Achieve and maintain the maximum engagement and learning impact
                you've always wanted for your team with Log Vikas behind you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold">50+</div>
              <div className="text-lg font-medium">Corporate Clients</div>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Award className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold">2,000+</div>
              <div className="text-lg font-medium">Training Man Days Delivered</div>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Target className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold">10,000+</div>
              <div className="text-lg font-medium">Participants Trained</div>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold">25+</div>
              <div className="text-lg font-medium">Active Clients</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-lg sm:text-3xl lg:text-5xl font-bold text-gray-900 break-words">
              Corporate Training Programs
            </h2>
            {/* Tagline for mobile devices in cursive */}
            <div className="block sm:hidden mt-2">
              <span className="italic text-blue-600 text-lg font-[cursive]">
                Developing people to better tomorrow
              </span>
            </div>
            <p className="text-xs sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium break-words">
              Our Training Programs can be integrated during but not limited
              to...
            </p>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="text-center max-w-xs mx-auto">
              <div className="w-20 h-20 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Building2 className="h-10 w-10 text-gray-800" />
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium break-words">
                Onboarding
              </div>
            </div>
            <div className="text-center max-w-xs mx-auto">
              <div className="w-20 h-20 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Users className="h-10 w-10 text-gray-800" />
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium break-words">
                Team Building
              </div>
            </div>
            <div className="text-center max-w-xs mx-auto">
              <div className="w-20 h-20 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Target className="h-10 w-10 text-gray-800" />
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium break-words">
                Performance Review
              </div>
            </div>
            <div className="text-center max-w-xs mx-auto">
              <div className="w-20 h-20 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Award className="h-10 w-10 text-gray-800" />
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium break-words">
                Annual Conference
              </div>
            </div>
            <div className="text-center max-w-xs mx-auto">
              <div className="w-20 h-20 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-10 w-10 text-gray-800" />
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium break-words">
                Sales Kickoff
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto mt-12">
            <div className="text-center max-w-xs mx-auto">
              <div className="w-20 h-20 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-10 w-10 text-gray-800" />
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium break-words">
                Leadership Training
              </div>
            </div>
            <div className="text-center max-w-xs mx-auto">
              <div className="w-20 h-20 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-10 w-10 text-gray-800" />
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium break-words">
                Innovation Workshop
              </div>
            </div>
            <div className="text-center max-w-xs mx-auto">
              <div className="w-20 h-20 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-10 w-10 text-gray-800" />
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium break-words">
                Compliance Training
              </div>
            </div>
            <div className="text-center max-w-xs mx-auto">
              <div className="w-20 h-20 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-10 w-10 text-gray-800" />
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium break-words">
                Quarterly Reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold text-gray-900 break-words">
              How It Works?
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium break-words">
              Our approach towards your Training Success
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-gray-800">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  DISCOVERY
                </h3>
                <p className="text-gray-600 text-sm">
                  Understanding your requirements & desired outcomes
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-gray-800">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  DEFINING RIGHT SOLUTION
                </h3>
                <p className="text-gray-600 text-sm">
                  Shortlist 3-4 suitable solutions from 50+ Training experiences
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-gray-800">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  RECOMMENDATION
                </h3>
                <p className="text-gray-600 text-sm">
                  Presenting you the best solution to apply customization if
                  required
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-gray-800">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  LOCK THE PERFECT ONE
                </h3>
                <p className="text-gray-600 text-sm">
                  Selection of the final solution & facilitator
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-gray-800">5</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  DETAILING
                </h3>
                <p className="text-gray-600 text-sm">
                  Discussion around venue, logistics & other requirements
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-gray-800">6</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  MEETING THE FACILITATOR
                </h3>
                <p className="text-gray-600 text-sm">
                  Bridging gaps. Pre-program discussion with the facilitator
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-gray-800">7</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  DELIVERY
                </h3>
                <p className="text-gray-600 text-sm">
                  Your Team goes through the learning event, get aligned
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-gray-800">8</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  FEEDBACK
                </h3>
                <p className="text-gray-600 text-sm">
                  Post session feedback with course of action for maximizing the
                  impact
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-gray-800">9</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                THE WAY FORWARD
              </h3>
              <p className="text-gray-600 text-sm max-w-md mx-auto">
                Continuous engagement with course of action for maximizing the
                impact
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20 animate-elegant-fade-up">
            <Badge
              variant="outline"
              className="px-6 py-2 text-sm font-medium rounded-full"
            >
              Client Success Stories
            </Badge>
              <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold text-gray-900 break-words">
                Trusted by- 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Industry Leaders
                </span>
              </h2>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <video width="640" height="360" controls poster="/coveprage.png">
                  <source src="/Stress Management.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                  Watch our client's feedback video above - (Stress Management).
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <video width="640" height="360" controls poster="/coverpage.png">
                  <source src="/Team building.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                  Watch our client's feedback video above  - (Team Building).
                </p>
              </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto space-y-8 animate-elegant-fade-up">
            <Badge
              variant="secondary"
              className="px-6 py-2 text-sm font-medium bg-white/20 text-white border-white/30 rounded-full"
            >
              Ready to Transform?
            </Badge>
            <h2 className="text-xl sm:text-3xl lg:text-6xl font-bold text-white break-words">
              Elevate Your Team to{" "}
              <span className="text-white/90">New Heights</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto break-words">
              Join thousands of professionals who have transformed their careers
              with Log Vikas.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto group bg-white text-blue-600 hover:bg-gray-50 px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/lms">
                  Start Learning Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
