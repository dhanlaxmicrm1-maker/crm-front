import { useEffect, useState } from "react";
import api from "../services/api";
import { Search, Download, Filter } from "lucide-react";

export default function AllClients() {
  const [clients, setClients] = useState<any[]>([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const res = await api.get("/clients");
      setClients(res.data);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="px-8 py-6 w-full">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Clients
          </h1>

          <p className="text-slate-500 mt-1">
            All onboarded clients.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 border border-slate-200 bg-white px-4 py-2 rounded-xl hover:bg-slate-50">
            <Download size={16} />
            Export
          </button>

          <button className="bg-slate-900 text-white px-4 py-2 rounded-xl">
            Add Client
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <div className="p-4 border-b border-slate-200">
          <div className="flex gap-3">

            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-3 top-3 text-slate-400"
              />

              <input
                placeholder="Search clients..."
                className="w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2 outline-none"
              />
            </div>

            <button className="border border-slate-200 rounded-xl px-3">
              <Filter size={18} />
            </button>

          </div>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-slate-50 border-b border-slate-200">
              <tr className="text-slate-600">
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Phone</th>
                <th className="text-left p-4">Email</th>
              </tr>
            </thead>

            <tbody>

              {clients.map((client) => (
                <tr
                  key={client._id}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >
                  <td className="p-4 font-medium">
                    {client.name}
                  </td>

                  <td className="p-4">
                    {client.phone}
                  </td>

                  <td className="p-4">
                    {client.email}
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

        <div className="p-4 text-sm text-slate-500">
          Total Clients: {clients.length}
        </div>

      </div>
    </div>
  );
}
