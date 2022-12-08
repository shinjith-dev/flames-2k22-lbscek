import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Events from "./pages/Events";
import Home from "./pages/Home";
import "./style.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
