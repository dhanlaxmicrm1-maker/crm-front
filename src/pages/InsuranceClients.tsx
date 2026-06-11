import { insuranceClients } from "../data/insuranceClients";
import { Search } from "lucide-react";

export default function InsuranceClients() {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">

      <div className="mb-6">

        <h1 className="text-4xl font-bold text-slate-900">
          Insurance Clients
        </h1>

        <p className="text-slate-500 mt-2">
          Active policy holders, renewals and commissions
        </p>

      </div>

      <div className="bg-white rounded-3xl shadow-sm p-5">

        <div className="relative w-[420px] mb-5">

          <Search
            size={18}
            className="absolute left-3 top-3 text-slate-400"
          />

          <input
            placeholder="Search..."
            className="w-full bg-slate-50 rounded-xl pl-10 py-3 outline-none"
          />

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-50">

              <tr>

                <th className="p-4 text-left font-medium">
                  Client
                </th>

                <th className="p-4 text-left font-medium">
                  Policy #
                </th>

                <th className="p-4 text-left font-medium">
                  Product
                </th>

                <th className="p-4 text-left font-medium">
                  Premium
                </th>

                <th className="p-4 text-left font-medium">
                  Commission
                </th>

                <th className="p-4 text-left font-medium">
                  Renewal
                </th>

              </tr>

            </thead>

            <tbody>

              {insuranceClients.map((client) => (

                <tr
                  key={client.id}
                  className="hover:bg-slate-50 transition"
                >

                  <td className="p-4 font-medium">
                    {client.client}
                  </td>

                  <td className="p-4">
                    {client.policyNo}
                  </td>

                  <td className="p-4">
                    {client.product}
                  </td>

                  <td className="p-4">
                    ₹{client.premium.toLocaleString()}
                  </td>

                  <td className="p-4 text-green-600 font-medium">
                    ₹{client.commission.toLocaleString()}
                  </td>

                  <td className="p-4">
                    {client.renewal}
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