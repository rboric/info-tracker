import React, { useState } from "react";

export default function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const class_sidebar_exp =
    "bg-dark-900 w-56 p-4 flex flex-col h-screen transition-all duration-200";
  const class_sidebar_col =
    "bg-dark-900 w-20 p-4 flex flex-col h-screen transition-all duration-200";

  const class_li_exp =
    "p-4 text-sm text-dark-300 hover:bg-dark-800 rounded-md transition duration-100 cursor-pointer flex items-center justify-between";
  const class_li_col =
    "p-4 text-sm text-dark-300 hover:bg-dark-800 rounded-md transition duration-100 cursor-pointer flex items-center justify-center";

  return (
    <>
      <div className={isSidebarOpen ? class_sidebar_exp : class_sidebar_col}>
        {isSidebarOpen ? (
          <ul className="mt-4">
            <li className={class_li_exp}>
              Dashboard
              <i class="fa-solid fa-chalkboard"></i>
            </li>
            <li className={class_li_exp}>
              Notifications
              <i class="fa-solid fa-bell"></i>
            </li>
            <li className={class_li_exp}>
              Generator
              <i class="fa-solid fa-lock"></i>
            </li>
            <li className={class_li_exp}>
              Search
              <i class="fa-solid fa-magnifying-glass"></i>
            </li>
            <li className={class_li_exp}>
              Trash
              <i class="fa-solid fa-trash"></i>
            </li>
            <li className={class_li_exp}>
              Settings
              <i class="fa-solid fa-gear"></i>
            </li>
            <li className={class_li_exp}>
              Terms of Service
              <i class="fa-solid fa-paper-plane"></i>
            </li>
          </ul>
        ) : (
          <ul className="mt-4">
            <li className={class_li_col}>
              <i class="fa-solid fa-chalkboard"></i>
            </li>
            <li className={class_li_col}>
              <i class="fa-solid fa-bell"></i>
            </li>
            <li className={class_li_col}>
              <i class="fa-solid fa-lock"></i>
            </li>
            <li className={class_li_col}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </li>
            <li className={class_li_col}>
              <i class="fa-solid fa-trash"></i>
            </li>
            <li className={class_li_col}>
              <i class="fa-solid fa-gear"></i>
            </li>
            <li className={class_li_col}>
              <i class="fa-solid fa-paper-plane"></i>
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
