import { useState } from "react";
import { Search, Download, Plus } from "lucide-react";
import { vehiclePolicies } from "../data/vehiclePolicies";

export default function VehicleInsurance() {
  const [policies, setPolicies] = useState(vehiclePolicies);

const [showModal, setShowModal] = useState(false);

const [newPolicy, setNewPolicy] = useState({
  customerName: "",
  vehicleType: "",
  vehicleNumber: "",
  mobileNumber: "",
  premium: "",
  offerPrice: "",
  discount: "",
  cost: "",
  insurer: "",
  agentCompany: "",
});
  const addPolicy = () => {
  setPolicies([
    ...policies,
    {
      id: policies.length + 1,
      customerName: newPolicy.customerName,
      vehicleType: newPolicy.vehicleType,
      vehicleNumber: newPolicy.vehicleNumber,
      mobileNumber: newPolicy.mobileNumber,
      premium: Number(newPolicy.premium),
      offerPrice: Number(newPolicy.offerPrice),
      discount: Number(newPolicy.discount),
      cost: Number(newPolicy.cost),
      insurer: newPolicy.insurer,
      agentCompany: newPolicy.agentCompany,
    },
  ]);

  setShowModal(false);

  setNewPolicy({
    customerName: "",
    vehicleType: "",
    vehicleNumber: "",
    mobileNumber: "",
    premium: "",
    offerPrice: "",
    discount: "",
    cost: "",
    insurer: "",
    agentCompany: "",
  });
};
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
            <button
  onClick={() => setShowModal(true)}
  className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
>
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
  {policies.map((policy) => (
    <tr key={policy.id}>

      <td className="border p-2">
        {policy.customerName}
      </td>

      <td className="border p-2">
        {policy.vehicleType}
      </td>

      <td className="border p-2">
        {policy.vehicleNumber}
      </td>

      <td className="border p-2">
        {policy.mobileNumber}
      </td>

      <td className="border p-2">
        ₹{policy.premium.toLocaleString()}
      </td>

      <td className="border p-2">
        ₹{policy.offerPrice.toLocaleString()}
      </td>

      <td className="border p-2">
        ₹{policy.discount.toLocaleString()}
      </td>

      <td className="border p-2">
        ₹{policy.cost.toLocaleString()}
      </td>

      <td className="border p-2">
        {policy.insurer}
      </td>

      <td className="border p-2">
        {policy.agentCompany}
      </td>

    </tr>
  ))}
</tbody>
          </table>

        </div>

      </div>
{showModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white p-6 rounded-2xl w-[650px]">

      <h2 className="text-xl font-bold mb-4">
        Add Vehicle Policy
      </h2>

      <div className="grid grid-cols-2 gap-3">

        <input
          placeholder="Customer Name"
          value={newPolicy.customerName}
          onChange={(e) =>
            setNewPolicy({
              ...newPolicy,
              customerName: e.target.value,
            })
          }
          className="border p-3 rounded-xl"
        />

        <input
          placeholder="Vehicle Type"
          value={newPolicy.vehicleType}
          onChange={(e) =>
            setNewPolicy({
              ...newPolicy,
              vehicleType: e.target.value,
            })
          }
          className="border p-3 rounded-xl"
        />

        <input
          placeholder="Vehicle Number"
          value={newPolicy.vehicleNumber}
          onChange={(e) =>
            setNewPolicy({
              ...newPolicy,
              vehicleNumber: e.target.value,
            })
          }
          className="border p-3 rounded-xl"
        />

        <input
          placeholder="Mobile Number"
          value={newPolicy.mobileNumber}
          onChange={(e) =>
            setNewPolicy({
              ...newPolicy,
              mobileNumber: e.target.value,
            })
          }
          className="border p-3 rounded-xl"
        />

        <input
          placeholder="Premium"
          value={newPolicy.premium}
          onChange={(e) =>
            setNewPolicy({
              ...newPolicy,
              premium: e.target.value,
            })
          }
          className="border p-3 rounded-xl"
        />

        <input
          placeholder="Offer Price"
          value={newPolicy.offerPrice}
          onChange={(e) =>
            setNewPolicy({
              ...newPolicy,
              offerPrice: e.target.value,
            })
          }
          className="border p-3 rounded-xl"
        />

        <input
          placeholder="Discount"
          value={newPolicy.discount}
          onChange={(e) =>
            setNewPolicy({
              ...newPolicy,
              discount: e.target.value,
            })
          }
          className="border p-3 rounded-xl"
        />

        <input
          placeholder="Cost"
          value={newPolicy.cost}
          onChange={(e) =>
            setNewPolicy({
              ...newPolicy,
              cost: e.target.value,
            })
          }
          className="border p-3 rounded-xl"
        />

        <input
          placeholder="Insurer"
          value={newPolicy.insurer}
          onChange={(e) =>
            setNewPolicy({
              ...newPolicy,
              insurer: e.target.value,
            })
          }
          className="border p-3 rounded-xl"
        />

        <input
          placeholder="Agent Company"
          value={newPolicy.agentCompany}
          onChange={(e) =>
            setNewPolicy({
              ...newPolicy,
              agentCompany: e.target.value,
            })
          }
          className="border p-3 rounded-xl"
        />

      </div>

      <div className="flex gap-3 mt-5">

        <button
          onClick={addPolicy}
          className="bg-blue-600 text-white px-5 py-2 rounded-xl"
        >
          Save
        </button>

        <button
          onClick={() => setShowModal(false)}
          className="border px-5 py-2 rounded-xl"
        >
          Cancel
        </button>

      </div>

    </div>

  </div>
)}
    </div>
  );
}
