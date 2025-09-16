import React from "react";
import ReactDOM from "react-dom/client";
import MainApp from "./MainApp.jsx";
import "./index.css"; // <- CORRIGIDO: Importa o CSS fonte do Tailwind

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);