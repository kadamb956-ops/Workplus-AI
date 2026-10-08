import { useEffect, useState } from "react";
import api from "../utils/axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    departmentId: ""
  });

  const [loading, setLoading] = useState(false);

  const loadEmployees = async () => {
    try {
      const response = await api.get("/employees");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error loading employees:", error);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const addEmployee = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const employeeData = {
        name: form.name,
        email: form.email,
        position: form.position,
        department: form.departmentId
          ? { id: Number(form.departmentId) }
          : null
      };

      await api.post("/employees", employeeData);

      alert("Employee added successfully!");

      setForm({
        name: "",
        email: "",
        position: "",
        departmentId: ""
      });

      setShowForm(false);
      loadEmployees();

    } catch (error) {
      console.error(error);
      alert("Failed to add employee");
    } finally {
      setLoading(false);
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
              <h1>Employees</h1>
              <p>Manage your organization employees</p>
            </div>

            <button
              className="primary-btn"
              onClick={() => setShowForm(!showForm)}
            >
              + Add Employee
            </button>
          </div>

          {showForm && (
            <div className="form-card">

              <h2>Add Employee</h2>

              <form onSubmit={addEmployee}>

                <div className="form-grid">

                  <div>
                    <label>Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter employee name"
                      required
                    />
                  </div>

                  <div>
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter email"
                      required
                    />
                  </div>

                  <div>
                    <label>Position</label>
                    <input
                      name="position"
                      value={form.position}
                      onChange={handleChange}
                      placeholder="e.g. Java Developer"
                      required
                    />
                  </div>

                  <div>
                    <label>Department ID</label>
                    <input
                      type="number"
                      name="departmentId"
                      value={form.departmentId}
                      onChange={handleChange}
                      placeholder="e.g. 1"
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
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save Employee"}
                  </button>

                </div>

              </form>

            </div>
          )}

          <div className="table-card">

            <div className="table-header">
              <h2>Employee List</h2>

              <span>
                {employees.length} Employees
              </span>
            </div>

            {employees.length === 0 ? (

              <div className="empty-state">
                <h3>No Employees Found</h3>
                <p>Click "+ Add Employee" to create your first employee.</p>
              </div>

            ) : (

              <div className="table-wrapper">

                <table>

                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Position</th>
                      <th>Department</th>
                    </tr>
                  </thead>

                  <tbody>

                    {employees.map((employee) => (

                      <tr key={employee.id}>

                        <td>#{employee.id}</td>

                        <td>
                          <strong>{employee.name}</strong>
                        </td>

                        <td>{employee.email}</td>

                        <td>{employee.position}</td>

                        <td>
                          {employee.department?.name || "Not Assigned"}
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

export default Employees;