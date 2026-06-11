import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "MOSL", value: 42 },
  { name: "NJ", value: 31 },
  { name: "Referral", value: 27 },
  { name: "Website", value: 18 },
];

const COLORS = [
  "#1d72b8",
  "#14b8a6",
  "#8b5cf6",
  "#eab308",
];

export default function DashboardSourceChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>

        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={3}
        >
          {data.map((_, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip />

        <Legend
          verticalAlign="bottom"
          height={36}
        />

      </PieChart>
    </ResponsiveContainer>
  );
}