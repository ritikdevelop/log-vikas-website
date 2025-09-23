"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Play, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function PaymentSuccessContent() {
  const searchParams = useSearchParams()
  const videoId = searchParams.get("videoId")
  const videoTitle = searchParams.get("videoTitle")
  const amount = searchParams.get("amount")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <Card className="text-center">
          <CardHeader className="pb-4">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-gray-900">Payment Successful!</CardTitle>
            <CardDescription>Your video has been unlocked successfully</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="font-semibold text-gray-900 mb-2">{videoTitle || "Video Unlocked"}</h3>
              <p className="text-sm text-gray-600 mb-3">You now have lifetime access to this video</p>
              <div className="text-lg font-bold text-green-600">Amount Paid: ₹{amount || "1"}</div>
            </div>

            <div className="space-y-3">
              {videoId && (
                <Link href={`/lms/watch/${videoId}`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    <Play className="h-4 w-4 mr-2" />
                    Watch Video Now
                  </Button>
                </Link>
              )}

              <Link href="/lms">
                <Button variant="outline" className="w-full bg-transparent">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Courses
                </Button>
              </Link>
            </div>

            <div className="text-xs text-gray-500">
              <p>A confirmation email has been sent to your registered email address.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      }
    >
      <PaymentSuccessContent />
    </Suspense>
  )
}
