import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

export default function AddClient() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    productCategory: "",
    productType: "",
    policyNumber: "",
    policyIssueDate: "",
    renewalDate: "",
    premiumPaymentTerm: "",
    premiumAmount: "",
    sumAssured: "",
    commissionAmount: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async () => {
    try {
      await api.post("/clients", form);

      alert("Client Added Successfully");

      navigate("/all-clients");
    } catch (err) {
      console.log(err);

      alert("Error Adding Client");
    }
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen">

      <div className="bg-white rounded-2xl shadow-sm p-8 max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Add Client
        </h1>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <label>Client Name *</label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label>Mobile</label>

            <input
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label>Email</label>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label>Product Category</label>

            <input
              name="productCategory"
              value={form.productCategory}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label>Product Type</label>

            <input
              name="productType"
              value={form.productType}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label>Policy Number</label>

            <input
              name="policyNumber"
              value={form.policyNumber}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label>Policy Issue Date</label>

            <input
              type="date"
              name="policyIssueDate"
              value={form.policyIssueDate}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label>Renewal Date</label>

            <input
              type="date"
              name="renewalDate"
              value={form.renewalDate}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label>Premium Payment Term</label>

            <input
              name="premiumPaymentTerm"
              value={form.premiumPaymentTerm}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label>Premium Amount</label>

            <input
              name="premiumAmount"
              value={form.premiumAmount}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label>Sum Assured</label>

            <input
              name="sumAssured"
              value={form.sumAssured}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label>Commission Amount</label>

            <input
              name="commissionAmount"
              value={form.commissionAmount}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />
          </div>

        </div>

        <div className="mt-6">

          <label>Notes</label>

          <textarea
            rows={4}
            name="notes"
            value={form.notes}
            onChange={handleChange}
            className="w-full mt-2 border rounded-xl px-4 py-3"
          />

        </div>

        <div className="flex justify-end gap-3 mt-8">

          <button
            onClick={() => navigate("/all-clients")}
            className="border border-slate-300 px-6 py-3 rounded-xl"
          >
            Cancel
          </button>

          <button
            onClick={submit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}
