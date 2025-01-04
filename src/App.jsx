import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import PageOne from "./PageOne.jsx";
import PageTwo from "./PageTwo.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/one" element={<PageOne />} />
      <Route path="/two" element={<PageTwo />} />
    </Routes>
  );
};

export default App;
