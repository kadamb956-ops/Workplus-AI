import React from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PerformanceCard from "../components/PerformanceCard";
import Chart from "../components/Chart";

function Analytics() {

  return (
    <div>

      <Navbar />

      <div className="layout">

        <Sidebar />

        <main className="main-content">

          <h1>Analytics</h1>

          <div className="card-grid">

            <PerformanceCard
              title="Productivity"
              value="87%"
            />

            <PerformanceCard
              title="Employee Engagement"
              value="81%"
            />

            <PerformanceCard
              title="Goal Completion"
              value="76%"
            />

            <PerformanceCard
              title="Task Completion"
              value="89%"
            />

          </div>

          <Chart title="Performance Analytics" />

          <Chart title="Productivity Trend" />

        </main>

      </div>

    </div>
  );
}

export default Analytics;