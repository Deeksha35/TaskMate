import { useEffect, useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [user, setUser] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [applySearch, setApplySearch] = useState(""); // ✅ for search button

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) navigate("/");
    fetchProfile();
    fetchTasks();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await api.get("/auth/me");
      setUser(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await api.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const startEdit = (task) => {
    setEditingTask(task);
    setUpdatedTitle(task.title);
  };

  const updateTask = async (e) => {
    e.preventDefault();
    await api.put(`/tasks/${editingTask._id}`, { title: updatedTitle });
    setEditingTask(null);
    fetchTasks();
  };

  const updateTaskStatus = async (id, completed) => {
    await api.put(`/tasks/${id}`, { completed });
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // ✅ Highlight matching text
  const highlightText = (text, query) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="bg-yellow-300 px-1 rounded">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // ✅ Apply Search Button
  const handleSearchClick = () => {
    setApplySearch(search.trim());
  };

  const filteredTasks = tasks
    .filter((t) =>
      applySearch
        ? t.title.toLowerCase().includes(applySearch.toLowerCase())
        : true
    )
    .filter((t) =>
      filter === "completed"
        ? t.completed
        : filter === "pending"
        ? !t.completed
        : true
    );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg">

        {user && (
          <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl mb-6">
            <h2 className="text-lg font-semibold text-indigo-700">
              Welcome, {user.name}
            </h2>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        )}

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Tasks</h1>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* ✅ Search + Filter + Search Button */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-2 border rounded-lg"
          />

          <button
            onClick={handleSearchClick}
            className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700"
          >
            Search
          </button>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        {/* ✅ Add Task */}
        <form onSubmit={addTask} className="flex mb-6 gap-3">
          <input
            type="text"
            placeholder="Add a new task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 p-2 border rounded-lg"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add
          </button>
        </form>

        {/* ✅ No tasks message */}
        {filteredTasks.length === 0 && (
          <p className="text-center text-gray-500 py-6">
            No tasks found matching your search.
          </p>
        )}

        {/* ✅ Task List */}
        {filteredTasks.map((task) => (
          <div
            key={task._id}
            className="flex items-center justify-between p-4 bg-white shadow-sm border rounded-xl mb-3 hover:shadow-md transition"
          >
            <span
              className={`font-medium ${
                task.completed ? "line-through text-gray-400" : "text-gray-700"
              }`}
            >
              {highlightText(task.title, applySearch)}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => updateTaskStatus(task._id, !task.completed)}
                className={`px-3 py-1 rounded text-sm ${
                  task.completed ? "bg-yellow-400" : "bg-green-500"
                } text-white`}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>

              <button
                onClick={() => startEdit(task)}
                className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
              >
                Edit
              </button>

              <button
                onClick={() => deleteTask(task._id)}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {/* ✅ Edit Popup */}
        {editingTask && (
          <div className="fixed inset-0 bg-black/20 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl w-80 shadow-xl">
              <h2 className="text-lg font-semibold mb-4">Edit Task</h2>

              <form onSubmit={updateTask}>
                <input
                  type="text"
                  value={updatedTitle}
                  onChange={(e) => setUpdatedTitle(e.target.value)}
                  className="border p-2 w-full rounded mb-4"
                />

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setEditingTask(null)}
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
