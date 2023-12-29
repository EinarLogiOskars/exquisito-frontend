import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter } from "react-router-dom";

document.addEventListener("turbo:load", () => {
    const root = createRoot(
        document.body.appendChild(document.createElement("div"))
    );
    root.render(
        <ParallaxProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ParallaxProvider>
    );
});