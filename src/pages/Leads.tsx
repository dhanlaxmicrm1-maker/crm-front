import { useEffect, useState } from "react";
import api from "../services/api";

import {
  Search,
  Download,
  UserPlus,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Leads() {
  const [leads, setLeads] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await api.get("/leads");

      setLeads(res.data);
    }

    catch (err) {
      console.log(err);
    }
  };

  const filteredLeads = leads.filter((lead) =>
    lead.name
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  const statusBadge = (status: string) => {
    let styles =
      "bg-slate-100 text-slate-600";

    if (status === "Converted") {
      styles = "bg-green-100 text-green-700";
    }

    if (status === "Interested") {
      styles = "bg-blue-100 text-blue-700";
    }

    if (status === "Follow-Up Pending") {
      styles = "bg-yellow-100 text-yellow-700";
    }

    return (
      <span
        className={`px-3 py-1 rounded-full text-xs ${styles}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>

          <h1 className="text-4xl font-bold text-slate-900">
            Leads
          </h1>

          <p className="text-slate-500 mt-2">
            Manage all customer inquiries
          </p>

        </div>

        <Link
          to="/add-lead"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <UserPlus size={18} />

          Add Lead
        </Link>

      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">

        <div className="p-4 border-b">

          <div className="flex gap-3">

            <div className="relative flex-1">

              <Search
                size={18}
                className="absolute left-3 top-3 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search lead..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-full border rounded-xl pl-10 py-3 outline-none"
              />

            </div>

            <button
              className="border rounded-xl px-4 flex items-center gap-2"
            >
              <Download size={16} />

              Export
            </button>

          </div>

        </div>

        {/* Table */}

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-slate-50 border-b">

              <tr>

                <th className="text-left p-4">
                  Name
                </th>

                <th className="text-left p-4">
                  Mobile
                </th>

                <th className="text-left p-4">
                  Email
                </th>

                <th className="text-left p-4">
                  Category
                </th>

                <th className="text-left p-4">
                  Product
                </th>

                <th className="text-left p-4">
                  Premium
                </th>

                <th className="text-left p-4">
                  Follow Up
                </th>

                <th className="text-left p-4">
                  Contact Method
                </th>

                <th className="text-left p-4">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredLeads.map((lead) => (

                <tr
                  key={lead._id}
                  className="border-b hover:bg-slate-50"
                >

                  <td className="p-4 font-medium">
                    {lead.name}
                  </td>

                  <td className="p-4">
                    {lead.mobile}
                  </td>

                  <td className="p-4">
                    {lead.email}
                  </td>

                  <td className="p-4">
                    {lead.productCategory}
                  </td>

                  <td className="p-4">
                    {lead.productType}
                  </td>

                  <td className="p-4">
                    ₹{lead.premiumAmount}
                  </td>

                  <td className="p-4">
                    {lead.followUpDate}
                  </td>

                  <td className="p-4">
                    {lead.contactMethod}
                  </td>

                  <td className="p-4">
                    {statusBadge(
                      lead.status
                    )}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        <div className="p-4 text-sm text-slate-500">

          Total Leads: {filteredLeads.length}

        </div>

      </div>

    </div>
  );
}
