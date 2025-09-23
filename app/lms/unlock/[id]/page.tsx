"use client"

import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lock, ArrowLeft, CreditCard, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

interface VideoWithCourse {
  id: string
  title: string
  description: string
  duration: number
  course: {
    id: string
    title: string
    price: number
    instructor_name: string
  }
}

export default function UnlockVideoPage({ params }: { params: Promise<{ id: string }> }) {
  const [videoId, setVideoId] = useState<string>("")
  const [video, setVideo] = useState<VideoWithCourse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isPurchasing, setIsPurchasing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [user, setUser] = useState<any>(null)
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
            courses!inner (
              id,
              title,
              price,
              instructor_name
            )
          `)
          .eq("id", videoId)
          .single()

        if (videoError) throw videoError

        setVideo({
          ...videoData,
          course: videoData.courses,
        })

        // Check if already purchased
        const { data: purchase } = await supabase
          .from("user_purchases")
          .select("*")
          .eq("user_id", currentUser.id)
          .eq("video_id", videoId)
          .eq("payment_status", "completed")
          .single()

        if (purchase) {
          router.push(`/lms/watch/${videoId}`)
          return
        }
      } catch (error) {
        console.error("Error fetching video:", error)
        setError("Failed to load video details")
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [videoId, supabase, router])

  const handlePurchase = async () => {
    if (!user || !video) return

    setIsPurchasing(true)
    setError(null)

    try {
      const response = await fetch("/api/payments/process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          videoId: video.id,
          courseId: video.course.id,
          amount: video.course.price,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Payment failed")
      }

      // Show success message briefly before redirect
      setError(null)

      // Redirect to watch page after successful payment
      setTimeout(() => {
        router.push(`/lms/watch/${videoId}`)
      }, 1000)
    } catch (error) {
      console.error("Purchase error:", error)
      setError(error instanceof Error ? error.message : "Failed to process payment. Please try again.")
    } finally {
      setIsPurchasing(false)
    }
  }

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    return `${minutes} min`
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading video details...</p>
        </div>
      </div>
    )
  }

  if (!video) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="text-center p-8">
            <p className="text-gray-600 mb-4">Video not found</p>
            <Link href="/lms">
              <Button>Back to Courses</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-6">
          <Link href={`/lms/course/${video.course.id}`}>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Course
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video Preview */}
          <div>
            <Card>
              <CardContent className="p-0">
                <div className="relative bg-gray-900 rounded-t-lg aspect-video flex items-center justify-center">
                  <div className="text-center text-white">
                    <Lock className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">Video Locked</p>
                    <p className="text-sm opacity-75">Purchase to unlock and watch</p>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h2>
                  <p className="text-gray-600 mb-4">{video.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Duration: {formatDuration(video.duration)}</span>
                    <span>Instructor: {video.course.instructor_name}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Purchase Card */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Unlock Video
                </CardTitle>
                <CardDescription>Get instant access to this video lesson</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{video.course.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">Video: {video.title}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">₹{video.course.price}</span>
                    <Badge variant="secondary">One-time payment</Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">What you get:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Lifetime access to this video
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      High-quality video content
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Expert instruction from {video.course.instructor_name}
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Progress tracking
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <div className="flex items-center text-green-800 text-sm">
                    <Shield className="h-4 w-4 mr-2" />
                    <span className="font-medium">Secure Payment</span>
                  </div>
                  <p className="text-green-700 text-xs mt-1">
                    Your payment is processed securely. No card details are stored.
                  </p>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <Button
                  onClick={handlePurchase}
                  disabled={isPurchasing}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  size="lg"
                >
                  {isPurchasing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing Payment...
                    </>
                  ) : (
                    <>
                      <CreditCard className="h-4 w-4 mr-2" />
                      Purchase for ₹{video.course.price}
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Secure payment processing. Your payment information is protected.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
