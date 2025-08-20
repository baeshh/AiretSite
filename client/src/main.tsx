import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set manual scroll restoration globally
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

createRoot(document.getElementById("root")!).render(<App />);
