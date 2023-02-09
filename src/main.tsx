import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeContextProvider } from "./contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
