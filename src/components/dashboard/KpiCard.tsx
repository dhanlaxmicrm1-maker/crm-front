interface KpiCardProps {
  title: string;
  value: string | number;
}

export default function KpiCard({
  title,
  value,
}: KpiCardProps) {
  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm">
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
}