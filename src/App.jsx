import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/one" element={<PageOne />} />
      <Route path="/two" element={<PageTwo />} />
      {/* Catch-all route to redirect to the landing page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
