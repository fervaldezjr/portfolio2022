import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import portfolioTheme from "./themes/portfolio";
import "@fontsource/inter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={portfolioTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
