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

    const { videoId, courseId, amount } = await request.json()

    if (!videoId || !courseId || !amount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if already purchased
    const { data: existingPurchase } = await supabase
      .from("user_purchases")
      .select("*")
      .eq("user_id", user.id)
      .eq("video_id", videoId)
      .eq("payment_status", "completed")
      .single()

    if (existingPurchase) {
      return NextResponse.json({ error: "Video already purchased" }, { status: 400 })
    }

    // Simulate payment processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real application, you would integrate with a payment gateway here
    // For now, we'll simulate a successful payment
    const paymentSuccess = Math.random() > 0.1 // 90% success rate for demo

    if (!paymentSuccess) {
      return NextResponse.json({ error: "Payment failed. Please try again." }, { status: 400 })
    }

    // Record the purchase
    const { data: purchase, error: purchaseError } = await supabase
      .from("user_purchases")
      .insert({
        user_id: user.id,
        course_id: courseId,
        video_id: videoId,
        purchase_type: "video",
        amount: amount,
        payment_status: "completed",
      })
      .select()
      .single()

    if (purchaseError) {
      console.error("Purchase error:", purchaseError)
      return NextResponse.json({ error: "Failed to record purchase" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      purchase,
      message: "Payment successful! You now have access to this video.",
    })
  } catch (error) {
    console.error("Payment processing error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
