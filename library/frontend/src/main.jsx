import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import "./index.css";

import Login from "./sections/login";

function Dashboard() {
  return (
    <h1 className="text-4xl font-bold text-center mt-20">
      Dashboard Page
    </h1>
  );
}

createRoot(document.getElementById("root")).render(

  <StrictMode>

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>

    </BrowserRouter>

  </StrictMode>
);