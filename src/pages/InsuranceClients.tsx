import { useState } from "react";

type InsuranceClient = {
  id: number;
  client: string;
  policyNo: string;
  product: string;
  premium: number;
  commission: number;
  renewal: string;
};

export default function InsuranceClients() {
  const [clients, setClients] = useState<InsuranceClient[]>([]);
  const [form, setForm] = useState<Omit<InsuranceClient, "id">>({
    client: "",
    policyNo: "",
    product: "",
    premium: 0,
    commission: 0,
    renewal: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]:
        name === "premium" || name === "commission"
          ? Number(value)
          : value,
    });
  };

  const addClient = () => {
    if (!form.client) return;

    const newClient: InsuranceClient = {
      id: Date.now(),
      ...form,
    };

    setClients([...clients, newClient]);

    setForm({
      client: "",
      policyNo: "",
      product: "",
      premium: 0,
      commission: 0,
      renewal: "",
    });
  };

  return (
    <div className="p-4">
      <h2>Insurance Clients</h2>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <input name="client" value={form.client} onChange={handleChange} placeholder="Client" />
        <input name="policyNo" value={form.policyNo} onChange={handleChange} placeholder="Policy No" />
        <input name="product" value={form.product} onChange={handleChange} placeholder="Product" />
        <input name="premium" value={form.premium} onChange={handleChange} placeholder="Premium" />
        <input name="commission" value={form.commission} onChange={handleChange} placeholder="Commission" />
        <input name="renewal" value={form.renewal} onChange={handleChange} placeholder="Renewal Date" />
      </div>

      <button onClick={addClient} className="bg-blue-600 text-white px-4 py-2">
        Add Client
      </button>

      <table className="w-full mt-4 border">
        <thead>
          <tr>
            <th>Client</th>
            <th>Policy</th>
            <th>Product</th>
            <th>Premium</th>
            <th>Commission</th>
            <th>Renewal</th>
          </tr>
        </thead>

        <tbody>
          {clients.map((c) => (
            <tr key={c.id}>
              <td>{c.client}</td>
              <td>{c.policyNo}</td>
              <td>{c.product}</td>
              <td>{c.premium}</td>
              <td>{c.commission}</td>
              <td>{c.renewal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
