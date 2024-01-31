import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Main = () => {
  const [toggleDashboard, setToggleDashboard] = useState(true);

  // Handle Toggle
  const handleDasboardToggle = () => setToggleDashboard(!toggleDashboard);

  return (
    <main className="main">
      {toggleDashboard && <Sidebar />}
      <div className={`content ${toggleDashboard ? "active" : ""}`}>
        <Navbar handleDasboardToggle={handleDasboardToggle} />
        <Outlet />
      </div>
    </main>
  );
};

export default Main;
