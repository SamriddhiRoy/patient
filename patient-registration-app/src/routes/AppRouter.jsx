// src/routes/AppRouter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import PatientData from "./pages/PatientData";
import OperationTheater from "./pages/OperationTheater";
import Reports from "./pages/Reports";

const AppRouter = () => {
  return (
    <Routes> {/* No BrowserRouter here! */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/patient-data" element={<PatientData />} />
        <Route path="/operation-theater" element={<OperationTheater />} />
        <Route path="/reports" element={<Reports />} />
    </Routes>
  );
};

export default AppRouter;



