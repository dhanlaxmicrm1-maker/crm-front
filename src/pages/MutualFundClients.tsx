import { useEffect, useState } from "react";
import api from "../services/api";

import {
  Search,
  Download,
  Plus,
} from "lucide-react";

export default function MutualFundClients() {
  const [clients, setClients] = useState<any[]>([]);

  const [showModal, setShowModal] = useState(false);

  const [newClient, setNewClient] = useState({
    customerName: "",
    scheme: "",
    folioNumber: "",
    mobileNumber: "",
    investmentAmount: "",
    sipAmount: "",
    fundHouse: "",
    advisor: "",
  });

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const res = await api.get("/mutualfund");

      setClients(res.data);
    }

    catch (err) {
      console.log(err);
    }
  };

  const addClient = async () => {
    try {

      await api.post("/mutualfund", {
        customerName: newClient.customerName,

        scheme: newClient.scheme,

        folioNumber: newClient.folioNumber,

        mobileNumber: newClient.mobileNumber,

        investmentAmount: Number(
          newClient.investmentAmount
        ),

        sipAmount: Number(
          newClient.sipAmount
        ),

        fundHouse: newClient.fundHouse,

        advisor: newClient.advisor,
      });

      fetchClients();

      setShowModal(false);

      setNewClient({
        customerName: "",
        scheme: "",
        folioNumber: "",
        mobileNumber: "",
        investmentAmount: "",
        sipAmount: "",
        fundHouse: "",
        advisor: "",
      });

      alert("Mutual Fund Client Added");
    }

    catch (err) {

      console.log(err);

      alert("Error adding client");
    }
  };

  return (
    <div className="p-4 bg-slate-50 min-h-screen">

      <div className="mb-4">

        <h1 className="text-3xl font-bold">
          Mutual Fund Clients
        </h1>

        <p className="text-xs text-slate-500">
          Mutual fund investments and SIPs
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
              placeholder="Search client..."
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

              Add Client

            </button>

          </div>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full border border-slate-200 text-xs">

            <thead>

              <tr className="bg-slate-100">

                <th className="border p-2 text-left">
                  Customer
                </th>

                <th className="border p-2 text-left">
                  Scheme
                </th>

                <th className="border p-2 text-left">
                  Folio No
                </th>

                <th className="border p-2 text-left">
                  Mobile
                </th>

                <th className="border p-2 text-left">
                  Investment
                </th>

                <th className="border p-2 text-left">
                  SIP
                </th>

                <th className="border p-2 text-left">
                  Fund House
                </th>

                <th className="border p-2 text-left">
                  Advisor
                </th>

              </tr>

            </thead>

            <tbody>

              {clients.map((client) => (

                <tr key={client._id}>

                  <td className="border p-2">
                    {client.customerName}
                  </td>

                  <td className="border p-2">
                    {client.scheme}
                  </td>

                  <td className="border p-2">
                    {client.folioNumber}
                  </td>

                  <td className="border p-2">
                    {client.mobileNumber}
                  </td>

                  <td className="border p-2">
                    ₹{client.investmentAmount}
                  </td>

                  <td className="border p-2">
                    ₹{client.sipAmount}
                  </td>

                  <td className="border p-2">
                    {client.fundHouse}
                  </td>

                  <td className="border p-2">
                    {client.advisor}
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

              Add Mutual Fund Client

            </h2>

            <div className="grid grid-cols-2 gap-3">

              {Object.keys(newClient).map((field) => (

                <input

                  key={field}

                  placeholder={field}

                  value={
                    newClient[
                      field as keyof typeof newClient
                    ]
                  }

                  onChange={(e) =>
                    setNewClient({
                      ...newClient,

                      [field]: e.target.value,
                    })
                  }

                  className="border p-3 rounded-xl"

                />

              ))}

            </div>

            <div className="flex gap-3 mt-5">

              <button

                onClick={addClient}

                className="bg-blue-600 text-white px-5 py-2 rounded-xl"

              >

                Save

              </button>

              <button

                onClick={() =>
                  setShowModal(false)
                }

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
