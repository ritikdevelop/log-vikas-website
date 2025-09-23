"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Shield, ArrowLeft } from "lucide-react"

export default function LoginRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/auth/user-login")
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Choose Login Type</h1>
          <p className="text-gray-600">Select the appropriate login for your account</p>
        </div>

        <div className="space-y-4">
          <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow cursor-pointer">
            <Link href="/auth/user-login">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-3">
                  <User className="w-12 h-12 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-blue-600">Login</CardTitle>
                <CardDescription>Access your Training Courses</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Continuet</Button>
              </CardContent>
            </Link>
          </Card>

          <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow cursor-pointer">
            <Link href="/auth/admin-login">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-3">
                  <Shield className="w-12 h-12 text-indigo-600" />
                </div>
                <CardTitle className="text-xl text-indigo-600">Admin Login</CardTitle>
                <CardDescription>Manage courses, users, and system settings</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Continue as Admin</Button>
              </CardContent>
            </Link>
          </Card>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Redirecting to login in 3 seconds...</p>
        </div>
      </div>
    </div>
  )
}
