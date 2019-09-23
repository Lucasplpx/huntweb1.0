import React from "react";
import "./style.css";

import Header from "./components/Header";
import Routes from "./routes";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes />
    </div>
  );
}
