import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import Join_Session_Page from "./Join_Session_Page";
import PageTwo from "./PageTwo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/securitycode" element={< Join_Session_Page />} />
      <Route path="/main_platform/:sessionCode" element={<PageTwo />} />
      {/* Catch-all route to redirect to the landing page */}
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
};

export default App;
