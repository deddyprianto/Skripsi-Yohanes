import React, { useEffect, Suspense, lazy } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import("pages/HomePage"));
const DashboardPage = lazy(() => import("pages/DashBoardPage"));
const ProtectedRoute = lazy(() => import("pages/ProtectedRoute"));
const TablePage = lazy(() => import("pages/TablePage"));
const SharedLayout = lazy(() => import("pages/SharedLayout"));
// const Chat = lazy(() => import("Chat"));
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  // window.onbeforeunload = (event) => {
  //   let message =
  //     "Important: Please click on 'Save' button to leave this page.";
  //   if (typeof event == "undefined") {
  //     event = window.event;
  //   }
  //   if (event) {
  //     event.returnValue = message;
  //     purgeStoredState(persistConfig);
  //   }
  //   return alert(message);
  // };

  return (
    <div>
      <Suspense
        fallback={
          <div className="text-rose-500 bg-[#EEF3F9] h-screen w-screen font-bold flex justify-center items-center">
            Page is Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route path="main" element={<DashboardPage />} />
            <Route path="tabledata" element={<TablePage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
