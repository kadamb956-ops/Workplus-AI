import React from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PerformanceCard from "../components/PerformanceCard";
import Chart from "../components/Chart";

function Dashboard() {
  return (
    <div>

      <Navbar />

      <div className="layout">

        <Sidebar />

        <main className="main-content">

          <h1>Dashboard</h1>

          <div className="card-grid">

            <PerformanceCard
              title="Total Employees"
              value="120"
            />

            <PerformanceCard
              title="Average Performance"
              value="82%"
            />

            <PerformanceCard
              title="Completed Goals"
              value="76%"
            />

            <PerformanceCard
              title="Pending Tasks"
              value="24"
            />

          </div>

          <Chart title="Employee Performance" />

          <div className="ai-box">

            <h2>AI Insight</h2>

            <p>
              Overall employee performance is stable.
              Focus on employees with declining performance
              to improve productivity.
            </p>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;