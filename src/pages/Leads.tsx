import { useEffect, useState } from "react";
import api from "../services/api";
import { Search, Download, UserPlus } from "lucide-react";

export default function Leads() {
  const [leads, setLeads] = useState<any[]>([]);

  useEffect(() => {
    api
      .get("/leads")
      .then((res) => setLeads(res.data))
      .catch((err) => console.log(err));
  }, []);

  const statusBadge = (status: string) => {
    return (
      <span className="px-2 py-0.5 rounded-full text-[11px] bg-slate-100 text-slate-600 border">
        • {status}
      </span>
    );
  };

  return (
    <div className="p-4 bg-slate-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-4xl font-semibold text-slate-800">
          Leads
        </h1>

        <p className="text-sm text-slate-500 mt-2">
          Inquiries from your website and referrals.
          Assign and convert to clients.
        </p>
      </div>

      <div className="flex justify-end gap-3 mb-5">
        <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl text-sm">
          <Download size={16} />
          Export
        </button>

        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm">
          <UserPlus size={16} />
          Add Lead
        </button>
      </div>

      <div className="bg-white rounded-3xl border overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-3 top-3 text-slate-400"
              />

              <input
                placeholder="Search by name, code, contact..."
                className="w-full border rounded-xl pl-10 py-2.5"
              />
            </div>

            <select className="border rounded-xl px-4">
              <option>All employees</option>
            </select>

            <select className="border rounded-xl px-4">
              <option>All statuses</option>
            </select>

            <a
  href="/add-lead"
  className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm"
>
  <UserPlus size={16} />
  Add Lead
</a>
          </div>
        </div>

        <table className="w-full text-[11px]">
          <thead>
            <tr className="text-left text-xs text-slate-500 border-b">
              <th className="px-3 py-2">Client</th>
              <th className="px-3 py-2">Phone</th>
              <th className="px-3 py-2">Source</th>
              <th className="px-3 py-2">Code</th>
              <th className="px-3 py-2">Referred By</th>
              <th className="px-3 py-2">Task</th>
              <th className="px-3 py-2">Processed By</th>
              <th className="px-3 py-2">Documents</th>
              <th className="px-3 py-2">Account</th>
              <th className="px-3 py-2">Mandate</th>
              <th className="px-3 py-2">SIP</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead._id}
                className="border-b hover:bg-slate-50"
              >
                <td className="p-4 text-sm">{lead.client}</td>

                <td className="p-4 text-sm">{lead.phone}</td>

                <td className="p-4 text-sm">{lead.source}</td>

                <td className="p-4 text-sm">{lead.code}</td>

                <td className="p-4 text-sm">{lead.referredBy}</td>

                <td className="p-4 text-sm">{lead.task}</td>

                <td className="p-4 text-sm">{lead.processedBy}</td>

                <td className="p-4 text-sm">
                  {statusBadge(lead.documents)}
                </td>

                <td className="p-4 text-sm">
                  {statusBadge(lead.account)}
                </td>

                <td className="p-4 text-sm">
                  {statusBadge(lead.mandate)}
                </td>

                <td className="p-4 text-sm">
                  {statusBadge(lead.sip)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="p-4 text-sm text-slate-500">
          Showing {leads.length} leads
        </div>
      </div>
    </div>
  );
}
