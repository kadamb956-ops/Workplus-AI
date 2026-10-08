import { useEffect, useState } from "react";
import api from "../utils/axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Goals() {

  const [goals, setGoals] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    employeeId: "",
    title: "",
    description: "",
    status: "Pending",
    progress: 0
  });

  const loadGoals = async () => {

    try {

      const response = await api.get("/goals");

      setGoals(response.data);

    } catch (error) {

      console.error("Error loading goals:", error);

    }
  };

  useEffect(() => {
    loadGoals();
  }, []);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const addGoal = async (e) => {

    e.preventDefault();

    try {

      const data = {
        title: form.title,
        description: form.description,
        status: form.status,
        progress: Number(form.progress),
        employee: {
          id: Number(form.employeeId)
        }
      };

      await api.post("/goals", data);

      alert("Goal added successfully!");

      setForm({
        employeeId: "",
        title: "",
        description: "",
        status: "Pending",
        progress: 0
      });

      setShowForm(false);

      loadGoals();

    } catch (error) {

      console.error(error);

      alert("Failed to add goal");

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

              <h1>Goals</h1>

              <p>
                Track employee goals and progress
              </p>

            </div>

            <button
              className="primary-btn"
              onClick={() => setShowForm(!showForm)}
            >
              + Add Goal
            </button>

          </div>

          {showForm && (

            <div className="form-card">

              <h2>Create New Goal</h2>

              <form onSubmit={addGoal}>

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

                    <label>Goal Title</label>

                    <input
                      name="title"
                      value={form.title}
                      onChange={handleChange}
                      placeholder="e.g. Complete Spring Boot project"
                      required
                    />

                  </div>

                  <div className="full-width">

                    <label>Description</label>

                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      placeholder="Describe the goal"
                      rows="4"
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

                    <label>Progress (%)</label>

                    <input
                      type="number"
                      name="progress"
                      min="0"
                      max="100"
                      value={form.progress}
                      onChange={handleChange}
                    />

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
                    Save Goal
                  </button>

                </div>

              </form>

            </div>

          )}

          <div className="goal-grid">

            {goals.length === 0 ? (

              <div className="empty-state">

                <h3>No Goals Found</h3>

                <p>
                  Click "+ Add Goal" to create a goal.
                </p>

              </div>

            ) : (

              goals.map((goal) => (

                <div className="goal-card-modern" key={goal.id}>

                  <div className="goal-top">

                    <span className="goal-icon">
                      🎯
                    </span>

                    <span className="status-badge">
                      {goal.status}
                    </span>

                  </div>

                  <h3>{goal.title}</h3>

                  <p>{goal.description}</p>

                  <div className="goal-progress">

                    <div className="progress-label">

                      <span>Progress</span>

                      <strong>
                        {goal.progress}%
                      </strong>

                    </div>

                    <div className="progress">

                      <div
                        className="progress-fill"
                        style={{
                          width: `${goal.progress}%`
                        }}
                      />

                    </div>

                  </div>

                  <small>
                    Employee ID: {goal.employee?.id || "-"}
                  </small>

                </div>

              ))

            )}

          </div>

        </div>

      </div>

    </div>

  );
}

export default Goals;