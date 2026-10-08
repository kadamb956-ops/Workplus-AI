import { useEffect, useState } from "react";
import api from "../utils/axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Tasks() {

  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    employeeId: "",
    title: "",
    status: "Pending",
    priority: "Medium"
  });

  const loadTasks = async () => {

    try {

      const response = await api.get("/tasks");

      setTasks(response.data);

    } catch (error) {

      console.error("Error loading tasks:", error);

    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const addTask = async (e) => {

    e.preventDefault();

    try {

      const data = {
        title: form.title,
        status: form.status,
        priority: form.priority,
        employee: {
          id: Number(form.employeeId)
        }
      };

      await api.post("/tasks", data);

      alert("Task added successfully!");

      setForm({
        employeeId: "",
        title: "",
        status: "Pending",
        priority: "Medium"
      });

      setShowForm(false);

      loadTasks();

    } catch (error) {

      console.error(error);

      alert("Failed to add task");

    }
  };

  return (

    <div className="app-layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="page-container">

          <div className="page-header">

            <div>

              <h1>Tasks</h1>

              <p>
                Manage employee tasks and priorities
              </p>

            </div>

            <button
              className="primary-btn"
              onClick={() => setShowForm(!showForm)}
            >
              + Add Task
            </button>

          </div>

          {showForm && (

            <div className="form-card">

              <h2>Create New Task</h2>

              <form onSubmit={addTask}>

                <div className="form-grid">

                  <div>

                    <label>Employee ID</label>

                    <input
                      type="number"
                      name="employeeId"
                      value={form.employeeId}
                      onChange={handleChange}
                      placeholder="Employee ID"
                      required
                    />

                  </div>

                  <div>

                    <label>Task Title</label>

                    <input
                      name="title"
                      value={form.title}
                      onChange={handleChange}
                      placeholder="Enter task"
                      required
                    />

                  </div>

                  <div>

                    <label>Status</label>

                    <select
                      name="status"
                      value={form.status}
                      onChange={handleChange}
                    >

                      <option value="Pending">
                        Pending
                      </option>

                      <option value="In Progress">
                        In Progress
                      </option>

                      <option value="Completed">
                        Completed
                      </option>

                    </select>

                  </div>

                  <div>

                    <label>Priority</label>

                    <select
                      name="priority"
                      value={form.priority}
                      onChange={handleChange}
                    >

                      <option value="Low">
                        Low
                      </option>

                      <option value="Medium">
                        Medium
                      </option>

                      <option value="High">
                        High
                      </option>

                    </select>

                  </div>

                </div>

                <div className="form-buttons">

                  <button
                    type="button"
                    className="secondary-btn"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="primary-btn"
                  >
                    Save Task
                  </button>

                </div>

              </form>

            </div>

          )}

          <div className="table-card">

            <div className="table-header">

              <h2>Task List</h2>

              <span>
                {tasks.length} Tasks
              </span>

            </div>

            {tasks.length === 0 ? (

              <div className="empty-state">

                <h3>No Tasks Found</h3>

                <p>
                  Click "+ Add Task" to create a task.
                </p>

              </div>

            ) : (

              <div className="table-wrapper">

                <table>

                  <thead>

                    <tr>

                      <th>ID</th>
                      <th>Task</th>
                      <th>Employee</th>
                      <th>Status</th>
                      <th>Priority</th>

                    </tr>

                  </thead>

                  <tbody>

                    {tasks.map((task) => (

                      <tr key={task.id}>

                        <td>
                          #{task.id}
                        </td>

                        <td>
                          <strong>
                            {task.title}
                          </strong>
                        </td>

                        <td>
                          Employee #{task.employee?.id || "-"}
                        </td>

                        <td>
                          <span className="status-badge">
                            {task.status}
                          </span>
                        </td>

                        <td>

                          <span
                            className={`priority-${String(
                              task.priority
                            ).toLowerCase()}`}
                          >
                            {task.priority}
                          </span>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            )}

          </div>

        </div>

      </div>

    </div>

  );
}

export default Tasks;