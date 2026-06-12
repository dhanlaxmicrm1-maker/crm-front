import { useState } from "react";
import { insuranceClients } from "../data/insuranceClients";
import { Search } from "lucide-react";

export default function InsuranceClients() {
  
  const [clients, setClients] = useState(insuranceClients);

  const [showModal, setShowModal] = useState(false);

  const [newClient, setNewClient] = useState({
    client: "",
    policyNo: "",
    product: "",
    premium: "",
    commission: "",
    renewal: "",
  });

  const addClient = () => {
    setClients([
      ...clients,
      {
        id: clients.length + 1,
        client: newClient.client,
        policyNo: newClient.policyNo,
        product: newClient.product,
        premium: Number(newClient.premium),
        commission: Number(newClient.commission),
        renewal: newClient.renewal,
      },
    ]);

    setShowModal(false);

    setNewClient({
      client: "",
      policyNo: "",
      product: "",
      premium: "",
      commission: "",
      renewal: "",
    });
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
<div className="flex justify-between items-start mb-6">


  <div>

    <h1 className="text-4xl font-bold text-slate-900">
      Insurance Clients
    </h1>

    <p className="text-slate-500 mt-2">
      Active policy holders, renewals and commissions
    </p>

  </div>

  <button
    onClick={() => setShowModal(true)}
    className="
      bg-blue-600
      hover:bg-blue-700
      text-white
      px-5
      py-3
      rounded-xl
      font-medium
    "
  >
    + Add Client
  </button>

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

              {clients.map((client) => (

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


      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-2xl w-[500px]">

            <h2 className="text-xl font-bold mb-4">
              Add Insurance Client
            </h2>

            <div className="space-y-3">

              <input
                placeholder="Client Name"
                value={newClient.client}
                onChange={(e) =>
                  setNewClient({
                    ...newClient,
                    client: e.target.value,
                  })
                }
                className="w-full border p-3 rounded-xl"
              />

              <input
                placeholder="Policy Number"
                value={newClient.policyNo}
                onChange={(e) =>
                  setNewClient({
                    ...newClient,
                    policyNo: e.target.value,
                  })
                }
                className="w-full border p-3 rounded-xl"
              />

              <input
                placeholder="Product"
                value={newClient.product}
                onChange={(e) =>
                  setNewClient({
                    ...newClient,
                    product: e.target.value,
                  })
                }
                className="w-full border p-3 rounded-xl"
              />

              <input
                placeholder="Premium"
                value={newClient.premium}
                onChange={(e) =>
                  setNewClient({
                    ...newClient,
                    premium: e.target.value,
                  })
                }
                className="w-full border p-3 rounded-xl"
              />

              <input
                placeholder="Commission"
                value={newClient.commission}
                onChange={(e) =>
                  setNewClient({
                    ...newClient,
                    commission: e.target.value,
                  })
                }
                className="w-full border p-3 rounded-xl"
              />

              <input
                type="date"
                value={newClient.renewal}
                onChange={(e) =>
                  setNewClient({
                    ...newClient,
                    renewal: e.target.value,
                  })
                }
                className="w-full border p-3 rounded-xl"
              />

            </div>

            <div className="flex gap-3 mt-5">

              <button
                onClick={addClient}
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
