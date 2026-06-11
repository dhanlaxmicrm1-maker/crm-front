import { Search, Download, Plus } from "lucide-react";

export default function VehicleInsurance() {
  return (
    <div className="p-4 bg-slate-50 min-h-screen">

      <div className="mb-4">
        <h1 className="text-3xl font-bold text-slate-900">
          Vehicle Insurance
        </h1>

        <p className="text-xs text-slate-500">
          Vehicle policies and renewals
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4">

        <div className="flex justify-between items-center mb-4">

          <div className="relative w-[320px]">
            <Search
              size={14}
              className="absolute left-3 top-2.5 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search vehicle..."
              className="w-full bg-slate-50 rounded-lg pl-9 py-2 text-sm outline-none"
            />
          </div>

          <div className="flex gap-2">

            <button className="bg-slate-100 px-3 py-2 rounded-lg flex items-center gap-2 text-sm">
              <Download size={14} />
              Export
            </button>

            <button className="bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center gap-2 text-sm">
              <Plus size={14} />
              Add Policy
            </button>

          </div>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full border border-slate-200 text-xs">

            <thead>
              <tr className="bg-slate-100">

                <th className="border p-2 text-left">
                  Customer Name
                </th>

                <th className="border p-2 text-left">
                  Vehicle Type
                </th>

                <th className="border p-2 text-left">
                  Vehicle Number
                </th>

                <th className="border p-2 text-left">
                  Mobile Number
                </th>

                <th className="border p-2 text-left">
                  Premium
                </th>

                <th className="border p-2 text-left">
                  Offer Price
                </th>

                <th className="border p-2 text-left">
                  Discount
                </th>

                <th className="border p-2 text-left">
                  Cost
                </th>

                <th className="border p-2 text-left">
                  Insurer
                </th>

                <th className="border p-2 text-left">
                  Agent Company
                </th>

              </tr>
            </thead>

            <tbody>

              <tr>

                <td className="border p-2">
                  Rahul Sharma
                </td>

                <td className="border p-2">
                  Car
                </td>

                <td className="border p-2">
                  GJ10AB1234
                </td>

                <td className="border p-2">
                  9876543210
                </td>

                <td className="border p-2">
                  ₹18,000
                </td>

                <td className="border p-2">
                  ₹17,500
                </td>

                <td className="border p-2">
                  ₹500
                </td>

                <td className="border p-2">
                  ₹16,000
                </td>

                <td className="border p-2">
                  ICICI Lombard
                </td>

                <td className="border p-2">
                  ABC Insurance
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}
