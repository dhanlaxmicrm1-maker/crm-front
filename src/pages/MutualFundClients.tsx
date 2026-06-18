import { useState } from "react";

type MFClient = {
  id: number;
  customerName: string;
  mobile: string;
  folioNo: string;
  amc: string;
  investment: number;
  sipAmount: number;
};

export default function MutualFundClients() {
  const [clients, setClients] = useState<MFClient[]>([]);
  const [form, setForm] = useState<Omit<MFClient, "id">>({
    customerName: "",
    mobile: "",
    folioNo: "",
    amc: "",
    investment: 0,
    sipAmount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]:
        name === "investment" || name === "sipAmount"
          ? Number(value)
          : value,
    });
  };

  const addClient = () => {
    const newClient: MFClient = {
      id: Date.now(),
      ...form,
    };

    setClients([...clients, newClient]);
  };

  return (
    <div className="p-4">
      <h2>Mutual Fund Clients</h2>

      <div className="grid grid-cols-3 gap-2">
        <input name="customerName" onChange={handleChange} placeholder="Name" />
        <input name="mobile" onChange={handleChange} placeholder="Mobile" />
        <input name="folioNo" onChange={handleChange} placeholder="Folio No" />
        <input name="amc" onChange={handleChange} placeholder="AMC" />
        <input name="investment" onChange={handleChange} placeholder="Investment" />
        <input name="sipAmount" onChange={handleChange} placeholder="SIP" />
      </div>

      <button onClick={addClient}>Add</button>

      {clients.map((c) => (
        <div key={c.id}>{c.customerName}</div>
      ))}
    </div>
  );
}
