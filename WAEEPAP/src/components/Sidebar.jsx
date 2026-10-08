import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h3>WorkPulse AI</h3>

      <NavLink to="/dashboard">
        Dashboard
      </NavLink>

      <NavLink to="/employees">
        Employees
      </NavLink>

      <NavLink to="/performance">
        Performance
      </NavLink>

      <NavLink to="/goals">
        Goals
      </NavLink>

      <NavLink to="/tasks">
        Tasks
      </NavLink>

      <NavLink to="/analytics">
        Analytics
      </NavLink>

      <NavLink to="/ai-insights">
        AI Insights
      </NavLink>

    </aside>
  );
}

export default Sidebar;