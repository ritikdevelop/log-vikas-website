import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, Play } from "lucide-react"
import Link from "next/link"

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

export default async function LMSPage() {
  const supabase = await createClient()

  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching courses:", error)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Management System</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock your potential with our comprehensive training courses. Each video costs just ₹1 to unlock and
              watch.
            </p>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {courses?.map((course: Course, index: number) => (
            <Card
              key={course.id}
              className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={course.thumbnail_url || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className="bg-white/90 text-gray-800 group-hover:scale-110 transition-transform"
                  >
                    {course.level}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="h-12 w-12 text-white animate-pulse" />
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="outline"
                    className="text-xs group-hover:border-primary group-hover:text-primary transition-colors"
                  >
                    {course.category}
                  </Badge>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-gray-600 ml-1">4.8</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">{course.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center group-hover:text-primary transition-colors">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{course.instructor_name}</span>
                  </div>
                  <div className="flex items-center group-hover:text-primary transition-colors">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600 group-hover:scale-110 transition-transform">
                    ₹{course.price}/video
                  </div>
                  <Link href={`/lms/course/${course.id}`}>
                    <Button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 group-hover:shadow-lg">
                      <Play className="h-4 w-4 mr-2" />
                      View Course
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {(!courses || courses.length === 0) && (
          <div className="text-center py-12 animate-fade-in-up">
            <div className="text-gray-500 text-lg">No courses available at the moment. Check back soon!</div>
          </div>
        )}
      </div>
    </div>
  )
}
