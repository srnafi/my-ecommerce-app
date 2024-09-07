import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ProductProvider } from "./context/ProductContext";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext"; // Ensure this path is correct
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <AuthProvider>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </AuthProvider>
);
