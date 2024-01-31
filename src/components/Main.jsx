import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="main">
      <Sidebar />
      <div className="content">
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
};

export default Main;
