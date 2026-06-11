import { useParams } from "react-router-dom";
import { leads } from "../data/leads";

export default function ConvertLead() {
  const { id } = useParams();

  const lead = leads.find(
    (l) => l.id.toString() === id
  );

  if (!lead) {
    return (
      <div className="p-6">
        Lead not found
      </div>
    );
  }

  return (
    <div className="p-8 bg-slate-50 min-h-screen">

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Convert Lead
        </h1>

        <p className="text-slate-500 text-sm mt-1">
          Create a complete client profile
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-sm p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>

            <label className="block text-sm font-medium mb-2">
              Client Code
            </label>

            <input
              defaultValue={`CL-${lead.id}`}
              className="w-full border border-slate-200 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Full Name
            </label>

            <input
              defaultValue={lead.client}
              className="w-full border border-slate-200 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Mobile Number
            </label>

            <input
              defaultValue={lead.phone}
              className="w-full border border-slate-200 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Email
            </label>

            <input
              placeholder="Enter email"
              className="w-full border border-slate-200 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Date Of Birth
            </label>

            <input
              type="date"
              className="w-full border border-slate-200 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Occupation
            </label>

            <input
              placeholder="Business / Salaried"
              className="w-full border border-slate-200 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              PAN Number
            </label>

            <input
              placeholder="ABCDE1234F"
              className="w-full border border-slate-200 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Aadhaar Number
            </label>

            <input
              placeholder="XXXX XXXX XXXX"
              className="w-full border border-slate-200 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              City
            </label>

            <input
              placeholder="City"
              className="w-full border border-slate-200 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              State
            </label>

            <input
              placeholder="State"
              className="w-full border border-slate-200 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Lead Source
            </label>

            <input
              defaultValue={lead.source}
              className="w-full border border-slate-200 rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Interested Service
            </label>

            <input
              defaultValue={lead.service}
              className="w-full border border-slate-200 rounded-xl px-4 py-3"
            />

          </div>

        </div>

        <div className="mt-6">

          <label className="block text-sm font-medium mb-2">
            Notes
          </label>

          <textarea
            rows={4}
            placeholder="Client notes..."
            className="w-full border border-slate-200 rounded-xl p-4"
          />

        </div>

        <div className="flex gap-4 mt-8">

          <button
            className="
              bg-green-600
              hover:bg-green-700
              text-white
              px-6
              py-3
              rounded-xl
              font-medium
            "
          >
            Convert To Client
          </button>

          <button
            className="
              border
              border-slate-200
              bg-white
              px-6
              py-3
              rounded-xl
            "
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
}