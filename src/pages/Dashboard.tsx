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
  BarChart,
  Bar,
  Legend,
} from "recharts";
import {
  UserPlus,
  Shield,
  Car,
  Landmark,
  IndianRupee,
  ClipboardCheck,
  Calendar,
  Clock,
} from "lucide-react";

const PIE_COLORS = ["#2563eb", "#22c55e", "#f59e0b"];

const MOCK_RENEWALS = [
  { name: "Vivaan Patel",  sub: "Whole Life",            days: 8  },
  { name: "Vivaan Patel",  sub: "Vehicle MH2CD1074",     days: 9  },
  { name: "Aditya Reddy",  sub: "Health Floater",        days: 14 },
  { name: "Aditya Reddy",  sub: "Vehicle MH9EF1111",     days: 20 },
  { name: "Vihaan Gupta",  sub: "Critical Illness",      days: 23 },
];

const FALLBACK_TARGET = [
  { month: "Jan", target: 200000,  achievement: 150000  },
  { month: "Feb", target: 200000,  achievement: 180000  },
  { month: "Mar", target: 250000,  achievement: 210000  },
  { month: "Apr", target: 250000,  achievement: 230000  },
  { month: "May", target: 300000,  achievement: 260000  },
  { month: "Jun", target: 300000,  achievement: 2800000 },
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
    targetData: [],
  });

  useEffect(() => { fetchDashboard(); }, []);

  const fetchDashboard = async () => {
    try {
      const res = await api.get("/dashboard");
      setStats(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fmt = (n: number) =>
    `₹${Number(n).toLocaleString("en-IN")}`;

  const targetData =
    stats.targetData?.length ? stats.targetData : FALLBACK_TARGET;

  return (
    <div className="p-5 bg-slate-50 min-h-screen">

      {/* ── Title ─────────────────────────────── */}
      <div className="mb-5">
        <h1 className="text-xl font-bold text-slate-800">
          Executive Dashboard
        </h1>
        <p className="text-xs text-slate-500">
          Live business analytics across all modules
        </p>
      </div>

      {/* ── KPI Row 1 — 5 cards ───────────────── */}
      <div className="grid grid-cols-5 gap-3 mb-3">
        <KpiCard
          title="Total Leads"
          value={stats.totalLeads}
          icon={<UserPlus size={16} />}
        />
        <KpiCard
          title="Insurance Clients"
          value={stats.insuranceClients}
          icon={<Shield size={16} />}
        />
        <KpiCard
          title="Vehicle Insurance"
          value={stats.vehiclePolicies}
          icon={<Car size={16} />}
        />
        <KpiCard
          title="Mutual Fund Clients"
          value={stats.mutualFundClients}
          icon={<Landmark size={16} />}
        />
        <KpiCard
          title="Monthly Revenue"
          value={fmt(stats.monthlyRevenue)}
          icon={<IndianRupee size={16} />}
        />
      </div>

      {/* ── KPI Row 2 — 4 cards ───────────────── */}
      <div className="grid grid-cols-4 gap-3 mb-5">
        <KpiCard
          title="Monthly Commission"
          value={fmt(stats.monthlyCommission)}
          icon={<IndianRupee size={16} />}
        />
        <KpiCard
          title="Upcoming Renewals"
          value={stats.upcomingRenewals}
          icon={<Calendar size={16} />}
        />
        <KpiCard
          title="Today's Follow-Ups"
          value={stats.followUps}
          icon={<Clock size={16} />}
        />
        <KpiCard
          title="Pending Tasks"
          value={stats.pendingTasks}
          icon={<ClipboardCheck size={16} />}
        />
      </div>

      {/* ── Charts Row 1 ──────────────────────── */}
      <div className="grid grid-cols-4 gap-4 mb-4">

        {/* Revenue Trend — 3/4 */}
        <div className="col-span-3 bg-white rounded-xl border border-slate-100 p-4">
          <p className="text-sm font-semibold text-slate-700 mb-3">
            Revenue Trend (6 mo)
          </p>
          <div className="h-[230px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stats.revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 11, fill: "#94a3b8" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#94a3b8" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    fontSize: 12,
                    borderRadius: 8,
                    border: "1px solid #e2e8f0",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#2563eb"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#2563eb", strokeWidth: 0 }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Service Distribution — 1/4 */}
        <div className="bg-white rounded-xl border border-slate-100 p-4 flex flex-col">
          <p className="text-sm font-semibold text-slate-700 mb-2">
            Service Distribution
          </p>
          <div className="flex-1 flex flex-col items-center justify-center">
            <ResponsiveContainer width="100%" height={170}>
              <PieChart>
                <Pie
                  data={stats.serviceData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={42}
                  outerRadius={68}
                  paddingAngle={2}
                >
                  {stats.serviceData.map((_: any, i: number) => (
                    <Cell key={i} fill={PIE_COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    fontSize: 12,
                    borderRadius: 8,
                    border: "1px solid #e2e8f0",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>

            {/* Legend */}
            <div className="flex gap-3 mt-1">
              {[
                { label: "Insurance",    color: "#2563eb" },
                { label: "Vehicle",      color: "#22c55e" },
                { label: "Mutual Funds", color: "#f59e0b" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: item.color }}
                  />
                  <span className="text-[10px] text-slate-500">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Charts Row 2 ──────────────────────── */}
      <div className="grid grid-cols-4 gap-4">

        {/* Target vs Achievement — 3/4 */}
        <div className="col-span-3 bg-white rounded-xl border border-slate-100 p-4">
          <p className="text-sm font-semibold text-slate-700 mb-3">
            Target vs Achievement
          </p>
          <div className="h-[230px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={targetData} barCategoryGap="40%">
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 11, fill: "#94a3b8" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#94a3b8" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    fontSize: 12,
                    borderRadius: 8,
                    border: "1px solid #e2e8f0",
                  }}
                />
                <Legend
                  iconType="square"
                  iconSize={10}
                  wrapperStyle={{ fontSize: 11, paddingTop: 8 }}
                />
                <Bar
                  dataKey="target"
                  name="target"
                  fill="#1e3a5f"
                  radius={[3, 3, 0, 0]}
                  maxBarSize={28}
                />
                <Bar
                  dataKey="achievement"
                  name="Achievement"
                  fill="#2563eb"
                  radius={[3, 3, 0, 0]}
                  maxBarSize={28}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Upcoming Renewals — 1/4 */}
        <div className="bg-white rounded-xl border border-slate-100 p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-slate-700">
              Upcoming Renewals
            </p>
            <button className="text-xs text-blue-600 hover:underline">
              View
            </button>
          </div>

          <div className="divide-y divide-slate-50">
            {MOCK_RENEWALS.map((r, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2.5"
              >
                <div>
                  <p className="text-xs font-semibold text-slate-700 leading-tight">
                    {r.name}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {r.sub}
                  </p>
                </div>
                <span className="text-[10px] bg-red-500 text-white px-1.5 py-0.5 rounded font-semibold shrink-0">
                  {r.days}d
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

/* ── KPI Card ──────────────────────────────────────────────── */
function KpiCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: any;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 p-4">
      <div className="flex items-start justify-between mb-3">
        <span className="text-[11px] text-slate-500 leading-tight">
          {title}
        </span>
        <span className="text-blue-300">{icon}</span>
      </div>
      <p className="text-2xl font-bold text-slate-800 leading-none">
        {value}
      </p>
    </div>
  );
}
