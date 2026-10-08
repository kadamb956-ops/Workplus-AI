import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import api from "../utils/axios";

function AIInsights() {

  const [employeeId, setEmployeeId] = useState("");
  const [insight, setInsight] = useState("");
  const [loading, setLoading] = useState(false);

  const getInsight = async () => {

    if (!employeeId) {
      alert("Enter Employee ID");
      return;
    }

    setLoading(true);
    setInsight("");

    try {

      const response = await api.get(
        `/ai/insights/${employeeId}`
      );

      setInsight(
        response.data.insight ||
        "No AI insight available."
      );

    } catch (error) {

      setInsight(
        "Unable to generate AI insight."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div>

      <Navbar />

      <div className="layout">

        <Sidebar />

        <main className="main-content">

          <h1>AI Insights</h1>

          <div className="card">

            <h2>
              Employee AI Analysis
            </h2>

            <input
              type="number"
              placeholder="Enter Employee ID"
              value={employeeId}
              onChange={(e) =>
                setEmployeeId(e.target.value)
              }
            />

            <button onClick={getInsight}>
              {loading
                ? "Generating..."
                : "Generate AI Insight"}
            </button>

          </div>

          {insight && (

            <div className="ai-box">

              <h2>
                AI Recommendation
              </h2>

              <p>
                {insight}
              </p>

            </div>

          )}

        </main>

      </div>

    </div>
  );
}

export default AIInsights;