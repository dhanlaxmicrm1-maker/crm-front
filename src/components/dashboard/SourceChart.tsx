import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Riya",
    leads: 18,
    conversions: 12,
    pending: 4,
  },
  {
    name: "Amit",
    leads: 16,
    conversions: 11,
    pending: 5,
  },
  {
    name: "Neha",
    leads: 14,
    conversions: 10,
    pending: 6,
  },
  {
    name: "Vikram",
    leads: 12,
    conversions: 9,
    pending: 7,
  },
  {
    name: "Priya",
    leads: 10,
    conversions: 8,
    pending: 8,
  },
];

export default function SourceChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar
          dataKey="leads"
          fill="#2563eb"
          radius={[4, 4, 0, 0]}
        />

        <Bar
          dataKey="conversions"
          fill="#14b8a6"
          radius={[4, 4, 0, 0]}
        />

        <Bar
          dataKey="pending"
          fill="#f59e0b"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}