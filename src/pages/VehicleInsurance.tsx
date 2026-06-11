import { vehiclePolicies } from "../data/vehiclePolicies";
import { Search, Download, Plus } from "lucide-react";

export default function VehicleInsurance() {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">

      <div className="mb-6">
        <h1 className="text-4xl font-bold text-slate-900">
          Vehicle Insurance
        </h1>

        <p className="text-slate-500 mt-2">
          Vehicle policies and renewals
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm p-5">

        <div className="flex justify-between items-center mb-6">

          <div className="relative w-[420px]">

            <Search
              size={18}
              className="absolute left-3 top-3.5 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search vehicle policy..."
              className="w-full bg-slate-50 rounded-xl pl-10 py-3 outline-none"
            />

          </div>

          <div className="flex gap-3">

            <button className="bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl flex items-center gap-2 transition">
              <Download size={16} />
              Export
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition">
              <Plus size={16} />
              Add Policy
            </button>

          </div>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="bg-slate-50 text-slate-600">

                <th className="p-4 text-left font-medium">
                  Owner
                </th>

                <th className="p-4 text-left font-medium">
                  Vehicle Number
                </th>

                <th className="p-4 text-left font-medium">
                  Vehicle Type
                </th>

                <th className="p-4 text-left font-medium">
                  Premium
                </th>

                <th className="p-4 text-left font-medium">
                  Renewal Date
                </th>

              </tr>
            </thead>

            <tbody>

              {vehiclePolicies.map((policy) => (

                <tr
                  key={policy.id}
                  className="hover:bg-slate-50 transition"
                >

                  <td className="p-4 font-medium">
                    {policy.owner}
                  </td>

                  <td className="p-4">
                    {policy.vehicleNumber}
                  </td>

                  <td className="p-4">
                    {policy.vehicleType}
                  </td>

                  <td className="p-4">
                    ₹{policy.premium.toLocaleString()}
                  </td>

                  <td className="p-4">
                    {policy.renewalDate}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}