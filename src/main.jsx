import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./_global.css";
import { TrackerProvider } from "./contexts/TrackerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TrackerProvider>
      <App />
    </TrackerProvider>
  </React.StrictMode>
);
