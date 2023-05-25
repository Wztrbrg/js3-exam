import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import Books from "./page/Books";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="books" element={<Books />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
