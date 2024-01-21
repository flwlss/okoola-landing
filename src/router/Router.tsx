import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/okoola-landing/" element={<Home />} />
      <Route path="*" element={<Navigate to={"/okoola-landing/"} />} />
    </Routes>
  );
}
