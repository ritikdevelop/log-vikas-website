"use client"

import { createClient } from "@/lib/supabase/client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Play, Pause, Volume2, Maximize, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect, useRef } from "react"

interface VideoWithCourse {
  id: string
  title: string
  description: string
  duration: number
  video_url: string
  course: {
    id: string
    title: string
    instructor_name: string
  }
}

export default function WatchVideoPage({ params }: { params: Promise<{ id: string }> }) {
  const [videoId, setVideoId] = useState<string>("")
  const [video, setVideo] = useState<VideoWithCourse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [user, setUser] = useState<any>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [hasAccess, setHasAccess] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params
      setVideoId(resolvedParams.id)
    }
    resolveParams()
  }, [params])

  useEffect(() => {
    if (!videoId) return

    const fetchData = async () => {
      try {
        // Get current user
        const {
          data: { user: currentUser },
        } = await supabase.auth.getUser()
        if (!currentUser) {
          router.push("/auth/login")
          return
        }
        setUser(currentUser)

        // Fetch video with course details
        const { data: videoData, error: videoError } = await supabase
          .from("course_videos")
          .select(`
            id,
            title,
            description,
            duration,
            video_url,
            is_free,
            courses!inner (
              id,
              title,
              instructor_name
            )
          `)
          .eq("id", videoId)
          .single()

        if (videoError) throw videoError

        const videoWithCourse = {
          ...videoData,
          course: videoData.courses,
        }
        setVideo(videoWithCourse)

        // Check access (free video or purchased)
        if (videoData.is_free) {
          setHasAccess(true)
        } else {
          const { data: purchase } = await supabase
            .from("user_purchases")
            .select("*")
            .eq("user_id", currentUser.id)
            .eq("video_id", videoId)
            .eq("payment_status", "completed")
            .single()

          if (purchase) {
            setHasAccess(true)
          } else {
            router.push(`/lms/unlock/${videoId}`)
            return
          }
        }
      } catch (error) {
        console.error("Error fetching video:", error)
        setError("Failed to load video")
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [videoId, supabase, router])

  const updateProgress = async (watchedDuration: number, completed: boolean) => {
    if (!user || !video) return

    try {
      await supabase.from("user_progress").upsert({
        user_id: user.id,
        course_id: video.course.id,
        video_id: video.id,
        watched_duration: Math.floor(watchedDuration),
        completed,
        last_watched_at: new Date().toISOString(),
      })
    } catch (error) {
      console.error("Error updating progress:", error)
    }
  }

  const handlePlayPause = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    if (!videoRef.current) return

    const current = videoRef.current.currentTime
    setCurrentTime(current)

    // Update progress every 10 seconds
    if (Math.floor(current) % 10 === 0) {
      const completed = current >= duration * 0.9 // 90% watched = completed
      updateProgress(current, completed)
    }
  }

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return
    setDuration(videoRef.current.duration)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading video...</p>
        </div>
      </div>
    )
  }

  if (!video || !hasAccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="text-center p-8">
            <p className="text-gray-600 mb-4">Access denied or video not found</p>
            <Link href="/lms">
              <Button>Back to Courses</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Video Player */}
      <div className="relative">
        <video
          ref={videoRef}
          className="w-full h-[60vh] bg-black"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          poster="/modern-video-player.png"
        >
          <source src={video.video_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Controls Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="w-full bg-white/20 rounded-full h-1">
              <div
                className="bg-blue-500 h-1 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={handlePlayPause} className="text-white hover:bg-white/20">
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>

              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Volume2 className="h-5 w-5" />
              </Button>

              <span className="text-sm">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
                onClick={() => videoRef.current?.requestFullscreen()}
              >
                <Maximize className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Info */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <Link href={`/lms/course/${video.course.id}`}>
                  <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Course
                  </Button>
                </Link>

                {progressPercentage >= 90 && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Completed
                  </Badge>
                )}
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-2">{video.title}</h1>

              <p className="text-gray-600 mb-4">{video.description}</p>

              <div className="flex items-center text-sm text-gray-500">
                <span>Course: {video.course.title}</span>
                <span className="mx-2">•</span>
                <span>Instructor: {video.course.instructor_name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
