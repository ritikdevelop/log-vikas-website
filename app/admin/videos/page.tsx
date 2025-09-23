import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Edit, Trash2, Plus, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function AdminVideos() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  // Fetch all videos with course information
  const { data: videos } = await supabase
    .from("course_videos")
    .select(`
      *,
      courses!inner(title, category)
    `)
    .order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/admin">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Video Management</h1>
                <p className="text-gray-600 mt-1">Manage all course videos</p>
              </div>
            </div>
            <Link href="/admin/videos/new">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Video
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6">
          {videos?.map((video) => (
            <Card key={video.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Play className="h-5 w-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900">{video.title}</h3>
                      <Badge variant="outline">{video.courses?.category}</Badge>
                    </div>
                    <p className="text-gray-600 mb-2">{video.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Course: {video.courses?.title}</span>
                      <span>Duration: {video.duration || "N/A"}</span>
                      <span>Order: {video.order_index}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Link href={`/admin/videos/${video.id}/edit`}>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          {(!videos || videos.length === 0) && (
            <Card>
              <CardContent className="p-12 text-center">
                <Play className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No videos found</h3>
                <p className="text-gray-600 mb-4">Get started by adding your first video</p>
                <Link href="/admin/videos/new">
                  <Button>Add Video</Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
