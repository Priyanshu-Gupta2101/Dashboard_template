import { useEffect, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { LoadingState, FailureState } from "./ui/state";

const CardList = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("loading");
  const { height: windowHeight } = useWindowSize();

  const fetchData = async () => {
    try {
      setStatus("loading");
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/portfolio`
      );
      const result = await response.json();
      setData(result);
      setStatus("success");
    } catch (error) {
      console.error("Error fetching data:", error);
      setStatus("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const containerHeight = Math.max(300, windowHeight - 300);

  if (status === "loading") {
    return <LoadingState />;
  }

  if (status === "error") {
    return <FailureState onRetry={fetchData} />;
  }

  return (
    <div
      className="space-y-4 p-6 overflow-y-auto mt-5"
      style={{ maxHeight: `${containerHeight}px` }}
    >
      {data.map((item) => (
        <div
          key={item.id}
          className="flex bg-white shadow rounded-lg overflow-hidden w-full max-w-4xl"
        >
          {/* Image Container */}
          <div className="relative w-32 sm:w-48">
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between flex-1 p-3 sm:p-4">
            <div>
              {/* Title */}
              <h2 className="text-sm sm:text-lg font-semibold line-clamp-2">
                {item.title}
              </h2>

              {/* Description - Hidden on mobile */}
              <p className="hidden sm:block text-gray-500 text-sm mt-2 line-clamp-2">
                {item.description}
              </p>

              {/* Author Info */}
              <p className="text-orange-500 text-xs sm:text-sm mt-1 sm:mt-2">
                {item.author}
              </p>
              <p className="text-gray-400 text-[10px] sm:text-xs">
                {item["co-author"]}
              </p>
            </div>

            {/* Add to Cart Button */}
            <div className="flex justify-end mt-2">
              <button className="px-3 py-1 sm:px-4 sm:py-2 text-sm text-white font-semibold rounded-lg bg-gradient-to-r from-[#F39519] to-[#FFCD67]">
                <span className="hidden sm:inline">Add to Cart</span>
                <span className="sm:hidden">A</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
