import React from "react";
import ReactDOM from "react-dom/client"; // Use a nova API do React 18
import App from "./App";
import { ClonesProvider } from "./context/ClonesContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <ClonesProvider>
      <App />
    </ClonesProvider>
  </React.StrictMode>
);
