import { useEffect, useState } from "react";

export default function MutualFundClients() {
  const [clients, setClients] = useState<any[]>([]);

  const loadData = () => {
    const data = localStorage.getItem("mfClients");
    console.log("Loaded from storage:", data);

    setClients(data ? JSON.parse(data) : []);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        Mutual Fund Clients
      </h2>

      {clients.length === 0 ? (
        <p className="text-gray-500">No clients found</p>
      ) : (
        clients.map((c) => (
          <div key={c.id} className="border p-3 mb-2 rounded">
            <p><b>Name:</b> {c.name}</p>
            <p><b>Mobile:</b> {c.mobile}</p>
            <p><b>Investment:</b> {c.investment}</p>
          </div>
        ))
      )}
    </div>
  );
}
