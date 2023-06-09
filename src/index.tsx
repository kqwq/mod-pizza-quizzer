import React from "react";
import { createRoot } from "react-dom/client";

// Main layout containing everything
import MainLayout from "./components/MainLayout";
import { IngredientsProvider } from "./util/Provider";

// Global CSS
import './styles/global.css'

function App() {
  return <React.StrictMode>
    <IngredientsProvider>
      <MainLayout />
    </IngredientsProvider>
  </React.StrictMode>

}

const container = document.getElementById('app') as HTMLElement
const root = createRoot(container)
root.render(<App />)
