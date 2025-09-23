import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, BookOpen, Play, DollarSign, TrendingUp, Eye, Plus, Settings } from 'lucide-react'
import Link from "next/link"

export default async function AdminDashboard() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/admin-login")
  }

  const { data: profile } = await supabase.from("profiles").select("role, full_name").eq("id", data.user.id).single()

  if (!profile || profile.role !== "admin") {
    redirect("/auth/admin-login")
  }

  // Fetch dashboard statistics
  const [coursesResult, videosResult, purchasesResult, usersResult] = await Promise.all([
    supabase.from("courses").select("*", { count: "exact" }),
    supabase.from("course_videos").select("*", { count: "exact" }),
    supabase.from("user_purchases").select("amount", { count: "exact" }),
    supabase.from("profiles").select("*", { count: "exact" }),
  ])

  const totalCourses = coursesResult.count || 0
  const totalVideos = videosResult.count || 0
  const totalPurchases = purchasesResult.count || 0
  const totalUsers = usersResult.count || 0

  // Calculate total revenue
  const totalRevenue = purchasesResult.data?.reduce((sum, purchase) => sum + (purchase.amount || 0), 0) || 0

  // Get recent courses
  const { data: recentCourses } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5)

  // Get recent purchases with proper joins
  const { data: recentPurchases } = await supabase
    .from("user_purchases")
    .select(`
      id,
      amount,
      purchased_at,
      purchase_type,
      profiles:user_id(full_name),
      courses:course_id(title),
      course_videos:video_id(title)
    `)
    .order("purchased_at", { ascending: false })
    .limit(5)

  console.log("[v0] Recent purchases data:", recentPurchases)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">
                Welcome back, {profile.full_name || "Admin"}! Manage your courses and track performance
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/admin/courses/new">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Course
                </Button>
              </Link>
              <Link href="/admin/settings">
                <Button variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </Link>
              <form action="/auth/signout" method="post">
                <Button variant="outline" type="submit">
                  Sign Out
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Courses</p>
                  <p className="text-3xl font-bold text-gray-900">{totalCourses}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Videos</p>
                  <p className="text-3xl font-bold text-gray-900">{totalVideos}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <Play className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-3xl font-bold text-gray-900">₹{totalRevenue}</p>
                </div>
                <div className="bg-yellow-100 p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-3xl font-bold text-gray-900">{totalUsers}</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Courses */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Courses</CardTitle>
                <Link href="/admin/courses">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View All
                  </Button>
                </Link>
              </div>
              <CardDescription>Latest courses added to the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentCourses?.map((course) => (
                  <div key={course.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{course.title}</h4>
                      <p className="text-sm text-gray-600">{course.category}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={course.is_published ? "default" : "secondary"}>
                        {course.is_published ? "Published" : "Draft"}
                      </Badge>
                      <span className="text-sm font-medium text-blue-600">₹{course.price}</span>
                    </div>
                  </div>
                ))}
                {(!recentCourses || recentCourses.length === 0) && (
                  <p className="text-gray-500 text-center py-4">No courses found</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Recent Purchases */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Purchases</CardTitle>
                <Link href="/admin/purchases">
                  <Button variant="outline" size="sm">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View All
                  </Button>
                </Link>
              </div>
              <CardDescription>Latest video purchases by users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPurchases?.map((purchase) => (
                  <div key={purchase.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">
                        {purchase.purchase_type === 'video' 
                          ? purchase.course_videos?.title || "Video"
                          : purchase.courses?.title || "Course"
                        }
                      </h4>
                      <p className="text-sm text-gray-600">by {purchase.profiles?.full_name || "User"}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-600">₹{purchase.amount}</p>
                      <p className="text-xs text-gray-500">{new Date(purchase.purchased_at).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
                {(!recentPurchases || recentPurchases.length === 0) && (
                  <p className="text-gray-500 text-center py-4">No purchases found</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/admin/courses">
                <Button
                  variant="outline"
                  className="w-full h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                >
                  <BookOpen className="h-6 w-6" />
                  <span>Manage Courses</span>
                </Button>
              </Link>
              <Link href="/admin/videos">
                <Button
                  variant="outline"
                  className="w-full h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                >
                  <Play className="h-6 w-6" />
                  <span>Manage Videos</span>
                </Button>
              </Link>
              <Link href="/admin/users">
                <Button
                  variant="outline"
                  className="w-full h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
                >
                  <Users className="h-6 w-6" />
                  <span>Manage Users</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
