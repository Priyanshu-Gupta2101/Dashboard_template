import { useLocation } from "react-router-dom";
import home from "../assets/home.svg";
import portfolio from "../assets/portfolio.svg";
import inputs from "../assets/inputs.svg";
import profile from "../assets/profile.svg";

const FooterNavbar = () => {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home", icon: home },
    { path: "/portfolio", label: "Portfolio", icon: portfolio },
    { path: "/inputs", label: "Input", icon: inputs },
    { path: "/profile", label: "Profile", icon: profile },
  ];

  return (
    <footer className="w-full bg-white shadow-inner p-4 fixed bottom-0 flex justify-around items-center text-sm md:hidden">
      {links.map(({ path, label, icon }) => (
        <a
          key={path}
          href={path}
          className={`flex flex-col items-center ${
            location.pathname === path ? "text-orange-500" : "text-gray-500"
          }`}
        >
          <img
            src={icon}
            alt={label}
            className={`h-5 w-5 mb-1 ${
              location.pathname === path ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
          {label}
        </a>
      ))}
    </footer>
  );
};

export default FooterNavbar;
