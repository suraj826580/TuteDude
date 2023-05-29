import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Friends_Who_Enrolled from "../pages/Friends_Who_Enrolled";
import Page_Not_Found from "./Page_Not_Found";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/enrolled" element={<Friends_Who_Enrolled />} />
      <Route path="*" element={<Page_Not_Found />} />
    </Routes>
  );
};

export default MainRoutes;
