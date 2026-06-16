import { useState } from "react";
import api from "../services/api";

export default function AddTask() {
  const [form, setForm] = useState({
    title: "",
    client: "",
    employee: "",
    dueDate: "",
    priority: "Low",
    status: "Pending",
  });

  const submit = async () => {
    try {
      await api.post("/tasks", form);

      alert("Task Added Successfully");

      window.location.href = "/tasks";
    } catch (err) {
      console.log(err);

      alert("Error Adding Task");
    }
  };

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Add Task
      </h1>

      <div className="flex flex-col gap-4 max-w-md">

        <input
          placeholder="Task Title"
          className="border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
        />

        <input
          placeholder="Client Name"
          className="border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              client: e.target.value,
            })
          }
        />

        <input
          placeholder="Employee Name"
          className="border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              employee: e.target.value,
            })
          }
        />

        <input
          type="date"
          className="border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              dueDate: e.target.value,
            })
          }
        />

        <select
          className="border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              priority: e.target.value,
            })
          }
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <select
          className="border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              status: e.target.value,
            })
          }
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Follow-up</option>
          <option>Completed</option>
        </select>

        <button
          onClick={submit}
          className="bg-blue-600 text-white p-3 rounded"
        >
          Save Task
        </button>

      </div>

    </div>
  );
}