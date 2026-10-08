import React from "react";
import { useNavigate } from "react-router-dom";
import { getUser, logoutUser } from "../utils/auth";

function Navbar() {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>WorkPulse AI</h2>
      </div>

      <div className="navbar-right">
        <span>
          Welcome, {user?.name || "User"}
        </span>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;