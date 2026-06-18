import { useState } from "react";

import { mutualFundClients } from "../data/mutualFundClients";

import { Search, Download, Plus, X } from "lucide-react";

export default function MutualFundClients() {

  const [investors, setInvestors] = useState(mutualFundClients);

  const [showModal, setShowModal] = useState(false);

  const [newInvestor, setNewInvestor] = useState({

    customerName: "",

    mobile: "",

    email: "",

    pan: "",

    investmentType: "SIP",

    investmentTenure: "",

    riskProfile: "Moderate",

    investmentAmount: "",

    notes: "",
  });

  const addInvestor = () => {

    setInvestors([
      ...investors,

      {
        id: investors.length + 1,

        customerName: newInvestor.customerName,

        mobile: newInvestor.mobile,

        email: newInvestor.email,

        pan: newInvestor.pan,

        investmentType: newInvestor.investmentType,

        investmentTenure: newInvestor.investmentTenure,

        riskProfile: newInvestor.riskProfile,

        investment:
          Number(newInvestor.investmentAmount),

        sipAmount:
          newInvestor.investmentType === "SIP"

            ? Number(newInvestor.investmentAmount)

            : 0,
      },
    ]);

    setShowModal(false);

    setNewInvestor({

      customerName: "",

      mobile: "",

      email: "",

      pan: "",

      investmentType: "SIP",

      investmentTenure: "",

      riskProfile: "Moderate",

      investmentAmount: "",

      notes: "",
    });
  };

  const totalAUM = investors.reduce(
    (sum, client) => sum + client.investment,
    0
  );

  const totalSIP = investors.reduce(
    (sum, client) => sum + client.sipAmount,
    0
  );

  return (

    <div className="p-6 bg-slate-50 min-h-screen">

      <div className="mb-6">

        <h1 className="text-4xl font-bold">

          Mutual Fund Clients

        </h1>

        <p className="text-slate-500">

          SIP, Lumpsum & SWP management

        </p>

      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-6">

        <div className="bg-white rounded-2xl p-5 shadow-sm">

          <p className="text-slate-500 text-sm">

            Total Investors

          </p>

          <h2 className="text-3xl font-bold">

            {investors.length}

          </h2>

        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">

          <p className="text-slate-500 text-sm">

            Total AUM

          </p>

          <h2 className="text-3xl font-bold">

            ₹{totalAUM.toLocaleString()}

          </h2>

        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">

          <p className="text-slate-500 text-sm">

            Monthly SIP

          </p>

          <h2 className="text-3xl font-bold">

            ₹{totalSIP.toLocaleString()}

          </h2>

        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">

          <p className="text-slate-500 text-sm">

            Active Folios

          </p>

          <h2 className="text-3xl font-bold">

            {investors.length}

          </h2>

        </div>

      </div>

      <div className="bg-white rounded-3xl shadow-sm">

        <div className="p-5 flex justify-between items-center">

          <div className="relative w-[400px]">

            <Search
              size={18}
              className="absolute left-3 top-3 text-slate-400"
            />

            <input
              placeholder="Search..."
              className="w-full bg-slate-50 rounded-xl pl-10 py-3 outline-none"
            />

          </div>

          <div className="flex gap-3">

            <button className="bg-slate-100 px-4 py-2 rounded-xl flex items-center gap-2">

              <Download size={16} />

              Export

            </button>

            <button

              onClick={() =>
                setShowModal(true)
              }

              className="bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-2"

            >

              <Plus size={16} />

              Add Client

            </button>

          </div>

        </div>

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="p-4 text-left">

                Name

              </th>

              <th className="p-4 text-left">

                Mobile

              </th>

              <th className="p-4 text-left">

                Type

              </th>

              <th className="p-4 text-left">

                Risk

              </th>

              <th className="p-4 text-left">

                Amount

              </th>

            </tr>

          </thead>

          <tbody>

            {investors.map((client) => (

              <tr

                key={client.id}

                className="border-b"

              >

                <td className="p-4">

                  {client.customerName}

                </td>

                <td className="p-4">

                  {client.mobile}

                </td>

                <td className="p-4">

                  {client.investmentType}

                </td>

                <td className="p-4">

                  {client.riskProfile}

                </td>

                <td className="p-4">

                  ₹{client.investment.toLocaleString()}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {showModal && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl w-[720px] p-6">

            <div className="flex justify-between mb-5">

              <h2 className="text-2xl font-bold">

                Add Mutual Fund Client

              </h2>

              <button

                onClick={() =>
                  setShowModal(false)
                }

              >

                <X size={20} />

              </button>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <input
                placeholder="Client Name"
                className="border p-3 rounded-xl"

                value={newInvestor.customerName}

                onChange={(e)=>

                  setNewInvestor({

                    ...newInvestor,

                    customerName:
                      e.target.value,
                  })

                }
              />

              <input
                placeholder="Mobile"

                className="border p-3 rounded-xl"

                value={newInvestor.mobile}

                onChange={(e)=>

                  setNewInvestor({

                    ...newInvestor,

                    mobile:
                      e.target.value,
                  })

                }
              />

              <input
                placeholder="Email"

                className="border p-3 rounded-xl"

                value={newInvestor.email}

                onChange={(e)=>

                  setNewInvestor({

                    ...newInvestor,

                    email:
                      e.target.value,
                  })

                }
              />

              <input
                placeholder="PAN"

                className="border p-3 rounded-xl"

                value={newInvestor.pan}

                onChange={(e)=>

                  setNewInvestor({

                    ...newInvestor,

                    pan:
                      e.target.value,
                  })

                }
              />

              <select

                className="border p-3 rounded-xl"

                value={newInvestor.investmentType}

                onChange={(e)=>

                  setNewInvestor({

                    ...newInvestor,

                    investmentType:
                      e.target.value,
                  })

                }

              >

                <option>SIP</option>

                <option>Lumpsum</option>

                <option>SWP</option>

              </select>

              <input

                placeholder="Investment Tenure"

                className="border p-3 rounded-xl"

                value={newInvestor.investmentTenure}

                onChange={(e)=>

                  setNewInvestor({

                    ...newInvestor,

                    investmentTenure:
                      e.target.value,
                  })

                }

              />

              <select

                className="border p-3 rounded-xl"

                value={newInvestor.riskProfile}

                onChange={(e)=>

                  setNewInvestor({

                    ...newInvestor,

                    riskProfile:
                      e.target.value,
                  })

                }

              >

                <option>

                  Conservative

                </option>

                <option>

                  Moderate

                </option>

                <option>

                  Aggressive

                </option>

              </select>

              <input

                placeholder="Investment Amount"

                className="border p-3 rounded-xl"

                value={newInvestor.investmentAmount}

                onChange={(e)=>

                  setNewInvestor({

                    ...newInvestor,

                    investmentAmount:
                      e.target.value,
                  })

                }

              />

            </div>

            <textarea

              rows={4}

              placeholder="Notes"

              className="w-full border rounded-xl p-3 mt-4"

              value={newInvestor.notes}

              onChange={(e)=>

                setNewInvestor({

                  ...newInvestor,

                  notes:
                    e.target.value,
                })

              }

            />

            <div className="flex justify-end gap-3 mt-6">

              <button

                onClick={() =>
                  setShowModal(false)
                }

                className="border px-5 py-2 rounded-xl"

              >

                Cancel

              </button>

              <button

                onClick={addInvestor}

                className="bg-blue-600 text-white px-5 py-2 rounded-xl"

              >

                Save

              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}
