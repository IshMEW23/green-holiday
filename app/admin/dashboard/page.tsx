"use client";
import Sidebar from "@/components/admin/Sidebar";
import DashboardCard from "@/components/admin/DashboardCard";

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-[#f5f7f5]">
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <Sidebar />

        {/* Dashboard area */}
        <div className="flex min-w-0 flex-1 flex-col">

          {/* Header */}
          <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-10">

            {/* Header title */}
            <div className="flex items-center">
              <h2 className="font-serif text-xl font-bold text-[#0b6b4b]">
                Green Holiday
              </h2>

              <div className="mx-4 h-6 w-px bg-gray-300" />

              <p className="text-sm text-[#66736a]">
                Dashboard Overview
              </p>
            </div>

            {/* Admin profile */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-[#0b6b4b]">
                A
              </div>

              <span className="text-sm font-semibold text-[#17251b]">
                Super Admin
              </span>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1 px-10 py-10">

            {/* Welcome section */}
            <section>
              <h1 className="font-serif text-[31px] font-bold text-[#0b6b4b]">
                Welcome Back, Admin
              </h1>

              <p className="mt-1 text-[15px] text-[#66736a]">
                Here is the operation throughput and system status for Green
                Holiday Sri Lanka today.
              </p>
            </section>

            {/* Dashboard cards */}
            <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
              <DashboardCard
                title="TOTAL BOOKINGS"
                value="1,284"
                subtitle="↑ 12% vs yesterday"
              />

              <DashboardCard
                title="PENDING APPROVAL"
                value="42"
                subtitle="Requires attention"
              />

              <DashboardCard
                title="CONFIRMED TOURS"
                value="984"
                subtitle="Active itineraries"
              />
            </section>

            {/* Recent bookings */}
            <section className="mt-8 rounded-xl border border-gray-200 bg-white px-6 py-6">

              {/* Table heading */}
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-serif text-xl font-bold text-[#0b6b4b]">
                  Recent Bookings
                </h2>

                <span className="text-sm font-semibold text-[#439646]">
                  View All Bookings →
                </span>
              </div>

              {/* Booking table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-[#f5f7f5]">
                      <th className="px-3 py-3 font-semibold">
                        Booking ID
                      </th>

                      <th className="px-3 py-3 font-semibold">
                        Customer
                      </th>

                      <th className="px-3 py-3 font-semibold">
                        Date
                      </th>

                      <th className="px-3 py-3 font-semibold">
                        Vehicle
                      </th>

                      <th className="px-3 py-3 font-semibold">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>

                    {/* First booking */}
                    <tr className="border-b border-gray-200">
                      <td className="px-3 py-4 font-semibold">
                        GH-2026/9421
                      </td>

                      <td className="px-3 py-4">
                        Sarah Jenkins
                      </td>

                      <td className="px-3 py-4 text-[#66736a]">
                        June 15, 2026
                      </td>

                      <td className="px-3 py-4">
                        Executive Minivan
                      </td>

                      <td className="px-3 py-4">
                        <span className="rounded-md bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                          CONFIRMED
                        </span>
                      </td>
                    </tr>

                    {/* Second booking */}
                    <tr className="border-b border-gray-200">
                      <td className="px-3 py-4 font-semibold">
                        GH-2026/9422
                      </td>

                      <td className="px-3 py-4">
                        David Miller
                      </td>

                      <td className="px-3 py-4 text-[#66736a]">
                        June 18, 2026
                      </td>

                      <td className="px-3 py-4">
                        Luxury SUV
                      </td>

                      <td className="px-3 py-4">
                        <span className="rounded-md bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                          PENDING
                        </span>
                      </td>
                    </tr>

                    {/* Third booking */}
                    <tr>
                      <td className="px-3 py-4 font-semibold">
                        GH-2026/9423
                      </td>

                      <td className="px-3 py-4">
                        Hiroshi Tanaka
                      </td>

                      <td className="px-3 py-4 text-[#66736a]">
                        June 20, 2026
                      </td>

                      <td className="px-3 py-4">
                        Premium Sedan
                      </td>

                      <td className="px-3 py-4">
                        <span className="rounded-md bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                          CANCELLED
                        </span>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="flex items-center justify-between border-t border-gray-200 bg-white px-10 py-5 text-xs text-[#66736a]">
            <p>
              © 2026 Green Holiday (Pvt) Ltd. All Rights Reserved. Internal
              Management console.
            </p>

            <div className="flex gap-6">
              <span>Security Policy</span>
              <span>System Logs</span>
              <span>v2.4.1-Stable</span>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}