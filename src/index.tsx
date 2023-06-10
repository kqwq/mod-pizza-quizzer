import React from "react";
import { createRoot } from "react-dom/client";

// Main layout containing everything
import MainLayout from "./components/MainLayout";
import { StateProvider } from "./util/Provider";

// Global CSS
import './styles/global.css'

function App() {
  return <React.StrictMode>
    <StateProvider>
      <MainLayout />
    </StateProvider>
  </React.StrictMode>

}

const container = document.getElementById('app') as HTMLElement
const root = createRoot(container)
root.render(<App />)
