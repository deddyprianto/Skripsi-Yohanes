import React from "react";
import Heading from "components/componentDash/MainPage/DashboardChlCp/Heading";
import Note from "components/componentDash/MainPage/DashboardChlCp/Note";

const DashboardPages = () => {
  return (
    <div className="bg-indigo-50 w-full h-screen overflow-y-auto ">
      <Heading />
      <Note />
    </div>
  );
};

export default DashboardPages;
