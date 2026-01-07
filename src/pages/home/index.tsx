import  { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import {
  LogOut,
  Menu,
  X,
  Home,
  Users,
  BarChart3,
  Settings,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useOutletContext<{ user: User }>();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  // Menu items
  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: BarChart3, label: "Dashboard", href: "/admin/dashboard" },
    { icon: Users, label: "Users", href: "/admin/users" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  const stats = [
    { label: "Total Users", value: "1,234", icon: "👥", color: "from-blue-500 to-blue-600" },
    { label: "Revenue", value: "$45,230", icon: "💰", color: "from-green-500 to-green-600" },
    { label: "Orders", value: "892", icon: "📦", color: "from-purple-500 to-purple-600" },
    { label: "Growth", value: "+23%", icon: "📈", color: "from-orange-500 to-orange-600" },
  ];

  const recentActivities = [
    { id: 1, action: "New user registered", time: "2 hours ago", icon: "✨" },
    { id: 2, action: "Payment received", time: "4 hours ago", icon: "💳" },
    { id: 3, action: "System update completed", time: "1 day ago", icon: "⚙️" },
    { id: 4, action: "New order placed", time: "2 days ago", icon: "🛒" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-linear-to-b from-gray-900 to-gray-800 text-white transition-all duration-300 shadow-xl hidden md:block`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          {sidebarOpen && (
            <div>
              <h1 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Admin
              </h1>
              <p className="text-xs text-gray-400">Panel</p>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hover:bg-gray-700 p-2 rounded transition"
          >
            {sidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.href)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition text-left group"
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {sidebarOpen && <span className="text-sm">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* User Profile in Sidebar */}
        {sidebarOpen && (
          <div className="p-4 border-t border-gray-700">
            <div className="bg-gray-700 rounded-lg p-3">
              <p className="text-xs text-gray-400">Logged in as</p>
              <p className="text-sm font-semibold truncate">{user?.email}</p>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Left Side */}
            <div className="flex items-center gap-4 flex-1">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden hover:bg-gray-100 p-2 rounded transition"
              >
                <Menu className="w-6 h-6" />
              </button>

              {/* Search Bar */}
              <div className="hidden sm:flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg flex-1 max-w-md">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none text-sm w-full"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-6">
              {/* Notifications */}
              <button className="relative hover:bg-gray-100 p-2 rounded transition">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
                >
                  <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    {user?.name?.charAt(0).toUpperCase() || "A"}
                  </div>
                  <div className="hidden sm:flex items-center gap-1">
                    <span className="text-sm font-medium text-gray-700">
                      {user?.name || "User"}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                </button>

                {/* Dropdown Menu */}
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-sm font-semibold text-gray-800">
                        {user?.name}
                      </p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                      <p className="text-xs text-blue-600 mt-1 capitalize">
                        Role: {user?.role || "user"}
                      </p>
                    </div>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-700 transition">
                      Profile Settings
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-700 transition">
                      Change Password
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-red-50 text-sm text-red-600 flex items-center gap-2 transition border-t border-gray-200 mt-2 pt-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Chiqish
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Assalomu alaykum, {user?.name || "Admin"}! 👋
            </h1>
            <p className="text-gray-600 mt-2">
              Xush kelibsiz admin paneliga. Quyida asosiy statistika ko'rsatilmoqulaydi.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={`text-3xl bg-linear-to-br ${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}
                  >
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                So'nggi Faoliyat
              </h2>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition"
                  >
                    <div className="text-2xl">{activity.icon}</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.action}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Tez ma'lumot
              </h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-blue-900">Email:</span>{" "}
                    {user?.email}
                  </p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-indigo-900">
                      Role:
                    </span>{" "}
                    {user?.role || "User"}
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-purple-900">
                      Status:
                    </span>{" "}
                    Active ✅
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;