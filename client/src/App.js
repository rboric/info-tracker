import Sidebar from "./navigation/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Generator from "./views/Generator";
import Login from "./auth/Login";

function App() {
  return (
    <>
      <div className="flex bg-dark-800 min-h-screen overflow-auto">
        <Sidebar />

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
