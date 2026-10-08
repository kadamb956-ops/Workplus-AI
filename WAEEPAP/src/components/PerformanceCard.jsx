import React from "react";

function PerformanceCard({ title, value }) {
  return (
    <div className="performance-card">

      <h3>{title}</h3>

      <h2>{value}</h2>

    </div>
  );
}

export default PerformanceCard;