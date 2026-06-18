import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function AddLead() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    productCategory: "",
    productType: "",
    quotationAmount: "",
    sumAssured: "",
    premiumAmount: "",
    followUpDate: "",
    lastContacted: "",
    contactMethod: "",
    status: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async () => {
    if (!form.name || !form.mobile) {
      alert("Name and Mobile are required");

      return;
    }

    try {
      await api.post("/leads", form);

      alert("Lead Added Successfully");

      navigate("/leads");
    }

    catch (err) {
      console.log(err);

      alert("Error Adding Lead");
    }
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm p-8">

        <h1 className="text-3xl font-bold mb-2">
          Add Lead
        </h1>

        <p className="text-slate-500 mb-8">
          Create a new lead
        </p>

        <div className="grid grid-cols-2 gap-6">

          <div>

            <label className="font-medium">
              Lead Name *
            </label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="font-medium">
              Mobile Number *
            </label>

            <input
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="font-medium">
              Email
            </label>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="font-medium">
              Product Category
            </label>

            <input
              name="productCategory"
              value={form.productCategory}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="font-medium">
              Product Type
            </label>

            <input
              name="productType"
              value={form.productType}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="font-medium">
              Quotation Amount
            </label>

            <input
              name="quotationAmount"
              value={form.quotationAmount}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="font-medium">
              Sum Assured
            </label>

            <input
              name="sumAssured"
              value={form.sumAssured}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="font-medium">
              Premium Amount
            </label>

            <input
              name="premiumAmount"
              value={form.premiumAmount}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="font-medium">
              Follow Up Date
            </label>

            <input
              type="date"
              name="followUpDate"
              value={form.followUpDate}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="font-medium">
              Last Contacted
            </label>

            <input
              type="date"
              name="lastContacted"
              value={form.lastContacted}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            />

          </div>

          <div>

            <label className="font-medium">
              Contact Method
            </label>

            <select
              name="contactMethod"
              value={form.contactMethod}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            >

              <option value="">
                Select
              </option>

              <option>
                Email
              </option>

              <option>
                Call
              </option>

              <option>
                WhatsApp
              </option>

              <option>
                Meeting
              </option>

            </select>

          </div>

          <div>

            <label className="font-medium">
              Status
            </label>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl px-4 py-3"
            >

              <option value="">
                Select
              </option>

              <option>
                New
              </option>

              <option>
                Contacted
              </option>

              <option>
                Interested
              </option>

              <option>
                Proposal Sent
              </option>

              <option>
                Follow-Up Pending
              </option>

              <option>
                Converted
              </option>

            </select>

          </div>

        </div>

        <div className="mt-6">

          <label className="font-medium">
            Notes
          </label>

          <textarea
            rows={4}
            name="notes"
            value={form.notes}
            onChange={handleChange}
            className="w-full mt-2 border rounded-xl px-4 py-3"
          />

        </div>

        <button
          onClick={submit}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
        >

          Save Lead

        </button>

      </div>

    </div>
  );
}
