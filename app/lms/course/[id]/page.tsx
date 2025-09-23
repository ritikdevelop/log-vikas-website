import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, Play, Lock, CheckCircle } from "lucide-react"
import Link from "next/link"

interface CourseVideo {
  id: string
  title: string
  description: string
  duration: number
  order_index: number
  is_free: boolean
}

interface Course {
  id: string
  title: string
  description: string
  thumbnail_url: string
  instructor_name: string
  duration: string
  level: string
  category: string
  price: number
}

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  // Get current user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Fetch course details
  const { data: course, error: courseError } = await supabase
    .from("courses")
    .select("*")
    .eq("id", id)
    .eq("is_published", true)
    .single()

  if (courseError || !course) {
    redirect("/lms")
  }

  // Fetch course videos
  const { data: videos, error: videosError } = await supabase
    .from("course_videos")
    .select("*")
    .eq("course_id", id)
    .order("order_index", { ascending: true })

  // Fetch user purchases if logged in
  let userPurchases: any[] = []
  if (user) {
    const { data: purchases } = await supabase
      .from("user_purchases")
      .select("*")
      .eq("user_id", user.id)
      .eq("course_id", id)
    userPurchases = purchases || []
  }

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    return `${minutes} min`
  }

  const isVideoUnlocked = (video: CourseVideo) => {
    if (video.is_free) return true
    if (!user) return false
    return userPurchases.some((p) => p.video_id === video.id && p.payment_status === "completed")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Course Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="outline">{course.category}</Badge>
                <Badge variant="secondary">{course.level}</Badge>
                <div className="flex items-center text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">4.8 (124 reviews)</span>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>

              <p className="text-xl text-gray-600 mb-6">{course.description}</p>

              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{course.instructor_name}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">₹{course.price}/video</div>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <img
                src={course.thumbnail_url || "/placeholder.svg"}
                alt={course.title}
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video List */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Content</h2>

            <div className="space-y-4">
              {videos?.map((video: CourseVideo, index: number) => {
                const isUnlocked = isVideoUnlocked(video)

                return (
                  <Card
                    key={video.id}
                    className={`transition-all duration-200 ${isUnlocked ? "hover:shadow-md" : "opacity-75"}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-medium text-gray-500">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <h3 className="text-lg font-semibold text-gray-900">{video.title}</h3>
                            {video.is_free && (
                              <Badge variant="secondary" className="bg-green-100 text-green-800">
                                Free
                              </Badge>
                            )}
                          </div>

                          <p className="text-gray-600 mb-3">{video.description}</p>

                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{formatDuration(video.duration)}</span>
                          </div>
                        </div>

                        <div className="ml-6">
                          {isUnlocked ? (
                            <Link href={`/lms/watch/${video.id}`}>
                              <Button className="bg-green-600 hover:bg-green-700">
                                <Play className="h-4 w-4 mr-2" />
                                Watch
                              </Button>
                            </Link>
                          ) : (
                            <div className="text-center">
                              {user ? (
                                <Link href={`/lms/unlock/${video.id}`}>
                                  <Button
                                    variant="outline"
                                    className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                                  >
                                    <Lock className="h-4 w-4 mr-2" />
                                    Unlock ₹{course.price}
                                  </Button>
                                </Link>
                              ) : (
                                <Link href="/auth/login">
                                  <Button variant="outline">
                                    <Lock className="h-4 w-4 mr-2" />
                                    Login to Unlock
                                  </Button>
                                </Link>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Course Info Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Course Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What you'll learn</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Master fundamental concepts and techniques
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Apply practical skills in real-world scenarios
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Build confidence through hands-on practice
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Get expert insights from industry professionals
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Course Details</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Total Videos:</span>
                      <span>{videos?.length || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Level:</span>
                      <span>{course.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price per video:</span>
                      <span className="font-semibold text-blue-600">₹{course.price}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
