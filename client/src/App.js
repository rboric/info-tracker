import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Generator from "./views/Generator";
import Login from "./auth/Login";
import Sidebar from "./navigation/Sidebar";
import NotesRightSidebar from "./components/NotesRightSidebar";
import DashboardTabs from "./navigation/DashboardTabs";

function App() {
  const location = useLocation();
  const hideSidebarOnRoutes = ["/"];

  const showSidebar = !hideSidebarOnRoutes.includes(location.pathname);

  return (
    <>
      <div className="bg-dark-800 overflow-auto">
        {showSidebar && <Sidebar />}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          />
          <Route
            path="/generator"
            element={
              <>
                <Generator />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
