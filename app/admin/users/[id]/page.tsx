import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, Calendar, ShoppingCart, Play } from "lucide-react"
import Link from "next/link"

export default async function UserDetailPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/admin-login")
  }

  // Fetch user profile
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", params.id)
    .single()

  if (profileError || !profile) {
    redirect("/admin/users")
  }

  // Fetch user purchases
  const { data: purchases } = await supabase
    .from("user_purchases")
    .select(`
      *,
      course_videos!inner(title, duration),
      courses!inner(title, category)
    `)
    .eq("user_id", params.id)
    .order("purchased_at", { ascending: false })

  const totalSpent = purchases?.reduce((sum, purchase) => sum + (purchase.amount || 0), 0) || 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link href="/admin/users">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Users
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{profile.full_name || "User Details"}</h1>
              <p className="text-gray-600 mt-1">User profile and purchase history</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Profile */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>User Profile</CardTitle>
                <CardDescription>Basic user information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium">{profile.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Joined</p>
                      <p className="font-medium">{new Date(profile.created_at).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <ShoppingCart className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Total Purchases</p>
                      <p className="font-medium">{purchases?.length || 0} videos</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Spent</p>
                      <p className="font-medium text-green-600">₹{totalSpent}</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Badge variant="outline" className="w-full justify-center">
                      {profile.role === "admin" ? "Administrator" : "Student"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Purchase History */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Purchase History</CardTitle>
                <CardDescription>All video purchases by this user</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {purchases?.map((purchase) => (
                    <div key={purchase.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Play className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{purchase.course_videos?.title}</h4>
                          <p className="text-sm text-gray-600">
                            Course: {purchase.courses?.title} • {purchase.courses?.category}
                          </p>
                          <p className="text-xs text-gray-500">Duration: {purchase.course_videos?.duration || "N/A"}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">₹{purchase.amount}</p>
                        <p className="text-xs text-gray-500">{new Date(purchase.purchased_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}

                  {(!purchases || purchases.length === 0) && (
                    <div className="text-center py-12">
                      <ShoppingCart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No purchases yet</h3>
                      <p className="text-gray-600">This user hasn't purchased any videos</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
