import { useState } from "react";

type Notification = {
  id: number;
  title: string;
  description: string;
  time: string;
};

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addNotification = () => {
    const newItem: Notification = {
      id: Date.now(),
      title: form.title,
      description: form.description,
      time: new Date().toLocaleTimeString(),
    };

    setNotifications([...notifications, newItem]);
  };

  return (
    <div className="p-4">
      <h2>Notifications</h2>

      <input name="title" onChange={handleChange} placeholder="Title" />
      <input name="description" onChange={handleChange} placeholder="Description" />

      <button onClick={addNotification}>Add</button>

      {notifications.map((n) => (
        <div key={n.id}>
          <b>{n.title}</b> - {n.description}
        </div>
      ))}
    </div>
  );
}
