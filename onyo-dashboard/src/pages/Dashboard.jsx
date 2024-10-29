import {
  BarChart,
  LineChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { StatsCard, ChartCard } from "../components/ui/card";
import { useState, useEffect } from "react";
import { LoadingState, FailureState } from "../components/ui/state";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [status, setStatus] = useState("loading");

  const fetchDashboardData = async () => {
    try {
      setStatus("loading");
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/dashboard`
      );
      const data = await response.json();
      setDashboardData(data);
      setStatus("success");
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      setStatus("error");
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (status === "loading") {
    return <LoadingState />;
  }

  if (status === "error") {
    return <FailureState onRetry={fetchDashboardData} />;
  }

  const {
    performanceData,
    progressData,
    totalProjects,
    completedProjects,
    inProgress,
    achievementScore,
  } = dashboardData;

  return (
    <div className="lg2:h-[calc(100vh-80px)] overflow-y-auto p-4 pb-20 lg2:p-6">
      {/* Header Section */}
      <div className="bg-white p-4 md:p-6 space-y-6 rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="sm:block hidden text-xl lg2:text-2xl font-bold">
            Dashboard
          </h1>
          <div className="flex space-x-4">
            <select className="px-3 py-2 text-sm lg2:text-base border rounded-lg bg-white">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg2:grid-cols-2 gap-4 lg2:gap-6">
          <StatsCard
            title="Total Projects"
            value={totalProjects}
            change="+15.3% from last month"
          />
          <StatsCard
            title="Completed"
            value={completedProjects}
            change="+10.2% from last month"
          />
          <StatsCard
            title="In Progress"
            value={inProgress}
            change="4 due soon"
            changeColor="text-orange-500"
          />
          <StatsCard
            title="Achievement Score"
            value={`${achievementScore}%`}
            change="+5.2% from last month"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg2:grid-cols-2 gap-4 lg2:gap-6">
          <ChartCard title="Project Performance">
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" fill="#4CAF50" />
              <Bar dataKey="ongoing" fill="#FFA726" />
            </BarChart>
          </ChartCard>

          <ChartCard title="Weekly Progress">
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="progress" stroke="#2196F3" />
            </LineChart>
          </ChartCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
