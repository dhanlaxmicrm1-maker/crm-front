import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Client = {
  id: number;
  name: string;
  mobile: string;
  investment: string;
};

export default function MutualFundClients() {
  const navigate = useNavigate();
  const [clients, setClients] = useState<Client[]>([]);

  const loadClients = () => {
    const data = localStorage.getItem("mfClients");
    setClients(data ? JSON.parse(data) : []);
  };

  useEffect(() => {
    loadClients();

    const handleFocus = () => loadClients();
    window.addEventListener("focus", handleFocus);

    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  const totalInvestment = clients.reduce((sum, c) => {
    return sum + Number(c.investment || 0);
  }, 0);

  return (
    <div className="p-6">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">
            Mutual Fund Clients
          </h2>
          <p className="text-gray-500 text-sm">
            Total Clients: {clients.length} | Total Investment: ₹{totalInvestment}
          </p>
        </div>

        {/* ADD BUTTON */}
        <button
          onClick={() => navigate("/add-mf-client")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add Client
        </button>
      </div>

      {/* CONTENT */}
      {clients.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          No clients added yet. Click “Add Client” to start.
        </div>
      ) : (
        <div className="grid gap-3">
          {clients.map((client) => (
            <div
              key={client.id}
              className="border bg-white p-4 rounded shadow-sm flex justify-between items-center"
            >
              
              {/* LEFT */}
              <div>
                <p className="font-semibold">{client.name}</p>
                <p className="text-sm text-gray-600">
                  {client.mobile}
                </p>
              </div>

              {/* RIGHT */}
              <div className="text-right">
                <p className="font-semibold text-green-600">
                  ₹{client.investment}
                </p>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
