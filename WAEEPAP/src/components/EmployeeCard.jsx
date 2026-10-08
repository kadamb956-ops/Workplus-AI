import React from "react";

function EmployeeCard({ employee }) {
  return (
    <div className="card">

      <h3>{employee?.name || "Employee"}</h3>

      <p>
        Email: {employee?.email || "N/A"}
      </p>

      <p>
        Department: {employee?.department || "N/A"}
      </p>

      <p>
        Position: {employee?.position || "N/A"}
      </p>

    </div>
  );
}

export default EmployeeCard;