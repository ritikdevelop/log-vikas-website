// import { Header } from "@/components/header";
// import { Footer } from "@/components/footer";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import Link from "next/link";
// import {
//   Building2,
//   GraduationCap,
//   Calendar,
//   ArrowRight,
//   Star,
//   Users,
//   Award,
//   Target,
//   Zap,
//   TrendingUp,
//   CheckCircle,
// } from "lucide-react";

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-background">
//       <Header />

//       <section className="relative py-20 lg:py-32 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30"></div>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <div className="max-w-4xl mx-auto text-center space-y-8">
//             <div className="space-y-6 animate-elegant-fade-up">
//               <Badge
//                 variant="secondary"
//                 className="w-fit mx-auto px-6 py-2 text-sm font-medium bg-blue-50 text-blue-700 border-blue-200 rounded-full"
//               >
//                 ✨ 2000+ Man Days of Excellence
//               </Badge>
//               <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
//                 <span className="text-gray-900">Developing People for</span>{" "}
//                 <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent block mt-2">
//                   Better Tomorrow
//                 </span>
//               </h1>
//               <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
//                 Transform your organization with India's premier training
//                 company. We deliver cutting-edge corporate training, skill
//                 development, and strategic consulting across industries.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center animate-elegant-fade-up delay-300">
//               <Button
//                 size="lg"
//                 className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//                 asChild
//               >
//                 <Link href="/lms">
//                   Explore Courses
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
//                 </Link>
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="px-10 py-4 text-lg font-semibold rounded-full border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 bg-transparent"
//                 asChild
//               >
//                 <Link href="/contact">Schedule Consultation</Link>
//               </Button>
//             </div>

//             <div className="flex justify-center items-center gap-12 pt-12 animate-elegant-fade-up delay-450">
//               <div className="text-center">
//                 <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
//                   <span className="text-2xl font-bold text-white">2K+</span>
//                 </div>
//                 <div className="text-sm text-gray-600 font-medium">
//                   Training Days
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
//                   <span className="text-2xl font-bold text-white">50+</span>
//                 </div>
//                 <div className="text-sm text-gray-600 font-medium">
//                   Enterprise Clients
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
//                   <span className="text-2xl font-bold text-white">3</span>
//                 </div>
//                 <div className="text-sm text-gray-600 font-medium">
//                   Business Units
//                 </div>
//               </div>
//             </div>

//             <div className="pt-16 animate-smooth-scale delay-600">
//               <div className="relative inline-block">
//                 <img
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/images%281%29-cPK4BN1Gw1qhEAFA1UCW0vJBKh1pH7.jpeg"
//                   alt="Log Vikas Logo"
//                   className="h-32 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
//                 />
//                 <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
//                 <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-300"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6 mb-20 animate-elegant-fade-up">
//             <Badge
//               variant="outline"
//               className="px-6 py-2 text-sm font-medium rounded-full"
//             >
//               Our Expertise
//             </Badge>
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
//               Three Specialized{" "}
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Business Units
//               </span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Comprehensive training and development solutions delivered through
//               our integrated business units.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {/* CBU */}
//             <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-elegant-fade-up delay-150 border border-gray-100">
//               <div className="text-center mb-8">
//                 <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <Building2 className="h-10 w-10 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">CBU</h3>
//                 <p className="text-gray-600">Corporate Business Unit</p>
//               </div>

//               <div className="space-y-6">
//                 <div>
//                   <h4 className="font-semibold text-blue-600 flex items-center mb-3">
//                     <Target className="h-4 w-4 mr-2" />
//                     Training Excellence
//                   </h4>
//                   <div className="space-y-2">
//                     <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
//                       <CheckCircle className="h-4 w-4 mr-3 text-blue-500" />
//                       Sales & Behavioral Training
//                     </div>
//                     <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
//                       <CheckCircle className="h-4 w-4 mr-3 text-blue-500" />
//                       Leadership Development
//                     </div>
//                     <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
//                       <CheckCircle className="h-4 w-4 mr-3 text-blue-500" />
//                       Team Building Programs
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-blue-600 flex items-center mb-3">
//                     <Zap className="h-4 w-4 mr-2" />
//                     Professional Services
//                   </h4>
//                   <div className="space-y-2">
//                     <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
//                       <CheckCircle className="h-4 w-4 mr-3 text-blue-500" />
//                       Customer Survey & Analytics
//                     </div>
//                     <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
//                       <CheckCircle className="h-4 w-4 mr-3 text-blue-500" />
//                       Mystery Shopping Solutions
//                     </div>
//                     <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
//                       <CheckCircle className="h-4 w-4 mr-3 text-blue-500" />
//                       Non-Financial Auditing
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* SDBU */}
//             <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-elegant-fade-up delay-300 border border-gray-100">
//               <div className="text-center mb-8">
//                 <div className="mx-auto w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <GraduationCap className="h-10 w-10 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">SDBU</h3>
//                 <p className="text-gray-600">Skill Development Business Unit</p>
//               </div>

//               <div className="space-y-6">
//                 <div>
//                   <h4 className="font-semibold text-purple-600 flex items-center mb-3">
//                     <TrendingUp className="h-4 w-4 mr-2" />
//                     Skill Enhancement
//                   </h4>
//                   <div className="space-y-2">
//                     <div className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
//                       <CheckCircle className="h-4 w-4 mr-3 text-purple-500" />
//                       Retail Management Mastery
//                     </div>
//                     <div className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
//                       <CheckCircle className="h-4 w-4 mr-3 text-purple-500" />
//                       Call Centre Excellence
//                     </div>
//                     <div className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
//                       <CheckCircle className="h-4 w-4 mr-3 text-purple-500" />
//                       IT & Office Administration
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-purple-600 flex items-center mb-3">
//                     <Users className="h-4 w-4 mr-2" />
//                     Career Placement
//                   </h4>
//                   <div className="space-y-2">
//                     <div className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
//                       <CheckCircle className="h-4 w-4 mr-3 text-purple-500" />
//                       Archies Ltd, Dabur Partnership
//                     </div>
//                     <div className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
//                       <CheckCircle className="h-4 w-4 mr-3 text-purple-500" />
//                       ICICI Lombard, Honda Network
//                     </div>
//                     <div className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
//                       <CheckCircle className="h-4 w-4 mr-3 text-purple-500" />
//                       NHPC, BPCL Opportunities
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* EBU */}
//             <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-elegant-fade-up delay-450 border border-gray-100">
//               <div className="text-center mb-8">
//                 <div className="mx-auto w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <Calendar className="h-10 w-10 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">EBU</h3>
//                 <p className="text-gray-600">Event Business Unit</p>
//               </div>

//               <div className="space-y-6">
//                 <div>
//                   <h4 className="font-semibold text-indigo-600 flex items-center mb-3">
//                     <Award className="h-4 w-4 mr-2" />
//                     Event Excellence
//                   </h4>
//                   <div className="space-y-2">
//                     <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
//                       <CheckCircle className="h-4 w-4 mr-3 text-indigo-500" />
//                       Product Launch Campaigns
//                     </div>
//                     <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
//                       <CheckCircle className="h-4 w-4 mr-3 text-indigo-500" />
//                       Strategic Pre-Launch Planning
//                     </div>
//                     <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
//                       <CheckCircle className="h-4 w-4 mr-3 text-indigo-500" />
//                       Market Analysis & Research
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-indigo-600 flex items-center mb-3">
//                     <Zap className="h-4 w-4 mr-2" />
//                     Marketing Solutions
//                   </h4>
//                   <div className="space-y-2">
//                     <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
//                       <CheckCircle className="h-4 w-4 mr-3 text-indigo-500" />
//                       ATL & BTL Campaigns
//                     </div>
//                     <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
//                       <CheckCircle className="h-4 w-4 mr-3 text-indigo-500" />
//                       Interactive Road Shows
//                     </div>
//                     <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
//                       <CheckCircle className="h-4 w-4 mr-3 text-indigo-500" />
//                       Digital Content Creation
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-24">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center space-y-6 mb-20 animate-elegant-fade-up">
//             <Badge
//               variant="outline"
//               className="px-6 py-2 text-sm font-medium rounded-full"
//             >
//               Client Success Stories
//             </Badge>
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
//               Trusted by{" "}
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Industry Leaders
//               </span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Our proven track record speaks through the success of our clients
//               across diverse industries.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-elegant-fade-up delay-150">
//               <div className="flex justify-center space-x-1 mb-6">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className="h-5 w-5 fill-yellow-400 text-yellow-400"
//                   />
//                 ))}
//               </div>
//               <blockquote className="text-gray-600 italic text-center mb-6 leading-relaxed">
//                 "Log Vikas has designed excellent SOPs for our store operations.
//                 Their training approach is practical and results-oriented."
//               </blockquote>
//               <div className="text-center">
//                 <div className="font-semibold text-gray-900">
//                   Archies Limited
//                 </div>
//                 <div className="text-sm text-gray-500">
//                   Retail Chain Partner
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-elegant-fade-up delay-300">
//               <div className="flex justify-center space-x-1 mb-6">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className="h-5 w-5 fill-yellow-400 text-yellow-400"
//                   />
//                 ))}
//               </div>
//               <blockquote className="text-gray-600 italic text-center mb-6 leading-relaxed">
//                 "Their communication program for our sales force showed
//                 immediate results. Highly professional team."
//               </blockquote>
//               <div className="text-center">
//                 <div className="font-semibold text-gray-900">HORIBA India</div>
//                 <div className="text-sm text-gray-500">
//                   Technology Solutions
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-elegant-fade-up delay-450">
//               <div className="flex justify-center space-x-1 mb-6">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className="h-5 w-5 fill-yellow-400 text-yellow-400"
//                   />
//                 ))}
//               </div>
//               <blockquote className="text-gray-600 italic text-center mb-6 leading-relaxed">
//                 "Excellent mystery shopping services with real-time geo-tagged
//                 reports. Attention to detail is remarkable."
//               </blockquote>
//               <div className="text-center">
//                 <div className="font-semibold text-gray-900">W. H. Smith</div>
//                 <div className="text-sm text-gray-500">Retail Excellence</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/10"></div>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
//           <div className="max-w-4xl mx-auto space-y-8 animate-elegant-fade-up">
//             <Badge
//               variant="secondary"
//               className="px-6 py-2 text-sm font-medium bg-white/20 text-white border-white/30 rounded-full"
//             >
//               Ready to Transform?
//             </Badge>
//             <h2 className="text-4xl lg:text-6xl font-bold text-white">
//               Elevate Your Team to{" "}
//               <span className="text-white/90">New Heights</span>
//             </h2>
//             <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
//               Join thousands of professionals who have transformed their careers
//               with Log Vikas.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
//               <Button
//                 size="lg"
//                 className="group bg-white text-blue-600 hover:bg-gray-50 px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//                 asChild
//               >
//                 <Link href="/lms">
//                   Start Learning Today
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
//                 </Link>
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent"
//                 asChild
//               >
//                 <Link href="/contact">Book Consultation</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

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

      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/professional-team-celebrating-success-with-balloon.jpg"
            alt="Team Building Results In Action"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6 animate-elegant-fade-up">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                Training Results In Action
              </h1>
              <p className="text-xl lg:text-2xl text-orange-400 leading-relaxed max-w-3xl mx-auto font-medium">
                Achieve and maintain the maximum engagement and learning impact
                you've always wanted for your team with Log Vikas behind you.
              </p>
            </div>
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

      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
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
              <div className="text-lg font-medium">Training Days Delivered</div>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Corporate Training Programs
            </h2>
            <p className="text-xl text-orange-500 max-w-3xl mx-auto leading-relaxed font-medium">
              Our Training Programs can be integrated during but not limited
              to...
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Building2 className="h-10 w-10 text-gray-800" />
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Onboarding
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Users className="h-10 w-10 text-gray-800" />
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Team Building
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Target className="h-10 w-10 text-gray-800" />
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Performance Review
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Award className="h-10 w-10 text-gray-800" />
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Annual Conference
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-10 w-10 text-gray-800" />
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Sales Kickoff
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-10 w-10 text-gray-800" />
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Leadership Training
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-10 w-10 text-gray-800" />
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Innovation Workshop
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-10 w-10 text-gray-800" />
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Compliance Training
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-10 w-10 text-gray-800" />
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Quarterly Reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              How It Works?
            </h2>
            <p className="text-xl text-orange-500 max-w-3xl mx-auto leading-relaxed font-medium">
              Our approach towards your Training Success
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
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

            <div className="grid md:grid-cols-4 gap-8 mt-12">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our proven track record speaks through the success of our clients
              across diverse industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-elegant-fade-up delay-150">
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <blockquote className="text-gray-600 italic text-center mb-6 leading-relaxed">
                "Log Vikas has designed excellent SOPs for our store operations.
                Their training approach is practical and results-oriented."
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-gray-900">
                  Archies Limited
                </div>
                <div className="text-sm text-gray-500">
                  Retail Chain Partner
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-elegant-fade-up delay-300">
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <blockquote className="text-gray-600 italic text-center mb-6 leading-relaxed">
                "Their communication program for our sales force showed
                immediate results. Highly professional team."
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-gray-900">HORIBA India</div>
                <div className="text-sm text-gray-500">
                  Technology Solutions
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-elegant-fade-up delay-450">
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <blockquote className="text-gray-600 italic text-center mb-6 leading-relaxed">
                "Excellent mystery shopping services with real-time geo-tagged
                reports. Attention to detail is remarkable."
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-gray-900">W. H. Smith</div>
                <div className="text-sm text-gray-500">Retail Excellence</div>
              </div>
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
            <h2 className="text-4xl lg:text-6xl font-bold text-white">
              Elevate Your Team to{" "}
              <span className="text-white/90">New Heights</span>
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers
              with Log Vikas.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button
                size="lg"
                className="group bg-white text-blue-600 hover:bg-gray-50 px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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
                className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent"
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
