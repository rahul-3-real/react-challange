import { useLocation, Link } from "react-router-dom";
import { IoSearchOutline, IoDownloadOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
import { BiMessageSquareError } from "react-icons/bi";

const Navbar = () => {
  const location = useLocation();

  const linksData = [
    { to: "/", text: "home" },
    { to: "/orders", text: "orders" },
    { to: "/products", text: "products" },
    { to: "/delivery", text: "delivery" },
    { to: "/marketing", text: "marketing" },
    { to: "/analytics", text: "analytics" },
    { to: "/payments", text: "payments" },
    { to: "/tools", text: "tools" },
    { to: "/discount", text: "discount" },
    { to: "/audience", text: "audience" },
    { to: "/appearance", text: "appearance" },
    { to: "/plugins", text: "plugins" },
  ];

  // Find the link data based on the current URL
  const currentLink = linksData.find((link) => link.to === location.pathname);

  return (
    <header className="header">
      <div className="title">
        <h1>{currentLink ? currentLink.text : "Hello"}</h1>
      </div>
      <form action="" className="search-form">
        <IoSearchOutline />
        <input type="text" placeholder="Search features, tutorials, etc." />
      </form>
      <div className="actions">
        <Link to="/">
          <BiMessageSquareError />
          <span>Need help?</span>
        </Link>
        <button>
          <IoDownloadOutline />
        </button>
        <button>
          <HiBars3 />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
