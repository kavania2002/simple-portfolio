import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ScreenSizeProvider } from "./contexts/ScreenSizeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ScreenSizeProvider>
      <App />
    </ScreenSizeProvider>
  </StrictMode>
);
