import React, { createContext, useContext, useEffect, useState } from "react";
// import { mockCartData } from "../apis/mock-data";
import { getProducts } from '../apis/getAPIs';
// Tạo context
const ProductContext = createContext();

// Tạo provider
export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isExisting = prevCart.some((item) => item.id === product.id);
      if (isExisting) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: product.quantity }];
    });
  };
  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        console.log(data, "??????");
        setProducts(data);
      } catch (error) {
        console.error("Error ??????? products:", error);
      }
    };
    console.log("!!!!!");
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        cart,
        addToCart,
        updateCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Hook để sử dụng context
export const useProducts = () => useContext(ProductContext);
