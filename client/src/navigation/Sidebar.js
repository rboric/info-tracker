import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sidebar } from "../css/classes";
import { removeTokenFromStorage } from "../context/storage";

export default function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const logout = async () => {
    removeTokenFromStorage();
    navigate("/");
  };

  return (
    <>
      <div
        onMouseEnter={() => {
          setSidebarOpen(true);
        }}
        onMouseLeave={() => {
          setSidebarOpen(false);
        }}
        className={
          isSidebarOpen ? sidebar.sidebar.expanded : sidebar.sidebar.collapsed
        }
      >
        {isSidebarOpen ? (
          <ul className="mt-4">
            <Link to="/dashboard">
              <li className={sidebar.li.expanded}>
                <i className="fa-solid fa-chalkboard"></i>
                <span className="text-xs whitespace-nowrap font-semibold ml-2">
                  Dashboard
                </span>
              </li>
            </Link>
            <li className={sidebar.li.expanded}>
              <i className="fa-solid fa-bell"></i>
              <span className="text-xs whitespace-nowrap font-semibold ml-2">
                Notifications
              </span>
            </li>
            <Link to="/generator">
              <li className={sidebar.li.expanded}>
                <i className="fa-solid fa-lock"></i>
                <p className="text-xs whitespace-nowrap font-semibold ml-2">
                  Generator
                </p>
              </li>
            </Link>
            <li className={sidebar.li.expanded}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <p className="text-xs whitespace-nowrap font-semibold ml-2">
                Search
              </p>
            </li>
            <li className={sidebar.li.expanded}>
              <i className="fa-solid fa-trash"></i>
              <p className="text-xs whitespace-nowrap font-semibold ml-2">
                Trash
              </p>
            </li>
            <li className={sidebar.li.expanded}>
              <i className="fa-solid fa-gear"></i>
              <p className="text-xs whitespace-nowrap font-semibold ml-2">
                Settings
              </p>
            </li>
            <li className={sidebar.li.exp_logout} onClick={logout}>
              <i className="fa-solid fa-right-from-bracket"></i>
              <p className="text-xs whitespace-nowrap font-semibold ml-2">
                Log out
              </p>
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
            <li className={sidebar.li.col_logout} onClick={logout}>
              <i className="fa-solid fa-right-from-bracket"></i>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
