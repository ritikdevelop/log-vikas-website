import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Edit, Play, Clock, Users, BookOpen } from "lucide-react"
import Link from "next/link"

export default async function CourseDetailPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  // Fetch course with videos
  const { data: course, error: courseError } = await supabase
    .from("courses")
    .select(`
      *,
      course_videos(*)
    `)
    .eq("id", params.id)
    .single()

  if (courseError || !course) {
    redirect("/admin/courses")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/admin/courses">
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Courses
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
                <p className="text-gray-600 mt-1">Course Details</p>
              </div>
            </div>
            <Link href={`/admin/courses/${course.id}/edit`}>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Edit className="h-4 w-4 mr-2" />
                Edit Course
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Info */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">{course.title}</CardTitle>
                    <CardDescription className="mt-2">{course.description}</CardDescription>
                  </div>
                  <Badge variant={course.is_published ? "default" : "secondary"}>
                    {course.is_published ? "Published" : "Draft"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <BookOpen className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Category</p>
                    <p className="font-semibold">{course.category}</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Clock className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold">{course.duration || "N/A"}</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Level</p>
                    <p className="font-semibold">{course.level}</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Play className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Price</p>
                    <p className="font-semibold">₹{course.price}/video</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Instructor</h3>
                    <p className="text-gray-600">{course.instructor_name}</p>
                  </div>

                  {course.thumbnail_url && (
                    <div>
                      <h3 className="font-semibold mb-2">Course Thumbnail</h3>
                      <img
                        src={course.thumbnail_url || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full max-w-md h-48 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Course Videos */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Course Videos ({course.course_videos?.length || 0})</CardTitle>
                <CardDescription>Manage course content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {course.course_videos?.map((video: any, index: number) => (
                    <div key={video.id} className="p-3 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-sm">{video.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">Video {index + 1}</p>
                      {video.duration && <p className="text-xs text-gray-500">{video.duration}</p>}
                    </div>
                  ))}

                  {(!course.course_videos || course.course_videos.length === 0) && (
                    <div className="text-center py-8 text-gray-500">
                      <Play className="h-8 w-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">No videos added yet</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
