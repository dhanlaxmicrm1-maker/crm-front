import {
  Users,
  UserPlus,
  CheckSquare,
  CheckCircle,
  CreditCard,
  Landmark,
} from "lucide-react";

import DashboardLeadChart from "../components/dashboard/DashboardLeadChart";
import DashboardSourceChart from "../components/dashboard/DashboardSourceChart";

export default function Dashboard() {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">

      {/* Header */}

      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-800">
          Welcome back, Riya
        </h1>

        <p className="text-sm text-slate-500">
          Here's what's happening across your firm today
        </p>
      </div>

      {/* KPI Cards */}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 mb-6">

  <div className="bg-white rounded-2xl p-4 shadow-sm">
    <div className="flex justify-between items-start mb-5">
      <UserPlus size={18} className="text-sky-500" />
      <span className="text-xs text-slate-500">+12%</span>
    </div>

    <h3 className="text-4xl font-semibold">142</h3>

    <p className="text-sm text-slate-500 mt-2">
      Total Leads
    </p>
  </div>

  <div className="bg-white rounded-2xl p-4 shadow-sm">
    <div className="flex justify-between items-start mb-5">
      <Users size={18} className="text-slate-600" />
      <span className="text-xs text-slate-500">+4%</span>
    </div>

    <h3 className="text-4xl font-semibold">86</h3>

    <p className="text-sm text-slate-500 mt-2">
      Active Clients
    </p>
  </div>

  <div className="bg-white rounded-2xl p-4 shadow-sm">
    <div className="flex justify-between items-start mb-5">
      <CheckSquare size={18} className="text-amber-500" />
      <span className="text-xs text-slate-500">-3</span>
    </div>

    <h3 className="text-4xl font-semibold">17</h3>

    <p className="text-sm text-slate-500 mt-2">
      Pending Tasks
    </p>
  </div>

  <div className="bg-white rounded-2xl p-4 shadow-sm">
    <div className="flex justify-between items-start mb-5">
      <CheckCircle size={18} className="text-emerald-500" />
      <span className="text-xs text-slate-500">+22</span>
    </div>

    <h3 className="text-4xl font-semibold">124</h3>

    <p className="text-sm text-slate-500 mt-2">
      Completed Tasks
    </p>
  </div>

  <div className="bg-white rounded-2xl p-4 shadow-sm">
    <div className="flex justify-between items-start mb-5">
      <CreditCard size={18} className="text-cyan-500" />
      <span className="text-xs text-slate-500">+2</span>
    </div>

    <h3 className="text-4xl font-semibold">9</h3>

    <p className="text-sm text-slate-500 mt-2">
      SIP Pending
    </p>
  </div>

  <div className="bg-white rounded-2xl p-4 shadow-sm">
    <div className="flex justify-between items-start mb-5">
      <Landmark size={18} className="text-orange-500" />
      <span className="text-xs text-slate-500">-1</span>
    </div>

    <h3 className="text-4xl font-semibold">6</h3>

    <p className="text-sm text-slate-500 mt-2">
      Account Openings Pending
    </p>
  </div>

</div>  

{/* Charts Row */}

<div className="grid grid-cols-1 xl:grid-cols-4 gap-5 mb-6">

  <div className="xl:col-span-3 bg-white rounded-2xl p-5 shadow-sm">

    <div className="mb-4">
      <h2 className="font-semibold">
        Leads & Conversions
      </h2>

      <p className="text-xs text-slate-500">
        Last 6 months
      </p>
    </div>

    <div className="h-[300px]">
      <DashboardLeadChart />
    </div>

  </div>

  <div className="bg-white rounded-2xl p-5 shadow-sm">

    <div className="mb-4">
      <h2 className="font-semibold">
        Lead Sources
      </h2>

      <p className="text-xs text-slate-500">
        Distribution this quarter
      </p>
    </div>

    <div className="h-[300px]">
      <DashboardSourceChart />
    </div>

  </div>

</div>
      {/* Followups + Activity */}

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 mb-6">

        <div className="xl:col-span-3 bg-white rounded-2xl shadow-sm">

          <div className="p-5 border-b">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">
                Upcoming Follow-ups
              </h2>

              <button className="text-sm text-blue-600">
                View all
              </button>
            </div>
          </div>

          <div className="divide-y">

            <div className="p-4 flex justify-between">
              <div>
                <p className="font-medium">
                  Collect KYC documents
                </p>

                <p className="text-xs text-slate-500">
                  Rahul Sharma • Due 2026-05-12
                </p>
              </div>

              <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600">
                In Progress
              </span>
            </div>

            <div className="p-4 flex justify-between">
              <div>
                <p className="font-medium">
                  Process SIP registration ₹10,000
                </p>

                <p className="text-xs text-slate-500">
                  Priya Iyer • Due 2026-05-11
                </p>
              </div>

              <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600">
                In Progress
              </span>
            </div>

            <div className="p-4 flex justify-between">
              <div>
                <p className="font-medium">
                  Call new lead
                </p>

                <p className="text-xs text-slate-500">
                  Karan Mehta • Due 2026-05-10
                </p>
              </div>

              <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                Pending
              </span>
            </div>

            <div className="p-4 flex justify-between">
              <div>
                <p className="font-medium">
                  E-mandate follow up
                </p>

                <p className="text-xs text-slate-500">
                  Sneha Kapoor • Due 2026-05-13
                </p>
              </div>

              <span className="text-xs px-3 py-1 rounded-full bg-amber-100 text-amber-700">
                Follow-up Required
              </span>
            </div>

          </div>

        </div>

        <div className="bg-white rounded-2xl shadow-sm">

          <div className="p-5 border-b">
            <h2 className="font-semibold">
              Recent Activity
            </h2>
          </div>

          <div className="divide-y">

            <div className="p-4">
              <p className="text-sm font-medium">
                New lead from website
              </p>

              <p className="text-xs text-slate-500">
                10 min ago
              </p>
            </div>

            <div className="p-4">
              <p className="text-sm font-medium">
                Task completed
              </p>

              <p className="text-xs text-slate-500">
                1 hr ago
              </p>
            </div>

            <div className="p-4">
              <p className="text-sm font-medium">
                KYC uploaded
              </p>

              <p className="text-xs text-slate-500">
                2 hr ago
              </p>
            </div>

            <div className="p-4">
              <p className="text-sm font-medium">
                Account opened
              </p>

              <p className="text-xs text-slate-500">
                Yesterday
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Website Inquiries */}

      <div className="bg-white rounded-2xl shadow-sm">

        <div className="p-5 border-b flex justify-between">

          <h2 className="font-semibold">
            New Website Inquiries
          </h2>

          <button className="text-sm text-blue-600">
            All leads
          </button>

        </div>

        <div className="divide-y">

          <div className="p-4 flex justify-between items-center">
            <div>
              <p className="font-medium">
                Karan Mehta
              </p>

              <p className="text-xs text-slate-500">
                +91 90123 45678 • Website
              </p>
            </div>

            <button className="text-blue-600 text-sm">
              Open
            </button>
          </div>

          <div className="p-4 flex justify-between items-center">
            <div>
              <p className="font-medium">
                Arjun Desai
              </p>

              <p className="text-xs text-slate-500">
                +91 91234 87654 • Website
              </p>
            </div>

            <button className="text-blue-600 text-sm">
              Open
            </button>
          </div>

          <div className="p-4 flex justify-between items-center">
            <div>
              <p className="font-medium">
                Rohit Khanna
              </p>

              <p className="text-xs text-slate-500">
                +91 90090 12121 • Website
              </p>
            </div>

            <button className="text-blue-600 text-sm">
              Open
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
