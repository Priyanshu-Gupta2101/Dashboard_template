import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import Inputs from "./pages/Inputs";
import Profile from "./pages/Profile";
import FooterNavbar from "./components/FooterNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Hide Sidebar on small screens */}
        <div className="hidden md:flex">
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 bg-gray-100 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/inputs" element={<Inputs />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </main>

          {/* Show FooterNavbar only on small screens */}
          <div className="md:hidden">
            <FooterNavbar />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
