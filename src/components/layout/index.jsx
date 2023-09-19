import React, { useState } from "react";
import Header from "../header";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <React.Fragment>
      <Header openSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar sidebarOpen={sidebarOpen} />
      <main>
        <div className="main_container">
          <Outlet />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Layout;
