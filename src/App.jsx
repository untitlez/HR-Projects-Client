import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./hr-project";
import AdminHome from "./hr-project/pages/admin";
import EmployeePage from "./hr-project/pages/employee";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/employee" element={<EmployeePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
