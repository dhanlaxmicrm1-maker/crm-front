const [showModal, setShowModal] = useState(false);

const [newTask, setNewTask] = useState({
  title: "",
  client: "",
  employee: "",
  priority: "Medium",
  status: "Pending",
  dueDate: "",
});
