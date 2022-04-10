import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Admin from "./components/Admin.Component";
import Editor from "./components/Editor.Component";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/editor" element={<Editor />} />
      <Route path="/" element={<Admin />} />
    </Routes>
  );
}

export default App;
