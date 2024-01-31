// Importing required icons
import { NavLink, Link } from "react-router-dom";
import {
  IoHomeOutline,
  IoClipboardOutline,
  IoGridOutline,
  IoCardOutline,
  IoColorPaletteOutline,
  IoWalletOutline,
} from "react-icons/io5";
import { BsTruck, BsGraphUp, BsPlug } from "react-icons/bs";
import { CiBullhorn, CiDiscount1 } from "react-icons/ci";
import { GoGear } from "react-icons/go";
import { LuUsers } from "react-icons/lu";

// Component to render the menu
const Menu = () => {
  // Array of link data
  const linksData = [
    { to: "/", text: "home", icon: <IoHomeOutline /> },
    { to: "/orders", text: "orders", icon: <IoClipboardOutline /> },
    { to: "/products", text: "products", icon: <IoGridOutline /> },
    { to: "/delivery", text: "delivery", icon: <BsTruck /> },
    { to: "/marketing", text: "marketing", icon: <CiBullhorn /> },
    { to: "/analytics", text: "analytics", icon: <BsGraphUp /> },
    { to: "/payments", text: "payments", icon: <IoCardOutline /> },
    { to: "/tools", text: "tools", icon: <GoGear /> },
    { to: "/discount", text: "discount", icon: <CiDiscount1 /> },
    { to: "/audience", text: "audience", icon: <LuUsers /> },
    { to: "/appearance", text: "appearance", icon: <IoColorPaletteOutline /> },
    { to: "/plugins", text: "plugins", icon: <BsPlug /> },
  ];

  // JSX to render the menu
  return (
    <>
      <ul className="navbar">
        {linksData.map((link, index) => (
          <li className="nav-item" key={index}>
            <NavLink to={link.to} className="nav-link">
              {link.icon}
              <span>{link.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <Link to="/wallet" className="wallet">
        <div className="icon">
          <IoWalletOutline />
        </div>
        <div className="text">
          <p>Available credits</p>
          <h6>222.10</h6>
        </div>
      </Link>
    </>
  );
};

// Exporting the Menu component
export default Menu;
