import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "./index.css";

// Importing out Theme Provider
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { CampaignProvider } from "./context/CampaignContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <CampaignProvider>
        <App />
      </CampaignProvider>
    </ThemeProvider>
  </React.StrictMode>
);
