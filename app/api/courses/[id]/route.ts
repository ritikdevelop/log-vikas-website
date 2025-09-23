import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient()

    // Check authentication
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Check if user is admin
    const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()

    if (profile?.role !== "admin") {
      return NextResponse.json({ error: "Admin access required" }, { status: 403 })
    }

    const courseId = params.id

    // Start a transaction-like deletion process
    // First, delete all course videos
    const { error: videosError } = await supabase.from("course_videos").delete().eq("course_id", courseId)

    if (videosError) {
      console.error("Error deleting course videos:", videosError)
      return NextResponse.json({ error: "Failed to delete course videos" }, { status: 500 })
    }

    // Delete all user purchases for this course
    const { error: purchasesError } = await supabase.from("user_purchases").delete().eq("course_id", courseId)

    if (purchasesError) {
      console.error("Error deleting course purchases:", purchasesError)
      return NextResponse.json({ error: "Failed to delete course purchases" }, { status: 500 })
    }

    // Finally, delete the course itself
    const { error: courseError } = await supabase.from("courses").delete().eq("id", courseId)

    if (courseError) {
      console.error("Error deleting course:", courseError)
      return NextResponse.json({ error: "Failed to delete course" }, { status: 500 })
    }

    return NextResponse.json({ message: "Course deleted successfully" })
  } catch (error) {
    console.error("Error in course deletion:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
