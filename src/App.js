import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "components/Home";
import Login from "components/Login";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default App;
