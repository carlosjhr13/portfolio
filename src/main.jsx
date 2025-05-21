import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';

import "./styles.css";
import { PortfolioApp } from "./PortfolioApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PortfolioApp />
      <Analytics />
    </BrowserRouter>
  </StrictMode>
);
