import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Calendar, User, Play, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function AdminPurchases() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  // Fetch all purchases with user and video information
  const { data: purchases } = await supabase
    .from("user_purchases")
    .select(`
      *,
      profiles!inner(full_name, email),
      course_videos!inner(title, duration),
      courses!inner(title, category)
    `)
    .order("purchased_at", { ascending: false })

  // Calculate total revenue
  const totalRevenue = purchases?.reduce((sum, purchase) => sum + (purchase.amount || 0), 0) || 0

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
                <h1 className="text-3xl font-bold text-gray-900">Purchase Management</h1>
                <p className="text-gray-600 mt-1">Track all video purchases and revenue</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-green-600">₹{totalRevenue}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6">
          {purchases?.map((purchase) => (
            <Card key={purchase.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{purchase.course_videos?.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {purchase.profiles?.full_name} ({purchase.profiles?.email})
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(purchase.purchased_at).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Play className="h-4 w-4 mr-1" />
                          {purchase.courses?.title}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">₹{purchase.amount}</p>
                    <Badge variant="outline" className="mt-1">
                      {purchase.courses?.category}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          {(!purchases || purchases.length === 0) && (
            <Card>
              <CardContent className="p-12 text-center">
                <DollarSign className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No purchases found</h3>
                <p className="text-gray-600">Purchase history will appear here once users start buying videos</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
