import React from "react";
import Header from "../header";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default Layout;
