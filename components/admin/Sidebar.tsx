"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  // Check if the dashboard page is active
  const isDashboardActive = pathname === "/admin/dashboard";

  // Go back to the login page
  const handleLogout = () => {
    router.push("/admin/login");
  };

  return (
    <aside className="hidden w-[240px] flex-col bg-[#0b7656] px-5 py-7 text-white md:flex">
      {/* Logo */}
      <div className="mb-8 border-b border-white/10 pb-5">
        <Image
          src="/image/logo.png"
          alt="Green Holiday Logo"
          width={190}
          height={70}
          className="h-auto w-[190px] object-contain"
          priority
        />
      </div>

      {/* Navigation menu */}
      <nav className="space-y-2 text-sm">
        {/* Dashboard */}
        <button
          type="button"
          onClick={() => router.push("/admin/dashboard")}
          className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition ${
            isDashboardActive
              ? "bg-[#439646] font-semibold text-white"
              : "text-white/90 hover:bg-white/10"
          }`}
        >
          <span>▦</span>
          <span>Dashboard</span>
        </button>

        {/* Bookings */}
        <div className="flex items-center gap-3 rounded-lg px-4 py-3 text-white/90">
          <span>▣</span>
          <span>Bookings</span>
        </div>

        {/* Vehicles */}
        <div className="flex items-center gap-3 rounded-lg px-4 py-3 text-white/90">
          <span>🚐</span>
          <span>Vehicles</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-3 rounded-lg px-4 py-3 text-white/90">
          <span>▤</span>
          <span>Pricing</span>
        </div>

        {/* Customers */}
        <div className="flex items-center gap-3 rounded-lg px-4 py-3 text-white/90">
          <span>♙</span>
          <span>Customers</span>
        </div>

        {/* Feedback */}
        <div className="flex items-center gap-3 rounded-lg px-4 py-3 text-white/90">
          <span>▢</span>
          <span>Feedback</span>
        </div>

        {/* Reports */}
        <div className="flex items-center gap-3 rounded-lg px-4 py-3 text-white/90">
          <span>▥</span>
          <span>Reports</span>
        </div>

        {/* Backup */}
        <div className="flex items-center gap-3 rounded-lg px-4 py-3 text-white/90">
          <span>◉</span>
          <span>Backup</span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 rounded-lg px-4 py-3 text-white/90">
          <span>♙</span>
          <span>Profile</span>
        </div>
      </nav>

      {/* Logout button */}
      <div className="mt-auto border-t border-white/15 pt-5">
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-white/90 transition hover:bg-white/10"
        >
          <span>↪</span>
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
}