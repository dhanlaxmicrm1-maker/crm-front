import { Search, Calendar, Pencil, Trash2, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function Tasks() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editTaskData, setEditTaskData] = useState<any>(null);

  const [formData, setFormData] = useState({
    title: "",
    client: "",
    employee: "",
    priority: "Medium",
    status: "Pending",
    dueDate: "",
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addTask = async () => {
    try {
      await api.post("/tasks", formData);
      fetchTasks();
      setShowModal(false);
      resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  const updateTask = async () => {
    try {
      await api.put(`/tasks/${editTaskData._id}`, formData);
      fetchTasks();
      setShowModal(false);
      resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const openEdit = (task: any) => {
    setEditTaskData(task);
    setFormData(task);
    setShowModal(true);
  };

  const resetForm = () => {
    setEditTaskData(null);
    setFormData({
      title: "",
      client: "",
      employee: "",
      priority: "Medium",
      status: "Pending",
      dueDate: "",
    });
  };

  const columns = ["Pending", "In Progress", "Follow-up", "Completed"];

  const priorityClass = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-600";
      case "Medium":
        return "bg-sky-100 text-sky-600";
      default:
        return "bg-slate-100 text-slate-500";
    }
  };

  const statusClass = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-sky-100 text-sky-700";
      case "Follow-up":
        return "bg-amber-100 text-amber-700";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <div className="px-8 py-8">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-[36px] font-bold text-slate-900">Tasks</h1>
          <p className="text-slate-500 mt-1">
            Track work, follow-ups and deadlines.
          </p>
        </div>

        <button
          onClick={() => {
            resetForm();
            setShowModal(true);
          }}
          className="bg-[#1f365c] text-white px-5 py-2.5 rounded-xl flex items-center gap-2"
        >
          <Plus size={16} />
          New Task
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-5 w-[320px]">
        <Search size={16} className="absolute left-3 top-3 text-slate-400" />
        <input
          placeholder="Search tasks..."
          className="w-full h-10 border rounded-xl pl-10 pr-4 text-sm"
        />
      </div>

      {/* Board */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {columns.map((column) => {
          const columnTasks = tasks.filter((t) => t.status === column);

          return (
            <div key={column} className="bg-slate-50 p-4 rounded-2xl">
              <h3 className="font-semibold mb-3">{column}</h3>

              <div className="space-y-3">
                {columnTasks.map((task) => (
                  <div key={task._id} className="bg-white p-3 rounded-xl border">
                    <div className="flex justify-between">
                      <h4 className="text-sm font-medium">{task.title}</h4>

                      <span className={`text-xs px-2 py-1 rounded ${priorityClass(task.priority)}`}>
                        {task.priority}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 mt-1">{task.client}</p>

                    <div className="flex justify-between mt-3 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        {task.dueDate}
                      </div>

                      <div className="font-semibold">
                        {task.employee?.[0] || "-"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* All Tasks */}
      <div className="bg-white border rounded-2xl overflow-hidden">
        {tasks.map((task) => (
          <div key={task._id} className="flex justify-between p-4 border-b">
            <div>
              <h4 className="font-medium">{task.title}</h4>
              <p className="text-xs text-gray-500">
                {task.client} · {task.employee}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className={`text-xs px-2 py-1 rounded ${priorityClass(task.priority)}`}>
                {task.priority}
              </span>

              <span className={`text-xs px-2 py-1 rounded ${statusClass(task.status)}`}>
                {task.status}
              </span>

              <button onClick={() => openEdit(task)}>
                <Pencil size={16} />
              </button>

              <button onClick={() => deleteTask(task._id)}>
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-[400px] space-y-3">
            <h2 className="font-semibold text-lg">
              {editTaskData ? "Edit Task" : "Add Task"}
            </h2>

            <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="w-full border p-2 rounded" />
            <input name="client" value={formData.client} onChange={handleChange} placeholder="Client" className="w-full border p-2 rounded" />
            <input name="employee" value={formData.employee} onChange={handleChange} placeholder="Employee" className="w-full border p-2 rounded" />
            <input name="dueDate" type="date" value={formData.dueDate} onChange={handleChange} className="w-full border p-2 rounded" />

            <select name="priority" value={formData.priority} onChange={handleChange} className="w-full border p-2 rounded">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            <select name="status" value={formData.status} onChange={handleChange} className="w-full border p-2 rounded">
              <option>Pending</option>
              <option>In Progress</option>
              <option>Follow-up</option>
              <option>Completed</option>
            </select>

            <div className="flex justify-end gap-2 pt-2">
              <button onClick={() => setShowModal(false)}>Cancel</button>

              <button
                onClick={editTaskData ? updateTask : addTask}
                className="bg-blue-900 text-white px-4 py-2 rounded"
              >
                {editTaskData ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
