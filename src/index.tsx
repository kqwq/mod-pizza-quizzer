import React from "react";
import ReactDOM from "react-dom";

// Main layout containing everything
import MainLayout from "./components/MainLayout";

// Global CSS
import './styles/global.css'

function App() {
  return <MainLayout />
}

ReactDOM.render(<App />, document.getElementById('root'));
