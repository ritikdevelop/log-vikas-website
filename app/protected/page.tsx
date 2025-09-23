import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900">
              Welcome, {data.user.email}!
            </CardTitle>
            <CardDescription className="text-lg">
              You have successfully logged into Log Vikas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-blue-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">
                    Explore LMS
                  </CardTitle>
                  <CardDescription>
                    Access our comprehensive learning management system with
                    professional courses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/lms">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Go to LMS
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">
                    Company Info
                  </CardTitle>
                  <CardDescription>
                    Learn more about Log Vikas and our training services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/about">
                    <Button
                      variant="outline"
                      className="w-full border-green-600 text-green-700 hover:bg-green-50 bg-transparent"
                    >
                      About Us
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="text-center pt-6">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="text-gray-600 hover:text-gray-800"
                >
                  ← Back to Homepage
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
