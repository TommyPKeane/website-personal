/**
 * Connector to HTML Page for rendering the React App
 *
 * See the `public/index.html` file for the HTML page setup.
 *
 * References:
 * - https://dev.to/cmcwebcode40/simple-react-dark-mode-with-scss-lae
 */
import React from "react";
import { createRoot, } from "react-dom";

import App from "./App.jsx";

const rootElement = document.getElementById("root",);

const root = createRoot(rootElement);

root.render(<App />);
