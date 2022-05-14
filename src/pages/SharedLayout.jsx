import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "components/componentDash/Sidebar";

const SharedLayout = ({ login }) => {
  return (
    <div className="grid grid-cols-colCustom w-screen h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
