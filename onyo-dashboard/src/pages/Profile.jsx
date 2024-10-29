import { useState, useEffect } from "react";
import { Camera } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { LoadingState, FailureState } from "../components/ui/state";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [status, setStatus] = useState("loading");

  const fetchProfileData = async () => {
    try {
      setStatus("loading");
      const response = await fetch("http://localhost:8000/api/profile");
      const data = await response.json();
      setProfileData(data);
      setStatus("success");
    } catch (error) {
      console.error("Error fetching profile data:", error);
      setStatus("error");
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const updateNotificationSettings = async (type, value) => {
    try {
      await fetch("http://localhost:8000/api/profile/notifications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          [type]: value,
        }),
      });
    } catch (error) {
      console.error("Error updating notifications:", error);
    }
  };

  if (status === "loading") {
    return <LoadingState />;
  }

  if (status === "error") {
    return <FailureState onRetry={fetchProfileData} />;
  }

  const { personalInfo, accountSettings, notifications } = profileData;

  return (
    <div className="p-6 pb-20 max-w-4xl mx-auto">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <img
                  src={personalInfo.profilePicture}
                  alt="Profile"
                  className="rounded-full w-40 h-40 object-cover"
                />
                <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg">
                  <Camera size={16} />
                </button>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                Change Photo
              </button>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  className="p-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  defaultValue={personalInfo.firstName}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  className="p-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  defaultValue={personalInfo.lastName}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="p-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  defaultValue={personalInfo.email}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  className="p-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  defaultValue={personalInfo.phone}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Language
                </label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  defaultValue={accountSettings.language}
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Time Zone
                </label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  defaultValue={accountSettings.timeZone}
                >
                  <option>UTC-5 (Eastern Time)</option>
                  <option>UTC-8 (Pacific Time)</option>
                  <option>UTC+0 (London)</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Email Notifications
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={notifications.emailNotifications}
                    onChange={async (e) => {
                      setProfileData({
                        ...profileData,
                        notifications: {
                          ...notifications,
                          emailNotifications: e.target.checked,
                        },
                      });
                      await updateNotificationSettings(
                        "emailNotifications",
                        e.target.checked
                      );
                    }}
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-[#DF5532] relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className={`text-xs font-bold ${
                          notifications.emailNotifications
                            ? "text-white"
                            : "text-gray-600"
                        }`}
                      >
                        {notifications.emailNotifications ? "ON" : "OFF"}
                      </span>
                    </div>
                  </div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Project Updates
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={notifications.projectUpdates}
                    onChange={async (e) => {
                      setProfileData({
                        ...profileData,
                        notifications: {
                          ...notifications,
                          projectUpdates: e.target.checked,
                        },
                      });
                      await updateNotificationSettings(
                        "projectUpdates",
                        e.target.checked
                      );
                    }}
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-[#DF5532] relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className={`text-xs font-bold ${
                          notifications.projectUpdates
                            ? "text-white"
                            : "text-gray-600"
                        }`}
                      >
                        {notifications.projectUpdates ? "ON" : "OFF"}
                      </span>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
