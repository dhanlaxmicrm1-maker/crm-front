import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

export default function AddClient() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    pan: "",
  });

  const submit = async () => {

    try {

      await api.post("/clients", form);

      alert("Client Added Successfully");

      navigate("/all-clients");

    }

    catch (err) {

      console.log(err);

      alert("Error Adding Client");

    }
  };

  return (

    <div className="p-6 bg-slate-50 min-h-screen">

      <h1 className="text-3xl font-bold mb-2">

        Add Client

      </h1>

      <p className="text-slate-500 mb-6">

        Create a new client profile

      </p>

      <div className="bg-white rounded-2xl p-6 shadow-sm max-w-4xl">

        <div className="grid grid-cols-2 gap-4">

          <div>

            <label className="text-sm font-medium">

              Client Name

            </label>

            <input

              value={form.name}

              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }

              className="w-full mt-1 border border-slate-200 rounded-xl px-4 py-3"

            />

          </div>

          <div>

            <label className="text-sm font-medium">

              Phone

            </label>

            <input

              value={form.phone}

              onChange={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value,
                })
              }

              className="w-full mt-1 border border-slate-200 rounded-xl px-4 py-3"

            />

          </div>

          <div>

            <label className="text-sm font-medium">

              Email

            </label>

            <input

              value={form.email}

              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }

              className="w-full mt-1 border border-slate-200 rounded-xl px-4 py-3"

            />

          </div>

          <div>

            <label className="text-sm font-medium">

              City

            </label>

            <input

              value={form.city}

              onChange={(e) =>
                setForm({
                  ...form,
                  city: e.target.value,
                })
              }

              className="w-full mt-1 border border-slate-200 rounded-xl px-4 py-3"

            />

          </div>

          <div>

            <label className="text-sm font-medium">

              PAN

            </label>

            <input

              value={form.pan}

              onChange={(e) =>
                setForm({
                  ...form,
                  pan: e.target.value,
                })
              }

              className="w-full mt-1 border border-slate-200 rounded-xl px-4 py-3"

            />

          </div>

        </div>

        <button

          onClick={submit}

          className="mt-6 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700"

        >

          Save Client

        </button>

      </div>

    </div>
  );
}
