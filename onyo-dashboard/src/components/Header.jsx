import { useState } from "react";
import { useLocation } from "react-router-dom";
import bell from "../assets/bell.svg";
import bellOrange from "../assets/bell_orange.svg";
import downArrow from "../assets/down-arrow.svg";
import shoppingIcon from "../assets/shopping.svg";

const Header = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState("Project");

  const handleTabClick = (tab) => setSelectedTab(tab);

  // Mapping routes to titles
  const routeTitles = {
    "/": "Dashboard",
    "/portfolio": "Portfolio",
    "/inputs": "Inputs",
    "/profile": "Profile",
  };

  // Determine the current title based on the route
  const currentTitle = routeTitles[location.pathname] || "Dashboard";

  return (
    <>
      {/* Mobile View */}
      <div className="block md:hidden">
        <header className="bg-white shadow-sm px-5 py-4 md:px-6 md:py-5">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl md:text-2xl font-semibold">
              {currentTitle}
            </h1>
            <div className="flex items-center space-x-4">
              <img
                src={shoppingIcon}
                alt="Shopping Cart"
                className="h-6 w-6 text-[#DF5532]"
              />
              <img
                src={bellOrange}
                alt="Notifications"
                className="h-6 w-6 text-[#DF5532]"
              />
            </div>
          </div>

          {/* Subheader Tabs, shown only on /portfolio */}
          {location.pathname === "/portfolio" && (
            <>
              <div className="flex justify-around items-center space-x-6 relative mt-10 m-2">
                {["Project", "Saved", "Shared", "Achievement"].map((tab) => (
                  <div key={tab} className="relative">
                    <button
                      className={`py-2 text-sm md:text-base font-semibold ${
                        selectedTab === tab ? "text-[#DF5532]" : "text-gray-600"
                      }`}
                      onClick={() => handleTabClick(tab)}
                    >
                      {tab}
                    </button>
                    {selectedTab === tab && (
                      <div
                        className="absolute -bottom-2.5 -left-4 h-0.5 bg-[#DF5532] transition-all duration-300"
                        style={{ width: "calc(100% + 40px)" }}
                      ></div>
                    )}
                  </div>
                ))}
              </div>

              <div className="w-full border-b border-gray-200"></div>
            </>
          )}
        </header>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
          <div className="text-xl font-semibold"></div>
          <div className="flex items-center space-x-6">
            <button className="flex items-center justify-center">
              <img
                src={bell}
                alt="Notifications"
                className="h-6 w-6 text-gray-600"
              />
            </button>
            <div className="flex items-center space-x-5">
              <img
                src="https://s3-alpha-sig.figma.com/img/ecaa/dbab/5358b1c4de8696613bd0b067440bec38?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oaA4ZGQAjmxrT5FfnkpH7--64qq6thRZyYpr0MVzibWOYsMq-WNT~UStTCTaanxMWWSHn7mmPIfbzxK5g9qwImDgLwa~D~muf-vxknhH9sHHzw3HHrAqk2vKPdC1wY9mVAOdLii~59Uhej3wT8vbYAyWVrGc-nTd3K28bl0ZcReA0mmQqvIDfoZCh1YNXJ50AuiND1n6j7Z~FEFzc6-RfPn~qWmsdbf8Fm6zx~UmEpW7mL~g0Z5l0BkARztT1vwvmZYYGXZ0OfH048pwQycLggo7E3gb9WMpQXJ8o3VyZgo~4aNhYoSOJeJD632LaGm90WSuRBrcyrj-xgaTSaHqBA__"
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="text-right">
                <p className="font-semibold text-sm">Lorem Ipsum</p>
                <p className="text-xs text-gray-500">Manager</p>
              </div>
              <button>
                <img
                  src={downArrow}
                  alt="Expand"
                  className="h-4 w-4 text-gray-600"
                />
              </button>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
