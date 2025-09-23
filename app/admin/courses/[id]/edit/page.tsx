"use client"

import type React from "react"

import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Save, Plus, Edit, Trash2, Play } from "lucide-react"
import Link from "next/link"
import { useRouter, useParams } from "next/navigation"
import { useState, useEffect } from "react"

export default function EditCoursePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [user, setUser] = useState<any>(null)
  const [course, setCourse] = useState<any>(null)
  const [videos, setVideos] = useState<any[]>([])
  const [showAddVideoModal, setShowAddVideoModal] = useState(false)
  const [editingVideo, setEditingVideo] = useState<any>(null)
  const [videoFormData, setVideoFormData] = useState({
    title: "",
    description: "",
    video_url: "",
    duration: "",
    order_index: "1",
  })
  const router = useRouter()
  const params = useParams()
  const supabase = createClient()

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    level: "",
    duration: "",
    price: "1",
    instructor_name: "",
    thumbnail_url: "",
    is_published: false,
  })

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user: currentUser },
      } = await supabase.auth.getUser()
      if (!currentUser) {
        router.push("/auth/login")
        return
      }
      setUser(currentUser)
    }
    checkAuth()
  }, [supabase, router])

  useEffect(() => {
    const fetchCourse = async () => {
      if (!params.id) return

      const { data: courseData, error: courseError } = await supabase
        .from("courses")
        .select("*")
        .eq("id", params.id)
        .single()

      if (courseError) {
        console.error("Error fetching course:", courseError)
        setError("Course not found")
        return
      }

      setCourse(courseData)
      setFormData({
        title: courseData.title || "",
        description: courseData.description || "",
        category: courseData.category || "",
        level: courseData.level || "",
        duration: courseData.duration || "",
        price: courseData.price?.toString() || "1",
        instructor_name: courseData.instructor_name || "",
        thumbnail_url: courseData.thumbnail_url || "",
        is_published: courseData.is_published || false,
      })

      // Fetch course videos
      const { data: videosData, error: videosError } = await supabase
        .from("course_videos")
        .select("*")
        .eq("course_id", params.id)
        .order("order_index", { ascending: true })

      if (!videosError) {
        setVideos(videosData || [])
      }
    }

    fetchCourse()
  }, [params.id, supabase])

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user || !params.id) return

    setIsLoading(true)
    setError(null)

    try {
      const { error: updateError } = await supabase
        .from("courses")
        .update({
          ...formData,
          price: Number.parseFloat(formData.price),
        })
        .eq("id", params.id)

      if (updateError) throw updateError

      router.push("/admin/courses")
    } catch (error) {
      console.error("Error updating course:", error)
      setError("Failed to update course. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteVideo = async (videoId: string) => {
    if (!confirm("Are you sure you want to delete this video?")) return

    try {
      const { error } = await supabase.from("course_videos").delete().eq("id", videoId)

      if (error) throw error

      setVideos(videos.filter((v) => v.id !== videoId))
    } catch (error) {
      console.error("Error deleting video:", error)
      setError("Failed to delete video")
    }
  }

  const handleAddVideo = () => {
    setVideoFormData({
      title: "",
      description: "",
      video_url: "",
      duration: "",
      order_index: (videos.length + 1).toString(),
    })
    setEditingVideo(null)
    setShowAddVideoModal(true)
  }

  const handleEditVideo = (video: any) => {
    setVideoFormData({
      title: video.title || "",
      description: video.description || "",
      video_url: video.video_url || "",
      duration: video.duration || "",
      order_index: video.order_index?.toString() || "1",
    })
    setEditingVideo(video)
    setShowAddVideoModal(true)
  }

  const handleVideoFormChange = (field: string, value: string) => {
    setVideoFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleVideoSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!params.id) return

    setIsLoading(true)
    setError(null)

    try {
      if (editingVideo) {
        // Update existing video
        const { error: updateError } = await supabase
          .from("course_videos")
          .update({
            ...videoFormData,
            order_index: Number.parseInt(videoFormData.order_index),
          })
          .eq("id", editingVideo.id)

        if (updateError) throw updateError

        // Update local state
        setVideos(
          videos.map((v) =>
            v.id === editingVideo.id
              ? { ...v, ...videoFormData, order_index: Number.parseInt(videoFormData.order_index) }
              : v,
          ),
        )
      } else {
        // Create new video
        const { data: newVideo, error: insertError } = await supabase
          .from("course_videos")
          .insert({
            ...videoFormData,
            course_id: params.id,
            order_index: Number.parseInt(videoFormData.order_index),
          })
          .select()
          .single()

        if (insertError) throw insertError

        // Add to local state
        setVideos([...videos, newVideo])
      }

      setShowAddVideoModal(false)
      setEditingVideo(null)
    } catch (error) {
      console.error("Error saving video:", error)
      setError("Failed to save video. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteCourse = async () => {
    if (
      !confirm(
        "Are you sure you want to delete this entire course? This action cannot be undone and will delete all videos and user purchases.",
      )
    )
      return

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/courses/${params.id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to delete course")
      }

      // Redirect to courses list after successful deletion
      router.push("/admin/courses")
    } catch (error) {
      console.error("Error deleting course:", error)
      setError(error instanceof Error ? error.message : "Failed to delete course")
    } finally {
      setIsLoading(false)
    }
  }

  const categories = [
    "Sales Training",
    "Behavioral Training",
    "Personal Leadership Training",
    "Business Etiquette",
    "Process Training",
    "Team Building",
    "Other",
  ]

  const levels = ["Beginner", "Intermediate", "Advanced"]

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link href="/admin/courses">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Courses
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Edit Course</h1>
              <p className="text-gray-600 mt-1">Update course details and manage videos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Details Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Course Details</CardTitle>
                <CardDescription>Update your course information</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Course Title *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        placeholder="Enter course title"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="instructor_name">Instructor Name *</Label>
                      <Input
                        id="instructor_name"
                        value={formData.instructor_name}
                        onChange={(e) => handleInputChange("instructor_name", e.target.value)}
                        placeholder="Enter instructor name"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Enter course description"
                      rows={4}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="level">Level *</Label>
                      <Select value={formData.level} onValueChange={(value) => handleInputChange("level", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          {levels.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Input
                        id="duration"
                        value={formData.duration}
                        onChange={(e) => handleInputChange("duration", e.target.value)}
                        placeholder="e.g., 2 hours"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="price">Price per Video (₹) *</Label>
                      <Input
                        id="price"
                        type="number"
                        min="1"
                        step="0.01"
                        value={formData.price}
                        onChange={(e) => handleInputChange("price", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="thumbnail_url">Thumbnail URL</Label>
                      <Input
                        id="thumbnail_url"
                        value={formData.thumbnail_url}
                        onChange={(e) => handleInputChange("thumbnail_url", e.target.value)}
                        placeholder="Enter thumbnail image URL"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="is_published"
                      checked={formData.is_published}
                      onCheckedChange={(checked) => handleInputChange("is_published", checked)}
                    />
                    <Label htmlFor="is_published">Publish Course</Label>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                  )}

                  <div className="flex items-center justify-end space-x-4 pt-6">
                    <Link href="/admin/courses">
                      <Button variant="outline">Cancel</Button>
                    </Link>
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={handleDeleteCourse}
                      disabled={isLoading}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Course
                    </Button>
                    <Button type="submit" disabled={isLoading} className="bg-blue-600 hover:bg-blue-700">
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Updating...
                        </>
                      ) : (
                        <>
                          <Save className="h-4 w-4 mr-2" />
                          Update Course
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Course Videos */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Course Videos</CardTitle>
                    <CardDescription>Manage your course content</CardDescription>
                  </div>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={handleAddVideo}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Video
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {videos.map((video, index) => (
                    <div key={video.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{video.title}</h4>
                        <p className="text-xs text-gray-600">Video {index + 1}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Button variant="ghost" size="sm">
                          <Play className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleEditVideo(video)}>
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteVideo(video.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}

                  {videos.length === 0 && (
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

      {/* Video Modal */}
      {showAddVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">{editingVideo ? "Edit Video" : "Add New Video"}</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAddVideoModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </Button>
              </div>

              <form onSubmit={handleVideoSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="video_title">Video Title *</Label>
                  <Input
                    id="video_title"
                    value={videoFormData.title}
                    onChange={(e) => handleVideoFormChange("title", e.target.value)}
                    placeholder="Enter video title"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="video_description">Description</Label>
                  <Textarea
                    id="video_description"
                    value={videoFormData.description}
                    onChange={(e) => handleVideoFormChange("description", e.target.value)}
                    placeholder="Enter video description"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="video_url">Video URL *</Label>
                  <Input
                    id="video_url"
                    value={videoFormData.video_url}
                    onChange={(e) => handleVideoFormChange("video_url", e.target.value)}
                    placeholder="Enter video URL (YouTube, Vimeo, etc.)"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="video_duration">Duration</Label>
                    <Input
                      id="video_duration"
                      value={videoFormData.duration}
                      onChange={(e) => handleVideoFormChange("duration", e.target.value)}
                      placeholder="e.g., 15 minutes"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="video_order">Order Index *</Label>
                    <Input
                      id="video_order"
                      type="number"
                      min="1"
                      value={videoFormData.order_index}
                      onChange={(e) => handleVideoFormChange("order_index", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end space-x-3 pt-4">
                  <Button type="button" variant="outline" onClick={() => setShowAddVideoModal(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isLoading} className="bg-blue-600 hover:bg-blue-700">
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        {editingVideo ? "Updating..." : "Creating..."}
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        {editingVideo ? "Update Video" : "Create Video"}
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
