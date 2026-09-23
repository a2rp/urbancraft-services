import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./theme.css";
import "./index.css";

const baseUrl = import.meta.env.BASE_URL;

const basename = baseUrl === "/" ? "/" : baseUrl.replace(/\/$/, "");

createRoot(document.getElementById("root")).render(
    <>
        <BrowserRouter basename={basename}>
            <App />
        </BrowserRouter>
    </>,
);
