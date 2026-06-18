import { useEffect, useState } from "react";

type Client = {
  id: number;
  name: string;
  mobile: string;
  investment: string;
};

export default function MutualFundClients() {
  const [clients, setClients] = useState<Client[]>([]);

  const loadClients = () => {
    const data = localStorage.getItem("mfClients");
    setClients(data ? JSON.parse(data) : []);
  };

  useEffect(() => {
    // initial load
    loadClients();

    // reload when user comes back to tab/page
    const handleFocus = () => loadClients();
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Mutual Fund Clients
      </h2>

      {clients.length === 0 ? (
        <p className="text-gray-500">No clients found</p>
      ) : (
        <div className="space-y-3">
          {clients.map((client) => (
            <div
              key={client.id}
              className="border p-3 rounded shadow-sm bg-white"
            >
              <p>
                <b>Name:</b> {client.name}
              </p>
              <p>
                <b>Mobile:</b> {client.mobile}
              </p>
              <p>
                <b>Investment:</b> {client.investment}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
