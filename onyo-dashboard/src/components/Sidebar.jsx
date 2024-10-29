import { useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import home from "../assets/home.svg";
import portfolio from "../assets/portfolio.svg";
import inputs from "../assets/inputs.svg";
import profile from "../assets/profile.svg";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { path: "/", label: "Dashboard", icon: home },
    { path: "/portfolio", label: "Portfolio", icon: portfolio },
    { path: "/inputs", label: "Inputs", icon: inputs },
    { path: "/profile", label: "Profile", icon: profile },
  ];

  return (
    <aside className="w-64 bg-[#DF5532] text-white flex flex-col p-4">
      <div className="flex items-center space-x-2 mb-6">
        <img src={logo} alt="Logo" className="h-8 w-8" />
        <span className="font-semibold text-lg">ONYO</span>
      </div>

      <nav className="flex flex-col space-y-2 mt-5">
        {links.map(({ path, label, icon }) => (
          <a
            key={path}
            href={path}
            className={`flex items-center p-2 rounded transition duration-300 ${
              location.pathname === path
                ? "bg-gradient-to-r from-[#FF7F50] to-[#DF5532] border"
                : "hover:bg-[#c94a2a]"
            }`}
          >
            <img src={icon} alt={label} className="h-6 w-6 mr-3 text-white" />
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
