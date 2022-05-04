import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Home } from "./pages/Home";
import ImcCalculus from "../pages/imcCalculus/ImcCalculus";
import Register from "../pages/register/Register";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/imc" element={<ImcCalculus />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}