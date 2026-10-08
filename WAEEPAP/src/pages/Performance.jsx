import { useEffect, useState } from "react";
import api from "../utils/axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Performance() {

  const [performance, setPerformance] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    employeeId: "",
    score: "",
    rating: ""
  });

  const loadPerformance = async () => {

    try {

      const response = await api.get("/performance");

      setPerformance(response.data);

    } catch (error) {

      console.error("Error loading performance:", error);

    }
  };

  useEffect(() => {
    loadPerformance();
  }, []);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const addPerformance = async (e) => {

    e.preventDefault();

    try {

      const data = {
        score: Number(form.score),
        rating: form.rating,
        employee: {
          id: Number(form.employeeId)
        }
      };

      await api.post("/performance", data);

      alert("Performance added successfully!");

      setForm({
        employeeId: "",
        score: "",
        rating: ""
      });

      setShowForm(false);

      loadPerformance();

    } catch (error) {

      console.error(error);

      alert("Failed to add performance");

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
              <h1>Performance</h1>
              <p>Track employee performance and ratings</p>
            </div>

            <button
              className="primary-btn"
              onClick={() => setShowForm(!showForm)}
            >
              + Add Performance
            </button>

          </div>

          {showForm && (

            <div className="form-card">

              <h2>Add Performance</h2>

              <form onSubmit={addPerformance}>

                <div className="form-grid">

                  <div>

                    <label>Employee ID</label>

                    <input
                      type="number"
                      name="employeeId"
                      value={form.employeeId}
                      onChange={handleChange}
                      placeholder="Enter employee ID"
                      required
                    />

                  </div>

                  <div>

                    <label>Score</label>

                    <input
                      type="number"
                      name="score"
                      min="0"
                      max="100"
                      value={form.score}
                      onChange={handleChange}
                      placeholder="0 - 100"
                      required
                    />

                  </div>

                  <div>

                    <label>Rating</label>

                    <select
                      name="rating"
                      value={form.rating}
                      onChange={handleChange}
                      required
                    >

                      <option value="">
                        Select Rating
                      </option>

                      <option value="Excellent">
                        Excellent
                      </option>

                      <option value="Good">
                        Good
                      </option>

                      <option value="Average">
                        Average
                      </option>

                      <option value="Needs Improvement">
                        Needs Improvement
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
                    Save Performance
                  </button>

                </div>

              </form>

            </div>

          )}

          <div className="table-card">

            <div className="table-header">

              <h2>Performance Records</h2>

              <span>
                {performance.length} Records
              </span>

            </div>

            {performance.length === 0 ? (

              <div className="empty-state">

                <h3>No Performance Records</h3>

                <p>
                  Add a performance record to see it here.
                </p>

              </div>

            ) : (

              <div className="table-wrapper">

                <table>

                  <thead>

                    <tr>
                      <th>ID</th>
                      <th>Employee</th>
                      <th>Score</th>
                      <th>Rating</th>
                    </tr>

                  </thead>

                  <tbody>

                    {performance.map((item) => (

                      <tr key={item.id}>

                        <td>#{item.id}</td>

                        <td>
                          {item.employee?.name ||
                            `Employee #${item.employee?.id || "-"}`}
                        </td>

                        <td>

                          <div className="score-cell">

                            <strong>
                              {item.score}%
                            </strong>

                            <div className="progress">

                              <div
                                className="progress-fill"
                                style={{
                                  width: `${item.score}%`
                                }}
                              />

                            </div>

                          </div>

                        </td>

                        <td>
                          <span className="status-badge">
                            {item.rating}
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

export default Performance;