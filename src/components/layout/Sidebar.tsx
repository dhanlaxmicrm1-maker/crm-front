import {
  LayoutDashboard,
  CheckSquare,
  BarChart3,
  Bell,
  Settings,
  Users,
  Landmark,
  UserPlus,
  Shield,
  Car,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuClass = (path: string) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
      location.pathname === path
        ? "bg-blue-50 text-blue-600 font-medium"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <aside
      className="
        fixed
        left-0
        top-0
        h-screen
        w-72
        bg-white
        shadow-sm
        flex
        flex-col
        z-50
      "
    >
      {/* Logo */}

      <div className="h-[72px] px-6 flex items-center border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
            F
          </div>

          <div>
            <h1 className="font-bold text-lg">
              FinVest CRM
            </h1>

            <p className="text-xs text-gray-500">
              Wealth Management
            </p>
          </div>
        </div>
      </div>

      {/* Menu */}

      <div className="flex-1 p-4 overflow-y-auto">
        <p className="text-xs uppercase tracking-wider text-gray-400 mb-3 px-2">
          Workspace
        </p>

        <div className="space-y-1">
          <Link to="/" className={menuClass("/")}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>

          <Link to="/leads" className={menuClass("/leads")}>
            <UserPlus size={20} />
            <span>Leads</span>
          </Link>

          <Link to="/all-clients" className={menuClass("/all-clients")}>
            <Users size={20} />
            <span>All Clients</span>
          </Link>

          <Link
            to="/insurance-clients"
            className={menuClass("/insurance-clients")}
          >
            <Shield size={20} />
            <span>Insurance Clients</span>
          </Link>

          <Link
            to="/vehicle-insurance"
            className={menuClass("/vehicle-insurance")}
          >
            <Car size={20} />
            <span>Vehicle Insurance</span>
          </Link>

          <Link
            to="/mutualfund-clients"
            className={menuClass("/mutualfund-clients")}
          >
            <Landmark size={20} />
            <span>Mutual Funds</span>
          </Link>

          <Link to="/tasks" className={menuClass("/tasks")}>
            <CheckSquare size={20} />
            <span>Tasks</span>
          </Link>

          <Link to="/analytics" className={menuClass("/analytics")}>
            <BarChart3 size={20} />
            <span>Analytics</span>
          </Link>
        </div>

        <p className="text-xs uppercase tracking-wider text-gray-400 mt-8 mb-3 px-2">
          System
        </p>

        <div className="space-y-1">
          <Link
            to="/notifications"
            className={menuClass("/notifications")}
          >
            <Bell size={20} />
            <span>Notifications</span>
          </Link>

          <Link to="/settings" className={menuClass("/settings")}>
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </div>
      </div>

      {/* User Card */}

      <div className="p-4">
        <div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            R
          </div>

          <div>
            <p className="font-semibold">
              Riya Sharma
            </p>

            <p className="text-xs text-gray-500">
              Senior Advisor
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
