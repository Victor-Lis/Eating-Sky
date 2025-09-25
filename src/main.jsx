import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Plate from "./pages/Plate.jsx"; // Importe o componente Plate
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="plate/:id" element={<Plate />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
