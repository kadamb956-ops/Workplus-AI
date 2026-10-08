import React from "react";

function Chart({ title = "Performance Overview" }) {
  return (
    <div className="chart-card">

      <h3>{title}</h3>

      <div className="chart-placeholder">
        <div className="chart-bar" style={{ height: "60%" }}>
          Jan
        </div>

        <div className="chart-bar" style={{ height: "80%" }}>
          Feb
        </div>

        <div className="chart-bar" style={{ height: "50%" }}>
          Mar
        </div>

        <div className="chart-bar" style={{ height: "90%" }}>
          Apr
        </div>

        <div className="chart-bar" style={{ height: "70%" }}>
          May
        </div>

        <div className="chart-bar" style={{ height: "85%" }}>
          Jun
        </div>
      </div>

    </div>
  );
}

export default Chart;