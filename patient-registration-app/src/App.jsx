import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopMenuBar from "./components/TopMenuBar";
import Dashboard from "./pages/Dashboard";
import PatientRegister from "./pages/patientDetails/PatientRegister";
import PatientData from "./pages/PatientData";
import OperationTheater from "./pages/OperationTheater";
import Reports from "./pages/Reports";



const App = () => {
  return (
    <Router>
      <TopMenuBar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patient-register" element={<PatientRegister />} />
        <Route path="/patient-data" element={<PatientData />} />
        <Route path="/operation-theater" element={<OperationTheater />} />
        <Route path="/reports" element={<Reports />} />
        
      
      </Routes>
    </Router>
  );
};

export default App;
