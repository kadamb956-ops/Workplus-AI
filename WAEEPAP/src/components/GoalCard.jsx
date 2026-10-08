import React from "react";

function GoalCard({ goal }) {
  return (
    <div className="card">

      <h3>
        {goal?.title || "Goal"}
      </h3>

      <p>
        Description: {goal?.description || "N/A"}
      </p>

      <p>
        Status: {goal?.status || "Pending"}
      </p>

      <p>
        Progress: {goal?.progress || 0}%
      </p>

    </div>
  );
}

export default GoalCard;
