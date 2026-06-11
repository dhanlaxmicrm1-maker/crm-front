type Props = {
  title: string;
  value: string;
};

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <p className="text-sm text-gray-500">
          {title}
        </p>

        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
          +12%
        </span>
      </div>

      <h2 className="text-4xl font-bold mt-4">
        {value}
      </h2>

      <p className="text-xs text-gray-400 mt-3">
        Compared to last month
      </p>
    </div>
  );
}