import { useState } from "react";
import filterIcon from "../assets/filter.svg";
import filterWhiteIcon from "../assets/filter_white.svg";
import searchIcon from "../assets/search.svg";
import CardList from "../components/CardList";

const Portfolio = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [activeTab, setActiveTab] = useState("project"); // Add state for active tab

  return (
    <div className="md:p-6 relative">
      {/* Title */}
      <div className="bg-white pb-4 pl-4 pr-4 md:p-6 rounded-lg">
        <div>
          <h1 className="hidden md:block text-xl md:text-2xl font-bold mb-2 md:mb-4">
            Portfolio
          </h1>

          {/* Subheader with Tabs and Filter/Search */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4">
            {/* Tabs */}
            <div className="hidden md:flex items-center space-x-9 md:mb-0 border-b w-2/3">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab("project")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "project"
                      ? "border-[#DF5532] text-[#DF5532]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Project
                </button>
                <button
                  onClick={() => setActiveTab("saved")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "saved"
                      ? "border-[#DF5532] text-[#DF5532]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Saved
                </button>
                <button
                  onClick={() => setActiveTab("shared")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "shared"
                      ? "border-[#DF5532] text-[#DF5532]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Shared
                </button>
                <button
                  onClick={() => setActiveTab("achievement")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "achievement"
                      ? "border-[#DF5532] text-[#DF5532]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Achievement
                </button>
              </nav>
            </div>

            {/* Filter and Search */}
            <div className="flex items-center space-x-4 justify-between w-full md:w-auto">
              {/* Filter Button (visible on larger screens) */}
              <button className="hidden md:flex items-center space-x-4 text-gray-600">
                <img src={filterIcon} alt="Filter" className="h-5 w-5 mr-2" />
                Filter
              </button>

              {/* Search Bar */}
              <div className="flex p-2 items-center text-gray-500 rounded-lg border-2 border-gray-200 w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search a project"
                  className="p-2 px-4 placeholder-gray-500 focus:outline-none w-full"
                />
                <button className="p-2 bg-[#DF5532] rounded-xl">
                  <img src={searchIcon} alt="Search" className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <CardList />
      </div>

      {/* Mobile View: Filter Button */}
      <button className="md:hidden flex items-center justify-center bg-[#DF5532] text-white rounded-2xl py-2 px-4 fixed bottom-24 left-1/2 transform -translate-x-1/2 shadow-lg">
        <img src={filterWhiteIcon} alt="Filter" className="h-5 w-5 mr-2" />
        Filter
      </button>
    </div>
  );
};

export default Portfolio;
