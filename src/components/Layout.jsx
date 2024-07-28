import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="bg-white dark:bg-gray-900 h-screen flex">
      <Sidebar />
      <main className="bg-orange-100 dark:bg-gray-600 py-5 px-7 m-5 rounded-md w-full border border-orange-400 dark:border-gray-400 overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
