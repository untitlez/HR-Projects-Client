import { BrowserRouter, Route, Routes } from "react-router-dom";
import HrHome from "./hr-project";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/hr" element={<HrHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
