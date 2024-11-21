import React from "react";
import PaginationWithControls from "./components/PaginationWithControls";
import SimplePagination from "./components/SimplePagination";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simplepagination" element={<SimplePagination />} />
        <Route
          path="/paginationwithcontrols"
          element={<PaginationWithControls />}
        />
      </Routes>
    </div>
  );
}

export default App;
