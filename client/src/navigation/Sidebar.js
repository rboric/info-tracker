import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sidebar } from "../css/classes";

export default function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div
        className={
          isSidebarOpen ? sidebar.sidebar.expanded : sidebar.sidebar.collapsed
        }
      >
        {isSidebarOpen ? (
          <ul className="mt-4">
            <Link to="/dashboard">
              <li className={sidebar.li.expanded}>
                Dashboard
                <i className="fa-solid fa-chalkboard"></i>
              </li>
            </Link>
            <li className={sidebar.li.expanded}>
              Notifications
              <i className="fa-solid fa-bell"></i>
            </li>
            <Link to="/generator">
              <li className={sidebar.li.expanded}>
                Generator
                <i className="fa-solid fa-lock"></i>
              </li>
            </Link>
            <li className={sidebar.li.expanded}>
              Search
              <i className="fa-solid fa-magnifying-glass"></i>
            </li>
            <li className={sidebar.li.expanded}>
              Trash
              <i className="fa-solid fa-trash"></i>
            </li>
            <li className={sidebar.li.expanded}>
              Settings
              <i className="fa-solid fa-gear"></i>
            </li>
            <li className={sidebar.li.expanded}>
              Terms of Service
              <i className="fa-solid fa-paper-plane"></i>
            </li>
          </ul>
        ) : (
          <ul className="mt-4">
            <Link to="/dashboard">
              <li className={sidebar.li.collapsed}>
                <i className="fa-solid fa-chalkboard"></i>
              </li>
            </Link>
            <li className={sidebar.li.collapsed}>
              <i className="fa-solid fa-bell"></i>
            </li>
            <Link to="/generator">
              <li className={sidebar.li.collapsed}>
                <i className="fa-solid fa-lock"></i>
              </li>
            </Link>
            <li className={sidebar.li.collapsed}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </li>
            <li className={sidebar.li.collapsed}>
              <i className="fa-solid fa-trash"></i>
            </li>
            <li className={sidebar.li.collapsed}>
              <i className="fa-solid fa-gear"></i>
            </li>
            <li className={sidebar.li.collapsed}>
              <i className="fa-solid fa-paper-plane"></i>
            </li>
          </ul>
        )}
        <button
          className="mt-auto bg-dark-500 hover:bg-dark-600 text-dark-900 py-2 rounded"
          onClick={toggleSidebar}
        >
          <i
            className={`fa-solid fa-chevron-${
              isSidebarOpen ? "left" : "right"
            }`}
          ></i>
        </button>
      </div>
    </>
  );
}
