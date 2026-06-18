import { useState } from "react";
import {
  UserPlus,
  AlertTriangle,
  FileText,
  Wallet,
  Bell,
  Plus,
} from "lucide-react";

export default function Notifications() {

  const [notifications, setNotifications] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    type: "lead"
  });

  const [showForm, setShowForm] = useState(false);

  // 🔁 Icon Mapping
  const iconMap = {
    lead: { icon: UserPlus, color: "text-sky-600" },
    alert: { icon: AlertTriangle, color: "text-red-500" },
    document: { icon: FileText, color: "text-slate-700" },
    payment: { icon: Wallet, color: "text-green-600" },
    reminder: { icon: Bell, color: "text-slate-500" },
  };

  // ✏️ Handle Input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ⏱️ Time Generator
  const getTime = () => {
    return "Just now";
  };

  // ➕ Add Notification
  const addNotification = () => {
    if (!form.title) return;

    const selected = iconMap[form.type];

    setNotifications([
      {
        id: Date.now(),
        title: form.title,
        description: form.description,
        time: getTime(),
        icon: selected.icon,
        color: selected.color
      },
      ...notifications // latest on top
    ]);

    setForm({
      title: "",
      description: "",
      type: "lead"
    });

    setShowForm(false);
  };

  return (
    <div className="p-4 max-w-[1080px]">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-5">

        <div>
          <h1 className="text-2xl font-bold">Notifications</h1>
          <p className="text-sm text-slate-500 mt-1">
            Real-time alerts on leads, tasks and pending operations.
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-2"
        >
          <Plus size={16} />
          Add
        </button>

      </div>

      {/* FORM */}
      {showForm && (
        <div className="bg-white p-4 rounded-xl mb-4 grid gap-3 shadow">

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="input"
          />

          <input
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="input"
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="input"
          >
            <option value="lead">Lead</option>
            <option value="alert">Alert</option>
            <option value="document">Document</option>
            <option value="payment">Payment</option>
            <option value="reminder">Reminder</option>
          </select>

          <button
            onClick={addNotification}
            className="bg-blue-600 text-white py-2 rounded-xl"
          >
            Save Notification
          </button>

        </div>
      )}

      {/* LIST */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">

        {notifications.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className={`
                flex items-center justify-between
                px-5 py-4 hover:bg-slate-50
                ${index !== notifications.length - 1 ? "border-b" : ""}
              `}
            >
              <div className="flex items-center gap-3">

                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
                  <Icon size={16} className={item.color} />
                </div>

                <div>
                  <h3 className="font-semibold text-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {item.description}
                  </p>
                </div>

              </div>

              <span className="text-xs text-slate-500">
                {item.time}
              </span>

            </div>
          );
        })}

        {notifications.length === 0 && (
          <p className="text-center py-6 text-slate-400">
            No notifications yet
          </p>
        )}

      </div>

    </div>
  );
}
