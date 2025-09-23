import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()

    // Get current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { videoId } = await request.json()

    if (!videoId) {
      return NextResponse.json({ error: "Video ID required" }, { status: 400 })
    }

    // Check if user has purchased this video
    const { data: purchase, error: purchaseError } = await supabase
      .from("user_purchases")
      .select("*")
      .eq("user_id", user.id)
      .eq("video_id", videoId)
      .eq("payment_status", "completed")
      .single()

    if (purchaseError && purchaseError.code !== "PGRST116") {
      return NextResponse.json({ error: "Database error" }, { status: 500 })
    }

    // Check if video is free
    const { data: video, error: videoError } = await supabase
      .from("course_videos")
      .select("is_free")
      .eq("id", videoId)
      .single()

    if (videoError) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 })
    }

    const hasAccess = video.is_free || !!purchase

    return NextResponse.json({
      hasAccess,
      isPurchased: !!purchase,
      isFree: video.is_free,
    })
  } catch (error) {
    console.error("Payment verification error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
