import { Link } from "react-router-dom";
import { IoChevronDownSharp } from "react-icons/io5";

import Logo from "../static/images/logo.png";
import Menu from "./Menu";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="head">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="text">
          <h5>Nishyan</h5>
          <h6>Visit Store</h6>
        </div>
        <button>
          <IoChevronDownSharp />
        </button>
      </div>
      <Menu />
    </aside>
  );
};

export default Sidebar;
