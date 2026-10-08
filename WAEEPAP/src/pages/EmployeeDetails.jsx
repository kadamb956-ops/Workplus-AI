import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";
import api from "../utils/axios";

function EmployeeDetails() {

  const { id } = useParams();

  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchEmployee = async () => {

      try {

        const response = await api.get(
          `/employees/${id}`
        );

        setEmployee(response.data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    fetchEmployee();

  }, [id]);

  return (
    <div>

      <Navbar />

      <div className="layout">

        <Sidebar />

        <main className="main-content">

          <h1>Employee Details</h1>

          {loading && <Loader />}

          {!loading && employee && (

            <div className="card">

              <h2>
                {employee.name}
              </h2>

              <p>
                Email: {employee.email}
              </p>

              <p>
                Department: {employee.department}
              </p>

              <p>
                Position: {employee.position}
              </p>

            </div>

          )}

        </main>

      </div>

    </div>
  );
}

export default EmployeeDetails;