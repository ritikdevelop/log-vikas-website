export default function AdminSetupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Admin Setup Guide
          </h1>

          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <h2 className="text-lg font-semibold text-blue-900 mb-2">
                Admin Credentials
              </h2>
              <p className="text-blue-800 mb-3">
                The admin account has been pre-configured with the following
                credentials:
              </p>
              <div className="bg-blue-100 p-3 rounded-lg">
                <ul className="text-blue-900 font-medium space-y-1">
                  <li>
                    <strong>Email:</strong> admin@logvikas.com
                  </li>
                  <li>
                    <strong>Password:</strong> Admin@123
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <h2 className="text-lg font-semibold text-green-900 mb-2">
                Setup Instructions
              </h2>
              <p className="text-green-800 mb-2">
                Run the following SQL scripts to set up the admin account:
              </p>
              <ol className="text-green-800 list-decimal list-inside space-y-1">
                <li>
                  <code className="bg-green-100 px-2 py-1 rounded">
                    scripts/006_setup_admin_account.sql
                  </code>
                </li>
                <li>
                  <code className="bg-green-100 px-2 py-1 rounded">
                    scripts/007_alternative_admin_setup.sql
                  </code>{" "}
                  (if needed)
                </li>
              </ol>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
              <h2 className="text-lg font-semibold text-purple-900 mb-2">
                Admin Login
              </h2>
              <p className="text-purple-800">
                Use{" "}
                <a href="/auth/admin-login" className="underline font-medium">
                  /auth/admin-login
                </a>{" "}
                with the credentials above to access the admin dashboard.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h2 className="text-lg font-semibold text-yellow-900 mb-2">
                Important Notes
              </h2>
              <ul className="text-yellow-800 list-disc list-inside space-y-1">
                <li>
                  Admin credentials are pre-configured: admin@logvikas.com /
                  Admin@123
                </li>
                <li>Admin and user logins are separate systems</li>
                <li>Only admin role users can access /admin routes</li>
                <li>
                  Change the default password after first login for security
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href="/auth/admin-login"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Admin Login
            </a>
            <a
              href="/admin"
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Go to Admin Dashboard
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
