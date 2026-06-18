import { useEffect, useState } from "react";

import api from "../services/api";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  Users,
  Shield,
  Car,
  Landmark,
  IndianRupee,
  ClipboardCheck,
  Calendar,
  Clock,
} from "lucide-react";

const COLORS = [
  "#2563eb",
  "#14b8a6",
  "#f59e0b",
];

export default function Dashboard() {

  const [stats, setStats] = useState<any>({
    totalLeads: 0,
    insuranceClients: 0,
    vehiclePolicies: 0,
    mutualFundClients: 0,
    monthlyRevenue: 0,
    monthlyCommission: 0,
    upcomingRenewals: 0,
    followUps: 0,
    pendingTasks: 0,
    revenueData: [],
    serviceData: [],
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {

    try {

      const res = await api.get("/dashboard");

      setStats(res.data);

    }

    catch (err) {

      console.log(err);

    }

  };

  return (

    <div className="p-4 bg-slate-50 min-h-screen">

      <div className="mb-4">

        <h1 className="text-2xl font-bold text-slate-800">

          Executive Dashboard

        </h1>

        <p className="text-sm text-slate-500">

          Live business analytics across all modules

        </p>

      </div>

      {/* KPI CARDS */}

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-5">

        <Card
          title="Total Leads"
          value={stats.totalLeads}
          icon={<Users size={18} />}
        />

        <Card
          title="Insurance Clients"
          value={stats.insuranceClients}
          icon={<Shield size={18} />}
        />

        <Card
          title="Vehicle Insurance"
          value={stats.vehiclePolicies}
          icon={<Car size={18} />}
        />

        <Card
          title="Mutual Fund Clients"
          value={stats.mutualFundClients}
          icon={<Landmark size={18} />}
        />

        <Card
          title="Monthly Revenue"
          value={`₹${stats.monthlyRevenue.toLocaleString()}`}
          icon={<IndianRupee size={18} />}
        />

        <Card
          title="Monthly Commission"
          value={`₹${stats.monthlyCommission.toLocaleString()}`}
          icon={<IndianRupee size={18} />}
        />

        <Card
          title="Upcoming Renewals"
          value={stats.upcomingRenewals}
          icon={<Calendar size={18} />}
        />

        <Card
          title="Today's Follow-Ups"
          value={stats.followUps}
          icon={<Clock size={18} />}
        />

        <Card
          title="Pending Tasks"
          value={stats.pendingTasks}
          icon={<ClipboardCheck size={18} />}
        />

      </div>

      {/* Charts */}

      <div className="grid xl:grid-cols-4 gap-4 mb-5">

        <div className="xl:col-span-3 bg-white rounded-xl shadow-sm p-4">

          <h2 className="font-semibold text-sm mb-3">

            Revenue Trend (6 mo)

          </h2>

          <div className="h-[280px]">

            <ResponsiveContainer width="100%" height="100%">

              <LineChart data={stats.revenueData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#2563eb"
                  strokeWidth={3}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

        <div className="bg-white rounded-xl shadow-sm p-4">

          <h2 className="font-semibold text-sm mb-3">

            Service Distribution

          </h2>

          <div className="h-[280px]">

            <ResponsiveContainer width="100%" height={220}>

              <PieChart>

                <Pie
                  data={stats.serviceData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="38%"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={1}
                >

                  {stats.serviceData.map(
                    (_: any, index: number) => (

                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />

                    )
                  )}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>

  );
}

function Card({
  title,
  value,
  icon,
}: {
  title: string;
  value: any;
  icon: React.ReactNode;
}) {

  return (

    <div className="bg-white rounded-xl p-4 shadow-sm">

      <div className="flex justify-between mb-3">

        <span className="text-xs text-slate-500">

          {title}

        </span>

        {icon}

      </div>

      <h3 className="text-2xl font-bold text-slate-800">

        {value}

      </h3>

    </div>

  );
}
