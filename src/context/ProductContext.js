import React, { createContext, useState, useEffect } from "react";

// Create the Product Context
export const ProductContext = createContext();

// Create the Product Provider to manage and provide the product list
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the product data from the local JSON file
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Log the fetched data.
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
